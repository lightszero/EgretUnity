

//这个接口由外部实现，可以兼容各种各样的3D lib

namespace FreeNode
{
    export interface IParser
    {
        ParseNode(parser: SceneParser, json: {}, parent: any): any;//处理节点

        ParseComponent(parser: SceneParser, json: {}, box: FreeNode.StreamBox, parent: any): any;//处理组件
    }
    export class Error//typescirpt 使用export关键字
    {
        constructor(_info: string)
        {
            this.info = _info;
        }
        public info: string;
    }
    export enum StreamBoxState
    {
        NotInit,
        Inited,
    }


    export class StreamBox
    {
        constructor(baseUrl: string)
        {
            this.baseUrl = baseUrl;
        }
        baseUrl: string;
        public cacheTxt: { [id: string]: string; } = {};
        public cacheBin: { [id: string]: ArrayBuffer; } = {};
        public cachePic: { [id: string]: string; } = {};
        public initState: StreamBoxState = StreamBoxState.NotInit;
        taskCount: number = 0;
        taskFinish: number = 0;

        public picPreDownload: boolean = true;
        public picUseDataUrl: boolean = true;
        public loadTxt(baseurl: string, name: string)
        {
            var rname = name;
            var i: number = rname.lastIndexOf("/");
            if (i >= 0)
                rname = rname.substring(i + 1);
            this.cacheTxt[rname] = null;
            this.taskCount++;
            loadTool.loadText(baseurl + "/" + name, (_txt, _err) =>
            {
                if (_err == null)
                {
                    this.cacheTxt[rname] = _txt;
                    this.taskFinish++;
                    console.log("task(" + this.taskFinish + "/" + this.taskCount + " got txt=" + name + " len=" + _txt.length);
                    if (this.taskCount == this.taskFinish && this.initState == StreamBoxState.Inited) this.onLoadFinish();
                }
            }
            );
        }
        public loadBin(baseurl: string, name: string)
        {
            var rname = name;
            var i: number = rname.lastIndexOf("/");
            if (i >= 0)
                rname = rname.substring(i + 1);
            this.cacheBin[rname] = null;
            this.taskCount++;
            loadTool.loadArrayBuffer(baseurl + "/" + name, (_bin, _err) =>
            {
                if (_err == null)
                {
                    //ParseTool.loadMesh(_bin);
                    this.cacheBin[rname] = _bin;
                    this.taskFinish++;

                    console.log("task(" + this.taskFinish + "/" + this.taskCount + " got bin=" + name + " len=" + _bin.byteLength);

                    if (this.taskCount == this.taskFinish && this.initState == StreamBoxState.Inited) this.onLoadFinish();
                }
            }
            );
        }
        public loadPic(baseurl: string, name: string)
        {
            var rname = name;
            var i: number = rname.lastIndexOf("/");
            if (i >= 0)
                rname = rname.substring(i + 1);

            this.cachePic[rname] = null;
            this.taskCount++;

            var cacheurl: string = baseurl + "/" + name;
            if (this.picPreDownload == false)
            {
                this.cachePic[rname] = cacheurl;
                this.taskFinish++;
                return;
            }
            loadTool.loadBlob(cacheurl, (_blob, _err) =>
            {
                if (_err == null)
                {
                    if (_blob.size < 65535 && this.picUseDataUrl == true)
                    {//do a dataurl

                        var fr: FileReader = (new FileReader());
                        fr.onload = (e) =>
                        {
                            this.cachePic[rname] = fr.result;
                            this.taskFinish++;

                            console.log("task(" + this.taskFinish + "/" + this.taskCount + " got pic=" + this.cachePic[name]);

                            if (this.taskCount == this.taskFinish && this.initState == StreamBoxState.Inited) this.onLoadFinish();

                        };
                        fr.readAsDataURL(_blob);
                        return;
                    }
                    else
                    {//just do a cache
                        this.cachePic[rname] = cacheurl;

                    }
                    this.taskFinish++;

                    console.log("task(" + this.taskFinish + "/" + this.taskCount + " got pic=" + this.cachePic[name]);

                    if (this.taskCount == this.taskFinish && this.initState == StreamBoxState.Inited) this.onLoadFinish();


                }
            }
            );
        }
        public onLoadFinish: () => void;

