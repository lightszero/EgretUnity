using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    class ComponetParser_MeshFilter : IComponetParser
    {
        public Type comptype
        {
            get
            {
                return typeof(MeshFilter);
            }
        }
        public void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json)
        {
            MeshFilter ic = component as MeshFilter;
            //json["type"] = new MyJson.JsonNode_ValueString(this.comptype.Name.ToLower());//必须的一行
            //放到外面去了
#if UNITY_EDITOR
            json["mesh"] = new MyJson.JsonNode_ValueString(resmgr.SaveMesh(ic.sharedMesh));
#else
            json["mesh"] = new MyJson.JsonNode_ValueString(resmgr.SaveMesh(ic.mesh));
#endif

        }
        public Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json)
        {
            MeshFilter c = node.GetComponent(comptype) as MeshFilter;
            if (c == null)//这就可能了
                c = node.AddComponent<MeshFilter>();

          
            var mesh = resmgr.GetMesh(json["mesh"].AsString());
            c.mesh = mesh;
            return c;
        }

    }
}
