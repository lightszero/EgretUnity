using UnityEngine;
using System.Collections;
using UnityEditor;
using System;
using System.Collections.Generic;

public class windowEgretUnity : EditorWindow
{

    public const string version = "v0.03";
    #region windowinit
    [MenuItem("EgretUnity/ShowResExportWindow")]
    static void ShowWindow()
    {
        var window = EditorWindow.GetWindow<windowEgretUnity>(true, "EgretUnity " + version);
        window.Show();
    }
    #endregion
    #region usevalue
    GameObject setobj = null;//选中的对象
    //bool bUseHashName = true;//是否使用hash作为资源文件名
    string exportResult = null;//导出结果
    string exportPath = null;//导出路径
    bool bUseHashTreeName = false;//是否使用hash作为导出节点名
    string exportNodeName = "";//导出节点名称
    string[] importfiles;
    #endregion
    void OnGUI()
    {
        if (exportPath == null)
        {
            string rp = System.IO.Path.GetFullPath(Application.dataPath);
            rp = System.IO.Path.GetDirectoryName(rp);
            rp = System.IO.Path.GetDirectoryName(rp);
            exportPath = System.IO.Path.Combine(rp, "export");
            importfiles = System.IO.Directory.GetFiles(exportPath, "*.indexlist.txt");
            Debug.Log("outpath=" + exportPath);
        }
        GUILayout.Label("设置导出路径");
        var _exportPath = EditorGUILayout.TextField("export path", exportPath);
        if (_exportPath != exportPath)
        {
            exportPath = _exportPath;
            importfiles = System.IO.Directory.GetFiles(exportPath, "*.indexlist.txt");

        }
        GUILayout.Space(12);

        GUILayout.Label("选择一个Gameobject 将他导出");
        var setobj2 = EditorGUILayout.ObjectField("Export GameObject", setobj, typeof(GameObject), true) as GameObject;
        if (setobj2 != setobj)
        {
            setobj = setobj2;
            exportNodeName = setobj.name;
            exportResult = "";
        }
        GUILayout.Space(12);
        GUILayout.Label("选择名字参数，建议hash做名字");
        //bUseHashName = EditorGUILayout.Toggle("是否使用hash做名字", bUseHashName);
        bUseHashTreeName = EditorGUILayout.Toggle("是否使用hash做导出节点的名字", bUseHashTreeName);
        if (bUseHashTreeName == false)
        {
            exportNodeName = EditorGUILayout.TextField("Export FileName:", exportNodeName);
        }
        else
        {
            GUILayout.Label("节点名将自动计算：" + exportResult);
        }
        GUILayout.Space(24);
        if (GUILayout.Button("Export"))
        {

            if (setobj != null)
            {
                SaveItem();
                importfiles = System.IO.Directory.GetFiles(exportPath, "*.indexlist.txt");
            }
            else
            {
                EditorUtility.DisplayDialog("error", "必须选一个gameobject", "close");
            }
        }

        GUILayout.Space(30);

        if (importfiles != null && importfiles.Length > 0)
        {
            GUILayout.Label("下面是加载测试");
            foreach (var f in importfiles)
            {
                GUILayout.BeginHorizontal();
                GUILayout.Label("File:" + f);
                if (GUILayout.Button("Import", GUILayout.Width(150)))
                {
                    LoadItem(f);
                }
                GUILayout.EndHorizontal();
            }
        }

    }
    void LoadItem(string filename)
    {
        string jsontxt = System.Text.Encoding.UTF8.GetString(System.IO.File.ReadAllBytes(filename));
        MyJson.JsonNode_Array array = MyJson.Parse(jsontxt) as MyJson.JsonNode_Array;
        Dictionary<string, byte[]> bufs = new Dictionary<string, byte[]>();
        foreach (MyJson.JsonNode_Object indexitem in array)
        {
            string name = indexitem["Name"].AsString();
            int len = indexitem["Length"].AsInt();
            bufs[System.IO.Path.GetFileName(name)] = System.IO.File.ReadAllBytes(exportPath + "/" + name);
            //Debug.Log(name);

        }
        nodeParser.nodeParser np = new nodeParser.nodeParser();

        np.SetBufs(bufs);
        np.GenNode();
    }
    void SaveItem()
    {
        //GameObject setobj = null;//选中的对象
        //bool bUseHashName = true;//是否使用hash作为资源文件名
        //string exportResult = null;//导出结果
        //string exportPath = null;//导出路径
        //bool bUseHashTreeName = false;//是否使用hash作为导出节点名
        //string exportNodeName = "";//导出节点名称

        nodeParser.nodeParser np = new nodeParser.nodeParser();
        np.SaveNode(this.setobj);//先强制使用HashName

        if (System.IO.Directory.Exists(exportPath) == false)
            System.IO.Directory.CreateDirectory(exportPath);
        string respath = System.IO.Path.Combine(exportPath, "resources");
        if (System.IO.Directory.Exists(respath) == false)
            System.IO.Directory.CreateDirectory(respath);

        MyJson.JsonNode_Array indexfile = new MyJson.JsonNode_Array();
        foreach (var f in np.bufs)
        {
            //写入文件
            {
                var file = System.IO.Path.Combine(respath, f.Key);
                System.IO.File.WriteAllBytes(file, f.Value);
            }
            //记录索引
            MyJson.JsonNode_Object indexitem = new MyJson.JsonNode_Object();
            indexitem["Name"] = new MyJson.JsonNode_ValueString("resources/" + f.Key);
            indexitem["Length"] = new MyJson.JsonNode_ValueNumber(f.Value.Length);
            indexfile.Add(indexitem);
        }
        indexfile.Sort((a, b) =>
        {
            return string.Compare(a.asDict()["Name"].AsString(), b.asDict()["Name"].AsString());
        });
        {//保存索引文件
            byte[] indexcode = System.Text.Encoding.UTF8.GetBytes(indexfile.ToString());

            exportResult = exportNodeName;
            if (bUseHashTreeName)
            {
                exportResult = ResLibTool.ComputeHashString(indexcode);
            }
            string outfile = System.IO.Path.Combine(exportPath, exportResult + ".indexlist.txt");

            System.IO.File.WriteAllBytes(outfile, indexcode);
        }

    }

    void Update()
    {
    }
}
