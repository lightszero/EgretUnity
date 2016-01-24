using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    public interface INodeParser//节点处理器
    {

            
        //管理文件Buf
        Dictionary<string, byte[]> GetBufs();
        void SetBufs(Dictionary<string, byte[]> bufs);

        //保存节点与生成节点
        void SaveNode(GameObject _object);
        GameObject GenNode();

        List<MatParser> GetAllMatParsers();//得到所有的材质处理器
        MatParser GetMatParser(string shader);
        void InitMatParser(string shader, MyJson.JsonNode_Object json);
    }

    //内部接口,使用者关注上面的接口即可，扩展此模块才需要关注下述接口
    public interface IResMgr//资源管理器
    {
        string SaveMesh(Mesh mesh);
        string SaveMat(Material mat);
        string SaveTexture(Texture2D tex);

        Mesh GetMesh(string name);
        Material GetMat(string name);
        Texture2D GetTexture(string name);
    }
    public class DelayProcess
    {
        public Dictionary<int, GameObject> mapObjs = new Dictionary<int, GameObject>();
        public void Do()
        {
            if (delayCall != null)
            {
                delayCall();
            }
        }
        public event Action delayCall;
    }
    public interface IComponetParser//组件处理器
    {
        Type comptype
        {
            get;
        }
        void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json);
        Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json, DelayProcess dp);
    }

}