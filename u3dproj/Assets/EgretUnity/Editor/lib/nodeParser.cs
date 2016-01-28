using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;
using System.Text;
using FB.PosePlus;
#if UNITY_EDITOR
using UnityEditor;
#endif

namespace nodeParser
{

    public class nodeParser : INodeParser
    {
        public GameObject _obj = null;
        public Dictionary<string, byte[]> bufs = null;
        IResMgr resmgr = null;

        Dictionary<string, IComponetParser> componentParsers;
        Dictionary<string, MatParser> matParsers;

        public bool debug = false;
        public nodeParser()
        {
            componentParsers = new Dictionary<string, IComponetParser>();
            RegComponentParser(new ComponetParser_Transform());
            RegComponentParser(new ComponetParser_MeshFilter());
            RegComponentParser(new ComponetParser_MeshRenderer());
            RegComponentParser(new ComponetParser_BoxCollider());
            RegComponentParser(new ComponetParser_SkinnedMeshRenderer());
            RegComponentParser(new ComponetParser_Aniplayer());

            matParsers = new Dictionary<string, MatParser>();
            //RegMatParser(new matparser_standard());
            //RegMatParser(new matparser_standard2());
        }
        //public IMatParser FindShader(string key)
        //{
        //    IMatParser mat =null;
        //    if (matParsers.ContainsKey(key))
        //    {
        //        mat = matParsers[key];
        //    }
        //    return mat;
        //}
        void RegComponentParser(IComponetParser parser)
        {
            componentParsers[parser.comptype.Name.ToLower()] = parser;
        }
        //void RegMatParser(IMatParser parser)
        //{
        //    matParsers[parser.shaderName] = parser;
        //}
        public void InitMatParser(string shader, MyJson.JsonNode_Object json)
        {
            string name = shader.Replace("%2f", "/");
            //Debug.Log("InitMatParser:" + name);
            matParsers[name] = new MatParser(name, json);
        }
        public List<MatParser> GetAllMatParsers()
        {
            return new List<MatParser>(matParsers.Values);
        }
#if UNITY_EDITOR
        public static MyJson.JsonNode_Object GetMatConfig(Material mat)
        {
            MaterialProperty[] mps = MaterialEditor.GetMaterialProperties(new UnityEngine.Object[] { mat });

            MyJson.JsonNode_Object json = new MyJson.JsonNode_Object();
            json["name"] = new MyJson.JsonNode_ValueString(mat.shader.name);
            if (mps != null && mps.Length > 0)
            {
                MyJson.JsonNode_Object _params = new MyJson.JsonNode_Object();
                json["params"] = _params;
                foreach (var mp in mps)
                {
                    if (mp.flags == MaterialProperty.PropFlags.HideInInspector) continue;

                    MyJson.JsonNode_Object p = new MyJson.JsonNode_Object();

                    _params[mp.name] = p;

                    p["name"] = new MyJson.JsonNode_ValueString(mp.name);
                    p["type"] = new MyJson.JsonNode_ValueString(mp.type.ToString());
                    p["flags"] = new MyJson.JsonNode_ValueString(mp.flags.ToString());
                    if (mp.type == MaterialProperty.PropType.Texture)
                    {
                        p["texdim"] = new MyJson.JsonNode_ValueString(mp.textureDimension.ToString());
                    }
                    if (mp.type == MaterialProperty.PropType.Range)
                    {
                        p["rangex"] = new MyJson.JsonNode_ValueNumber(mp.rangeLimits.x);
                        p["rangey"] = new MyJson.JsonNode_ValueNumber(mp.rangeLimits.y);
                    }
                }
            }
            else
            {
                json["error"] = new MyJson.JsonNode_ValueString("this mat do not have property.");
            }
            return json;
        }
#endif
        public MatParser GetMatParser(string shaderName)
        {
            //if (debug)
            Debug.Log("getmatParser:" + shaderName);
            foreach (var m in matParsers.Keys)
            {
                Debug.Log(m);
            }
            if (matParsers.ContainsKey(shaderName) == false)
            {
#if UNITY_EDITOR
                Debug.LogWarning("try load shader:" + shaderName);
                string path = Application.dataPath + "/resources/shaderparser";
                if (System.IO.Directory.Exists(path) == false)
                    System.IO.Directory.CreateDirectory(path);

                //string shadername = mat.shader.name;
                //shadername = shadername.Replace("/", "%2f");
                var shaderfileName = shaderName.Replace("/", "%2f");
                string file = path + "/" + shaderfileName + ".shaderparser.txt";
                byte[] jsonbyte = System.IO.File.ReadAllBytes(file);
                string jsontxt = System.Text.Encoding.UTF8.GetString(jsonbyte);
                MyJson.JsonNode_Object _json = MyJson.Parse(jsontxt) as MyJson.JsonNode_Object;
                InitMatParser(shaderfileName, _json);
                return GetMatParser(shaderName);
#endif
                return null;
            }

            return matParsers[shaderName];
        }

