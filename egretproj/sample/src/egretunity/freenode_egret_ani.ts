﻿///<reference path="freenode.ts" />
namespace FreeNode.ForEgret3D
{
    //基于场景图对象的骨骼

    export class SkinFromTrans extends egret3d.SkeletonAnimation
    {
        tpose: egret3d.Matrix4_4[];
        boneobjs: egret3d.Object3D[];

        constructor(tpose: egret3d.Matrix4_4[], boneobjs: egret3d.Object3D[])
        {
            this.tpose = tpose;
            this.boneobjs = boneobjs;

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
        public updateSkeletonMatrixData(renderobj: egret3d.Object3D)
        {
            this.__skeletonMatrix = new Float32Array(this.boneobjs.length * 8);
            var matroot = renderobj.modelMatrix.clone();
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
        ////下面的这些重载，只为废掉SkeletonAnimation的原有功能
        //updata(time: number, delay: number): void
        //{
        //}
        ///**
        //* @language zh_CN
        //* 播放动画
        //* @param animName 动画名称
        //* @param speed 播放速度（默认为1）
        //*/
        //play(animName?: string, speed?: number): boolean
        //{
        //    return false;
        //}
        ///**
        //* @language zh_CN
        //* 停止动画播放
        //*/
        //stop(): void
        //{
        //}
        ///**
        //* @language zh_CN
        //* 是否正在播放
        //*/
        //isPlay(): boolean
        //{
        //    return false;
        //}
        ///**
        //* @language zh_CN
        //* 获取动画列表
        //* @return 动画名称数组
        //*/
        //getAnimList(): string[]
        //{
        //    return null;
        //}
        ///**
        //* @language zh_CN
        //* 获取动画节点
        //* @return 动画节点数组
        //*/
        //getAnimNode(): Array<egret3d.AnimNodeBase>
        //{
        //    return null;
        //}
        ///**
        //* @language zh_CN
        //* 克隆新的IAnimation对象
        //* @return 新的IAnimation对象
        //*/
        //clone(): egret3d.SkeletonAnimation
        //{
        //    var ani = new FreeNode.ForEgret3D.SkinFromTrans(this.tpose, this.boneobjs);
        //    return ani;
        //}


    }
}