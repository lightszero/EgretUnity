
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

        directLight.diffuse = 0x555555;
        directLight.ambient = 0x111111;
        directLight.specular = 0xffffff;
        this._lightGroup.addDirectLight(directLight);

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
        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());

        //设置像机视野距离;
        this._cameraCtl.setEyesLength(10);
        //加载场景文件，此处会自动加载所有相关资源到streambox中
        var streambox = FreeNode.StreamBox.CreateFromIndexFile("resource/Cube.indexlist.txt", () =>
            {
                console.warn("index loaded.");
            
                //load Scene;
                //处理模块
                var parseModel = new FreeNode.ForEgret3D.Parser(this._view3D, this._lightGroup);
                var sceneParser = new FreeNode.SceneParser(parseModel, streambox);
                var node = <egret3d.Object3D>sceneParser.ParseScene();
            }
            , false);//在egret环境，这里用false;
    }
    protected onUpdate(): void
    {

        this._cameraCtl.update();

    }
}