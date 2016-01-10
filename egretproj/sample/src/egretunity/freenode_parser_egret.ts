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
    export class Entity extends egret3d.Entity
    {
        comps: Array<{}> = [];//记录组件信息
    }
    export class Entity_Mesh extends egret3d.Mesh
    {
        constructor()
        {
            super(new egret3d.SubGeometry(), new egret3d.TextureMaterial());
        }
        comps: Array<{}> = [];//记录组件信息
    }
    export class Parser implements FreeNode.IParser
    {
        constructor(view: egret3d.View3D, lightGroup: egret3d.LightGroup)
        {
            this.view = view;
            this.lightGroup = lightGroup;
        }

        view: egret3d.View3D;
        lightGroup: egret3d.LightGroup;
        ParseNode(parser: FreeNode.SceneParser, json: {}, parent: any): any//处理节点
        {
         
            //判断是否是mesh组件
            var components = <[]>json["components"];
            var ismesh = false;
            if (components != undefined)
            {
                for (var i in components)
                {
                    if (components[i]["type"] == "meshfilter")
                    {
                        ismesh = true;
                    }
                }
            }

            var n: egret3d.Object3D = null;
            if (ismesh == true)
            {
                n = new Entity_Mesh();
            }
            else
            {
                n = new Entity();
            }
            n.name = json["name"];
            console.log("parseNode:" + n.name + " ismesh:" + ismesh);
            if (parent != null)
            {
                var pobj = <egret3d.Object3D>parent;
                pobj.addChild(n);
            }
            else
            {
                this.view.addChild3D(n);
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
        _parseTransform(json: {}, box: FreeNode.StreamBox, node: Entity)
        {

            var sp = (<string>json["transmove"]).split(",");
            var vec3: egret3d.Vector3D = new egret3d.Vector3D(parseFloat(sp[0]), parseFloat(sp[1]), parseFloat(sp[2]));
            node.position = vec3;

            var sp1 = (<string>json["transscale"]).split(",");
            var scale3: egret3d.Vector3D = new egret3d.Vector3D(parseFloat(sp1[0]), parseFloat(sp1[1]), parseFloat(sp1[2]));
            node.scale = scale3;


            var sp2 = (<string>json["transquat"]).split(",");
            var x = parseFloat(sp2[0]);
            var y = parseFloat(sp2[1]);
            var z = parseFloat(sp2[2]);// * -1;
            var w = parseFloat(sp2[3]);// * -1;
            var quat = new egret3d.Quaternion(x, y, z, w);
            var ruler3 = quat.toEulerAngles();
            node.rotation = ruler3;

            console.log("name=" + node.name + "vec3=" + vec3.toString() + " scale3=" + scale3.toString() + " ruler3=" + ruler3.toString());

        }
        _parseMeshFilter(json: {}, box: FreeNode.StreamBox, node: Entity_Mesh)
        {
            var geom = <egret3d.SubGeometry>node.geometry;
            var meshname = <string>json["mesh"];
            //var mesh = parent;

            var _data: FreeNode.MeshData = FreeNode.MeshData.loadMesh(box.cacheBin[meshname]);
            
            //var bdata: BABYLON.VertexData =// BABYLON.VertexData.CreateTorus(3, 3, 3);
            //    new BABYLON.VertexData();
            geom.verticesData = [];
            //bdata.positions = [];//填充位置数据
            for (var i = 0; i < _data.vec3positions.length / 3; i++)
            {
                var x = _data.vec3positions[i * 3 + 0];
                var y = _data.vec3positions[i * 3 + 1];
                var z = _data.vec3positions[i * 3 + 2];

                geom.verticesData.push(x);
                geom.verticesData.push(y);
                geom.verticesData.push(z);
                if (_data.vec3normals != null)
                {
                    var nx = _data.vec3normals[i * 3 + 0];
                    var ny = _data.vec3normals[i * 3 + 1];
                    var nz = _data.vec3normals[i * 3 + 2];
                    geom.verticesData.push(nx);//normal
                    geom.verticesData.push(ny);
                    geom.verticesData.push(nz);
                }
                else
                {
                    geom.verticesData.push(0);//normal
                    geom.verticesData.push(0);
                    geom.verticesData.push(0);
                }
                if (_data.vec4tangents != null)
                {
                    var nx = _data.vec4tangents[i * 4 + 0];
                    var ny = _data.vec4tangents[i * 4 + 1];
                    var nz = _data.vec4tangents[i * 4 + 2];
                    geom.verticesData.push(nx);//tangent
                    geom.verticesData.push(ny);
                    geom.verticesData.push(nz);
                }
                else
                {
                    geom.verticesData.push(0);//tangent
                    geom.verticesData.push(0);
                    geom.verticesData.push(0);
                }
                if (_data.vec4colors != null)
                {
                    var r = _data.vec4colors[i * 4 + 0];
                    var g = _data.vec4colors[i * 4 + 1];
                    var b = _data.vec4colors[i * 4 + 2];
                    var a = _data.vec4colors[i * 4 + 3];
                    geom.verticesData.push(r);//color
                    geom.verticesData.push(g);
                    geom.verticesData.push(b);
                    geom.verticesData.push(a);
                }
                else
                {
                    geom.verticesData.push(1);//color
                    geom.verticesData.push(1);
                    geom.verticesData.push(1);
                    geom.verticesData.push(1);
                }
                if (_data.vec2uvs0 != null)
                {
                    var uvx = _data.vec2uvs0[i * 2 + 0];
                    var uvy = _data.vec2uvs0[i * 2 + 1];
                    geom.verticesData.push(uvx);//uv0
                    geom.verticesData.push(uvy);
                }
                else
                {
                    geom.verticesData.push(0);//uv0
                    geom.verticesData.push(0);
                }
                if (_data.vec2uvs1 != null)
                {
                    var uvx = _data.vec2uvs1[i * 2 + 0];
                    var uvy = _data.vec2uvs1[i * 2 + 1];
                    geom.verticesData.push(uvx);//uv1
                    geom.verticesData.push(uvy);
                }
                else
                {
                    geom.verticesData.push(0);//uv1
                    geom.verticesData.push(0);
                }
            }


            //bdata.indices = [];//填充索引数据
            geom.indexData = [];
            for (var i = 0; i < _data.indices[0].indices.length / 3; i++)
            {
                var v0 = _data.indices[0].indices[i * 3 + 0];
                var v1 = _data.indices[0].indices[i * 3 + 1];
                var v2 = _data.indices[0].indices[i * 3 + 2];

                //翻转裁剪信息
                geom.indexData.push(v0);
                geom.indexData.push(v2);
                geom.indexData.push(v1);
            }

            geom.numItems = geom.indexData.length;

            geom.buildGeomtry();
            geom.buildBoundBox();

            node.box.fillBox(node.geometry.minPos, node.geometry.maxPos);
        }

        _parseMeshRenderer(json: {}, box: FreeNode.StreamBox, node: Entity_Mesh)
        {
            console.log("set mat");
            node.material = new egret3d.TextureMaterial();
            node.material.lightGroup = this.lightGroup;
            node.material.specularColor = 0xffffff;
            node.material.specularPower = 0.5;
            node.material.ambientColor = 0x111111;

            node.material.shininess = 10.0;

            var matstr: string = json["mats"][0];
            var matjson = JSON.parse(box.cacheTxt[matstr]);
            //var mat = new BABYLON.StandardMaterial("texture1", parent.getScene());

            if (matjson["mainColor"] != undefined)
            {
                var sp = (<string>matjson["mainColor"]).split(",");
                var r = parseInt(sp[0]) / 255.0;
                var g = parseInt(sp[1]) / 255.0;
                var b = parseInt(sp[2]) / 255.0;
                var a = parseInt(sp[3]) / 255.0;
                var c = new egret3d.Color(r, g, b, a);
                node.material.diffuseColor = c.getColor();
                //    mat.diffuseColor = new BABYLON.Color3(r, g, b);
                //    mat.alpha = a;
            }
            if (matjson["mainTexture"] != undefined)
            {
                var tex = matjson["mainTexture"];
                var texurl = box.cachePic[tex];
                console.log("texurl=" + texurl);
                    
                //var tloadr = new egret3d.TextureLoader(texurl);
                
                //    //
                //    mat.diffuseTexture = new BABYLON.Texture(box.baseUrl + "/" + matjson["mainTexture"], parent.getScene());

            }
            //parent.material = mat;
        }
    }
}