        ///picpredown，是否下载一次图片
        ///picusedataurl，自动下载图片后，是否将小图片（低于64k）的转换为dataurl
        ///因为egret3d不支持dataurl，所以增加两个开关控制
        static CreateFromIndexFile(url: string, func: () => void, picPredown: boolean = true, picUseDataurl: boolean = true): StreamBox
        {
            var i = url.lastIndexOf("/");
            var baseurl = url.substring(0, i);

            var box = new StreamBox(baseurl);
            box.picPreDownload = picPredown;
            console.log("StreamBox CreateByIndex:" + url);
            loadTool.loadText(url, (_t, _e) =>
            {
                //console.log("baseurl=" + baseurl);
                var json = <[]>JSON.parse(_t);
                //现在是个array
                for (var i = 0; i < json.length; i++)
                {
                    var obj = <{}>json[i];

                    var name = <string>obj["Name"];
                    var len = <number>obj["Length"];
                    var extname = name.substr(name.indexOf("."));
                    if (extname == ".mesh.bin" || extname == ".aniclip.bin")
                    {
                        box.loadBin(baseurl, name);
                        //console.log("got mesh" + name + "|len=" + len);
                        continue;
                    }
                    if (extname == ".jsonmat.txt")
                    {
                        box.loadTxt(baseurl, name);
                        //console.log("got mat" + name + "|len=" + len);
                        continue;
                    }
                    if (extname == ".jsontree.txt")
                    {
                        box.loadTxt(baseurl, name);
                        //console.log("got tree" + name + "|len=" + len);
                        continue;
                    }
                    if (extname == ".jpg" || extname == ".png")
                    {
                        box.loadPic(baseurl, name);
                        //console.log("got pic" + name + "|len=" + len);
                        continue;
                    }
                    //console.log("name=" + name + "|len=" + len);

                }
                box.onLoadFinish = () =>
                {
                    console.log("StreamBoxFinish");
                    func();
                }
                box.initState = StreamBoxState.Inited;
                console.log("StreamBoxInit" + " Task=" + box.taskCount);

            }
            );
            return box;
        }

        public FindTxt(name: string): string
        {
            for (var key in this.cacheTxt)
            {
                if ((<string>key).indexOf(name) >= 0)
                {
                    return this.cacheTxt[key];
                }
            }
            return null;
        }
        public FindBin(name: string): ArrayBuffer
        {
            for (var key in this.cacheBin)
            {
                if ((<string>key).indexOf(name) >= 0)
                {
                    return this.cacheBin[key];
                }
            }
            return null;
        }
        public FindPicUrl(name: string): string
        {
            for (var key in this.cachePic)
            {
                if ((<string>key).indexOf(name) >= 0)
                {
                    return this.cachePic[key];
                }
            }
            return null;
        }
    }
    export class loadTool
    {
        static loadText(url: string, fun: (_txt: string, _err: Error) => void): void
        {
            var req = new XMLHttpRequest();
            req.open("GET", url);
            req.onreadystatechange = () =>
            {
                if (req.readyState == 4)
                {
                    fun(req.responseText, null);
                }
            };
            req.onerror = () =>
            {
                fun(null, new Error("onerr in req:"));
            };
            req.send();
        }


        static loadArrayBuffer(url: string, fun: (_bin: ArrayBuffer, _err: Error) => void): void
        {
            var req = new XMLHttpRequest();

            req.open("GET", url);
            req.responseType = "arraybuffer";//ie 一定要在open之后修改responseType
            req.onreadystatechange = () =>
            {
                if (req.readyState == 4)
                {
                    //console.log("got bin:" + typeof (req.response) + req.responseType);
                    fun(req.response, null);
                }
            };
            req.onerror = () =>
            {
                fun(null, new Error("onerr in req:"));
            };
            req.send();
        }

        static loadBlob(url: string, fun: (_blob: Blob, _err: Error) => void): void
        {
            var req = new XMLHttpRequest();

            req.open("GET", url);
            req.responseType = "blob";//ie 一定要在open之后修改responseType
            req.onreadystatechange = () =>
            {
                if (req.readyState == 4)
                {
                    //console.log("got _blob:" + typeof (req.response) + req.responseType);
                    fun(req.response, null);
                }
            };
            req.onerror = () =>
            {
                fun(null, new Error("onerr in req:"));
            };
            req.send();
        }


    }
    export class SubMesh
    {
        drawstyle: number;
        indices: Uint32Array;
    }
    export class MeshData
    {
        name: string;

        vec3positions: Float32Array;
        vec3normals: Float32Array = null;
        vec4tangents: Float32Array = null;
        vec2uvs0: Float32Array = null;
        vec2uvs1: Float32Array = null;