        public Dictionary<string, byte[]> GetBufs()
        {
            return new Dictionary<string, byte[]>(bufs);
        }
        public void SetBufs(Dictionary<string, byte[]> _bufs)
        {
            this.bufs = new Dictionary<string, byte[]>(_bufs);
            resmgr = new ResMgr(this);


        }


        public void SaveNode(GameObject _object)
        {
            bufs = new Dictionary<string, byte[]>();
            resmgr = new ResMgr(this);



            if (debug)
                Debug.Log("SaveNode:" + _object);

            MyJson.JsonNode_Object _json = new MyJson.JsonNode_Object();
            Obj2Json(_object, _json);//扫描转换


            //将树也加入bufs
            StringBuilder sb = new StringBuilder();
            _json.ConvertToStringWithFormat(sb, 4);
            byte[] bs = System.Text.Encoding.UTF8.GetBytes(sb.ToString());

            string sha1 = ResLibTool.ComputeHashString(bs);
            bufs[sha1 + ".jsontree.txt"] = bs;


        }
        public GameObject GenNode()
        {
            resmgr = new ResMgr(this);
            string treefile = null;
            foreach (var b in bufs.Keys)
            {
                if (b.Contains(".jsontree.txt"))
                {
                    treefile = System.Text.Encoding.UTF8.GetString(this.bufs[b]);
                    break;
                }
            }
            MyJson.JsonNode_Object _json = MyJson.Parse(treefile) as MyJson.JsonNode_Object;

            _obj = new GameObject();
            DelayProcess dp = new DelayProcess();
            Json2Obj(_json, _obj, dp);
            dp.Do();
            return _obj;

        }

        void Json2Obj(MyJson.JsonNode_Object _json, GameObject _obj, DelayProcess dp)
        {
            _obj.name = _json["name"].AsString();
            var comps = _json["components"].AsList();
            if (_json.ContainsKey("id"))
            {
                var id = _json["id"].AsInt();
                dp.mapObjs[id] = _obj;
            }
            //遍历填充组件
            foreach (MyJson.JsonNode_Object c in comps)
            {

                string type = c["type"].AsString();
                this.componentParsers[type].ReadFromJson(resmgr, _obj, c, dp);
            }

            //遍历填充树
            if (_json.ContainsKey("children"))
            {
                var children = _json["children"].AsList();
                foreach (MyJson.JsonNode_Object subjson in children)
                {
                    GameObject subobj = new GameObject();
                    subobj.transform.SetParent(_obj.transform);
                    Json2Obj(subjson, subobj, dp);
                }
            }

        }
        void Obj2Json(GameObject _obj, MyJson.JsonNode_Object _json)
        {
            _json["name"] = new MyJson.JsonNode_ValueString(_obj.name);
            _json["id"] = new MyJson.JsonNode_ValueNumber(_obj.GetInstanceID());
            //遍历填充组件
            MyJson.JsonNode_Array comps = new MyJson.JsonNode_Array();
            _json["components"] = comps;
            foreach (var c in _obj.GetComponents<Component>())
            {
                if (c == null)
                {
                    Debug.LogWarning("got a commponet null.");
                    continue;
                }
                string type = c.GetType().Name.ToLower();
                var _cjson = new MyJson.JsonNode_Object();
                _cjson["type"] = new MyJson.JsonNode_ValueString(type);
                if (componentParsers.ContainsKey(type) == false)
                {
                    Debug.LogWarning("can't find comparser:" + type);
                    continue;
                }

                componentParsers[type].WriteToJson(resmgr, _obj, c, _cjson);
                comps.Add(_cjson);
            }

            //遍历填充树
            if (_obj.transform.childCount > 0)
            {
                MyJson.JsonNode_Array children = new MyJson.JsonNode_Array();
                _json["children"] = children;

                for (int i = 0; i < _obj.transform.childCount; i++)
                {
                    var subobj = _obj.transform.GetChild(i).gameObject;
                    MyJson.JsonNode_Object _subjson = new MyJson.JsonNode_Object();
                    Obj2Json(subobj, _subjson);
                    children.Add(_subjson);
                }
            }

        }
    }


    public class ResMgr : IResMgr
    {

