
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

        egret3d.AssetsManager.getInstance().setRootURL("resource/");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_f.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_b.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_l.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_r.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_u.jpg");
        egret3d.AssetsManager.getInstance().addLoadTexture("SkyBox/skybox_clear_d.jpg");
        egret3d.AssetsManager.getInstance().addEventListener(egret3d.Event3D.EVENT_LOAD_COMPLETE, (e: egret3d.Event3D) => this.initSky());
        egret3d.AssetsManager.getInstance().startLoad();




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
    initSky(): void
    {
        //设置天空盒
        var sky_f: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_f.jpg");
        var sky_b: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_b.jpg");
        var sky_l: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_l.jpg");
        var sky_r: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_r.jpg");
        var sky_u: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_u.jpg");
        var sky_d: egret3d.TextureBase = egret3d.AssetsManager.getInstance().findTexture("SkyBox/skybox_clear_d.jpg");

        var skyTexture: egret3d.SkyTexture = new egret3d.SkyTexture(sky_b, sky_f, sky_l, sky_r, sky_u, sky_d);


        this._view3D.sky = new egret3d.Sky(skyTexture);
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

        egretUnity.InitDebuger();
    }
    protected onUpdate(): void
    {

        this._cameraCtl.update();

    }
}