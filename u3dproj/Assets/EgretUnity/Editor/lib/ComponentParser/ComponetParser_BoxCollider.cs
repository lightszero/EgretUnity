using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    class ComponetParser_BoxCollider : IComponetParser
    {
        public Type comptype
        {
            get
            {
                return typeof(BoxCollider);
            }
        }

        public void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json)
        {
            BoxCollider ic = component as BoxCollider;
            //json["type"] = new MyJson.JsonNode_ValueString(this.comptype.Name.ToLower());//必须的一行
            //放到外面去了


            json["center"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.center));
            json["size"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.size));

        }
        public Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json)
        {
            BoxCollider c = node.GetComponent(comptype) as BoxCollider;
            if (c == null)
                c = node.AddComponent<BoxCollider>();
            Debug.Log(c);
            Debug.Log("tag=" + json);
            var center = StringHelper.ToVector3(json["center"].AsString());
            var size = StringHelper.ToVector3(json["size"].AsString());

            c.center = center;
            c.size = size;
            return c;
        }

    }
}
