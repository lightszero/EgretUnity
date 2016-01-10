
class SampleScene
{

    protected _time: number = 0;
    protected _delay: number = 0;
    protected _timeDate: Date = null;
    protected _view3D: egret3d.View3D = null;
    protected _cameraCtl: egret3d.LookAtController = null;

    public Init(_viewPort: egret3d.Rectangle): void
    {

        //创建View3D对象;
        this._view3D = new egret3d.View3D(_viewPort);

        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());

        //设置像机视野距离;
        this._cameraCtl.setEyesLength(0.1);

        //设置天空盒
        var skyTexture: egret3d.SkyTexture = new egret3d.SkyTexture(
            <HTMLImageElement>document.getElementById("t1_1"),
            <HTMLImageElement>document.getElementById("t1_2"),
            <HTMLImageElement>document.getElementById("t1_3"),
            <HTMLImageElement>document.getElementById("t1_4"),
            <HTMLImageElement>document.getElementById("t1_5"),
            <HTMLImageElement>document.getElementById("t1_6")
        );

        this._view3D.sky = new egret3d.Sky(skyTexture);


        this._time = new Date().getTime();

        this.initScene();

        requestAnimationFrame(() => this.onUpdate());
    }
    private initScene(): void
    {
        var box = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());

        var lightGroup: egret3d.LightGroup = new egret3d.LightGroup();

        var directLight: egret3d.DirectLight = new egret3d.DirectLight(new egret3d.Vector3D(100, 100, 100));

        directLight.diffuse = 0xffffff;

        lightGroup.addDirectLight(directLight);

        box.material.lightGroup = lightGroup;

        this._view3D.addChild3D(box);


        this._cameraCtl.setEyesLength(1000);
    }

    protected onUpdate(): void
    {

        this._timeDate = new Date();

        this._delay = this._timeDate.getTime() - this._time;

        this._time = this._timeDate.getTime();

        this._cameraCtl.update();

        this._view3D.renden(this._time, this._delay);

        requestAnimationFrame(() => this.onUpdate());
    }
}