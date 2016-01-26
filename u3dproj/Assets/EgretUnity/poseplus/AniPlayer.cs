using System;
using System.Collections.Generic;
using UnityEngine;

namespace FB.PosePlus
{


    //新的动画控制器，相比封闭的animator，建立一个更开放自由的模式
    public class AniPlayer : MonoBehaviour
    {
        public int tagid;
        void Start()
        {
            /*SetExtPlayer(mEffectMgr);//TODO:XiaoFan 测试用*/
            bPlayRunTime = true;
        }


        public List<FB.PosePlus.AniClip> clips;

        Dictionary<string, int> clipcache = null;
        public AniClip GetClip(string name)
        {
            if (clips == null || clips.Count == 0) return null;
            if (clipcache == null || clipcache.Count != clips.Count)
            {
                clipcache = new Dictionary<string, int>();
                for (int i = 0; i < clips.Count; i++)
                {
                    // if (clipcache.ContainsKey(clips[i].name))
                    clipcache[clips[i].name] = i;
                }
            }
            int igot = 0;
            if (clipcache.TryGetValue(name, out igot))
            {
                return clips[igot];
            }
            return null;
        }


        AniClip lastClip = null;//当前剪辑
        bool bPlayRunTime = false;

        int lastframe = -1; //当前帧

        int lastframeid = -1; //step，判断是否需要处理动画
        public int frameid//获取此值作为帧计时器
        {
            get
            {
                return lastframeid;
            }
        }

        bool bLooped = false;
        int startframe;
        int endframe;
        float _crossTimer = -1;
        float _crossTimerTotal = 0;
        Frame crossFrame = null; //用来混合用的帧

        public Frame frameNow
        {
            get;
            private set;
        }
        public void Play(AniClip clip, SubClip clipsub = null, float crosstimer = 0)
        {
            if (clipsub != null)
            {
                bLooped = clipsub.loop;
                startframe = (int)clipsub.startframe;
                endframe = (int)clipsub.endframe;
                if (_fps < 0)
                {
                    _fps = clip.fps;
                }
            }
            else if (clip != null)
            {
                bLooped = clip.loop;
                startframe = 0;
                endframe = (clip.aniFrameCount - 1);
                if (_fps < 0)
                {
                    _fps = clip.fps;
                }
            }
            if (crosstimer <= 0)
            {
                this._crossTimer = -1;
                crossFrame = null;

                lastClip = clip;
                lastframe = startframe;
                SetPose(clip, startframe, true);
                frameNow = lastClip.frames[lastframe];
            }
            else
            {

                if (lastClip != null && lastframe >= 0 && lastframe < lastClip.frames.Count)
                {
                    RecCrossFrame();
                    lastClip = clip;
                    lastframe = startframe;
                }
                else
                {
                    lastClip = clip;
                    lastframe = startframe;
                    SetPose(clip, startframe, true);
                    frameNow = lastClip.frames[lastframe];
                }
                this._crossTimerTotal = this._crossTimer = crosstimer;
            }

        }
        void RecCrossFrame()
        {
            if (this._crossTimer >= 0 && crossFrame != null)
            {
                Frame f = new Frame();

                float l = 1.0f - _crossTimer / _crossTimerTotal;
                crossFrame = Frame.Lerp(crossFrame, lastClip.frames[lastframe], l);
            }
            else
            {
                crossFrame = lastClip.frames[lastframe];
            }
        }
        float timer = 0;
        float _fps = -1;
        float pauseTimer = 0;
        public void _OnUpdate(float delta)
        {
            //帧推行
            if (lastClip == null)
                return;
            //打中暂停机制
            if (pauseframe > 0)
            {
                pauseTimer += delta;
                int pid = (int)((timer + pauseTimer) * _fps);
                if (pid - lastframeid >= pauseframe)
                {
                    pauseframe = 0;
                    pauseTimer = 0;
                }
                else
                {
                    return;
                }
            }

            timer += delta;

            bool crossend = false;
            if (_crossTimer >= 0)
            {
                _crossTimer -= delta;
                if (_crossTimer <= 0)
                    crossend = true;
            }

            int frameid = (int)(timer * _fps);//这里要用一个稳定的fps，就用播放的第一个动画的fps作为稳定fps
            if (frameid == lastframeid)
                return;

            if (frameid > lastframeid + 1)//增加一个限制，不准动画跳帧
            {
                frameid = lastframeid + 1;
                timer = (float)frameid / _fps;
            }
            lastframeid = frameid;





            //帧前行

            int frame = lastframe + 1;
            if (frame > endframe)
            {
                if (bLooped)
                {
                    frame = startframe;

                }
                else
                {
                    frame = endframe;

                }
            }


            //设置动作或者插值
            if (crossend)
            {
                crossFrame = null;
                SetPose(lastClip, frame, true);
                return;
            }
            if (_crossTimer >= 0)
            {
                //_crossTimer -= delta;
                //if (_crossTimer < 0)
                //{
                //    crossFrame = null;
                //    SetPose(lastClip, frame, true);
                //    return;
                //}
                if (crossFrame != null)
                {


                    float l = 1.0f - _crossTimer / _crossTimerTotal;
                    SetPoseLerp(crossFrame, lastClip.frames[frame], l);

                    lastframe = frame;
                    frameNow = lastClip.frames[frame];

                }
            }
            else
            {
                if (frame != lastframe)
                {
                    SetPose(lastClip, frame);
                    frameNow = lastClip.frames[frame];
                }
            }

            //更新角色闪烁

            if (flashTime > 0)
            {
                flashTime--;
                UpdateFlash();
            }
        }

