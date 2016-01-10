///<reference path="freenode.ts" />


namespace FreeNode.ForEgret3D
{

    export class Node extends egret3d.Mesh //继承Babylon的Mesh扩展我们的节点
    {
        constructor(name: string)
        {
            super(null, null);
        }
        //增加组件信息
        componentinfo: {}
    }
    export class Parser implements FreeNode.IParser
    {
        constructor(view: egret3d.View3D)
        {
            this.view = view;
        }

        view: egret3d.View3D;

        ParseNode(parser: FreeNode.SceneParser, json: {}, parent: any): any//处理节点
        {
            //判断是否是mesh组件
            var components = <[]>json["components"];
            var mesh = false;
            if (components != undefined)
            {
                for (var i in components)
                {
                    if (components[i]["type"] == "meshfilter")
                    {
                        mesh = true;
                    }
                }
            }

            var n: egret3d.Object3D = null;
            if (mesh == false)
                n = new egret3d.Mesh(null, null);
            else
                n = new egret3d.Entity();

            n.name = json["name"];

            if (parent != null)
            {
                var pobj = <egret3d.Object3D>parent;
                if (pobj != null)
                {
                    pobj.addChild(n);
                }
                else
                {
                    this.view.addChild3D(n);
                }
            }

            return n;
        }

        ParseComponent(parser: FreeNode.SceneParser, json: {}, box: FreeNode.StreamBox, parent: any): any//处理组件
        {
            if (json["type"] == "transform")
            {
                this._parseTransform(json, box, parent);
            }
            if (json["type"] == "meshfilter")
            {
                this._parseMeshFilter(json, box, parent);
            }
            if (json["type"] == "meshrenderer")
            {
                this._parseMeshRenderer(json, box, parent);
            }
            console.log("parse com:" + json["type"]);
        }
        _parseTransform(json: {}, box: FreeNode.StreamBox, parent: egret3d.Object3D)
        {
            var mesh = parent;
            var sp = (<string>json["transmove"]).split(",");
            var vec3: egret3d.Vector3D = new egret3d.Vector3D(parseFloat(sp[0]), parseFloat(sp[1]), parseFloat(sp[2]));

            mesh.position = vec3;

            var sp1 = (<string>json["transscale"]).split(",");

            mesh.scaleX= parseFloat(sp1[0]);
            mesh.scaleY = parseFloat(sp1[1]);
            mesh.scaleZ = parseFloat(sp1[2]);

            var sp2 = (<string>json["transquat"]).split(",");
            var x = parseFloat(sp2[0]);
            var y = parseFloat(sp2[1]);
            var z = parseFloat(sp2[2]);// * -1;
            var w = parseFloat(sp2[3]);// * -1;
            var quat = new egret3d.Quaternion(x, y, z, w);
            mesh.rotation = quat.toEulerAngles();
        }
        _parseMeshFilter(json: {}, box: FreeNode.StreamBox, parent: egret3d.Mesh)
        {
            //var meshname = <string>json["mesh"];
            //var mesh = parent;

            //var _data: FreeNode.MeshData = FreeNode.MeshData.loadMesh(box.cacheBin[meshname]);
            //var bdata: BABYLON.VertexData =// BABYLON.VertexData.CreateTorus(3, 3, 3);
            //    new BABYLON.VertexData();

            //bdata.positions = [];//填充位置数据
            //for (var i = 0; i < _data.vec3positions.length / 3; i++)
            //{
            //    var x = _data.vec3positions[i * 3 + 0];
            //    var y = _data.vec3positions[i * 3 + 1];
            //    var z = _data.vec3positions[i * 3 + 2];



            //    bdata.positions.push(x);
            //    bdata.positions.push(y);
            //    bdata.positions.push(-z);
            //}
            //bdata.normals = [];//填充位置数据
            //for (var i = 0; i < _data.vec3normals.length; i++)
            //{
            //    bdata.normals.push(_data.vec3normals[i]);
            //}
            //bdata.uvs = []//填充uv数据
            //for (var i = 0; i < _data.vec2uvs0.length; i++)
            //{
            //    bdata.uvs.push(_data.vec2uvs0[i]);
            //}

            //bdata.indices = [];//填充索引数据
            //for (var i = 0; i < _data.indices[0].indices.length; i++)
            //{
            //    bdata.indices.push(_data.indices[0].indices[i]);
            //}


            //bdata.applyToMesh(mesh);
        }

        _parseMeshRenderer(json: {}, box: FreeNode.StreamBox, parent: egret3d.Mesh)
        {
            //var matstr: string = json["mats"][0];
            //var matjson = JSON.parse(box.cacheTxt[matstr]);
            //var mat = new BABYLON.StandardMaterial("texture1", parent.getScene());

            //if (matjson["mainColor"] != undefined)
            //{
            //    var sp = (<string>matjson["mainColor"]).split(",");
            //    var r = parseInt(sp[0]) / 255.0;
            //    var g = parseInt(sp[1]) / 255.0;
            //    var b = parseInt(sp[2]) / 255.0;
            //    var a = parseInt(sp[3]) / 255.0;
            //    mat.diffuseColor = new BABYLON.Color3(r, g, b);
            //    mat.alpha = a;
            //}
            //if (matjson["mainTexture"] != undefined)
            //{
            //    //
            //    mat.diffuseTexture = new BABYLON.Texture(box.baseUrl + "/" + matjson["mainTexture"], parent.getScene());

            //}
            //parent.material = mat;
        }
    }
}