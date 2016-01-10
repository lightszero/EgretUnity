
class SampleScene
{

    protected _time: number = 0;
    protected _delay: number = 0;
    protected _timeDate: Date = null;
    protected _view3D: egret3d.View3D = null;
    protected _cameraCtl: egret3d.LookAtController = null;
    _lightGroup: egret3d.LightGroup = null;
   
    //初始化
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


        this._lightGroup = new egret3d.LightGroup();

        var directLight: egret3d.DirectLight = new egret3d.DirectLight(new egret3d.Vector3D(100, 100, 100));

        directLight.diffuse = 0xffffff;

        this._lightGroup.addDirectLight(directLight);

        this._cameraCtl.setEyesLength(1000);


        this.onInit();

        this._time = new Date().getTime();
        requestAnimationFrame(() => this._Update());
    }
    private _Update(): void
    {
        this._timeDate = new Date();

        this._delay = this._timeDate.getTime() - this._time;

        this._time = this._timeDate.getTime();



        this.onUpdate();

        this._view3D.renden(this._time, this._delay);

        requestAnimationFrame(() => this._Update());
    }


    //on才是行为函数
    private onInit(): void
    {



        var box = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());
        box.material.lightGroup = this._lightGroup;
        this._view3D.addChild3D(box);

        //加载场景文件，此处会自动加载所有相关资源到streambox中
        var streambox = FreeNode.StreamBox.CreateFromIndexFile("resource/Cube.indexlist.txt", () =>
        {
            console.warn("index loaded.");
            //load Scene;
            //var parseMode = new FreeNode.ForBabylon.Parser(this.scene);
            //var p = new FreeNode.SceneParser(parseMode, box);
            //this.node = <BABYLON.Mesh>p.ParseScene();
            //this.node.scaling.x = 0.05;
            //this.node.scaling.y = 0.05;
            //this.node.scaling.z = 0.05;
            //this.node.position = new BABYLON.Vector3(0, 0, 0);
            //this.camera.position = new BABYLON.Vector3(this.node.position.x + 0, this.node.position.y + 50, this.node.position.z - 50);
            //this.camera.setTarget(this.node.position);
        });
    }
    protected onUpdate(): void
    {

        this._cameraCtl.update();

    }
}