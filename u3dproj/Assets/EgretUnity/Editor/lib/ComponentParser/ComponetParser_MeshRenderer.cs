using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    class ComponetParser_MeshRenderer : IComponetParser
    {
        public Type comptype
        {
            get
            {
                return typeof(MeshRenderer);
            }
        }
        public void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json)
        {
            MeshRenderer ic = component as MeshRenderer;
            //json["type"] = new MyJson.JsonNode_ValueString(this.comptype.Name.ToLower());//必须的一行
            //放到外面去了

            MyJson.JsonNode_Array mats = new MyJson.JsonNode_Array();

            json["mats"] = mats;
#if UNITY_EDITOR
            foreach (var m in ic.sharedMaterials)
            {
                string hash = resmgr.SaveMat(m);
                mats.Add(new MyJson.JsonNode_ValueString(hash));
            }
#else
            foreach (var m in ic.materials)
            {
                string hash = resmgr.SaveMat(m);
                mats.Add(new MyJson.JsonNode_ValueString(hash));
            }
#endif

        }
        public Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json)
        {
            MeshRenderer c = node.GetComponent(comptype) as MeshRenderer;
            if (c == null)//这就可能了
                c = node.AddComponent<MeshRenderer>();
            var mats = json["mats"].AsList();
            Material[] rmats = new Material[mats.Count];
            for (int i = 0; i < mats.Count; i++)
            {
                string hashname = mats[i].AsString();
                rmats[i] = resmgr.GetMat(hashname);
            }
            c.materials = rmats;
            return c;
        }

    }
}
