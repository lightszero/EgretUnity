///<reference path="freenode.ts" />
namespace FreeNode.ForEgret3D
{
    //基于场景图对象的骨骼

    export class SkinFromTrans extends egret3d.SkeletonAnimation
    {
        tpose: egret3d.Matrix4_4[];
        boneobjs: egret3d.Object3D[];
        renderobj: egret3d.Object3D;
        constructor(tpose: egret3d.Matrix4_4[], boneobjs: egret3d.Object3D[], renderobj: egret3d.Object3D)
        {
            this.tpose = tpose;
            this.boneobjs = boneobjs;
            this.renderobj = renderobj;
            //只是初始化cuper，必须有骨骼
            var skeleton = new egret3d.Skeleton();
            skeleton.joints = [];
            skeleton.numJoint = skeleton.joints.length;
            super(skeleton);
        }
        public get jointNumber(): number
        {
            return this.tpose.length;
        }
        public updateSkeletonMatrixData()
        {
            this.__skeletonMatrix = new Float32Array(this.boneobjs.length * 8);
            var matroot = this.renderobj.modelMatrix.clone();
            matroot.invert();
            var matbone = new egret3d.Matrix4_4();
            var matquat = new egret3d.Quaternion(0, 0, 0, 1);
            for (var i = 0; i < this.boneobjs.length; i++)
            {
                var matbone = this.boneobjs[i].modelMatrix;// new egret3d.Matrix4_4();

                //model 1
                //var matt = matbone.clone();
                //matt.append(this.tpose[i]);
                //matt.append(matbone);//加上tpose

                //model 2
                var matt = this.tpose[i].clone();
                matt.append(matbone);
                matt.append(matroot);

                matquat.fromMatrix(matt);

                this.__skeletonMatrix[i * 8 + 0] = matquat.x;
                this.__skeletonMatrix[i * 8 + 1] = matquat.y;
                this.__skeletonMatrix[i * 8 + 2] = matquat.z;
                this.__skeletonMatrix[i * 8 + 3] = matquat.w;

                this.__skeletonMatrix[i * 8 + 4] = matt.rawData[12];
                this.__skeletonMatrix[i * 8 + 5] = matt.rawData[13];
                this.__skeletonMatrix[i * 8 + 6] = matt.rawData[14];
                this.__skeletonMatrix[i * 8 + 7] = 1;
            }
        }
        __skeletonMatrix: Float32Array;//
        public get currentSkeletonMatrixData(): Float32Array
        {
            return this.__skeletonMatrix;
        }

        updata(time: number, delay: number): void
        {
            this.updateSkeletonMatrixData();
        }
    }

    export class AniPlayer implements egret3d.IAnimation
    {
        get skeletonAnimationController(): egret3d.SkeletonAnimation
        {
            return null;
        }
        time: number = 0;
        delay: number = 0;
        speed: number = 1.0;
        //bplay: boolean = false;

        private _playClip: FreeNode.AniClipData = null;
        private _playFrameid: number = 0;
        private _playTimer: number = 0;

        clips: { [id: string]: FreeNode.AniClipData } = {};
        boneuuid: { [id: string]: number } = {};
        boneobj: { [id: string]: egret3d.Object3D } = {};

        get animaNodeCollection(): egret3d.AnimaNodeCollection
        {
            return null;
        }
        /**
        * @language zh_CN
        * 初始化Shader
        * @param vertexShader 顶点Shader
        * @param pixelShader 片元Shader
        */
        initShader(vertexShader: egret3d.VertexShader, pixelShader: egret3d.PixelShader): any
        {
        }
        /**
        * @language zh_CN
        * 更新调度
        * @param time 总时间
        * @param delay 帧间隔时间
        */
        updata(time: number, delay: number): void
        {
            this.time = time;
            this.delay = delay;
            if (this._playClip == null)
                return;

            this._playTimer += delay / 1000.0;
            this._playFrameid = (this._playClip.fps * this._playTimer) | 0;
            this._playFrameid %= this._playClip.frames.length;

            for (var i = 0; i < this._playClip.boneinfo.length; i++)
            {
                var bone = this._playClip.boneinfo[i];
                var bonedata = this._playClip.frames[this._playFrameid].bonedata[i];
                var obj = this.boneobj[bone];
                obj.position = new egret3d.Vector3D(bonedata.t.x, bonedata.t.y, bonedata.t.z);
                obj.scale = new egret3d.Vector3D(bonedata.s.x, bonedata.s.y, bonedata.s.z);
                obj.orientation = new egret3d.Quaternion(bonedata.r.x, bonedata.r.y, bonedata.r.z, bonedata.r.w);
            }
        }

        play(animName?: string, speed?: number): void
        {
            if (this.clips[animName] == undefined) return;
            this._playClip = this.clips[animName];
            this._playTimer = 0;
            this._playFrameid = 0;
            if (speed != undefined)
                this.speed = speed;
        }

        stop(): void
        {
            this._playClip = null;

        }
        isPlay(): boolean
        {
            return this._playClip != null;
        }
        getAnimList(): string[]
        {
            var anis: string[] = [];
            for (var c in this.clips)
            {
                anis.push(c);
            }
            return anis;
        }

        getAnimNode(): Array<egret3d.AnimNodeBase>
        {
            return null;
        }

        clone(): egret3d.IAnimation
        {
            return null;
        }

    }
}