        nodeParser parser;
        public ResMgr(nodeParser _parser)
        {
            this.parser = _parser;
        }
        Dictionary<string, byte[]> bufs
        {
            get
            {
                return parser.bufs;
            }
        }
        Dictionary<int, string> savecache = new Dictionary<int, string>();
        public string SaveMesh(Mesh mesh)
        {
            int id = mesh.GetInstanceID();
            string name = null;
            if (savecache.TryGetValue(id, out name))
            {
                return name;
            }
            using (System.IO.MemoryStream ms = new System.IO.MemoryStream())
            {
                BitHelper.WriteMesh(mesh, ms);
                byte[] bs = ms.ToArray();
                string sha1 = ResLibTool.ComputeHashString(bs);

                name = sha1 + ".mesh.bin";
                bufs[name] = bs;
            }
            savecache[id] = name;
            return name;
        }
        public string SaveMat(Material mat)
        {
            int id = mat.GetInstanceID();
            string name = null;
            if (savecache.TryGetValue(id, out name))
            {
                return name;
            }
            MyJson.JsonNode_Object _json = new MyJson.JsonNode_Object();
            //parser.matParser.WriteToJson(this, mat, _json);
#if UNITY_EDITOR
            if (parser.GetMatParser(mat.shader.name) == null)
            {
                var json = nodeParser.GetMatConfig(mat);
                parser.InitMatParser(mat.shader.name, json);

                #region 自动保存shaderparser配置，这一段可以关闭
                string path = Application.dataPath + "/resources/shaderparser";
                if (System.IO.Directory.Exists(path) == false)
                    System.IO.Directory.CreateDirectory(path);

                string shadername = mat.shader.name;
                shadername = shadername.Replace("/", "%2f");
                string file = path + "/" + shadername + ".shaderparser.txt";
                if (System.IO.File.Exists(file))
                    System.IO.File.Delete(file);

                System.IO.File.WriteAllText(file, json.ToString());
                #endregion
            }
#endif
            parser.GetMatParser(mat.shader.name).WriteToJson(this, mat, _json);

            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            _json.ConvertToStringWithFormat(sb, 4);
            byte[] bs = System.Text.Encoding.UTF8.GetBytes(sb.ToString());
            string sha1 = ResLibTool.ComputeHashString(bs);
            name = sha1 + ".jsonmat.txt";
            bufs[name] = bs;

            savecache[id] = name;
            return name;
        }
#if UNITY_EDITOR
        string SaveTextureEditor(Texture2D tex)
        {
            string localp = System.IO.Path.GetDirectoryName(Application.dataPath);
            string path = AssetDatabase.GetAssetPath(tex);
            string filename = localp + "/" + path;
            int i = tex.name.LastIndexOf(".");
            string ext = "png";
            if (i >= 0)
            {
                ext = tex.name.Substring(i + 1);
            }
            byte[] bs = System.IO.File.ReadAllBytes(filename);
            string sha1 = ResLibTool.ComputeHashString(bs);
            string name = sha1 + "." + ext;
            bufs[name] = bs;
            Debug.Log("filename=" + name + " ext=" + ext);
            return name;

        }
#endif
        public string SaveTexture(Texture2D tex)
        {

            int id = tex.GetInstanceID();
            string name = null;
            if (savecache.TryGetValue(id, out name))
            {
                return name;
            }
#if UNITY_EDITOR
            name = SaveTextureEditor(tex);
            savecache[id] = name;
            return name;
#endif
            if (parser.debug)
                Debug.Log("SaveTexture" + tex.name);
            int i = tex.name.LastIndexOf(".");
            string ext = "png";
            if (i < 0)
            {
                tex.name = tex.name + ".png";
            }
            else
            {
                ext = tex.name.Substring(i + 1);
            }
            if (ext == "png")
            {
                byte[] bs = tex.EncodeToPNG();
                string sha1 = ResLibTool.ComputeHashString(bs);
                name = sha1 + "." + ext;
                bufs[name] = bs;
            }
            else if (ext == "jpg")
            {
                byte[] bs = tex.EncodeToJPG();
                string sha1 = ResLibTool.ComputeHashString(bs);
                name = sha1 + "." + ext;
                bufs[name] = bs;
            }
            else
            {
                throw new Exception("不知道文件类型" + ext);
            }
            savecache[id] = name;
            return name;

        }



        Dictionary<string, Mesh> loadmeshcache = new Dictionary<string, Mesh>();
        public Mesh GetMesh(string name)
        {
            Mesh mesh = null;
            if (loadmeshcache.TryGetValue(name, out mesh))
            {
                return mesh;
            }

            byte[] buf = bufs[name];
            mesh = BitHelper.ReadMesh(buf, 0);
            loadmeshcache[name] = mesh;

            return mesh;
        }
        Dictionary<string, Material> loadmatcache = new Dictionary<string, Material>();

