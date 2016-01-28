using System;
using System.Collections.Generic;

using System.Text;
using UnityEditor;
using UnityEngine;


[CustomEditor(typeof(FB.PosePlus.AniPlayer))]
public class FBAni_Inspector : Editor
{

    //
    DateTime last = DateTime.Now;
    string newaniname = "";
    UnityEngine.Transform rootBone = null;

    void FillAniBoneInfo(Transform root, FB.PosePlus.AniPlayer controller, FB.PosePlus.AniClip ani)
    {
        string path = getPath(root, controller.transform);
        if (ani.boneinfo == null)
            ani.boneinfo = new List<string>();
        ani.boneinfo.Add(path);
        foreach (Transform t in root)
        {
            FillAniBoneInfo(t, controller, ani);
        }
    }
    string getPath(Transform _cur, Transform _base)
    {
        if (_base == _cur)
            throw new Exception("root bone is _cur tran.");
        string name = _cur.name;//hip
        while (_cur.parent != null)
        {
            if (_cur.parent == _base)
                break;
            _cur = _cur.parent;
            name = _cur.name + "/" + name;
        }
        return name;
    }

    bool bShowTree = false;
    bool baseinfo = false;
    public override void OnInspectorGUI()
    {
        //if (this.target == null) return;
        //baseinfo = GUILayout.Toggle(baseinfo, "查看基本信息");
        //if (baseinfo)
        //{
        base.OnInspectorGUI();
        //}


        //if (Application.isPlaying) return;

        var con = target as FB.PosePlus.AniPlayer;

        if (con == null) return;
        if (con.clips == null) con.clips = new List<FB.PosePlus.AniClip>();


        {


            foreach (var c in con.clips)
            {
                if (c == null) continue;
                GUILayout.BeginHorizontal();
                if (c.frames == null) continue;
                GUILayout.Label(c.name + "(" + (c.loop ? "loop" : "") + c.frames.Count + ")");
                if (GUILayout.Button("play", GUILayout.Width(150)))
                {

                    con.Play(c);
                    //con.Play();
                    bPlay = true;
                    //return;
                    //CloneAni(c);
                }
                if (GUILayout.Button("cross 0.2", GUILayout.Width(150)))
                {
                    con.Play(c, null, 0.2f);

                    bPlay = true;
                }

                //if(GUILayout.Button("export bin",GUILayout.Width(150)))
                //{
                //    string outpath=     Application.streamingAssetsPath+"/"+c.name+".fbani.bytes";
                //    using (System.IO.Stream s = System.IO.File.Create(outpath))
                //    {
                //        c.SaveTo(s);
                //    }
                //}
                GUILayout.EndHorizontal();
                GUILayout.BeginHorizontal();
                GUILayout.Space(40);
                GUILayout.BeginVertical();
                foreach (var sub in c.subclips)
                {
                    GUILayout.BeginHorizontal();
                    GUILayout.Label(sub.name + (sub.loop ? "[Loop]" : "") + "(" + (sub.endframe - sub.startframe + 1) + ")");
                    if (GUILayout.Button("play", GUILayout.Width(100)))
                    {

                        con.Play(c, sub);
                        //con.Play();
                        bPlay = true;
                        //return;
                        //CloneAni(c);
                    }
                    if (GUILayout.Button("cross 0.2", GUILayout.Width(100)))
                    {
                        con.Play(c, sub, 0.2f);

                        bPlay = true;
                    }
                    GUILayout.EndHorizontal();
                }
                GUILayout.EndVertical();
                GUILayout.EndHorizontal();

            }

        }
        {//动画控制
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("stopAni", GUILayout.Width(150)))
            {
                bPlay = false;
                //con.Stop();
            }
            if (GUILayout.Button("AddTime", GUILayout.Width(150)))
            {
                con._OnUpdate(0.04f);
            }
            GUILayout.EndHorizontal();
        }
        {//创建动画
            GUILayout.Space(7);
            GUILayout.Label("create new ani");
            GUILayout.BeginHorizontal();
            GUILayout.Label("name");
            newaniname = GUILayout.TextField(newaniname);

            rootBone = EditorGUILayout.ObjectField("root bone", rootBone, typeof(Transform), true) as Transform;
            if (string.IsNullOrEmpty(newaniname) == false )
            {
                if(rootBone != null)
                {
                    if (GUILayout.Button("create ani."))
                    {
                        var mesh = con.GetComponentInChildren<SkinnedMeshRenderer>().sharedMesh;
                        string path = AssetDatabase.GetAssetPath(mesh);
                        path = System.IO.Path.GetDirectoryName(path);
                        path += "/" + newaniname + ".fbani.asset";
                        if (UnityEditor.EditorUtility.DisplayDialog("realy?", "this will create anim in:" + path, "do it.", "forgot it."))
                        {
                            if (con.clips == null)
                            {
                                con.clips = new List<FB.PosePlus.AniClip>();
                            }

                            foreach (var c in con.clips)
                            {
                                if (c.name == newaniname + ".fbani")
                                {
                                    con.clips.Remove(c);
                                    break;
                                }
                            }
                            var obj = ScriptableObject.CreateInstance<FB.PosePlus.AniClip>();
                            FillAniBoneInfo(rootBone, con, obj);

                            List<Transform> trans = new List<Transform>();
                            foreach (var b in obj.boneinfo)
                            {
                                trans.Add(con.transform.Find(b));
                            }
                            obj.frames = new List<FB.PosePlus.Frame>();
                            obj.frames.Add(new FB.PosePlus.Frame(null, 0, trans));

                            AssetDatabase.CreateAsset(obj, path);

                            var ani = AssetDatabase.LoadAssetAtPath(path, typeof(FB.PosePlus.AniClip)) as FB.PosePlus.AniClip;
                            con.clips.Add(ani);
                        }
                    }                  
                }
                else
                {
//                     if (GUILayout.Button("create null."))
//                     {
//                         string path = AssetDatabase.GetAssetPath(Selection.activeObject);
//                         path = System.IO.Path.GetDirectoryName(path);
//                         path += "/" + newaniname + ".fbani.asset";
// 
//                         var obj = ScriptableObject.CreateInstance<FB.PosePlus.AniClip>();
//                         var f = new FB.PosePlus.Frame();
//                         f.box_key = true;
//                         f.dot_key = true;
//                         f.key = true;
//                         obj.frames = new List<FB.PosePlus.Frame>();
//                         obj.frames.Add(f);
// 
//                         AssetDatabase.CreateAsset(obj, path);
//                     }
                }
            }

            GUILayout.EndHorizontal();


            //if (GUILayout.Button("匹配所有动画的骨骼"))
            //{
            //    MatchBone();
            //}
        }
        if (bPlay)
        {
            DateTime _now = DateTime.Now;
            float delta = (float)(_now - last).TotalSeconds;
            last = _now;
            con._OnUpdate(delta);
            Repaint();
        }

    }
    bool bPlay = false;

    int calcbonehash(List<string> boneinfo)
    {
        string b = "";
        foreach (var bi in boneinfo)
        {
            b += bi + "|";
        }
        return b.GetHashCode();
    }
    //void MatchBone()
    //{

    //    var con = target as FB.PosePlus.AniPlayer;

    //    List<string> bones = con.clips[0].boneinfo;
    //    //foreach(var ani in con.clips)
    //    //{
    //    //    foreach(var b in ani.boneinfo)
    //    //    {
    //    //        if(bones.Contains(b)==false)
    //    //        {
    //    //            bones.Add(b);
    //    //        }
    //    //    }
    //    //}
    //    int hashfirst = calcbonehash(bones);
    //    foreach (var ani in con.clips)
    //    {
    //        int hash = calcbonehash(ani.boneinfo);
    //        if (hash != hashfirst)
    //        {
    //            Debug.LogWarning("动画：" + ani.name + "骨骼需要匹配");
    //            if (ani.MatchBone(con.clips[0]) == false)
    //                return;
    //            EditorUtility.SetDirty(ani);
    //        }
    //    }
    //}
    //TreeNode tree = null;
    //class TreeNode : List<TreeNode>
    //{
    //    public string aniname;
    //    public int playid;
    //    public string target = null;
    //    //public AniData data = null;
    //}
    //TreeNode BuildTree(FB.PosePlus.AnimConfig config)
    //{
    //    if (config == null && config.anims == null)
    //        return null;
    //    TreeNode tree = null;
    //    Dictionary<string, TreeNode> nodes = new Dictionary<string, TreeNode>();
    //    foreach (var a in config.anims)
    //    {
    //        nodes.Add(a.name, new TreeNode() { aniname = a.name });
    //    }

    //    foreach (var a in config.anims)
    //    {
    //        if (string.IsNullOrEmpty(a.parent))
    //        {
    //            tree = nodes[a.name];
    //            //rootani = a.name;

    //        }
    //        else
    //        {
    //            nodes[a.parent].Add(nodes[a.name]);
    //        }
    //        var ani = (target as FB.PosePlus.AniPlayer);
    //        nodes[a.name].playid = ani.GetPlayIndex(a.name);
    //        foreach (var t in ani.anitags)
    //        {
    //            if (t.key == a.name)
    //            {
    //                nodes[a.name].target = t.value.ToLower();
    //                break;
    //            }
    //        }

    //        //nodes[a.name].data = (target as AniEx).GetAniData(a.name);
    //    }
    //    return tree;
    //}


    //void FillTree(TreeNode root, TreeNode tree)
    //{
    //    var ani = target as FB.PosePlus.AniPlayer;
    //    EditorGUILayout.BeginHorizontal();
    //    {
    //        string name = tree.aniname;
    //        if (root == tree)
    //        {
    //            name = "<R>" + name;
    //        }
    //        GUILayout.Label(name, GUILayout.Width(75));
    //        //var vdata = EditorGUILayout.ObjectField(tree.data, typeof(AniData), false) as AniData;
    //        //if (vdata != tree.data)
    //        //{
    //        //    ani.SetAniData(vdata);

    //        //}

    //        if (GUILayout.Button("Play", GUILayout.Width(100)))
    //        {
    //            var clip = ani.clips[tree.playid];
    //            ani.Play(clip);
    //            bPlay = true;
    //        }
    //        if (GUILayout.Button("Cross(0.2)", GUILayout.Width(100)))
    //        {
    //            var clip = ani.clips[tree.playid];
    //            ani.CrossFade(clip, 0);
    //            bPlay = true;
    //        }
    //        if (tree.target == null)
    //        {
    //            var oc = GUI.color;
    //            GUI.color = Color.red;
    //            if (GUILayout.Button("SetAni"))
    //            {
    //                Window_AniPick.Show(ani, tree.aniname);
    //            }
    //            GUI.color = oc;
    //        }
    //        else
    //        {
    //            var clip = ani.clips[tree.playid];
    //            if (clip.name.ToLower() == tree.target)
    //            {
    //                GUILayout.Label(tree.target);
    //            }
    //            else
    //            {
    //                GUILayout.Label("<退化>");
    //            }
    //        }

    //    }
    //    EditorGUILayout.EndHorizontal();
    //    EditorGUILayout.BeginVertical();
    //    EditorGUILayout.BeginHorizontal();
    //    GUILayout.Space(24);
    //    EditorGUILayout.BeginVertical();
    //    foreach (var st in tree)
    //    {
    //        FillTree(root, st);
    //    }
    //    EditorGUILayout.EndVertical();
    //    EditorGUILayout.EndHorizontal();

    //    EditorGUILayout.EndVertical();


    //}
}

