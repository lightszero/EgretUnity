﻿using UnityEngine;
using System.Collections;
using UnityEditor;
using System;

public class windowEgretUnity : EditorWindow
{

    const string version = "v0.01";
    #region windowinit
    [MenuItem("EgretUnity/ShowWindow")]
    static void ShowWindow()
    {
        var window = EditorWindow.GetWindow<windowEgretUnity>(true, "EgretUnity " + version);
        window.Show();
    }
    #endregion
    #region usevalue
    GameObject setobj = null;//选中的对象
    bool bUseHashName = true;//是否使用hash作为资源文件名
    string exportResult = null;//导出结果
    string exportPath = null;//导出路径
    bool bUseHashTreeName = false;//是否使用hash作为导出节点名
    string exportNodeName = "";//导出节点名称
    #endregion
    void OnGUI()
    {
        if (exportPath == null)
        {
            string rp = System.IO.Path.GetFullPath(Application.dataPath);
            rp = System.IO.Path.GetDirectoryName(rp);
            rp = System.IO.Path.GetDirectoryName(rp);
            exportPath = System.IO.Path.Combine(rp, "export");
            Debug.Log("outpath=" + exportPath);
        }
        GUILayout.Label("设置导出路径");
        exportPath = EditorGUILayout.TextField("export path", exportPath);
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
        bUseHashName = EditorGUILayout.Toggle("是否使用hash做名字", bUseHashName);
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
            }
            else
            {
                EditorUtility.DisplayDialog("error", "必须选一个gameobject", "close");
            }
        }


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

        foreach (var f in np.bufs)
        {
            if (f.Key.Contains(".jsontree.txt"))//节点文件
            {
                string outfile = null;
                if (bUseHashTreeName)//用hash名字
                    outfile = System.IO.Path.Combine(exportPath, f.Key);
                else//or自定义名字
                    outfile = System.IO.Path.Combine(exportPath, exportNodeName + ".jsontree.txt");
                System.IO.File.WriteAllBytes(outfile, f.Value);
            }
            else
            {
                var file = System.IO.Path.Combine(respath, f.Key);
                System.IO.File.WriteAllBytes(file, f.Value);
            }
        }
    }

    void Update()
    {
    }
}