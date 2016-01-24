using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    class ComponetParser_SkinnedMeshRenderer : IComponetParser
    {
        public Type comptype
        {
            get
            {
                return typeof(SkinnedMeshRenderer);
            }
        }
        public void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json)
        {
            SkinnedMeshRenderer ic = component as SkinnedMeshRenderer;
            //json["type"] = new MyJson.JsonNode_ValueString(this.comptype.Name.ToLower());//必须的一行
            //放到外面去了

            //材质
            MyJson.JsonNode_Array mats = new MyJson.JsonNode_Array();

            json["mats"] = mats;

            foreach (var m in ic.sharedMaterials)
            {
                string hash = resmgr.SaveMat(m);
                mats.Add(new MyJson.JsonNode_ValueString(hash));
            }

            //bounds
            json["center"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.localBounds.center));
            json["size"] = new MyJson.JsonNode_ValueString(StringHelper.ToString(ic.localBounds.size));

            //mesh
            json["mesh"] = new MyJson.JsonNode_ValueString(resmgr.SaveMesh(ic.sharedMesh));

            json["rootboneobj"] = new MyJson.JsonNode_ValueNumber(ic.rootBone.gameObject.GetInstanceID());
            MyJson.JsonNode_Array bones = new MyJson.JsonNode_Array();
            foreach (var b in ic.bones)
            {
                bones.Add(new MyJson.JsonNode_ValueNumber(b.gameObject.GetInstanceID()));
            }
            json["boneobjs"] = bones;
            ic.rootBone.GetInstanceID();
        }
        public Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json, DelayProcess dp)
        {
            SkinnedMeshRenderer c = node.GetComponent(comptype) as SkinnedMeshRenderer;
            if (c == null)//这就可能了
                c = node.AddComponent<SkinnedMeshRenderer>();

            //mats
            var mats = json["mats"].AsList();
            Material[] rmats = new Material[mats.Count];
            for (int i = 0; i < mats.Count; i++)
            {
                string hashname = mats[i].AsString();
                rmats[i] = resmgr.GetMat(hashname);
            }
            c.materials = rmats;
            //bound
            var center = StringHelper.ToVector3(json["center"].AsString());
            var size = StringHelper.ToVector3(json["size"].AsString());

            c.localBounds = new Bounds(center, size);

            //mesh
            var mesh = resmgr.GetMesh(json["mesh"].AsString());
            c.sharedMesh = mesh;

            //延迟恢复
            if (json.ContainsKey("rootboneobj"))
            {
                dp.delayCall += () =>
                {
                    c.rootBone = dp.mapObjs[json["rootboneobj"].AsInt()].transform;
                };
            }
            if (json.ContainsKey("boneobjs"))
            {
                dp.delayCall += () =>
                  {
                      var array = json["boneobjs"] as MyJson.JsonNode_Array;
                      List<Transform> bones = new List<Transform>();
                      foreach (var b in array)
                      {
                          bones.Add(dp.mapObjs[b.AsInt()].transform);
                      }
                      c.bones = bones.ToArray();
                  };
            }
            return c;
        }

    }
}
