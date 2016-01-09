using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace nodeParser
{
    public class MatParser
    {
        MyJson.JsonNode_Object jsonConfig;
        string shaderName;
        public MatParser(string shadername, MyJson.JsonNode_Object jsonconfig)
        {
            this.shaderName = shadername;
            this.jsonConfig = jsonconfig;
        }

        public void WriteToJson(IResMgr resmgr, Material mat, MyJson.JsonNode_Object json)
        {
            json["shaderName"] = new MyJson.JsonNode_ValueString(this.shaderName);
            if (jsonConfig.ContainsKey("params"))
            {
                foreach (var item in jsonConfig["params"].asDict())
                {
                    //Debug.Log(item.Value);
                    string type = item.Value.asDict()["type"].AsString();
                    string flag = item.Value.asDict()["flags"].AsString();
                    string name = item.Value.asDict()["name"].AsString();
                    if (type == "Float" || type == "Range")
                    {
                        json[name] = new MyJson.JsonNode_ValueNumber(mat.GetFloat(name));
                    }
                    else if (type == "Vector")
                    {
                        json[name] = new MyJson.JsonNode_ValueString(StringHelper.ToString(mat.GetVector(name)));
                    }
                    else if (type == "Color")
                    {
                        json[name] = new MyJson.JsonNode_ValueString(StringHelper.ToString((Color32)mat.GetColor(name)));
                    }
                    else if (type == "Texture")
                    {
                        string texdim = item.Value.asDict()["texdim"].AsString();
                        var tex = mat.GetTexture(name);
                        if (tex != null)
                        {
                            if (texdim == "Tex2D")
                            {
                                string texname = resmgr.SaveTexture(tex as Texture2D);
                                json[name] = new MyJson.JsonNode_ValueString(texname);
                            }
                            else
                            {
                                throw new Exception("not support texdim:" + texdim);
                            }
                        }
                    }
                    else
                    {
                        throw new Exception("not support type:" + type);
                    }

                }
            }

        }
        //test 23B62EB29EF1468D0FFFE8711B46391B866CA4F4
        public Material ReadFromJson(IResMgr resmgr, MyJson.JsonNode_Object json)
        {
            Material mat = new Material(Shader.Find(shaderName));
            if (jsonConfig.ContainsKey("params"))
            {
              
                var _param = jsonConfig["params"] as MyJson.JsonNode_Object;
                foreach (var jsonitem in json)
                {
                    if (jsonitem.Key == "shaderName") continue;
                    if (_param.ContainsKey(jsonitem.Key))
                    {
                        var item = _param[jsonitem.Key];
                        string type = item.asDict()["type"].AsString();
                        string flag = item.asDict()["flags"].AsString();
                        string name = item.asDict()["name"].AsString();
                        if (type == "Float" || type == "Range")
                        {
                            mat.SetFloat(name, (float)jsonitem.Value.AsDouble());
                            //json[name] = new MyJson.JsonNode_ValueNumber(mat.GetFloat(name));
                        }
                        else if (type == "Vector")
                        {
                            mat.SetVector(name, StringHelper.ToVector4(jsonitem.Value.AsString()));
                            //json[name] = new MyJson.JsonNode_ValueString(StringHelper.ToString(mat.GetVector(name)));
                        }
                        else if (type == "Color")
                        {
                            mat.SetColor(name, StringHelper.ToColor32(jsonitem.Value.AsString()));

                            //json[name] = new MyJson.JsonNode_ValueString(StringHelper.ToString(mat.GetColor(name)));
                        }
                        else if (type == "Texture")
                        {
                            string texdim = item.asDict()["texdim"].AsString();

                            if (texdim == "Tex2D")
                            {
                                var tex = resmgr.GetTexture(jsonitem.Value.AsString());
                                mat.SetTexture(name, tex);
                                //json["mainTexture"] = new MyJson.JsonNode_ValueString(texname);
                            }
                            else
                            {
                                throw new Exception("not support texdim:" + texdim);
                            }

                        }
                        else
                        {
                            throw new Exception("not support type:" + type);
                        }
                    }
                    else
                    {
                        throw new Exception("not have param:" + jsonitem.Key);
                    }
                    //Debug.Log(item.Value);



                }
            }
            return mat;
        }
    }
}
