using System;
using System.Collections.Generic;
using System.Text;
using UnityEditor;
using UnityEngine;
using WebSocketSharp;

class windowEgretDebuger : EditorWindow
{
    [MenuItem("EgretUnity/ShowDebuger")]
    static void ShowWindow()
    {
        var window = EditorWindow.GetWindow<windowEgretDebuger>(true, "EgretUnity " + windowEgretUnity.version);
        window.Show();
    }
    static DebugServer server = null;
    void OnGUI()
    {
        GUILayout.Label("debuger");

        GUILayout.Label("server state:" + server == null ? "close" : "open");
        if (server == null)
        {
            if (GUILayout.Button("StartServer"))
            {
                server = new DebugServer();
            }
        }
        else
        {
            if(GUILayout.Button("EndServer"))
            {
                server.Close();
                server = null;
            }
        }
    }
    class DebugServer : WebSocketSharp.Server.WebSocketBehavior
    {
        WebSocketSharp.Server.WebSocketServer server;
        public DebugServer()
        {
            server = new WebSocketSharp.Server.WebSocketServer("ws://127.0.0.1:8809");
            server.AddWebSocketService<DebugServer>("/Debug",
                () =>
                {
                    return this;
                });
            server.Start();
        }
        public void Close()
        {
            server.Stop();
        }
        protected override void OnMessage(MessageEventArgs e)
        {
            if (e.IsText)
            {
                Debug.LogWarning("recv:" + e.Data);
            }
            Send("Got Str.");
        }
    }
}
