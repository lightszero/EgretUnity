using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    class ComponetParser_Aniplayer : IComponetParser
    {
        public Type comptype
        {
            get
            {
                return typeof(FB.PosePlus.AniPlayer);
            }
        }
        public void WriteToJson(IResMgr resmgr, GameObject node, Component component, MyJson.JsonNode_Object json)
        {
            FB.PosePlus.AniPlayer ic = component as FB.PosePlus.AniPlayer;

            MyJson.JsonNode_Array anis = new MyJson.JsonNode_Array();

            json["clips"] = anis;
            foreach (var m in ic.clips)
            {
                string hash = resmgr.SaveAniClip(m);
                anis.Add(new MyJson.JsonNode_ValueString(hash));
            }


        }
        public Component ReadFromJson(IResMgr resmgr, GameObject node, MyJson.JsonNode_Object json, DelayProcess dp)
        {
            FB.PosePlus.AniPlayer c = node.GetComponent(comptype) as FB.PosePlus.AniPlayer;
            if (c == null)//这就可能了
                c = node.AddComponent<FB.PosePlus.AniPlayer>();

            var clips = json["clips"].AsList();
            c.clips = new List<FB.PosePlus.AniClip>();
            for (int i = 0; i < clips.Count; i++)
            {
                string hashname = clips[i].AsString();
                c.clips.Add(resmgr.GetAniClip(hashname));
            }
            
            return c;
        }

    }
}
