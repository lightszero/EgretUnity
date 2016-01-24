using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    class ComponetParser_Transform : IComponetParser
    {
        public Type comptype
        {
            get
            {
                return typeof(Transform);
            }
        }

        public void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json)
        {
            Transform ic = component as Transform;
            //json["type"] = new MyJson.JsonNode_ValueString(this.comptype.Name.ToLower());//必须的一行
            //放到外面去了


            json["transmove"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.localPosition));
            json["transquat"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.localRotation));
            json["transscale"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.localScale));

        }
        public Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json, DelayProcess dp)
        {
            Transform c = node.GetComponent(comptype) as Transform;
            if (c == null)//这并不可能,只是例子
                c = node.AddComponent<Transform>();
            //Debug.Log(c);
            //Debug.Log("tag=" + json);
            var move = StringHelper.ToVector3(json["transmove"].AsString());
            var euler = StringHelper.ToQuaternion(json["transquat"].AsString());
            var scale = StringHelper.ToVector3(json["transscale"].AsString());
            c.localPosition = move;
            c.localScale = scale;
            c.localRotation = euler;
            return c;
        }

    }
}