        public Material GetMat(string name)
        {
            Material mat = null;
            if (loadmatcache.TryGetValue(name, out mat))
            {
                return mat;
            }
            //Debug.Log("getmat:" + name);
            byte[] buf = bufs[name];
            string str = System.Text.Encoding.UTF8.GetString(buf);
            MyJson.JsonNode_Object json = MyJson.Parse(str) as MyJson.JsonNode_Object;

            string shadername = json["shaderName"].AsString();
            //Debug.Log("str" + str+","+shadername);
            mat = parser.GetMatParser(shadername).ReadFromJson(this, json);

            loadmatcache[name] = mat;
            return mat;
        }
        Dictionary<string, Texture2D> loadtexcache = new Dictionary<string, Texture2D>();
        public Texture2D GetTexture(string name)
        {
            Texture2D tex = null;
            if (loadtexcache.TryGetValue(name, out tex))
            {
                return tex;
            }

            byte[] buf = bufs[name];
            tex = new Texture2D(1, 1);
            tex.LoadImage(buf);
            tex.name = name;
            loadtexcache[name] = tex;

            return tex;
        }

        public string SaveAniClip(AniClip clip)
        {
            int id = clip.GetInstanceID();
            string name = null;
            if (savecache.TryGetValue(id, out name))
            {
                return name;
            }
            using (System.IO.MemoryStream ms = new System.IO.MemoryStream())
            {
                //name
                var nameb = System.Text.Encoding.UTF8.GetBytes(clip.name);
                ms.WriteByte((byte)nameb.Length);
                ms.Write(nameb, 0, nameb.Length);
                //fps
                byte[] fpsb = BitConverter.GetBytes(clip.fps);
                ms.Write(fpsb, 0, 4);
                //loop
                ms.WriteByte((byte)(clip.loop ? 1 : 0));
                {
                    //boneinfo
                    int c = clip.boneinfo.Count;
                    byte[] cliplenb = BitConverter.GetBytes(c);
                    ms.Write(cliplenb, 0, 4);
                    for (int i = 0; i < c; i++)
                    {
                        byte[] bnameb = System.Text.Encoding.UTF8.GetBytes(clip.boneinfo[i]);
                        ms.WriteByte((byte)bnameb.Length);
                        ms.Write(bnameb, 0, bnameb.Length);
                    }
                }
                {
                    //subclips
                    int c = clip.subclips.Count;
                    byte[] cliplenb = BitConverter.GetBytes(c);
                    ms.Write(cliplenb, 0, 4);
                    for (int i = 0; i < c; i++)
                    {
                        byte[] bnameb = System.Text.Encoding.UTF8.GetBytes(clip.subclips[i].name);
                        ms.WriteByte((byte)bnameb.Length);
                        ms.Write(bnameb, 0, bnameb.Length);

                        ms.WriteByte((byte)(clip.subclips[i].loop ? 1 : 0));
                        byte[] sb = BitConverter.GetBytes(clip.subclips[i].startframe);
                        byte[] eb = BitConverter.GetBytes(clip.subclips[i].endframe);
                    }
                }

                {//frame
                    int c = clip.frames.Count;
                    byte[] cliplenb = BitConverter.GetBytes(c);
                    ms.Write(cliplenb, 0, 4);
                    for (int i = 0; i < c; i++)
                    {
                        byte[] fidb = BitConverter.GetBytes(clip.frames[i].fid);
                        ms.Write(fidb, 0, 4);
                        ms.WriteByte((byte)(clip.frames[i].key ? 1 : 0));

                        for (int ib = 0; ib < clip.boneinfo.Count; ib++)
                        {
                            clip.frames[i].bonesinfo[ib].Save(ms,
                                i > 0 ? clip.frames[i - 1].bonesinfo[ib] : null);
                        }
                    }
                }
                byte[] bs = ms.ToArray();
                string sha1 = ResLibTool.ComputeHashString(bs);

                name = sha1 + ".aniclip.bin";
                bufs[name] = bs;
            }

            return name;
        }
        Dictionary<string, FB.PosePlus.AniClip> loadaniclipcache = new Dictionary<string, AniClip>();
        public AniClip GetAniClip(string name)
        {
            FB.PosePlus.AniClip clip = null;
            if (loadaniclipcache.TryGetValue(name, out clip))
            {
                return clip;
            }

            byte[] buf = bufs[name];
            using (System.IO.MemoryStream ms = new System.IO.MemoryStream(buf))
            {
                clip = new AniClip();
            }

            return clip;
        }
    }
}