
class Main extends egret.DisplayObjectContainer
{


    samepleScene: SampleScene;
    public constructor()
    {
        super();
        //new Sample_CreateSky();
        this.samepleScene = new SampleScene();
        var _viewPort = new egret3d.Rectangle(0, 0, 800, 600);

        egret3d.Egret3DDrive.requstContext3D(DeviceUtil.getGPUMode, _viewPort, () => 
        {
            this.samepleScene.Init(_viewPort);
        });

    }
}