        //以下两个数据并没什么卵用
        //vec2uvs2: Float32Array = null;
        //vec2uvs3: Float32Array;
        vec4colors: Float32Array = null;

        vec10tpose: Float32Array = null;//tpose 使用的是10个float32，pos xyz，scale xyz，quat xyzw
        vec8widget: Float32Array = null;
        //matricesIndices: number[];
        //matricesWeights: number[];
        indices: SubMesh[];

        static loadMesh(buf: ArrayBuffer): MeshData
        {
            var meshdata: MeshData = new MeshData();
            var read: Reader = new Reader(buf);
            meshdata.name = read.readString();

            var bound = read.readBound();


            var vcount = read.readUInt32();

            while (true)
            {
                var tag = read.readUInt8();
                if (tag == 255) break;
                if (tag == 1)//pos
                {
                    meshdata.vec3positions = new Float32Array(vcount * 3);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec3positions[i * 3 + 0] = read.readSingle();//x
                        meshdata.vec3positions[i * 3 + 1] = read.readSingle();//y
                        meshdata.vec3positions[i * 3 + 2] = read.readSingle();//z
                    }
                }
                else if (tag == 2)//color
                {
                    meshdata.vec4colors = new Float32Array(vcount * 4);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec4colors[i * 4 + 0] = read.readUInt8();//a
                        meshdata.vec4colors[i * 4 + 1] = read.readUInt8();//r
                        meshdata.vec4colors[i * 4 + 2] = read.readUInt8();//g
                        meshdata.vec4colors[i * 4 + 4] = read.readUInt8();//b
                    }
                }
                else if (tag == 3)//normal
                {
                    meshdata.vec3normals = new Float32Array(vcount * 3);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec3normals[i * 3 + 0] = read.readSingle();//x
                        meshdata.vec3normals[i * 3 + 1] = read.readSingle();//y
                        meshdata.vec3normals[i * 3 + 2] = read.readSingle();//z
                    }
                }
                else if (tag == 4)//uv
                {
                    meshdata.vec2uvs0 = new Float32Array(vcount * 2);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec2uvs0[i * 2 + 0] = read.readSingle();//u
                        meshdata.vec2uvs0[i * 2 + 1] = read.readSingle();//v

                    }
                }
                else if (tag == 5)//uv1
                {
                    meshdata.vec2uvs1 = new Float32Array(vcount * 2);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec2uvs1[i * 2 + 0] = read.readSingle();//u
                        meshdata.vec2uvs1[i * 2 + 1] = read.readSingle();//v

                    }
                }
                else if (tag == 6)//uv2
                {
                    //meshdata.vec2uvs2 = new Float32Array(vcount * 2);
                    for (var i = 0; i < vcount; i++)
                    {
                        //meshdata.vec2uvs2[i * 2 + 0] =
                        read.readSingle();//u
                        //meshdata.vec2uvs2[i * 2 + 1] =
                        read.readSingle();//v

                    }
                }
                else if (tag == 7)//tangent
                {
                    meshdata.vec4tangents = new Float32Array(vcount * 4);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec4tangents[i * 4 + 0] = read.readSingle();//x
                        meshdata.vec4tangents[i * 4 + 1] = read.readSingle();//y
                        meshdata.vec4tangents[i * 4 + 2] = read.readSingle();//z
                        meshdata.vec4tangents[i * 4 + 4] = read.readSingle();//w
                    }
                }
                else if (tag == 8)//uv3
                {
                    for (var i = 0; i < vcount; i++)
                    {
                        //meshdata.vec2uvs2[i * 2 + 0] =
                        read.readSingle();//u
                        //meshdata.vec2uvs2[i * 2 + 1] =
                        read.readSingle();//v

                    }
                }
                else if (tag == 16)//tpose
                {
                    var tposelen = read.readUInt8();
                    meshdata.vec10tpose = new Float32Array(tposelen * 10);
                    for (var i = 0; i < tposelen; i++)
                    {
                        meshdata.vec10tpose[i * 10 + 0] = read.readSingle();//posx;
                        meshdata.vec10tpose[i * 10 + 1] = read.readSingle();//posy;
                        meshdata.vec10tpose[i * 10 + 2] = read.readSingle();//posz;
                        meshdata.vec10tpose[i * 10 + 3] = read.readSingle();//scalex;
                        meshdata.vec10tpose[i * 10 + 4] = read.readSingle();//scaley;
                        meshdata.vec10tpose[i * 10 + 5] = read.readSingle();//scalez;
                        meshdata.vec10tpose[i * 10 + 6] = read.readSingle();//quatx;
                        meshdata.vec10tpose[i * 10 + 7] = read.readSingle();//quaty;
                        meshdata.vec10tpose[i * 10 + 8] = read.readSingle();//quatz;
                        meshdata.vec10tpose[i * 10 + 9] = read.readSingle();//quatw;
                    }
                }
                else if (tag == 17)//skinwidget;
                {
                    meshdata.vec8widget = new Float32Array(vcount * 8);
                    for (var i = 0; i < vcount; i++)
                    {
                        meshdata.vec8widget[i * 8 + 0] = read.readUInt32();//index0;
                        meshdata.vec8widget[i * 8 + 1] = read.readUInt32();//index1;
                        meshdata.vec8widget[i * 8 + 2] = read.readUInt32();//index2;
                        meshdata.vec8widget[i * 8 + 3] = read.readUInt32();//index3;
                        meshdata.vec8widget[i * 8 + 4] = read.readSingle();//widget0;
                        meshdata.vec8widget[i * 8 + 5] = read.readSingle();//widget1;
                        meshdata.vec8widget[i * 8 + 6] = read.readSingle();//widget2;
                        meshdata.vec8widget[i * 8 + 7] = read.readSingle();//widget3;
                    }
                }
                else
                {
                    throw "notwrite" + tag;
                }
            }

            var subcount = read.readUInt8();
            meshdata.indices = [];
            for (var i = 0; i < subcount; i++)
            {
                var tv = read.readUInt32();

                var sublen = read.readUInt32();
                meshdata.indices.push(new SubMesh());
                meshdata.indices[i].drawstyle = tv;
                meshdata.indices[i].indices = new Uint32Array(sublen);
                for (var j = 0; j < sublen; j++)
                {
                    meshdata.indices[i].indices[j] = read.readUInt32();
                }

            }
            return meshdata;
            //贴图的加载是特殊的，不能全用二进制统一处理了
            //var crateImage: HTMLImageElement = new HTMLImageElement();
            //crateImage.src = "";
      
        }

    }
    export class Reader
    {
        buf: ArrayBuffer;
        data: DataView;
        constructor(buf: ArrayBuffer, seek: number = 0)
        {
            this.seek = seek;
            this.buf = buf;
            this.data = new DataView(this.buf, seek);
        }
        seek: number;
        readString(): string
        {
            var slen = this.data.getUint8(this.seek);
            this.seek++;
            var bs: string = "";
            for (var i = 0; i < slen; i++)
            {
                bs += String.fromCharCode(this.data.getUint8(this.seek));
                this.seek++;
            }
            return bs;
        }
        readBound(): any
        {
            this.seek += 24;
            return null;
        }
        readUInt32(): number
        {
            var num = this.data.getUint32(this.seek, true);
            this.seek += 4;
            return num;
        }
        readSingle(): number
        {
            var num = this.data.getFloat32(this.seek, true);
            this.seek += 4;
            return num;
        }
        readUInt8(): number
        {
            var num = this.data.getUint8(this.seek);
            this.seek += 1;
            return num;
        }
    }
    export class Vector3
    {
        constructor(x: number, y: number, z: number)
        {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        x: number;
        y: number;
        z: number;
        Clone(): Vector3
        {
            return new Vector3(this.x, this.y, this.z);
        }
    }
    export class Quaternion
    {
        constructor(_x: number, _y: number, _z: number, _w: number)
        {
            this.x = _x;
            this.y = _y;
            this.z = _z;
            this.w = _w;
        }
        x: number;
        y: number;
        z: number;
        w: number;
        Clone(): Quaternion
        {
            return new Quaternion(this.x, this.y, this.z, this.w);
        }
    }
    export class SubClip
    {
        name: string = "noname";
        loop: boolean;

        startframe: number;
        endframe: number;
    }
    export enum changetag
    {
        NoChange = 0,
        Trans = 1,
        Rotate = 2,
        Scale = 4,
        TransRotate = 3,
        TransScale = 5,
        RotateScale = 6,
        All = 7,
    }
    export class PoseBoneMatrix
    {
        t: Vector3;
        s: Vector3;
        r: Quaternion;
        tag: changetag;
        Clone(): PoseBoneMatrix
        {
            var p = new PoseBoneMatrix();
            p.t = this.t;
            p.s = this.s;
            p.r = this.r;
            p.tag = this.tag;
            return p;
        }
        load(read: Reader, last: PoseBoneMatrix)
        {
            this.tag = <changetag>read.readUInt8();
            var savetag = <changetag>read.readUInt8();
            if ((savetag & changetag.Rotate) > 0)
            {
                var x = read.readSingle();
                var y = read.readSingle();
                var z = read.readSingle();
                var w = read.readSingle();
                this.r = new Quaternion(x, y, z, w);
            }
            else
            {
                this.r = last.r.Clone();
            }
            if ((savetag & changetag.Trans) > 0)
            {
                var x = read.readSingle();
                var y = read.readSingle();
                var z = read.readSingle();
                this.t = new Vector3(x, y, z);
            }
            else
            {
                this.t = last.t.Clone();
            }
            if ((savetag & changetag.Scale) > 0)
            {
                var x = read.readSingle();
                var y = read.readSingle();
                var z = read.readSingle();
                this.s = new Vector3(x, y, z);
            }
            else
            {
                this.s = last.s.Clone();
            }
        }
    }
    export class Frame
    {
        fid: number;
        key: boolean;
        bonedata: PoseBoneMatrix[];
    }
    export class AniClipData
    {
        name: string;
        fps: number;
        loop: boolean;
        boneinfo: string[];
        subclips: SubClip[];
        frames: Frame[];

        static loadClip(buf: ArrayBuffer): AniClipData
        {
            var clipdata: AniClipData = new AniClipData();
            var read: Reader = new Reader(buf);
            clipdata.name = read.readString();
            clipdata.fps = read.readSingle();
            clipdata.loop = read.readUInt8() > 0;
            {//boneinfo
                var bcount = read.readUInt32();
                clipdata.boneinfo = [];
                for (var i = 0; i < bcount; i++)
                {
                    clipdata.boneinfo.push(read.readString());
                }
            }
            {
                //subclips
                clipdata.subclips = [];
                var scount = read.readUInt32();
                for (var i = 0; i < scount; i++)
                {
                    var sc = new SubClip();
                    sc.name = read.readString();
                    sc.loop = read.readUInt8() > 0;
                    sc.startframe = read.readUInt32();
                    sc.endframe = read.readUInt32();

                    clipdata.subclips.push(sc);
                }
            }
            {//frame
                clipdata.frames = [];
                var fcount = read.readUInt32();

                for (var i = 0; i < fcount; i++)
                {
                    var f = new Frame();
                    f.fid = read.readUInt32();
                    f.key = read.readUInt8() > 0;
                    clipdata.frames.push(f);

                    clipdata.frames[i].bonedata = [];
                    for (var ib = 0; ib < clipdata.boneinfo.length; ib++)
                    {
                        clipdata.frames[i].bonedata.push(new PoseBoneMatrix());
                        clipdata.frames[i].bonedata[ib].load(read,
                            i > 0 ? clipdata.frames[i - 1].bonedata[ib] : null);
                    }
                }
            }
            return clipdata;
        }
    }
    export class SceneParser
    {
        parser: IParser;
        box: StreamBox;
        center: Vector3
        max: Vector3
        min: Vector3
        constructor(parser: IParser, box: StreamBox)
        {
            this.parser = parser;
            this.box = box;
            this.center = new Vector3(0, 0, 0);
        }

        public ParseScene(): any
        {
            var txt = this.box.FindTxt(".jsontree.txt");
            var scene = <{}>JSON.parse(txt);

            return this._parseNode(scene, null);
        }
        private _parseNode(json: {}, pnode: any): any
        {
            var name = <string>json["name"];
            var node = this.parser.ParseNode(this, json, pnode);
            //console.log("pnode:" + name);
            
            var components = <[]>json["components"];
            if (components != undefined)
                for (var i = 0; i < components.length; i++)
                {
                    var type = components[i]["type"];
                    //console.log("pcom:" + type);
                    this.parser.ParseComponent(this, components[i], this.box, node);
                }
            var children = <[]>json["children"];
            if (children != undefined)
                for (var i = 0; i < children.length; i++)
                {
                    this._parseNode(children[i], node);
                }
            return node;
        }

        static readString(data: DataView, seek: number): number
        {
            var slen = data.getUint8(seek);
            seek++;
            var bs: number[] = [];
            for (var i = 0; i < slen; i++)
            {
                bs.push(data.getUint8(seek));
                seek++;
            }
            return seek;
        }



    }


}