        int transcode = -1;
        Transform[] trans = null;
        public void SetPose(AniClip clip, int frame, bool reset = false, Transform parent = null)
        {
            if (clip.bonehash != transcode)
            {
                trans = new Transform[clip.boneinfo.Count];
                for (int i = 0; i < clip.boneinfo.Count; i++)
                {
                    trans[i] = this.transform.Find(clip.boneinfo[i]);
                }
                transcode = clip.bonehash;
            }

            bool badd = false;

            if (lastClip == clip && !reset)
            {
                if (lastframe + 1 == frame) badd = transform;
                if (clip.loop && lastframe == clip.frames.Count - 1 && frame == 0)
                    badd = true;
            }

            for (int i = 0; i < trans.Length; i++)
            {
                if (trans[i] == null) continue;
                if (parent != null && parent != trans[i])
                {
                    if (trans[i].IsChildOf(parent) == false) continue;
                }
                clip.frames[frame].bonesinfo[i].UpdateTran(trans[i], badd);
            }



            lastClip = clip;
            lastframe = frame;

        }

        public void SetPoseLerp(Frame src, Frame dest, float lerp)
        {
            for (int i = 0; i < trans.Length; i++)
            {
                src.bonesinfo[i].UpdateTranLerp(trans[i], dest.bonesinfo[i], lerp);
            }

        }


        void Update()
        {
            if (bPlayRunTime)
            {
                _OnUpdate(Time.deltaTime);
            }

        }




        string curClipName;
        public void Play(string clip, string subclip, float cross)
        {
            if (string.IsNullOrEmpty(clip) == false)
            {

                var _clip = GetClip(clip);
                if (_clip == null)
                {
                    Debug.LogWarning("No clip:" + clip);
                    return;
                }
                SubClip _subclip = null;
                if (string.IsNullOrEmpty(subclip) == false)
                {
                    _subclip = _clip.GetSubClip(subclip);
                }

                //Debug.LogError("_clip = " + _clip);
                Play(_clip, _subclip, cross);
            }
        }


        //bool ispause;
        int pauseframe = 0;
        //int pausecount;
        public bool isPause
        {
            get
            {
                return pauseframe > 0;
            }
        }
        public void PlayPause(int frame)
        {
            pauseframe = frame;
            //ispause = true;
            //pausecount = 0;
        }

        Color flashColor;
        int flashTime;
        int flashSpeed;
        public void SetFlash(Color color, int time, int speed)
        {
            flashColor = color;
            flashTime = time;
            flashSpeed = speed;
            UpdateFlash();
        }

        void UpdateFlash()
        {
            Color nc = flashColor;
            if (flashTime > 0)
            {
                float lerp = ((float)(flashTime % flashSpeed)) / (float)(flashSpeed - 1);
                lerp = Mathf.Abs(1 - lerp * 2);
                nc.a = lerp;
            }

            var rs = this.gameObject.GetComponentsInChildren<SkinnedMeshRenderer>();
            foreach (var r in rs)
            {
                r.material.SetColor("_RimColor", nc);
            }
        }
    }
}
