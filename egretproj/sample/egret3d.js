var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.DrawMode
     * @classdesc
     * 渲染类型
     */
    var DrawMode = (function () {
        function DrawMode() {
        }
        return DrawMode;
    })();
    egret3d.DrawMode = DrawMode;
    /**
     * @class egret3d.Egret3DDrive
     * @classdesc
     * 3d 驱动
     */
    var Egret3DDrive = (function () {
        function Egret3DDrive() {
        }
        /**
        * @language zh_CN
        * get GPU Context3D
        * 获取GPU交换链表程序
        * @param GPU_CONFIG
        * @param canvasRec
        * @event call
        */
        Egret3DDrive.requstContext3D = function (GPU_CONFIG, canvasRec, call) {
            console.log("requst GPU Config", GPU_CONFIG);
            if (!this.context3D || (this.context3D && !this.context3D.isLost)) {
                switch (GPU_CONFIG) {
                    case Egret3DDrive.OpenGLES_2_0:
                        var tapContext3D = Egret3DDrive.requstWEBGL(canvasRec);
                        Egret3DDrive.context3D = new egret3d.Context3DChild_OpenGLES_2_0(tapContext3D);
                        var ext = tapContext3D.getExtension('WEBGL_compressed_texture_s3tc');
                        var OES_texture_float = tapContext3D.getExtension("OES_texture_float");
                        ///if (!OES_texture_float) {
                        ///    alert("OES_texture_float Texture is not available");
                        ///}
                        ///else
                        ///    alert("OES_texture_float Texture");
                        Egret3DDrive.BLEND = tapContext3D.BLEND;
                        DrawMode.TRIANGLES = tapContext3D.TRIANGLES;
                        DrawMode.POINTS = tapContext3D.POINTS;
                        DrawMode.LINES = tapContext3D.LINES;
                        DrawMode.LINE_STRIP = tapContext3D.LINE_STRIP;
                        Egret3DDrive.FLOAT = tapContext3D.FLOAT;
                        Egret3DDrive.VERTEX_SHADER = tapContext3D.VERTEX_SHADER;
                        Egret3DDrive.FRAGMENT_SHADER = tapContext3D.FRAGMENT_SHADER;
                        Egret3DDrive.canvasRectangle = canvasRec;
                        Egret3DDrive.CULL_FACE = tapContext3D.CULL_FACE;
                        Egret3DDrive.FRONT = tapContext3D.FRONT;
                        Egret3DDrive.BACK = tapContext3D.BACK;
                        Egret3DDrive.DEPTH_BUFFER_BIT = tapContext3D.DEPTH_BUFFER_BIT;
                        Egret3DDrive.ELEMENT_ARRAY_BUFFER = tapContext3D.ELEMENT_ARRAY_BUFFER;
                        Egret3DDrive.UNSIGNED_SHORT = tapContext3D.UNSIGNED_SHORT;
                        Egret3DDrive.NEAREST = tapContext3D.NEAREST;
                        Egret3DDrive.REPEAT = tapContext3D.REPEAT;
                        Egret3DDrive.ONE = tapContext3D.ONE;
                        Egret3DDrive.ZERO = tapContext3D.ZERO;
                        Egret3DDrive.SRC_ALPHA = tapContext3D.SRC_ALPHA;
                        Egret3DDrive.ONE_MINUS_SRC_ALPHA = tapContext3D.ONE_MINUS_SRC_ALPHA;
                        Egret3DDrive.SRC_COLOR = tapContext3D.SRC_COLOR;
                        Egret3DDrive.ONE_MINUS_SRC_COLOR = tapContext3D.ONE_MINUS_SRC_COLOR;
                        ;
                        Egret3DDrive.ColorFormat_RGB565 = tapContext3D.RGB565;
                        Egret3DDrive.ColorFormat_RGBA5551 = tapContext3D.RGB5_A1;
                        Egret3DDrive.ColorFormat_RGBA4444 = tapContext3D.RGBA4;
                        Egret3DDrive.ColorFormat_RGBA8888 = tapContext3D.RGBA;
                        if (ext) {
                            Egret3DDrive.ColorFormat_DXT1_RGB = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            Egret3DDrive.ColorFormat_DXT1_RGBA = ext.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            Egret3DDrive.ColorFormat_DXT3_RGBA = ext.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            Egret3DDrive.ColorFormat_DXT5_RGBA = ext.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        }
                        egret3d.ContextSamplerType.TEXTURE_0 = tapContext3D.TEXTURE0;
                        egret3d.ContextSamplerType.TEXTURE_1 = tapContext3D.TEXTURE1;
                        egret3d.ContextSamplerType.TEXTURE_2 = tapContext3D.TEXTURE2;
                        egret3d.ContextSamplerType.TEXTURE_3 = tapContext3D.TEXTURE3;
                        egret3d.ContextSamplerType.TEXTURE_4 = tapContext3D.TEXTURE4;
                        egret3d.ContextSamplerType.TEXTURE_5 = tapContext3D.TEXTURE5;
                        egret3d.ContextSamplerType.TEXTURE_6 = tapContext3D.TEXTURE6;
                        egret3d.ContextSamplerType.TEXTURE_7 = tapContext3D.TEXTURE7;
                        egret3d.ContextSamplerType.TEXTURE_8 = tapContext3D.TEXTURE8;
                        break;
                }
            }
            egret3d.CheckerboardTexture.texture.upload(Egret3DDrive.context3D);
            console.log("requst GPU Config", Egret3DDrive.context3D);
            egret3d.ShaderSystemTool.regist(call);
        };
        Egret3DDrive.requstWEBGL = function (viewPort) {
            Egret3DDrive.canvas = document.createElement("canvas");
            document.body.appendChild(this.canvas);
            Egret3DDrive.canvas.id = "egret3D";
            Egret3DDrive.canvas["x"] = viewPort.x;
            Egret3DDrive.canvas["y"] = viewPort.y;
            Egret3DDrive.canvas.width = viewPort.width;
            Egret3DDrive.canvas.height = viewPort.height;
            Egret3DDrive.clientRect = Egret3DDrive.canvas.getBoundingClientRect();
            Egret3DDrive.canvas.oncontextmenu = function () {
                return false;
            };
            var gl = this.canvas.getContext("experimental-webgl");
            if (!gl)
                gl = this.canvas.getContext("webgl");
            console.log("this.context3D ==>", this.context3D);
            if (!gl)
                alert("you drivers not suport webgl");
            return gl;
        };
        /**
        * @language zh_CN
        * 请求全屏
        */
        Egret3DDrive.requestFullScreen = function () {
            var dom = document.documentElement;
            if (dom.requestFullscreen) {
                dom.requestFullscreen();
            }
            else if (dom.webkitRequestFullScreen) {
                dom.webkitRequestFullScreen();
            }
        };
        /**
        * @language zh_CN
        * 退出全屏
        */
        Egret3DDrive.exitFullscreen = function () {
            var de = document;
            if (de.exitFullscreen) {
                de.exitFullscreen();
            }
            else if (de.webkitCancelFullScreen) {
                de.webkitCancelFullScreen();
            }
        };
        Egret3DDrive.Direct3D_Opengl_Auto = "Direct3D_Opengl_Auto";
        Egret3DDrive.Direct3D_9_0 = "Direct3D_9_0";
        Egret3DDrive.Direct3D_10_0 = "Direct3D_10_0";
        Egret3DDrive.Direct3D_11_0 = "Direct3D_11_0";
        Egret3DDrive.OpenGLES_2_0 = "OpenGLES_2_0";
        Egret3DDrive.OpenGLES_3_0 = "OpenGLES_3_0";
        Egret3DDrive.OpenGL = "OpenGL";
        Egret3DDrive.ColorFormat_DXT1_RGB = 0;
        Egret3DDrive.ColorFormat_DXT1_RGBA = 0;
        Egret3DDrive.ColorFormat_DXT3_RGBA = 0;
        Egret3DDrive.ColorFormat_DXT5_RGBA = 0;
        return Egret3DDrive;
    })();
    egret3d.Egret3DDrive = Egret3DDrive;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var MipmapData = (function () {
        function MipmapData(data, width, height) {
            this.data = data;
            this.width = width;
            this.height = height;
        }
        return MipmapData;
    })();
    egret3d.MipmapData = MipmapData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    ///export enum number { Unknown = 0x0000, RGB565 = 0x8d62, RGBA5551 = 0x8057, RGBA4444 = 0x8056, RGBA8888 = 0x1908, DXT1_RGB = 0x83f0, DXT1_RGBA = 0x83f1, DXT3_RGBA = 0x83f2, DXT5_RGBA = 0x83f3 };
    (function (InternalFormat) {
        InternalFormat[InternalFormat["PixelArray"] = 0] = "PixelArray";
        InternalFormat[InternalFormat["CompressData"] = 1] = "CompressData";
        InternalFormat[InternalFormat["ImageData"] = 2] = "ImageData";
    })(egret3d.InternalFormat || (egret3d.InternalFormat = {}));
    var InternalFormat = egret3d.InternalFormat;
    ;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var openGLES;
    (function (openGLES) {
        var IndexBuffer3D = (function () {
            function IndexBuffer3D(buffer) {
                this.buffer = buffer;
            }
            return IndexBuffer3D;
        })();
        openGLES.IndexBuffer3D = IndexBuffer3D;
    })(openGLES = egret3d.openGLES || (egret3d.openGLES = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var openGLES;
    (function (openGLES) {
        var Program3D = (function () {
            function Program3D(pg3D) {
                this.pMatrixUniform = -1;
                this.mMatrixUniform = -1;
                this.vertextAttrib = {};
                this.vertextAttribActive = false;
                this.program = pg3D;
            }
            return Program3D;
        })();
        openGLES.Program3D = Program3D;
    })(openGLES = egret3d.openGLES || (egret3d.openGLES = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var openGLES;
    (function (openGLES) {
        var Shader = (function () {
            function Shader(shader) {
                this._shader = shader;
            }
            Object.defineProperty(Shader.prototype, "shader", {
                get: function () {
                    return this._shader;
                },
                enumerable: true,
                configurable: true
            });
            Shader.ID_COUNT = 0;
            return Shader;
        })();
        openGLES.Shader = Shader;
    })(openGLES = egret3d.openGLES || (egret3d.openGLES = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var openGLES;
    (function (openGLES) {
        var Texture2D = (function () {
            function Texture2D(texture2D, context3D) {
                this.width = 0;
                this.height = 0;
                this.gpu_texture = texture2D;
                this.context3D = context3D;
                this.mipmapDatas = new Array();
            }
            return Texture2D;
        })();
        openGLES.Texture2D = Texture2D;
    })(openGLES = egret3d.openGLES || (egret3d.openGLES = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var openGLES;
    (function (openGLES) {
        var CubeTexture = (function () {
            function CubeTexture(cubeTexture) {
                this.gpu_texture = cubeTexture;
            }
            return CubeTexture;
        })();
        openGLES.CubeTexture = CubeTexture;
    })(openGLES = egret3d.openGLES || (egret3d.openGLES = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var openGLES;
    (function (openGLES) {
        var VertexBuffer3D = (function () {
            function VertexBuffer3D(buffer) {
                this.buffer = buffer;
            }
            return VertexBuffer3D;
        })();
        openGLES.VertexBuffer3D = VertexBuffer3D;
    })(openGLES = egret3d.openGLES || (egret3d.openGLES = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Context3DChild_OpenGLES_2_0
    * @classdesc
    * Context3DChild_OpenGLES_2_0  implements egret3d.Context3D
    * 3d设备数据
    */
    var Context3DChild_OpenGLES_2_0 = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param context3D
        */
        function Context3DChild_OpenGLES_2_0(context3D) {
            this.gl = context3D;
            egret3d.ContextSamplerType.LINEAR = this.gl.LINEAR;
            egret3d.ContextSamplerType.NEAREST = this.gl.NEAREST;
            egret3d.ContextSamplerType.REPEAT = this.gl.REPEAT;
            ///enable necessry extensions.
            ///var OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear");
            var OES_texture_float = this.gl.getExtension("OES_texture_float");
            ///var OES_texture_half_float = this.gl.getExtension("OES_texture_half_float");
            ///var OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear");
            ///var OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives");
            ///var WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers");
            ///var WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture");
            if (!OES_texture_float) {
                alert("OES_texture_float Texture is not available");
            }
        }
        Object.defineProperty(Context3DChild_OpenGLES_2_0.prototype, "version", {
            /**
            * @language zh_CN
            * 版本号
            * @readOnly
            * @param context3D
            */
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context3DChild_OpenGLES_2_0.prototype, "isLost", {
            get: function () {
                /// need to add instance 
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 版本号
        * 视口设置定义
        * @param x position X
        * @param y position Y
        * @param width  3D canvas width
        * @param height  3D canvas  height
        */
        Context3DChild_OpenGLES_2_0.prototype.viewPort = function (x, y, width, height) {
            this.gl.viewport(x, y, width, height);
        };
        /**
        * @language zh_CN
        * 创建 显卡程序
        * @param vsShader
        * @param fsShader
        */
        Context3DChild_OpenGLES_2_0.prototype.creatProgram = function (vsShader, fsShader) {
            var shaderProgram = this.gl.createProgram();
            this.gl.attachShader(shaderProgram, vsShader.shader);
            this.gl.attachShader(shaderProgram, fsShader.shader);
            this.gl.linkProgram(shaderProgram);
            var p = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
            if (!p) {
                alert("vsShader error" + this.gl.getShaderInfoLog(vsShader.shader));
                alert("fsShader error" + this.gl.getShaderInfoLog(fsShader.shader));
            }
            var program = new egret3d.openGLES.Program3D(shaderProgram);
            return program;
        };
        /**
        * @language zh_CN
        * 创建 顶点索引流
        * @param indexData
        */
        Context3DChild_OpenGLES_2_0.prototype.creatIndexBuffer = function (indexData) {
            var indexDataArray = new Uint16Array(indexData);
            var indexBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexDataArray, this.gl.STATIC_DRAW);
            return new egret3d.openGLES.IndexBuffer3D(indexBuffer);
        };
        /**
        * @language zh_CN
        * 创建 顶点数据流
        * @param vertexData
        */
        Context3DChild_OpenGLES_2_0.prototype.creatVertexBuffer = function (vertexData) {
            var vertexDataArray = new Float32Array(vertexData);
            var vertexBuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexDataArray, this.gl.STATIC_DRAW);
            return new egret3d.openGLES.VertexBuffer3D(vertexBuffer);
        };
        /// public upLoadTextureData(mipLevel: number, texture: Texture2D , data:any ) {
        ///     /// 启用二维纹理
        ///     ///this.gl.enable( this.gl.TEXTURE );
        ///     this.gl.bindTexture(this.gl.TEXTURE_2D, texture.texture2D);
        ///     ///if (typeof (data) == HTMLImageElement) {
        ///     /// this.gl.texImage2D(this.gl.TEXTURE_2D, mipLevel, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
        ///     ///}
        ///     this.gl.texImage2D(this.gl.TEXTURE_2D, mipLevel, this.gl.RGBA, 128, 128, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data ) ;
        ///
        ///     this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        ///     this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        ///     this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        ///     this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        /// }
        /**
        * @language zh_CN
        * 设置2D纹理状态
        * @param min_filter
        * @param mag_filter
        * @param wrap_u_filter
        * @param wrap_v_filter
        */
        Context3DChild_OpenGLES_2_0.prototype.setTexture2DSamplerState = function (min_filter, mag_filter, wrap_u_filter, wrap_v_filter) {
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, min_filter);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, mag_filter);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, wrap_u_filter);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, wrap_v_filter);
        };
        /**
        * @language zh_CN
        * 提交2D纹理
        * @param mipLevel
        * @param texture
        */
        Context3DChild_OpenGLES_2_0.prototype.upLoadTextureData = function (mipLevel, texture) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture.gpu_texture);
            if (texture.gpu_internalformat == egret3d.InternalFormat.ImageData) {
                this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
                ///var tmp = TextureUtil.getTextureData(texture.image);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, texture.image);
                this.gl.generateMipmap(this.gl.TEXTURE_2D);
            }
            else if (texture.gpu_internalformat == egret3d.InternalFormat.CompressData) {
                this.upLoadCompressedTexture2D(mipLevel, texture);
            }
            else if (texture.gpu_internalformat == egret3d.InternalFormat.PixelArray) {
                this.gl.texImage2D(this.gl.TEXTURE_2D, mipLevel, texture.gpu_colorformat, texture.mipmapDatas[mipLevel].width, texture.mipmapDatas[mipLevel].height, texture.gpu_border, texture.gpu_colorformat, this.gl.UNSIGNED_BYTE, texture.mipmapDatas[mipLevel].data);
                this.gl.generateMipmap(this.gl.TEXTURE_2D);
            }
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        };
        /**
        * @language zh_CN
        * 提交2D压缩纹理
        * @param mipLevel
        * @param texture
        */
        Context3DChild_OpenGLES_2_0.prototype.upLoadCompressedTexture2D = function (mipLevel, texture) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture.gpu_texture);
            this.gl.compressedTexImage2D(this.gl.TEXTURE_2D, mipLevel, texture.gpu_colorformat, texture.mipmapDatas[mipLevel].width, texture.mipmapDatas[mipLevel].height, texture.gpu_border, texture.mipmapDatas[mipLevel].data);
        };
        /**
        * @language zh_CN
        * 创建 2维贴图
        */
        Context3DChild_OpenGLES_2_0.prototype.creatTexture2D = function () {
            var texture = new egret3d.openGLES.Texture2D(this.gl.createTexture(), this);
            return texture;
        };
        /**
        * @language zh_CN
        * 创建 Cube贴图
        */
        Context3DChild_OpenGLES_2_0.prototype.creatCubeTexture = function () {
            return new egret3d.openGLES.CubeTexture(this.gl.createTexture());
        };
        /**
        * @language zh_CN
        *
        * @param tex
        */
        Context3DChild_OpenGLES_2_0.prototype.uploadCubetexture = function (tex) {
            /// 创建纹理并绑定纹理数据
            this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, tex.gpu_texture);
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, tex.image_right);
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, tex.image_left);
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, tex.image_up);
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, tex.image_down);
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, tex.image_back);
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.gl.RGB, this.gl.RGB, this.gl.UNSIGNED_BYTE, tex.image_front);
            ///this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
            ///gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            ///this.gl.texParameterf(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
            ///this.gl.texParameterf(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
            ///this.gl.texParameterf(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            ///this.gl.texParameterf(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            ///this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, min_filter);
            ///this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, mag_filter);
            ///this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, wrap_u_filter);
            ///this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, wrap_v_filter);
        };
        /**
        * @language zh_CN
        *
        * @param width
        * @param height
        * @param format
        */
        Context3DChild_OpenGLES_2_0.prototype.createFramebuffer = function (width, height, format) {
            var rttframeBuffer = this.gl.createFramebuffer();
            var texture2D = this.creatTexture2D();
            var depthRenderbuffer = this.gl.createRenderbuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, rttframeBuffer);
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture2D.gpu_texture);
            var float = new Float32Array(32 * 32 * 4);
            for (var i = 0; i < 32 * 32; i++) {
                float[i] = 1.0;
                float[i + 1] = 1.0;
                float[i + 2] = 1.0;
                float[i + 3] = 1.0;
            }
            switch (format) {
                case egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB:
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGB, width, height, 0, this.gl.RGB, this.gl.UNSIGNED_BYTE, null);
                    break;
                case egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGBA:
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, width, height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
                    break;
                case egret3d.FrameBufferFormat.FLOAT_RGB:
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGB, width, height, 0, this.gl.RGB, this.gl.UNSIGNED_BYTE, null);
                    break;
                case egret3d.FrameBufferFormat.FLOAT_RGBA:
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, width, height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
                    break;
            }
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, texture2D.gpu_texture, 0);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            ///this.gl.generateMipmap(this.gl.TEXTURE_2D);  
            ///配置渲染缓冲 
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, depthRenderbuffer);
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
            texture2D.width = width;
            texture2D.height = height;
            texture2D.frameBuffer = rttframeBuffer;
            texture2D.renderbuffer = depthRenderbuffer;
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
            return texture2D;
        };
        /**
        * @language zh_CN
        *
        * @param texture
        * @param enableDepthAndStencil
        * @param surfaceSelector
        */
        Context3DChild_OpenGLES_2_0.prototype.setRenderToTexture = function (texture, enableDepthAndStencil, surfaceSelector) {
            if (enableDepthAndStencil === void 0) { enableDepthAndStencil = false; }
            if (surfaceSelector === void 0) { surfaceSelector = 0; }
            if (enableDepthAndStencil) {
            }
            this.gl.viewport(0, 0, texture.width, texture.height);
            //if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE)
            //{
            //    alert("缓冲失败");
            //}
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, texture.frameBuffer);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, texture.gpu_texture, 0);
            this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, texture.renderbuffer);
        };
        /**
        * @language zh_CN
        *
        */
        Context3DChild_OpenGLES_2_0.prototype.setRenderToBackBuffer = function () {
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
        };
        /**
        * @language zh_CN
        *
        * @param source
        */
        Context3DChild_OpenGLES_2_0.prototype.creatVertexShader = function (source) {
            var shader = this.gl.createShader(this.gl.VERTEX_SHADER);
            this.gl.shaderSource(shader, source);
            this.gl.compileShader(shader);
            var tmpShader = new egret3d.openGLES.Shader(shader);
            tmpShader.id = egret3d.openGLES.Shader.ID_COUNT++;
            return tmpShader;
        };
        /**
        * @language zh_CN
        *
        * @param source
        */
        Context3DChild_OpenGLES_2_0.prototype.creatFragmentShader = function (source) {
            var shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
            this.gl.shaderSource(shader, source);
            this.gl.compileShader(shader);
            var tmpShader = new egret3d.openGLES.Shader(shader);
            tmpShader.id = egret3d.openGLES.Shader.ID_COUNT++;
            return tmpShader;
        };
        /**
        * @language zh_CN
        * 清除渲染区域的颜色 深度
        * @param r
        * @param g
        * @param b
        * @param a
        */
        Context3DChild_OpenGLES_2_0.prototype.clear = function (r, g, b, a) {
            this.gl.clearColor(r, g, b, a);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            ///console.log( "clean" , r , g, b, a );
        };
        /**
        * @language zh_CN
        * 清除渲染区域的 深度
        * @param depth
        */
        Context3DChild_OpenGLES_2_0.prototype.clearDepth = function (depth) {
            this.gl.clearDepth(depth);
            this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
        };
        /**
        * @language zh_CN
        * 清除渲染区域的 模板
        * @param stencil
        */
        Context3DChild_OpenGLES_2_0.prototype.clearStencil = function (stencil) {
            this.gl.clearStencil(stencil);
        };
        /**
        * @language zh_CN
        * 使用显卡着色器
        * @param program
        */
        Context3DChild_OpenGLES_2_0.prototype.setProgram = function (program) {
            this.gl.useProgram(program.program);
        };
        /**
        * @language zh_CN
        * 获取矩阵变量ID
        * @param program
        * @param name
        */
        Context3DChild_OpenGLES_2_0.prototype.getUniformLocation = function (programe3D, name) {
            return this.gl.getUniformLocation(programe3D.program, name);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform1f = function (location, x) {
            this.gl.uniform1f(location, x);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform1fv = function (location, v) {
            this.gl.uniform1fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform1i = function (location, x) {
            this.gl.uniform1i(location, x);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform1iv = function (location, v) {
            this.gl.uniform1iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform2f = function (location, x, y) {
            this.gl.uniform2f(location, x, y);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform2fv = function (location, v) {
            this.gl.uniform2fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform2i = function (location, x, y) {
            this.gl.uniform2i(location, x, y);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform2iv = function (location, v) {
            this.gl.uniform2iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform3f = function (location, x, y, z) {
            this.gl.uniform3f(location, x, y, z);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform3fv = function (location, v) {
            this.gl.uniform3fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform3i = function (location, x, y, z) {
            this.gl.uniform3i(location, x, y, z);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform3iv = function (location, v) {
            this.gl.uniform3iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        * @param w
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform4f = function (location, x, y, z, w) {
            this.gl.uniform4f(location, x, y, z, w);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform4fv = function (location, v) {
            this.gl.uniform4fv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        * @param w
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform4i = function (location, x, y, z, w) {
            this.gl.uniform4i(location, x, y, z, w);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        Context3DChild_OpenGLES_2_0.prototype.uniform4iv = function (location, v) {
            this.gl.uniform4iv(location, v);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param transpose
        * @param value
        */
        Context3DChild_OpenGLES_2_0.prototype.uniformMatrix2fv = function (location, transpose, value) {
            this.gl.uniformMatrix2fv(location, transpose, value);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param transpose
        * @param value
        */
        Context3DChild_OpenGLES_2_0.prototype.uniformMatrix3fv = function (location, transpose, value) {
            this.gl.uniformMatrix3fv(location, transpose, value);
        };
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param transpose
        * @param value
        */
        Context3DChild_OpenGLES_2_0.prototype.uniformMatrix4fv = function (location, transpose, value) {
            this.gl.uniformMatrix4fv(location, transpose, value);
        };
        /**
        * @language zh_CN
        * 设置 绘制混合模式
        * @param src
        * @param dst
        */
        Context3DChild_OpenGLES_2_0.prototype.setBlendFactors = function (src, dst) {
            this.gl.blendFunc(src, dst);
        };
        /**
        * @language zh_CN
        * 设置 绘制剔除模式
        * @param mode
        */
        Context3DChild_OpenGLES_2_0.prototype.setCulling = function (mode) {
            this.gl.cullFace(mode);
        };
        /**
        * @language zh_CN
        * 开启 绘制模式
        * @param cap
        */
        Context3DChild_OpenGLES_2_0.prototype.enbable = function (cap) {
            this.gl.enable(cap);
        };
        /**
        * @language zh_CN
        * 关闭 绘制模式
        * @param cap
        */
        Context3DChild_OpenGLES_2_0.prototype.disable = function (cap) {
            this.gl.disable(cap);
        };
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        Context3DChild_OpenGLES_2_0.prototype.enableDepthTest = function (flag, compareMode) {
            if (compareMode === void 0) { compareMode = 0; }
            if (flag)
                this.gl.enable(this.gl.DEPTH_TEST);
        };
        /**
        * @language zh_CN
        * 获取顶点着色器变量 索引
        * @param programe
        * @param attribName
        * @returns 着色器变量
        */
        Context3DChild_OpenGLES_2_0.prototype.getShaderAttribLocation = function (programe, attribName) {
            programe.vertextAttrib[attribName] = this.gl.getAttribLocation(programe.program, attribName);
            return programe.vertextAttrib[attribName];
        };
        /**
        * @language zh_CN
        * 指定顶点着色器变量索引 及机构
        * @param programe3D
        * @param index
        * @param size
        * @param dataType
        * @param normalized
        * @param stride
        * @param offset
        */
        Context3DChild_OpenGLES_2_0.prototype.vertexAttribPointer = function (programe3D, index, size, dataType, normalized, stride, offset) {
            this.gl.vertexAttribPointer(index, size, dataType, normalized, stride, offset);
            this.gl.enableVertexAttribArray(index);
        };
        /**
        * @language zh_CN
        * 实时传入显卡顶点着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        Context3DChild_OpenGLES_2_0.prototype.setVertexShaderConstData = function (floats, offest, numLen) {
            this.gl.vertexAttrib4fv(offest, floats.subarray(offest, numLen));
        };
        /**
        * @language zh_CN
        * 实时传入显卡片段着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        Context3DChild_OpenGLES_2_0.prototype.setFragmentShaderConstData = function (floats, offest, numLen) {
        };
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex
        * @param uniLocation
        * @param index
        * @param texture
        */
        Context3DChild_OpenGLES_2_0.prototype.setTexture2DAt = function (samplerIndex, uniLocation, index, texture) {
            this.gl.activeTexture(samplerIndex);
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture.gpu_texture);
            this.gl.uniform1i(uniLocation, index);
        };
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex
        * @param uniLocation
        * @param index
        * @param texture
        */
        Context3DChild_OpenGLES_2_0.prototype.setCubeTextureAt = function (samplerIndex, uniLocation, index, texture) {
            this.gl.activeTexture(samplerIndex);
            this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, texture.gpu_texture);
            this.gl.uniform1i(uniLocation, index);
        };
        /**
        * @language zh_CN
        * 设置矩形裁切区域
        * @param rectangle
        */
        Context3DChild_OpenGLES_2_0.prototype.setScissorRectangle = function (rectangle) {
        };
        /**
        * @language zh_CN
        * 设置模板测试
        */
        Context3DChild_OpenGLES_2_0.prototype.setStencilReferenceValue = function () {
        };
        /**
        * @language zh_CN
        * 绑定顶点Buffer
        * @param vertexBuffer
        */
        Context3DChild_OpenGLES_2_0.prototype.bindVertexBuffer = function (vertexBuffer) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer.buffer);
        };
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param first 第一个顶点索引
        * @param length 顶点个数
        */
        Context3DChild_OpenGLES_2_0.prototype.drawArrays = function (type, first, length) {
            this.gl.drawArrays(type, first, length);
        };
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param indexBuffer 索引数据
        * @param offset 顶点偏移
        * @param length 顶点个数
        */
        Context3DChild_OpenGLES_2_0.prototype.drawElement = function (type, indexBuffer, offset, length) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
            this.gl.drawElements(type, length, this.gl.UNSIGNED_SHORT, offset);
        };
        /**
        * @language zh_CN
        * 绘制提交
        */
        Context3DChild_OpenGLES_2_0.prototype.flush = function () {
            this.gl.flush();
        };
        return Context3DChild_OpenGLES_2_0;
    })();
    egret3d.Context3DChild_OpenGLES_2_0 = Context3DChild_OpenGLES_2_0;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (BlendMode) {
        BlendMode[BlendMode["ALPHA"] = 0] = "ALPHA";
        BlendMode[BlendMode["LAYER"] = 1] = "LAYER";
        BlendMode[BlendMode["NORMAL"] = 2] = "NORMAL";
        BlendMode[BlendMode["MULTIPLY"] = 3] = "MULTIPLY";
        BlendMode[BlendMode["ADD"] = 4] = "ADD";
        BlendMode[BlendMode["SUB"] = 5] = "SUB";
        BlendMode[BlendMode["DIV"] = 6] = "DIV";
        BlendMode[BlendMode["SCREEN"] = 7] = "SCREEN";
    })(egret3d.BlendMode || (egret3d.BlendMode = {}));
    var BlendMode = egret3d.BlendMode;
    /**
     * @class egret3d.ContextSamplerType
     * @classdesc
     * 贴图采样类型
     */
    var ContextSamplerType = (function () {
        function ContextSamplerType() {
        }
        return ContextSamplerType;
    })();
    egret3d.ContextSamplerType = ContextSamplerType;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.UV
     * @classdesc
     * UV 类
     */
    var UV = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function UV(u, v) {
            if (u === void 0) { u = 0; }
            if (v === void 0) { v = 0; }
            /**
            * @language zh_CN
            * u
            */
            this.u = 0;
            /**
            * @language zh_CN
            * v
            */
            this.v = 0;
            this.u = u;
            this.v = v;
        }
        return UV;
    })();
    egret3d.UV = UV;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Point
     * @classdesc
     * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     */
    var Point = (function () {
        /**
         * @language en_US
         * Creates a new point. If you pass no parameters to this method, a point is
         * created at(0,0).
         *
         * @param x The horizontal coordinate.
         * @param y The vertical coordinate.
         */
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Point.prototype, "length", {
            /**
             * @language en_US
             * The length of the line segment from(0,0) to this point.
             */
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * Adds the coordinates of another point to the coordinates of this point to
         * create a new point.
         *
         * @param v The point to be added.
         * @returns The new point.
         */
        Point.prototype.add = function (v) {
            return new Point(this.x + v.x, this.y + v.y);
        };
        /**
         * @language en_US
         * Creates a copy of this Point object.
         *
         * @returns The new Point object.
         */
        Point.prototype.clone = function () {
            return new Point(this.x, this.y);
        };
        Point.prototype.copyFrom = function (sourcePoint) {
        };
        /**
         * @language en_US
         * Determines whether two points are equal. Two points are equal if they have
         * the same <i>x</i> and <i>y</i> values.
         *
         * @param toCompare The point to be compared.
         * @returns A value of <code>true</code> if the object is equal to this Point
         *         object; <code>false</code> if it is not equal.
         */
        Point.prototype.equals = function (toCompare) {
            return (this.x == toCompare.x && this.y == toCompare.y);
        };
        /**
         * @language en_US
         * Scales the line segment between(0,0) and the current point to a set
         * length.
         *
         * @param thickness The scaling value. For example, if the current point is
         *                 (0,5), and you normalize it to 1, the point returned is
         *                  at(0,1).
         */
        Point.prototype.normalize = function (thickness) {
            if (thickness === void 0) { thickness = 1; }
            if (this.length != 0) {
                var invLength = thickness / this.length;
                this.x *= invLength;
                this.y *= invLength;
                return;
            }
            throw "Cannot divide by zero length.";
        };
        /**
         * @language en_US
         * Offsets the Point object by the specified amount. The value of
         * <code>dx</code> is added to the original value of <i>x</i> to create the
         * new <i>x</i> value. The value of <code>dy</code> is added to the original
         * value of <i>y</i> to create the new <i>y</i> value.
         *
         * @param dx The amount by which to offset the horizontal coordinate,
         *           <i>x</i>.
         * @param dy The amount by which to offset the vertical coordinate, <i>y</i>.
         */
        Point.prototype.offset = function (dx, dy) {
            this.x += dx;
            this.y += dy;
        };
        /**
         * @language en_US
         * Subtracts the coordinates of another point from the coordinates of this
         * point to create a new point.
         *
         * @param v The point to be subtracted.
         * @returns The new point.
         */
        Point.prototype.subtract = function (v) {
            return new Point(this.x - v.x, this.y - v.y);
        };
        /**
         * @language en_US
         * Returns a string that contains the values of the <i>x</i> and <i>y</i>
         * coordinates. The string has the form <code>"(x=<i>x</i>,
         * y=<i>y</i>)"</code>, so calling the <code>toString()</code> method for a
         * point at 23,17 would return <code>"(x=23, y=17)"</code>.
         *
         * @returns The string representation of the coordinates.
         */
        Point.prototype.toString = function () {
            return "[Point] (x=" + this.x + ", y=" + this.y + ")";
        };
        /**
         * @language en_US
         * Returns the distance between <code>pt1</code> and <code>pt2</code>.
         *
         * @param pt1 The first point.
         * @param pt2 The second point.
         * @returns The distance between the first and second points.
         */
        Point.distance = function (pt1, pt2) {
            var dx = pt2.x - pt1.x;
            var dy = pt2.y - pt1.y;
            return Math.sqrt(dx * dx + dy * dy);
        };
        /**
         * @language en_US
         * Determines a point between two specified points. The parameter
         * <code>f</code> determines where the new interpolated point is located
         * relative to the two end points specified by parameters <code>pt1</code>
         * and <code>pt2</code>. The closer the value of the parameter <code>f</code>
         * is to <code>1.0</code>, the closer the interpolated point is to the first
         * point(parameter <code>pt1</code>). The closer the value of the parameter
         * <code>f</code> is to 0, the closer the interpolated point is to the second
         * point(parameter <code>pt2</code>).
         *
         * @param pt1 The first point.
         * @param pt2 The second point.
         * @param f   The level of interpolation between the two points. Indicates
         *            where the new point will be, along the line between
         *            <code>pt1</code> and <code>pt2</code>. If <code>f</code>=1,
         *            <code>pt1</code> is returned; if <code>f</code>=0,
         *            <code>pt2</code> is returned.
         * @returns The new, interpolated point.
         */
        Point.interpolate = function (pt1, pt2, f) {
            return new Point(pt2.x + (pt1.x - pt2.x) * f, pt2.y + (pt1.y - pt2.y) * f);
        };
        /**
         * @language en_US
         * Converts a pair of polar coordinates to a Cartesian point coordinate.
         *
         * @param len   The length coordinate of the polar pair.
         * @param angle The angle, in radians, of the polar pair.
         * @returns The Cartesian point.
         */
        Point.polar = function (len, angle) {
            return new Point(len * Math.cos(angle), len * Math.sin(angle));
        };
        return Point;
    })();
    egret3d.Point = Point;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Vector3D
     * @classdesc
     * 用 Vector3D 类 表示三维空间中的位置
     */
    var Vector3D = (function () {
        /**
        * @language en_US
        * Creates an instance of a Vector3D object. If you do not specify a。
        * parameter for the constructor, a Vector3D object is created with
        * the elements (0,0,0,0).
        *
        * @param x The first element, such as the x coordinate.
        * @param y The second element, such as the y coordinate.
        * @param z The third element, such as the z coordinate.
        * @param w An optional element for additional data such as the angle
        *          of rotation.
        */
        function Vector3D(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Object.defineProperty(Vector3D.prototype, "a", {
            /**
            * @language en_US
            * @readOnly
            */
            get: function () {
                return this.w;
            },
            /**
            * @language en_US
            * @writeOnly
            */
            set: function (value) {
                this.w = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "r", {
            /**
            * @language en_US
            * @readOnly
            */
            get: function () {
                return this.x;
            },
            /**
            * @language en_US
            * @writeOnly
            */
            set: function (value) {
                this.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "g", {
            /**
            * @language en_US
            * @readOnly
            */
            get: function () {
                return this.y;
            },
            /**
            * @language en_US
            * @writeOnly
            */
            set: function (value) {
                this.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "b", {
            /**
            * @language en_US
            * @readOnly
            */
            get: function () {
                return this.z;
            },
            /**
            * @language en_US
            * @writeOnly
            */
            set: function (value) {
                this.z = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "length", {
            /**
            * @language en_US
            * The length, magnitude, of the current Vector3D object from the
            * origin (0,0,0) to the object's x, y, and z coordinates. The w
            * property is ignored. A unit vector has a length or magnitude of
            * one.
            */
            get: function () {
                return Math.sqrt(this.lengthSquared);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vector3D.prototype, "lengthSquared", {
            /**
            * @language en_US
            * The square of the length of the current Vector3D object, calculated。
            * using the x, y, and z properties. The w property is ignored. Use the
            * <code>lengthSquared()</code> method whenever possible instead of the
            * slower <code>Math.sqrt()</code> method call of the
            * <code>Vector3D.length()</code> method.
            */
            get: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language en_US
        * Adds the value of the x, y, and z elements of the current Vector3D
        * object to the values of the x, y, and z elements of another Vector3D
        * object. The <code>add()</code> method does not change the current
        * Vector3D object. Instead, it returns a new Vector3D object with
        * the new values.
        *
        * <p>The result of adding two vectors together is a resultant vector.
        * One way to visualize the result is by drawing a vector from the
        * origin or tail of the first vector to the end or head of the second
        * vector. The resultant vector is the distance between the origin
        * point of the first vector and the end point of the second vector.
        * </p>
        */
        Vector3D.prototype.add = function (a) {
            return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
        };
        /**
        * @language en_US
        * Returns the angle in radians between two vectors. The returned angle
        * is the smallest radian the first Vector3D object rotates until it
        * aligns with the second Vector3D object.
        *
        * <p>The <code>angleBetween()</code> method is a static method. You
        * can use it directly as a method of the Vector3D class.</p>
        *
        * <p>To convert a degree to a radian, you can use the following
        * formula:</p>
        *
        * <p><code>radian = Math.PI/180 * degree</code></p>
        *
        * @param a The first Vector3D object.
        * @param b The second Vector3D object.
        * @returns The angle between two Vector3D objects.
        */
        Vector3D.angleBetween = function (a, b) {
            return Math.acos(a.dotProduct(b) / (a.length * b.length));
        };
        /**
        * @language en_US
        * Returns a new Vector3D object that is an exact copy of the current
        * Vector3D object.
        *
        * @returns A new Vector3D object that is a copy of the current
        * Vector3D object.
        */
        Vector3D.prototype.clone = function () {
            return new Vector3D(this.x, this.y, this.z, this.w);
        };
        /**
        * @language en_US
        * Copies all of vector data from the source Vector3D object into the
        * calling Vector3D object.
        *
        * @param src The Vector3D object from which to copy the data.
        */
        Vector3D.prototype.copyFrom = function (src) {
            this.x = src.x;
            this.y = src.y;
            this.z = src.z;
            this.w = src.w;
        };
        /**
        * @language en_US
        * Returns a new Vector3D object that is perpendicular (at a right
        * angle) to the current Vector3D and another Vector3D object. If the
        * returned Vector3D object's coordinates are (0,0,0), then the two
        * Vector3D objects are parallel to each other.
        *
        * <p>You can use the normalized cross product of two vertices of a
        * polygon surface with the normalized vector of the camera or eye
        * viewpoint to get a dot product. The value of the dot product can
        * identify whether a surface of a three-dimensional object is hidden
        * from the viewpoint.</p>
        *
        * @param a A second Vector3D object.
        * @returns A new Vector3D object that is perpendicular to the current
        *          Vector3D object and the Vector3D object specified as the
        *          parameter.
        */
        Vector3D.prototype.crossProduct = function (a) {
            return new Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x, 1);
        };
        /**
        * @language en_US
        * Decrements the value of the x, y, and z elements of the current
        * Vector3D object by the values of the x, y, and z elements of
        * specified Vector3D object. Unlike the
        * <code>Vector3D.subtract()</code> method, the
        * <code>decrementBy()</code> method changes the current Vector3D
        * object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object containing the values to subtract from
        *          the current Vector3D object.
        */
        Vector3D.prototype.decrementBy = function (a) {
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
        };
        /**
        * @language en_US
        * Returns the distance between two Vector3D objects. The
        * <code>distance()</code> method is a static method. You can use it
        * directly as a method of the Vector3D class to get the Euclidean
        * distance between two three-dimensional points.
        *
        * @param pt1 A Vector3D object as the first three-dimensional point.
        * @param pt2 A Vector3D object as the second three-dimensional point.
        * @returns The distance between two Vector3D objects.
        */
        Vector3D.distance = function (pt1, pt2) {
            var x = (pt1.x - pt2.x);
            var y = (pt1.y - pt2.y);
            var z = (pt1.z - pt2.z);
            return Math.sqrt(x * x + y * y + z * z);
        };
        /**
        * @language en_US
        * If the current Vector3D object and the one specified as the。
        * parameter are unit vertices, this method returns the cosine of the
        * angle between the two vertices. Unit vertices are vertices that
        * point to the same direction but their length is one. They remove the
        * length of the vector as a factor in the result. You can use the
        * <code>normalize()</code> method to convert a vector to a unit
        * vector.
        *
        * <p>The <code>dotProduct()</code> method finds the angle between two
        * vertices. It is also used in backface culling or lighting
        * calculations. Backface culling is a procedure for determining which
        * surfaces are hidden from the viewpoint. You can use the normalized
        * vertices from the camera, or eye, viewpoint and the cross product of
        * the vertices of a polygon surface to get the dot product. If the dot
        * product is less than zero, then the surface is facing the camera or
        * the viewer. If the two unit vertices are perpendicular to each
        * other, they are orthogonal and the dot product is zero. If the two
        * vertices are parallel to each other, the dot product is one.</p>
        *
        * @param a The second Vector3D object.
        * @returns A scalar which is the dot product of the current Vector3D
        *          object and the specified Vector3D object.
        *
        * @see away.geom.Vector3D#crossProduct()
        * @see away.geom.Vector3D#normalize()
        */
        Vector3D.prototype.dotProduct = function (a) {
            return this.x * a.x + this.y * a.y + this.z * a.z;
        };
        /**
        * @language en_US
        * Determines whether two Vector3D objects are equal by comparing the
        * x, y, and z elements of the current Vector3D object with a
        * specified Vector3D object. If the values of these elements are the
        * same, the two Vector3D objects are equal. If the second optional
        * parameter is set to true, all four elements of the Vector3D objects,
        * including the w property, are compared.
        */
        /**
        * @language en_US
        * @param toCompare The Vector3D object to be compared with the current
        *                  Vector3D object.
        * @param allFour   An optional parameter that specifies whether the w
        *                  property of the Vector3D objects is used in the
        *                  comparison.
        * @returns A value of true if the specified Vector3D object is equal
        *          to the current Vector3D object; false if it is not equal.
        */
        Vector3D.prototype.equals = function (toCompare, allFour) {
            if (allFour === void 0) { allFour = false; }
            return (this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w));
        };
        /**
        * @language en_US

        * Increments the value of the x, y, and z elements of the current
        * Vector3D object by the values of the x, y, and z elements of a
        * specified Vector3D object. Unlike the <code>Vector3D.add()</code>
        * method, the <code>incrementBy()</code> method changes the current
        * Vector3D object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object to be added to the current Vector3D
        *          object.
        */
        Vector3D.prototype.incrementBy = function (a) {
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
        };
        /**
        * @language en_US
        * Compares the elements of the current Vector3D object with the
        * elements of a specified Vector3D object to determine whether they
        * are nearly equal. The two Vector3D objects are nearly equal if the
        * value of all the elements of the two vertices are equal, or the
        * result of the comparison is within the tolerance range. The
        * difference between two elements must be less than the number
        * specified as the tolerance parameter. If the third optional
        * parameter is set to <code>true</code>, all four elements of the
        * Vector3D objects, including the <code>w</code> property, are
        * compared. Otherwise, only the x, y, and z elements are included in
        * the comparison.
        */
        /**
        * @language en_US
        * @param toCompare The Vector3D object to be compared with the current
        *                  Vector3D object.
        * @param tolerance A number determining the tolerance factor. If the
        *                  difference between the values of the Vector3D
        *                  element specified in the toCompare parameter and
        *                  the current Vector3D element is less than the
        *                  tolerance number, the two values are considered
        *                  nearly equal.
        * @param allFour   An optional parameter that specifies whether the w
        *                  property of the Vector3D objects is used in the
        *                  comparison.
        * @returns A value of true if the specified Vector3D object is nearly
        *          equal to the current Vector3D object; false if it is not
        *          equal.
        *
        * @see egret3d.geom.Vector3D#equals()
        */
        Vector3D.prototype.nearEquals = function (toCompare, tolerance, allFour) {
            if (allFour === void 0) { allFour = true; }
            return ((Math.abs(this.x - toCompare.x) < tolerance) && (Math.abs(this.y - toCompare.y) < tolerance) && (Math.abs(this.z - toCompare.z) < tolerance) && (!allFour || Math.abs(this.w - toCompare.w) < tolerance));
        };
        /**
        * @language en_US
        * Sets the current Vector3D object to its inverse. The inverse object
        * is also considered the opposite of the original object. The value of
        * the x, y, and z properties of the current Vector3D object is changed
        * to -x, -y, and -z.
        */
        Vector3D.prototype.negate = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        };
        /**
        * @language en_US
        * Converts a Vector3D object to a unit vector by dividing the first
        * three elements (x, y, z) by the length of the vector. Unit vertices
        * are vertices that have a direction but their length is one. They
        * simplify vector calculations by removing length as a factor.
        */
        /**
        * @language en_US
        * Scales the line segment between(0,0) and the current point to a set
        * length.
        *
        * @param thickness The scaling value. For example, if the current
        * Vector3D object is (0,3,4), and you normalize it to
        * 1, the point returned is at(0,0.6,0.8).
        */
        Vector3D.prototype.normalize = function (thickness) {
            if (thickness === void 0) { thickness = 1; }
            if (this.length != 0) {
                var invLength = thickness / this.length;
                this.x *= invLength;
                this.y *= invLength;
                this.z *= invLength;
                return;
            }
        };
        /**
        * @language en_US
        * Divides the value of the <code>x</code>, <code>y</code>, and
        * <code>z</code> properties of the current Vector3D object by the
        * value of its <code>w</code> property.
        *
        * <p>If the current Vector3D object is the result of multiplying a
        * Vector3D object by a projection Matrix3D object, the w property can
        * hold the transform value. The <code>project()</code> method then can
        * complete the projection by dividing the elements by the
        * <code>w</code> property. Use the <code>Matrix3D.rawData</code>
        * property to create a projection Matrix3D object.</p>
        */
        Vector3D.prototype.project = function () {
            this.x /= this.w;
            this.y /= this.w;
            this.z /= this.w;
        };
        /**
        * @language en_US
        * Scales the current Vector3D object by a scalar, a magnitude. The
        * Vector3D object's x, y, and z elements are multiplied by the scalar
        * number specified in the parameter. For example, if the vector is
        * scaled by ten, the result is a vector that is ten times longer. The
        * scalar can also change the direction of the vector. Multiplying the
        * vector by a negative number reverses its direction.
        *
        * @param s A multiplier (scalar) used to scale a Vector3D object.
        */
        Vector3D.prototype.scaleBy = function (s) {
            this.x *= s;
            this.y *= s;
            this.z *= s;
        };
        /**
        * @language en_US
        * Sets the members of Vector3D to the specified values
        *
        * @param xa The first element, such as the x coordinate.
        * @param ya The second element, such as the y coordinate.
        * @param za The third element, such as the z coordinate.
        */
        Vector3D.prototype.setTo = function (xa, ya, za) {
            this.x = xa;
            this.y = ya;
            this.z = za;
        };
        /**
        * @language en_US
        * Subtracts the value of the x, y, and z elements of the current
        * Vector3D object from the values of the x, y, and z elements of
        * another Vector3D object. The <code>subtract()</code> method does not
        * change the current Vector3D object. Instead, this method returns a
        * new Vector3D object with the new values.
        *
        * @param a The Vector3D object to be subtracted from the current
        *          Vector3D object.
        * @returns A new Vector3D object that is the difference between the
        *          current Vector3D and the specified Vector3D object.
        *
        * @see egret3d.geom.Vector3D#decrementBy()
        */
        Vector3D.prototype.subtract = function (a) {
            return new Vector3D(this.x - a.x, this.y - a.y, this.z - a.z);
        };
        Vector3D.prototype.multiply = function (other) {
            return new Vector3D(this.x * other.x, this.y * other.y, this.z * other.z);
        };
        Vector3D.prototype.lerp = function (v0, v1, t) {
            this.x = (v1.x - v0.x) * t + v0.x;
            this.y = (v1.y - v0.y) * t + v0.y;
            this.z = (v1.z - v0.z) * t + v0.z;
            this.w = (v1.w - v0.w) * t + v0.w;
        };
        Vector3D.prototype.toString = function () {
            return "<" + this.x + ", " + this.y + ", " + this.z + ">";
        };
        Vector3D.prototype.parsing = function (str) {
            var strS = str.split(" ");
            if (strS.length < 3)
                return;
            this.x = parseFloat(strS[0]);
            this.y = parseFloat(strS[1]);
            this.z = parseFloat(strS[2]);
        };
        /**
        * @language en_US
        * The x axis defined as a Vector3D object with coordinates (1,0,0).
        */
        Vector3D.X_AXIS = new Vector3D(1, 0, 0);
        /**
        * @language en_US
        * The y axis defined as a Vector3D object with coordinates (0,1,0).
        */
        Vector3D.Y_AXIS = new Vector3D(0, 1, 0);
        /**
        * @language en_US
        * The z axis defined as a Vector3D object with coordinates (0,0,1).
        */
        Vector3D.Z_AXIS = new Vector3D(0, 0, 1);
        return Vector3D;
    })();
    egret3d.Vector3D = Vector3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Rectangle
     * @classdesc
     * Rectangle 类 表示矩形
     */
    var Rectangle = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function Rectangle(x, y, width, height) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 32; }
            if (height === void 0) { height = 32; }
            /**
            * @language zh_CN
            * 矩形x坐标
            */
            this.x = 0;
            /**
            * @language zh_CN
            * 矩形y坐标
            */
            this.y = 0;
            /**
            * @language zh_CN
            * 矩形宽
            */
            this.width = 0;
            /**
            * @language zh_CN
            * 矩形高
            */
            this.height = 0;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return Rectangle;
    })();
    egret3d.Rectangle = Rectangle;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Quaternion
     * @classdesc
     * Quaternion 类用于表示旋转
     */
    var Quaternion = (function () {
        /**
        * @language en_US
        * Creates a new Quaternion object.
        * @param x The x value of the quaternion.
        * @param y The y value of the quaternion.
        * @param z The z value of the quaternion.
        * @param w The w value of the quaternion.
        */
        function Quaternion(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 1; }
            /**
            * @language en_US
            * The x value of the quaternion.
            */
            this.x = 0;
            /**
            * @language en_US
            * The y value of the quaternion.
            */
            this.y = 0;
            /**
            * @language en_US
            * The z value of the quaternion.
            */
            this.z = 0;
            /**
            * @language en_US
            * The w value of the quaternion.
            */
            this.w = 1;
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Object.defineProperty(Quaternion.prototype, "magnitude", {
            /**
            * @language en_US
            * @@readOnly
            * Returns the magnitude of the quaternion object.
            */
            get: function () {
                return Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language en_US
        * Fills the quaternion object with the result from a multiplication of two quaternion objects.
        *
        * @param    qa    The first quaternion in the multiplication.
        * @param    qb    The second quaternion in the multiplication.
        */
        Quaternion.prototype.multiply = function (qa, qb) {
            var w1 = qa.w, x1 = qa.x, y1 = qa.y, z1 = qa.z;
            var w2 = qb.w, x2 = qb.x, y2 = qb.y, z2 = qb.z;
            this.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
            this.x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
            this.y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
            this.z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
        };
        /**
        * @language en_US
        *
        *
        * @param
        * @param
        */
        Quaternion.prototype.multiplyVector = function (vector, target) {
            if (target === void 0) { target = null; }
            if (target === null) {
                target = new Quaternion();
            }
            var x2 = vector.x;
            var y2 = vector.y;
            var z2 = vector.z;
            target.w = -this.x * x2 - this.y * y2 - this.z * z2;
            target.x = this.w * x2 + this.y * z2 - this.z * y2;
            target.y = this.w * y2 - this.x * z2 + this.z * x2;
            target.z = this.w * z2 + this.x * y2 - this.y * x2;
            return target;
        };
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given rotation around a vector.
        *
        * @param    axis    The axis around which to rotate
        * @param    angle    The angle in radians of the rotation.
        */
        Quaternion.prototype.fromAxisAngle = function (axis, angle) {
            var sin_a = Math.sin(angle / 2);
            var cos_a = Math.cos(angle / 2);
            this.x = axis.x * sin_a;
            this.y = axis.y * sin_a;
            this.z = axis.z * sin_a;
            this.w = cos_a;
            this.normalize();
        };
        /**
        * @language en_US
        * Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        Quaternion.prototype.slerp = function (qa, qb, t) {
            var w1 = qa.w, x1 = qa.x, y1 = qa.y, z1 = qa.z;
            var w2 = qb.w, x2 = qb.x, y2 = qb.y, z2 = qb.z;
            var dot = w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2;
            // shortest direction
            if (dot < 0) {
                dot = -dot;
                w2 = -w2;
                x2 = -x2;
                y2 = -y2;
                z2 = -z2;
            }
            if (dot < 0.95) {
                // interpolate angle linearly
                var angle = Math.acos(dot);
                var s = 1 / Math.sin(angle);
                var s1 = Math.sin(angle * (1 - t)) * s;
                var s2 = Math.sin(angle * t) * s;
                this.w = w1 * s1 + w2 * s2;
                this.x = x1 * s1 + x2 * s2;
                this.y = y1 * s1 + y2 * s2;
                this.z = z1 * s1 + z2 * s2;
            }
            else {
                // nearly identical angle, interpolate linearly
                this.w = w1 + t * (w2 - w1);
                this.x = x1 + t * (x2 - x1);
                this.y = y1 + t * (y2 - y1);
                this.z = z1 + t * (z2 - z1);
                var len = 1.0 / Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
                this.w *= len;
                this.x *= len;
                this.y *= len;
                this.z *= len;
            }
        };
        /**
        * @language en_US
        * Linearly interpolates between two quaternions.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        Quaternion.prototype.lerp = function (qa, qb, t) {
            var w1 = qa.w, x1 = qa.x, y1 = qa.y, z1 = qa.z;
            var w2 = qb.w, x2 = qb.x, y2 = qb.y, z2 = qb.z;
            var len;
            // shortest direction
            if (w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2 < 0) {
                w2 = -w2;
                x2 = -x2;
                y2 = -y2;
                z2 = -z2;
            }
            this.w = w1 + t * (w2 - w1);
            this.x = x1 + t * (x2 - x1);
            this.y = y1 + t * (y2 - y1);
            this.z = z1 + t * (z2 - z1);
            len = 1.0 / Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            this.w *= len;
            this.x *= len;
            this.y *= len;
            this.z *= len;
        };
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given euler rotation.
        *
        * @param    ax        The angle in radians of the rotation around the ax axis.
        * @param    ay        The angle in radians of the rotation around the ay axis.
        * @param    az        The angle in radians of the rotation around the az axis.
        */
        Quaternion.prototype.fromEulerAngles = function (ax, ay, az) {
            ax *= Math.PI / 180.0;
            ay *= Math.PI / 180.0;
            az *= Math.PI / 180.0;
            var halfX = ax * .5, halfY = ay * .5, halfZ = az * .5;
            var cosX = Math.cos(halfX), sinX = Math.sin(halfX);
            var cosY = Math.cos(halfY), sinY = Math.sin(halfY);
            var cosZ = Math.cos(halfZ), sinZ = Math.sin(halfZ);
            this.w = cosX * cosY * cosZ + sinX * sinY * sinZ;
            this.x = sinX * cosY * cosZ - cosX * sinY * sinZ;
            this.y = cosX * sinY * cosZ + sinX * cosY * sinZ;
            this.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
            return this;
        };
        /**
        * @language en_US
        * Fills a target Vector3D object with the Euler angles that form the rotation represented by this quaternion.
        * @param target An optional Vector3D object to contain the Euler angles. If not provided, a new object is created.
        * @returns The Vector3D containing the Euler angles.
        */
        Quaternion.prototype.toEulerAngles = function (target) {
            if (target === void 0) { target = null; }
            //target ||= new Vector3D();
            if (target === null) {
                target = new egret3d.Vector3D();
            }
            target.x = Math.atan2(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (this.x * this.x + this.y * this.y));
            target.y = Math.asin(2 * (this.w * this.y - this.z * this.x));
            target.z = Math.atan2(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (this.y * this.y + this.z * this.z));
            target.x /= Math.PI / 180.0;
            target.y /= Math.PI / 180.0;
            target.z /= Math.PI / 180.0;
            return target;
        };
        /**
        * @language en_US
        * Normalises the quaternion object.
        */
        Quaternion.prototype.normalize = function (val) {
            if (val === void 0) { val = 1; }
            var mag = val / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
            this.x *= mag;
            this.y *= mag;
            this.z *= mag;
            this.w *= mag;
        };
        /**
        * @language en_US
        * Used to trace the values of a quaternion.
        *
        * @returns A string representation of the quaternion object.
        */
        /**
        * @language zh_CN
        *
        * @returns
        */
        Quaternion.prototype.toString = function () {
            return "{x:" + this.x + " y:" + this.y + " z:" + this.z + " w:" + this.w + "}";
        };
        /**
        * @language en_US
        * Converts the quaternion to a Matrix3D object representing an equivalent rotation.
        * @param target An optional Matrix3D container to store the transformation in. If not provided, a new object is created.
        * @returns A Matrix3D object representing an equivalent rotation.
        */
        Quaternion.prototype.toMatrix3D = function (target) {
            if (target === void 0) { target = null; }
            var rawData = egret3d.Matrix3DUtils.RAW_DATA_CONTAINER;
            var xy2 = 2.0 * this.x * this.y, xz2 = 2.0 * this.x * this.z, xw2 = 2.0 * this.x * this.w;
            var yz2 = 2.0 * this.y * this.z, yw2 = 2.0 * this.y * this.w, zw2 = 2.0 * this.z * this.w;
            var xx = this.x * this.x, yy = this.y * this.y, zz = this.z * this.z, ww = this.w * this.w;
            rawData[0] = xx - yy - zz + ww;
            rawData[4] = xy2 - zw2;
            rawData[8] = xz2 + yw2;
            rawData[12] = 0;
            rawData[1] = xy2 + zw2;
            rawData[5] = -xx + yy - zz + ww;
            rawData[9] = yz2 - xw2;
            rawData[13] = 0;
            rawData[2] = xz2 - yw2;
            rawData[6] = yz2 + xw2;
            rawData[10] = -xx - yy + zz + ww;
            rawData[14] = 0;
            rawData[3] = 0.0;
            rawData[7] = 0.0;
            rawData[11] = 0;
            rawData[15] = 1;
            if (!target)
                return new egret3d.Matrix4_4(new Float32Array(rawData));
            target.copyRawDataFrom(rawData);
            return target;
        };
        /**
        * @language en_US
        * Extracts a quaternion rotation matrix out of a given Matrix3D object.
        * @param matrix The Matrix3D out of which the rotation will be extracted.
        */
        Quaternion.prototype.fromMatrix = function (matrix) {
            var v = matrix.decompose(egret3d.Orientation3D.QUATERNION)[1];
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
            this.w = v.w;
        };
        /**
        * @language en_US
        * Converts the quaternion to a Vector.&lt;Number&gt; matrix representation of a rotation equivalent to this quaternion.
        * @param target The Vector.&lt;Number&gt; to contain the raw matrix data.
        * @param exclude4thRow If true, the last row will be omitted, and a 4x3 matrix will be generated instead of a 4x4.
        */
        Quaternion.prototype.toRawData = function (target, exclude4thRow) {
            if (exclude4thRow === void 0) { exclude4thRow = false; }
            var xy2 = 2.0 * this.x * this.y, xz2 = 2.0 * this.x * this.z, xw2 = 2.0 * this.x * this.w;
            var yz2 = 2.0 * this.y * this.z, yw2 = 2.0 * this.y * this.w, zw2 = 2.0 * this.z * this.w;
            var xx = this.x * this.x, yy = this.y * this.y, zz = this.z * this.z, ww = this.w * this.w;
            target[0] = xx - yy - zz + ww;
            target[1] = xy2 - zw2;
            target[2] = xz2 + yw2;
            target[4] = xy2 + zw2;
            target[5] = -xx + yy - zz + ww;
            target[6] = yz2 - xw2;
            target[8] = xz2 - yw2;
            target[9] = yz2 + xw2;
            target[10] = -xx - yy + zz + ww;
            target[3] = target[7] = target[11] = 0;
            if (!exclude4thRow) {
                target[12] = target[13] = target[14] = 0;
                target[15] = 1;
            }
        };
        /**
        * @language en_US
        * Clones the quaternion.
        * @returns An exact duplicate of the current Quaternion.
        */
        Quaternion.prototype.clone = function () {
            return new Quaternion(this.x, this.y, this.z, this.w);
        };
        /**
        * @language en_US
        * Rotates a point.
        * @param vector The Vector3D object to be rotated.
        * @param target An optional Vector3D object that will contain the rotated coordinates. If not provided, a new object will be created.
        * @returns A Vector3D object containing the rotated point.
        */
        Quaternion.prototype.rotatePoint = function (vector, target) {
            if (target === void 0) { target = null; }
            var x1, y1, z1, w1;
            var x2 = vector.x, y2 = vector.y, z2 = vector.z;
            //target ||= new Vector3D();
            if (target === null) {
                target = new egret3d.Vector3D();
            }
            // p*q'
            w1 = -this.x * x2 - this.y * y2 - this.z * z2;
            x1 = this.w * x2 + this.y * z2 - this.z * y2;
            y1 = this.w * y2 - this.x * z2 + this.z * x2;
            z1 = this.w * z2 + this.x * y2 - this.y * x2;
            target.x = -w1 * this.x + x1 * this.w - y1 * this.z + z1 * this.y;
            target.y = -w1 * this.y + x1 * this.z + y1 * this.w - z1 * this.x;
            target.z = -w1 * this.z - x1 * this.y + y1 * this.x + z1 * this.w;
            return target;
        };
        /**
        * @language en_US
        * Copies the data from a quaternion into this instance.
        * @param q The quaternion to copy from.
        */
        Quaternion.prototype.copyFrom = function (q) {
            this.x = q.x;
            this.y = q.y;
            this.z = q.z;
            this.w = q.w;
        };
        return Quaternion;
    })();
    egret3d.Quaternion = Quaternion;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Orientation3D
     * @classdesc
     *  定义 Orientation3D 常量
     */
    var Orientation3D = (function () {
        function Orientation3D() {
        }
        Orientation3D.AXIS_ANGLE = "axisAngle";
        Orientation3D.EULER_ANGLES = "eulerAngles";
        Orientation3D.QUATERNION = "quaternion";
        return Orientation3D;
    })();
    egret3d.Orientation3D = Orientation3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Plane3D
     * @classdesc
     * Plane3D 类
     */
    var Plane3D = (function () {
        /**
         * @language en_US
         * Create a Plane3D with ABCD coefficients
         */
        function Plane3D(a, b, c, d) {
            if (a === void 0) { a = 0; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 0; }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
        }
        /**
         * @language en_US
         */
        Plane3D.prototype.setTo = function (a, b, c, d) {
            if (a === void 0) { a = 0; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 0; }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
        };
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from 3 points in 3d space.
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        Plane3D.prototype.fromPoints = function (p0, p1, p2) {
            var d1x = p1.x - p0.x;
            var d1y = p1.y - p0.y;
            var d1z = p1.z - p0.z;
            var d2x = p2.x - p0.x;
            var d2y = p2.y - p0.y;
            var d2z = p2.z - p0.z;
            this.a = d1y * d2z - d1z * d2y;
            this.b = d1z * d2x - d1x * d2z;
            this.c = d1x * d2y - d1y * d2x;
            this.d = -(this.a * p0.x + this.b * p0.y + this.c * p0.z);
        };
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.
         * @param normal Vector3D
         * @param point  Vector3D
         */
        Plane3D.prototype.fromNormalAndPoint = function (normal, point) {
            this.a = normal.x;
            this.b = normal.y;
            this.c = normal.z;
            this.d = -(this.a * point.x + this.b * point.y + this.c * point.z);
        };
        /**
         * @language en_US
         * Normalize this Plane3D
         * @returns Plane3D This Plane3D.
         */
        Plane3D.prototype.normalize = function () {
            var len = Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
            if (len > 0.0) {
                var invLength = 1.0 / len;
                this.a *= invLength;
                this.b *= invLength;
                this.c *= invLength;
                this.d *= invLength;
            }
            return len;
        };
        /**
         * @language en_US
         * Returns the signed distance between this Plane3D and the point p.
         * @param p Vector3D
         * @returns Number
         */
        Plane3D.prototype.distance = function (p) {
            return this.a * p.x + this.b * p.y + this.c * p.z + this.d;
        };
        /**
         * @language en_US
         * Classify a point against this Plane3D. (in front, back or intersecting)
         * @param p Vector3D
         * @returns int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
         */
        Plane3D.prototype.classifyPoint = function (p, epsilon) {
            if (epsilon === void 0) { epsilon = 0.01; }
            var dis = this.distance(p);
            if (dis < -epsilon) {
                return egret3d.PlaneClassification.BACK;
            }
            else if (dis > epsilon) {
                return egret3d.PlaneClassification.FRONT;
            }
            return egret3d.PlaneClassification.INTERSECT;
        };
        /**
         * @language en_US
         * @returns string
         */
        Plane3D.prototype.toString = function () {
            return "Plane3D [a:" + this.a + ", b:" + this.b + ", c:" + this.c + ", d:" + this.d + "]";
        };
        // indicates the alignment of the plane
        Plane3D.ALIGN_ANY = 0;
        Plane3D.ALIGN_XY_AXIS = 1;
        Plane3D.ALIGN_YZ_AXIS = 2;
        Plane3D.ALIGN_XZ_AXIS = 3;
        return Plane3D;
    })();
    egret3d.Plane3D = Plane3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.CubeBoxBound
     * @classdesc
     * 可使用 CubeBoxBound 类 取得包围盒的数据
     */
    var CubeBoxBound = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param min
        * @param max
        */
        function CubeBoxBound(min, max) {
            if (min === void 0) { min = new egret3d.Vector3D(); }
            if (max === void 0) { max = new egret3d.Vector3D(); }
            /**
            * @language zh_CN
            * 盒子最小点
            */
            this.min = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 盒子最大点
            */
            this.max = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 盒子顶点
            */
            this.vexData = new Array();
            /**
            * @language zh_CN
            * 盒子索引
            */
            this.indexData = new Array();
            /**
            * @language zh_CN
            * 盒子宽
            */
            this.width = 0;
            /**
            * @language zh_CN
            * 盒子高
            */
            this.heigth = 0;
            /**
            * @language zh_CN
            * 盒子长
            */
            this.depth = 0;
            /**
            * @language zh_CN
            * 盒子体积
            */
            this.volume = 0;
            /**
            * @language zh_CN
            * 盒子包围球中心点
            */
            this.center = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 盒子包围球半径
            */
            this.radius = 0;
            this.min.copyFrom(min);
            this.max.copyFrom(max);
            this.calculateBox();
        }
        /**
        * @language zh_CN
        * 拷贝一个包围盒
        * @param box
        */
        CubeBoxBound.prototype.copyFrom = function (box) {
            this.min.copyFrom(box.min);
            this.max.copyFrom(box.max);
            this.calculateBox();
        };
        /**
        * @language zh_CN
        * 填充当前包围盒
        * @param box
        */
        CubeBoxBound.prototype.fillBox = function (min, max) {
            this.min.copyFrom(min);
            this.max.copyFrom(max);
            this.calculateBox();
        };
        /**
        * @language zh_CN
        * 检测一个点是否包围盒内
        * @param pos 检测的点
        * @returns 成功返回true
        */
        CubeBoxBound.prototype.inBox = function (pos) {
            if (pos.x <= this.max.x && pos.x >= this.min.x &&
                pos.y <= this.max.y && pos.y >= this.min.y &&
                pos.z <= this.max.z && pos.z >= this.min.z) {
                return true;
            }
            return false;
        };
        /**
        * @language zh_CN
        * 检测两个包围盒是否相交
        * @param box2 其中一个包围盒
        * @param boxIntersect 相交的包围盒
        * @returns 成功返回true
        */
        CubeBoxBound.prototype.intersectAABBs = function (box2, boxIntersect) {
            if (this.min.x > box2.max.x) {
                return false;
            }
            if (this.max.x < box2.min.x) {
                return false;
            }
            if (this.min.y > box2.max.y) {
                return false;
            }
            if (this.max.y < box2.min.y) {
                return false;
            }
            if (this.min.z > box2.max.z) {
                return false;
            }
            if (this.max.z < box2.min.z) {
                return false;
            }
            if (boxIntersect != null) {
                boxIntersect.min.x = Math.max(this.min.x, box2.min.x);
                boxIntersect.max.x = Math.min(this.max.x, box2.max.x);
                boxIntersect.min.y = Math.max(this.min.y, box2.min.y);
                boxIntersect.max.y = Math.min(this.max.y, box2.max.y);
                boxIntersect.min.z = Math.max(this.min.z, box2.min.z);
                boxIntersect.max.z = Math.min(this.max.z, box2.max.z);
            }
            return true;
        };
        /**
        * @language zh_CN
        * 包围盒矩阵变换
        * @param mat 变换矩阵
        * @returns 返回变换后的矩阵
        */
        CubeBoxBound.prototype.Transform = function (mat) {
            var box = new CubeBoxBound();
            box.fillBox(mat.transformVector(this.min), mat.transformVector(this.max));
            return box;
        };
        /**
        * @language zh_CN
        * 以字符串形式返回box的值
        * @returns 字符串
        */
        CubeBoxBound.prototype.toString = function () {
            return "CubeBoxBound [min:(" + this.min.x + ", " + this.min.y + ", " + this.min.z + ") max:(" + this.max.x + ", " + this.max.y + ", " + this.max.z + ")]";
        };
        /**
        * @language zh_CN
        * 计算包围盒数据
        */
        CubeBoxBound.prototype.calculateBox = function () {
            this.vexData.length = 0;
            this.indexData.length = 0;
            var sub = this.max.subtract(this.min);
            this.vexData.push(this.min.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z);
            this.vexData.push(this.min.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z + sub.z);
            this.vexData.push(this.min.x + sub.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z + sub.z);
            this.vexData.push(this.min.x + sub.x);
            this.vexData.push(this.min.y);
            this.vexData.push(this.min.z);
            this.vexData.push(this.max.x - sub.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z - sub.z);
            this.vexData.push(this.max.x - sub.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z);
            this.vexData.push(this.max.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z);
            this.vexData.push(this.max.x);
            this.vexData.push(this.max.y);
            this.vexData.push(this.max.z - sub.z);
            this.indexData.push(0, 4, 7, 0, 7, 3, 2, 6, 5, 2, 5, 1, 4, 5, 6, 4, 6, 7, 0, 3, 2, 0, 2, 1, 0, 1, 5, 0, 5, 4, 3, 7, 6, 3, 6, 2);
            this.width = this.max.x - this.min.x;
            this.heigth = this.max.y - this.min.y;
            this.depth = this.max.z - this.min.z;
            this.volume = this.width * this.heigth * this.depth;
            var c = this.max.subtract(this.min);
            c.scaleBy(0.5);
            this.radius = c.length;
            this.center.copyFrom(this.min);
            var tmp = this.center.add(c);
            this.center.copyFrom(tmp);
        };
        return CubeBoxBound;
    })();
    egret3d.CubeBoxBound = CubeBoxBound;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Matrix4_4
     * @classdesc
     * Matrix4_4 矩阵类
     */
    var Matrix4_4 = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param datas {number[16]}
        */
        function Matrix4_4(datas) {
            if (datas === void 0) { datas = null; }
            this.oRawData = new Float32Array(16);
            if (datas) {
                this.rawData = datas;
            }
            else
                this.rawData = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
        /**
        * @language en_US
        * Build a lookat matrix. (left-handed)
        * @param eye The eye position.
        * @param at The target position.
        * @param up The up direction.
        */
        /**
        * @language zh_CN
        * 生成一个注视目标的矩阵.
        * @param eye 眼睛的位置.
        * @param at 目标的位置.
        * @param up 向上的方向.
        */
        Matrix4_4.prototype.lookAt = function (eye, at, up) {
            var zaxis = at.subtract(eye);
            zaxis.normalize();
            var xaxis = up.crossProduct(zaxis);
            xaxis.normalize();
            var yaxis = zaxis.crossProduct(xaxis);
            this.rawData[0] = xaxis.x;
            this.rawData[1] = yaxis.x;
            this.rawData[2] = zaxis.x;
            this.rawData[3] = 0;
            this.rawData[4] = xaxis.y;
            this.rawData[5] = yaxis.y;
            this.rawData[6] = zaxis.y;
            this.rawData[7] = 0;
            this.rawData[8] = xaxis.z;
            this.rawData[9] = yaxis.z;
            this.rawData[10] = zaxis.z;
            this.rawData[11] = 0;
            this.rawData[12] = -xaxis.dotProduct(eye);
            this.rawData[13] = -yaxis.dotProduct(eye);
            this.rawData[14] = -zaxis.dotProduct(eye);
            this.rawData[15] = 1;
        };
        /**
        * @language en_US
        * Build a perspective projection matrix. (left-handed)
        * @param fovy .
        * @param aspect .
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param fovy 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspect 横纵比，在视空间宽度除以高度.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        Matrix4_4.prototype.perspective = function (fovy, aspect, zn, zf) {
            var angle = fovy * (Math.PI / 180.0);
            var yScale = Math.tan((Math.PI - angle) / 2.0);
            var xScale = yScale / aspect;
            this.rawData[0] = xScale;
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[5] = yScale;
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[10] = zf / (zf - zn);
            this.rawData[11] = 1;
            this.rawData[12] = 0;
            this.rawData[13] = 0;
            this.rawData[14] = -zn * zf / (zf - zn);
            this.rawData[15] = 0;
        };
        /**
        * @language en_US
        * Build an ortho matrix. (left-handed)
        * @param w screen width.
        * @param h screen height.
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param w 屏幕的宽度。
        * @param h 屏幕的高度.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        Matrix4_4.prototype.ortho = function (w, h, zn, zf) {
            this.rawData[0] = 2 / w;
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[5] = 2 / h;
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[10] = 1 / (zf - zn);
            this.rawData[11] = 0;
            this.rawData[12] = 0;
            this.rawData[13] = 0;
            this.rawData[14] = zn / (zn - zf);
            this.rawData[15] = 1;
        };
        /**
        * @language en_US
        * Build an ortho matrix. (left-handed)
        * @param l min x.
        * @param r max x.
        * @param b min y.
        * @param t max y.
        * @param zn min z.
        * @param zf max z.
        */
        /**
        * @language zh_CN
        * 生成一个透视投影矩阵.
        * @param l 观察时X轴最小值.
        * @param r 观察时X轴最大值.
        * @param b 观察时Y轴最小值。
        * @param t 观察时Y轴最大值.
        * @param zn 近裁剪面位置Z值.
        * @param zf 远裁剪面位置Z值.
        */
        Matrix4_4.prototype.orthoOffCenter = function (l, r, b, t, zn, zf) {
            this.rawData[0] = 2 / (r - 1);
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[5] = 2 / (t - b);
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[10] = 1 / (zf - zn);
            this.rawData[11] = 0;
            this.rawData[12] = (1 + r) / (1 - r);
            this.rawData[13] = (t + b) / (b - t);
            this.rawData[14] = zn / (zn - zf);
            this.rawData[15] = 1;
        };
        /**
        * @language en_US
        * matrix multiply
        * @param lhs .
        */
        /**
        * @language zh_CN
        * 矩阵相乘.
        * @param lhs 目标矩阵.
        */
        Matrix4_4.prototype.append = function (lhs) {
            var m111 = this.rawData[0], m121 = this.rawData[4], m131 = this.rawData[8], m141 = this.rawData[12], m112 = this.rawData[1], m122 = this.rawData[5], m132 = this.rawData[9], m142 = this.rawData[13], m113 = this.rawData[2], m123 = this.rawData[6], m133 = this.rawData[10], m143 = this.rawData[14], m114 = this.rawData[3], m124 = this.rawData[7], m134 = this.rawData[11], m144 = this.rawData[15], m211 = lhs.rawData[0], m221 = lhs.rawData[4], m231 = lhs.rawData[8], m241 = lhs.rawData[12], m212 = lhs.rawData[1], m222 = lhs.rawData[5], m232 = lhs.rawData[9], m242 = lhs.rawData[13], m213 = lhs.rawData[2], m223 = lhs.rawData[6], m233 = lhs.rawData[10], m243 = lhs.rawData[14], m214 = lhs.rawData[3], m224 = lhs.rawData[7], m234 = lhs.rawData[11], m244 = lhs.rawData[15];
            this.rawData[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
            this.rawData[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
            this.rawData[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
            this.rawData[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
            this.rawData[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
            this.rawData[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
            this.rawData[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
            this.rawData[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
            this.rawData[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
            this.rawData[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
            this.rawData[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
            this.rawData[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
            this.rawData[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
            this.rawData[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
            this.rawData[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
            this.rawData[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
        };
        /**
        * @language en_US
        * matrix add
        * @param lhs
        * @returns
        */
        /**
        * @language zh_CN
        * 矩阵相加.
        * @param lhs 目标矩阵.
        * @returns 相加后的结果.
        */
        Matrix4_4.prototype.add = function (lhs) {
            var m111 = this.rawData[0], m121 = this.rawData[4], m131 = this.rawData[8], m141 = this.rawData[12], m112 = this.rawData[1], m122 = this.rawData[5], m132 = this.rawData[9], m142 = this.rawData[13], m113 = this.rawData[2], m123 = this.rawData[6], m133 = this.rawData[10], m143 = this.rawData[14], m114 = this.rawData[3], m124 = this.rawData[7], m134 = this.rawData[11], m144 = this.rawData[15], m211 = lhs.rawData[0], m221 = lhs.rawData[4], m231 = lhs.rawData[8], m241 = lhs.rawData[12], m212 = lhs.rawData[1], m222 = lhs.rawData[5], m232 = lhs.rawData[9], m242 = lhs.rawData[13], m213 = lhs.rawData[2], m223 = lhs.rawData[6], m233 = lhs.rawData[10], m243 = lhs.rawData[14], m214 = lhs.rawData[3], m224 = lhs.rawData[7], m234 = lhs.rawData[11], m244 = lhs.rawData[15];
            this.rawData[0] = m111 + m211;
            this.rawData[1] = m112 + m212;
            this.rawData[2] = m113 + m213;
            this.rawData[3] = m114 + m214;
            this.rawData[4] = m121 + m221;
            this.rawData[5] = m122 + m222;
            this.rawData[6] = m123 + m223;
            this.rawData[7] = m124 + m224;
            this.rawData[8] = m131 + m231;
            this.rawData[9] = m132 + m232;
            this.rawData[10] = m133 + m233;
            this.rawData[11] = m134 + m234;
            this.rawData[12] = m141 + m241;
            this.rawData[13] = m142 + m242;
            this.rawData[14] = m143 + m243;
            this.rawData[15] = m144 + m244;
            return this;
        };
        /**
        * @language en_US
        * matrix add
        * @param lhs
        * @returns reslut
        */
        /**
        * @language zh_CN
        * 矩阵相减.
        * @param lhs 目标矩阵.
        * @returns 相加减的结果.
        */
        Matrix4_4.prototype.sub = function (lhs) {
            var m111 = this.rawData[0], m121 = this.rawData[4], m131 = this.rawData[8], m141 = this.rawData[12], m112 = this.rawData[1], m122 = this.rawData[5], m132 = this.rawData[9], m142 = this.rawData[13], m113 = this.rawData[2], m123 = this.rawData[6], m133 = this.rawData[10], m143 = this.rawData[14], m114 = this.rawData[3], m124 = this.rawData[7], m134 = this.rawData[11], m144 = this.rawData[15], m211 = lhs.rawData[0], m221 = lhs.rawData[4], m231 = lhs.rawData[8], m241 = lhs.rawData[12], m212 = lhs.rawData[1], m222 = lhs.rawData[5], m232 = lhs.rawData[9], m242 = lhs.rawData[13], m213 = lhs.rawData[2], m223 = lhs.rawData[6], m233 = lhs.rawData[10], m243 = lhs.rawData[14], m214 = lhs.rawData[3], m224 = lhs.rawData[7], m234 = lhs.rawData[11], m244 = lhs.rawData[15];
            this.rawData[0] = m111 - m211;
            this.rawData[1] = m112 - m212;
            this.rawData[2] = m113 - m213;
            this.rawData[3] = m114 - m214;
            this.rawData[4] = m121 - m221;
            this.rawData[5] = m122 - m222;
            this.rawData[6] = m123 - m223;
            this.rawData[7] = m124 - m224;
            this.rawData[8] = m131 - m231;
            this.rawData[9] = m132 - m232;
            this.rawData[10] = m133 - m233;
            this.rawData[11] = m134 - m234;
            this.rawData[12] = m141 - m241;
            this.rawData[13] = m142 - m242;
            this.rawData[14] = m143 - m243;
            this.rawData[15] = m144 - m244;
            return this;
        };
        /**
        * @language zh_CN
        * 矩阵乘分量.
        * @param v .
        * @returns 返回一个相乘后的结果 矩阵.
        */
        Matrix4_4.prototype.mult = function (v) {
            this.rawData[0] *= v;
            this.rawData[1] *= v;
            this.rawData[2] *= v;
            this.rawData[3] *= v;
            this.rawData[4] *= v;
            this.rawData[5] *= v;
            this.rawData[6] *= v;
            this.rawData[7] *= v;
            this.rawData[8] *= v;
            this.rawData[9] *= v;
            this.rawData[10] *= v;
            this.rawData[11] *= v;
            this.rawData[12] *= v;
            this.rawData[13] *= v;
            this.rawData[14] *= v;
            this.rawData[15] *= v;
            return this;
        };
        /**
        * @language zh_CN
        * 创建一个欧拉旋转矩阵.
        * @param x 绕x轴旋转角度.
        * @param y 绕y轴旋转角度.
        * @param z 绕z轴旋转角度.
        */
        Matrix4_4.prototype.rotation = function (x, y, z) {
            this.appendRotation(x, egret3d.Vector3D.X_AXIS);
            this.appendRotation(y, egret3d.Vector3D.Y_AXIS);
            this.appendRotation(z, egret3d.Vector3D.Z_AXIS);
        };
        /**
        * @language zh_CN
        * 当前矩阵乘 (按axis轴旋转degrees角度创建出来的矩阵)
        * @param degrees 旋转角度.
        * @param axis 绕axis轴旋转角度.
        */
        Matrix4_4.prototype.appendRotation = function (degrees, axis) {
            var m = Matrix4_4.getAxisRotation(axis.x, axis.y, axis.z, degrees);
            ///this.append(m);
            var tmp = new Matrix4_4();
            var s, c;
            var angle = degrees * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS;
            s = Math.sin(angle);
            c = Math.cos(angle);
            if (axis.x == 1) {
                tmp.rawData[0] = 1.0;
                tmp.rawData[1] = 0.0;
                tmp.rawData[2] = 0.0;
                tmp.rawData[3] = 0.0;
                tmp.rawData[4] = 0.0;
                tmp.rawData[5] = c;
                tmp.rawData[6] = s;
                tmp.rawData[7] = 0.0;
                tmp.rawData[8] = 0.0;
                tmp.rawData[9] = -s;
                tmp.rawData[10] = c;
                tmp.rawData[7] = 0.0;
                tmp.rawData[12] = 0.0;
                tmp.rawData[13] = 0.0;
                tmp.rawData[14] = 0.0;
                tmp.rawData[15] = 1.0;
            }
            if (axis.y == 1) {
                tmp.rawData[0] = c;
                tmp.rawData[1] = 0.0;
                tmp.rawData[2] = -s;
                tmp.rawData[3] = 0.0;
                tmp.rawData[4] = 0.0;
                tmp.rawData[5] = 1.0;
                tmp.rawData[6] = 0.0;
                tmp.rawData[7] = 0.0;
                tmp.rawData[8] = s;
                tmp.rawData[9] = 0.0;
                tmp.rawData[10] = c;
                tmp.rawData[11] = 0.0;
                tmp.rawData[12] = 0.0;
                tmp.rawData[13] = 0.0;
                tmp.rawData[14] = 0.0;
                tmp.rawData[15] = 1.0;
            }
            if (axis.z == 1) {
                tmp.rawData[0] = c;
                tmp.rawData[1] = s;
                tmp.rawData[2] = 0.0;
                tmp.rawData[3] = 0.0;
                tmp.rawData[4] = -s;
                tmp.rawData[5] = c;
                tmp.rawData[6] = 0.0;
                tmp.rawData[7] = 0.0;
                tmp.rawData[8] = 0.0;
                tmp.rawData[9] = 0.0;
                tmp.rawData[10] = 1.0;
                tmp.rawData[11] = 0.0;
                tmp.rawData[12] = 0.0;
                tmp.rawData[13] = 0.0;
                tmp.rawData[14] = 0.0;
                tmp.rawData[15] = 1.0;
            }
            this.append(tmp);
        };
        /**
        * @language zh_CN
        * 生成一个缩放矩阵
        * @param xScale x轴缩放
        * @param yScale y轴缩放
        * @param zScale z轴缩放
        */
        Matrix4_4.prototype.appendScale = function (xScale, yScale, zScale) {
            this.rawData[0] = xScale;
            this.rawData[1] = 0.0;
            this.rawData[2] = 0.0;
            this.rawData[4] = 0.0;
            this.rawData[5] = yScale;
            this.rawData[6] = 0.0;
            this.rawData[8] = 0.0;
            this.rawData[9] = 0.0;
            this.rawData[10] = zScale;
        };
        /**
        * @language zh_CN
        * 加上一个平移矩阵
        * @param x x轴坐标
        * @param y y轴坐标
        * @param z z轴坐标
        */
        Matrix4_4.prototype.appendTranslation = function (x, y, z) {
            this.rawData[12] += x;
            this.rawData[13] += y;
            this.rawData[14] += z;
        };
        /**
        * @language zh_CN
        * 返回一个当前矩阵的克隆矩阵
        * @returns 克隆后的矩阵
        */
        Matrix4_4.prototype.clone = function () {
            var ret = new Matrix4_4();
            ret.copyFrom(this);
            return ret;
        };
        /**
        * @language zh_CN
        * 给当前矩阵其中一行赋值
        * @param column 拷贝的行
        * @param vector3D 拷贝的值
        */
        Matrix4_4.prototype.copyColumnFrom = function (column, vector3D) {
            switch (column) {
                case 0:
                    this.rawData[0] = vector3D.x;
                    this.rawData[1] = vector3D.y;
                    this.rawData[2] = vector3D.z;
                    this.rawData[3] = vector3D.w;
                    break;
                case 1:
                    this.rawData[4] = vector3D.x;
                    this.rawData[5] = vector3D.y;
                    this.rawData[6] = vector3D.z;
                    this.rawData[7] = vector3D.w;
                    break;
                case 2:
                    this.rawData[8] = vector3D.x;
                    this.rawData[9] = vector3D.y;
                    this.rawData[10] = vector3D.z;
                    this.rawData[11] = vector3D.w;
                    break;
                case 3:
                    this.rawData[12] = vector3D.x;
                    this.rawData[13] = vector3D.y;
                    this.rawData[14] = vector3D.z;
                    this.rawData[15] = vector3D.w;
                    break;
                default:
            }
        };
        /**
        * @language zh_CN
        * 拷贝矩阵中的其中一行 把值存在vector3D.
        * @param column 拷贝的行
        * @param vector3D 拷贝存值目标
        */
        Matrix4_4.prototype.copyRowTo = function (column, vector3D) {
            switch (column) {
                case 0:
                    vector3D.x = this.rawData[0];
                    vector3D.y = this.rawData[1];
                    vector3D.z = this.rawData[2];
                    vector3D.w = this.rawData[3];
                    break;
                case 1:
                    vector3D.x = this.rawData[4];
                    vector3D.y = this.rawData[5];
                    vector3D.z = this.rawData[6];
                    vector3D.w = this.rawData[7];
                    break;
                case 2:
                    vector3D.x = this.rawData[8];
                    vector3D.y = this.rawData[9];
                    vector3D.z = this.rawData[10];
                    vector3D.w = this.rawData[11];
                    break;
                case 3:
                    vector3D.x = this.rawData[12];
                    vector3D.y = this.rawData[13];
                    vector3D.z = this.rawData[14];
                    vector3D.w = this.rawData[15];
                    break;
                default:
            }
        };
        /**
        * @language zh_CN
        * 把一个矩阵的值赋给当前矩阵.
        * @param sourceMatrix3D 源矩阵.
        * @returns 返回当前矩阵
        */
        Matrix4_4.prototype.copyFrom = function (sourceMatrix3D) {
            var len = sourceMatrix3D.rawData.length;
            for (var c = 0; c < len; c++)
                this.rawData[c] = sourceMatrix3D.rawData[c];
            return this;
        };
        /**
        * @language zh_CN
        * 把一个 float 数组赋值给当前矩阵.
        * @param vector 源数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        Matrix4_4.prototype.copyRawDataFrom = function (vector, index, transpose) {
            if (index === void 0) { index = 0; }
            if (transpose === void 0) { transpose = false; }
            if (transpose)
                this.transpose();
            var len = vector.length - index;
            for (var c = 0; c < len; c++)
                this.rawData[c] = vector[c + index];
            if (transpose)
                this.transpose();
        };
        /**
        * @language zh_CN
        * 把当前矩阵的值拷贝给一个 float 数组.
        * @param vector 目标数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        Matrix4_4.prototype.copyRawDataTo = function (vector, index, transpose) {
            if (index === void 0) { index = 0; }
            if (transpose === void 0) { transpose = false; }
            if (transpose)
                this.transpose();
            var len = this.rawData.length;
            for (var c = 0; c < len; c++)
                vector[c + index] = this.rawData[c];
            if (transpose)
                this.transpose();
        };
        /**
        * @language zh_CN
        * 给当前矩阵的某一列 赋值
        * @param col 列
        * @param vector3D 值来源
        */
        Matrix4_4.prototype.copyColFrom = function (col, vector3D) {
            switch (col) {
                case 0:
                    this.rawData[0] = vector3D.x;
                    this.rawData[4] = vector3D.y;
                    this.rawData[8] = vector3D.z;
                    this.rawData[12] = vector3D.w;
                    break;
                case 1:
                    this.rawData[1] = vector3D.x;
                    this.rawData[5] = vector3D.y;
                    this.rawData[9] = vector3D.z;
                    this.rawData[13] = vector3D.w;
                    break;
                case 2:
                    this.rawData[2] = vector3D.x;
                    this.rawData[6] = vector3D.y;
                    this.rawData[10] = vector3D.z;
                    this.rawData[14] = vector3D.w;
                    break;
                case 3:
                    this.rawData[3] = vector3D.x;
                    this.rawData[7] = vector3D.y;
                    this.rawData[11] = vector3D.z;
                    this.rawData[15] = vector3D.w;
                    break;
                default:
                    new Error("no more raw!");
            }
        };
        /**
        * @language zh_CN
        * 拷贝当前矩阵的某一列
        * @param col 列
        * @param vector3D 拷贝目标
        */
        Matrix4_4.prototype.copyColTo = function (col, vector3D) {
            switch (col) {
                case 0:
                    vector3D.x = this.rawData[0];
                    vector3D.y = this.rawData[4];
                    vector3D.z = this.rawData[8];
                    vector3D.w = this.rawData[12];
                    break;
                case 1:
                    vector3D.x = this.rawData[1];
                    vector3D.y = this.rawData[5];
                    vector3D.z = this.rawData[9];
                    vector3D.w = this.rawData[13];
                    break;
                case 2:
                    vector3D.x = this.rawData[2];
                    vector3D.y = this.rawData[6];
                    vector3D.z = this.rawData[10];
                    vector3D.w = this.rawData[14];
                    break;
                case 3:
                    vector3D.x = this.rawData[3];
                    vector3D.y = this.rawData[7];
                    vector3D.z = this.rawData[11];
                    vector3D.w = this.rawData[15];
                    break;
                default:
                    new Error("no more raw!");
            }
        };
        /**
        * @language zh_CN
        * 拷贝当前矩阵
        * @param dest 拷贝目标
        */
        Matrix4_4.prototype.copyToMatrix3D = function (dest) {
            dest.rawData = this.rawData.slice(0);
        };
        /**
        * @language zh_CN
        * 分解当前矩阵
        * @param orientationStyle 分解类型
        * @returns Vector3D[3] pos rot scale
        */
        Matrix4_4.prototype.decompose = function (orientationStyle) {
            if (orientationStyle === void 0) { orientationStyle = "eulerAngles"; }
            var q;
            var vec = [];
            var m = this.clone();
            var mr = m.rawData;
            var pos = new egret3d.Vector3D(mr[12], mr[13], mr[14]);
            mr[12] = 0;
            mr[13] = 0;
            mr[14] = 0;
            var scale = new egret3d.Vector3D();
            scale.x = Math.sqrt(mr[0] * mr[0] + mr[1] * mr[1] + mr[2] * mr[2]);
            scale.y = Math.sqrt(mr[4] * mr[4] + mr[5] * mr[5] + mr[6] * mr[6]);
            scale.z = Math.sqrt(mr[8] * mr[8] + mr[9] * mr[9] + mr[10] * mr[10]);
            if (mr[0] * (mr[5] * mr[10] - mr[6] * mr[9]) - mr[1] * (mr[4] * mr[10] - mr[6] * mr[8]) + mr[2] * (mr[4] * mr[9] - mr[5] * mr[8]) < 0)
                scale.z = -scale.z;
            mr[0] /= scale.x;
            mr[1] /= scale.x;
            mr[2] /= scale.x;
            mr[4] /= scale.y;
            mr[5] /= scale.y;
            mr[6] /= scale.y;
            mr[8] /= scale.z;
            mr[9] /= scale.z;
            mr[10] /= scale.z;
            var rot = new egret3d.Vector3D();
            switch (orientationStyle) {
                case egret3d.Orientation3D.AXIS_ANGLE:
                    rot.w = Math.acos((mr[0] + mr[5] + mr[10] - 1) / 2);
                    var len = Math.sqrt((mr[6] - mr[9]) * (mr[6] - mr[9]) + (mr[8] - mr[2]) * (mr[8] - mr[2]) + (mr[1] - mr[4]) * (mr[1] - mr[4]));
                    rot.x = (mr[6] - mr[9]) / len;
                    rot.y = (mr[8] - mr[2]) / len;
                    rot.z = (mr[1] - mr[4]) / len;
                    break;
                case egret3d.Orientation3D.QUATERNION:
                    var tr = mr[0] + mr[5] + mr[10];
                    if (tr > 0) {
                        rot.w = Math.sqrt(1 + tr) / 2;
                        rot.x = (mr[6] - mr[9]) / (4 * rot.w);
                        rot.y = (mr[8] - mr[2]) / (4 * rot.w);
                        rot.z = (mr[1] - mr[4]) / (4 * rot.w);
                    }
                    else if ((mr[0] > mr[5]) && (mr[0] > mr[10])) {
                        rot.x = Math.sqrt(1 + mr[0] - mr[5] - mr[10]) / 2;
                        rot.w = (mr[6] - mr[9]) / (4 * rot.x);
                        rot.y = (mr[1] + mr[4]) / (4 * rot.x);
                        rot.z = (mr[8] + mr[2]) / (4 * rot.x);
                    }
                    else if (mr[5] > mr[10]) {
                        rot.y = Math.sqrt(1 + mr[5] - mr[0] - mr[10]) / 2;
                        rot.x = (mr[1] + mr[4]) / (4 * rot.y);
                        rot.w = (mr[8] - mr[2]) / (4 * rot.y);
                        rot.z = (mr[6] + mr[9]) / (4 * rot.y);
                    }
                    else {
                        rot.z = Math.sqrt(1 + mr[10] - mr[0] - mr[5]) / 2;
                        rot.x = (mr[8] + mr[2]) / (4 * rot.z);
                        rot.y = (mr[6] + mr[9]) / (4 * rot.z);
                        rot.w = (mr[1] - mr[4]) / (4 * rot.z);
                    }
                    break;
                case egret3d.Orientation3D.EULER_ANGLES:
                    rot.y = Math.asin(-mr[2]);
                    if (mr[2] != 1 && mr[2] != -1) {
                        rot.x = Math.atan2(mr[6], mr[10]);
                        rot.z = Math.atan2(mr[1], mr[0]);
                    }
                    else {
                        rot.z = 0;
                        rot.x = Math.atan2(mr[4], mr[5]);
                    }
                    break;
            }
            vec.push(pos);
            vec.push(rot);
            vec.push(scale);
            return vec;
        };
        /**
        * @language zh_CN
        * 当前矩阵变换一个向量
        * @param v 要变换的向量
        * @returns 变换后的向量
        */
        Matrix4_4.prototype.deltaTransformVector = function (v) {
            var x = v.x;
            var y = v.y;
            var z = v.z;
            return new egret3d.Vector3D((x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8]), (x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9]), (x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10]), (x * this.rawData[3] + y * this.rawData[7] + z * this.rawData[11]));
        };
        /**
        * @language zh_CN
        * 单位化当前矩阵
        */
        Matrix4_4.prototype.identity = function () {
            this.rawData[1] = 0;
            this.rawData[2] = 0;
            this.rawData[3] = 0;
            this.rawData[4] = 0;
            this.rawData[6] = 0;
            this.rawData[7] = 0;
            this.rawData[8] = 0;
            this.rawData[9] = 0;
            this.rawData[11] = 0;
            this.rawData[12] = 0;
            this.rawData[13] = 0;
            this.rawData[14] = 0;
            this.rawData[0] = 1;
            this.rawData[5] = 1;
            this.rawData[10] = 1;
            this.rawData[15] = 1;
        };
        /**
        * @language zh_CN
        * 填充当前矩阵
        * @param value 填充的值
        */
        Matrix4_4.prototype.fill = function (value) {
            this.rawData[1] = value;
            this.rawData[2] = value;
            this.rawData[3] = value;
            this.rawData[4] = value;
            this.rawData[6] = value;
            this.rawData[7] = value;
            this.rawData[8] = value;
            this.rawData[9] = value;
            this.rawData[11] = value;
            this.rawData[12] = value;
            this.rawData[13] = value;
            this.rawData[14] = value;
            this.rawData[0] = value;
            this.rawData[5] = value;
            this.rawData[10] = value;
            this.rawData[15] = value;
        };
        /**
        * @language zh_CN
        * 当前矩阵求逆
        */
        Matrix4_4.prototype.invers33 = function () {
            /// Invert a 3x3 using cofactors.  This is about 8 times faster than
            /// the Numerical Recipes code which uses Gaussian elimination.
            var rkInverse_00 = this.rawData[5] * this.rawData[10] - this.rawData[9] * this.rawData[6];
            var rkInverse_01 = this.rawData[8] * this.rawData[6] - this.rawData[4] * this.rawData[10];
            var rkInverse_02 = this.rawData[4] * this.rawData[9] - this.rawData[8] * this.rawData[5];
            var rkInverse_10 = this.rawData[9] * this.rawData[2] - this.rawData[1] * this.rawData[10];
            var rkInverse_11 = this.rawData[0] * this.rawData[10] - this.rawData[8] * this.rawData[2];
            var rkInverse_12 = this.rawData[8] * this.rawData[1] - this.rawData[0] * this.rawData[9];
            var rkInverse_20 = this.rawData[1] * this.rawData[6] - this.rawData[5] * this.rawData[2];
            var rkInverse_21 = this.rawData[4] * this.rawData[2] - this.rawData[0] * this.rawData[6];
            var rkInverse_22 = this.rawData[0] * this.rawData[5] - this.rawData[4] * this.rawData[1];
            var fDet = this.rawData[0] * rkInverse_00 +
                this.rawData[4] * rkInverse_10 +
                this.rawData[8] * rkInverse_20;
            if (Math.abs(fDet) > 0.00000000001) {
                var fInvDet = 1.0 / fDet;
                this.rawData[0] = fInvDet * rkInverse_00;
                this.rawData[4] = fInvDet * rkInverse_01;
                this.rawData[8] = fInvDet * rkInverse_02;
                this.rawData[1] = fInvDet * rkInverse_10;
                this.rawData[5] = fInvDet * rkInverse_11;
                this.rawData[9] = fInvDet * rkInverse_12;
                this.rawData[2] = fInvDet * rkInverse_20;
                this.rawData[6] = fInvDet * rkInverse_21;
                this.rawData[10] = fInvDet * rkInverse_22;
            }
        };
        /**
        * @language zh_CN
        * 当前矩阵求逆
        * @returns 是否能求逆
        */
        Matrix4_4.prototype.invert = function () {
            var d = this.determinant;
            var invertable = Math.abs(d) > 0.00000000001;
            if (invertable) {
                d = 1 / d;
                var m11 = this.rawData[0];
                var m21 = this.rawData[4];
                var m31 = this.rawData[8];
                var m41 = this.rawData[12];
                var m12 = this.rawData[1];
                var m22 = this.rawData[5];
                var m32 = this.rawData[9];
                var m42 = this.rawData[13];
                var m13 = this.rawData[2];
                var m23 = this.rawData[6];
                var m33 = this.rawData[10];
                var m43 = this.rawData[14];
                var m14 = this.rawData[3];
                var m24 = this.rawData[7];
                var m34 = this.rawData[11];
                var m44 = this.rawData[15];
                this.rawData[0] = d * (m22 * (m33 * m44 - m43 * m34) - m32 * (m23 * m44 - m43 * m24) + m42 * (m23 * m34 - m33 * m24));
                this.rawData[1] = -d * (m12 * (m33 * m44 - m43 * m34) - m32 * (m13 * m44 - m43 * m14) + m42 * (m13 * m34 - m33 * m14));
                this.rawData[2] = d * (m12 * (m23 * m44 - m43 * m24) - m22 * (m13 * m44 - m43 * m14) + m42 * (m13 * m24 - m23 * m14));
                this.rawData[3] = -d * (m12 * (m23 * m34 - m33 * m24) - m22 * (m13 * m34 - m33 * m14) + m32 * (m13 * m24 - m23 * m14));
                this.rawData[4] = -d * (m21 * (m33 * m44 - m43 * m34) - m31 * (m23 * m44 - m43 * m24) + m41 * (m23 * m34 - m33 * m24));
                this.rawData[5] = d * (m11 * (m33 * m44 - m43 * m34) - m31 * (m13 * m44 - m43 * m14) + m41 * (m13 * m34 - m33 * m14));
                this.rawData[6] = -d * (m11 * (m23 * m44 - m43 * m24) - m21 * (m13 * m44 - m43 * m14) + m41 * (m13 * m24 - m23 * m14));
                this.rawData[7] = d * (m11 * (m23 * m34 - m33 * m24) - m21 * (m13 * m34 - m33 * m14) + m31 * (m13 * m24 - m23 * m14));
                this.rawData[8] = d * (m21 * (m32 * m44 - m42 * m34) - m31 * (m22 * m44 - m42 * m24) + m41 * (m22 * m34 - m32 * m24));
                this.rawData[9] = -d * (m11 * (m32 * m44 - m42 * m34) - m31 * (m12 * m44 - m42 * m14) + m41 * (m12 * m34 - m32 * m14));
                this.rawData[10] = d * (m11 * (m22 * m44 - m42 * m24) - m21 * (m12 * m44 - m42 * m14) + m41 * (m12 * m24 - m22 * m14));
                this.rawData[11] = -d * (m11 * (m22 * m34 - m32 * m24) - m21 * (m12 * m34 - m32 * m14) + m31 * (m12 * m24 - m22 * m14));
                this.rawData[12] = -d * (m21 * (m32 * m43 - m42 * m33) - m31 * (m22 * m43 - m42 * m23) + m41 * (m22 * m33 - m32 * m23));
                this.rawData[13] = d * (m11 * (m32 * m43 - m42 * m33) - m31 * (m12 * m43 - m42 * m13) + m41 * (m12 * m33 - m32 * m13));
                this.rawData[14] = -d * (m11 * (m22 * m43 - m42 * m23) - m21 * (m12 * m43 - m42 * m13) + m41 * (m12 * m23 - m22 * m13));
                this.rawData[15] = d * (m11 * (m22 * m33 - m32 * m23) - m21 * (m12 * m33 - m32 * m13) + m31 * (m12 * m23 - m22 * m13));
            }
            return invertable;
        };
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param pos  位移
        * @param scale 缩放
        * @param rot 旋转
        */
        Matrix4_4.prototype.makeTransform = function (pos, scale, rot) {
            rot.toMatrix3D(egret3d.Matrix3DUtils.CALCULATION_MATRIX);
            this.rawData[0] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[0] * scale.x;
            this.rawData[1] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[1] * scale.y;
            this.rawData[2] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[2] * scale.z;
            this.rawData[3] = 0;
            this.rawData[4] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[4] * scale.x;
            this.rawData[5] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[5] * scale.y;
            this.rawData[6] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[6] * scale.z;
            this.rawData[7] = 0;
            this.rawData[8] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[8] * scale.x;
            this.rawData[9] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[9] * scale.y;
            this.rawData[10] = egret3d.Matrix3DUtils.CALCULATION_MATRIX.rawData[10] * scale.z;
            this.rawData[11] = 0;
            this.rawData[12] = pos.x;
            this.rawData[13] = pos.y;
            this.rawData[14] = pos.z;
            this.rawData[15] = 1;
        };
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param components Vector3D[3] 位移 旋转 缩放
        * @returns 生成是否成功
        */
        Matrix4_4.prototype.recompose = function (components) {
            if (components.length < 3)
                return false;
            this.identity();
            this.appendScale(components[2].x, components[2].y, components[2].z);
            var angle;
            angle = -components[1].x * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS;
            egret3d.Matrix3DUtils.CALCULATION_MATRIX.copyRawDataFrom(new Float32Array([1, 0, 0, 0, 0, Math.cos(angle), -Math.sin(angle), 0, 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 0, 0]));
            this.append(egret3d.Matrix3DUtils.CALCULATION_MATRIX);
            angle = -components[1].y * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS;
            egret3d.Matrix3DUtils.CALCULATION_MATRIX.copyRawDataFrom(new Float32Array([Math.cos(angle), 0, Math.sin(angle), 0, 0, 1, 0, 0, -Math.sin(angle), 0, Math.cos(angle), 0, 0, 0, 0, 0]));
            this.append(egret3d.Matrix3DUtils.CALCULATION_MATRIX);
            angle = -components[1].z * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS;
            egret3d.Matrix3DUtils.CALCULATION_MATRIX.copyRawDataFrom(new Float32Array([Math.cos(angle), -Math.sin(angle), 0, 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]));
            this.append(egret3d.Matrix3DUtils.CALCULATION_MATRIX);
            this.rawData[12] = components[0].x;
            this.rawData[13] = components[0].y;
            this.rawData[14] = components[0].z;
            this.rawData[15] = 1;
            return true;
        };
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D向量
        * @param v 变换的向量
        * @returns 变换后的向量
        */
        Matrix4_4.prototype.transformVector = function (v) {
            if (v == null)
                return new egret3d.Vector3D();
            var x = v.x;
            var y = v.y;
            var z = v.z;
            var out = new egret3d.Vector3D();
            out.x = x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8] + this.rawData[12];
            out.y = x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9] + this.rawData[13];
            out.z = x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10] + this.rawData[14];
            out.w = x * this.rawData[3] + y * this.rawData[7] + z * this.rawData[11] + this.rawData[15];
            return out;
        };
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D平面
        * @param plane 变换的平面
        * @returns 变换后的平面
        */
        Matrix4_4.prototype.transformPlane = function (plane) {
            var mat = new Matrix4_4();
            mat.copyFrom(this);
            mat.invert();
            mat.transpose();
            var v = new egret3d.Vector3D(plane.a, plane.b, plane.c, plane.d);
            v.copyFrom(mat.transformVector(v));
            var p = new egret3d.Plane3D();
            p.a = v.x;
            p.b = v.y;
            p.c = v.z;
            p.d = v.w / Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
            return p;
        };
        /**
        * @language zh_CN
        * 当前矩阵转置
        */
        Matrix4_4.prototype.transpose = function () {
            for (var i = 0; i < this.oRawData.length; i++) {
                this.oRawData[i] = this.rawData[i];
            }
            this.rawData[1] = this.oRawData[4];
            this.rawData[2] = this.oRawData[8];
            this.rawData[3] = this.oRawData[12];
            this.rawData[4] = this.oRawData[1];
            this.rawData[6] = this.oRawData[9];
            this.rawData[7] = this.oRawData[13];
            this.rawData[8] = this.oRawData[2];
            this.rawData[9] = this.oRawData[6];
            this.rawData[11] = this.oRawData[14];
            this.rawData[12] = this.oRawData[3];
            this.rawData[13] = this.oRawData[7];
            this.rawData[14] = this.oRawData[11];
        };
        /**
        * @language zh_CN
        * 生成一个(以x,y,z为中心轴旋转degrees角度)的矩阵
        * @param x 中心轴的x
        * @param y 中心轴的y
        * @param z 中心轴的z
        * @param degrees 旋转角度
        */
        Matrix4_4.getAxisRotation = function (x, y, z, degrees) {
            var m = new Matrix4_4();
            var rad = degrees * (Math.PI / 180);
            var c = Math.cos(rad);
            var s = Math.sin(rad);
            var t = 1 - c;
            var tmp1, tmp2;
            m.rawData[0] = c + x * x * t;
            m.rawData[5] = c + y * y * t;
            m.rawData[10] = c + z * z * t;
            tmp1 = x * y * t;
            tmp2 = z * s;
            m.rawData[1] = tmp1 + tmp2;
            m.rawData[4] = tmp1 - tmp2;
            tmp1 = x * z * t;
            tmp2 = y * s;
            m.rawData[8] = tmp1 + tmp2;
            m.rawData[2] = tmp1 - tmp2;
            tmp1 = y * z * t;
            tmp2 = x * s;
            m.rawData[9] = tmp1 - tmp2;
            m.rawData[6] = tmp1 + tmp2;
            return m;
        };
        Object.defineProperty(Matrix4_4.prototype, "determinant", {
            /**
            * @language zh_CN
            * 返回矩阵行列式
            * @readOnly
            * @returns 行列式值
            */
            get: function () {
                return ((this.rawData[0] * this.rawData[5] - this.rawData[4] * this.rawData[1]) * (this.rawData[10] * this.rawData[15] - this.rawData[14] * this.rawData[11]) - (this.rawData[0] * this.rawData[9] - this.rawData[8] * this.rawData[1]) * (this.rawData[6] * this.rawData[15] - this.rawData[14] * this.rawData[7]) + (this.rawData[0] * this.rawData[13] - this.rawData[12] * this.rawData[1]) * (this.rawData[6] * this.rawData[11] - this.rawData[10] * this.rawData[7]) + (this.rawData[4] * this.rawData[9] - this.rawData[8] * this.rawData[5]) * (this.rawData[2] * this.rawData[15] - this.rawData[14] * this.rawData[3]) - (this.rawData[4] * this.rawData[13] - this.rawData[12] * this.rawData[5]) * (this.rawData[2] * this.rawData[11] - this.rawData[10] * this.rawData[3]) + (this.rawData[8] * this.rawData[13] - this.rawData[12] * this.rawData[9]) * (this.rawData[2] * this.rawData[7] - this.rawData[6] * this.rawData[3]));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Matrix4_4.prototype, "position", {
            /**
            * @language zh_CN
            * 返回矩阵位移
            * @readOnly
            * @returns 位移
            */
            get: function () {
                return new egret3d.Vector3D(this.rawData[12], this.rawData[13], this.rawData[14]);
            },
            /**
            * @language zh_CN
            * 设置矩阵位移
            * @writeOnly
            * @param value 位移
            */
            set: function (value) {
                this.rawData[12] = value.x;
                this.rawData[13] = value.y;
                this.rawData[14] = value.z;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Matrix4_4.prototype, "scale", {
            /**
            * @language zh_CN
            * 返回矩阵缩放
            * @readOnly
            * @returns 缩放
            */
            get: function () {
                return new egret3d.Vector3D(this.rawData[0], this.rawData[5], this.rawData[10]);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 以字符串返回矩阵的值
        * @readOnly
        * @returns 字符
        */
        Matrix4_4.prototype.toString = function () {
            return "matrix3d(" + Math.round(this.rawData[0] * 1000) / 1000 + "," + Math.round(this.rawData[1] * 1000) / 1000 + "," + Math.round(this.rawData[2] * 1000) / 1000 + "," + Math.round(this.rawData[3] * 1000) / 1000 + "," + Math.round(this.rawData[4] * 1000) / 1000 + "," + Math.round(this.rawData[5] * 1000) / 1000 + "," + Math.round(this.rawData[6] * 1000) / 1000 + "," + Math.round(this.rawData[7] * 1000) / 1000 + "," + Math.round(this.rawData[8] * 1000) / 1000 + "," + Math.round(this.rawData[9] * 1000) / 1000 + "," + Math.round(this.rawData[10] * 1000) / 1000 + "," + Math.round(this.rawData[11] * 1000) / 1000 + "," + Math.round(this.rawData[12] * 1000) / 1000 + "," + Math.round(this.rawData[13] * 1000) / 1000 + "," + Math.round(this.rawData[14] * 1000) / 1000 + "," + Math.round(this.rawData[15] * 1000) / 1000 + ")";
        };
        /**
        * @language zh_CN
        * 求两个矩阵之间的差值
        * @param m0 矩阵0
        * @param m1 矩阵1
        * @param t 时间差 0.0 - 1.0
        */
        Matrix4_4.prototype.lerp = function (m0, m1, t) {
            ///t(m1 - m0) + m0
            this.copyFrom(m1).sub(m0).mult(t).add(m0);
        };
        return Matrix4_4;
    })();
    egret3d.Matrix4_4 = Matrix4_4;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.EyesMatrix
     * @classdesc
     * 可使用 EyesMatrix 类 对左，右眼睛矩阵的操作
     */
    var EyesMatrix = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function EyesMatrix() {
            this.eyePosition = new egret3d.Vector3D();
            this.eyeRotation = new egret3d.Vector3D(0, 1, 0);
            this.eyeSpace = 1.0;
            this.eyeFocalLength = 180;
            this.leftPos = new egret3d.Vector3D();
            this.rightPos = new egret3d.Vector3D();
            this.targetPos = new egret3d.Vector3D(0.0, 0.0, this.eyeFocalLength);
            this.lookAtPos = new egret3d.Vector3D();
            this.quaternion = new egret3d.Quaternion();
            this.leftEyeMatrix = new egret3d.Matrix4_4();
            this.rightEyeMatrix = new egret3d.Matrix4_4();
        }
        /**
        * @language zh_CN
        * 数据更新
        * @param matrix 当前相机矩阵
        */
        EyesMatrix.prototype.updte = function (matrix) {
            /// this.leftEyeMatrix = matrix;
            /// this.rightEyeMatrix = matrix;
            //////this.leftEyeMatrix.copyFrom(matrix);
            //////this.rightEyeMatrix.copyFrom(matrix);
            /// return;
            this.targetPos.z = this.eyeFocalLength;
            this.eyePosition = matrix.position;
            this.quaternion.fromMatrix(matrix);
            ///this.quaternion.toEulerAngles(this.eyeRotation);
            ///this.eyeRotation.normalize();
            this.leftEyeMatrix.copyRawDataFrom(matrix.rawData);
            this.rightEyeMatrix.copyRawDataFrom(matrix.rawData);
            this.leftEyeMatrix.appendTranslation(-this.eyeSpace * 0.5, 0.0, 0.0);
            this.rightEyeMatrix.appendTranslation(this.eyeSpace * 0.5, 0.0, 0.0);
            /// this.quaternion.rotatePoint(this.targetPos, this.lookAtPos);
            ///this.leftEyeMatrix.lookAt(this.leftEyeMatrix.position, this.lookAtPos, this.eyeRotation);
            /// this.rightEyeMatrix.lookAt(this.rightEyeMatrix.position, this.lookAtPos, this.eyeRotation);
        };
        return EyesMatrix;
    })();
    egret3d.EyesMatrix = EyesMatrix;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.PlaneClassification
     * @classdesc
     * 定义 PlaneClassification 常量
     */
    var PlaneClassification = (function () {
        function PlaneClassification() {
        }
        PlaneClassification.BACK = 0;
        PlaneClassification.FRONT = 1;
        PlaneClassification.IN = 0;
        PlaneClassification.OUT = 1;
        PlaneClassification.INTERSECT = 2;
        return PlaneClassification;
    })();
    egret3d.PlaneClassification = PlaneClassification;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.Matrix3DUtils
    * @classdesc
    * 可使用 Matrix3DUtils 类 进行3d矩阵的计算
    */
    var Matrix3DUtils = (function () {
        function Matrix3DUtils() {
        }
        /**
        * @language zh_CN
        * 四元数转矩阵
        * @param quarternion 源四元数
        * @param m 目标矩阵
        * @returns 返回转出矩阵
        */
        Matrix3DUtils.quaternion2matrix = function (quarternion, m) {
            if (m === void 0) { m = null; }
            var x = quarternion.x;
            var y = quarternion.y;
            var z = quarternion.z;
            var w = quarternion.w;
            var xx = x * x;
            var xy = x * y;
            var xz = x * z;
            var xw = x * w;
            var yy = y * y;
            var yz = y * z;
            var yw = y * w;
            var zz = z * z;
            var zw = z * w;
            var raw = Matrix3DUtils.RAW_DATA_CONTAINER;
            raw[0] = 1 - 2 * (yy + zz);
            raw[1] = 2 * (xy + zw);
            raw[2] = 2 * (xz - yw);
            raw[4] = 2 * (xy - zw);
            raw[5] = 1 - 2 * (xx + zz);
            raw[6] = 2 * (yz + xw);
            raw[8] = 2 * (xz + yw);
            raw[9] = 2 * (yz - xw);
            raw[10] = 1 - 2 * (xx + yy);
            raw[3] = raw[7] = raw[11] = raw[12] = raw[13] = raw[14] = 0;
            raw[15] = 1;
            if (m) {
                m.copyRawDataFrom(raw);
                return m;
            }
            else
                return new egret3d.Matrix4_4(new Float32Array(raw));
        };
        /**
        * @language zh_CN
        * 得到矩阵朝前的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        Matrix3DUtils.getForward = function (m, v) {
            if (v === void 0) { v = null; }
            if (v === null) {
                v = new egret3d.Vector3D(0.0, 0.0, 0.0);
            }
            m.copyRowTo(2, v);
            v.normalize();
            return v;
        };
        /**
        * @language zh_CN
        * 得到矩阵朝上的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        Matrix3DUtils.getUp = function (m, v) {
            //v ||= new Vector3D(0.0, 0.0, 0.0);
            if (v === void 0) { v = null; }
            if (v === null) {
                v = new egret3d.Vector3D(0.0, 0.0, 0.0);
            }
            m.copyRowTo(1, v);
            v.normalize();
            return v;
        };
        /**
        * @language zh_CN
        * 得到矩阵朝右的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        Matrix3DUtils.getRight = function (m, v) {
            if (v === void 0) { v = null; }
            //v ||= new Vector3D(0.0, 0.0, 0.0);
            if (v === null) {
                v = new egret3d.Vector3D(0.0, 0.0, 0.0);
            }
            m.copyRowTo(0, v);
            v.normalize();
            return v;
        };
        /**
        * @language zh_CN
        * 比较两个矩阵是否相同
        * @param m1 矩阵1
        * @param m2 矩阵2
        * @returns 相同返回true
        */
        Matrix3DUtils.compare = function (m1, m2) {
            var r1 = Matrix3DUtils.RAW_DATA_CONTAINER;
            var r2 = m2.rawData;
            m1.copyRawDataTo(r1);
            for (var i = 0; i < 16; ++i) {
                if (r1[i] != r2[i])
                    return false;
            }
            return true;
        };
        /**
        * @language zh_CN
        * 得到平面的反射矩阵
        * @param plane 反射的面
        * @param target 计算返回的矩阵
        * @returns 返回计算的结果
        */
        Matrix3DUtils.reflection = function (plane, target) {
            if (target === void 0) { target = null; }
            if (target === null)
                target = new egret3d.Matrix4_4();
            var a = plane.a, b = plane.b, c = plane.c, d = plane.d;
            var rawData = Matrix3DUtils.RAW_DATA_CONTAINER;
            var ab2 = -2 * a * b;
            var ac2 = -2 * a * c;
            var bc2 = -2 * b * c;
            // reflection matrix
            rawData[0] = 1 - 2 * a * a;
            rawData[4] = ab2;
            rawData[8] = ac2;
            rawData[12] = -2 * a * d;
            rawData[1] = ab2;
            rawData[5] = 1 - 2 * b * b;
            rawData[9] = bc2;
            rawData[13] = -2 * b * d;
            rawData[2] = ac2;
            rawData[6] = bc2;
            rawData[10] = 1 - 2 * c * c;
            rawData[14] = -2 * c * d;
            rawData[3] = 0;
            rawData[7] = 0;
            rawData[11] = 0;
            rawData[15] = 1;
            target.copyRawDataFrom(rawData);
            return target;
        };
        /**
        * @language zh_CN
        * 得到矩阵的平移
        * @param transform 计算的矩阵
        * @param result 计算返回平移坐标
        * @returns 返回平移坐标
        */
        Matrix3DUtils.getTranslation = function (transform, result) {
            if (result === void 0) { result = null; }
            if (!result)
                result = new egret3d.Vector3D();
            transform.copyRowTo(3, result);
            return result;
        };
        /**
        * @language zh_CN
        * 1弧度为多少角度
        */
        Matrix3DUtils.RADIANS_TO_DEGREES = 180 / Math.PI;
        /**
        * @language zh_CN
        * 1角度为多少弧度
        */
        Matrix3DUtils.DEGREES_TO_RADIANS = Math.PI / 180;
        Matrix3DUtils.RAW_DATA_CONTAINER = new Float32Array(16);
        Matrix3DUtils.CALCULATION_MATRIX = new egret3d.Matrix4_4();
        return Matrix3DUtils;
    })();
    egret3d.Matrix3DUtils = Matrix3DUtils;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Ray
     * @classdesc
     * Ray 类 用于检测射线
     */
    var Ray = (function () {
        /**
        * @language zh_CN
        * constructor
        * @origin 射线原点
        * @direction 射线方向
        */
        function Ray(origin, direction) {
            if (origin === void 0) { origin = new egret3d.Vector3D(); }
            if (direction === void 0) { direction = new egret3d.Vector3D(); }
            this.origin = new egret3d.Vector3D();
            this.dir = new egret3d.Vector3D();
            this.invViewMat = new egret3d.Matrix4_4();
            this.origin.copyFrom(origin);
            this.dir.copyFrom(direction);
        }
        /**
        * @language zh_CN
        * 计算一个三角形和一个射线的交点
        * @param v0 三角形的第一个顶点
        * @param v1 三角形的第二个顶点
        * @param v2 三角形的第三个顶点
        * @param ret t(交点到射线起始点的距离) u(交点在v1-v0上的投影的位置) v(交点在v1-v2上的投影的位置, 交点为ret=v0+pU*(v1-v0)+pV*(v2-v0))
        * @returns 相交返回true
        */
        Ray.prototype.IntersectTriangle = function (v0, v1, v2, ret) {
            if (ret === void 0) { ret = null; }
            var edge1 = v1.subtract(v0);
            var edge2 = v2.subtract(v0);
            var pvec = this.dir.crossProduct(edge2);
            var det = edge1.dotProduct(pvec);
            var tvec;
            if (det > 0) {
                tvec = this.origin.subtract(v0);
            }
            else {
                tvec = v0.subtract(this.origin);
                det = -det;
            }
            if (det < 0.0001) {
                return false;
            }
            // Calculate U parameter and test bounds
            var u = tvec.dotProduct(pvec);
            if (ret != null) {
                ret[1] = u;
            }
            if (u < 0.0 || u > det) {
                return false;
            }
            // Prepare to test V parameter
            var qvec = tvec.crossProduct(edge1);
            // Calculate V parameter and test bounds
            var v = this.dir.dotProduct(qvec);
            if (ret != null) {
                ret[2] = v;
            }
            if (v < 0.0 || u + v > det) {
                return false;
            }
            // Calculate T, scale parameters, ray intersects triangle
            var t = edge2.dotProduct(qvec);
            var invDet = 1.0 / det;
            t *= invDet;
            u *= invDet;
            v *= invDet;
            if (ret != null) {
                ret[0] = t;
                ret[1] = u;
                ret[2] = v;
            }
            if (t < 0) {
                return false;
            }
            return true;
        };
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param mesh 检测的模型
        * @param inPos 相交点
        * @returns 相交返回true
        */
        Ray.prototype.IntersectMeshEx = function (mesh, inPos) {
            return this.IntersectMesh(mesh.geometry.verticesData, mesh.geometry.indexData, mesh.geometry.vertexAttLength, mesh.geometry.indexData.length / 3, inPos, mesh.modelMatrix);
        };
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param verticesData 检测的模型的顶点数据
        * @param indexData 检测的模型的索引数据
        * @param offset 每个顶点的大小
        * @param faces 模型面数
        * @param inPos 返回相交点
        * @param mMat 顶点的世界变换矩阵
        * @returns 相交返回true
        */
        Ray.prototype.IntersectMesh = function (verticesData, indexData, offset, faces, inPos, mMat) {
            var triangle = new Array();
            var v0 = new egret3d.Vector3D();
            var v1 = new egret3d.Vector3D();
            var v2 = new egret3d.Vector3D();
            triangle.push(v0);
            triangle.push(v1);
            triangle.push(v2);
            var face = -1;
            var t = Number.MAX_VALUE;
            var u = 0;
            var v = 0;
            for (var i = 0; i < faces; ++i) {
                for (var j = 0; j < 3; ++j) {
                    var index = indexData[3 * i + j];
                    var pos = new egret3d.Vector3D(verticesData[offset * index + 0], verticesData[offset * index + 1], verticesData[offset * index + 2]);
                    pos = mMat.transformVector(pos);
                    triangle[j].x = pos.x;
                    triangle[j].y = pos.y;
                    triangle[j].z = pos.z;
                }
                var ret = new Array();
                ret.push(0.0);
                ret.push(0.0);
                ret.push(0.0);
                if (this.IntersectTriangle(v0, v1, v2, ret)) {
                    if (ret[0] < t) {
                        face = i;
                        t = ret[0];
                        u = ret[1];
                        v = ret[2];
                    }
                }
            }
            if (face < faces && face >= 0) {
                for (var i = 0; i < 3; ++i) {
                    var index = indexData[3 * face + i];
                    var pos = new egret3d.Vector3D(verticesData[offset * index + 0], verticesData[offset * index + 1], verticesData[offset * index + 2]);
                    pos = mMat.transformVector(pos);
                    triangle[i].x = pos.x;
                    triangle[i].y = pos.y;
                    triangle[i].z = pos.z;
                }
                var tmp0 = v1.subtract(v0);
                tmp0.scaleBy(u);
                var tmp1 = v2.subtract(v0);
                tmp1.scaleBy(v);
                inPos.copyFrom(v0.add(tmp0.add(tmp1)));
                return true;
            }
            return false;
        };
        /**
        * @language zh_CN
        * 计算摄像机的射线
        * @param width 视口宽
        * @param height 视口高
        * @param viewMat 相机视图矩阵
        * @param projMat 相机投影矩阵
        * @param x 鼠标x
        * @param y 鼠标y
        */
        Ray.prototype.CalculateAndTransformRay = function (width, height, viewMat, projMat, x, y) {
            this.reset();
            this.dir.x = (2.0 * x / width - 1.0) / projMat.rawData[0];
            this.dir.y = (-2.0 * y / height + 1.0) / projMat.rawData[5];
            this.dir.z = 1.0;
            this.invViewMat.copyFrom(viewMat);
            this.origin.copyFrom(this.invViewMat.transformVector(this.origin));
            this.dir.copyFrom(this.invViewMat.deltaTransformVector(this.dir));
            this.dir.normalize();
        };
        /**
        * @language zh_CN
        * 射线重置
        */
        Ray.prototype.reset = function () {
            this.origin.setTo(0, 0, 0);
            this.dir.setTo(0, 0, 0);
        };
        return Ray;
    })();
    egret3d.Ray = Ray;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Color
     * @classdesc
     * 可使用 Color 类调整显示对象的颜色值
     */
    var Color = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param r red
        * @param g green
        * @param b blue
        * @param a alpha
        */
        function Color(r, g, b, a) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            if (a === void 0) { a = 255; }
            /**
            * @language zh_CN
            * alpha
            */
            this.a = 255;
            /**
            * @language zh_CN
            * red
            */
            this.r = 255;
            /**
            * @language zh_CN
            * green
            */
            this.g = 255;
            /**
            * @language zh_CN
            * blue
            */
            this.b = 255;
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        }
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        Color.white = function () {
            return new Color(255, 255, 255, 255);
        };
        /**
        * @language zh_CN
        * 返回黑色
        * @retrun 黑色
        */
        Color.black = function () {
            return new Color(0, 0, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        Color.red = function () {
            return new Color(255, 0, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回绿色
        * @retrun 绿色
        */
        Color.green = function () {
            return new Color(0, 255, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回蓝色
        * @retrun 蓝色
        */
        Color.blue = function () {
            return new Color(0, 0, 255, 255);
        };
        /**
        * @language zh_CN
        * 以number值返加颜色
        * @param colorFormat 格式
        * @returns 颜色
        */
        Color.prototype.getColor = function (colorFormat) {
            if (colorFormat === void 0) { colorFormat = egret3d.Egret3DDrive.ColorFormat_RGBA8888; }
            if (colorFormat == egret3d.Egret3DDrive.ColorFormat_RGB565)
                return 0;
            if (colorFormat == egret3d.Egret3DDrive.ColorFormat_RGBA5551)
                return 0;
            if (colorFormat == egret3d.Egret3DDrive.ColorFormat_RGBA4444)
                return 0;
            return this.r << 24 | this.g << 16 | this.b << 8 | this.a;
        };
        /**
        * @language zh_CN
        * 颜色取差值
        * @param c0
        * @param c1
        * @param t (0.0-1.0)
        */
        Color.prototype.lerp = function (c0, c1, t) {
            ///t(c1 - c0) + c0
            this.a = t * (c1.a - c0.a) + c0.a;
            this.r = t * (c1.r - c0.r) + c0.r;
            this.g = t * (c1.g - c0.g) + c0.g;
            this.b = t * (c1.b - c0.b) + c0.b;
        };
        return Color;
    })();
    egret3d.Color = Color;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.PickResult
    * @classdesc
    * 鼠标拾取返回数据
    */
    var PickResult = (function () {
        function PickResult() {
            this.localPosition = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 鼠标拾取模型上的交点 (世界坐标)
            */
            this.globalPosition = new egret3d.Vector3D();
            this.object3DPosition = new egret3d.Vector3D();
            this.uv = new egret3d.Vector3D();
            this.near = 0;
        }
        return PickResult;
    })();
    egret3d.PickResult = PickResult;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.EventDispatcher
    * @classdesc
    * 事件触发器
    */
    var EventDispatcher = (function () {
        function EventDispatcher() {
            this.listeners = {};
        }
        /**
         * @language zh_CN
         * 派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。
         * @param event {any} 事件类型
         */
        EventDispatcher.prototype.dispatchEvent = function (event) {
            var e;
            var type;
            if (event instanceof Event3D) {
                type = event.type;
                e = event;
            }
            else {
                type = event;
                e = new Event3D(type);
            }
            if (this.listeners[type] != null) {
                e.currentTarget = this;
                for (var i = 0; i < this.listeners[type].length; i++) {
                    var listener = this.listeners[type][i];
                    try {
                        listener.handler(e);
                    }
                    catch (error) {
                        if (window.console) {
                            console.error(error.stack);
                        }
                    }
                }
            }
        };
        /**
        * @language zh_CN
        * 添加事件侦听器
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        */
        EventDispatcher.prototype.addEventListener = function (type, callback, priolity) {
            if (priolity === void 0) { priolity = 0; }
            if (this.listeners[type] == null) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(new EventListener(type, callback, priolity));
            this.listeners[type].sort(function (listener1, listener2) {
                return listener2.priolity - listener1.priolity;
            });
        };
        /**
         * @language zh_CN
         * 移除事件侦听器
         * @param type {string} 事件名
         * @param callback {Function} 侦听函数
         */
        EventDispatcher.prototype.removeEventListener = function (type, callback) {
            if (this.hasEventListener(type, callback)) {
                for (var i = 0; i < this.listeners[type].length; i++) {
                    var listener = this.listeners[type][i];
                    if (listener.equalCurrentListener(type, callback)) {
                        listener.handler = null;
                        this.listeners[type].splice(i, 1);
                        return;
                    }
                }
            }
        };
        /**
         * @language zh_CN
         * 移除所有事件侦听器
         */
        EventDispatcher.prototype.clearEventListener = function () {
            this.listeners = {};
        };
        /**
        * @language zh_CN
        * 检测是否存在监听器
        * @param type {string}
        * @returns {boolean}
        */
        EventDispatcher.prototype.containEventListener = function (type) {
            if (this.listeners[type] == null)
                return false;
            return this.listeners[type].length > 0;
        };
        /**
        * @language zh_CN
        * 检测是否存在监听器
        * @param type {string} 事件名
        * @param callback {Function} 处理事件的侦听器函数
        * @returns {boolean}
        */
        EventDispatcher.prototype.hasEventListener = function (type, callback) {
            if (this.listeners[type] == null)
                return false;
            for (var i = 0; i < this.listeners[type].length; i++) {
                var listener = this.listeners[type][i];
                if (listener.equalCurrentListener(type, callback)) {
                    return true;
                }
            }
            return false;
        };
        return EventDispatcher;
    })();
    egret3d.EventDispatcher = EventDispatcher;
    /**
    * @language zh_CN
    * @class egret3d.EventListener
    * @classdesc
    * EventListener 类
    */
    var EventListener = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param type {string} 事件的类型。
        * @param handler {Function} 处理事件的侦听器函数
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        */
        function EventListener(type, handler, priolity) {
            if (type === void 0) { type = null; }
            if (handler === void 0) { handler = null; }
            if (priolity === void 0) { priolity = 0; }
            this.type = type;
            this.handler = handler;
            this.priolity = priolity;
        }
        /**
        * @language zh_CN
        * 比较两个事件是否相等
        * @param type {string} 事件的类型。
        * @param handler {Function} 处理事件的侦听器函数
        */
        EventListener.prototype.equalCurrentListener = function (type, handler) {
            if (this.type == type && this.handler == handler) {
                return true;
            }
            return false;
        };
        return EventListener;
    })();
    var Event3D = (function () {
        /**
        * @language zh_CN
        * Event3D
        * @param typeName {string} 事件类型
        * @param data {any}附加数据(可选)
        */
        function Event3D(type, data) {
            if (type === void 0) { type = null; }
            if (data === void 0) { data = null; }
            this._type = type;
            this._data = data;
        }
        Object.defineProperty(Event3D.prototype, "currentTarget", {
            /**
            * @language zh_CN
            * 事件当前对象
            * @returns {any}
            */
            get: function () {
                return this._currentTarget;
            },
            /**
            * @language zh_CN
            * 事件当前对象
            * @param value {any}
            */
            set: function (value) {
                this._currentTarget = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event3D.prototype, "type", {
            /**
            * @language zh_CN
            * 事件类型
            * @returns {string}
            */
            get: function () {
                return this._type;
            },
            /**
            * @language zh_CN
            * 事件类型
            * @param value {string}
            */
            set: function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event3D.prototype, "data", {
            /**
            * @language zh_CN
            * 附加数据
            * @returns {any}
            */
            get: function () {
                return this._data;
            },
            /**
            * @language zh_CN
            * 附加数据
            * @param value {any}
            */
            set: function (value) {
                this._data = value;
            },
            enumerable: true,
            configurable: true
        });
        Event3D.EVENT_LOAD_COMPLETE = "load_complete";
        Event3D.MOUSE_CLICK = "onClick";
        Event3D.MOUSE_DOWN = "onMouseDown";
        Event3D.MOUSE_UP = "onMouseUp";
        Event3D.MOUSE_OVER = "onMouseOver";
        Event3D.MOUSE_OUT = "onMouseOut";
        Event3D.MOUSE_MOVE = "onMouseMove";
        Event3D.COMPLETE = "complete";
        Event3D.CHANGE_PROPERTY = "changeProperty";
        return Event3D;
    })();
    egret3d.Event3D = Event3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.Mouse3DManager
    * @classdesc
    * 鼠标事件管理
    */
    var Mouse3DManager = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param camera {Camera3D}
        * @param collect {CollectBase}
        */
        function Mouse3DManager(camera, collect) {
            var _this = this;
            this._camera = camera;
            this._collect = collect;
            egret3d.Input.instance.addListenerKeyClick(function (e) { return _this.onMouseClick(e); });
            egret3d.Input.instance.addListenerKeyDown(function (e) { return _this.onMouseDown(e); });
            egret3d.Input.instance.addListenerKeyUp(function (e) { return _this.onMouseUp(e); });
            egret3d.Input.instance.addListenerMouseMove(function (e) { return _this.onMouseMove(e); });
        }
        Mouse3DManager.prototype.onMouseClick = function (e) {
            var ret = egret3d.Picker.pickObject3DList(this._camera, this._collect.renderList);
            var event;
            for (var i = 0; i < ret.length; i++) {
                if (ret[i].mouseEnable) {
                    event = new egret3d.Event3D(egret3d.Event3D.MOUSE_CLICK);
                    event.currentTarget = ret[i];
                    ret[i].dispatchEvent(event);
                }
            }
        };
        Mouse3DManager.prototype.onMouseDown = function (e) {
            var ret = egret3d.Picker.pickObject3DList(this._camera, this._collect.renderList);
            var event;
            for (var i = 0; i < ret.length; i++) {
                if (ret[i].mouseEnable) {
                    event = new egret3d.Event3D(egret3d.Event3D.MOUSE_DOWN);
                    event.currentTarget = ret[i];
                    ret[i].dispatchEvent(event);
                }
            }
        };
        Mouse3DManager.prototype.onMouseUp = function (e) {
            var ret = egret3d.Picker.pickObject3DList(this._camera, this._collect.renderList);
            var event;
            for (var i = 0; i < ret.length; i++) {
                if (ret[i].mouseEnable) {
                    event = new egret3d.Event3D(egret3d.Event3D.MOUSE_UP);
                    event.currentTarget = ret[i];
                    ret[i].dispatchEvent(event);
                }
            }
        };
        Mouse3DManager.prototype.onMouseOver = function (e) {
            var ret = egret3d.Picker.pickObject3DList(this._camera, this._collect.renderList);
            var event;
            for (var i = 0; i < ret.length; i++) {
                if (ret[i].mouseEnable) {
                    event = new egret3d.Event3D(egret3d.Event3D.MOUSE_OVER);
                    event.currentTarget = ret[i];
                    ret[i].dispatchEvent(event);
                }
            }
        };
        Mouse3DManager.prototype.onMouseOut = function (e) {
            var ret = egret3d.Picker.pickObject3DList(this._camera, this._collect.renderList);
            var event;
            for (var i = 0; i < ret.length; i++) {
                if (ret[i].mouseEnable) {
                    event = new egret3d.Event3D(egret3d.Event3D.MOUSE_OUT);
                    event.currentTarget = ret[i];
                    ret[i].dispatchEvent(event);
                }
            }
        };
        Mouse3DManager.prototype.onMouseMove = function (e) {
            var ret = egret3d.Picker.pickObject3DList(this._camera, this._collect.renderList);
            var event;
            for (var i = 0; i < ret.length; i++) {
                if (ret[i].mouseEnable) {
                    event = new egret3d.Event3D(egret3d.Event3D.MOUSE_MOVE);
                    event.currentTarget = ret[i];
                    ret[i].dispatchEvent(event);
                }
            }
        };
        Mouse3DManager.left_mouse_over = "left_mouse_over";
        Mouse3DManager.left_mouse_down = "left_mouse_down";
        Mouse3DManager.left_mouse_up = "left_mouse_up";
        Mouse3DManager.left_mouse_click = "left_mouse_click";
        Mouse3DManager.right_mouse_over = "right_mouse_over";
        Mouse3DManager.right_mouse_down = "right_mouse_down";
        Mouse3DManager.right_mouse_up = "right_mouse_up";
        Mouse3DManager.right_mouse_click = "right_mouse_click";
        Mouse3DManager.middle_mouse_over = "middle_mouse_over";
        Mouse3DManager.middle_mouse_down = "middle_mouse_down";
        Mouse3DManager.middle_mouse_up = "middle_mouse_up";
        Mouse3DManager.middle_mouse_click = "middle_mouse_click";
        Mouse3DManager.mouse_move = "mouse_move";
        return Mouse3DManager;
    })();
    egret3d.Mouse3DManager = Mouse3DManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.TextureBase
    * @classdesc
    * 贴图基类
    */
    var TextureBase = (function () {
        /**
         * @language zh_CN
         */
        function TextureBase() {
            this.border = 0;
            this.useMipmap = true;
            this.imageData = null;
            this.colorFormat = egret3d.Egret3DDrive.ColorFormat_RGBA8888;
            this.internalFormat = egret3d.InternalFormat.PixelArray;
            this.mimapData = new Array();
        }
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        TextureBase.prototype.upload = function (context3D) {
            if (!this.texture) {
                this.texture = context3D.creatTexture2D();
                this.texture.gpu_internalformat = this.internalFormat;
                this.texture.gpu_colorformat = this.colorFormat;
                this.texture.mipmapDatas = this.mimapData;
                this.texture.image = this.imageData;
                this.texture.gpu_border = 0;
                if (this.useMipmap) {
                    for (var i = 0; i < this.mimapData.length; i++) {
                        context3D.upLoadTextureData(i, this.texture);
                    }
                }
                else {
                    context3D.upLoadTextureData(0, this.texture);
                }
            }
        };
        Object.defineProperty(TextureBase.prototype, "width", {
            /**
             * @language zh_CN
             * @readOnly
             * @returns width
             */
            get: function () {
                if (this.imageData)
                    return this.imageData.width;
                else if (this.mimapData.length > 0)
                    return this.mimapData[0].width;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextureBase.prototype, "height", {
            /**
             * @language zh_CN
             * @readOnly
             * @returns height
             */
            get: function () {
                if (this.imageData)
                    return this.imageData.height;
                else if (this.mimapData.length > 0)
                    return this.mimapData[0].height;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        return TextureBase;
    })();
    egret3d.TextureBase = TextureBase;
})(egret3d || (egret3d = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.RenderTexture
    * @classdesc
    * 渲染材质
    */
    var RenderTexture = (function (_super) {
        __extends(RenderTexture, _super);
        /**
         * @language zh_CN
         * @param texture
         */
        function RenderTexture(texture) {
            _super.call(this);
            this.useMipmap = false;
            this.texture = texture;
        }
        return RenderTexture;
    })(egret3d.TextureBase);
    egret3d.RenderTexture = RenderTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.SkyTexture
    * @classdesc
    * 天空贴图
    */
    var SkyTexture = (function (_super) {
        __extends(SkyTexture, _super);
        /**
         * @language zh_CN
         */
        function SkyTexture(image_front, image_back, image_left, image_right, image_up, image_down) {
            _super.call(this);
            imageData: HTMLImageElement;
            this.image_front = image_front;
            this.image_back = image_back;
            this.image_left = image_left;
            this.image_right = image_right;
            this.image_up = image_up;
            this.image_down = image_down;
        }
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        SkyTexture.prototype.upload = function (context3D) {
            if (!this.cubeTexture) {
                this.cubeTexture = context3D.creatCubeTexture();
                //this.texture.gpu_internalformat = InternalFormat.ImageData;
                //this.texture.gpu_colorformat = egret3d.ColorFormat_RGBA8888;
                this.cubeTexture.image_front = this.image_front;
                this.cubeTexture.image_back = this.image_back;
                this.cubeTexture.image_left = this.image_left;
                this.cubeTexture.image_right = this.image_right;
                this.cubeTexture.image_up = this.image_up;
                this.cubeTexture.image_down = this.image_down;
                context3D.uploadCubetexture(this.cubeTexture);
            }
        };
        return SkyTexture;
    })(egret3d.TextureBase);
    egret3d.SkyTexture = SkyTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ImageTexture
    * @classdesc
    * 图像贴图
    */
    var ImageTexture = (function (_super) {
        __extends(ImageTexture, _super);
        /**
         * @language zh_CN
         * @param img
         */
        function ImageTexture(img) {
            _super.call(this);
            this.imageData = img;
        }
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        ImageTexture.prototype.upload = function (context3D) {
            if (!this.texture) {
                this.texture = context3D.creatTexture2D();
                this.texture.gpu_internalformat = egret3d.InternalFormat.ImageData;
                this.texture.gpu_colorformat = egret3d.Egret3DDrive.ColorFormat_RGBA8888;
                this.texture.image = this.imageData;
                this.useMipmap = false;
                //   if (this.imageData.width > 0 && (this.imageData.width & (this.imageData.width - 1)) != 0 )
                context3D.upLoadTextureData(0, this.texture);
            }
            //if (!this.texture) {
            //    this.cubeTexture = context3D.creatCubeTexture();
            //    this.cubeTexture.image = this.imageData;
            //   // this.texture.gpu_internalformat = InternalFormat.ImageData;
            //    //this.texture.gpu_colorformat = egret3d.ColorFormat_RGBA8888;
            //    context3D.uploadCubetexture(this.cubeTexture);
            //    //context3D.setTexture2DSamplerState(egret3d.NEAREST, egret3d.NEAREST, egret3d.CLAMP_TO_EDGE, egret3d.CLAMP_TO_EDGE);
            //}
        };
        return ImageTexture;
    })(egret3d.TextureBase);
    egret3d.ImageTexture = ImageTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
    * @class egret3d.CheckerboardTexture
    * @classdesc
    * 棋盘格纹理
    */
    var CheckerboardTexture = (function (_super) {
        __extends(CheckerboardTexture, _super);
        /**
         * @language zh_CN
         */
        function CheckerboardTexture() {
            _super.call(this);
            this._width = 32;
            this._height = 32;
            this.buildCheckerboard();
            this.mimapData = new Array();
            this.mimapData.push(new egret3d.MipmapData(this._pixelArray, this._width, this._height));
        }
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        CheckerboardTexture.prototype.upload = function (context3D) {
            if (!this.texture) {
                this.texture = context3D.creatTexture2D();
                this.texture.gpu_border = 0;
                this.texture.gpu_internalformat = egret3d.InternalFormat.PixelArray;
                this.texture.gpu_colorformat = egret3d.Egret3DDrive.ColorFormat_RGBA8888;
                this.texture.mipmapDatas = this.mimapData;
                this.useMipmap = false;
                context3D.upLoadTextureData(0, this.texture);
            }
        };
        CheckerboardTexture.prototype.buildCheckerboard = function () {
            if (!this._pixelArray) {
                this._pixelArray = new Uint8Array(this._width * this._height * 4);
                var colors = [egret3d.Color.white(), egret3d.Color.black()];
                var colorIndex = 0;
                var blockSize = 4;
                for (var y = 0; y < this._height; y++) {
                    for (var x = 0; x < this._width; x++) {
                        if ((x % blockSize) == 0) {
                            colorIndex = (colorIndex + 1) % 2;
                        }
                        if ((y % blockSize) == 0 && x == 0) {
                            var tmp = colors[0];
                            colors[0] = colors[1];
                            colors[1] = tmp;
                            colorIndex = 0;
                        }
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 0] = colors[colorIndex].r;
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 1] = colors[colorIndex].g;
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 2] = colors[colorIndex].b;
                        this._pixelArray[(y * (this._width * 4) + x * 4) + 3] = colors[colorIndex].a;
                    }
                }
            }
        };
        /**
         * @language zh_CN
         */
        CheckerboardTexture.texture = new CheckerboardTexture();
        return CheckerboardTexture;
    })(egret3d.TextureBase);
    egret3d.CheckerboardTexture = CheckerboardTexture;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.AnimNodeBase
     * @classdesc
     * 动画节点基类
     */
    var AnimNodeBase = (function () {
        function AnimNodeBase() {
        }
        /**
        * @language zh_CN
        * 填充GeomtryData
        * @param geometry: Geometry对象
        */
        AnimNodeBase.prototype.fillGeomtryData = function (geometry) {
        };
        return AnimNodeBase;
    })();
    egret3d.AnimNodeBase = AnimNodeBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.AnimaNodeCollection
     * @classdesc
     * 动画节点容器
     */
    var AnimaNodeCollection = (function () {
        /**
        * @language zh_CN
        * 构造函数
        */
        function AnimaNodeCollection() {
            /**
            * @language zh_CN
            * 动画节点容器
            */
            this.nodes = new Array();
            this._vertexAttributes = {};
            this.nodes = new Array();
        }
        /**
        * @language zh_CN
        * 添加节点
        * @param node 节点对象
        */
        AnimaNodeCollection.prototype.addNode = function (node) {
            this.nodes.push(node);
        };
        /**
        * @language zh_CN
        * 移除节点
        * @param node 节点对象
        */
        AnimaNodeCollection.prototype.removeNode = function (node) {
            var index = this.nodes.indexOf(node);
            if (index != -1)
                this.nodes.splice(index, 1);
        };
        /**
        * @language zh_CN
        * 获取节点容器
        * @return 节点容器
        */
        AnimaNodeCollection.prototype.getNodes = function () {
            return this.nodes;
        };
        /**
        * @language zh_CN
        * 获取节点顶点Shader
        * @return 顶点Shader容器
        */
        AnimaNodeCollection.prototype.getNodesVertexShaders = function () {
            var shaderNames = [];
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].vertexShader != "" && this.nodes[i].vertexShader != undefined && this.nodes[i].vertexShader != null)
                    shaderNames.push(this.nodes[i].vertexShader);
            }
            return shaderNames;
        };
        /**
        * @language zh_CN
        * 获取节点片元Shader
        * @return 片元Shader容器
        */
        AnimaNodeCollection.prototype.getNodesFragmentShaders = function () {
            var shaderNames = [];
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].fragmentShader != "" && this.nodes[i].fragmentShader != undefined && this.nodes[i].fragmentShader != null)
                    shaderNames.push(this.nodes[i].fragmentShader);
            }
            return shaderNames;
        };
        /**
        * @language zh_CN
        * 计算节点
        */
        AnimaNodeCollection.prototype.calculateNode = function () {
            ///init data to updata gpu
            ///this.vertexInfos = this.vertexInfos || new Array<VertexInfo>();
            ///this.vertexInfos.length = 0; 
            var offset = 4 + 3 + 2;
            for (var i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].usageAttributeLen > 0) {
                    this.nodes[i].offset = offset;
                    this.nodes[i].offsetBytes = offset * Float32Array.BYTES_PER_ELEMENT;
                    offset += this.nodes[i].usageAttributeLen;
                }
            }
            this.numberOfVertices = offset;
            this.vertexSizeInBytes = offset * Float32Array.BYTES_PER_ELEMENT;
        };
        return AnimaNodeCollection;
    })();
    egret3d.AnimaNodeCollection = AnimaNodeCollection;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Joint
     * @classdesc
     * 骨骼
     */
    var Joint = (function () {
        function Joint(name) {
            /**
            * @language zh_CN
            * 骨骼矩阵是否有效
            */
            this.jointMatrixValid = false;
            /**
            * @language zh_CN
            * 骨骼世界矩阵是否有效
            */
            this.worldMatrixValid = false;
            /**
            * @language zh_CN
            * 骨骼矩阵
            */
            this.jointMatrix = new egret3d.Matrix4_4();
            /**
            * @language zh_CN
            * 骨骼世界矩阵
            */
            this.worldMatrix = new egret3d.Matrix4_4();
            /**
            * @language zh_CN
            * 骨骼名称
            */
            this.name = null;
            /**
            * @language zh_CN
            * 父骨骼名称
            */
            this.parent = null;
            /**
            * @language zh_CN
            * 父骨骼索引编号
            */
            this.parentIndex = -1;
            /**
            * @language zh_CN
            * 骨骼逆矩阵
            */
            this.inverseBindPose = null;
            /**
            * @language zh_CN
            * 骨骼缩放量
            */
            this.scale = null;
            /**
            * @language zh_CN
            * 骨骼旋转量
            */
            this.orientation = null;
            /**
            * @language zh_CN
            * 骨骼平移量
            */
            this.translation = null;
            /**
            * @language zh_CN
            * 骨骼本地矩阵
            */
            this.localMatrix = null;
            this.name = name;
        }
        /**
        * @language zh_CN
        * 克隆新骨骼对象
        * @return 新骨骼对象
        */
        Joint.prototype.clone = function () {
            var cloneObj = new Joint(this.name);
            cloneObj.parent = this.parent;
            cloneObj.parentIndex = this.parentIndex;
            if (this.inverseBindPose) {
                cloneObj.inverseBindPose = new egret3d.Matrix4_4;
                cloneObj.inverseBindPose.copyFrom(this.inverseBindPose);
            }
            if (this.scale) {
                cloneObj.scale = new egret3d.Vector3D();
                cloneObj.scale.copyFrom(this.scale);
            }
            if (this.orientation) {
                cloneObj.orientation = new egret3d.Quaternion();
                cloneObj.orientation.copyFrom(this.orientation);
            }
            if (this.translation) {
                cloneObj.translation = new egret3d.Vector3D();
                cloneObj.translation.copyFrom(this.translation);
            }
            if (this.scale && this.orientation && this.translation) {
                cloneObj.setLocalTransform(cloneObj.orientation, cloneObj.scale, cloneObj.translation);
            }
            return cloneObj;
        };
        /**
        * @language zh_CN
        * 设置骨骼逆矩阵
        * @param translation 平移量
        * @param rotation 旋转量
        * @param scaling 缩放量
        */
        Joint.prototype.setInverseBindPose = function (translation, rotation, scaling) {
            if (!this.inverseBindPose) {
                this.inverseBindPose = new egret3d.Matrix4_4();
            }
            this.inverseBindPose.recompose([translation, rotation, scaling]);
        };
        /**
        * @language zh_CN
        * 设置骨骼本地置换
        * @param orientation 旋转量
        * @param scale 缩放量
        * @param translation 平移量
        */
        Joint.prototype.setLocalTransform = function (orientation, scale, translation) {
            this.translation = translation;
            this.orientation = orientation;
            this.scale = scale;
            if (!this.localMatrix) {
                this.localMatrix = new egret3d.Matrix4_4();
            }
            this.localMatrix.makeTransform(this.translation, this.scale, this.orientation);
        };
        return Joint;
    })();
    egret3d.Joint = Joint;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Skeleton
     * @classdesc
     * 骨架
     */
    var Skeleton = (function () {
        function Skeleton(initialSkeleton) {
            if (initialSkeleton === void 0) { initialSkeleton = null; }
            /**
            * @language zh_CN
            * 当前骨架帧时间
            */
            this.frameTime = 0;
            /**
            * @language zh_CN
            * 骨架包含的骨骼
            */
            this.joints = [];
            /**
            * @language zh_CN
            * 骨架矩阵是否有效
            */
            this.skeletonMatrixValid = false;
            this._skeletonMatrix = null;
            this._initialSkeleton = null;
            this._temp_q0 = new egret3d.Quaternion();
            this._temp_q1 = new egret3d.Quaternion();
            this._temp_q2 = new egret3d.Quaternion();
            this._temp_v0 = new egret3d.Vector3D();
            this._temp_v1 = new egret3d.Vector3D();
            this._temp_v2 = new egret3d.Vector3D();
            if (initialSkeleton) {
                this.initialSkeleton = initialSkeleton;
            }
        }
        /**
        * @language zh_CN
        * 克隆新骨架对象
        * @return 新骨架对象
        */
        Skeleton.prototype.clone = function () {
            var cloneObj = new Skeleton(this.initialSkeleton);
            cloneObj.frameTime = this.frameTime;
            for (var i = 0; i < this.joints.length; i++) {
                cloneObj.joints.push(this.joints[i].clone());
            }
            return cloneObj;
        };
        /**
        * @language zh_CN
        * 重置骨架数据
        */
        Skeleton.prototype.reset = function () {
            for (var i = 0; i < this.joints.length; i++) {
                this.joints[i].jointMatrix.identity();
                this.joints[i].jointMatrixValid = false;
                this.joints[i].worldMatrix.identity();
                this.joints[i].worldMatrixValid = false;
                this.joints[i].orientation.x =
                    this.joints[i].orientation.y =
                        this.joints[i].orientation.z =
                            this.joints[i].orientation.w = 0;
                this.joints[i].scale.x =
                    this.joints[i].scale.y =
                        this.joints[i].scale.z =
                            this.joints[i].scale.w = 0;
                this.joints[i].translation.x =
                    this.joints[i].translation.y =
                        this.joints[i].translation.z =
                            this.joints[i].translation.w = 0;
            }
        };
        Object.defineProperty(Skeleton.prototype, "initialSkeleton", {
            /**
            * @language zh_CN
            * 初始骨架
            */
            get: function () {
                return this._initialSkeleton;
            },
            /**
            * @language zh_CN
            * 设置初始骨架
            * @param value 初始骨架
            */
            set: function (value) {
                this._initialSkeleton = value;
                if (!this._skeletonMatrix) {
                    this._skeletonMatrix = new Float32Array(this._initialSkeleton.numJoint * 8);
                    this.skeletonMatrixValid = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skeleton.prototype, "skeletonMatrix", {
            /**
            * @language zh_CN
            * 骨架矩阵阵列
            */
            get: function () {
                return this._skeletonMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skeleton.prototype, "numJoint", {
            /**
            * @language zh_CN
            * 骨骼数量
            */
            get: function () {
                return this.joints.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 通过名称查找指定骨骼
        * @param name 骨骼名称
        * @return 骨骼对象
        */
        Skeleton.prototype.findJoint = function (name) {
            for (var i = 0; i < this.joints.length; i++) {
                if (this.joints[i].name == name)
                    return this.joints[i];
            }
            return null;
        };
        /**
        * @language zh_CN
        * 通过名称查找骨骼索引编号
        * @param name 骨骼名称
        * @return 骨骼索引编号
        */
        Skeleton.prototype.findJointIndex = function (name) {
            for (var i = 0; i < this.joints.length; i++) {
                if (this.joints[i].name == name)
                    return i;
            }
            return -1;
        };
        /**
        * @language zh_CN
        * 骨架插值
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param tNow 新骨架帧时间（骨架0.frameTime ~ 骨架1.frameTime）
        */
        Skeleton.prototype.skeletonLerp = function (skeleton0, skeleton1, tNow) {
            this.frameTime = tNow;
            var t = (tNow - skeleton0.frameTime) / Math.abs(skeleton1.frameTime - skeleton0.frameTime);
            this.lerp(skeleton0, skeleton1, t);
        };
        /**
        * @language zh_CN
        * 骨架插值计算
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param t 时间因子(0.0~1.0);
        */
        Skeleton.prototype.lerp = function (skeleton0, skeleton1, t) {
            for (var index = 0; index < skeleton0.joints.length; index++) {
                if (index >= this.joints.length) {
                    this.joints.push(new egret3d.Joint(null));
                }
                var newJointPose = this.joints[index];
                newJointPose.name = skeleton0.joints[index].name;
                newJointPose.worldMatrixValid = true;
                this._temp_q0.fromMatrix(skeleton0.joints[index].worldMatrix);
                this._temp_q1.fromMatrix(skeleton1.joints[index].worldMatrix);
                this._temp_q2.lerp(this._temp_q0, this._temp_q1, t);
                skeleton0.joints[index].worldMatrix.copyRowTo(3, this._temp_v0);
                skeleton1.joints[index].worldMatrix.copyRowTo(3, this._temp_v1);
                this._temp_v2.lerp(this._temp_v0, this._temp_v1, t);
                this._temp_q2.toMatrix3D(newJointPose.worldMatrix);
                newJointPose.worldMatrix.rawData[12] = this._temp_v2.x;
                newJointPose.worldMatrix.rawData[13] = this._temp_v2.y;
                newJointPose.worldMatrix.rawData[14] = this._temp_v2.z;
                newJointPose.jointMatrixValid = false;
                this.skeletonMatrixValid = false;
            }
        };
        /**
        * @language zh_CN
        * 骨架转矩阵阵列数组
        * @param target 用于储存的矩阵阵列数组
        * @return 矩阵阵列数组
        */
        Skeleton.prototype.toMatrixData = function (target) {
            if (target === void 0) { target = null; }
            var joints = this._initialSkeleton.joints;
            if (!target) {
                target = new Float32Array(this.joints.length * 8);
            }
            for (var i = 0; i < joints.length; i++) {
                for (var j = 0; j < this.joints.length; j++) {
                    if (this.joints[j].name != joints[i].name)
                        continue;
                    this._temp_q0.fromMatrix(this.joints[j].jointMatrix);
                    target[i * 8 + 0] = this._temp_q0.x;
                    target[i * 8 + 1] = this._temp_q0.y;
                    target[i * 8 + 2] = this._temp_q0.z;
                    target[i * 8 + 3] = this._temp_q0.w;
                    target[i * 8 + 4] = this.joints[j].jointMatrix.rawData[12];
                    target[i * 8 + 5] = this.joints[j].jointMatrix.rawData[13];
                    target[i * 8 + 6] = this.joints[j].jointMatrix.rawData[14];
                    target[i * 8 + 7] = 1;
                    break;
                }
            }
            return target;
        };
        /**
        * @language zh_CN
        * 更新骨架矩阵
        */
        Skeleton.prototype.updateSkeletonMatrix = function () {
            if (this.skeletonMatrixValid) {
                return;
            }
            this.toMatrixData(this._skeletonMatrix);
            this.skeletonMatrixValid = true;
        };
        /**
        * @language zh_CN
        * 计算骨骼世界矩阵
        * @param initialSkeleton 初始骨架对象
        */
        Skeleton.prototype.calculateJointWorldMatrix = function (initialSkeleton) {
            for (var i = 0; i < this.joints.length; i++) {
                var jointPose = this.joints[i];
                this.calculateAbsoluteMatrix(this.joints, i, initialSkeleton);
            }
            for (var i = 0; i < this.joints.length; i++) {
                var jointPose = this.joints[i];
                if (!jointPose.jointMatrixValid) {
                    jointPose.jointMatrix = new egret3d.Matrix4_4();
                    if (initialSkeleton.joints[i].inverseBindPose) {
                        jointPose.jointMatrix.copyFrom(initialSkeleton.joints[i].inverseBindPose);
                        jointPose.jointMatrix.append(jointPose.worldMatrix);
                    }
                    jointPose.jointMatrixValid = true;
                }
            }
            this.skeletonMatrixValid = false;
        };
        Skeleton.prototype.calculateAbsoluteMatrix = function (currentSkeletonPose, jointIndex, initialSkeleton) {
            var currentJointPose = currentSkeletonPose[jointIndex];
            var currentJointParentIndex = initialSkeleton.joints[jointIndex].parentIndex;
            if (currentJointParentIndex >= 0) {
                this.calculateAbsoluteMatrix(currentSkeletonPose, currentJointParentIndex, initialSkeleton);
            }
            if (!currentJointPose.worldMatrixValid) {
                currentJointPose.worldMatrix.copyFrom(currentJointPose.localMatrix);
                if (currentJointParentIndex >= 0) {
                    currentJointPose.worldMatrix.append(currentSkeletonPose[currentJointParentIndex].worldMatrix);
                }
                currentJointPose.worldMatrixValid = true;
            }
        };
        return Skeleton;
    })();
    egret3d.Skeleton = Skeleton;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimationClip
     * @classdesc
     * 骨骼动画
     */
    var SkeletonAnimationClip = (function () {
        function SkeletonAnimationClip(animName) {
            /**
            * @language zh_CN
            * 帧数
            */
            this.frameCount = 0;
            this._animName = null;
            this._sampling = 1;
            this._loop = true;
            this._playing = true;
            this._enabled = true;
            this._weight = 1.0;
            this._length = 0;
            this._parent = null;
            this._poseArray = null;
            this._animName = animName;
        }
        Object.defineProperty(SkeletonAnimationClip.prototype, "parent", {
            /**
            * @language zh_CN
            * 父对象
            */
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "poseArray", {
            /**
            * @language zh_CN
            * 动画Pose骨架序列
            */
            get: function () {
                return this._poseArray;
            },
            /**
            * @language zh_CN
            * 动画Pose骨架序列
            */
            set: function (array) {
                this._poseArray = array;
                this._length = array[array.length - 1].frameTime;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimationClip对象
        * @return 新的SkeletonAnimationClip
        */
        SkeletonAnimationClip.prototype.clone = function () {
            var cloneObj = new SkeletonAnimationClip(this.animationName);
            cloneObj.frameCount = this.frameCount;
            cloneObj.poseArray = this._poseArray;
            return cloneObj;
        };
        /**
        * @language zh_CN
        * 是否已经结束
        * @return 是否已经结束
        */
        SkeletonAnimationClip.prototype.hasEnded = function () {
            return ((this._timePosition >= this._length) && !this._loop);
        };
        /**
        * @language zh_CN
        * 添加动画播放时间偏移量
        * @param offset 时间增量
        */
        SkeletonAnimationClip.prototype.addTime = function (offset) {
            this.timePosition += offset;
        };
        Object.defineProperty(SkeletonAnimationClip.prototype, "currentFrameIndex", {
            /**
            * @language zh_CN
            * 当前帧索引
            */
            get: function () {
                var currentFrameIndex = Math.floor(this._timePosition / 80) % this._poseArray.length;
                return currentFrameIndex;
            },
            /**
            * @language zh_CN
            * 当前帧索引
            */
            set: function (value) {
                value = Math.abs(value) % this._poseArray.length;
                this.timePosition = value * 80;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "nextFrameIndex", {
            /**
            * @language zh_CN
            * 下一帧的索引
            */
            get: function () {
                return (this.currentFrameIndex + 1) % this._poseArray.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "animationName", {
            /**
            * @language zh_CN
            * 动画名称
            */
            get: function () {
                return this._animName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "length", {
            /**
            * @language zh_CN
            * 动画长度
            */
            get: function () {
                return this._length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "sampling", {
            /**
            * @language zh_CN
            * 采样率
            */
            get: function () {
                return this._sampling;
            },
            /**
            * @language zh_CN
            * 采样率
            */
            set: function (value) {
                this._sampling = Math.max(value, 1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "loop", {
            /**
            * @language zh_CN
            * 是否循环
            */
            get: function () {
                return this._loop;
            },
            /**
            * @language zh_CN
            * 是否循环
            */
            set: function (value) {
                this._loop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "play", {
            /**
            * @language zh_CN
            * 是否播放中
            */
            get: function () {
                return this._playing;
            },
            /**
            * @language zh_CN
            * 是否播放
            */
            set: function (value) {
                this._playing = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "enabled", {
            /**
            * @language zh_CN
            * 是否启用
            */
            get: function () {
                return this._enabled;
            },
            /**
            * @language zh_CN
            * 是否启用
            */
            set: function (value) {
                this._enabled = value;
                //this.parent.notifyAnimationStateEnabled(this, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "weight", {
            /**
            * @language zh_CN
            * 混合权重
            */
            get: function () {
                return this._weight;
            },
            /**
            * @language zh_CN
            * 混合权重
            */
            set: function (value) {
                this._weight = value;
                if (this._enabled) {
                    ; //this.parent.notifyDirty();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimationClip.prototype, "timePosition", {
            /**
            * @language zh_CN
            * 播放的时间位置
            */
            get: function () {
                return this._timePosition;
            },
            /**
            * @language zh_CN
            * 播放的时间位置
            */
            set: function (value) {
                if (value != this._timePosition) {
                    this._timePosition = value;
                    if (this._loop) {
                        this._timePosition = value % this._length;
                        if (this._timePosition < 0) {
                            this._timePosition += this._length;
                        }
                    }
                    else {
                        if (this._timePosition < 0) {
                            this._timePosition = 0;
                        }
                        else if (this._timePosition > this._length) {
                            this._timePosition = this._length;
                            this._playing = false;
                        }
                    }
                    if (this.enabled) {
                        ; //this.parent.notifyDirty();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 填充帧
        * @param initialSkeleton 初始骨架
        */
        SkeletonAnimationClip.prototype.fillFrame = function (initialSkeleton) {
            for (var i = 0; i < this._poseArray.length; i++) {
                this._poseArray[i].calculateJointWorldMatrix(initialSkeleton);
            }
            if (this.frameCount == this._poseArray.length - 1)
                return;
            var skeletonPose = new Array();
            var fps = 60.0;
            var gpf = 1000.0 / fps;
            skeletonPose.push(this._poseArray[0]);
            for (var frameIndex = 1; frameIndex <= this.frameCount; frameIndex++) {
                var currFrame = skeletonPose[frameIndex - 1];
                var nextFrame = this._poseArray[(Math.floor(frameIndex / this.sampling) + 1) % this._poseArray.length];
                var targetSkeletonPose = new egret3d.Skeleton();
                targetSkeletonPose.skeletonLerp(currFrame, nextFrame, frameIndex * gpf);
                skeletonPose.push(targetSkeletonPose);
            }
            this.poseArray = skeletonPose;
        };
        return SkeletonAnimationClip;
    })();
    egret3d.SkeletonAnimationClip = SkeletonAnimationClip;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimation
     * @classdesc
     * 骨骼动画控制器
     */
    var SkeletonAnimation = (function (_super) {
        __extends(SkeletonAnimation, _super);
        function SkeletonAnimation(initialSkeleton) {
            _super.call(this);
            /**
            * @language zh_CN
            * 是否开启平滑
            */
            this.smooth = false;
            this._initialSkeleton = null;
            this._animList = [];
            this._animationSkeleton = new egret3d.Skeleton();
            this._bindList = {};
            this._enabledSkeletonAnimationClips = [];
            this._eventCallbackList = [];
            this._skeletonAnimationClips = {};
            this._blendSkeleton = null;
            this._useCache = true;
            this._playSpeed = 1.0;
            this._playing = false;
            this._currentFrame = 0;
            this._temp_smooth = new egret3d.Skeleton();
            this._temp_quat = new egret3d.Quaternion();
            this._temp_vec3 = new egret3d.Vector3D();
            this._initialSkeleton = initialSkeleton;
            this._skeletonMatrix = new Float32Array(this._initialSkeleton.numJoint * 8);
        }
        Object.defineProperty(SkeletonAnimation.prototype, "skeletonAnimationController", {
            /**
            * @language zh_CN
            * 骨骼动画容器
            * @return SkeletonAnimation对象
            */
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 初始化Shader
        * @param vertexShader vertexShader
        * @param pixelShader pixelShader
        * @return xxx
        */
        SkeletonAnimation.prototype.initShader = function (vertexShader, pixelShader) {
            vertexShader.maxBone = this.jointNumber * 2;
        };
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimation对象
        * @return 新的SkeletonAnimation对象
        */
        SkeletonAnimation.prototype.clone = function () {
            var ret = new SkeletonAnimation(this._initialSkeleton);
            for (var id in this._skeletonAnimationClips) {
                ret._skeletonAnimationClips[id] = this._skeletonAnimationClips[id].clone();
            }
            ret._animationSkeleton = this._animationSkeleton;
            ret._animList = this._animList;
            ret._blendSkeleton = this._blendSkeleton.clone();
            return ret;
        };
        Object.defineProperty(SkeletonAnimation.prototype, "currentSkeletonMatrixData", {
            /**
            * @language zh_CN
            * 当前播放的骨架矩阵阵列数组
            */
            get: function () {
                return this._skeletonMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonAnimation.prototype, "jointNumber", {
            /**
            * @language zh_CN
            * 骨骼数
            */
            get: function () {
                return this._initialSkeleton.numJoint;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 添加SkeletonAnimationClip对象
        * @param animationState SkeletonAnimationClip对象
        * @return SkeletonAnimationClip对象
        */
        SkeletonAnimation.prototype.addSkeletonAnimationClip = function (animationState) {
            if (this._skeletonAnimationClips[animationState.animationName]) {
                return this._skeletonAnimationClips[animationState.animationName];
            }
            if (this._animationSkeleton.numJoint < animationState.poseArray[0].joints.length && this._animationSkeleton.numJoint != animationState.poseArray[0].joints.length) {
                this._animationSkeleton.joints = [];
                var jointPoses = animationState.poseArray[0].joints;
                for (var i = 0; i < jointPoses.length; i++) {
                    var joint = new egret3d.Joint(jointPoses[i].name);
                    joint.parentIndex = animationState.poseArray[0].findJointIndex(jointPoses[i].parent);
                    var inverseBindPoseJoint = this._initialSkeleton.findJoint(joint.name);
                    if (inverseBindPoseJoint) {
                        joint.inverseBindPose = inverseBindPoseJoint.inverseBindPose;
                    }
                    else {
                        joint.inverseBindPose = null;
                    }
                    this._animationSkeleton.joints.push(joint);
                }
            }
            animationState.fillFrame(this._animationSkeleton);
            animationState.parent = this;
            for (var i = 0; i < animationState.poseArray.length; i++) {
                animationState.poseArray[i].initialSkeleton = this._initialSkeleton;
            }
            this._skeletonAnimationClips[animationState.animationName] = animationState;
            this._animList.push(animationState.animationName);
            if (!this._blendSkeleton) {
                this._blendSkeleton = animationState.poseArray[0].clone();
            }
            return animationState;
        };
        /**
        * @language zh_CN
        * 更新
        * @param time 总时间
        * @param delay 延迟时间
        */
        SkeletonAnimation.prototype.updata = function (time, delay) {
            if (this._enabledSkeletonAnimationClips.length <= 0)
                return;
            var currentFrameIndex = 0;
            var currentSkeleton = null;
            var animationState = null;
            var currentSkeleton1 = null;
            var animationState1 = null;
            this._blendSkeleton.reset();
            var blendSpeed = delay / 300 * 1;
            for (var i = 0; i < this._enabledSkeletonAnimationClips.length; i++) {
                animationState = this._enabledSkeletonAnimationClips[i];
                if (i != this._enabledSkeletonAnimationClips.length - 1) {
                    animationState.weight = Math.max(0, animationState.weight - blendSpeed);
                    if (animationState.weight <= 0) {
                        this._enabledSkeletonAnimationClips.splice(i, 1);
                        i--;
                        continue;
                    }
                }
                else {
                    animationState.weight = Math.min(1, animationState.weight + blendSpeed);
                }
                animationState.addTime(delay * this._playSpeed * 5);
            }
            if (this._enabledSkeletonAnimationClips.length > 1) {
                animationState = this._enabledSkeletonAnimationClips[0];
                currentSkeleton = animationState.poseArray[animationState.currentFrameIndex];
                if (!currentSkeleton.skeletonMatrixValid) {
                    currentSkeleton.calculateJointWorldMatrix(this._animationSkeleton);
                }
                animationState1 = this._enabledSkeletonAnimationClips[1];
                currentSkeleton1 = animationState1.poseArray[animationState1.currentFrameIndex];
                if (!currentSkeleton1.skeletonMatrixValid) {
                    currentSkeleton1.calculateJointWorldMatrix(this._animationSkeleton);
                }
                for (var i = 0; i < this._blendSkeleton.numJoint; i++) {
                    this._blendSkeleton.joints[i].orientation.lerp(currentSkeleton.joints[i].orientation, currentSkeleton1.joints[i].orientation, animationState1.weight);
                    this._blendSkeleton.joints[i].scale.lerp(currentSkeleton.joints[i].scale, currentSkeleton1.joints[i].scale, animationState1.weight);
                    this._blendSkeleton.joints[i].translation.lerp(currentSkeleton.joints[i].translation, currentSkeleton1.joints[i].translation, animationState1.weight);
                    this._blendSkeleton.joints[i].setLocalTransform(this._blendSkeleton.joints[i].orientation, this._blendSkeleton.joints[i].scale, this._blendSkeleton.joints[i].translation);
                }
                this._blendSkeleton.calculateJointWorldMatrix(this._animationSkeleton);
                this._blendSkeleton.toMatrixData(this._skeletonMatrix);
            }
            else {
                animationState = this._enabledSkeletonAnimationClips[0];
                currentSkeleton = animationState.poseArray[animationState.currentFrameIndex];
                if (!currentSkeleton.skeletonMatrixValid) {
                    currentSkeleton.calculateJointWorldMatrix(this._animationSkeleton);
                }
                currentSkeleton.toMatrixData(this._skeletonMatrix);
            }
        };
        /**
        * @language zh_CN
        * 播放
        * @param animName 动画名称
        * @param speed 速度
        * @return 是否成功
        */
        SkeletonAnimation.prototype.play = function (animName, speed) {
            if (animName === void 0) { animName = null; }
            if (speed === void 0) { speed = 1.0; }
            if (!this._skeletonAnimationClips[animName])
                return false;
            this._enabledSkeletonAnimationClips.push(this._skeletonAnimationClips[animName]);
            this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].weight = this._enabledSkeletonAnimationClips.length > 1 ? 0 : 1;
            this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].play = true;
            this._enabledSkeletonAnimationClips[this._enabledSkeletonAnimationClips.length - 1].timePosition = 0;
            /*if (this._playing && this.currentAnim == animName)
                return true;

            if (this.currentAnim != animName) {

                if (!this._skeletonAnimationClips[animName])
                    return false;

                this.currentAnim = animName;

                this._enabledSkeletonAnimationClips = [];

                this._enabledSkeletonAnimationClips.push(this._skeletonAnimationClips[animName]);
            }

            this._enabledSkeletonAnimationClips[0].play = true;

            this._enabledSkeletonAnimationClips[0].timePosition = 0;*/
            this._currentFrame = 0;
            this._playSpeed = speed;
            this._playing = true;
            return true;
        };
        /**
        * @language zh_CN
        * 播放一次
        * @param animName 动画名称
        * @param speed 播放速度
        * @return 是否成功
        */
        SkeletonAnimation.prototype.playOnce = function (animName, speed) {
            ///if (this._playing && this.currentAnim == animName)
            ///    return true;
            if (animName === void 0) { animName = null; }
            if (speed === void 0) { speed = 1.0; }
            if (this.currentAnim != animName) {
                if (!this._skeletonAnimationClips[animName])
                    return false;
                this.currentAnim = animName;
                this._enabledSkeletonAnimationClips = [];
                this._enabledSkeletonAnimationClips.push(this._skeletonAnimationClips[animName]);
            }
            this._currentFrame = 0;
            this._enabledSkeletonAnimationClips[0].play = true;
            this._enabledSkeletonAnimationClips[0].timePosition = 0;
            this._enabledSkeletonAnimationClips[0].loop = false;
            this._playSpeed = speed;
            this._playing = true;
            return true;
        };
        Object.defineProperty(SkeletonAnimation.prototype, "currentFrame", {
            /**
            * @language zh_CN
            * 当前帧索引
            */
            get: function () {
                return this._currentFrame;
            },
            /**
            * @language zh_CN
            * 当前帧索引
            */
            set: function (value) {
                if (this._enabledSkeletonAnimationClips.length <= 0)
                    return;
                this._enabledSkeletonAnimationClips[0].timePosition = value * 160;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 获取总帧数
        * @param animName 动画名称
        * @return 动画总帧数
        */
        SkeletonAnimation.prototype.getTotalNumberOfFrame = function (animName) {
            if (animName === void 0) { animName = null; }
            animName = animName ? animName : this.currentAnim;
            var animation = this._skeletonAnimationClips[animName];
            if (!animation)
                return 0;
            return animation.poseArray.length;
        };
        /**
        * @language zh_CN
        * 停止动画播放
        */
        SkeletonAnimation.prototype.stop = function () {
            this._playing = false;
        };
        /**
        * @language zh_CN
        * 动画是否在播放
        * @return 是否在播放
        */
        SkeletonAnimation.prototype.isPlay = function () {
            if (false == this._enabledSkeletonAnimationClips[0].play) {
                return false;
            }
            return this._playing && this._enabledSkeletonAnimationClips.length > 0;
        };
        /**
        * @language zh_CN
        * 设置动画播放速度
        * @param speed 播放速度
        */
        SkeletonAnimation.prototype.setPlaySpeed = function (speed) {
            this._playSpeed = speed;
        };
        /**
        * @language zh_CN
        * 绑定3D对象到骨骼
        * @param jointName 骨骼名称
        * @param obj3d 3D对象
        * @return 是否成功
        */
        SkeletonAnimation.prototype.bindToJointPose = function (jointName, obj3d) {
            var jointIndex = this._animationSkeleton.findJointIndex(jointName);
            if (jointIndex < 0)
                return false;
            var list = null;
            if (this._bindList[jointIndex]) {
                list = this._bindList[jointIndex];
            }
            else {
                list = new Array();
                this._bindList[jointIndex] = list;
            }
            list.push(obj3d);
            return true;
        };
        SkeletonAnimation.prototype.updateBindList = function (skeletonPose) {
            var list = null;
            var jointPose = null;
            var obj3D = null;
            for (var jointIndex in this._bindList) {
                list = this._bindList[jointIndex];
                if (list.length <= 0)
                    continue;
                jointPose = skeletonPose.joints[jointIndex];
                if (!jointPose)
                    continue;
                for (var i = 0; i < list.length; i++) {
                    obj3D = list[i];
                    this._temp_quat.fromMatrix(jointPose.worldMatrix);
                    this._temp_quat.toEulerAngles(this._temp_vec3);
                    obj3D.rotationX = this._temp_vec3.x;
                    obj3D.rotationY = this._temp_vec3.y;
                    obj3D.rotationZ = this._temp_vec3.z;
                    ///obj3D.scaleX = jointPose.worldMatrix.scale.x;
                    ///obj3D.scaleY = jointPose.worldMatrix.scale.y;
                    ///obj3D.scaleZ = jointPose.worldMatrix.scale.z;
                    obj3D.x = jointPose.worldMatrix.position.x;
                    obj3D.y = jointPose.worldMatrix.position.y;
                    obj3D.z = jointPose.worldMatrix.position.z;
                }
            }
        };
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画列表
        */
        SkeletonAnimation.prototype.getAnimList = function () {
            return this._animList;
        };
        /**
        * @language zh_CN
        * 获取动画节点
        */
        SkeletonAnimation.prototype.getAnimNode = function () {
            return null;
        };
        Object.defineProperty(SkeletonAnimation.prototype, "dirtyFrameNumber", {
            /**
            * @language zh_CN
            * 脏帧数
            * @return xxx
            */
            get: function () {
                return this._dirtyFrameNumber;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 获取SkeletonAnimationClip对象
        * @param name 动画名称
        * @return SkeletonAnimationClip对象
        */
        SkeletonAnimation.prototype.getAnimationState = function (name) {
            return this._skeletonAnimationClips[name];
        };
        /**
        * @language zh_CN
        * 移除动画
        * @param name 动画名称
        */
        SkeletonAnimation.prototype.removeAnimationState = function (name) {
            if (!this._skeletonAnimationClips[name]) {
                console.log("animation named: " + name + "not exists. SkeletonAnimationClip::removeAnimationState");
            }
            delete this._skeletonAnimationClips[name];
        };
        /**
        * @language zh_CN
        * 移除所有动画
        */
        SkeletonAnimation.prototype.removeAllAnimationStates = function () {
            this._skeletonAnimationClips = {};
            this._enabledSkeletonAnimationClips = [];
        };
        /**
        * @language zh_CN
        * 动画播放完一个周期的事件
        */
        SkeletonAnimation.EVENT_PLAY_COMPLETE = "event_play_complete";
        /**
        * @language zh_CN
        * 动画帧更改的事件
        */
        SkeletonAnimation.EVENT_FRAME_CHANGE = "event_frame_change";
        return SkeletonAnimation;
    })(egret3d.EventDispatcher);
    egret3d.SkeletonAnimation = SkeletonAnimation;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.VarConstName
        * @classdesc
        * shader 变量 名字定义
        */
        var VarConstName = (function () {
            function VarConstName() {
            }
            VarConstName.attribute_position = "attribute_position";
            VarConstName.attribute_normal = "attribute_normal";
            VarConstName.attribute_tangent = "attribute_tangent";
            VarConstName.attribute_vertexColor = "attribute_vertexColor";
            VarConstName.attribute_uv0 = "attribute_uv0";
            VarConstName.attribute_uv1 = "attribute_uv1";
            VarConstName.varying_pos = "varying_pos";
            VarConstName.varying_normal = "varying_normal";
            VarConstName.varying_tangent = "varying_tangent";
            VarConstName.varying_color = "varying_color";
            VarConstName.varying_uv0 = "varying_uv0";
            VarConstName.varying_uv1 = "varying_uv1";
            VarConstName.varying_globalPos = "varying_globalPos";
            VarConstName.varying_lightDir = "varying_lightDir";
            VarConstName.varying_eye = "varying_eye";
            VarConstName.uniform_floatv_0 = "uniform_floatv_0";
            VarConstName.uniform_floatv_1 = "uniform_floatv_1";
            VarConstName.uniform_floatv_2 = "uniform_floatv_2";
            VarConstName.uniform_iv_0 = "uniform_iv_0";
            VarConstName.uniform_iv_1 = "uniform_iv_1";
            VarConstName.uniform_iv_2 = "uniform_iv_2";
            VarConstName.uniform_bv_0 = "uniform_bv_0";
            VarConstName.uniform_bv_1 = "uniform_bv_1";
            VarConstName.uniform_bv_2 = "uniform_bv_2";
            VarConstName.uniform_vec2fv_0 = "uniform_vec2fv_0";
            VarConstName.uniform_vec2fv_1 = "uniform_vec2fv_1";
            VarConstName.uniform_vec2fv_2 = "uniform_vec2fv_2";
            VarConstName.uniform_vec3fv_0 = "uniform_vec3fv_0";
            VarConstName.uniform_vec3fv_1 = "uniform_vec3fv_1";
            VarConstName.uniform_vec3fv_2 = "uniform_vec3fv_2";
            VarConstName.uniform_vec4fv_0 = "uniform_vec4fv_0";
            VarConstName.uniform_vec4fv_1 = "uniform_vec4fv_1";
            VarConstName.uniform_vec4fv_2 = "uniform_vec4fv_2";
            VarConstName.uniform_vec2iv_0 = "uniform_vec2iv_0";
            VarConstName.uniform_vec2iv_1 = "uniform_vec2iv_1";
            VarConstName.uniform_vec2iv_2 = "uniform_vec2iv_2";
            VarConstName.uniform_vec3iv_0 = "uniform_vec3iv_0";
            VarConstName.uniform_vec3iv_1 = "uniform_vec3iv_1";
            VarConstName.uniform_vec3iv_2 = "uniform_vec3iv_2";
            VarConstName.uniform_vec4iv_0 = "uniform_vec4iv_0";
            VarConstName.uniform_vec4iv_1 = "uniform_vec4iv_1";
            VarConstName.uniform_vec4iv_2 = "uniform_vec4iv_2";
            VarConstName.uniform_vec2bv_0 = "uniform_vec2bv_0";
            VarConstName.uniform_vec2bv_1 = "uniform_vec2bv_1";
            VarConstName.uniform_vec2bv_2 = "uniform_vec2bv_2";
            VarConstName.uniform_vec3bv_0 = "uniform_vec3bv_0";
            VarConstName.uniform_vec3bv_1 = "uniform_vec3bv_1";
            VarConstName.uniform_vec3bv_2 = "uniform_vec3bv_2";
            VarConstName.uniform_vec4bv_0 = "uniform_vec4bv_0";
            VarConstName.uniform_vec4bv_1 = "uniform_vec4bv_1";
            VarConstName.uniform_vec4bv_2 = "uniform_vec4bv_2";
            VarConstName.uniform_modelMatrix = "uniform_modelMatrix";
            VarConstName.uniform_projectionMatrix = "uniform_projectionMatrix";
            VarConstName.uniform_normalMatrix = "uniform_normalMatrix";
            VarConstName.uniform_eye = "uniform_eye";
            VarConstName.uniform_lightDir = "uniform_lightDir";
            VarConstName.texture2D_0 = "texture2D_0";
            VarConstName.texture2D_1 = "texture2D_1";
            VarConstName.texture2D_2 = "texture2D_2";
            VarConstName.texture2D_3 = "texture2D_3";
            VarConstName.texture2D_4 = "texture2D_4";
            return VarConstName;
        })();
        GLSL.VarConstName = VarConstName;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.AttributeType
        * @classdesc
        * 属性类型
        */
        var AttributeType = (function () {
            function AttributeType() {
            }
            AttributeType.int = "int";
            AttributeType.float = "float";
            AttributeType.vec2 = "vec2";
            AttributeType.vec3 = "vec3";
            AttributeType.vec4 = "vec4";
            AttributeType.mat2 = "mat2";
            AttributeType.mat3 = "mat3";
            AttributeType.mat4 = "mat4";
            return AttributeType;
        })();
        GLSL.AttributeType = AttributeType;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.UniformType
        * @classdesc
        * Uniform 变量类型
        */
        var UniformType = (function () {
            function UniformType() {
            }
            UniformType.bool = "bool";
            UniformType.int = "int";
            UniformType.float = "float";
            UniformType.vec2 = "vec2";
            UniformType.vec3 = "vec3";
            UniformType.vec4 = "vec4";
            UniformType.bvec2 = "bvec2";
            UniformType.bvec3 = "bvec3";
            UniformType.bvec4 = "bvec4";
            UniformType.ivec2 = "ivec2";
            UniformType.ivec3 = "ivec3";
            UniformType.ivec4 = "ivec4";
            UniformType.mat2 = "mat2";
            UniformType.mat3 = "mat3";
            UniformType.mat4 = "mat4";
            UniformType.sampler2D = "sampler2D";
            UniformType.sampleCube = "sampleCube";
            return UniformType;
        })();
        GLSL.UniformType = UniformType;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.VaryingType
        * @classdesc
        * shader Varying 变量 类型
        */
        var VaryingType = (function () {
            function VaryingType() {
            }
            VaryingType.bool = "bool";
            VaryingType.int = "int";
            VaryingType.float = "float";
            VaryingType.vec2 = "vec2";
            VaryingType.vec3 = "vec3";
            VaryingType.vec4 = "vec4";
            VaryingType.bvec2 = "bvec2";
            VaryingType.bvec3 = "bvec3";
            VaryingType.bvec4 = "bvec4";
            VaryingType.ivec2 = "ivec2";
            VaryingType.ivec3 = "ivec3";
            VaryingType.ivec4 = "ivec4";
            VaryingType.mat2 = "mat2";
            VaryingType.mat3 = "mat3";
            VaryingType.mat4 = "mat4";
            VaryingType.sampler2D = "sampler2D";
            VaryingType.sampleCube = "sampleCube";
            return VaryingType;
        })();
        GLSL.VaryingType = VaryingType;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.VarRegister
        * @classdesc
        * shader 变量 基类
        */
        var VarRegister = (function () {
            function VarRegister() {
                /**
                * @language zh_CN
                * 变量类型
                */
                this.valueType = ""; /// float vec2 vec3 vec4 int int2 int3 int4
                /**
                * @language zh_CN
                * 变量值
                */
                this.value = ""; /// var value
                /**
                * @language zh_CN
                * active Texture Index
                */
                this.activeTextureIndex = -1;
                /**
                * @language zh_CN
                * index
                */
                this.index = -1;
            }
            /**
            * @language zh_CN
            * 得到组合后的字符串
            * @param compoments
            */
            VarRegister.prototype.var = function (compoments) {
                return this.level + " " + this.valueType + " " + name + "." + compoments;
            };
            /**
            * @language zh_CN
            *
            * @param compoments
            */
            VarRegister.prototype.use = function (compoments) {
                if (compoments === void 0) { compoments = ""; }
                if (compoments != "")
                    return this.name + "." + compoments;
                return this.name;
            };
            /**
            * @language zh_CN
            *
            * @returns VarRegister
            */
            VarRegister.prototype.clone = function () {
                var temp = new VarRegister();
                temp.name = this.name;
                temp.valueType = this.valueType;
                temp.level = this.level;
                temp.varName = this.varName;
                temp.value = this.value;
                return temp;
            };
            VarRegister.prototype.computeVarName = function () {
                var index = this.name.indexOf("[");
                if (index >= 0) {
                    this.varName = this.name.substr(0, index);
                }
                else {
                    this.varName = this.name;
                }
            };
            return VarRegister;
        })();
        GLSL.VarRegister = VarRegister;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.TmpVar
        * @classdesc
        * 临时变量
        */
        var TmpVar = (function (_super) {
            __extends(TmpVar, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function TmpVar(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "";
                this.valueType = valueType;
            }
            return TmpVar;
        })(GLSL.VarRegister);
        GLSL.TmpVar = TmpVar;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.Attribute
        * @classdesc
        * 变量属性
        */
        var Attribute = (function (_super) {
            __extends(Attribute, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function Attribute(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "attribute";
                this.valueType = valueType;
            }
            return Attribute;
        })(GLSL.VarRegister);
        GLSL.Attribute = Attribute;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.VarRegister
        * @classdesc
        * shader Varying 变量
        */
        var Varying = (function (_super) {
            __extends(Varying, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function Varying(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "varying";
                this.valueType = valueType;
            }
            return Varying;
        })(GLSL.VarRegister);
        GLSL.Varying = Varying;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.Uniform
        * @classdesc
        * uniform 变量
        */
        var Uniform = (function (_super) {
            __extends(Uniform, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function Uniform(name, valueType) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "uniform";
                this.valueType = valueType;
            }
            return Uniform;
        })(GLSL.VarRegister);
        GLSL.Uniform = Uniform;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.ConstVar
        * @classdesc
        * 常量
        */
        var ConstVar = (function (_super) {
            __extends(ConstVar, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            * @param valueType
            */
            function ConstVar(name, valueType, value) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "const";
                this.valueType = valueType;
                this.value = value;
            }
            return ConstVar;
        })(GLSL.VarRegister);
        GLSL.ConstVar = ConstVar;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.Sampler2D
        * @classdesc
        * 采样2D类型
        */
        var Sampler2D = (function (_super) {
            __extends(Sampler2D, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            */
            function Sampler2D(name) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "sampler2D";
                ///this.valueType = valueType;
            }
            return Sampler2D;
        })(GLSL.VarRegister);
        GLSL.Sampler2D = Sampler2D;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.Sampler3D
        * @classdesc
        * 采样3D类型
        */
        var Sampler3D = (function (_super) {
            __extends(Sampler3D, _super);
            /**
            * @language zh_CN
            * constructor
            * @param name
            */
            function Sampler3D(name) {
                _super.call(this);
                this.name = name;
                this.computeVarName();
                this.key = "samplerCube";
            }
            return Sampler3D;
        })(GLSL.VarRegister);
        GLSL.Sampler3D = Sampler3D;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @class egret3d.ShaderBase
        * @classdesc
        * shader 基类
        */
        var ShaderBase = (function () {
            /**
            * @language zh_CN
            * constructor
            * @param materialData
            * @param usage
            */
            function ShaderBase(materialData, usage) {
                this.index = 0;
                this.source = "precision highp float;            \t\n";
                this.shadersName = new Array();
                this.endShadername = "";
                this.stateChange = false;
                /**
                * @language zh_CN
                *
                */
                this.maxBone = 0;
                this.useage = usage;
                this.materialData = materialData;
            }
            /**
            * @language zh_CN
            *
            * @param shaderName xxx
            */
            ShaderBase.prototype.addShader = function (shaderName) {
                this.shadersName.push(shaderName);
            };
            /**
            * @language zh_CN
            *
            * @param shaderName xxx
            */
            ShaderBase.prototype.addEnd = function (shaderName) {
                this.endShadername = shaderName;
            };
            /**
            * @language zh_CN
            *
            * @param context3D
            * @param program3D
            * @param modeltransform
            * @param camera3D
            */
            ShaderBase.prototype.activate = function (context3D, program3D, modeltransform, camera3D) {
            };
            /**
            * @language zh_CN
            *
            * @param context3D
            * @param program3D
            * @param modeltransform
            * @param camera3D
            */
            ShaderBase.prototype.updata = function (context3D, program3D, modeltransform, camera3D) {
            };
            /**
            * @language zh_CN
            *
            * @returns string
            */
            ShaderBase.prototype.getShaderSource = function () {
                if (this.endShadername != "") {
                    var index = this.shadersName.indexOf(this.endShadername);
                    if (index == -1) {
                        this.shadersName.push(this.endShadername);
                    }
                }
                var shaderContent = egret3d.ShaderSystemTool.instance.getShader(this.shadersName, this.useage);
                var i;
                ///var attribute
                for (var key in shaderContent.attributeList) {
                    this.connectAtt(shaderContent.attributeList[key]);
                }
                ///var struct
                for (var key in shaderContent.structDict) {
                    this.connectStruct(shaderContent.structDict[key]);
                }
                ///var varying
                for (i = 0; i < shaderContent.varyingList.length; i++) {
                    this.connectVarying(shaderContent.varyingList[i]);
                }
                ///temp
                for (i = 0; i < shaderContent.tempList.length; i++) {
                    this.connectTemp(shaderContent.tempList[i]);
                }
                ///const
                for (i = 0; i < shaderContent.constList.length; i++) {
                    if (shaderContent.constList[i].varName == "max_directLight") {
                        shaderContent.constList[i].value = this.materialData.directLightList.length.toString();
                    }
                    if (shaderContent.constList[i].varName == "bonesNumber") {
                        shaderContent.constList[i].value = this.maxBone; ///(<AnimationStateSet>this.geometey.animation).getJointNumber() * 2;
                    }
                    if (shaderContent.constList[i].varName == "max_sportLight") {
                        shaderContent.constList[i].value = this.materialData.sportLightList.length.toString();
                    }
                    if (shaderContent.constList[i].varName == "max_pointLight") {
                        shaderContent.constList[i].value = this.materialData.pointLightList.length.toString();
                    }
                    this.connectConst(shaderContent.constList[i]);
                }
                ///uniform
                for (i = 0; i < shaderContent.uniformList.length; i++) {
                    this.connectUniform(shaderContent.uniformList[i]);
                }
                ///sampler
                for (i = 0; i < shaderContent.sampler2DList.length; i++) {
                    var sampler2D = shaderContent.sampler2DList[i];
                    sampler2D = sampler2D.clone();
                    this.connectSampler(sampler2D);
                    sampler2D.activeTextureIndex = this.getTexture2DIndex(i);
                    sampler2D.index = i;
                    this.useage.sampler2DList.push(sampler2D);
                }
                ///sampler
                for (i = 0; i < shaderContent.sampler3DList.length; i++) {
                    var sampler3D = shaderContent.sampler3DList[i];
                    sampler3D = sampler3D.clone();
                    this.connectSampler3D(sampler3D);
                    sampler3D.activeTextureIndex = this.getTexture2DIndex(shaderContent.sampler2DList.length + i);
                    sampler3D.index = shaderContent.sampler2DList.length + i;
                    this.useage.sampler3DList.push(sampler3D);
                }
                ///---------------------------------------------------------------------------------
                ///---------------------------------------------------------------------------------
                for (i = 0; i < shaderContent.funcList.length; i++) {
                    this.source += shaderContent.funcList[i].func;
                }
                return this.source;
            };
            /**
            * @language zh_CN
            *
            * @param att
            */
            ShaderBase.prototype.connectAtt = function (att) {
                this.source += "attribute " + att.valueType + " " + att.name + "; \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param tempVar
            */
            ShaderBase.prototype.connectTemp = function (tempVar) {
                this.source += tempVar.valueType + " " + tempVar.name + "; \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param struct
            */
            ShaderBase.prototype.connectStruct = function (struct) {
                this.source += struct + " \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param constVar
            */
            ShaderBase.prototype.connectConst = function (constVar) {
                this.source += "const " + constVar.valueType + " " + constVar.name + " = " + constVar.value + "; \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param varying
            */
            ShaderBase.prototype.connectVarying = function (varying) {
                this.source += "varying " + varying.valueType + " " + varying.name + "; \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param unifrom
            */
            ShaderBase.prototype.connectUniform = function (unifrom) {
                this.source += "uniform " + unifrom.valueType + " " + unifrom.name + "; \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param sampler
            */
            ShaderBase.prototype.connectSampler = function (sampler) {
                this.source += "uniform sampler2D " + sampler.name + "; \r\n";
            };
            /**
            * @language zh_CN
            *
            * @param sampler
            */
            ShaderBase.prototype.connectSampler3D = function (sampler) {
                this.source += "uniform samplerCube " + sampler.name + "; \r\n";
            };
            ShaderBase.prototype.getTexture2DIndex = function (i) {
                switch (i) {
                    case 0:
                        return egret3d.ContextSamplerType.TEXTURE_0;
                        break;
                    case 1:
                        return egret3d.ContextSamplerType.TEXTURE_1;
                        break;
                    case 2:
                        return egret3d.ContextSamplerType.TEXTURE_2;
                        break;
                    case 3:
                        return egret3d.ContextSamplerType.TEXTURE_3;
                        break;
                    case 4:
                        return egret3d.ContextSamplerType.TEXTURE_4;
                        break;
                    case 5:
                        return egret3d.ContextSamplerType.TEXTURE_5;
                        break;
                    case 6:
                        return egret3d.ContextSamplerType.TEXTURE_6;
                        break;
                    case 7:
                        return egret3d.ContextSamplerType.TEXTURE_7;
                        break;
                    case 8:
                        return egret3d.ContextSamplerType.TEXTURE_8;
                        break;
                }
                throw new Error("texture not big then 8");
                return -1;
            };
            /**
            * @language zh_CN
            * dispose
            */
            ShaderBase.prototype.dispose = function () {
                this.materialData = null;
                this.useage = null;
                this.source = "";
                this.source = null;
                this.shadersName.length = 0;
                this.shadersName = null;
            };
            return ShaderBase;
        })();
        GLSL.ShaderBase = ShaderBase;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        var FuncData = (function () {
            function FuncData() {
                this.name = "";
                this.func = "";
            }
            return FuncData;
        })();
        GLSL.FuncData = FuncData;
        var ShaderContent = (function () {
            function ShaderContent() {
                this.name = "";
                this.funcDict = {};
                this.structDict = {};
                this.attributeList = new Array();
                this.varyingList = new Array();
                this.uniformList = new Array();
                this.constList = new Array();
                this.tempList = new Array();
                this.sampler2DList = new Array();
                this.sampler3DList = new Array();
                this.funcList = new Array();
            }
            ShaderContent.prototype.addVar = function (sVar) {
                if (sVar.key == "attribute") {
                    this.attributeList.push(sVar);
                }
                else if (sVar.key == "varying") {
                    this.varyingList.push(sVar);
                }
                else if (sVar.key == "uniform") {
                    this.uniformList.push(sVar);
                }
                else if (sVar.key == "const") {
                    this.constList.push(sVar);
                }
                else if (sVar.key == "sampler2D") {
                    this.sampler2DList.push(sVar);
                }
                else if (sVar.key == "samplerCube") {
                    this.sampler3DList.push(sVar);
                }
                else {
                    this.tempList.push(sVar);
                }
            };
            ShaderContent.prototype.addFunc = function (name, func) {
                if (this.funcDict[name] == undefined) {
                    this.funcDict[name] = func;
                    var funcData = new FuncData();
                    funcData.name = name;
                    funcData.func = func;
                    if (name == "main") {
                        this.funcList.push(funcData);
                    }
                    else {
                        this.funcList.unshift(funcData);
                    }
                }
                else {
                    if (name == "main") {
                        var newfunc = this.mergeMainFunc(this.funcDict[name], func);
                        this.funcDict[name] = newfunc;
                        var funcData = this.findFunc(name);
                        if (funcData) {
                            funcData.func = newfunc;
                        }
                    }
                    else {
                        console.log("<" + name + ">" + "函数重复");
                    }
                }
            };
            ShaderContent.prototype.addStruct = function (name, structStr) {
                if (this.structDict[name] == undefined) {
                    this.structDict[name] = structStr;
                }
                else {
                    console.log("<" + name + ">" + "struct重复");
                }
            };
            ShaderContent.prototype.addContent = function (otherContent) {
                for (var key in otherContent.structDict) {
                    this.structDict[key] = otherContent.structDict[key];
                }
                for (var key in otherContent.funcDict) {
                    this.addFunc(key, otherContent.funcDict[key]);
                }
                for (var i = 0; i < otherContent.attributeList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.attributeList.length; ++j) {
                        if (otherContent.attributeList[i].name == this.attributeList[j].name) {
                            if (otherContent.attributeList[i].valueType != this.attributeList[j].valueType ||
                                otherContent.attributeList[i].key != this.attributeList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.attributeList.push(otherContent.attributeList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.varyingList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.varyingList.length; ++j) {
                        if (otherContent.varyingList[i].name == this.varyingList[j].name) {
                            if (otherContent.varyingList[i].valueType != this.varyingList[j].valueType ||
                                otherContent.varyingList[i].key != this.varyingList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.varyingList.push(otherContent.varyingList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.uniformList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.uniformList.length; ++j) {
                        if (otherContent.uniformList[i].name == this.uniformList[j].name) {
                            if (otherContent.uniformList[i].valueType != this.uniformList[j].valueType ||
                                otherContent.uniformList[i].key != this.uniformList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.uniformList.push(otherContent.uniformList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.constList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.constList.length; ++j) {
                        if (otherContent.constList[i].name == this.constList[j].name) {
                            if (otherContent.constList[i].valueType != this.constList[j].valueType ||
                                otherContent.constList[i].key != this.constList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.constList.push(otherContent.constList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.tempList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.tempList.length; ++j) {
                        if (otherContent.tempList[i].name == this.tempList[j].name) {
                            if (otherContent.tempList[i].valueType != this.tempList[j].valueType ||
                                otherContent.tempList[i].key != this.tempList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.tempList.push(otherContent.tempList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.sampler2DList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.sampler2DList.length; ++j) {
                        if (otherContent.sampler2DList[i].name == this.sampler2DList[j].name) {
                            if (otherContent.sampler2DList[i].valueType != this.sampler2DList[j].valueType ||
                                otherContent.sampler2DList[i].key != this.sampler2DList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.sampler2DList.push(otherContent.sampler2DList[i].clone());
                    }
                }
                for (var i = 0; i < otherContent.sampler3DList.length; ++i) {
                    var isAdd = true;
                    for (var j = 0; j < this.sampler3DList.length; ++j) {
                        if (otherContent.sampler3DList[i].name == this.sampler3DList[j].name) {
                            if (otherContent.sampler2DList[i].valueType != this.sampler3DList[j].valueType ||
                                otherContent.sampler3DList[i].key != this.sampler3DList[j].key) {
                                console.log("Error :addContent");
                            }
                            isAdd = false;
                            break;
                        }
                    }
                    if (isAdd) {
                        this.sampler3DList.push(otherContent.sampler3DList[i].clone());
                    }
                }
            };
            ShaderContent.prototype.mergeMainFunc = function (func1, func2) {
                var ret = func1;
                var func = "";
                var s_pos = func2.indexOf("{");
                var e_pos = func2.lastIndexOf("}");
                s_pos++;
                func = func2.slice(s_pos, e_pos);
                s_pos = ret.lastIndexOf("}");
                var f_func = ret.substr(0, s_pos);
                var s_func = ret.substr(s_pos, ret.length - s_pos);
                ret = f_func;
                ret += func;
                var temp = "";
                var line = "";
                var old = ret;
                ///while (true) {
                ///    s_pos = ret.indexOf("gl_FragColor");
                ///    if (s_pos >= 0) {
                ///        e_pos = ret.indexOf(";", s_pos);
                ///        temp = ret.substring(s_pos, e_pos + 1);
                ///        ret = ret.replace(temp, "");
                ///        line += temp;
                ///    }
                ///    s_pos = ret.indexOf("gl_Position");
                ///    if (s_pos >= 0) {
                ///        e_pos = ret.indexOf(";", s_pos);
                ///        temp = ret.substring(s_pos, e_pos + 1);
                ///        ret = ret.replace(temp, "");
                ///        line += temp;
                ///    }
                ///    if (old == ret) {
                ///        break;
                ///    }
                ///    old = ret;
                ///}
                ret += line;
                ret += s_func;
                return ret;
            };
            ShaderContent.prototype.findFunc = function (name) {
                var funcData = null;
                for (var i = 0; i < this.funcList.length; ++i) {
                    if (this.funcList[i].name == name) {
                        funcData = this.funcList[i];
                        break;
                    }
                }
                return funcData;
            };
            return ShaderContent;
        })();
        GLSL.ShaderContent = ShaderContent;
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    var ShaderSystemTool = (function () {
        function ShaderSystemTool() {
            this.libs = [
                ///---ok------------------
                "default_vertex",
                "diffuseMap_fragment",
                "diffuse_fragmentEnd",
                "normalMap_fragment",
                "specularMap_fragment",
                "diffuseMethod_fragment",
                "Color_fragment",
                "directLight_fragment",
                "sportLight_fragment",
                "pointLight_fragment",
                "skeleton_vertex",
                "particle_vertex",
                "particle_vertexEnd",
                ///---ok------------------
                ///"LightDiffuse_fragment", 
                "Shadow_vertex_static",
                "Shadow_vertex_sksleton",
                "Shadow_fragment",
                "ShadowMapping_vertex",
                "shadowmapping_fragment",
                "depthMethod_fragment",
                "normalMethod_fragment",
                "postCanvas_vertex",
                "postCanvas_fragment",
                "sky_fragment",
                "sky_vertex",
                "spheresky_vertex",
                "spheresky_fragment",
                "terrainRGBA_fragment",
                "warpedImage_fragment",
                "lightMap_fragment",
                "EnvironmentMapping_fragment",
                "distanceFog_fragment",
                "AOMap_fragment",
                "wireframe_vertex",
                "wireframe_fragment",
                ///ok
                ///--particle--
                "particle_time",
                "particle_position",
                "particle_offset",
                "particle_speed",
                "particle_billboard",
                "particle_acceleration",
                "particle_lifeRotate",
                "particle_acceleRotate",
                "particle_scale",
                "particle_acceleScale",
                ///--particle--
                //post----
                "BrightPassFilter",
                "GaussianBlurHorizontal",
                "GaussianBlurVertical",
                "Composition",
                "Tonemaping",
            ];
            this._shaderLibs = {};
            this._methodLibs = {};
            this._loaderDict = {};
            this._loadList = new Array();
            this._shaderContentDict = {};
        }
        Object.defineProperty(ShaderSystemTool, "instance", {
            /**
            * @language zh_CN
            * @readOnly
            * 单例
            */
            get: function () {
                if (!this._instance) {
                    this._instance = new ShaderSystemTool();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 注册加载shader文件回调
        * @event func 加载完成响应
        */
        ShaderSystemTool.regist = function (func) {
            this.instance._loadFunc = func;
            this.instance.load("");
        };
        ShaderSystemTool.prototype.load = function (prefixUrl) {
            var _this = this;
            for (var i = 0; i < this.libs.length; i++) {
                this._loadList.push(this.libs[i]);
            }
            for (var i = 0; i < this.libs.length; i++) {
                var glslUrl = prefixUrl + "shader/" + this.libs[i] + ".glsl";
                this._loaderDict[glslUrl] = this.libs[i];
                var glslData = egret3d["glsldata"];
                if (glslData) {
                    this.setupShader(glslUrl, glslData[this.libs[i]]);
                }
                else {
                    var urlloader = new egret3d.URLLoader(glslUrl);
                    urlloader.onLoadComplete = function (loader) { return _this.onCompleteShader(loader); };
                }
            }
            if (glslData) {
                setTimeout(function () { return _this._loadFunc(_this); }, 0);
            }
        };
        ShaderSystemTool.prototype.onCompleteShader = function (loader) {
            this.setupShader(loader.url, loader.data);
        };
        ShaderSystemTool.prototype.setupShader = function (url, data) {
            var content = this.readShader(data);
            content.name = this._loaderDict[url];
            this._shaderLibs[content.name] = data;
            this._methodLibs[content.name] = content;
            this._shaderContentDict[content.name] = content;
            var index = -1;
            for (var i = 0; i < this._loadList.length; ++i) {
                if (this._loadList[i] == content.name) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                this._loadList.splice(index, 1);
            }
            if (this._loadList.length <= 0) {
                this._loadFunc(this);
            }
        };
        /**
        * @language zh_CN
        * 得到shader内容
        * @param name shader 名字
        * @returns shader内容
        */
        ShaderSystemTool.prototype.getShaderSource = function (name) {
            return this._shaderLibs[name] = this._shaderLibs[name] || "";
        };
        /**
        * @language zh_CN
        * 返回组合shader后的内容
        * @param shaderNameList 要组合的shader名字列表
        * @param usage
        * @returns shader 内容
        */
        ShaderSystemTool.prototype.getShader = function (shaderNameList, usage) {
            var i = 0;
            var varName = "";
            var shaderContent = null;
            for (i = 0; i < shaderNameList.length; ++i) {
                if (varName != "") {
                    varName += "/";
                }
                varName += shaderNameList[i];
            }
            if (this._shaderContentDict[varName] == undefined) {
                shaderContent = new egret3d.GLSL.ShaderContent();
                for (i = 0; i < shaderNameList.length; ++i) {
                    var tempContent = this._shaderContentDict[shaderNameList[i]];
                    shaderContent.addContent(tempContent);
                }
                this._shaderContentDict[varName] = shaderContent;
            }
            else {
                shaderContent = this._shaderContentDict[varName];
            }
            if (shaderContent == null) {
                return null;
            }
            for (i = 0; i < shaderContent.attributeList.length; i++) {
                varName = shaderContent.attributeList[i].varName;
                usage[varName] = shaderContent.attributeList[i].clone();
            }
            for (i = 0; i < shaderContent.varyingList.length; i++) {
                varName = shaderContent.varyingList[i].varName;
                if (!usage[varName]) {
                    usage[varName] = shaderContent.varyingList[i].clone();
                }
            }
            for (i = 0; i < shaderContent.tempList.length; i++) {
                varName = shaderContent.tempList[i].varName;
                usage[varName] = shaderContent.tempList[i].clone();
            }
            for (i = 0; i < shaderContent.uniformList.length; i++) {
                varName = shaderContent.uniformList[i].varName;
                usage[varName] = shaderContent.uniformList[i].clone();
            }
            for (i = 0; i < shaderContent.constList.length; i++) {
                varName = shaderContent.constList[i].varName;
                usage[varName] = shaderContent.constList[i].clone();
            }
            for (i = 0; i < shaderContent.sampler2DList.length; i++) {
                varName = shaderContent.sampler2DList[i].varName;
                usage[varName] = shaderContent.sampler2DList[i].clone();
            }
            for (i = 0; i < shaderContent.sampler3DList.length; i++) {
                varName = shaderContent.sampler3DList[i].varName;
                usage[varName] = shaderContent.sampler3DList[i].clone();
            }
            ///usage.sampler3DList.length = 0; 
            ///for (i = 0; i < shaderContent.sampler3DList.length; i++) {
            ///    var sampler3D: GLSL.Sampler3D = shaderContent.sampler3DList[i].clone();
            ///    sampler3D.activeTextureIndex = this.getTextureIndex(i);
            ///    sampler3D.index = i;
            ///    usage.sampler3DList.push(sampler3D);
            ///}
            return shaderContent;
        };
        ///************************************************************************
        ///-shader helper----------------------------------------------------------
        ///------------------------------------------------------------------------
        ShaderSystemTool.prototype.readShader = function (str) {
            var content = new egret3d.GLSL.ShaderContent();
            var shaderStr = egret3d.StringUtil.processShaderFile(str);
            var source = egret3d.StringUtil.parseContent(shaderStr);
            var shaderLine = source.concat();
            while (shaderLine.length > 0) {
                var line = shaderLine[0];
                shaderLine.shift();
                var ret = this.getLineType(line);
                var index = -1;
                index = ret.indexOf("struct");
                if (index != -1) {
                    var tempArray = ret.split(" ");
                    var structStr = line;
                    content.addStruct(tempArray[1], structStr);
                    this.processStruct(tempArray[1], structStr, content);
                    continue;
                }
                index = ret.indexOf("function");
                if (index != -1) {
                    var tempArray = ret.split(" ");
                    var func = line;
                    content.addFunc(tempArray[1], func);
                    continue;
                }
                index = ret.indexOf("unknown");
                if (index != -1) {
                    var tempArray = egret3d.StringUtil.parseLines(line);
                    var key = egret3d.StringUtil.getVarKey(tempArray);
                    var valueType = egret3d.StringUtil.getVarType(tempArray);
                    if (valueType == "sampler2D") {
                        var sampler2D = this.getSampler2D(line);
                        if (sampler2D)
                            content.addVar(sampler2D);
                    }
                    else if (valueType == "samplerCube") {
                        var sampler3D = this.getSampler3D(line);
                        if (sampler3D)
                            content.addVar(sampler3D);
                    }
                    else {
                        if (key == "attribute") {
                            var att = this.getAttribute(line);
                            if (att)
                                content.addVar(att);
                        }
                        else if (key == "varying") {
                            var varying = this.getVarying(line);
                            if (varying)
                                content.addVar(varying);
                        }
                        else if (key == "uniform") {
                            var uniform = this.getUniform(line);
                            if (uniform)
                                content.addVar(uniform);
                        }
                        else if (key == "const") {
                            var ConstVar = this.getConst(line);
                            if (ConstVar)
                                content.addVar(ConstVar);
                        }
                        else {
                            content.addVar(this.getTemper(line));
                        }
                    }
                    continue;
                }
            }
            return content;
        };
        ShaderSystemTool.prototype.getLineType = function (line) {
            var index = line.indexOf("{");
            if (index > 0) {
                var firstStr = line.substr(0, index);
                if (firstStr.indexOf("struct") >= 0) {
                    var s_pos = firstStr.lastIndexOf(" ");
                    s_pos++;
                    var structName = firstStr.substr(s_pos, firstStr.length - s_pos);
                    return ("struct " + structName);
                }
                if (firstStr.indexOf("=") < 0) {
                    var pos = line.indexOf("(");
                    var s_pos = line.lastIndexOf(" ", pos);
                    s_pos++;
                    var func = line.substr(s_pos, pos - s_pos);
                    return ("function " + func);
                }
            }
            return "unknown";
        };
        ShaderSystemTool.prototype.getAttribute = function (shaderLine) {
            var tempStr = shaderLine;
            var tmpName;
            var valueType;
            var attribute;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            tmpName = egret3d.StringUtil.getVarName(tempArray);
            valueType = egret3d.StringUtil.getVarType(tempArray);
            attribute = new egret3d.GLSL.Attribute(tmpName, valueType);
            return attribute;
        };
        ShaderSystemTool.prototype.getTemper = function (shaderLine) {
            var tempStr = shaderLine;
            var tmpName;
            var valueType;
            var tmpVar;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            tmpName = egret3d.StringUtil.getVarName(tempArray);
            valueType = egret3d.StringUtil.getVarType(tempArray);
            tmpVar = new egret3d.GLSL.TmpVar(tmpName, valueType);
            return tmpVar;
        };
        ShaderSystemTool.prototype.getVarying = function (shaderLine) {
            var tempStr = shaderLine;
            var varyingName;
            var valueType;
            var varying;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            varyingName = egret3d.StringUtil.getVarName(tempArray);
            valueType = egret3d.StringUtil.getVarType(tempArray);
            varying = new egret3d.GLSL.Varying(varyingName, valueType);
            return varying;
        };
        ShaderSystemTool.prototype.getUniform = function (shaderLine) {
            var tempStr = shaderLine;
            var uniformName;
            var valueType;
            var uniform;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            uniformName = egret3d.StringUtil.getVarName(tempArray);
            valueType = egret3d.StringUtil.getVarType(tempArray);
            uniform = new egret3d.GLSL.Uniform(uniformName, valueType);
            return uniform;
        };
        ShaderSystemTool.prototype.getConst = function (shaderLine) {
            var tempStr = shaderLine;
            var constVarName;
            var valueType;
            var varValue;
            var constVar;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            constVarName = egret3d.StringUtil.getVarName(tempArray);
            valueType = egret3d.StringUtil.getVarType(tempArray);
            varValue = egret3d.StringUtil.getVarValue(tempArray);
            constVar = new egret3d.GLSL.ConstVar(constVarName, valueType, varValue);
            return constVar;
        };
        ShaderSystemTool.prototype.getSampler2D = function (shaderLine) {
            var tempStr = shaderLine;
            var sampler2DName;
            var valueType;
            var sampler2D;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            sampler2DName = egret3d.StringUtil.getVarName(tempArray);
            sampler2D = new egret3d.GLSL.Sampler2D(sampler2DName);
            return sampler2D;
        };
        ShaderSystemTool.prototype.getSampler3D = function (shaderLine) {
            var tempStr = shaderLine;
            var sampler3DName;
            var valueType;
            var sampler3D;
            var tempArray = egret3d.StringUtil.parseLines(tempStr);
            sampler3DName = egret3d.StringUtil.getVarName(tempArray);
            sampler3D = new egret3d.GLSL.Sampler3D(sampler3DName);
            return sampler3D;
        };
        ShaderSystemTool.prototype.filterCharacter = function (name) {
            var src = name;
            var dest = src;
            for (var i = 0; i < ShaderSystemTool._filterChar.length; ++i) {
                while (true) {
                    dest = src.replace(ShaderSystemTool._filterChar[i], "");
                    if (src == dest) {
                        break;
                    }
                    src = dest;
                }
            }
            return dest;
        };
        ShaderSystemTool.prototype.processStruct = function (name, structStr, content) {
            var pos = structStr.lastIndexOf("}");
            pos++;
            var end = structStr.lastIndexOf(";");
            var varName = structStr.substr(pos, end - pos);
            var varList = egret3d.StringUtil.parseLines(varName);
            for (var i = 0; i < varList.length; ++i) {
                var varTmp = this.getTemper(name + " " + varList[i] + ";");
                if (varTmp)
                    content.addVar(varTmp);
            }
        };
        ShaderSystemTool._filterChar = [" ", "  ", ";", "\n", "\r", "\t", "\n", "\r", "\t"];
        return ShaderSystemTool;
    })();
    egret3d.ShaderSystemTool = ShaderSystemTool;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.MethodUsageData
    * @classdesc
    * 方法中需要用到的数据
    */
    var MethodUsageData = (function () {
        function MethodUsageData() {
            /**
             * @language zh_CN
             */
            this.passNeedReset = false;
            //public diffuseTex: GLSL.Sampler2D;
            //public normalTex: GLSL.Sampler2D;
            //public specularTex: GLSL.Sampler2D;
            //public texture2D_1: GLSL.Sampler2D;
            //public texture2D_4: GLSL.Sampler2D;
            //public texture2D_5: GLSL.Sampler2D;
            //public sky_texture: GLSL.Sampler2D;
            //public shadowMapTex: GLSL.Sampler2D;
            //public lightMapTex: GLSL.Sampler2D;
            //public maskTex: GLSL.Sampler2D;
            //public splat_0Tex: GLSL.Sampler2D;
            //public splat_1Tex: GLSL.Sampler2D;
            //public splat_2Tex: GLSL.Sampler2D;
            //public splat_3Tex: GLSL.Sampler2D;
            /**
             * @language zh_CN
             */
            this.sampler2DList = new Array();
            /**
             * @language zh_CN
             */
            this.sampler3DList = new Array();
            //----------------------------------------------
            /**
             * @language zh_CN
             */
            this.vsMethodList = new Array();
            /**
             * @language zh_CN
             */
            this.fsMethodList = new Array();
            /**
             * @language zh_CN
             */
            this.effectMethodList = new Array();
        }
        /**
         * @language zh_CN
         */
        MethodUsageData.prototype.dispose = function () {
        };
        return MethodUsageData;
    })();
    egret3d.MethodUsageData = MethodUsageData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.MaterialData
    * @classdesc
    * 材质数据
    */
    var MaterialData = (function () {
        function MaterialData() {
            /**
            * @language zh_CN
            * 材质类型
            */
            this.matType = egret3d.MaterialType.DIFFUSE;
            /**
            * @language zh_CN
            * diffuse pass usage data
            */
            this.diffusePassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * 深度 pass usage data
            */
            this.depthPassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * 法线 pass usage data
            */
            this.normalPassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * position pass usage data
            */
            this.positionPassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * post pass usage data
            */
            this.postPassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * 灯光 pass usage data
            */
            this.lightPassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * 阴影 pass usage data
            */
            this.shadowPassUsageData = new egret3d.MethodUsageData();
            /**
            * @language zh_CN
            * 渲染模式
            */
            this.drawMode = egret3d.DrawMode.TRIANGLES;
            /**
            * @language zh_CN
            * 法线贴图
            */
            this.normalTex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 特效贴图
            */
            this.specularTex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 灯光贴图
            */
            this.lightMapTex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * ao 贴图
            */
            this.aoMapTex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 环境贴图
            */
            this.environmentMapTex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * mask 贴图
            */
            this.maskTex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_0 贴图
            */
            this.splat_0Tex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_1 贴图
            */
            this.splat_1Tex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_2 贴图
            */
            this.splat_2Tex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * splat_3 贴图
            */
            this.splat_3Tex = egret3d.CheckerboardTexture.texture;
            /**
            * @language zh_CN
            * 方向光列表
            */
            this.directLightList = new Array();
            /**
            * @language zh_CN
            * 聚光灯列表
            */
            this.sportLightList = new Array();
            /**
            * @language zh_CN
            * 点光源列表
            */
            this.pointLightList = new Array();
            /**
            * @language zh_CN
            *
            */
            this.layer = 0;
            /**
            * @language zh_CN
            *
            */
            this.castShadow = false;
            /**
            * @language zh_CN
            *
            */
            this.acceptShadow = true;
            /**
            * @language zh_CN
            *
            */
            this.depthTest = true;
            /**
            * @language zh_CN
            *
            */
            this.smooth = true;
            /**
            * @language zh_CN
            *
            */
            this.blendMode = egret3d.BlendMode.NORMAL;
            /**
            * @language zh_CN
            *
            */
            this.alphaBlending = false;
            /**
            * @language zh_CN
            *
            */
            this.ambientColor = 0x666666;
            //public ambientColor: number = 0x00235c;
            /**
            * @language zh_CN
            *
            */
            this.diffuseColor = 0xffffff;
            /**
            * @language zh_CN
            *
            */
            this.specularColor = 0xffffff;
            /**
            * @language zh_CN
            *
            */
            this.shininess = 8.0;
            /**
            * @language zh_CN
            *
            */
            this.cutAlpha = 0.7;
            /**
            * @language zh_CN
            *
            */
            this.repeat = false;
            /**
            * @language zh_CN
            *
            */
            this.bothside = false;
            /**
            * @language zh_CN
            *
            */
            this.alpha = 1;
            /**
            * @language zh_CN
            *
            */
            this.specularPower = 1.0;
            /**
            * @language zh_CN
            *
            */
            this.ambientPower = 1.0;
            /**
            * @language zh_CN
            *
            */
            this.diffusePower = 1.0;
            /**
            * @language zh_CN
            *
            */
            this.normalPower = 1.0;
            /**
            * @language zh_CN
            *
            */
            this.materialDataNeedChange = true;
            /**
            * @language zh_CN
            *
            */
            this.textureChange = false;
            /**
            * @language zh_CN
            *
            */
            this.passChange = true;
            /**
            * @language zh_CN
            *
            */
            this.cullFrontOrBack = egret3d.Egret3DDrive.BACK;
        }
        /**
        * @language zh_CN
        *
        * @returns MaterialData
        */
        MaterialData.prototype.clone = function () {
            var data = new MaterialData();
            data.diffusePassUsageData = this.diffusePassUsageData;
            data.depthPassUsageData = this.depthPassUsageData;
            data.normalPassUsageData = this.normalPassUsageData;
            data.positionPassUsageData = this.positionPassUsageData;
            data.postPassUsageData = this.positionPassUsageData;
            data.lightPassUsageData = this.positionPassUsageData;
            data.shadowPassUsageData = this.positionPassUsageData;
            data.diffuseTex = egret3d.CheckerboardTexture.texture;
            data.textureChange = true;
            data.matType = egret3d.MaterialType.DIFFUSE;
            data.drawMode = this.drawMode;
            data.context3D = this.context3D;
            data.diffuseTex = this.diffuseTex;
            data.specularTex = this.specularTex;
            data.lightMapTex = this.lightMapTex;
            data.environmentMapTex = this.environmentMapTex;
            data.shadowMapTex = this.shadowMapTex;
            data.splat_0Tex = this.splat_0Tex;
            data.splat_1Tex = this.splat_1Tex;
            data.splat_2Tex = this.splat_2Tex;
            data.splat_3Tex = this.splat_3Tex;
            data.layer = this.layer;
            data.castShadow = this.castShadow;
            data.acceptShadow = this.acceptShadow;
            data.depthTest = this.depthTest;
            data.smooth = this.smooth;
            data.blendMode = this.blendMode;
            data.blend_src = this.blend_src;
            data.blend_dest = this.blend_dest;
            data.ambientColor = this.ambientColor;
            data.diffuseColor = this.diffuseColor;
            data.specularColor = this.specularColor;
            data.shininess = this.shininess;
            data.shininess = this.shininess;
            data.cutAlpha = this.cutAlpha;
            data.alpha = this.alpha;
            data.specularPower = this.specularPower;
            data.ambientPower = this.ambientPower;
            data.diffusePower = this.diffusePower;
            data.normalPower = this.normalPower;
            data.passChange = this.passChange;
            data.materialDataNeedChange = this.materialDataNeedChange;
            data.textureChange = true;
            data.cullFrontOrBack = this.cullFrontOrBack;
            //material state
            return data;
        };
        /**
        * @language zh_CN
        *
        * @returns
        */
        MaterialData.prototype.dispose = function () {
            if (this.diffusePassUsageData)
                this.diffusePassUsageData.dispose();
            if (this.depthPassUsageData)
                this.depthPassUsageData.dispose();
            if (this.normalPassUsageData)
                this.normalPassUsageData.dispose();
            if (this.normalPassUsageData)
                this.normalPassUsageData.dispose();
            if (this.positionPassUsageData)
                this.positionPassUsageData.dispose();
            if (this.postPassUsageData)
                this.postPassUsageData.dispose();
            if (this.lightPassUsageData)
                this.lightPassUsageData.dispose();
            if (this.shadowPassUsageData)
                this.shadowPassUsageData.dispose();
            if (this.directLightList.length > 0) {
                this.directLightList.length = 0;
                this.directLightList = null;
            }
            if (this.sportLightList.length > 0) {
                this.sportLightList.length = 0;
                this.sportLightList = null;
            }
            if (this.pointLightList.length > 0) {
                this.pointLightList.length = 0;
                this.pointLightList = null;
            }
        };
        return MaterialData;
    })();
    egret3d.MaterialData = MaterialData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.MethodBase
    * @classdesc
    * 所有方法的基类
    */
    var MethodBase = (function () {
        /**
         * @language zh_CN
         */
        function MethodBase() {
            /**
             * @language zh_CN
             */
            this.vsMethodName = "";
            /**
             * @language zh_CN
             */
            this.fsMethodName = "";
            /**
             * @language zh_CN
             */
            this.acceptShadow = false;
        }
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        MethodBase.prototype.setMaterialData = function (materialData, usage) {
            this.usage = usage;
            this.materialData = materialData;
        };
        Object.defineProperty(MethodBase.prototype, "vertexMethodName", {
            /**
             * @language zh_CN
             */
            get: function () {
                return this.vsMethodName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MethodBase.prototype, "fragMethodName", {
            /**
             * @language zh_CN
             */
            get: function () {
                return this.fsMethodName;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        MethodBase.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            //change constData
            this.context3D = context3D;
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        MethodBase.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         */
        MethodBase.prototype.dispose = function () {
        };
        return MethodBase;
    })();
    egret3d.MethodBase = MethodBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.VertexShader
    * @classdesc
    * 顶点着色器
    */
    var VertexShader = (function (_super) {
        __extends(VertexShader, _super);
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        function VertexShader(materialData, usage) {
            _super.call(this, materialData, usage);
        }
        /**
         * @language zh_CN
         * @param geometry
         */
        VertexShader.prototype.setVertexShader = function (geometry) {
            var baseMethod;
            //根据 geomtry 类型 确定用什么 基本的 顶点着色器
            //拿到 顶点method list
            switch (geometry.geomtryType) {
                case egret3d.GeometryType.Static:
                    baseMethod = new egret3d.StaticVertexMethod();
                    this.useage.vsMethodList.push(baseMethod);
                    this.addShader(baseMethod.vertexMethodName);
                    break;
                case egret3d.GeometryType.Skin:
                    baseMethod = new egret3d.SkinVertexMethod();
                    this.useage.vsMethodList.push(baseMethod);
                    this.addShader(baseMethod.vertexMethodName);
                    baseMethod.acceptShadow = this.materialData.acceptShadow;
                    break;
                case egret3d.GeometryType.Particle:
                    baseMethod = new ParticleVertexMethod();
                    this.useage.vsMethodList.push(baseMethod);
                    this.addShader(baseMethod.vertexMethodName);
                    this.addEnd("particle_vertexEnd");
                    break;
                default: break;
            }
            baseMethod.acceptShadow = this.materialData.acceptShadow;
            if (this.materialData.acceptShadow) {
                this.addShader("Shadow_vertex_static");
            }
        };
        /**
         * @language zh_CN
         * @returns string
         */
        VertexShader.prototype.getShaderSource = function () {
            var shaderSource = _super.prototype.getShaderSource.call(this);
            var index = shaderSource.lastIndexOf("}");
            var endS = shaderSource.substr(index, shaderSource.length - index);
            shaderSource = shaderSource.substr(0, index);
            shaderSource += "   gl_Position = temp_p; \r\n";
            shaderSource += endS;
            return shaderSource;
        };
        /**
         * @language zh_CN
         */
        VertexShader.prototype.build = function () {
            for (this.index = 0; this.index < this.useage.vsMethodList.length; this.index++) {
                this.useage.vsMethodList[this.index].setMaterialData(this.materialData, this.useage);
            }
        };
        /**
         * @language zh_CN
         * @param method
         */
        VertexShader.prototype.addMethod = function (method) {
            this.stateChange = true;
            this.useage.vsMethodList.push(method);
        };
        return VertexShader;
    })(egret3d.GLSL.ShaderBase);
    egret3d.VertexShader = VertexShader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.PixelShader
    * @classdesc
    * 像素着色器
    */
    var PixelShader = (function (_super) {
        __extends(PixelShader, _super);
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        function PixelShader(materialData, usage) {
            _super.call(this, materialData, usage);
            this.useage = usage;
            this.materialData = materialData;
        }
        /**
         * @language zh_CN
         * @param method
         */
        PixelShader.prototype.addMethod = function (method) {
            this.stateChange = true;
            this.useage.fsMethodList.push(method);
        };
        /**
         * @language zh_CN
         * @param method
         */
        PixelShader.prototype.addEffectMethod = function (method) {
            this.stateChange = true;
            this.useage.effectMethodList.push(method);
        };
        /**
         * @language zh_CN
         */
        PixelShader.prototype.getShaderSource = function () {
            var shaderSource = _super.prototype.getShaderSource.call(this);
            var index = shaderSource.lastIndexOf("}");
            var endS = shaderSource.substr(index, shaderSource.length - index);
            shaderSource = shaderSource.substr(0, index);
            shaderSource += "   gl_FragColor = diffuse;\r\n";
            shaderSource += endS;
            return shaderSource;
        };
        /**
         * @language zh_CN
         */
        PixelShader.prototype.build = function () {
            this.stateChange = false;
            for (this.index = 0; this.index < this.useage.fsMethodList.length; this.index++) {
                this.useage.fsMethodList[this.index].setMaterialData(this.materialData, this.useage);
            }
            this.stateChange = false;
            for (this.index = 0; this.index < this.useage.effectMethodList.length; this.index++) {
                this.useage.effectMethodList[this.index].setMaterialData(this.materialData, this.useage);
            }
        };
        return PixelShader;
    })(egret3d.GLSL.ShaderBase);
    egret3d.PixelShader = PixelShader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.StaticVertexMethod
    * @classdesc
    * 静态顶点方法
    */
    var StaticVertexMethod = (function (_super) {
        __extends(StaticVertexMethod, _super);
        /**
         * @language zh_CN
         * StaticVertexMethod
         */
        function StaticVertexMethod() {
            _super.call(this);
            this.normalMatrix = new egret3d.Matrix4_4();
            this.vsMethodName = "default_vertex";
        }
        /**
        -pos 3 12 0
        -normal 3 12 12
        -tangent 3 12 24
        -color 4 16 36
        -uv0 2  8 52
        -uv1 8 60
        */
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         */
        StaticVertexMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry) {
            // 绑定同时包含顶点位置和颜色信息的缓冲
            geometry.sharedVertexBuffer = context3D.creatVertexBuffer(geometry.verticesData);
            geometry.numberOfVertices = geometry.verticesData.length / geometry.vertexAttLength;
            geometry.vertexSizeInBytes = geometry.positionSize * Float32Array.BYTES_PER_ELEMENT +
                3 * Float32Array.BYTES_PER_ELEMENT +
                3 * Float32Array.BYTES_PER_ELEMENT +
                4 * Float32Array.BYTES_PER_ELEMENT +
                2 * Float32Array.BYTES_PER_ELEMENT +
                2 * Float32Array.BYTES_PER_ELEMENT; //uv2 60
            geometry.sharedIndexBuffer = context3D.creatIndexBuffer(geometry.indexData);
            context3D.bindVertexBuffer(geometry.sharedVertexBuffer);
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_position.name);
            this.usage.attribute_normal.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_normal.name);
            this.usage.attribute_tangent.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_tangent.name);
            this.usage.attribute_color.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_color.name);
            this.usage.attribute_uv0.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_uv0.name);
            this.usage.attribute_uv1.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_uv1.name);
            this.usage.uniform_ModelMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_ModelMatrix.name);
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_ProjectionMatrix.name);
            this.usage.uniform_normalMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_normalMatrix.name);
            this.usage.uniform_eyepos.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_eyepos.name);
            if (this.acceptShadow && this.usage.uniform_shadowMatrix)
                this.usage.uniform_shadowMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_shadowMatrix.name);
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         */
        StaticVertexMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry) {
            // 绑定同时包含顶点位置和颜色信息的缓冲
            context3D.bindVertexBuffer(geometry.sharedVertexBuffer);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 0);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_normal.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 12);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_tangent.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 24);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_color.uniformIndex, 4, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 36);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_uv0.uniformIndex, 2, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 52);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_uv1.uniformIndex, 2, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 60);
            this.normalMatrix.copyFrom(modeltransform);
            this.normalMatrix.invert();
            this.normalMatrix.transpose();
            this.normalMatrix.appendScale(1, 1, 1);
            context3D.uniformMatrix4fv(this.usage.uniform_ModelMatrix.uniformIndex, false, modeltransform.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, camera3D.viewProjectionMatrix.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_normalMatrix.uniformIndex, false, this.normalMatrix.rawData);
            context3D.uniform3f(this.usage.uniform_eyepos.uniformIndex, camera3D.x, camera3D.y, camera3D.z);
            if (this.acceptShadow && this.usage.uniform_shadowMatrix)
                context3D.uniformMatrix4fv(this.usage.uniform_shadowMatrix.uniformIndex, false, egret3d.ShadowRender.shadowCamera3D.viewProjectionMatrix.rawData);
        };
        return StaticVertexMethod;
    })(egret3d.MethodBase);
    egret3d.StaticVertexMethod = StaticVertexMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ShadowVertexMethod
    * @classdesc
    * 阴影顶点方法
    */
    var ShadowVertexMethod = (function (_super) {
        __extends(ShadowVertexMethod, _super);
        /**
         * @language zh_CN
         */
        function ShadowVertexMethod() {
            _super.call(this);
            this.vsMethodName = "Shadow_vertex_static";
        }
        /**
        -pos 3 12 0
        -normal 3 12 12
        -tangent 3 12 24
        -color 4 16 36
        -uv0 2  8 52
        -uv1 8 60
        */
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         */
        ShadowVertexMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry) {
            // 绑定同时包含顶点位置和颜色信息的缓冲
            geometry.sharedVertexBuffer = context3D.creatVertexBuffer(geometry.verticesData);
            geometry.numberOfVertices = geometry.verticesData.length / geometry.vertexAttLength;
            geometry.vertexSizeInBytes = geometry.positionSize * Float32Array.BYTES_PER_ELEMENT +
                3 * Float32Array.BYTES_PER_ELEMENT +
                3 * Float32Array.BYTES_PER_ELEMENT +
                4 * Float32Array.BYTES_PER_ELEMENT +
                2 * Float32Array.BYTES_PER_ELEMENT +
                2 * Float32Array.BYTES_PER_ELEMENT; //uv2 60
            geometry.sharedIndexBuffer = context3D.creatIndexBuffer(geometry.indexData);
            context3D.bindVertexBuffer(geometry.sharedVertexBuffer);
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_position.name);
            this.usage.uniform_ModelMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_ModelMatrix.name);
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_ProjectionMatrix.name);
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         */
        ShadowVertexMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry) {
            // 绑定同时包含顶点位置和颜色信息的缓冲
            context3D.bindVertexBuffer(geometry.sharedVertexBuffer);
            context3D.vertexAttribPointer(program3D, this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 0);
            context3D.uniformMatrix4fv(this.usage.uniform_ModelMatrix.uniformIndex, false, modeltransform.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, camera3D.viewProjectionMatrix.rawData);
        };
        return ShadowVertexMethod;
    })(egret3d.MethodBase);
    egret3d.ShadowVertexMethod = ShadowVertexMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.SkinVertexMethod
    * @classdesc
    * 蒙皮顶点方法
    */
    var SkinVertexMethod = (function (_super) {
        __extends(SkinVertexMethod, _super);
        /**
         * @language zh_CN
         */
        function SkinVertexMethod() {
            _super.call(this);
            this.normalMatrix = new egret3d.Matrix4_4();
            this.vsMethodName = "skeleton_vertex";
        }
        /**
        -pos 3 12 0
        -normal 3 12 12
        -tangent 3 12 24
        -color 4 16 36
        -uv0 2  8 52
        -uv1 8 60
        -boneIndex  4 16 68
        -boneWeight 4 16 84
        */
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        SkinVertexMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            // 绑定同时包含顶点位置和颜色信息的缓冲
            geometry.sharedVertexBuffer = context3D.creatVertexBuffer(geometry.verticesData);
            geometry.numberOfVertices = geometry.verticesData.length / geometry.vertexAttLength;
            geometry.vertexSizeInBytes = geometry.positionSize * Float32Array.BYTES_PER_ELEMENT +
                3 * Float32Array.BYTES_PER_ELEMENT +
                3 * Float32Array.BYTES_PER_ELEMENT +
                4 * Float32Array.BYTES_PER_ELEMENT +
                2 * Float32Array.BYTES_PER_ELEMENT +
                2 * Float32Array.BYTES_PER_ELEMENT +
                4 * Float32Array.BYTES_PER_ELEMENT +
                4 * Float32Array.BYTES_PER_ELEMENT; //boneWeight 84
            geometry.sharedIndexBuffer = context3D.creatIndexBuffer(geometry.indexData);
            context3D.bindVertexBuffer(geometry.sharedVertexBuffer);
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_position.varName);
            this.usage.attribute_normal.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_normal.varName);
            this.usage.attribute_tangent.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_tangent.varName);
            this.usage.attribute_color.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_color.varName);
            this.usage.attribute_uv0.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_uv0.varName);
            this.usage.attribute_uv1.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_uv1.varName);
            this.usage.attribute_boneIndex.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_boneIndex.varName);
            this.usage.attribute_boneWeight.uniformIndex = context3D.getShaderAttribLocation(program3D, this.usage.attribute_boneWeight.varName);
            this.usage.uniform_ModelMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_ModelMatrix.varName);
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_ProjectionMatrix.varName);
            this.usage.uniform_normalMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_normalMatrix.varName);
            this.usage.uniform_eyepos.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_eyepos.varName);
            this.usage.uniform_PoseMatrix.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_PoseMatrix.varName);
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        SkinVertexMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            // 绑定同时包含顶点位置和颜色信息的缓冲
            context3D.bindVertexBuffer(geometry.sharedVertexBuffer);
            //if (!program3D.vertextAttribActive){
            //  context3D.vertexAttribPointer(program3D, this.usage.attribute_position.index, 3, egret3d.FLOAT, false, this.materialData.geomtryBase.vertexSizeInBytes, 0);
            //  context3D.vertexAttribPointer(program3D, this.usage.attribute_normal.index, 3, egret3d.FLOAT, false, this.materialData.geomtryBase.vertexSizeInBytes, 12);
            //  context3D.vertexAttribPointer(program3D, this.usage.attribute_tangent.index, 3, egret3d.FLOAT, false, this.materialData.geomtryBase.vertexSizeInBytes, 24);
            //  context3D.vertexAttribPointer(program3D, this.usage.attribute_uv0.index, 2, egret3d.FLOAT, false, this.materialData.geomtryBase.vertexSizeInBytes, 52);
            //  context3D.vertexAttribPointer(program3D, this.usage.attribute_boneIndex.index, 4, egret3d.FLOAT, false, this.materialData.geomtryBase.vertexSizeInBytes, 68);
            //  context3D.vertexAttribPointer(program3D, this.usage.attribute_boneWeight.index, 4, egret3d.FLOAT, false, this.materialData.geomtryBase.vertexSizeInBytes, 84);
            // }
            context3D.gl.vertexAttribPointer(this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 0);
            context3D.gl.enableVertexAttribArray(this.usage.attribute_position.uniformIndex);
            context3D.gl.vertexAttribPointer(this.usage.attribute_normal.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 12);
            context3D.gl.enableVertexAttribArray(this.usage.attribute_normal.uniformIndex);
            context3D.gl.vertexAttribPointer(this.usage.attribute_tangent.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 24);
            context3D.gl.enableVertexAttribArray(this.usage.attribute_tangent.uniformIndex);
            context3D.gl.vertexAttribPointer(this.usage.attribute_uv0.uniformIndex, 2, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 52);
            context3D.gl.enableVertexAttribArray(this.usage.attribute_uv0.uniformIndex);
            context3D.gl.vertexAttribPointer(this.usage.attribute_boneIndex.uniformIndex, 4, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 68);
            context3D.gl.enableVertexAttribArray(this.usage.attribute_boneIndex.uniformIndex);
            context3D.gl.vertexAttribPointer(this.usage.attribute_boneWeight.uniformIndex, 4, egret3d.Egret3DDrive.FLOAT, false, geometry.vertexSizeInBytes, 84);
            context3D.gl.enableVertexAttribArray(this.usage.attribute_boneWeight.uniformIndex);
            this.normalMatrix.copyFrom(modeltransform);
            this.normalMatrix.invert();
            this.normalMatrix.transpose();
            context3D.uniformMatrix4fv(this.usage.uniform_ModelMatrix.uniformIndex, false, modeltransform.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, camera3D.viewProjectionMatrix.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_normalMatrix.uniformIndex, false, this.normalMatrix.rawData);
            context3D.uniform3f(this.usage.uniform_eyepos.uniformIndex, camera3D.x, camera3D.y, camera3D.z);
            context3D.uniform4fv(this.usage.uniform_PoseMatrix.uniformIndex, animation.currentSkeletonMatrixData);
        };
        return SkinVertexMethod;
    })(egret3d.MethodBase);
    egret3d.SkinVertexMethod = SkinVertexMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ShadowMapMethod
    * @classdesc
    * 阴影采样
    */
    var ShadowMapMethod = (function (_super) {
        __extends(ShadowMapMethod, _super);
        /**
         * @language zh_CN
         */
        function ShadowMapMethod() {
            _super.call(this);
            this.fsMethodName = "Shadow_fragment";
        }
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ShadowMapMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.activate.call(this, context3D, program3D, modeltransform, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ShadowMapMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
        };
        return ShadowMapMethod;
    })(egret3d.MethodBase);
    egret3d.ShadowMapMethod = ShadowMapMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.TerrainMethod
    * @classdesc
    * 地形图方法
    */
    var TerrainMethod = (function (_super) {
        __extends(TerrainMethod, _super);
        /**
         * @language zh_CN
         */
        function TerrainMethod() {
            _super.call(this);
            this.uvData = new Float32Array(8);
            this.fsMethodName = "diffuseMethod_fragment";
            this.uvData[0] = 1.0;
            this.uvData[1] = 1.0;
            this.uvData[2] = 1.0;
            this.uvData[3] = 1.0;
            this.uvData[4] = 1.0;
            this.uvData[5] = 1.0;
            this.uvData[6] = 1.0;
            this.uvData[7] = 1.0;
        }
        /**
         * @language zh_CN
         * 设置UVTitling
         * @param index
         * @param x
         * @param y
         */
        TerrainMethod.prototype.setUVTitling = function (index, x, y) {
            this.uvData[index * 2] = x;
            this.uvData[index * 2 + 1] = y;
        };
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        TerrainMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.activate.call(this, context3D, program3D, modeltransform, camera3D, geometry, animation);
            this.usage.uniform_materialSource.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_materialSource.varName);
            this.uvIndex = context3D.getUniformLocation(program3D, "uvs");
            if (this.materialData.directLightList.length > 0) {
                this.usage.uniform_directLightSource.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_directLightSource.varName);
            }
            if (this.materialData.sportLightList.length > 0) {
                this.usage.uniform_sportLightSource.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_sportLightSource.varName);
            }
            if (this.materialData.pointLightList.length > 0) {
                this.usage.uniform_pointLightSource.uniformIndex = context3D.getUniformLocation(program3D, this.usage.uniform_pointLightSource.varName);
            }
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        TerrainMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            if (this.materialData.materialDataNeedChange) {
                this.materialData.materialDataNeedChange = false;
                this.materialData.diffusePassUsageData.materialSourceData[0] = this.materialData.diffuseColor >> 24 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[1] = this.materialData.diffuseColor >> 16 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[2] = this.materialData.diffuseColor >> 8 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[3] = this.materialData.ambientColor >> 24 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[4] = this.materialData.ambientColor >> 16 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[5] = this.materialData.ambientColor >> 8 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[6] = this.materialData.specularColor >> 24 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[7] = this.materialData.specularColor >> 16 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[8] = this.materialData.specularColor >> 8 & 0xff / 255;
                this.materialData.diffusePassUsageData.materialSourceData[9] = this.materialData.alpha;
                this.materialData.diffusePassUsageData.materialSourceData[10] = this.materialData.cutAlpha;
                this.materialData.diffusePassUsageData.materialSourceData[11] = this.materialData.shininess;
            }
            context3D.gl.uniform1fv(this.usage.uniform_materialSource.uniformIndex, this.materialData.diffusePassUsageData.materialSourceData);
            context3D.gl.uniform1fv(this.uvIndex, this.uvData);
            if (this.materialData.directLightList.length > 0) {
                context3D.gl.uniform1fv(this.usage.uniform_directLightSource.uniformIndex, this.usage.directLightData);
            }
            if (this.materialData.sportLightList.length > 0) {
                context3D.gl.uniform1fv(this.usage.uniform_sportLightSource.uniformIndex, this.usage.sportLightData);
            }
            if (this.materialData.pointLightList.length > 0) {
                context3D.gl.uniform1fv(this.usage.uniform_pointLightSource.uniformIndex, this.usage.pointLightData);
            }
        };
        /**
         * @language zh_CN
         * 销毁
         */
        TerrainMethod.prototype.dispose = function () {
        };
        return TerrainMethod;
    })(egret3d.MethodBase);
    egret3d.TerrainMethod = TerrainMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.NormalMethod
    * @classdesc
    * 法线方法
    */
    var NormalMethod = (function (_super) {
        __extends(NormalMethod, _super);
        /**
         * @language zh_CN
         */
        function NormalMethod() {
            _super.call(this);
            this.fsMethodName = "normalMethod_fragment";
        }
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        NormalMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.activate.call(this, context3D, program3D, modeltransform, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        NormalMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         * 销毁
         */
        NormalMethod.prototype.dispose = function () {
        };
        return NormalMethod;
    })(egret3d.MethodBase);
    egret3d.NormalMethod = NormalMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DepthMethod
    * @classdesc
    * 深度方法
    */
    var DepthMethod = (function (_super) {
        __extends(DepthMethod, _super);
        /**
         * @language zh_CN
         */
        function DepthMethod() {
            _super.call(this);
            this.fsMethodName = "";
        }
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DepthMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DepthMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         * 销毁
         */
        DepthMethod.prototype.dispose = function () {
        };
        return DepthMethod;
    })(egret3d.MethodBase);
    egret3d.DepthMethod = DepthMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DiffuseMethod
    * @classdesc
    * 漫反射方法
    */
    var DiffuseMethod = (function (_super) {
        __extends(DiffuseMethod, _super);
        /**
         * @language zh_CN
         */
        function DiffuseMethod() {
            _super.call(this);
            this.fsMethodName = "diffuseMethod_fragment";
        }
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DiffuseMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.activate.call(this, context3D, program3D, modeltransform, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DiffuseMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         * 销毁
         */
        DiffuseMethod.prototype.dispose = function () {
        };
        return DiffuseMethod;
    })(egret3d.MethodBase);
    egret3d.DiffuseMethod = DiffuseMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ShadowMapingMethod
    * @classdesc
    * 阴影映射
    */
    var ShadowMapingMethod = (function (_super) {
        __extends(ShadowMapingMethod, _super);
        /**
         * @language zh_CN
         */
        function ShadowMapingMethod() {
            _super.call(this);
            /**
             * @language zh_CN
             * 偏移值
             */
            this.bias = 0.002;
            /**
             * @language zh_CN
             * 阴影颜色红色通道值
             */
            this.shdowColorR = 0.3;
            /**
             * @language zh_CN
             * 阴影颜色绿色通道值
             */
            this.shdowColorG = 0.3;
            /**
             * @language zh_CN
             * 阴影颜色蓝色通道值
             */
            this.shdowColorB = 0.5;
            this.vsMethodName = "ShadowMapping_vertex";
            this.fsMethodName = "shadowmapping_fragment";
        }
        /**
         * @language zh_CN
         * 设置材质信息
         * @param materialData
         * @param usage
         */
        ShadowMapingMethod.prototype.setMaterialData = function (materialData, usage) {
            this.usage = usage;
            this.materialData = materialData;
            this.materialData.shadowMapTex = egret3d.ShadowRender.frameBuffer.texture;
        };
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ShadowMapingMethod.prototype.activate = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.activate.call(this, context3D, program3D, modeltransform, camera3D, geometry, animation);
            program3D["shadowParameterUniformIndex"] = context3D.getUniformLocation(program3D, "shadowParameter");
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ShadowMapingMethod.prototype.updata = function (context3D, program3D, modeltransform, camera3D, geometry, animation) {
            context3D.uniform4f(program3D["shadowParameterUniformIndex"], this.shdowColorR, this.shdowColorG, this.shdowColorB, this.bias);
        };
        return ShadowMapingMethod;
    })(egret3d.MethodBase);
    egret3d.ShadowMapingMethod = ShadowMapingMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.EffectMethod
    * @classdesc
    * 效果方法
    */
    var EffectMethod = (function () {
        /**
         * @language zh_CN
         * constructor
         */
        /**
         * @language zh_CN
         */
        function EffectMethod() {
            this.vsMethodName = "";
            this.fsMethodName = "";
        }
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        EffectMethod.prototype.setMaterialData = function (materialData, usage) {
            this.usage = usage;
            this.materialData = materialData;
        };
        Object.defineProperty(EffectMethod.prototype, "vertexMethodName", {
            /**
             * @language zh_CN
             * @returns string
             */
            get: function () {
                return this.vsMethodName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EffectMethod.prototype, "fragMethodName", {
            /**
             * @language zh_CN
             * @returns string
             */
            get: function () {
                return this.fsMethodName;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        EffectMethod.prototype.activateEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            //change constData
            this.context3D = context3D;
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        EffectMethod.prototype.updataEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         */
        EffectMethod.prototype.dispose = function () {
        };
        return EffectMethod;
    })();
    egret3d.EffectMethod = EffectMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.AOMapMethod
     * @classdesc
     * AO贴图方法
     */
    var AOMapMethod = (function (_super) {
        __extends(AOMapMethod, _super);
        /**
         * @language zh_CN
         * @param texture
         */
        function AOMapMethod(texture) {
            _super.call(this);
            this.fsMethodName = "AOMap_fragment";
            this.lightTexture = texture;
        }
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        AOMapMethod.prototype.setMaterialData = function (materialData, usage) {
            this.usage = usage;
            this.materialData = materialData;
            if (this.texture)
                this.materialData.aoMapTex = this.texture;
            else
                this.materialData.aoMapTex = egret3d.CheckerboardTexture.texture;
        };
        Object.defineProperty(AOMapMethod.prototype, "lightTexture", {
            /**
             * @language zh_CN
             * @param texture
             */
            set: function (texture) {
                this.texture = texture;
                if (texture) {
                    if (this.materialData) {
                        this.materialData.aoMapTex = texture;
                        this.materialData.textureChange = true;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        AOMapMethod.prototype.activateEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            this.context3D = context3D;
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        AOMapMethod.prototype.updataEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         */
        AOMapMethod.prototype.dispose = function () {
        };
        return AOMapMethod;
    })(egret3d.EffectMethod);
    egret3d.AOMapMethod = AOMapMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.LightMapMethod
    * @classdesc
    * 光照贴图方法
    */
    var LightMapMethod = (function (_super) {
        __extends(LightMapMethod, _super);
        /**
         * @language zh_CN
         * @param texture
         */
        function LightMapMethod(texture) {
            _super.call(this);
            this.fsMethodName = "lightMap_fragment";
            this.lightTexture = texture;
        }
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        LightMapMethod.prototype.setMaterialData = function (materialData, usage) {
            this.usage = usage;
            this.materialData = materialData;
            if (this.texture)
                this.materialData.lightMapTex = this.texture;
            else
                this.materialData.lightMapTex = egret3d.CheckerboardTexture.texture;
        };
        Object.defineProperty(LightMapMethod.prototype, "lightTexture", {
            /**
             * @language zh_CN
             * @param texture
             */
            set: function (texture) {
                this.texture = texture;
                if (texture) {
                    if (this.materialData) {
                        this.materialData.lightMapTex = texture;
                        this.materialData.textureChange = true;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        LightMapMethod.prototype.activateEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            this.context3D = context3D;
            //usage["uniform_globalFog"] = context3D.getUniformLocation(usage.program3D, "uniform_globalFog");
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        LightMapMethod.prototype.updataEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            // context3D.gl.uniform1fv(usage["uniform_globalFog"], this._data);
        };
        /**
         * @language zh_CN
         */
        LightMapMethod.prototype.dispose = function () {
        };
        return LightMapMethod;
    })(egret3d.EffectMethod);
    egret3d.LightMapMethod = LightMapMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.EnvironmentMappingMethod
    * @classdesc
    * 环境贴图方法
    */
    var EnvironmentMappingMethod = (function (_super) {
        __extends(EnvironmentMappingMethod, _super);
        /**
         * @language zh_CN
         * @param texture
         */
        function EnvironmentMappingMethod(texture) {
            _super.call(this);
            this.reflectValue = 1.0;
            this.fsMethodName = "EnvironmentMapping_fragment";
            this.lightTexture = texture;
        }
        Object.defineProperty(EnvironmentMappingMethod.prototype, "reflect", {
            /**
             *
             * @returns number
             */
            get: function () {
                return this.reflectValue;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this.reflectValue = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        EnvironmentMappingMethod.prototype.setMaterialData = function (materialData, usage) {
            this.usage = usage;
            this.materialData = materialData;
            if (this.texture)
                this.materialData.environmentMapTex = this.texture;
            else
                this.materialData.environmentMapTex = egret3d.CheckerboardTexture.texture;
        };
        Object.defineProperty(EnvironmentMappingMethod.prototype, "lightTexture", {
            /**
             * @language zh_CN
             * @param texture
             */
            set: function (texture) {
                this.texture = texture;
                if (texture) {
                    if (this.materialData) {
                        this.materialData.environmentMapTex = texture;
                        this.materialData.textureChange = true;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        EnvironmentMappingMethod.prototype.activateEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            this.context3D = context3D;
            usage["reflectValue"] = context3D.getUniformLocation(usage.program3D, "reflectValue");
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        EnvironmentMappingMethod.prototype.updataEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            context3D.gl.uniform1f(usage["reflectValue"], this.reflectValue);
        };
        /**
         * @language zh_CN
         */
        EnvironmentMappingMethod.prototype.dispose = function () {
        };
        return EnvironmentMappingMethod;
    })(egret3d.EffectMethod);
    egret3d.EnvironmentMappingMethod = EnvironmentMappingMethod;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DistanceFog
    * @classdesc
    * 远景雾
    */
    var DistanceFog = (function (_super) {
        __extends(DistanceFog, _super);
        /**
         * @language zh_CN
         */
        function DistanceFog() {
            _super.call(this);
            this._fogColor = 0xffffffff;
            this._globalDensity = 1;
            //private _startDistance: Point = new Point(200, 1000);
            //private _height: Point = new Point(200,3000) ;
            this._startDistance = 500;
            this._distanceScale = 0.1;
            this._height = 500;
            this._heightScale = 0.1;
            this.fsMethodName = "distanceFog_fragment";
            this._data = new Float32Array(8);
            this.fogColor = this._fogColor;
            this.globalDensity = this._globalDensity;
        }
        Object.defineProperty(DistanceFog.prototype, "fogColor", {
            /**
             * @language zh_CN
             */
            get: function () {
                return this._fogColor;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this._fogColor = value;
                this._data[0] = (value >> 16 & 0xff) / 255;
                this._data[1] = (value >> 8 & 0xff) / 255;
                this._data[2] = (value & 0xff) / 255;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DistanceFog.prototype, "globalDensity", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this._globalDensity;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this._globalDensity = value;
                this._data[3] = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DistanceFog.prototype, "startDistance", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this._startDistance;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this._startDistance = value;
                this._data[4] = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DistanceFog.prototype, "distanceScale", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this._distanceScale;
            },
            /**
             * number
             * @param value
             */
            set: function (value) {
                this._distanceScale = value;
                this._data[5] = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DistanceFog.prototype.activateEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            this.context3D = context3D;
            usage["uniform_globalFog"] = context3D.getUniformLocation(usage.program3D, "uniform_globalFog");
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param usage
         * @param materialData
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DistanceFog.prototype.updataEffect = function (context3D, usage, materialData, modeltransform, camera3D, geometry, animation) {
            context3D.gl.uniform1fv(usage["uniform_globalFog"], this._data);
        };
        /**
         * @language zh_CN
         */
        DistanceFog.prototype.dispose = function () {
        };
        return DistanceFog;
    })(egret3d.EffectMethod);
    egret3d.DistanceFog = DistanceFog;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.MaterialPassBase
    * @classdesc
    * 材质通道渲染器
    */
    var MaterialPassBase = (function () {
        /**
         * @language zh_CN
         * @param data
         */
        function MaterialPassBase(data) {
            if (data === void 0) { data = null; }
            /**
             * @language zh_CN
             */
            this.shaderChange = false;
            /**
             * @language zh_CN
             */
            this.context3DChange = false;
            this.materialData = data;
        }
        /**
         * @language zh_CN
         * @param method
         */
        MaterialPassBase.prototype.addMethod = function (method) {
            this.methodList = this.methodList || new Array();
            this.methodList.push(method);
            this.shaderChange = true;
        };
        /**
         * @language zh_CN
         * @param method
         */
        MaterialPassBase.prototype.removeMethod = function (method) {
            var index = this.methodList.indexOf(method);
            this.methodList.splice(index, 1);
            method.dispose();
        };
        /**
         * @language zh_CN
         * @param method
         */
        MaterialPassBase.prototype.addEffectMethod = function (method) {
            this.effectMethodList = this.effectMethodList || new Array();
            this.effectMethodList.push(method);
            this.shaderChange = true;
        };
        /**
         * @language zh_CN
         * @param method
         */
        MaterialPassBase.prototype.removeEffectMethod = function (method) {
            var index = this.effectMethodList.indexOf(method);
            this.effectMethodList.splice(index, 1);
            method.dispose();
        };
        Object.defineProperty(MaterialPassBase.prototype, "cullMode", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this.materialData.cullFrontOrBack;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this.materialData.cullFrontOrBack = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialPassBase.prototype, "bothSides", {
            /**
             * @language zh_CN
             * @returns boolean
             */
            get: function () {
                if (this.materialData.cullFrontOrBack == -1)
                    return true;
                return false;
            },
            /**
             * @language zh_CN
             * @param flag
             */
            set: function (flag) {
                this.materialData.cullFrontOrBack = -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialPassBase.prototype, "lightGroup", {
            /**
             * @language zh_CN
             * @param lights
             */
            set: function (lights) {
            },
            enumerable: true,
            configurable: true
        });
        /**
        * 初始化 shader 的地方
        */
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geomtry
         * @param animation
         */
        MaterialPassBase.prototype.initShader = function (context3D, geomtry, animation) {
            this.animation = animation;
        };
        /**
         * @language zh_CN
         * @returns {}
         */
        MaterialPassBase.prototype.resetTexture = function () {
        };
        MaterialPassBase.prototype.buildShader = function (context3D) {
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        MaterialPassBase.prototype.activate = function (context3D, modeltransform, camera3D, geometry, animation) {
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        MaterialPassBase.prototype.draw = function (context3D, modeltransform, camera3D, geometry, animation) {
            var i = 0;
            if (this.materialData.depthTest) {
                context3D.gl.enable(context3D.gl.DEPTH_TEST);
                context3D.gl.depthFunc(context3D.gl.LEQUAL);
            }
            else {
                context3D.gl.disable(context3D.gl.DEPTH_TEST);
                context3D.gl.depthFunc(context3D.gl.LEQUAL);
            }
            context3D.gl.cullFace(this.materialData.cullFrontOrBack);
            if (this.materialData.bothside) {
                context3D.gl.disable(context3D.gl.CULL_FACE);
            }
            else
                context3D.gl.enable(context3D.gl.CULL_FACE);
            context3D.setBlendFactors(this.materialData.blend_src, this.materialData.blend_dest);
            if (this.materialData.alphaBlending)
                context3D.gl.depthMask(false);
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         */
        MaterialPassBase.prototype.unActive = function (context3D, camera3D) {
        };
        return MaterialPassBase;
    })();
    egret3d.MaterialPassBase = MaterialPassBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DiffuseMapPass
    * @classdesc
    * 漫反射贴图通道渲染器
    */
    var DiffuseMapPass = (function (_super) {
        __extends(DiffuseMapPass, _super);
        /**
         * @language zh_CN
         * @param data
         */
        function DiffuseMapPass(data) {
            _super.call(this, data);
            /**
             * @language zh_CN
             */
            this.index = 0;
        }
        /**
         * @language zh_CN
         * 初始化
         */
        DiffuseMapPass.prototype.initUseMethod = function () {
            var i = 0;
            this.materialData.diffusePassUsageData.directLightData = new Float32Array(this.materialData.directLightList.length * egret3d.DirectLight.stride);
            this.materialData.diffusePassUsageData.sportLightData = new Float32Array(this.materialData.sportLightList.length * egret3d.SpotLight.stride);
            this.materialData.diffusePassUsageData.pointLightData = new Float32Array(this.materialData.pointLightList.length * egret3d.PointLight.stride);
            this.diffuseMethod = new egret3d.DiffuseMethod();
            this.pixelShader.addMethod(this.diffuseMethod);
            this.pixelShader.addShader(this.diffuseMethod.fragMethodName);
            if (this.materialData.matType == egret3d.MaterialType.DIFFUSE) {
                this.pixelShader.addShader("diffuseMap_fragment");
            }
            else if (this.materialData.matType == egret3d.MaterialType.DIFFUSE_BUMP) {
                this.pixelShader.addShader("diffuseMap_fragment");
                this.pixelShader.addShader("normalMap_fragment");
            }
            else if (this.materialData.matType == egret3d.MaterialType.DIFFUSE_BUMP_SPECULAR) {
                this.pixelShader.addShader("diffuseMap_fragment");
                this.pixelShader.addShader("normalMap_fragment");
                this.pixelShader.addShader("specularMap_fragment");
            }
            for (i = 0; i < this.materialData.directLightList.length; i++) {
                this.pixelShader.addShader("directLight_fragment");
            }
            for (i = 0; i < this.materialData.sportLightList.length; i++) {
                this.pixelShader.addShader("sportLight_fragment");
            }
            for (i = 0; i < this.materialData.pointLightList.length; i++) {
                this.pixelShader.addShader("pointLight_fragment");
            }
            if (this.animation) {
                if (this.animation.animaNodeCollection) {
                    var vsShaderNames = this.animation.animaNodeCollection.getNodesVertexShaders();
                    var fsShaderNames = this.animation.animaNodeCollection.getNodesFragmentShaders();
                    for (i = 0; i < vsShaderNames.length; i++) {
                        this.vertexShader.addShader(vsShaderNames[i]);
                    }
                    for (i = 0; i < fsShaderNames.length; i++) {
                        this.pixelShader.addShader(fsShaderNames[i]);
                    }
                }
            }
            if (this.materialData.acceptShadow && this.shadowMaping) {
                this.pixelShader.addMethod(this.shadowMaping);
                this.vertexShader.addShader(this.shadowMaping.vertexMethodName);
                this.pixelShader.addShader(this.shadowMaping.fragMethodName);
            }
            this.pixelShader.addShader("diffuse_fragmentEnd");
            if (this.effectMethodList) {
                for (var i = 0; i < this.effectMethodList.length; i++) {
                    this.pixelShader.addEffectMethod(this.effectMethodList[i]);
                    this.pixelShader.addShader(this.effectMethodList[i].fragMethodName);
                }
            }
        };
        /**
        * 初始化 shader 的地方
        */
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geometry
         * @param animation
         */
        DiffuseMapPass.prototype.initShader = function (context3D, geometry, animation) {
            _super.prototype.initShader.call(this, context3D, geometry, animation);
            this.vertexShader = new egret3d.VertexShader(this.materialData, this.materialData.diffusePassUsageData);
            this.pixelShader = new egret3d.PixelShader(this.materialData, this.materialData.diffusePassUsageData);
            this.materialData.context3D = context3D;
            this.vertexShader.setVertexShader(geometry);
            this.initUseMethod();
            if (animation) {
                animation.initShader(this.vertexShader, this.pixelShader);
            }
            this.vertexShader.build();
            this.pixelShader.build();
            var vs = this.vertexShader.getShaderSource();
            var fs = this.pixelShader.getShaderSource();
            var vs_shader = context3D.creatVertexShader(vs);
            var fs_shader = context3D.creatFragmentShader(fs);
            this.materialData.diffusePassUsageData.program3D = context3D.creatProgram(vs_shader, fs_shader);
            this.context3DChange = true;
        };
        /**
         * @language zh_CN
         * 重置纹理
         */
        DiffuseMapPass.prototype.resetTexture = function () {
            //--------texture----------------
            var sampler2D;
            for (var index in this.materialData.diffusePassUsageData.sampler2DList) {
                sampler2D = this.materialData.diffusePassUsageData.sampler2DList[index];
                if (this.materialData[sampler2D.varName]) {
                    sampler2D.texture = this.materialData[sampler2D.varName];
                }
            }
            var sampler3D;
            for (var index in this.materialData.diffusePassUsageData.sampler3DList) {
                sampler3D = this.materialData.diffusePassUsageData.sampler3DList[index];
                if (this.materialData[sampler3D.varName]) {
                    sampler3D.texture = this.materialData[sampler3D.varName];
                }
            }
            this.materialData.textureChange = false;
        };
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DiffuseMapPass.prototype.activate = function (context3D, modeltransform, camera3D, geometry, animation) {
            this.materialData.diffusePassUsageData.uniform_materialSource.uniformIndex = context3D.getUniformLocation(this.materialData.diffusePassUsageData.program3D, this.materialData.diffusePassUsageData.uniform_materialSource.varName);
            if (this.materialData.directLightList.length > 0) {
                this.materialData.diffusePassUsageData.uniform_directLightSource.uniformIndex = context3D.getUniformLocation(this.materialData.diffusePassUsageData.program3D, this.materialData.diffusePassUsageData.uniform_directLightSource.varName);
            }
            if (this.materialData.sportLightList.length > 0) {
                this.materialData.diffusePassUsageData.uniform_sportLightSource.uniformIndex = context3D.getUniformLocation(this.materialData.diffusePassUsageData.program3D, this.materialData.diffusePassUsageData.uniform_sportLightSource.varName);
            }
            if (this.materialData.pointLightList.length > 0) {
                this.materialData.diffusePassUsageData.uniform_pointLightSource.uniformIndex = context3D.getUniformLocation(this.materialData.diffusePassUsageData.program3D, this.materialData.diffusePassUsageData.uniform_pointLightSource.varName);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.vsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.vsMethodList[this.index].activate(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.fsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.fsMethodList[this.index].activate(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.effectMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.effectMethodList[this.index].activateEffect(context3D, this.materialData.diffusePassUsageData, this.materialData, modeltransform, camera3D, geometry, animation);
            }
            this.resetTexture();
            //--------texture----------------
            var sampler2D;
            for (var index in this.materialData.diffusePassUsageData.sampler2DList) {
                sampler2D = this.materialData.diffusePassUsageData.sampler2DList[index];
                sampler2D.uniformIndex = context3D.getUniformLocation(this.materialData.diffusePassUsageData.program3D, sampler2D.varName);
            }
            //--------texture----------------
            var sampler3D;
            for (var index in this.materialData.diffusePassUsageData.sampler3DList) {
                sampler3D = this.materialData.diffusePassUsageData.sampler3DList[index];
                sampler3D.uniformIndex = context3D.getUniformLocation(this.materialData.diffusePassUsageData.program3D, sampler3D.varName);
            }
        };
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DiffuseMapPass.prototype.draw = function (context3D, modeltransform, camera3D, geometry, animation) {
            context3D.gl.useProgram(this.materialData.diffusePassUsageData.program3D.program);
            _super.prototype.draw.call(this, context3D, modeltransform, camera3D, geometry, animation);
            var i = 0;
            if (this.materialData.materialDataNeedChange) {
                this.materialData.diffusePassUsageData.materialSourceData[0] = (this.materialData.diffuseColor >> 16 & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[1] = (this.materialData.diffuseColor >> 8 & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[2] = (this.materialData.diffuseColor & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[3] = (this.materialData.ambientColor >> 16 & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[4] = (this.materialData.ambientColor >> 8 & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[5] = (this.materialData.ambientColor & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[6] = (this.materialData.specularColor >> 16 & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[7] = (this.materialData.specularColor >> 8 & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[8] = (this.materialData.specularColor & 0xff) / 255.0;
                this.materialData.diffusePassUsageData.materialSourceData[9] = this.materialData.alpha;
                this.materialData.diffusePassUsageData.materialSourceData[10] = this.materialData.cutAlpha;
                this.materialData.diffusePassUsageData.materialSourceData[11] = this.materialData.shininess;
                this.materialData.diffusePassUsageData.materialSourceData[12] = this.materialData.diffusePower;
                this.materialData.diffusePassUsageData.materialSourceData[13] = this.materialData.specularPower;
                this.materialData.diffusePassUsageData.materialSourceData[14] = this.materialData.ambientPower;
                this.materialData.diffusePassUsageData.materialSourceData[15] = this.materialData.normalPower; //保留
            }
            context3D.gl.uniform1fv(this.materialData.diffusePassUsageData.uniform_materialSource.uniformIndex, this.materialData.diffusePassUsageData.materialSourceData);
            //texture 2D
            var sampler2D;
            for (var index in this.materialData.diffusePassUsageData.sampler2DList) {
                sampler2D = this.materialData.diffusePassUsageData.sampler2DList[index];
                context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture);
                if (this.materialData.materialDataNeedChange) {
                    var min_filter = this.materialData.smooth ? context3D.gl.LINEAR_MIPMAP_LINEAR : context3D.gl.LINEAR;
                    var mag_filter = this.materialData.smooth ? context3D.gl.LINEAR_MIPMAP_LINEAR : context3D.gl.LINEAR;
                    var wrap_u_filter = this.materialData.repeat ? context3D.gl.REPEAT : context3D.gl.CLAMP_TO_EDGE;
                    var wrap_v_filter = this.materialData.repeat ? context3D.gl.REPEAT : context3D.gl.CLAMP_TO_EDGE;
                    context3D.setTexture2DSamplerState(min_filter, mag_filter, wrap_u_filter, wrap_v_filter);
                    this.materialData.materialDataNeedChange = false;
                }
            }
            var sampler3D;
            for (var index in this.materialData.diffusePassUsageData.sampler3DList) {
                sampler3D = this.materialData.diffusePassUsageData.sampler3DList[index];
                context3D.setCubeTextureAt(sampler3D.activeTextureIndex, sampler3D.uniformIndex, sampler3D.index, sampler3D.texture.cubeTexture);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.vsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.vsMethodList[this.index].updata(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            if (this.materialData.diffusePassUsageData.uniform_directLightSource) {
                for (i = 0; i < this.materialData.directLightList.length; i++) {
                    this.materialData.directLightList[i].updateLightData(i, this.materialData.diffusePassUsageData.directLightData);
                }
                context3D.gl.uniform1fv(this.materialData.diffusePassUsageData.uniform_directLightSource.uniformIndex, this.materialData.diffusePassUsageData.directLightData);
            }
            if (this.materialData.diffusePassUsageData.uniform_sportLightSource) {
                for (i = 0; i < this.materialData.sportLightList.length; i++) {
                    this.materialData.sportLightList[i].updateLightData(i, this.materialData.diffusePassUsageData.sportLightData);
                }
                context3D.gl.uniform1fv(this.materialData.diffusePassUsageData.uniform_sportLightSource.uniformIndex, this.materialData.diffusePassUsageData.sportLightData);
            }
            if (this.materialData.diffusePassUsageData.uniform_pointLightSource) {
                for (i = 0; i < this.materialData.pointLightList.length; i++) {
                    this.materialData.pointLightList[i].updateLightData(i, this.materialData.diffusePassUsageData.pointLightData);
                }
                context3D.gl.uniform1fv(this.materialData.diffusePassUsageData.uniform_pointLightSource.uniformIndex, this.materialData.diffusePassUsageData.pointLightData);
            }
            if (this.context3DChange) {
                this.activate(context3D, modeltransform, camera3D, geometry, animation);
                this.context3DChange = false;
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.vsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.vsMethodList[this.index].updata(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.fsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.fsMethodList[this.index].updata(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.effectMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.effectMethodList[this.index].updataEffect(context3D, this.materialData.diffusePassUsageData, this.materialData, modeltransform, camera3D, geometry, animation);
            }
            context3D.gl.bindBuffer(egret3d.Egret3DDrive.ELEMENT_ARRAY_BUFFER, geometry.sharedIndexBuffer.buffer);
            context3D.gl.drawElements(this.materialData.drawMode, geometry.numItems, egret3d.Egret3DDrive.UNSIGNED_SHORT, 0);
            if (this.materialData.alphaBlending)
                context3D.gl.depthMask(true);
            for (var index in this.materialData.diffusePassUsageData.sampler2DList) {
                //sampler2D = this.materialData.defaultPassUsageData.sampler2DList[index];
                //sampler2D.texture = this.materialData[sampler2D.varName]
                //sampler2D.texture.upload(context3D);
                //context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture);
                //context3D.gl.bindTexture();
                context3D.gl.bindTexture(context3D.gl.TEXTURE_2D, null);
            }
        };
        return DiffuseMapPass;
    })(egret3d.MaterialPassBase);
    egret3d.DiffuseMapPass = DiffuseMapPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.TerrainMapPass
    * @classdesc
    * 地形贴图通道渲染器
    */
    var TerrainMapPass = (function (_super) {
        __extends(TerrainMapPass, _super);
        /**
         * @language zh_CN
         * @param data
         */
        function TerrainMapPass(data) {
            _super.call(this, data);
            this.diffuseMethod = new egret3d.TerrainMethod();
        }
        /**
         * @language zh_CN
         * 初始化
         */
        TerrainMapPass.prototype.initUseMethod = function () {
            var i = 0;
            this.materialData.diffusePassUsageData.directLightData = new Float32Array(this.materialData.directLightList.length * egret3d.DirectLight.stride);
            this.materialData.diffusePassUsageData.sportLightData = new Float32Array(this.materialData.sportLightList.length * egret3d.SpotLight.stride);
            this.materialData.diffusePassUsageData.pointLightData = new Float32Array(this.materialData.pointLightList.length * egret3d.PointLight.stride);
            this.pixelShader.addMethod(this.diffuseMethod);
            this.pixelShader.addShader(this.diffuseMethod.fragMethodName);
            if (this.materialData.matType == egret3d.MaterialType.DIFFUSE) {
                this.pixelShader.addShader("diffuseMap_fragment");
            }
            else if (this.materialData.matType == egret3d.MaterialType.DIFFUSE_BUMP) {
                this.pixelShader.addShader("diffuseMap_fragment");
                this.pixelShader.addShader("normalMap_fragment");
            }
            else if (this.materialData.matType == egret3d.MaterialType.DIFFUSE_BUMP_SPECULAR) {
                this.pixelShader.addShader("diffuseMap_fragment");
                this.pixelShader.addShader("normalMap_fragment");
                this.pixelShader.addShader("specularMap_fragment");
            }
            this.pixelShader.addShader("terrainRGBA_fragment");
            for (i = 0; i < this.materialData.directLightList.length; i++) {
                this.pixelShader.addShader("directLight_fragment");
            }
            for (i = 0; i < this.materialData.sportLightList.length; i++) {
                this.pixelShader.addShader("sportLight_fragment");
            }
            for (i = 0; i < this.materialData.pointLightList.length; i++) {
                this.pixelShader.addShader("pointLight_fragment");
            }
            if (this.animation) {
                if (this.animation.animaNodeCollection) {
                    var vsShaderNames = this.animation.animaNodeCollection.getNodesVertexShaders();
                    var fsShaderNames = this.animation.animaNodeCollection.getNodesFragmentShaders();
                    for (i = 0; i < vsShaderNames.length; i++) {
                        this.vertexShader.addShader(vsShaderNames[i]);
                    }
                    for (i = 0; i < fsShaderNames.length; i++) {
                        this.pixelShader.addShader(fsShaderNames[i]);
                    }
                }
            }
            this.pixelShader.addShader("diffuse_fragmentEnd");
            if (this.effectMethodList) {
                for (var i = 0; i < this.effectMethodList.length; i++) {
                    this.pixelShader.addEffectMethod(this.effectMethodList[i]);
                    this.pixelShader.addShader(this.effectMethodList[i].fragMethodName);
                }
            }
            if (this.materialData.acceptShadow) {
                var shadowMapingMethod = new egret3d.ShadowMapingMethod();
                this.pixelShader.addMethod(shadowMapingMethod);
                this.vertexShader.addShader(shadowMapingMethod.vertexMethodName);
                this.pixelShader.addShader(shadowMapingMethod.fragMethodName);
            }
        };
        return TerrainMapPass;
    })(egret3d.DiffuseMapPass);
    egret3d.TerrainMapPass = TerrainMapPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DepthMapPass
    * @classdesc
    * 深度贴图通道渲染器
    */
    var DepthMapPass = (function (_super) {
        __extends(DepthMapPass, _super);
        /**
         * @language zh_CN
         * @param data
         */
        function DepthMapPass(data) {
            _super.call(this, data);
            /**
             * @language zh_CN
             */
            this.index = 0;
        }
        /**
         * @language zh_CN
         */
        DepthMapPass.prototype.initUseMethod = function () {
            this.pixelShader.addShader("depthMethod_fragment");
        };
        /**
        * 初始化 shader 的地方
        */
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geometry
         * @param animation
         */
        DepthMapPass.prototype.initShader = function (context3D, geometry, animation) {
            this.vertexShader = new egret3d.VertexShader(this.materialData, this.materialData.depthPassUsageData);
            this.pixelShader = new egret3d.PixelShader(this.materialData, this.materialData.depthPassUsageData);
            this.materialData.context3D = context3D;
            this.vertexShader.setVertexShader(geometry);
            this.initUseMethod();
            this.vertexShader.build();
            this.pixelShader.build();
            if (animation) {
                this.vertexShader.maxBone = animation.jointNumber * 2;
            }
            var vs = this.vertexShader.getShaderSource();
            var fs = this.pixelShader.getShaderSource();
            var vs_shader = context3D.creatVertexShader(vs);
            var fs_shader = context3D.creatFragmentShader(fs);
            this.materialData.depthPassUsageData.program3D = context3D.creatProgram(vs_shader, fs_shader);
            this.context3DChange = true;
        };
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DepthMapPass.prototype.activate = function (context3D, modeltransform, camera3D, geometry, animation) {
            for (this.index = 0; this.index < this.materialData.depthPassUsageData.vsMethodList.length; this.index++) {
                this.materialData.depthPassUsageData.vsMethodList[this.index].activate(context3D, this.materialData.depthPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.depthPassUsageData.fsMethodList.length; this.index++) {
                this.materialData.depthPassUsageData.fsMethodList[this.index].activate(context3D, this.materialData.depthPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
        };
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        DepthMapPass.prototype.draw = function (context3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.draw.call(this, context3D, modeltransform, camera3D, geometry, animation);
            var i = 0;
            if (this.context3DChange) {
                this.activate(context3D, modeltransform, camera3D, geometry, animation);
                this.context3DChange = false;
            }
            for (this.index = 0; this.index < this.materialData.depthPassUsageData.vsMethodList.length; this.index++) {
                this.materialData.depthPassUsageData.vsMethodList[this.index].updata(context3D, this.materialData.depthPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.depthPassUsageData.fsMethodList.length; this.index++) {
                this.materialData.depthPassUsageData.fsMethodList[this.index].updata(context3D, this.materialData.depthPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            context3D.gl.bindBuffer(egret3d.Egret3DDrive.ELEMENT_ARRAY_BUFFER, geometry.sharedIndexBuffer.buffer);
            context3D.gl.drawElements(this.materialData.drawMode, geometry.numItems, egret3d.Egret3DDrive.UNSIGNED_SHORT, 0);
        };
        return DepthMapPass;
    })(egret3d.MaterialPassBase);
    egret3d.DepthMapPass = DepthMapPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.NormalMapPass
    * @classdesc
    * 发现贴图通道渲染器
    */
    var NormalMapPass = (function (_super) {
        __extends(NormalMapPass, _super);
        /**
         * @language zh_CN
         * @param data
         */
        function NormalMapPass(data) {
            _super.call(this, data);
            /**
             * @language zh_CN
             */
            this.index = 0;
        }
        /**
         * @language zh_CN
         * 初始化
         */
        NormalMapPass.prototype.initUseMethod = function () {
            var i = 0;
            this.normalMethod = new egret3d.NormalMethod();
            this.pixelShader.addMethod(this.normalMethod);
            this.pixelShader.addShader(this.normalMethod.fragMethodName);
            if (this.animation) {
                var vsShaderNames = this.animation.animaNodeCollection.getNodesVertexShaders();
                var fsShaderNames = this.animation.animaNodeCollection.getNodesFragmentShaders();
                for (i = 0; i < vsShaderNames.length; i++) {
                    this.vertexShader.addShader(vsShaderNames[i]);
                }
                for (i = 0; i < vsShaderNames.length; i++) {
                    this.pixelShader.addShader(fsShaderNames[i]);
                }
            }
            //if (this.materialData.useNormalMap) {
            //    this.pixelShader.addShader("normalMap_fragment");
            //}
        };
        /**
        * 初始化 shader 的地方
        */
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geometry
         * @param animation
         */
        NormalMapPass.prototype.initShader = function (context3D, geometry, animation) {
            this.vertexShader = new egret3d.VertexShader(this.materialData, this.materialData.normalPassUsageData);
            this.pixelShader = new egret3d.PixelShader(this.materialData, this.materialData.normalPassUsageData);
            this.materialData.context3D = context3D;
            this.vertexShader.setVertexShader(geometry);
            this.initUseMethod();
            this.vertexShader.build();
            this.pixelShader.build();
            if (animation) {
                this.vertexShader.maxBone = animation.jointNumber * 2;
            }
            var vs = this.vertexShader.getShaderSource();
            var fs = this.pixelShader.getShaderSource();
            var vs_shader = context3D.creatVertexShader(vs);
            var fs_shader = context3D.creatFragmentShader(fs);
            this.materialData.normalPassUsageData.program3D = context3D.creatProgram(vs_shader, fs_shader);
            this.context3DChange = true;
        };
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        NormalMapPass.prototype.activate = function (context3D, modeltransform, camera3D, geometry, animation) {
            for (this.index = 0; this.index < this.materialData.normalPassUsageData.vsMethodList.length; this.index++) {
                this.materialData.normalPassUsageData.vsMethodList[this.index].activate(context3D, this.materialData.normalPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.normalPassUsageData.fsMethodList.length; this.index++) {
                this.materialData.normalPassUsageData.fsMethodList[this.index].activate(context3D, this.materialData.normalPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
        };
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        NormalMapPass.prototype.draw = function (context3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.draw.call(this, context3D, modeltransform, camera3D, geometry, animation);
            var i = 0;
            if (this.context3DChange) {
                this.activate(context3D, modeltransform, camera3D, geometry, animation);
                this.context3DChange = false;
            }
            for (this.index = 0; this.index < this.materialData.normalPassUsageData.vsMethodList.length; this.index++) {
                this.materialData.normalPassUsageData.vsMethodList[this.index].updata(context3D, this.materialData.normalPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.normalPassUsageData.fsMethodList.length; this.index++) {
                this.materialData.normalPassUsageData.fsMethodList[this.index].updata(context3D, this.materialData.normalPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            context3D.gl.bindBuffer(egret3d.Egret3DDrive.ELEMENT_ARRAY_BUFFER, geometry.sharedIndexBuffer.buffer);
            context3D.gl.drawElements(this.materialData.drawMode, geometry.numItems, egret3d.Egret3DDrive.UNSIGNED_SHORT, 0);
        };
        return NormalMapPass;
    })(egret3d.MaterialPassBase);
    egret3d.NormalMapPass = NormalMapPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ColorMapPass
    * @classdesc
    * 颜色贴图通道渲染器
    */
    var ColorMapPass = (function (_super) {
        __extends(ColorMapPass, _super);
        /**
         * @language zh_CN
         * @param data
         */
        function ColorMapPass(data) {
            _super.call(this, data);
            /**
             * @language zh_CN
             * 序号
             */
            this.index = 0;
        }
        /**
         * @language zh_CN
         * 初始化
         */
        ColorMapPass.prototype.initUseMethod = function () {
            this.materialData.diffusePassUsageData.directLightData = new Float32Array(this.materialData.directLightList.length * egret3d.DirectLight.stride);
            this.materialData.diffusePassUsageData.sportLightData = new Float32Array(this.materialData.sportLightList.length * egret3d.SpotLight.stride);
            this.materialData.diffusePassUsageData.pointLightData = new Float32Array(this.materialData.pointLightList.length * egret3d.PointLight.stride);
            this.diffuseMethod = new egret3d.DiffuseMethod();
            this.pixelShader.addMethod(this.diffuseMethod);
            this.pixelShader.addShader(this.diffuseMethod.fragMethodName);
        };
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geometry
         * @param animation
         */
        ColorMapPass.prototype.initShader = function (context3D, geometry, animation) {
            this.vertexShader = new egret3d.VertexShader(this.materialData, this.materialData.diffusePassUsageData);
            this.pixelShader = new egret3d.PixelShader(this.materialData, this.materialData.diffusePassUsageData);
            this.materialData.context3D = context3D;
            this.vertexShader.setVertexShader(geometry);
            this.initUseMethod();
            this.vertexShader.build();
            this.pixelShader.build();
            if (animation) {
                this.vertexShader.maxBone = animation.jointNumber * 2;
            }
            var vs = this.vertexShader.getShaderSource();
            var fs = this.pixelShader.getShaderSource();
            var vs_shader = context3D.creatVertexShader(vs);
            var fs_shader = context3D.creatFragmentShader(fs);
            this.materialData.diffusePassUsageData.program3D = context3D.creatProgram(vs_shader, fs_shader);
            this.context3DChange = true;
        };
        /**
         * @language zh_CNa
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ColorMapPass.prototype.activate = function (context3D, modeltransform, camera3D, geometry, animation) {
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.vsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.vsMethodList[this.index].activate(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.fsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.fsMethodList[this.index].activate(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
        };
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ColorMapPass.prototype.updata = function (context3D, modeltransform, camera3D, geometry, animation) {
            _super.prototype.draw.call(this, context3D, modeltransform, camera3D, geometry, animation);
            var i;
            for (i = 0; i < this.materialData.directLightList.length; i++) {
                this.materialData.directLightList[i].updateLightData(i, this.materialData.diffusePassUsageData.directLightData);
            }
            for (i = 0; i < this.materialData.sportLightList.length; i++) {
                this.materialData.sportLightList[i].updateLightData(i, this.materialData.diffusePassUsageData.sportLightData);
            }
            for (i = 0; i < this.materialData.pointLightList.length; i++) {
                this.materialData.pointLightList[i].updateLightData(i, this.materialData.diffusePassUsageData.pointLightData);
            }
            if (this.context3DChange) {
                this.activate(context3D, modeltransform, camera3D, geometry, animation);
                this.context3DChange = false;
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.vsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.vsMethodList[this.index].updata(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.diffusePassUsageData.fsMethodList.length; this.index++) {
                this.materialData.diffusePassUsageData.fsMethodList[this.index].updata(context3D, this.materialData.diffusePassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            context3D.gl.bindBuffer(egret3d.Egret3DDrive.ELEMENT_ARRAY_BUFFER, geometry.sharedIndexBuffer.buffer);
            context3D.drawElement(this.materialData.drawMode, geometry.sharedIndexBuffer, 0, geometry.numItems);
        };
        return ColorMapPass;
    })(egret3d.MaterialPassBase);
    egret3d.ColorMapPass = ColorMapPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ShadowMapPass
    * @classdesc
    * 阴影贴图通道渲染器
    */
    var ShadowMapPass = (function (_super) {
        __extends(ShadowMapPass, _super);
        /**
         * @language zh_CN
         * @param data
         */
        function ShadowMapPass(data) {
            _super.call(this, data);
        }
        /**
         * @language zh_CN
         * 初始化
         */
        ShadowMapPass.prototype.initUseMethod = function () {
            var i = 0;
            if (this.animation) {
                if (this.animation.animaNodeCollection) {
                    var vsShaderNames = this.animation.animaNodeCollection.getNodesVertexShaders();
                    var fsShaderNames = this.animation.animaNodeCollection.getNodesFragmentShaders();
                    for (i = 0; i < vsShaderNames.length; i++) {
                        this.vertexShader.addShader(vsShaderNames[i]);
                    }
                    for (i = 0; i < fsShaderNames.length; i++) {
                        this.pixelShader.addShader(fsShaderNames[i]);
                    }
                }
            }
            this.pixelShader.addShader("Shadow_fragment");
        };
        /**
       * 初始化 shader 的地方
       */
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geometry
         * @param animation
         */
        ShadowMapPass.prototype.initShader = function (context3D, geometry, animation) {
            _super.prototype.initShader.call(this, context3D, geometry, animation);
            this.vertexShader = new egret3d.VertexShader(this.materialData, this.materialData.shadowPassUsageData);
            this.pixelShader = new egret3d.PixelShader(this.materialData, this.materialData.shadowPassUsageData);
            this.materialData.context3D = context3D;
            this.vertexShader.setVertexShader(geometry);
            this.initUseMethod();
            if (animation) {
                animation.initShader(this.vertexShader, this.pixelShader);
            }
            this.vertexShader.build();
            this.pixelShader.build();
            var vs = this.vertexShader.getShaderSource();
            var fs = this.pixelShader.getShaderSource();
            var vs_shader = context3D.creatVertexShader(vs);
            var fs_shader = context3D.creatFragmentShader(fs);
            this.materialData.shadowPassUsageData.program3D = context3D.creatProgram(vs_shader, fs_shader);
            this.context3DChange = true;
        };
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ShadowMapPass.prototype.activate = function (context3D, modeltransform, camera3D, geometry, animation) {
            for (this.index = 0; this.index < this.materialData.shadowPassUsageData.vsMethodList.length; this.index++) {
                this.materialData.shadowPassUsageData.vsMethodList[this.index].activate(context3D, this.materialData.shadowPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.shadowPassUsageData.fsMethodList.length; this.index++) {
                this.materialData.shadowPassUsageData.fsMethodList[this.index].activate(context3D, this.materialData.shadowPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            //--------texture----------------
            var sampler2D;
            for (var index in this.materialData.shadowPassUsageData.sampler2DList) {
                sampler2D = this.materialData.shadowPassUsageData.sampler2DList[index];
                sampler2D.uniformIndex = context3D.getUniformLocation(this.materialData.shadowPassUsageData.program3D, sampler2D.varName);
            }
            //--------texture----------------
            var sampler3D;
            for (var index in this.materialData.shadowPassUsageData.sampler3DList) {
                sampler3D = this.materialData.shadowPassUsageData.sampler3DList[index];
                sampler3D.uniformIndex = context3D.getUniformLocation(this.materialData.shadowPassUsageData.program3D, sampler3D.varName);
            }
        };
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        ShadowMapPass.prototype.draw = function (context3D, modeltransform, camera3D, geometry, animation) {
            if (this.context3DChange) {
                this.activate(context3D, modeltransform, camera3D, geometry, animation);
                this.context3DChange = false;
            }
            context3D.gl.useProgram(this.materialData.shadowPassUsageData.program3D.program);
            _super.prototype.draw.call(this, context3D, modeltransform, camera3D, geometry, animation);
            var i = 0;
            //texture 2D
            var sampler2D;
            for (var index in this.materialData.shadowPassUsageData.sampler2DList) {
                sampler2D = this.materialData.shadowPassUsageData.sampler2DList[index];
                sampler2D.texture = this.materialData[sampler2D.varName];
                sampler2D.texture.upload(context3D);
                context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture);
            }
            var sampler3D;
            for (var index in this.materialData.shadowPassUsageData.sampler3DList) {
                sampler3D = this.materialData.shadowPassUsageData.sampler3DList[index];
                sampler3D.texture = this.materialData[sampler3D.varName];
                sampler3D.texture.upload(context3D);
                context3D.setCubeTextureAt(sampler3D.activeTextureIndex, sampler3D.uniformIndex, sampler3D.index, sampler3D.texture.cubeTexture);
            }
            for (this.index = 0; this.index < this.materialData.shadowPassUsageData.vsMethodList.length; this.index++) {
                this.materialData.shadowPassUsageData.vsMethodList[this.index].updata(context3D, this.materialData.shadowPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            for (this.index = 0; this.index < this.materialData.shadowPassUsageData.fsMethodList.length; this.index++) {
                this.materialData.shadowPassUsageData.fsMethodList[this.index].updata(context3D, this.materialData.shadowPassUsageData.program3D, modeltransform, camera3D, geometry, animation);
            }
            context3D.gl.bindBuffer(egret3d.Egret3DDrive.ELEMENT_ARRAY_BUFFER, geometry.sharedIndexBuffer.buffer);
            context3D.gl.drawElements(this.materialData.drawMode, geometry.numItems, egret3d.Egret3DDrive.UNSIGNED_SHORT, 0);
            //if (this.materialData.alphaBlending)
            //context3D.gl.depthMask(this.materialData.alphaBlending);
            for (var index in this.materialData.shadowPassUsageData.sampler2DList) {
                context3D.gl.bindTexture(context3D.gl.TEXTURE_2D, null);
            }
        };
        return ShadowMapPass;
    })(egret3d.MaterialPassBase);
    egret3d.ShadowMapPass = ShadowMapPass;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (MaterialType) {
        MaterialType[MaterialType["DIFFUSE"] = 0] = "DIFFUSE";
        MaterialType[MaterialType["DIFFUSE_BUMP"] = 1] = "DIFFUSE_BUMP";
        MaterialType[MaterialType["DIFFUSE_BUMP_SPECULAR"] = 2] = "DIFFUSE_BUMP_SPECULAR";
        MaterialType[MaterialType["RGBATERRAIN"] = 3] = "RGBATERRAIN";
    })(egret3d.MaterialType || (egret3d.MaterialType = {}));
    var MaterialType = egret3d.MaterialType;
    /**
    * @class egret3d.MaterialBase
    * @classdesc
    * 材质基类
    */
    var MaterialBase = (function () {
        /**
         * @language zh_CN
         * @param materialData
         */
        function MaterialBase(materialData) {
            if (materialData === void 0) { materialData = null; }
            if (materialData == null) {
                this.materialData = new egret3d.MaterialData();
                this.materialData.diffusePassUsageData.materialSourceData = new Float32Array(16);
            }
            else {
                this.materialData = materialData;
            }
            this.setData(this.materialData);
        }
        /**
         * @language zh_CN
         */
        MaterialBase.prototype.initMatPass = function () {
            switch (this.materialData.matType) {
                case MaterialType.DIFFUSE:
                    this.diffusePass = new egret3d.DiffuseMapPass(this.materialData);
                    break;
                case MaterialType.DIFFUSE_BUMP:
                    this.diffusePass = new egret3d.DiffuseMapPass(this.materialData);
                    break;
                case MaterialType.DIFFUSE_BUMP_SPECULAR:
                    this.diffusePass = new egret3d.DiffuseMapPass(this.materialData);
                    break;
                case MaterialType.RGBATERRAIN:
                    this.diffusePass = new egret3d.TerrainMapPass(this.materialData);
                    break;
            }
        };
        /**
         * @language zh_CN
         * @param matData
         */
        MaterialBase.prototype.setData = function (matData) {
            if (this.materialData) {
                this.materialData.dispose();
            }
            this.materialData = matData;
            this.ambientColor = this.materialData.ambientColor;
            this.ambientPower = this.materialData.ambientPower;
            this.normalPower = this.materialData.normalPower;
            this.specularColor = this.materialData.specularColor;
            this.specularPower = this.materialData.specularPower;
            this.blendMode = this.materialData.blendMode;
        };
        /**
         * @language zh_CN
         * @returns MaterialData
         */
        MaterialBase.prototype.getData = function () {
            return this.materialData;
        };
        /**
         * @language zh_CN
         * @param method
         */
        MaterialBase.prototype.addDiffusePassMothod = function (method) {
            this.diffusePass.addMethod(method);
        };
        /**
         * @language zh_CN
         * @param method
         */
        MaterialBase.prototype.addDiffusePassEffectMothod = function (method) {
            this.diffusePass.addEffectMethod(method);
        };
        Object.defineProperty(MaterialBase.prototype, "shadowMapingMethod", {
            /**
             * @language zh_CN
             * @returns ShadowMapingMethod
             */
            get: function () {
                return this.diffusePass.shadowMaping;
            },
            /**
             * @language zh_CN
             * @param method
             */
            set: function (method) {
                this.diffusePass.shadowMaping = method;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "diffuseColor", {
            /**
             * @language zh_CN
             * @param color
             */
            set: function (color) {
                this.materialData.materialDataNeedChange = true;
                this.materialData.diffuseColor = color;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "ambientColor", {
            /**
             * @language zh_CN
             * @param color
             */
            set: function (color) {
                this.materialData.materialDataNeedChange = true;
                this.materialData.ambientColor = color;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "specularColor", {
            /**
             * @language zh_CN
             * @param color
             */
            set: function (color) {
                this.materialData.materialDataNeedChange = true;
                this.materialData.specularColor = color;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "alpha", {
            /**
             * @language zh_CN
             * 得到alpha
             * @returns alpha
             */
            get: function () {
                return this.materialData.alpha;
            },
            /**
             * @language zh_CN
             * 设置材质alpha
             * @param value
             */
            set: function (value) {
                if (this.materialData.alpha != value) {
                    this.materialData.alpha = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "shininess", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this.materialData.shininess;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                if (this.materialData.shininess != value) {
                    this.materialData.shininess = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "specularPower", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this.materialData.specularPower;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                if (this.materialData.specularPower != value) {
                    this.materialData.specularPower = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "ambientPower", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this.materialData.ambientPower;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                if (this.materialData.ambientPower != value) {
                    this.materialData.ambientPower = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "diffusePower", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this.materialData.diffusePower;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                if (this.materialData.diffusePower != value) {
                    this.materialData.diffusePower = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "normalPower", {
            /**
             * @language zh_CN
             * @returns number
             */
            get: function () {
                return this.materialData.normalPower;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                if (this.materialData.normalPower != value) {
                    this.materialData.normalPower = value;
                    this.materialData.materialDataNeedChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "castShadow", {
            /**
             * @language zh_CN
             * @returns boolean
             */
            get: function () {
                return this.materialData.castShadow;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this.materialData.castShadow = value;
                if (value) {
                    if (!egret3d.ShadowRender.frameBuffer) {
                        alert("要使用shadow view3D.useShadow = true ");
                    }
                    else {
                        if (!this.shadowPass)
                            this.shadowPass = new egret3d.ShadowMapPass(this.materialData);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "acceptShadow", {
            /**
             * @language zh_CN
             * @returns boolean
             */
            get: function () {
                return this.materialData.acceptShadow;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this.materialData.acceptShadow = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "smooth", {
            get: function () {
                return this.materialData.smooth;
            },
            set: function (val) {
                this.materialData.smooth = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "repeat", {
            get: function () {
                return this.materialData.repeat;
            },
            set: function (val) {
                this.materialData.repeat = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "bothside", {
            get: function () {
                return this.materialData.bothside;
            },
            set: function (val) {
                this.materialData.bothside = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "blendMode", {
            /**
             * @language zh_CN
             * @returns BlendMode
             */
            get: function () {
                return this.materialData.blendMode;
            },
            set: function (value) {
                this.materialData.blendMode = value;
                switch (value) {
                    case egret3d.BlendMode.NORMAL:
                        this.materialData.blend_src = egret3d.Egret3DDrive.ONE;
                        this.materialData.blend_dest = egret3d.Egret3DDrive.ZERO;
                        break;
                    case egret3d.BlendMode.LAYER:
                        this.materialData.blend_src = egret3d.Egret3DDrive.SRC_ALPHA;
                        this.materialData.blend_dest = egret3d.Egret3DDrive.ZERO;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.MULTIPLY:
                        this.materialData.blend_src = egret3d.Egret3DDrive.ZERO;
                        this.materialData.blend_dest = egret3d.Egret3DDrive.SRC_COLOR;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.ADD:
                        this.materialData.blend_src = egret3d.Egret3DDrive.SRC_ALPHA;
                        this.materialData.blend_dest = egret3d.Egret3DDrive.ONE;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.ALPHA:
                        this.materialData.blend_src = egret3d.Egret3DDrive.SRC_ALPHA;
                        this.materialData.blend_dest = egret3d.Egret3DDrive.ONE_MINUS_SRC_ALPHA;
                        this.materialData.alphaBlending = true;
                        break;
                    case egret3d.BlendMode.SCREEN:
                        this.materialData.blend_src = egret3d.Egret3DDrive.ONE;
                        this.materialData.blend_dest = egret3d.Egret3DDrive.ONE_MINUS_SRC_COLOR;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @param color
         * @param thickness
         */
        MaterialBase.prototype.setOutlineStyler = function (color, thickness) {
            if (!this.outLinePass) {
            }
        };
        Object.defineProperty(MaterialBase.prototype, "depthTest", {
            /**
             * @language zh_CN
             * @returns boolean
             */
            get: function () {
                return this.materialData.depthTest;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this.materialData.depthTest = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "lightGroup", {
            /**
             * @language zh_CN
             * @param lightGroup
             */
            set: function (lightGroup) {
                this.materialData.directLightList = lightGroup.directLightList;
                this.materialData.sportLightList = lightGroup.spotLightList;
                this.materialData.pointLightList = lightGroup.pointLightList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "diffuseTexture", {
            /**
             * @language zh_CN
             * @returns TextureBase
             */
            get: function () {
                return this.materialData.diffuseTex;
            },
            /**
             * @language zh_CN
             * @param texture
             */
            set: function (texture) {
                if (texture) {
                    this.materialData.diffuseTex = texture;
                    this.materialData.textureChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "normalTexture", {
            /**
             * @language zh_CN
             * @param texture
             */
            set: function (texture) {
                if (texture) {
                    this.materialData.normalTex = texture;
                    this.materialData.textureChange = true;
                    if (this.materialData.matType != MaterialType.DIFFUSE_BUMP) {
                        this.materialData.matType = MaterialType.DIFFUSE_BUMP;
                        this.materialData.passChange = true;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaterialBase.prototype, "specularTexture", {
            /**
             * @language zh_CN
             * @param texture
             */
            set: function (texture) {
                if (texture) {
                    this.materialData.specularTex = texture;
                    this.materialData.textureChange = true;
                    if (this.materialData.matType != MaterialType.DIFFUSE_BUMP_SPECULAR) {
                        this.materialData.matType = MaterialType.DIFFUSE_BUMP_SPECULAR;
                        this.materialData.passChange = true;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @returns MaterialBase
         */
        MaterialBase.prototype.clone = function () {
            var mat = new MaterialBase(this.materialData.clone());
            return mat;
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.activateDiffusePass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            if (this.outLinePass) {
                this.outLinePass.initShader(context3D, geometry, animation);
                this.outLinePass.activate(context3D, modelMatrix, camera3D, geometry, animation);
            }
            this.diffusePass.initShader(context3D, geometry, animation);
            this.diffusePass.activate(context3D, modelMatrix, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.rendenDiffusePass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            if (this.outLinePass) {
                this.outLinePass.draw(context3D, modelMatrix, camera3D, geometry, animation);
            }
            if (!this.materialData.passChange) {
                this.diffusePass.draw(context3D, modelMatrix, camera3D, geometry, animation);
            }
            else {
                this.activateDiffusePass(context3D, camera3D, modelMatrix, geometry, animation);
                this.materialData.passChange = false;
            }
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.activateShadowPass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            this.shadowPass.initShader(context3D, geometry, animation);
            this.shadowPass.activate(context3D, modelMatrix, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.rendenShadowPass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            if (!this.materialData.passChange) {
                this.shadowPass.draw(context3D, modelMatrix, camera3D, geometry, animation);
            }
            else {
                this.activateShadowPass(context3D, camera3D, modelMatrix, geometry, animation);
            }
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.activateNormalPass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            this.normalPass.initShader(context3D, geometry, animation);
            this.normalPass.activate(context3D, modelMatrix, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.rendenNormalPass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            //if (this.materialData._NormalActiveState) {
            //    this.normalPass.draw(context3D, modelMatrix, camera3D,geometry, animation )
            //} else {
            //    this.materialData._NormalActiveState = true;
            //    this.activateNormalPass(context3D, camera3D,modelMatrix,geometry, animation);
            //}
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.activateDepthPass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            this.depthPass.initShader(context3D, geometry, animation);
            this.depthPass.activate(context3D, modelMatrix, camera3D, geometry, animation);
        };
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        MaterialBase.prototype.rendenDepthPass = function (context3D, camera3D, modelMatrix, geometry, animation) {
            //if (this.materialData._DepthActiveState) {
            //    this.depthPass.draw(context3D, modelMatrix, camera3D, geometry, animation)
            //} else {
            //    this.materialData._DepthActiveState = true;
            //    this.activateDepthPass(context3D, camera3D, modelMatrix, geometry, animation);
            //}
        };
        return MaterialBase;
    })();
    egret3d.MaterialBase = MaterialBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.TerrainMaterial
    * @classdesc
    * 地形材质
    */
    var TerrainMaterial = (function (_super) {
        __extends(TerrainMaterial, _super);
        /**
         * @language zh_CN
         * @param colormap
         * @param controlTex
         * @param splat_0
         * @param splat_1
         * @param splat_2
         * @param splat_3
         * @param lightMap
         */
        function TerrainMaterial(colormap, controlTex, splat_0, splat_1, splat_2, splat_3, lightMap) {
            if (lightMap === void 0) { lightMap = null; }
            _super.call(this);
            this.materialData.matType = egret3d.MaterialType.RGBATERRAIN;
            this.materialData.diffuseTex = colormap;
            this.materialData.maskTex = controlTex;
            this.materialData.splat_0Tex = splat_0;
            this.materialData.splat_1Tex = splat_1;
            this.materialData.splat_2Tex = splat_2;
            this.materialData.splat_3Tex = splat_3;
            if (!lightMap)
                this.materialData.lightMapTex = egret3d.CheckerboardTexture.texture;
            else
                this.materialData.lightMapTex = lightMap;
            this.initMatPass();
        }
        /**
         * @language zh_CN
         * @param index
         * @param x
         * @param y
         */
        TerrainMaterial.prototype.setUVTitling = function (index, x, y) {
            this.diffusePass.diffuseMethod.setUVTitling(index, x, y);
        };
        return TerrainMaterial;
    })(egret3d.MaterialBase);
    egret3d.TerrainMaterial = TerrainMaterial;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.TextureMaterial
    * @classdesc
    * 纹理材质
    */
    var TextureMaterial = (function (_super) {
        __extends(TextureMaterial, _super);
        /**
         * @language zh_CN
         * @param texture
         * @param materialData
         */
        function TextureMaterial(texture, materialData) {
            if (texture === void 0) { texture = null; }
            if (materialData === void 0) { materialData = null; }
            _super.call(this, materialData);
            if (!texture) {
                this.diffuseTexture = egret3d.CheckerboardTexture.texture;
            }
            else {
                this.diffuseTexture = texture;
            }
            this.initMatPass();
        }
        /**
         * @language zh_CN
         */
        TextureMaterial.prototype.clone = function () {
            var mat = new TextureMaterial(this.diffuseTexture, this.materialData.clone());
            return mat;
        };
        return TextureMaterial;
    })(egret3d.MaterialBase);
    egret3d.TextureMaterial = TextureMaterial;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Frustum
    * @classdesc
    * 摄相机视椎体
    */
    var Frustum = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function Frustum() {
            this._vtxNum = 8;
            this._planeNum = 6;
            this._vertex = new Array();
            for (var i = 0; i < this._vtxNum; ++i) {
                this._vertex.push(new egret3d.Vector3D());
            }
            this._pos = new egret3d.Vector3D();
            this._plane = new Array();
            for (var i = 0; i < 6; ++i) {
                this._plane.push(new egret3d.Plane3D());
            }
            this.box = new egret3d.CubeBoxBound(new egret3d.Vector3D(), new egret3d.Vector3D());
            ///this.box = new CubeBoxBound(new Vector3D(99999.0, 99999.0, 99999.0), new Vector3D(-99999.0, -99999.0, -99999.0));
            this.center = new egret3d.Vector3D();
        }
        /**
        * @language zh_CN
        * 生成一个视椎体
        * @param fovY 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspectRatio 纵横比，在视空间宽度除以高度.
        * @param nearPlane 近裁剪面位置Z值.
        * @param farPlane 远裁剪面位置Z值.
        */
        Frustum.prototype.makeFrustum = function (fovY, aspectRatio, nearPlane, farPlane) {
            ///var tangent: number = Math.tan(fovY / 2.0 * (Math.PI / 180.0));
            var tangent = Math.tan(fovY / 2.0 * (Math.PI / 180.0));
            var nearHeight = nearPlane * tangent;
            var nearWidth = nearHeight * aspectRatio;
            var farHeight = farPlane * tangent;
            var farWidth = farHeight * aspectRatio;
            /// near top right
            this._vertex[0].x = nearWidth;
            this._vertex[0].y = nearHeight;
            this._vertex[0].z = nearPlane;
            /// near top left
            this._vertex[1].x = -nearWidth;
            this._vertex[1].y = nearHeight;
            this._vertex[1].z = nearPlane;
            /// near bottom left
            this._vertex[2].x = -nearWidth;
            this._vertex[2].y = -nearHeight;
            this._vertex[2].z = nearPlane;
            /// near bottom right
            this._vertex[3].x = nearWidth;
            this._vertex[3].y = -nearHeight;
            this._vertex[3].z = nearPlane;
            /// far top right
            this._vertex[4].x = farWidth;
            this._vertex[4].y = farHeight;
            this._vertex[4].z = farPlane;
            /// far top left
            this._vertex[5].x = -farWidth;
            this._vertex[5].y = farHeight;
            this._vertex[5].z = farPlane;
            /// far bottom left
            this._vertex[6].x = -farWidth;
            this._vertex[6].y = -farHeight;
            this._vertex[6].z = farPlane;
            /// far bottom right
            this._vertex[7].x = farWidth;
            this._vertex[7].y = -farHeight;
            this._vertex[7].z = farPlane;
        };
        /**
        * @language zh_CN
        * 数据更新.
        * @param camera 视椎的摄像机.
        */
        Frustum.prototype.update = function (camera) {
            this.makeFrustum(camera.fieldOfView, camera.aspectRatio, camera.near, camera.far);
            /// 摄像机变化之后的顶点也变化;
            var vtx = new Array();
            var mat = new egret3d.Matrix4_4();
            mat.copyFrom(camera.modelMatrix);
            ///mat.invert(); /// 眼睛的世界矩阵;
            this._curVer = vtx;
            for (var i = 0; i < this._vtxNum; ++i) {
                vtx.push(mat.transformVector(this._vertex[i]));
            }
            for (var i = 0; i < vtx.length; ++i) {
                if (this.box.max.x < vtx[i].x) {
                    this.box.max.x = vtx[i].x;
                }
                if (this.box.max.y < vtx[i].y) {
                    this.box.max.y = vtx[i].y;
                }
                if (this.box.max.z < vtx[i].z) {
                    this.box.max.z = vtx[i].z;
                }
                if (this.box.min.x > vtx[i].x) {
                    this.box.min.x = vtx[i].x;
                }
                if (this.box.min.y > vtx[i].y) {
                    this.box.min.y = vtx[i].y;
                }
                if (this.box.min.z > vtx[i].z) {
                    this.box.min.z = vtx[i].z;
                }
            }
            this.box.calculateBox();
            this._plane[0].fromPoints(vtx[4], vtx[5], vtx[6]); /// 远平面(far);
            this._plane[1].fromPoints(vtx[1], vtx[6], vtx[5]); /// 左平面(left);
            this._plane[2].fromPoints(vtx[0], vtx[4], vtx[7]); /// 右平面(right);
            this._plane[3].fromPoints(vtx[1], vtx[0], vtx[3]); /// 近平面(near);
            this._plane[4].fromPoints(vtx[1], vtx[5], vtx[4]); /// 上平面(top);
            this._plane[5].fromPoints(vtx[3], vtx[7], vtx[6]); /// 下平面(bottom);
            for (var i = 0; i < this._planeNum; i++) {
                this._plane[i].normalize();
            }
            var nearCenter = new egret3d.Vector3D();
            nearCenter.copyFrom(vtx[0].subtract(vtx[2]));
            nearCenter.scaleBy(0.5);
            nearCenter.copyFrom(vtx[2].add(nearCenter));
            var farCenter = new egret3d.Vector3D();
            farCenter.copyFrom(vtx[4].subtract(vtx[6]));
            farCenter.scaleBy(0.5);
            farCenter.copyFrom(vtx[6].add(farCenter));
            this.center.copyFrom(farCenter.subtract(nearCenter));
            this.center.scaleBy(0.5);
            this.center.copyFrom(nearCenter.add(this.center));
        };
        /**
        * @language zh_CN
        * 检测一个坐标点是否在视椎体内
        * @param pos 检测的坐标
        @ return 在视椎内返回ture
        */
        Frustum.prototype.inPoint = function (pos) {
            var dis = 0;
            for (var i = 0; i < this._plane.length; ++i) {
                dis = this._plane[i].distance(pos);
                if (dis > 0.0) {
                    return false;
                }
            }
            return true;
        };
        /**
        * @language zh_CN
        * 检测一个球是否在视椎体内
        * @param center 球的坐标
        * @param radius 球的半径
        @ return 在视椎内返回ture
        */
        Frustum.prototype.inSphere = function (center, radius) {
            var dis = 0;
            for (var i = 0; i < this._plane.length; ++i) {
                dis = this._plane[i].distance(center);
                if (dis > radius) {
                    return false;
                }
            }
            return true;
        };
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param box 盒子
        @ return 在视椎内返回ture
        */
        Frustum.prototype.inBox = function (box) {
            var v = new Array();
            var dis = 0;
            var temp = new egret3d.Vector3D();
            for (var i = 0; i < this._plane.length; ++i) {
                var incount = box.vexData.length / 3;
                for (var j = 0; j < box.vexData.length; j += 3) {
                    temp.setTo(box.vexData[j], box.vexData[j + 1], box.vexData[j + 2]);
                    dis = this._plane[i].distance(temp);
                    if (dis > 0) {
                        incount--;
                    }
                }
                if (incount <= 0) {
                    return false;
                }
            }
            return true;
        };
        return Frustum;
    })();
    egret3d.Frustum = Frustum;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 3d空间中的实体对象
    */
    var Object3D = (function (_super) {
        __extends(Object3D, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function Object3D() {
            _super.call(this);
            this._modeMatrix3D = new egret3d.Matrix4_4();
            this._transformChange = true;
            this._pos = new egret3d.Vector3D();
            this._rot = new egret3d.Vector3D();
            this._sca = new egret3d.Vector3D(1, 1, 1);
            this._orientation = new egret3d.Quaternion();
            this._globalPos = new egret3d.Vector3D();
            this._globalRot = new egret3d.Vector3D();
            this._globalSca = new egret3d.Vector3D(1, 1, 1);
            this._globalOrientation = new egret3d.Quaternion();
            this._qut = new egret3d.Quaternion();
            this._active = false;
            this._mat = new egret3d.Matrix4_4();
            /**
            * @language zh_CN
            * 渲染层级
            */
            this.layer = 0x00000000;
            /**
            * @language zh_CN
            * 是否开启鼠标事件
            */
            this.mouseEnable = false;
            /**
            * @language zh_CN
            * 是否需要视锥体裁剪
            */
            this.isCut = true;
            /**
            * @language zh_CN
            * 父亲节点
            */
            this.parent = null;
            /**
            * @language zh_CN
            * 子对象列表
            */
            this.childs = new Array();
            /**
            * @language zh_CN
            * 动作对象
            */
            this.animation = null;
            /**
            * @language zh_CN
            * 几何对象
            */
            this.geometry = null;
            /**
            * @language zh_CN
            * 材质
            */
            this.material = null;
            /**
            * @language zh_CN
            * 碰撞盒子
            */
            this.box = new egret3d.CubeBoxBound();
            /**
            * @language zh_CN
            * 是否开启盒子检测
            */
            this.isCheckBox = true;
            /**
            * @language zh_CN
            * 鼠标检测数据
            */
            this.pickerData = new egret3d.PickResult();
            /**
            * @language zh_CN
            * 是否控制
            */
            this.isController = true;
            /**
            * @language zh_CN
            * 是否可见
            */
            this.isVisible = true;
            /**
            * @language zh_CN
            * 是否关闭
            */
            this.isDisable = false;
            this._worldBox = new egret3d.CubeBoxBound();
            this.id = ++Object3D.s_id;
        }
        Object.defineProperty(Object3D.prototype, "position", {
            /**
            * @language zh_CN
            * 返回位移
            * @readOnly
            * @returns 位移
            */
            get: function () {
                return this._pos;
            },
            /**
            * @language zh_CN
            * 设置位移
            * @writeOnly
            * @param vec 位移
            */
            set: function (vec) {
                this.updateTransformChange(true);
                this._pos.copyFrom(vec);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotation", {
            /**
            * @language zh_CN
            * 返回旋转
            * @readOnly
            * @returns 旋转
            */
            get: function () {
                return this._rot;
            },
            /**
            * @language zh_CN
            * 设置旋转
            * @writeOnly
            * @param vec 旋转
            */
            set: function (value) {
                this._rot.x = value.x;
                this._rot.y = value.y;
                this._rot.z = value.z;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
                this.updateTransformChange(true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scale", {
            /**
            * @language zh_CN
            * 返回缩放
            * @readOnly
            * @returns 缩放
            */
            get: function () {
                return this._sca;
            },
            /**
            * @language zh_CN
            * 设置缩放
            * @writeOnly
            * @param vec 缩放
            */
            set: function (val) {
                this.updateTransformChange(true);
                this._sca = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "x", {
            /**
            * @language zh_CN
            * 返回x坐标
            * @readOnly
            * @returns x坐标
            */
            get: function () {
                return this._pos.x;
            },
            /**
            * @language zh_CN
            * 设置x坐标
            * @writeOnly
            * @param value x坐标
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._pos.x == value)
                    return;
                this._pos.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "y", {
            /**
            * @language zh_CN
            * 返回y坐标
            * @readOnly
            * @returns y坐标
            */
            get: function () {
                return this._pos.y;
            },
            /**
            * @language zh_CN
            * 设置y坐标
            * @writeOnly
            * @param value y坐标
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._pos.y == value)
                    return;
                this._pos.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "z", {
            /**
            * @language zh_CN
            * 返回z坐标
            * @readOnly
            * @returns z坐标
            */
            get: function () {
                return this._pos.z;
            },
            /**
            * @language zh_CN
            * 设置z坐标
            * @writeOnly
            * @param value z坐标
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._pos.z == value)
                    return;
                this._pos.z = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotationX", {
            /**
            * @language zh_CN
            * 返回x旋转
            * @readOnly
            * @returns x旋转
            */
            get: function () {
                return this._rot.x;
            },
            /**
            * @language zh_CN
            * 设置x轴旋转
            * @writeOnly
            * @param value x轴旋转
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._rot.x == value)
                    return;
                this._rot.x = value;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotationY", {
            /**
            * @language zh_CN
            * 返回y旋转
            * @readOnly
            * @returns y旋转
            */
            get: function () {
                return this._rot.y;
            },
            /**
            * @language zh_CN
            * 设置y轴旋转
            * @writeOnly
            * @param value y轴旋转
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._rot.y == value)
                    return;
                this._rot.y = value;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "rotationZ", {
            /**
            * @language zh_CN
            * 返回z旋转
            * @readOnly
            * @returns z旋转
            */
            get: function () {
                return this._rot.z;
            },
            /**
            * @language zh_CN
            * 设置z轴旋转
            * @writeOnly
            * @param value z轴旋转
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._rot.z == value)
                    return;
                this._rot.z = value;
                this._orientation.fromEulerAngles(this._rot.x, this._rot.y, this._rot.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scaleX", {
            /**
            * @language zh_CN
            * 返回x缩放
            * @readOnly
            * @returns x缩放
            */
            get: function () {
                return this._sca.x;
            },
            /**
            * @language zh_CN
            * 设置x轴缩放
            * @writeOnly
            * @param value x轴缩放
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._sca.x == value)
                    return;
                this._sca.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scaleY", {
            /**
            * @language zh_CN
            * 返回y缩放
            * @readOnly
            * @returns y缩放
            */
            get: function () {
                return this._sca.y;
            },
            /**
            * @language zh_CN
            * 设置y轴缩放
            * @writeOnly
            * @param value y轴缩放
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._sca.y == value)
                    return;
                this._sca.y = value;
                this._transformChange = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "scaleZ", {
            /**
            * @language zh_CN
            * 返回z缩放
            * @readOnly
            * @returns z缩放
            */
            get: function () {
                return this._sca.z;
            },
            /**
            * @language zh_CN
            * 设置z轴缩放
            * @writeOnly
            * @param value z轴缩放
            */
            set: function (value) {
                this.updateTransformChange(true);
                if (this._sca.z == value)
                    return;
                this._sca.z = value;
                this._transformChange = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "modelMatrix", {
            /**
            * @language zh_CN
            * 返回 object 世界渲染矩阵
            * @readOnly
            * @returns object 世界渲染矩阵
            */
            get: function () {
                if (this._transformChange) {
                    this._transformChange = false;
                    this.updateModleMatrix();
                }
                return this._modeMatrix3D;
            },
            enumerable: true,
            configurable: true
        });
        Object3D.prototype.updateModleMatrix = function () {
            if (this.parent != null) {
                var parentOrientation = this.parent.globalOrientation;
                this._globalOrientation.multiply(parentOrientation, this._orientation);
                this._globalOrientation.toEulerAngles(this._globalRot);
                var parentScale = this.parent.globalScale;
                this._globalSca.copyFrom(parentScale.multiply(this._sca));
                parentOrientation.rotatePoint(parentScale.multiply(this._pos), this._globalPos);
                this._globalPos.copyFrom(this._globalPos.add(this.globalPosition));
            }
            else {
                this._globalOrientation = this._orientation;
                this._globalPos = this._pos;
                this._globalSca = this._sca;
                this._globalRot = this._rot;
            }
            //this._modeMatrix3D.recompose([this._globalPos, this._globalRot, this._globalSca]);
            this._modeMatrix3D.makeTransform(this._globalPos, this._globalSca, this._globalOrientation);
            this.onUpdateTransform();
        };
        Object3D.prototype.onUpdateTransform = function () {
        };
        Object.defineProperty(Object3D.prototype, "globalPosition", {
            /**
            * @language zh_CN
            * 返回 object 世界位置
            * @readOnly
            * @returns object 世界位置
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalPos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalRotation", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转
            * @readOnly
            * @returns object 世界旋转
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalRot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalScale", {
            /**
            * @language zh_CN
            * 返回 object 世界缩放
            * @readOnly
            * @returns object 世界缩放
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalSca;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "globalOrientation", {
            /**
            * @language zh_CN
            * 返回 object 世界旋转
            * @readOnly
            * @returns object 世界旋转
            */
            get: function () {
                if (this._transformChange) {
                    this.modelMatrix;
                }
                return this._globalOrientation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Object3D.prototype, "worldBox", {
            /**
            * @language zh_CN
            * 返回 object 世界变换后的碰撞盒子
            * @readOnly
            * @returns object 世界变换后的碰撞盒子
            */
            get: function () {
                if (this._transformChange) {
                    var mat = new egret3d.Matrix4_4();
                    mat.identity();
                    mat.rawData[12] = this.modelMatrix.rawData[12];
                    mat.rawData[13] = this.modelMatrix.rawData[13];
                    mat.rawData[14] = this.modelMatrix.rawData[14];
                    mat.rawData[0] = this._globalSca.x;
                    mat.rawData[5] = this._globalSca.y;
                    mat.rawData[10] = this._globalSca.z;
                    this._worldBox.copyFrom(this.box.Transform(mat));
                }
                return this._worldBox;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * Moves the 3d object forwards along it's local z axis
        *
        * @param    distance    The length of the movement
        */
        Object3D.prototype.moveForward = function (distance) {
            this.translateLocal(egret3d.Vector3D.Z_AXIS, distance);
        };
        /**
        * Moves the 3d object backwards along it's local z axis
        *
        * @param    distance    The length of the movement
        */
        Object3D.prototype.moveBackward = function (distance) {
            this.translateLocal(egret3d.Vector3D.Z_AXIS, -distance);
        };
        /**
        * Moves the 3d object backwards along it's local x axis
        *
        * @param    distance    The length of the movement
        */
        Object3D.prototype.moveLeft = function (distance) {
            this.translateLocal(egret3d.Vector3D.X_AXIS, -distance);
        };
        /**
        * Moves the 3d object forwards along it's local x axis
        *
        * @param    distance    The length of the movement
        */
        Object3D.prototype.moveRight = function (distance) {
            this.translateLocal(egret3d.Vector3D.X_AXIS, distance);
        };
        /**
        * Moves the 3d object forwards along it's local y axis
        *
        * @param    distance    The length of the movement
        */
        Object3D.prototype.moveUp = function (distance) {
            this.translateLocal(egret3d.Vector3D.Y_AXIS, distance);
        };
        /**
        * Moves the 3d object backwards along it's local y axis
        *
        * @param    distance    The length of the movement
        */
        Object3D.prototype.moveDown = function (distance) {
            this.translateLocal(egret3d.Vector3D.Y_AXIS, -distance);
        };
        /**
        * Moves the 3d object along a vector by a defined length
        *
        * @param    axis        The vector defining the axis of movement
        * @param    distance    The length of the movement
        */
        Object3D.prototype.translateLocal = function (axis, distance) {
            var x = axis.x, y = axis.y, z = axis.z;
            var len = distance / Math.sqrt(x * x + y * y + z * z);
            this._modeMatrix3D.appendTranslation(x * len, y * len, z * len);
            this._modeMatrix3D.copyRowTo(3, this._pos);
        };
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * @param child 增加的子对象
        * @returns 子对象
        */
        Object3D.prototype.addChild = function (child) {
            child.updateTransformChange(true);
            Object3D.renderListChange = true;
            this.childs.push(child);
            child.parent = this;
            return child;
        };
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * @param child 增加的子对象
        * @param index 子对象的下标
        * @returns 子对象
        */
        Object3D.prototype.addChildAt = function (child, index) {
            child.updateTransformChange(true);
            if (index < 0) {
                this.childs.splice(0, 0, child);
            }
            else if (index >= this.childs.length) {
                this.childs.push(child);
            }
            else {
                this.childs.splice(index, 0, child);
            }
            child.parent = this;
            return child;
        };
        /**
        * @language zh_CN
        * 返回下标为index的子对象
        * @param index 子对象下标
        * @returns 如果有就返回子对象,否则就返回null.
        */
        Object3D.prototype.getChildAt = function (index) {
            if (index < 0 || index >= this.childs.length)
                return null;
            return this.childs[index];
        };
        /**
        * @language zh_CN
        * 返回子对角child的下标
        * @param child 子对象
        * @returns 如果有就返回子对象的下标,否则就返回-1.
        */
        Object3D.prototype.getChildIndex = function (child) {
            for (var index = 0; index < this.childs.length; ++index) {
                if (this.childs[index] != child) {
                    continue;
                }
                return index;
            }
            return -1;
        };
        /**
        * @language zh_CN
        * 移除child子对象 并返回
        * @param child 子对象
        * @returns 如果成功就返回child,否则返回null
        */
        Object3D.prototype.removeChild = function (child) {
            for (var index = 0; index < this.childs.length; ++index) {
                if (this.childs[index] != child) {
                    continue;
                }
                child.parent = null;
                this.childs.splice(index, 1);
                return child;
            }
            return null;
        };
        /**
        * @language zh_CN
        * 移除下标为index的子对象 并返回
        * @param index 子对象的下标
        * @returns 如果成功就返回child,否则返回null
        */
        Object3D.prototype.removeChildAt = function (index) {
            if (index < 0 || index >= this.childs.length)
                return null;
            var object3D = this.childs[index];
            object3D.parent = null;
            this.childs.splice(index, 1);
            return object3D;
        };
        /**
        * @language zh_CN
        * 设置子对象的下标
        * @param child 子对象
        * @param index 子对象的下标
        */
        Object3D.prototype.setChildIndex = function (child, index) {
            for (var i = 0; i < this.childs.length; ++i) {
                if (this.childs[i] != child) {
                    continue;
                }
                if (i == index) {
                    return;
                }
                else if (index > i) {
                    for (var m = i; m > index; --m) {
                        this.childs[m] = this.childs[m - 1];
                    }
                }
                else if (index < i) {
                    for (var m = i; m < index; ++m) {
                        this.childs[m] = this.childs[m + 1];
                    }
                }
                this.childs[index] = child;
                return;
            }
        };
        /**
        * @language zh_CN
        * 交换子对象的位置
        * @param child1 子对象1
        * @param child2 子对象2
        */
        Object3D.prototype.swapChildren = function (child1, child2) {
            var index1 = 0, index2 = 0;
            for (; index1 < this.childs.length; ++index1) {
                if (this.childs[index1] != child1) {
                    continue;
                }
                for (; index2 < this.childs.length; ++index2) {
                    if (this.childs[index2] != child2) {
                        continue;
                    }
                    var tmp = this.childs[index1];
                    this.childs[index1] = this.childs[index2];
                    this.childs[index2] = tmp;
                    break;
                }
                return;
            }
        };
        /**
        * @language zh_CN
        * 交换子对象的位置
        * @param index1 子对象1下标
        * @param index2 子对象2下标
        */
        Object3D.prototype.swapChildrenAt = function (index1, index2) {
            if (index1 < 0 || index1 >= this.childs.length)
                return;
            if (index2 < 0 || index2 >= this.childs.length)
                return;
            var tmp = this.childs[index1];
            this.childs[index1] = this.childs[index2];
            this.childs[index2] = tmp;
        };
        Object3D.prototype.bindWireframe = function (wireframe) {
            wireframe.modleMatrix = this._modeMatrix3D;
        };
        /**
        * @language zh_CN
        * 当前对象对视位置
        * @param pos 对象的位置
        * @param target 目标的位置
        * @param up 向上的方向
        */
        Object3D.prototype.lookAt = function (pos, target, up) {
            if (up === void 0) { up = egret3d.Vector3D.Y_AXIS; }
        };
        Object.defineProperty(Object3D.prototype, "lookAtPosition", {
            /**
            * @language zh_CN
            * 返回目标的位置
            * @readOnly
            * @returns 目标的位置
            */
            get: function () {
                return new egret3d.Vector3D();
            },
            enumerable: true,
            configurable: true
        });
        Object3D.prototype.updateTransformChange = function (change) {
            this._transformChange = change;
            ///Octree.getInstance().checkObject3D(obj);
            for (var i = 0; i < this.childs.length; ++i) {
                this.childs[i].updateTransformChange(change);
            }
        };
        /**
        * @language zh_CN
        * 当前对象数据更新
        * @param time 当前时间
        * @param delay 每帧时间间隔
        */
        Object3D.prototype.update = function (time, delay) {
        };
        /**
        * @language zh_CN
        * 返回对象的屏幕坐标
        * @param camera 对象渲染的摄像机
        * @returns 对象的屏幕坐标
        */
        Object3D.prototype.getScreenPosition = function (camera) {
            this._mat.copyFrom(camera.viewProjectionMatrix);
            this._mat.append(this.modelMatrix);
            return this._mat.transformVector(this.globalPosition);
        };
        Object3D.renderListChange = true;
        Object3D.s_id = 0;
        return Object3D;
    })(egret3d.EventDispatcher);
    egret3d.Object3D = Object3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * 天空球
    */
    var SphereSky = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param tex1 天空球贴图
        */
        function SphereSky(tex1) {
            this.normalMatrix = new egret3d.Matrix4_4();
            this.px = 0;
            this.py = 0;
            this.pz = 0;
            this.offest = new egret3d.Vector3D();
            this.skyTexture = new egret3d.ImageTexture(tex1);
            this.usage = new egret3d.MethodUsageData();
            this.vsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.fsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.setShader("spheresky_vertex", "spheresky_fragment");
            this.skyMatrix = new egret3d.Matrix4_4();
        }
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        */
        SphereSky.prototype.setShader = function (vsName, fsName) {
            this.vsShader.addShader(vsName);
            this.fsShader.addShader(fsName);
            this.vsShaderSource = this.vsShader.getShaderSource();
            this.fsShaderSource = this.fsShader.getShaderSource();
        };
        SphereSky.prototype.rebuild = function (context3D) {
            var vertexShader = context3D.creatVertexShader(this.vsShaderSource);
            var fragmentShader = context3D.creatFragmentShader(this.fsShaderSource);
            this.usage.program3D = context3D.creatProgram(vertexShader, fragmentShader);
            if (this.usage.program3D) {
                context3D.setProgram(this.usage.program3D);
            }
            this.sphereGeometry = this.sphereGeometry || new egret3d.SphereGeometry();
            if (!this.sphereGeometry.sharedVertexBuffer) {
                this.sphereGeometry.sharedVertexBuffer = context3D.creatVertexBuffer(this.sphereGeometry.verticesData);
                this.sphereGeometry.numberOfVertices = this.sphereGeometry.verticesData.length / this.sphereGeometry.vertexAttLength;
                this.sphereGeometry.vertexSizeInBytes = this.sphereGeometry.positionSize * Float32Array.BYTES_PER_ELEMENT +
                    3 * Float32Array.BYTES_PER_ELEMENT +
                    3 * Float32Array.BYTES_PER_ELEMENT +
                    4 * Float32Array.BYTES_PER_ELEMENT +
                    2 * Float32Array.BYTES_PER_ELEMENT +
                    2 * Float32Array.BYTES_PER_ELEMENT; ///uv2 60
                this.sphereGeometry.sharedIndexBuffer = context3D.creatIndexBuffer(this.sphereGeometry.indexData);
            }
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_position");
            this.usage.attribute_normal.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_normal");
            this.usage.attribute_uv0.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_uv0");
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ProjectionMatrix");
            this.usage.uniform_ModelMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ModelMatrix");
            this.usage.uniform_normalMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_normalMatrix");
            ///--------texture----------------
            ///this.usage.sky_texture.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "sky_texture");
        };
        /**
        * @language zh_CN
        * 渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        */
        SphereSky.prototype.draw = function (context3D, camera) {
            if (!this.usage.program3D)
                this.rebuild(context3D);
            context3D.setProgram(this.usage.program3D);
            context3D.gl.enable(egret3d.Egret3DDrive.CULL_FACE);
            context3D.gl.cullFace(egret3d.Egret3DDrive.FRONT);
            context3D.gl.enable(egret3d.Egret3DDrive.BLEND);
            context3D.gl.blendFunc(egret3d.Egret3DDrive.ONE, egret3d.Egret3DDrive.ZERO);
            context3D.bindVertexBuffer(this.sphereGeometry.sharedVertexBuffer);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, this.sphereGeometry.vertexSizeInBytes, 0);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_normal.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, this.sphereGeometry.vertexSizeInBytes, 12);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_uv0.uniformIndex, 2, egret3d.Egret3DDrive.FLOAT, false, this.sphereGeometry.vertexSizeInBytes, 52);
            this.skyMatrix.identity();
            this.skyMatrix.appendTranslation(camera.x, camera.y, camera.z);
            this.normalMatrix.copyFrom(this.skyMatrix);
            this.normalMatrix.invert();
            this.normalMatrix.transpose();
            this.normalMatrix.appendScale(1, 1, 1);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, camera.viewProjectionMatrix.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_ModelMatrix.uniformIndex, false, this.skyMatrix.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_normalMatrix.uniformIndex, false, this.normalMatrix.rawData);
            this.skyTexture.upload(context3D);
            ///--------texture----------------
            ///context3D.setTexture2DAt(context3D.gl.TEXTURE0, 0, this.usage.sky_texture.uniformIndex, this.skyTexture.texture);
            ///context3D.gl.activeTexture(context3D.gl.TEXTURE0);
            ///context3D.gl.bindTexture(context3D.gl.TEXTURE_2D, this.skyTexture.texture.gpu_texture);
            ///context3D.gl.uniform1i(this.usage.sky_texture.index, 0);
            context3D.drawElement(egret3d.DrawMode.TRIANGLES, this.sphereGeometry.sharedIndexBuffer, 0, this.sphereGeometry.numItems);
        };
        return SphereSky;
    })();
    egret3d.SphereSky = SphereSky;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Sky
    * @classdesc
    * 天空盒子
    */
    var Sky = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param skyTexture 天空盒子贴图
        */
        function Sky(skyTexture) {
            this.px = 0;
            this.py = 0;
            this.pz = 0;
            this.offest = new egret3d.Vector3D();
            this.skyTexture = skyTexture;
            this.usage = new egret3d.MethodUsageData();
            this.vsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.fsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.setShader("sky_vertex", "sky_fragment");
            this.skyMatrix = new egret3d.Matrix4_4();
            this.modelMatrix = new egret3d.Matrix4_4();
        }
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        */
        Sky.prototype.setShader = function (vsName, fsName) {
            this.vsShader.addShader(vsName);
            this.fsShader.addShader(fsName);
            this.vsShaderSource = this.vsShader.getShaderSource();
            this.fsShaderSource = this.fsShader.getShaderSource();
        };
        Sky.prototype.rebuild = function (context3D) {
            var vertexShader = context3D.creatVertexShader(this.vsShaderSource);
            var fragmentShader = context3D.creatFragmentShader(this.fsShaderSource);
            this.usage.program3D = context3D.creatProgram(vertexShader, fragmentShader);
            if (this.usage.program3D) {
                context3D.setProgram(this.usage.program3D);
            }
            this.cubeGeometry = this.cubeGeometry || new egret3d.CubeGeometry();
            if (!this.cubeGeometry.sharedVertexBuffer) {
                this.cubeGeometry.sharedVertexBuffer = context3D.creatVertexBuffer(this.cubeGeometry.verticesData);
                this.cubeGeometry.numberOfVertices = this.cubeGeometry.verticesData.length / this.cubeGeometry.vertexAttLength;
                this.cubeGeometry.vertexSizeInBytes = this.cubeGeometry.positionSize * Float32Array.BYTES_PER_ELEMENT +
                    3 * Float32Array.BYTES_PER_ELEMENT +
                    3 * Float32Array.BYTES_PER_ELEMENT +
                    4 * Float32Array.BYTES_PER_ELEMENT +
                    2 * Float32Array.BYTES_PER_ELEMENT +
                    2 * Float32Array.BYTES_PER_ELEMENT; ///uv2 60
                this.cubeGeometry.sharedIndexBuffer = context3D.creatIndexBuffer(this.cubeGeometry.indexData);
            }
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_position");
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ProjectionMatrix");
            this.usage.uniform_ModelMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ModelMatrix");
            ///--------texture----------------
            ///var sampler2D: GLSL.Sampler2D;
            ///for (var index in this.usage.sampler2DList) {
            ///    sampler2D = this.usage.sampler2DList[index];
            ///    sampler2D.uniformIndex = context3D.getUniformLocation(this.usage.program3D, sampler2D.varName);
            ///}
            var sampler3D;
            for (var index in this.usage.sampler3DList) {
                sampler3D = this.usage.sampler3DList[index];
                sampler3D.uniformIndex = context3D.getUniformLocation(this.usage.program3D, sampler3D.varName);
                if (sampler3D.varName == "sky_texture") {
                    sampler3D.texture = this.skyTexture;
                }
            }
            ///this.test = CheckerboardTexture.texture; 
            ///this.skyUni = context3D.getUniformLocation(this.usage.program3D, "sky_texture");
            ///this.texUni = context3D.getUniformLocation(this.usage.program3D, "diffuseTex" );
        };
        /**
        * @language zh_CN
        * 渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        */
        Sky.prototype.draw = function (context3D, camera) {
            if (!this.usage.program3D)
                this.rebuild(context3D);
            context3D.setProgram(this.usage.program3D);
            context3D.gl.enable(egret3d.Egret3DDrive.CULL_FACE);
            context3D.gl.cullFace(egret3d.Egret3DDrive.FRONT);
            context3D.bindVertexBuffer(this.cubeGeometry.sharedVertexBuffer);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, this.cubeGeometry.vertexSizeInBytes, 0);
            this.skyMatrix.identity();
            this.skyMatrix.appendTranslation(camera.x, camera.y, camera.z);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, camera.viewProjectionMatrix.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_ModelMatrix.uniformIndex, false, this.skyMatrix.rawData);
            ///--------texture----------------
            ///var sampler2D: GLSL.Sampler2D;
            ///for (var index in this.usage.sampler2DList) {
            ///    sampler2D = this.usage.sampler2DList[index];
            ///sampler2D.texture.upload(context3D);
            ///context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture);
            ///}
            ///context3D.setTexture2DAt(context3D.gl.TEXTURE1, this.texUni, 1, this.test.texture.gpu_texture );
            var sampler3D;
            for (var index in this.usage.sampler3DList) {
                sampler3D = this.usage.sampler3DList[index];
                sampler3D.texture.upload(context3D);
                context3D.setCubeTextureAt(sampler3D.activeTextureIndex, sampler3D.uniformIndex, sampler3D.index, sampler3D.texture.cubeTexture);
            }
            ///this.skyTexture.upload(context3D);
            /// context3D.setCubeTextureAt(context3D.gl.TEXTURE0, this.skyUni, 0, this.skyTexture.cubeTexture.gpu_texture );
            context3D.drawElement(egret3d.DrawMode.TRIANGLES, this.cubeGeometry.sharedIndexBuffer, 0, this.cubeGeometry.numItems);
        };
        return Sky;
    })();
    egret3d.Sky = Sky;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Entity
    * @classdesc
    * 3d空间中的实体对象 extends Object3D
    */
    var Entity = (function (_super) {
        __extends(Entity, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function Entity() {
            _super.call(this);
        }
        return Entity;
    })(egret3d.Object3D);
    egret3d.Entity = Entity;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (CameraType) {
        CameraType[CameraType["perspective"] = 0] = "perspective";
        CameraType[CameraType["orthogonal"] = 1] = "orthogonal";
        CameraType[CameraType["VR"] = 2] = "VR";
    })(egret3d.CameraType || (egret3d.CameraType = {}));
    var CameraType = egret3d.CameraType;
    ;
    (function (VRType) {
        VRType[VRType["left"] = 0] = "left";
        VRType[VRType["right"] = 1] = "right";
    })(egret3d.VRType || (egret3d.VRType = {}));
    var VRType = egret3d.VRType;
    ;
    /**
    * @class egret3d.Camera3D
    * @classdesc
    * 相机数据处理，生成3D摄相机
    */
    var Camera3D = (function (_super) {
        __extends(Camera3D, _super);
        /**
         * @language en_US
         * @param cameraType CameraType
         */
        /**
         * @language zh_CN
         * constructor
         * @param cameraType 相机类型
         */
        function Camera3D(cameraType) {
            if (cameraType === void 0) { cameraType = CameraType.perspective; }
            _super.call(this);
            /**
              * @language en_US
              */
            /**
             * @language zh_CN
             * 相机投影矩阵
             */
            this.projectMatrix = new egret3d.Matrix4_4();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             * @相机的视椎体
             */
            this.frustum = new egret3d.Frustum();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             *
             */
            this._viewPort = new egret3d.Rectangle();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._scissorRect = new egret3d.Rectangle();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._aspectRatio = 1.0;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._fovY = 45.0;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._near = 1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._far = 10000.0;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this.temp = new egret3d.Matrix4_4();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._lookAtPosition = new egret3d.Vector3D();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._up = new egret3d.Vector3D(0, 1, 0);
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._cameraType = 0;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._cameraMatrixChange = false;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._viewMatrix = new egret3d.Matrix4_4();
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._tempQuat = new egret3d.Quaternion();
            this.cameraType = cameraType;
        }
        Object.defineProperty(Camera3D.prototype, "cameraType", {
            /**
             * @language zh_CN
             * 设置相机类型
             * @param cameraType 相机类型
             */
            set: function (cameraType) {
                this._cameraType = cameraType;
                switch (cameraType) {
                    case CameraType.orthogonal:
                        this.cameraMatrix = this.modelMatrix;
                        ///this.projectMatrix.ortho(this._viewPort.width, this._viewPort.height, this._near, this._far);
                        this.updataOrth();
                        break;
                    case CameraType.perspective:
                        this.cameraMatrix = this.modelMatrix;
                        this.projectMatrix.perspective(this._fovY, this._aspectRatio, this._near, this._far);
                        break;
                    case CameraType.VR:
                        this.cameraMatrix = this.modelMatrix;
                        this.projectMatrix.perspective(this._fovY, 1.0, this._near, this._far);
                        this.eyeMatrix = this.eyeMatrix || new egret3d.EyesMatrix();
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * @param cameraType CameraType
         * @param vrType VRType
         */
        /**
         * @language zh_CN
         * 打开VR相机
         * @param cameraType 相机类型
         * @param vrType VR类型
         */
        Camera3D.prototype.tap = function (cameraType, vrType) {
            if (vrType === void 0) { vrType = null; }
            if (cameraType == CameraType.VR) {
                this.eyeMatrix.updte(this.modelMatrix);
                if (vrType == VRType.left) {
                    this.cameraMatrix = this.eyeMatrix.leftEyeMatrix;
                }
                else if (vrType == VRType.right) {
                    this.cameraMatrix = this.eyeMatrix.rightEyeMatrix;
                }
            }
            else {
                this.cameraMatrix = this.modelMatrix;
            }
        };
        Object.defineProperty(Camera3D.prototype, "aspectRatio", {
            /**
            * @language zh_CN
            * 返回相机横纵比
            * @readOnly
            * @returns 横纵比
            */
            get: function () {
                return this._aspectRatio;
            },
            /**
            * @language zh_CN
            * 设置相机横纵比
            * @writeOnly
            * @param value 横纵比
            */
            set: function (value) {
                if (this._aspectRatio != value) {
                    this._aspectRatio = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "fieldOfView", {
            /**
            * @language zh_CN
            * 返回相机fovY
            * @readOnly
            * @returns fovY
            */
            get: function () {
                return this._fovY;
            },
            /**
            * @language zh_CN
            * 设置相机fovY
            * @writeOnly
            * @param value fovY
            */
            set: function (value) {
                if (this._fovY != value) {
                    this._fovY = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "near", {
            /**
            * @language zh_CN
            * 返回相机近截面
            * @readOnly
            * @returns 近截面
            */
            get: function () {
                return this._near;
            },
            /**
            * @language zh_CN
            * 设置相机近截面
            * @writeOnly
            * @param value 近截面
            */
            set: function (value) {
                if (this._near != value) {
                    this._near = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "far", {
            /**
            * @language zh_CN
            * 返回相机远截面
            * @readOnly
            * @returns 远截面
            */
            get: function () {
                return this._far;
            },
            /**
            * @language zh_CN
            * 设置相机远截面
            * @writeOnly
            * @param value 远截面
            */
            set: function (value) {
                if (this._far != value) {
                    this._far = value;
                    this.cameraType = this._cameraType;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "viewProjectionMatrix", {
            /**
            * @language zh_CN
            * 返回相机视图投影矩阵
            * @readOnly
            * @returns 视图投影矩阵
            */
            get: function () {
                this.cameraMatrix = this.modelMatrix;
                this.temp.copyFrom(this.cameraMatrix);
                this.temp.invert();
                this.temp.append(this.projectMatrix);
                return this.temp;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         */
        /**
         * @language zh_CN
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         */
        Camera3D.prototype.updateScissorRect = function (x, y, width, height) {
            this._scissorRect.x = x;
            this._scissorRect.y = y;
            this._scissorRect.width = width;
            this._scissorRect.height = height;
        };
        /**
         * @language en_US
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         */
        /**
         * @language zh_CN
         * 更新视口
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         */
        Camera3D.prototype.updateViewport = function (x, y, width, height) {
            this._viewPort.x = x;
            this._viewPort.y = y;
            this._viewPort.width = width;
            this._viewPort.height = height;
        };
        /**
         * @language en_US
         * @param pos Vector3D
         * @param target Vector3D
         * @param up V3ctor3D
         */
        /**
         * @language zh_CN
         * 当前对象对视位置
         * @param pos 对象的位置
         * @param target 目标的位置
         * @param up 向上的方向
         */
        Camera3D.prototype.lookAt = function (pos, target, up) {
            if (up === void 0) { up = egret3d.Vector3D.Y_AXIS; }
            this.position = pos;
            this._lookAtPosition.copyFrom(target);
            this._up.copyFrom(up);
            this._viewMatrix.lookAt(this._pos, this._lookAtPosition, this._up);
            this._viewMatrix.invert();
            this._tempQuat.fromMatrix(this._viewMatrix);
            var r = this._tempQuat.toEulerAngles();
            this.rotation = r;
        };
        Camera3D.prototype.onUpdateTransform = function () {
            this._viewMatrix.copyFrom(this._modeMatrix3D);
            this._viewMatrix.invert();
        };
        Object.defineProperty(Camera3D.prototype, "viewMatrix", {
            /**
             * @language zh_CN
             * @readOnly
             * 相机视图矩阵
             */
            get: function () {
                return this._viewMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Camera3D.prototype, "lookAtPosition", {
            /**
             * @language zh_CN
             * @readOnly
             * 相机目标点
             */
            get: function () {
                return this._lookAtPosition;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 更新正交矩阵
         */
        Camera3D.prototype.updataOrth = function () {
            var _projectionHeight = 800;
            var raw = new Float32Array(16);
            var _yMax = _projectionHeight * .5;
            var _xMax = _yMax * this._aspectRatio;
            var left, right, top, bottom;
            ///return 
            if (this._scissorRect.x == 0 && this._scissorRect.y == 0 && this._scissorRect.width == this._viewPort.width && this._scissorRect.height == this._viewPort.height) {
                /// assume symmetric frustum
                left = -_xMax;
                right = _xMax;
                top = -_yMax;
                bottom = _yMax;
                raw[0] = 2 / (_projectionHeight * this._aspectRatio);
                raw[5] = 2 / _projectionHeight;
                raw[10] = 1 / (this._far - this._near);
                raw[14] = this._near / (this._near - this._far);
                raw[1] = raw[2] = raw[3] = raw[4] =
                    raw[6] = raw[7] = raw[8] = raw[9] =
                        raw[11] = raw[12] = raw[13] = 0;
                raw[15] = 1;
            }
            else {
                var xWidth = _xMax * (this._viewPort.width / this._scissorRect.width);
                var yHgt = _yMax * (this._viewPort.height / this._scissorRect.height);
                var center = _xMax * (this._scissorRect.x * 2 - this._viewPort.width) / this._scissorRect.width + _xMax;
                var middle = -_yMax * (this._scissorRect.y * 2 - this._viewPort.height) / this._scissorRect.height - _yMax;
                left = center - xWidth;
                right = center + xWidth;
                top = middle - yHgt;
                bottom = middle + yHgt;
                raw[0] = 2 * 1 / (right - left);
                raw[5] = -2 * 1 / (top - bottom);
                raw[10] = 1 / (this._far - this._near);
                raw[12] = (right + left) / (right - left);
                raw[13] = (bottom + top) / (bottom - top);
                raw[14] = this._near / (this.near - this.far);
                raw[1] = raw[2] = raw[3] = raw[4] =
                    raw[6] = raw[7] = raw[8] = raw[9] = raw[11] = 0;
                raw[15] = 1;
            }
            this.projectMatrix.copyRawDataFrom(raw);
        };
        /**
         * @language en_US
         * @param object Object3D
         * @returns boolean
         */
        /**
         * @language zh_CN
         * 检测对象是否在相机视椎体内
         * @param object 需要体测的对象
         * @returns 成功返回true
         */
        Camera3D.prototype.isVisibleToCamera = function (object) {
            var box = object.worldBox;
            if (this.frustum.inSphere(box.center, box.radius)) {
                return true;
            }
            return false;
        };
        return Camera3D;
    })(egret3d.Entity);
    egret3d.Camera3D = Camera3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.LightBase
     * @classdesc
     * 灯光基类
     */
    var LightBase = (function (_super) {
        __extends(LightBase, _super);
        function LightBase() {
            _super.call(this);
            /**
             * @language en_US
             */
            /**
             *@language zh_CN
             * 类型
             */
            this._lightType = -1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             * 环境颜色
             */
            this._ambient = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             * 漫反射
             */
            this._diffuse = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             * 镜面反射
             */
            this._specular = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._halfVector = new egret3d.Vector3D(1.0, 1.0, 1.0);
            /**
            * @language en_US
            * @param value
            */
            /**
             * @language zh_CN
             * @param value 强度
             */
            this._intensity = 1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._spotExponent = 1.1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._spotCutoff = 0.7;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._spotCosCutoff = 0.1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._constantAttenuation = 0.1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._linearAttenuation = 0.1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._quadraticAttenuation = 0.1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._lightIndex = -1;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this.len = 25;
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this._change = true;
        }
        Object.defineProperty(LightBase.prototype, "intensity", {
            /**
             * @language zh_CN
             * @readOnly
             * 得到灯光强度
             */
            get: function () {
                return this._intensity;
            },
            /**
             * @language zh_CN
             * @writeOnly
             * 设置灯光强度
             */
            set: function (value) {
                if (this._intensity != value) {
                    this._intensity = value;
                    this._change = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "ambient", {
            /**
             * @language zh_CN
             * @readOnly
             * return ambient
             */
            get: function () {
                return 0;
            },
            /**
             * @language zh_CN
             * @writeOnly
             * 设置灯光环境色
             */
            set: function (color) {
                this._ambient.w = (color >> 24 & 0xff) / 255;
                this._ambient.x = (color >> 16 & 0xff) / 255;
                this._ambient.y = (color >> 8 & 0xff) / 255;
                this._ambient.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "diffuse", {
            /**
             * @language zh_CN
             * @readOnly
             * return diffuse
             */
            get: function () {
                return 0;
            },
            /**
             * @language zh_CN
             * @writeOnly
             * 设置灯光漫反射颜色
             */
            set: function (color) {
                this._diffuse.w = (color >> 24 & 0xff) / 255;
                this._diffuse.x = (color >> 16 & 0xff) / 255;
                this._diffuse.y = (color >> 8 & 0xff) / 255;
                this._diffuse.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LightBase.prototype, "specular", {
            /**
             * @language zh_CN
             * @readOnly
             * return specular
             */
            get: function () {
                return 0;
            },
            /**
             * @language zh_CN
             * @writeOnly
             * 设置灯光镜面反射颜色
             */
            set: function (color) {
                this._specular.w = (color >> 24 & 0xff) / 255;
                this._specular.x = (color >> 16 & 0xff) / 255;
                this._specular.y = (color >> 8 & 0xff) / 255;
                this._specular.z = (color & 0xff) / 255;
                this._change = false;
            },
            enumerable: true,
            configurable: true
        });
        LightBase.prototype.init = function () {
        };
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        LightBase.prototype.updateLightData = function (index, lightData) {
        };
        return LightBase;
    })(egret3d.Object3D);
    egret3d.LightBase = LightBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.DirectLight
     * @classdesc
     * 方向光数据处理
     */
    var DirectLight = (function (_super) {
        __extends(DirectLight, _super);
        /**
        * @language en_US
        * constructor
        */
        /**
        * @language zh_CN
        * constructor
        * @param dir 光线的方向
        */
        function DirectLight(dir) {
            _super.call(this);
            dir.normalize();
            this._lightType = 0;
            this._rot.x = dir.x;
            this._rot.y = dir.y;
            this._rot.z = dir.z;
        }
        Object.defineProperty(DirectLight.prototype, "castShadow", {
            /**
             * @language en_US
             * @param value
             */
            /**
            * @language zh_CN
            * @param value 是否投影
            */
            set: function (value) {
                //if (value )
                //    RttManager.getInstance().shadowMapRender.castShadowLight = this; 
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        DirectLight.prototype.updateLightData = function (index, lightData) {
            lightData[index * DirectLight.stride + 0] = this._rot.x;
            lightData[index * DirectLight.stride + 1] = this._rot.y;
            lightData[index * DirectLight.stride + 2] = this._rot.z;
            lightData[index * DirectLight.stride + 3] = this._diffuse.x;
            lightData[index * DirectLight.stride + 4] = this._diffuse.y;
            lightData[index * DirectLight.stride + 5] = this._diffuse.z;
            lightData[index * DirectLight.stride + 6] = this._intensity;
        };
        DirectLight.stride = 7;
        return DirectLight;
    })(egret3d.LightBase);
    egret3d.DirectLight = DirectLight;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.PointLight
     * @classdesc
     * 点光源数据处理
     */
    var PointLight = (function (_super) {
        __extends(PointLight, _super);
        /**
         * @language en_US
         * constructor
         * @param color
         */
        /**
         * @language zh_CN
         * constructor
         * @param color {Number}
         */
        function PointLight(color) {
            _super.call(this);
            this._lightType = 1;
            this.diffuse = color;
        }
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        PointLight.prototype.updateLightData = function (index, lightData) {
            lightData[index * PointLight.stride] = this.x;
            lightData[index * PointLight.stride + 1] = this.y;
            lightData[index * PointLight.stride + 2] = this.z;
            lightData[index * PointLight.stride + 3] = this._diffuse.x;
            lightData[index * PointLight.stride + 4] = this._diffuse.y;
            lightData[index * PointLight.stride + 5] = this._diffuse.z;
            lightData[index * PointLight.stride + 6] = this._intensity;
        };
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        PointLight.stride = 7;
        return PointLight;
    })(egret3d.LightBase);
    egret3d.PointLight = PointLight;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SpotLight
     * @classdesc
     * 聚光灯数据处理
     */
    var SpotLight = (function (_super) {
        __extends(SpotLight, _super);
        /**
         * @language zh_CN
         * constructor
         * @param color {Vector3D}
         */
        function SpotLight(color) {
            _super.call(this);
            this._diffuse = color;
            this._lightType = 2;
        }
        Object.defineProperty(SpotLight.prototype, "spotCosCutoff", {
            /**
             * @language en_US
             * @readOnly
             * @returns Cutoff
             */
            get: function () {
                return this._spotCosCutoff;
            },
            /**
             * @language en_US
             * @writeOnly
             * @param value Cutoff
             */
            set: function (value) {
                this._spotCosCutoff = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "spotExponent", {
            /**
             * @language en_US
             * @readOnly
             * @returns 指数
             */
            get: function () {
                return this._spotExponent;
            },
            /**
             * @language en_US
             * @writeOnly
             * @param value 指数
             */
            set: function (value) {
                this._spotExponent = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "constantAttenuation", {
            /**
             * @language en_US
             * @readOnly
             * @returns 持续衰减
             */
            get: function () {
                return this._constantAttenuation;
            },
            /**
             * @language en_US
             * @writeOnly
             * @param value 持续衰减
             */
            set: function (value) {
                this._constantAttenuation = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "linearAttenuation", {
            /**
             * @language en_US
             * @readOnly
             * @returns 线性衰减
             */
            get: function () {
                return this._linearAttenuation;
            },
            /**
             * @language en_US
             * @writeOnly
             * @param value 线性衰减
             */
            set: function (value) {
                this._linearAttenuation = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpotLight.prototype, "quadraticAttenuation", {
            /**
             * @language en_US
             * @readOnly
             * @returns 返回2次衰减
             */
            get: function () {
                return this._quadraticAttenuation;
            },
            /**
             * @language en_US
             * @writeOnly
             * @param value 2次衰减
             */
            set: function (value) {
                this._quadraticAttenuation = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        SpotLight.prototype.updateLightData = function (index, lightData) {
            lightData[index * SpotLight.stride] = this.x;
            lightData[index * SpotLight.stride + 1] = this.y;
            lightData[index * SpotLight.stride + 2] = this.z;
            lightData[index * SpotLight.stride + 3] = this._rot.x;
            lightData[index * SpotLight.stride + 4] = this._rot.y;
            lightData[index * SpotLight.stride + 5] = this._rot.z;
            lightData[index * SpotLight.stride + 6] = this._diffuse.x;
            lightData[index * SpotLight.stride + 7] = this._diffuse.y;
            lightData[index * SpotLight.stride + 8] = this._diffuse.z;
            lightData[index * SpotLight.stride + 9] = this._spotExponent;
            lightData[index * SpotLight.stride + 10] = this._spotCosCutoff;
            lightData[index * SpotLight.stride + 11] = this._constantAttenuation;
            lightData[index * SpotLight.stride + 12] = this._linearAttenuation;
            lightData[index * SpotLight.stride + 13] = this._quadraticAttenuation;
        };
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        SpotLight.stride = 14;
        return SpotLight;
    })(egret3d.LightBase);
    egret3d.SpotLight = SpotLight;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.LightGroup
     * @classdesc
     * 灯光管理类
     */
    var LightGroup = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function LightGroup() {
            /**
             * @language en_US
             */
            /**
             * @language zh_CN
             */
            this.lightNum = 0;
            this.directLightList = new Array();
            this.spotLightList = new Array();
            this.pointLightList = new Array();
        }
        /**
         * @language en_US
         * @param light
         */
        /**
         * @language zh_CN
         * 增加一个方向光
         * @param light  Direct Light
         */
        LightGroup.prototype.addDirectLight = function (light) {
            this.directLightList.push(light);
            this.lightNum++;
        };
        /**
         * @language en_US
         * @param light
         */
        /**
         * @language zh_CN
         * 增加一个聚光灯
         * @param light Spot Light
         */
        LightGroup.prototype.addSpotLight = function (light) {
            this.spotLightList.push(light);
            this.lightNum++;
        };
        /**
         * @language en_US
         * @param light
         */
        /**
         * @language zh_CN
         * 增加一个点光源
         * @param light  Point Light
         */
        LightGroup.prototype.addPointLight = function (light) {
            this.pointLightList.push(light);
            this.lightNum++;
        };
        return LightGroup;
    })();
    egret3d.LightGroup = LightGroup;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.RenderBase
    * @classdesc
    * 渲染器基类
    */
    var RenderBase = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function RenderBase() {
            ///protected _context3D: Context3D;
            this._renderIndex = 0;
            this._numEntity = 0;
            ///this.camera3D = camera3D;
        }
        /**
        * @language zh_CN
        * 每帧渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        RenderBase.prototype.draw = function (time, delay, context3D, collect, camera) {
        };
        return RenderBase;
    })();
    egret3d.RenderBase = RenderBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * default render
    */
    var DefaultRender = (function (_super) {
        __extends(DefaultRender, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function DefaultRender() {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        DefaultRender.prototype.draw = function (time, delay, context3D, collect, camera) {
            this._renderList = collect.renderList;
            this._numEntity = this._renderList.length;
            ///context3D.gl.clear(context3D.gl.COLOR_BUFFER_BIT | context3D.gl.DEPTH_BUFFER_BIT);
            for (this._renderIndex = 0; this._renderIndex < this._numEntity; this._renderIndex++) {
                this._renderList[this._renderIndex].update(time, delay);
                if (!this._renderList[this._renderIndex].isVisible) {
                    continue;
                }
                if (this._renderList[this._renderIndex].tag && this._renderList[this._renderIndex].tag.clearDepth && this._renderList[this._renderIndex].tag.cleanState) {
                    this._renderList[this._renderIndex].tag.cleanState = false;
                    context3D.clearDepth(1);
                }
                if (this._renderList[this._renderIndex].material != null) {
                    if (this._renderList[this._renderIndex].material.alpha != 0) {
                        this._renderList[this._renderIndex].material.rendenDiffusePass(context3D, camera, this._renderList[this._renderIndex].modelMatrix, this._renderList[this._renderIndex].geometry, this._renderList[this._renderIndex].animation);
                    }
                }
            }
        };
        return DefaultRender;
    })(egret3d.RenderBase);
    egret3d.DefaultRender = DefaultRender;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.PositionRender
    * @classdesc
    * position render
    */
    var PositionRender = (function (_super) {
        __extends(PositionRender, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function PositionRender() {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        PositionRender.prototype.renden = function (time, delay, context3D, collect, camera) {
            this._renderList = collect.renderList;
            this._numEntity = this._renderList.length;
            for (this._renderIndex = 0; this._renderIndex < this._numEntity; this._renderIndex++) {
                this._renderList[this._renderIndex].update(time, delay);
                if (!this._renderList[this._renderIndex].isVisible) {
                    continue;
                }
                if (this._renderList[this._renderIndex].material != null) {
                }
            }
        };
        return PositionRender;
    })(egret3d.RenderBase);
    egret3d.PositionRender = PositionRender;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.NormalRender
    * @classdesc
    * 法线渲染器,渲染有法线的实现对象
    */
    var NormalRender = (function (_super) {
        __extends(NormalRender, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function NormalRender() {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        NormalRender.prototype.draw = function (time, delay, context3D, collect, camera) {
            this._renderList = collect.renderList;
            this._numEntity = this._renderList.length;
            for (this._renderIndex = 0; this._renderIndex < this._numEntity; this._renderIndex++) {
                this._renderList[this._renderIndex].update(time, delay);
                if (!this._renderList[this._renderIndex].isVisible) {
                    continue;
                }
                if (this._renderList[this._renderIndex].material != null) {
                    this._renderList[this._renderIndex].material.rendenNormalPass(context3D, camera, this._renderList[this._renderIndex].modelMatrix, this._renderList[this._renderIndex].geometry, this._renderList[this._renderIndex].animation);
                }
            }
        };
        return NormalRender;
    })(egret3d.RenderBase);
    egret3d.NormalRender = NormalRender;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.DepthRender
    * @classdesc
    * 深度渲染器 渲染场景中的实体对象
    */
    var DepthRender = (function (_super) {
        __extends(DepthRender, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function DepthRender() {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        DepthRender.prototype.draw = function (time, delay, context3D, collect, camera) {
            this._renderList = collect.renderList;
            this._numEntity = this._renderList.length;
            for (this._renderIndex = 0; this._renderIndex < this._numEntity; this._renderIndex++) {
                this._renderList[this._renderIndex].update(time, delay);
                if (!this._renderList[this._renderIndex].isVisible) {
                    continue;
                }
                if (this._renderList[this._renderIndex].material != null) {
                    this._renderList[this._renderIndex].material.rendenDepthPass(context3D, camera, this._renderList[this._renderIndex].modelMatrix, this._renderList[this._renderIndex].geometry, this._renderList[this._renderIndex].animation);
                }
            }
        };
        return DepthRender;
    })(egret3d.RenderBase);
    egret3d.DepthRender = DepthRender;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ShadowRender
    * @classdesc
    * 阴影渲染器
    */
    var ShadowRender = (function (_super) {
        __extends(ShadowRender, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function ShadowRender() {
            _super.call(this);
            this.shadowTexture_width = 1024;
            this.shadowTexture_height = 1024;
            this.cameraTarget = new egret3d.Vector3D();
            this.cameraPos = new egret3d.Vector3D();
            this.distance = 0;
            ShadowRender.shadowCamera3D = new egret3d.Camera3D(egret3d.CameraType.orthogonal); //temp
            ShadowRender.frameBuffer = egret3d.RttManager.creatFrameBuffer(egret3d.FrameBufferType.shadowFrameBufrfer, egret3d.Egret3DDrive.context3D, this.shadowTexture_width, this.shadowTexture_height, egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGBA);
        }
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        ShadowRender.prototype.draw = function (time, delay, context3D, collect, camera) {
            if (ShadowRender.castShadowLight) {
                this.offsetPos(new egret3d.Vector3D());
                this._renderList = collect.renderList;
                this._numEntity = this._renderList.length;
                for (this._renderIndex = 0; this._renderIndex < this._numEntity; this._renderIndex++) {
                    if (this._renderList[this._renderIndex].material.castShadow) {
                        this._renderList[this._renderIndex].update(time, delay);
                        if (!this._renderList[this._renderIndex].isVisible) {
                            continue;
                        }
                        this._renderList[this._renderIndex].material.rendenShadowPass(context3D, ShadowRender.shadowCamera3D, this._renderList[this._renderIndex].modelMatrix, this._renderList[this._renderIndex].geometry, this._renderList[this._renderIndex].animation);
                    }
                }
            }
        };
        ShadowRender.prototype.offsetPos = function (offset) {
            this.cameraPos.x = ShadowRender.castShadowLight.rotationX;
            this.cameraPos.y = ShadowRender.castShadowLight.rotationY;
            this.cameraPos.z = ShadowRender.castShadowLight.rotationZ;
            this.cameraPos.normalize();
            this.cameraPos.scaleBy(1.0 * 500);
            this.cameraPos.x = this.cameraPos.x + offset.x;
            this.cameraPos.y = this.cameraPos.y + offset.y;
            this.cameraPos.z = this.cameraPos.z + offset.z;
            ShadowRender.shadowCamera3D.lookAt(this.cameraPos, offset);
        };
        return ShadowRender;
    })(egret3d.RenderBase);
    egret3d.ShadowRender = ShadowRender;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (RenderType) {
        RenderType[RenderType["defaultRender"] = 0] = "defaultRender";
        RenderType[RenderType["positionRender"] = 1] = "positionRender";
        RenderType[RenderType["normalRender"] = 2] = "normalRender";
        RenderType[RenderType["specularRender"] = 3] = "specularRender";
        RenderType[RenderType["shadowRender"] = 4] = "shadowRender";
    })(egret3d.RenderType || (egret3d.RenderType = {}));
    var RenderType = egret3d.RenderType;
    /**
    * @class egret3d.RenderManager
    * @classdesc
    * 渲染器管理,管理所有的渲染器对象
    */
    var RenderManager = (function () {
        function RenderManager() {
        }
        /**
        * @language zh_CN
        * 以渲染类型拿到渲染器
        * @param renderType 渲染类型
        */
        RenderManager.getRender = function (renderType) {
            if (this.renders[renderType])
                return this.renders[renderType];
            return this.creatSystemRender(renderType);
        };
        RenderManager.creatSystemRender = function (renderType) {
            var render;
            switch (renderType) {
                case RenderType.defaultRender:
                    render = new egret3d.DefaultRender();
                    break;
                case RenderType.positionRender:
                    render = new egret3d.PositionRender();
                    break;
                case RenderType.normalRender:
                    render = new egret3d.NormalRender();
                    break;
                case RenderType.specularRender:
                    ///  render = new NormalRender();
                    break;
                case RenderType.shadowRender:
                    render = new egret3d.ShadowRender();
                    break;
            }
            this.renders[renderType] = render;
            return render;
        };
        RenderManager.renders = new Object();
        return RenderManager;
    })();
    egret3d.RenderManager = RenderManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.CollectBase
    * @classdesc
    * Object3D 渲染对象收集器基类
    */
    var CollectBase = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        */
        function CollectBase(root) {
            this._num = 0;
            this._objDict = {};
            this.renderList = new Array();
            this._nodes = new Array();
            this._rootNode = root;
        }
        /**
        * @language zh_CN
        * 数据更新
        * @param camera 当前摄像机
        */
        CollectBase.prototype.update = function (camera) {
            this.renderList = this._nodes;
            this.renderList.length = 0;
            camera.frustum.update(camera);
        };
        /**
        * @language zh_CN
        * 查找一个对象在渲染列表的下标
        * @param obj 要查找的对象
        * @returns 返回对象在渲染列表的下标
        */
        CollectBase.prototype.findRenderObject = function (obj) {
            for (var i = 0; i < this.renderList.length; ++i) {
                if (this.renderList[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
        return CollectBase;
    })();
    egret3d.CollectBase = CollectBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Layer
    * @classdesc
    * Object3D 渲染Layer
    */
    var Layer = (function () {
        function Layer() {
            /**
            * @language zh_CN
            * 没有alpht的对象列表
            */
            this.objects = new Array();
            /**
            * @language zh_CN
            * 有alpht的对象列表
            */
            this.alphaObjects = new Array();
        }
        return Layer;
    })();
    egret3d.Layer = Layer;
    /**
    * @class egret3d.Tag
    * @classdesc
    * Object3D 渲染tag
    */
    var Tag = (function () {
        function Tag() {
            /**
            * @language zh_CN
            * layer 列表
            */
            this.layers = new Array();
            /**
            * @language zh_CN
            * 是否清理深度
            */
            this.clearDepth = false;
            /**
            * @language zh_CN
            * 层级清理深度状态
            */
            this.cleanState = true;
        }
        return Tag;
    })();
    egret3d.Tag = Tag;
    /**
    * @class egret3d.EntityCollect
    * @classdesc
    * Object3D 渲染对象收集器
    */
    var EntityCollect = (function (_super) {
        __extends(EntityCollect, _super);
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        */
        function EntityCollect(root) {
            _super.call(this, root);
            this._tags = new Array();
            this._layers = new Array();
            this._tagsName = new Array();
            this.addTag("default");
            this.addTag("terrain");
            this.addTag("terrain_texture");
            this.addTag("shadow");
            this.addTag("character");
            this.addTag("modle_effect");
            this.addTag("particle");
            this.addTag("transparent");
            this.addTag("wireframe", true);
            var tag = { typeName: "", cleanDepth: false };
            this.addLayer("layer_0");
            this.addLayer("layer_1");
            this.addLayer("layer_2");
            this.addLayer("layer_3");
            this.addLayer("layer_4");
        }
        Object.defineProperty(EntityCollect.prototype, "tags", {
            /**
            * @language zh_CN
            * 返回tags 列表
            * @readOnly
            * @returns tags 列表
            */
            get: function () {
                return this._tags;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * @param name tag名
        * @param index 下标
        */
        EntityCollect.prototype.setTags = function (name, index) {
            var curIndex = this._tagsName.indexOf(name);
            if (curIndex != -1) {
                var tag = this._tags[curIndex];
                this.removeTag(name);
                this._tagsName.splice(index, 0, name);
                this._tags.splice(index, 0, tag);
            }
            else {
                this.insertTag(name, index);
            }
        };
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * @param layer layer名
        * @param index 下标
        */
        EntityCollect.prototype.setTagsItem = function (layer, index) {
            this.removeLayer(layer);
            this.insetLayer(layer, index);
        };
        /**
        * @language zh_CN
        * 得到layer的值
        * @param name tag名
        * @param layer layer名
        * @returns 返回layer的值
        */
        EntityCollect.prototype.getTagLayer = function (name, layer) {
            if (name === void 0) { name = "default"; }
            if (layer === void 0) { layer = "layer_0"; }
            var typeIndex = this._tagsName.indexOf(name);
            var layerIndex = this._layers.indexOf(layer);
            return (typeIndex << 24) | layerIndex;
        };
        /**
        * @language zh_CN
        * 得到tag
        * @param name tag名
        * @returns tag
        */
        EntityCollect.prototype.getTag = function (name) {
            if (name === void 0) { name = "default"; }
            var index = this._tagsName.indexOf(name);
            if (index != -1) {
                return this.tags[index];
            }
            return null;
        };
        /**
        * @language zh_CN
        * 增加tag
        * @param name tag名
        * @param clearDapth 是否清理深度
        */
        EntityCollect.prototype.addTag = function (name, clearDapth) {
            if (clearDapth === void 0) { clearDapth = false; }
            if (this._tagsName.indexOf(name) != -1) {
                return;
            }
            this._tagsName.push(name);
            var tag = new Tag();
            tag.clearDepth = clearDapth;
            this._tags.push(tag);
            for (var i = 0; i < this._layers.length; ++i) {
                var layer = new Layer();
                tag.layers.push(layer);
            }
        };
        /**
        * @language zh_CN
        * 插入tag
        * @param name tag名
        * @param index 下标
        */
        EntityCollect.prototype.insertTag = function (name, index) {
            if (this._tagsName.indexOf(name) != -1) {
                return;
            }
            this._tagsName.splice(index, 0, name);
            var tag = new Tag();
            this._tags.splice(index, 0, tag);
            for (var i = 0; i < this._layers.length; ++i) {
                var layer = new Layer();
                tag.layers.push(layer);
            }
        };
        /**
        * @language zh_CN
        * 移除tag
        * @param name tag名
        */
        EntityCollect.prototype.removeTag = function (name) {
            var index = this._tagsName.indexOf(name);
            if (index == -1) {
                return;
            }
            this._tagsName.splice(index, 1);
            this._tags.splice(index, 1);
        };
        /**
        * @language zh_CN
        * 增加layer
        * @param name layer名
        */
        EntityCollect.prototype.addLayer = function (name) {
            if (this._layers.indexOf(name) != -1) {
                return;
            }
            this._layers.push(name);
            for (var i = 0; i < this._tags.length; ++i) {
                var layer = new Layer();
                this._tags[i].layers.push(layer);
            }
        };
        /**
        * @language zh_CN
        * 插入layer
        * @param name layer名
        * @param index layer下标
        */
        EntityCollect.prototype.insetLayer = function (name, index) {
            if (this._layers.indexOf(name) != -1) {
                return;
            }
            this._layers.splice(index, 0, name);
            for (var i = 0; i < this._tags.length; ++i) {
                var layer = new Layer();
                this._tags[i].layers.splice(index, 0, layer);
            }
        };
        /**
        * @language zh_CN
        * 移除layer
        * @param name layer名
        */
        EntityCollect.prototype.removeLayer = function (name) {
            var index = this._layers.indexOf(name);
            if (index == -1) {
                return;
            }
            this._layers.splice(index, 1);
            for (var i = 0; i < this._tags.length; ++i) {
                this._tags[i].layers.splice(index, 1);
            }
        };
        EntityCollect.prototype.applyRender = function (child, camera) {
            this.addRenderList(child, camera);
            for (var i = 0; i < child.childs.length; i++) {
                this.applyRender(child.childs[i], camera);
            }
        };
        EntityCollect.prototype.addRenderList = function (object3d, camera) {
            if (!object3d.material)
                return;
            if (object3d.isCut) {
                if (!camera.isVisibleToCamera(object3d)) {
                    return;
                }
            }
            var layer = this.findLayer(object3d);
            var tag = this.findTag(object3d);
            if (object3d.material != null && object3d.material.materialData.alphaBlending) {
                layer.alphaObjects.push(object3d);
            }
            else {
                layer.objects.push(object3d);
            }
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param camera 当前摄像机
        */
        EntityCollect.prototype.update = function (camera) {
            var _this = this;
            _super.prototype.update.call(this, camera);
            this.clearLayerList();
            this.applyRender(this._rootNode, camera);
            this.renderList.length = 0;
            for (var i = 0; i < this._tags.length; ++i) {
                this._tags[i].clearDepth = true;
                for (var j = 0; j < this._tags[i].layers.length; ++j) {
                    for (var k = 0; k < this._tags[i].layers[j].objects.length; ++k) {
                        this.renderList.push(this._tags[i].layers[j].objects[k]);
                    }
                    this._tags[i].layers[j].alphaObjects.sort(function (a, b) { return _this.sort(a, b, camera); });
                    for (var k = 0; k < this._tags[i].layers[j].alphaObjects.length; ++k) {
                        this.renderList.push(this._tags[i].layers[j].alphaObjects[k]);
                    }
                }
            }
        };
        EntityCollect.prototype.findLayer = function (object3d) {
            var typeIndex = object3d.layer >> 24;
            var layerIndex = object3d.layer & 0x00FFFFFF;
            if (typeIndex < this._tags.length && typeIndex >= 0) {
                if (layerIndex < this._tags[typeIndex].layers.length && layerIndex >= 0) {
                    return this._tags[typeIndex].layers[layerIndex];
                }
            }
            return this._tags[0].layers[0];
        };
        EntityCollect.prototype.findTag = function (object3d) {
            var typeIndex = object3d.layer >> 24;
            if (typeIndex < this._tags.length && typeIndex >= 0) {
                return this._tags[typeIndex];
            }
            return this._tags[0];
        };
        EntityCollect.prototype.clearLayerList = function () {
            for (var i = 0; i < this._tags.length; ++i) {
                for (var j = 0; j < this._tags[i].layers.length; ++j) {
                    this._tags[i].layers[j].objects.length = 0;
                    this._tags[i].layers[j].alphaObjects.length = 0;
                }
            }
        };
        EntityCollect.prototype.sort = function (a, b, camera) {
            var dis_0 = egret3d.Vector3D.distance(a.globalPosition, camera.position);
            var dis_1 = egret3d.Vector3D.distance(b.globalPosition, camera.position);
            if (dis_0 > dis_1) {
                return -1;
            }
            else if (dis_0 < dis_1) {
                return 1;
            }
            return 0;
        };
        return EntityCollect;
    })(egret3d.CollectBase);
    egret3d.EntityCollect = EntityCollect;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (FrameBufferType) {
        FrameBufferType[FrameBufferType["shadowFrameBufrfer"] = 0] = "shadowFrameBufrfer";
        FrameBufferType[FrameBufferType["defaultFrameBuffer"] = 1] = "defaultFrameBuffer";
        FrameBufferType[FrameBufferType["positionFrameBuffer"] = 2] = "positionFrameBuffer";
        FrameBufferType[FrameBufferType["normalFrameBuffer"] = 3] = "normalFrameBuffer";
        FrameBufferType[FrameBufferType["specularFrameBuffer"] = 4] = "specularFrameBuffer";
        FrameBufferType[FrameBufferType["leftEyeFrameBuffer"] = 5] = "leftEyeFrameBuffer";
        FrameBufferType[FrameBufferType["rightEyeFrameBuffer"] = 6] = "rightEyeFrameBuffer";
        FrameBufferType[FrameBufferType["nextFrameBuffer"] = 7] = "nextFrameBuffer";
    })(egret3d.FrameBufferType || (egret3d.FrameBufferType = {}));
    var FrameBufferType = egret3d.FrameBufferType;
    (function (FrameBufferFormat) {
        FrameBufferFormat[FrameBufferFormat["FLOAT_RGB"] = 0] = "FLOAT_RGB";
        FrameBufferFormat[FrameBufferFormat["FLOAT_RGBA"] = 1] = "FLOAT_RGBA";
        FrameBufferFormat[FrameBufferFormat["UNSIGNED_BYTE_RGB"] = 2] = "UNSIGNED_BYTE_RGB";
        FrameBufferFormat[FrameBufferFormat["UNSIGNED_BYTE_RGBA"] = 3] = "UNSIGNED_BYTE_RGBA";
    })(egret3d.FrameBufferFormat || (egret3d.FrameBufferFormat = {}));
    var FrameBufferFormat = egret3d.FrameBufferFormat;
    /**
    * @class egret3d.FrameBuffer
    * @classdesc
    * 渲染buffer
    */
    var FrameBuffer = (function () {
        function FrameBuffer() {
        }
        return FrameBuffer;
    })();
    egret3d.FrameBuffer = FrameBuffer;
    /**
    * @class egret3d.RttManager
    * @classdesc
    * 离屏渲染管理
    */
    var RttManager = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function RttManager() {
            this.shadowFrameBufrfer = new FrameBuffer();
            this.defaultFrameBuffer = new FrameBuffer();
            this.positionFrameBuffer = new FrameBuffer();
            this.normalFrameBuffer = new FrameBuffer();
            this.specularFrameBuffer = new FrameBuffer();
            this.leftEyeFrameBuffer = new FrameBuffer();
            this.rightFrameBuffer = new FrameBuffer();
            this.nextFrameBuffer = new FrameBuffer();
            if (RttManager.instance)
                new Error("can't new RttManager instance!");
        }
        /**
        * @language zh_CN
        * 创建帧缓冲
        * @param framName
        * @param context3D
        * @param width
        * @param height
        * @param format
        * @returns FrameBuffer
        */
        RttManager.creatFrameBuffer = function (framName, context3D, width, height, format) {
            var frameBuffer = new FrameBuffer();
            frameBuffer.frameBufferName = framName;
            frameBuffer.width = width;
            frameBuffer.height = height;
            frameBuffer.texture = new egret3d.RenderTexture(context3D.createFramebuffer(width, height, format));
            RttManager.instance[framName] = frameBuffer;
            return RttManager.instance[framName];
        };
        /**
        * @language zh_CN
        * 把帧缓冲的内容渲染到贴图
        * @param time
        * @param delay
        * @param context3D
        * @param collect
        * @param rec
        */
        RttManager.prototype.drawFrameBuffersToTexture = function (time, delay, context3D, collect, camera, rec) {
        };
        /**
        * @language zh_CN
        * 把帧缓冲的内容渲染到贴图
        * @param time
        * @param delay
        * @param renderTragetTexture
        * @param context3D
        * @param render
        * @param collect
        * @param camera
        * @param rec
        */
        RttManager.drawToTexture = function (time, delay, renderTragetTexture, context3D, render, collect, camera, rec) {
            context3D.viewPort(rec.x, rec.y, rec.width, rec.height);
            context3D.setRenderToTexture(renderTragetTexture, true, 0);
            render.draw(time, delay, context3D, collect, camera);
            context3D.setRenderToBackBuffer();
        };
        /**
        * @language zh_CN
        * 开始渲染
        * @param renderTragetTexture
        * @param context3D
        * @param rec
        */
        RttManager.drawToTextureStart = function (renderTragetTexture, context3D, rec) {
            context3D.viewPort(rec.x, rec.y, rec.width, rec.height);
            context3D.setRenderToTexture(renderTragetTexture, true, 0);
        };
        /**
        * @language zh_CN
        * 结束渲染
        * @param time
        * @param delay
        * @param context3D
        * @param render
        * @param collect
        * @param camera
        * @param rec
        */
        RttManager.drawToTextureEnd = function (time, delay, context3D, render, collect, camera, rec) {
            render.draw(time, delay, context3D, collect, camera);
            // context3D.setRenderToBackBuffer();
        };
        RttManager.instance = new RttManager();
        return RttManager;
    })();
    egret3d.RttManager = RttManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.GeometryData
     * @classdesc
     * GeometryData类 表示几何形状数据
     */
    var GeometryData = (function () {
        function GeometryData() {
            /**
            * @language zh_CN
            * 顶点属性长度
            */
            this.vertexAttLength = 17;
            /**
            * @language zh_CN
            * 索引数据
            */
            this.source_indexData = new Array();
            /**
            * @language zh_CN
            * 顶点数据
            */
            this.source_vertexData = new Array();
            /**
            * @language zh_CN
            * 顶点色数据
            */
            this.source_vertexColorData = new Array();
            /**
            * @language zh_CN
            * 顶点法线
            */
            this.source_normalData = new Array();
            /**
            * @language zh_CN
            * 顶点切线数据
            */
            this.source_tangtData = new Array();
            /**
            * @language zh_CN
            * 顶点uv数据
            */
            this.source_uvData = new Array();
            /**
            * @language zh_CN
            * 顶点uv2数据
            */
            this.source_uv2Data = new Array();
            /**
            * @language zh_CN
            * 每个3角面的数据
            */
            this.source_faceData = new Array();
            /**
            * @language zh_CN
            * 蒙皮数据
            */
            this.source_skinData = new Array();
            /**
            * @language zh_CN
            *
            */
            this.vertexIndex = 0;
            /**
            * @language zh_CN
            *
            */
            this.indices = new Array();
            /**
            * @language zh_CN
            *
            */
            this.vertices = new Array();
            /**
            * @language zh_CN
            *
            */
            this.normals = new Array();
            /**
            * @language zh_CN
            *
            */
            this.tangts = new Array();
            /**
            * @language zh_CN
            *
            */
            this.verticesColor = new Array();
            /**
            * @language zh_CN
            *
            */
            this.uvs = new Array();
            /**
            * @language zh_CN
            *
            */
            this.uv2s = new Array();
            /**
            * @language zh_CN
            *
            */
            this.skinMesh = new Array();
            /**
            * @language zh_CN
            *
            */
            this.faceNormals = new Array();
            /**
            * @language zh_CN
            *
            */
            this.faceWeights = new Array();
        }
        /**
        * @language zh_CN
        *
        * @param source
        * @returns
        */
        GeometryData.build = function (source) {
            if (null == source.source_faceData || source.source_faceData.length <= 0 || null == source.source_vertexData || source.source_vertexData.length <= 0)
                return null;
            var target = new GeometryData();
            target.indices = [];
            target.vertexDatas = [];
            target.vertexAttLength = source.vertexAttLength;
            var faceData = null;
            var vertex = null;
            var normal = new egret3d.Vector3D(1.0, 1.0, 1.0);
            var color = new egret3d.Vector3D(1.0, 1.0, 1.0, 1.0);
            var uv_0 = new egret3d.UV(1, 0);
            var uv_1 = new egret3d.UV(1, 0);
            for (var faceIndex = 0; faceIndex < source.source_faceData.length; faceIndex++) {
                faceData = source.source_faceData[faceIndex];
                target.indices.push(faceIndex * 3 + 0, faceIndex * 3 + 2, faceIndex * 3 + 1);
                for (var i = 0; i < 3; i++) {
                    vertex = source.source_vertexData[faceData.vertexIndices[i] - 1];
                    if (faceData.normalIndices && source.source_normalData && source.source_normalData.length > 0)
                        normal = source.source_normalData[faceData.normalIndices[i] - 1];
                    if (faceData.colorIndices && source.source_vertexColorData && source.source_vertexColorData.length > 0)
                        color = source.source_vertexColorData[faceData.colorIndices[i] - 1];
                    if (faceData.uvIndices && source.source_uvData && source.source_uvData.length > 0)
                        uv_0 = source.source_uvData[faceData.uvIndices[i] - 1];
                    if (faceData.uv2Indices && source.source_uv2Data && source.source_uv2Data.length > 0)
                        uv_1 = source.source_uv2Data[faceData.uv2Indices[i] - 1];
                    target.vertexDatas.push(vertex.x, vertex.y, vertex.z, //3 pos
                    normal.x, normal.y, normal.z, //3 normal
                    0.0, 0.0, 0.0, //3 tangent
                    color.r, color.g, color.b, color.a, //4 color
                    uv_0.u, uv_0.v, //2 uv1
                    uv_1.u, uv_1.v //2 uv2
                    );
                    if (source.source_skinData != null && source.source_skinData.length > 0) {
                        target.vertexDatas.push(//8 skin
                        source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 0], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 2], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 4], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 6], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 1], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 3], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 5], source.source_skinData[(faceData.vertexIndices[i] - 1) * 8 + 7]);
                    }
                }
            }
            GeometryData.buildFaceTangents(target);
            return target;
        };
        GeometryData.translateMaterialGroup = function (geomtryData) {
            var faces = geomtryData.source_faceData;
            var face;
            var numFaces = faces.length;
            var numVerts;
            var targetGeomtryData = new GeometryData();
            targetGeomtryData.vertexAttLength = geomtryData.vertexAttLength;
            var j;
            for (var i = 0; i < numFaces; ++i) {
                face = faces[i];
                numVerts = face.indexIds.length - 1;
                for (j = 1; j < numVerts; ++j) {
                    this.translateVertexData(face, j, geomtryData, targetGeomtryData);
                    this.translateVertexData(face, 0, geomtryData, targetGeomtryData);
                    this.translateVertexData(face, j + 1, geomtryData, targetGeomtryData);
                }
            }
            if (targetGeomtryData.vertices.length > 0) {
                targetGeomtryData.vertLen = (targetGeomtryData.vertices.length / 3) * geomtryData.vertexAttLength;
                targetGeomtryData.vertexDatas = new Array(targetGeomtryData.vertLen);
                this.updateFaceTangents(targetGeomtryData);
                //this.updateFaceNormals(targetGeomtryData);
                this.combinGeomtryData(targetGeomtryData);
            }
            return targetGeomtryData;
        };
        GeometryData.translateVertexData = function (face, vertexIndex, sourceGeomtryData, targetGeomtryData) {
            var index;
            var vertex;
            var color;
            var vertexNormal;
            var uv;
            if (!targetGeomtryData.indices[face.indexIds[vertexIndex]]) {
                index = targetGeomtryData.vertexIndex;
                targetGeomtryData.indices[face.indexIds[vertexIndex]] = ++targetGeomtryData.vertexIndex;
                vertex = sourceGeomtryData.source_vertexData[face.vertexIndices[vertexIndex] - 1];
                targetGeomtryData.vertices.push(vertex.x, vertex.y, vertex.z);
                if (sourceGeomtryData.source_vertexColorData != null && sourceGeomtryData.source_vertexColorData.length > 0) {
                    color = sourceGeomtryData.source_vertexColorData[face.vertexIndices[vertexIndex] - 1];
                    targetGeomtryData.verticesColor.push(color.r, color.g, color.b, color.a);
                }
                if (sourceGeomtryData.source_skinData != null && sourceGeomtryData.source_skinData.length > 0) {
                    targetGeomtryData.skinMesh.push(sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 0], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 2], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 4], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 6], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 1], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 3], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 5], sourceGeomtryData.source_skinData[(face.vertexIndices[vertexIndex] - 1) * 8 + 7]);
                }
                if (face.normalIndices.length > 0) {
                    vertexNormal = sourceGeomtryData.source_normalData[face.normalIndices[vertexIndex] - 1];
                    targetGeomtryData.normals.push(vertexNormal.x, vertexNormal.y, vertexNormal.z);
                }
                if (face.uvIndices.length > 0) {
                    try {
                        uv = sourceGeomtryData.source_uvData[face.uvIndices[vertexIndex] - 1];
                        targetGeomtryData.uvs.push(uv.u, uv.v);
                        if (sourceGeomtryData.source_uv2Data.length > 0) {
                            uv = sourceGeomtryData.source_uv2Data[face.uv2Indices[vertexIndex] - 1];
                            targetGeomtryData.uv2s.push(uv.u, uv.v);
                        }
                    }
                    catch (e) {
                        switch (vertexIndex) {
                            case 0:
                                targetGeomtryData.uvs.push(0, 1);
                                break;
                            case 1:
                                targetGeomtryData.uvs.push(.5, 0);
                                break;
                            case 2:
                                targetGeomtryData.uvs.push(1, 1);
                        }
                    }
                }
            }
            else
                index = targetGeomtryData.indices[face.indexIds[vertexIndex]] - 1;
            targetGeomtryData.indices.push(index);
        };
        /**
        * 4 pos
        * 3 normal
        * 4 color
        * 2 uv
        * 2 uv2s
        * length 15
        */
        GeometryData.combinGeomtryData = function (geomtrtData, needTangent) {
            if (needTangent === void 0) { needTangent = true; }
            var index = 0;
            var v = 0;
            var n = 0;
            var t = 0;
            var u1 = 0;
            var u2 = 0;
            var c = 0;
            var skin = 0;
            var data = geomtrtData.vertexDatas;
            while (index < geomtrtData.vertLen) {
                data[index++] = geomtrtData.vertices[v++];
                data[index++] = geomtrtData.vertices[v++];
                data[index++] = geomtrtData.vertices[v++];
                if (geomtrtData.normals && geomtrtData.normals.length) {
                    data[index++] = geomtrtData.normals[n++];
                    data[index++] = geomtrtData.normals[n++];
                    data[index++] = geomtrtData.normals[n++];
                }
                else {
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                }
                if (geomtrtData.tangts) {
                    index++;
                    index++;
                    index++;
                }
                else {
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                }
                if (geomtrtData.source_vertexColorData && geomtrtData.source_vertexColorData.length) {
                    data[index++] = geomtrtData.verticesColor[c++];
                    data[index++] = geomtrtData.verticesColor[c++];
                    data[index++] = geomtrtData.verticesColor[c++];
                    data[index++] = geomtrtData.verticesColor[c++];
                }
                else {
                    data[index++] = 1;
                    data[index++] = 1;
                    data[index++] = 1;
                    data[index++] = 1;
                }
                if (geomtrtData.uvs && geomtrtData.uvs.length) {
                    data[index++] = geomtrtData.uvs[u1++];
                    data[index++] = geomtrtData.uvs[u1++];
                    if (geomtrtData.uv2s && geomtrtData.uv2s.length) {
                        data[index++] = geomtrtData.uv2s[u2++];
                        data[index++] = geomtrtData.uv2s[u2++];
                    }
                    else {
                        data[index++] = geomtrtData.uvs[u2++];
                        data[index++] = geomtrtData.uvs[u2++];
                    }
                }
                else {
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                    data[index++] = 0;
                }
                if (geomtrtData.skinMesh && geomtrtData.skinMesh.length) {
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                    data[index++] = geomtrtData.skinMesh[skin++];
                }
            }
            //if (needTangent)
            //    this.updateFaceTangents(geomtrtData
        };
        /**
         * Updates the normals for each face.
         */
        GeometryData.updateFaceNormals = function (geomtrtData) {
            var i = 0, j = 0, k = 0;
            var index;
            var len = geomtrtData.indices.length;
            var x1, x2, x3;
            var y1, y2, y3;
            var z1, z2, z3;
            var dx1, dy1, dz1;
            var dx2, dy2, dz2;
            var cx, cy, cz;
            var d;
            var vertices = geomtrtData.vertexDatas;
            var posStride = 17;
            var posOffset = 3;
            //if (_useFaceWeights)
            //    _faceWeights ||= new Vector.<number>(len / 3, true);
            while (i < len) {
                index = posOffset + geomtrtData.indices[i++] * posStride;
                x1 = vertices[index];
                y1 = vertices[index + 1];
                z1 = vertices[index + 2];
                index = posOffset + geomtrtData.indices[i++] * posStride;
                x2 = vertices[index];
                y2 = vertices[index + 1];
                z2 = vertices[index + 2];
                index = posOffset + geomtrtData.indices[i++] * posStride;
                x3 = vertices[index];
                y3 = vertices[index + 1];
                z3 = vertices[index + 2];
                dx1 = x3 - x1;
                dy1 = y3 - y1;
                dz1 = z3 - z1;
                dx2 = x2 - x1;
                dy2 = y2 - y1;
                dz2 = z2 - z1;
                cx = dz1 * dy2 - dy1 * dz2;
                cy = dx1 * dz2 - dz1 * dx2;
                cz = dy1 * dx2 - dx1 * dy2;
                d = Math.sqrt(cx * cx + cy * cy + cz * cz);
                // length of cross product = 2*triangle area
                if (true) {
                    var w = d * 10000;
                    if (w < 1)
                        w = 1;
                    geomtrtData.faceWeights[k++] = w;
                }
                d = 1 / d;
                geomtrtData.faceNormals[j++] = cx * d;
                geomtrtData.faceNormals[j++] = cy * d;
                geomtrtData.faceNormals[j++] = cz * d;
            }
            //_faceNormalsDirty = false;
        };
        /**
         * Updates the vertex normals based on the geometry.
         */
        GeometryData.updateVertexNormals = function (geomtrtData) {
            this.updateFaceNormals(geomtrtData);
            var v1;
            var f1 = 0, f2 = 1, f3 = 2;
            var lenV = geomtrtData.vertexDatas.length;
            var normalStride = 17;
            var normalOffset = 3;
            //target ||= new Vector.<Number>(lenV, true);
            //v1 = normalOffset;
            //while(v1 < lenV) {
            //    target[v1] = 0.0;
            //    target[v1 + 1] = 0.0;
            //    target[v1 + 2] = 0.0;
            //    v1 += normalStride;
            //}
            var i = 0, k = 0;
            var lenI = geomtrtData.indices.length;
            var index;
            var weight;
            while (i < lenI) {
                weight = geomtrtData.faceWeights[k++];
                index = normalOffset + geomtrtData.indices[i++] * normalStride;
                geomtrtData.vertexDatas[index] += geomtrtData.faceNormals[f1] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f2] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f3] * weight;
                index = normalOffset + geomtrtData.indices[i++] * normalStride;
                geomtrtData.vertexDatas[index] += geomtrtData.faceNormals[f1] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f2] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f3] * weight;
                index = normalOffset + geomtrtData.indices[i++] * normalStride;
                geomtrtData.vertexDatas[index] += geomtrtData.faceNormals[f1] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f2] * weight;
                geomtrtData.vertexDatas[index++] += geomtrtData.faceNormals[f3] * weight;
                f1 += 3;
                f2 += 3;
                f3 += 3;
            }
            //v1 = normalOffset;
            //    while(v1 < lenV) {
            //        var vx: Number = target[v1];
            //        var vy: Number = target[v1 + 1];
            //        var vz: Number = target[v1 + 2];
            //        var d: Number = 1.0 / Math.sqrt(vx * vx + vy * vy + vz * vz);
            //        target[v1] = vx * d;
            //        target[v1 + 1] = vy * d;
            //        target[v1 + 2] = vz * d;
            //        v1 += normalStride;
            //    }
            //_vertexNormalsDirty = false;
        };
        GeometryData.buildFaceTangents = function (geomtryData) {
            var iDebug = 0;
            for (var i = 0; i < geomtryData.indices.length; i++) {
                geomtryData.vertices.push(geomtryData.vertexDatas[i * geomtryData.vertexAttLength], geomtryData.vertexDatas[i * geomtryData.vertexAttLength + 1], geomtryData.vertexDatas[i * geomtryData.vertexAttLength + 2]);
                geomtryData.uvs.push(geomtryData.vertexDatas[i * geomtryData.vertexAttLength + 13], geomtryData.vertexDatas[i * geomtryData.vertexAttLength + 14]);
            }
            GeometryData.updateFaceTangents(geomtryData);
        };
        GeometryData.updateFaceTangents = function (geomtrtData) {
            var i = 0;
            var index1, index2, index3;
            var len = geomtrtData.indices.length;
            var ui, vi;
            var v0;
            var dv1, dv2;
            var denom;
            var x0, y0, z0;
            var dx1, dy1, dz1;
            var dx2, dy2, dz2;
            var cx, cy, cz;
            var vertices = geomtrtData.vertices;
            var uvs = geomtrtData.uvs;
            var posStride = 3;
            var posOffset = 0;
            var texStride = 2;
            var texOffset = 0;
            while (i < len) {
                index1 = geomtrtData.indices[i];
                index2 = geomtrtData.indices[i + 1];
                index3 = geomtrtData.indices[i + 2];
                ui = index1 * 2;
                v0 = uvs[ui + 1];
                ui = index2 * 2;
                dv1 = uvs[ui + 1] - v0;
                ui = index3 * 2;
                dv2 = uvs[ui + 1] - v0;
                vi = index1 * 3;
                x0 = vertices[vi];
                y0 = vertices[vi + 1];
                z0 = vertices[vi + 2];
                vi = index2 * 3;
                dx1 = vertices[vi] - x0;
                dy1 = vertices[vi + 1] - y0;
                dz1 = vertices[vi + 2] - z0;
                vi = index3 * 3;
                dx2 = vertices[vi] - x0;
                dy2 = vertices[vi + 1] - y0;
                dz2 = vertices[vi + 2] - z0;
                cx = dv2 * dx1 - dv1 * dx2;
                cy = dv2 * dy1 - dv1 * dy2;
                cz = dv2 * dz1 - dv1 * dz2;
                denom = 1 / Math.sqrt(cx * cx + cy * cy + cz * cz);
                geomtrtData.tangts[i++] = denom * cx;
                geomtrtData.tangts[i++] = denom * cy;
                geomtrtData.tangts[i++] = denom * cz;
            }
            var i;
            var lenV = geomtrtData.vertexDatas.length;
            var tangentStride = geomtrtData.vertexAttLength;
            var tangentOffset = 6;
            var target = geomtrtData.vertexDatas;
            i = tangentOffset;
            while (i < lenV) {
                target[i] = 0.0;
                target[i + 1] = 0.0;
                target[i + 2] = 0.0;
                i += tangentStride;
            }
            var k;
            var lenI = len;
            var index;
            var weight;
            var f1 = 0, f2 = 1, f3 = 2;
            i = 0;
            while (i < lenI) {
                weight = 1;
                index = tangentOffset + geomtrtData.indices[i++] * tangentStride;
                target[index++] += -geomtrtData.tangts[f1] * weight;
                target[index++] += geomtrtData.tangts[f2] * weight;
                target[index] += geomtrtData.tangts[f3] * weight;
                index = tangentOffset + geomtrtData.indices[i++] * tangentStride;
                target[index++] += -geomtrtData.tangts[f1] * weight;
                target[index++] += geomtrtData.tangts[f2] * weight;
                target[index] += geomtrtData.tangts[f3] * weight;
                index = tangentOffset + geomtrtData.indices[i++] * tangentStride;
                target[index++] += -geomtrtData.tangts[f1] * weight;
                target[index++] += geomtrtData.tangts[f2] * weight;
                target[index] += geomtrtData.tangts[f3] * weight;
                f1 += 3;
                f2 += 3;
                f3 += 3;
            }
            i = tangentOffset;
            while (i < lenV) {
                var vx = target[i];
                var vy = target[i + 1];
                var vz = target[i + 2];
                var d = 1.0 / Math.sqrt(vx * vx + vy * vy + vz * vz);
                target[i] = vx * d;
                target[i + 1] = vy * d;
                target[i + 2] = vz * d;
                i += tangentStride;
            }
        };
        return GeometryData;
    })();
    egret3d.GeometryData = GeometryData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (GeometryType) {
        GeometryType[GeometryType["Static"] = 0] = "Static";
        GeometryType[GeometryType["Skin"] = 1] = "Skin";
        GeometryType[GeometryType["Particle"] = 2] = "Particle";
        GeometryType[GeometryType["Billbord"] = 3] = "Billbord";
        GeometryType[GeometryType["VertexAnim"] = 4] = "VertexAnim";
        GeometryType[GeometryType["Grass"] = 5] = "Grass";
        GeometryType[GeometryType["Ribbon"] = 6] = "Ribbon";
        GeometryType[GeometryType["wrieFrame"] = 7] = "wrieFrame";
        GeometryType[GeometryType["Shadow"] = 8] = "Shadow";
    })(egret3d.GeometryType || (egret3d.GeometryType = {}));
    var GeometryType = egret3d.GeometryType;
    /**
     * @language zh_CN
     * @class egret3d.GeometryBase
     * @classdesc
     * GeometryBase类 表示几何形状基类
     */
    var GeometryBase = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function GeometryBase() {
            /**
            * @language zh_CN
            * 网格类型
            */
            this.geomtryType = 0;
            /**
            * @language zh_CN
            * 顶点属性长度
            */
            this.vertexAttLength = 17;
            /**
            * @language zh_CN
            * 顶点坐标大小
            */
            this.positionSize = 3;
            /**
            * @language zh_CN
            * 顶点法线大小
            */
            this.normalSize = 3;
            /**
            * @language zh_CN
            * 顶点切线大小
            */
            this.tangentSize = 3;
            /**
            * @language zh_CN
            * 顶点色大小
            */
            this.colorSize = 4;
            /**
            * @language zh_CN
            * 顶点uv大小
            */
            this.uvSize = 2;
            /**
            * @language zh_CN
            * 顶点uv2大小
            */
            this.uv2Size = 2;
            /**
            * @language zh_CN
            *
            */
            this.numItems = 0;
            /**
            * @language zh_CN
            * 包围盒min pos
            */
            this.minPos = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 包围盒max pos
            */
            this.maxPos = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 漫反射贴图名
            */
            this.textureFile = "";
            /**
            * @language zh_CN
            * 高光贴图名
            */
            this.textureSpecular = "";
            /**
            * @language zh_CN
            * 法线贴图名
            */
            this.textureBump = "";
        }
        /**
        * @language zh_CN
        * 生成网格
        */
        GeometryBase.prototype.buildGeomtry = function () {
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        */
        GeometryBase.prototype.updata = function (time, delay) {
        };
        /**
        * @language zh_CN
        * 生成包围盒
        */
        GeometryBase.prototype.buildBoundBox = function () {
            this.minPos.copyFrom(new egret3d.Vector3D(99999.0, 99999.0, 99999.0));
            this.maxPos.copyFrom(new egret3d.Vector3D(-99999.0, -99999.0, -99999.0));
            for (var i = 0; i < this.verticesData.length; i += this.vertexAttLength) {
                if (this.maxPos.x < this.verticesData[i]) {
                    this.maxPos.x = this.verticesData[i];
                }
                if (this.maxPos.y < this.verticesData[i + 1]) {
                    this.maxPos.y = this.verticesData[i + 1];
                }
                if (this.maxPos.z < this.verticesData[i + 2]) {
                    this.maxPos.z = this.verticesData[i + 2];
                }
                if (this.minPos.x > this.verticesData[i]) {
                    this.minPos.x = this.verticesData[i];
                }
                if (this.minPos.y > this.verticesData[i + 1]) {
                    this.minPos.y = this.verticesData[i + 1];
                }
                if (this.minPos.z > this.verticesData[i + 2]) {
                    this.minPos.z = this.verticesData[i + 2];
                }
            }
        };
        /**
        * @language zh_CN
        * 转旋网格的每个顶点
        * @param euler 转旋欧拉角
        */
        GeometryBase.prototype.rotationGeomtry = function (euler) {
            this.rotationQ = new egret3d.Quaternion();
            this.rotationQ.fromEulerAngles(euler.x * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES, euler.y * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES, euler.z * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES);
            var pos = new egret3d.Vector3D();
            for (var i = 0; i < this.verticesData.length / this.vertexAttLength; i++) {
                pos.x = this.verticesData[this.vertexAttLength * i + 0];
                pos.y = this.verticesData[this.vertexAttLength * i + 1];
                pos.z = this.verticesData[this.vertexAttLength * i + 2];
                this.rotationQ.rotatePoint(pos, pos);
                this.verticesData[this.vertexAttLength * i + 0] = pos.x;
                this.verticesData[this.vertexAttLength * i + 1] = pos.y;
                this.verticesData[this.vertexAttLength * i + 2] = pos.z;
            }
        };
        return GeometryBase;
    })();
    egret3d.GeometryBase = GeometryBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SubGeometry
     * @classdesc
     * SubGeometry类
     */
    var SubGeometry = (function (_super) {
        __extends(SubGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function SubGeometry() {
            _super.call(this);
        }
        /**
        * @language zh_CN
        * 设置网格数据
        * @param indexData 顶点
        * @param vertexData: 索引
        */
        SubGeometry.prototype.setGeomtryData = function (indexData, vertexData) {
            this.indexData = indexData;
            this.verticesData = vertexData;
            this.numItems = indexData.length;
        };
        return SubGeometry;
    })(egret3d.GeometryBase);
    egret3d.SubGeometry = SubGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.CubeGeometry
     * @classdesc
     * CubeGeometry类 表示立方体
     */
    var CubeGeometry = (function (_super) {
        __extends(CubeGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        * @param width {Number}
        * @param height {Number}
        * @param depth {Number}
        */
        function CubeGeometry(width, height, depth) {
            if (width === void 0) { width = 80; }
            if (height === void 0) { height = 80; }
            if (depth === void 0) { depth = 80; }
            _super.call(this);
            /**
            * @language zh_CN
            * width
            */
            this.width = 80;
            /**
            * @language zh_CN
            * height
            */
            this.height = 80;
            /**
            * @language zh_CN
            * depth
            */
            this.depth = 80;
            this.width = width;
            this.height = height;
            this.depth = depth;
            this.buildGeomtry();
        }
        /**
        * @language zh_CN
        * 生成网格
        */
        CubeGeometry.prototype.buildGeomtry = function () {
            var vertices = new Array();
            vertices.push(-this.width, -this.height, -this.depth, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width, this.height, -this.depth, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width, this.height, -this.depth, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width, this.height, -this.depth, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width, -this.height, -this.depth, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width, -this.height, -this.depth, 0.0, 0.0, -10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width, -this.height, this.depth, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width, -this.height, this.depth, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, this.width, this.height, this.depth, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width, this.height, this.depth, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width, this.height, this.depth, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, -this.width, -this.height, this.depth, 0.0, 0.0, 10.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width, -this.height, -this.depth, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width, -this.height, -this.depth, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, this.width, -this.height, this.depth, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width, -this.height, this.depth, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width, -this.height, this.depth, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, -this.width, -this.height, -this.depth, 0.0, -10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width, -this.height, -this.depth, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width, this.height, -this.depth, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, this.width, this.height, this.depth, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width, this.height, this.depth, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width, -this.height, this.depth, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width, -this.height, -this.depth, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, this.width, this.height, -this.depth, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width, this.height, -this.depth, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width, this.height, this.depth, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width, this.height, this.depth, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, this.width, this.height, this.depth, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, this.width, this.height, -this.depth, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width, this.height, -this.depth, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0, -this.width, -this.height, -this.depth, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, -this.width, -this.height, this.depth, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width, -this.height, this.depth, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 1.0, 1.0, 0, 0, -this.width, this.height, this.depth, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 1.0, 0, 0, -this.width, this.height, -this.depth, -10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1, 1, 1, 1, 0.0, 0.0, 0, 0);
            var cubeVertexIndices = new Array();
            cubeVertexIndices.push(0, 2, 1, 3, 5, 4, 6, 8, 7, 9, 11, 10, 12, 14, 13, 15, 17, 16, 18, 20, 19, 21, 23, 22, 24, 26, 25, 27, 29, 28, 30, 32, 31, 33, 35, 34);
            this.setGeomtryData(cubeVertexIndices, vertices);
            this.buildBoundBox();
        };
        return CubeGeometry;
    })(egret3d.SubGeometry);
    egret3d.CubeGeometry = CubeGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SphereGeometry
     * @classdesc
     * SphereGeometry类 表示球体
     */
    var SphereGeometry = (function (_super) {
        __extends(SphereGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        * @param r {Number}
        * @param segmentsW {Number}
        * @param segmentsH {Number}
        */
        function SphereGeometry(r, segmentsW, segmentsH) {
            if (r === void 0) { r = 100.0; }
            if (segmentsW === void 0) { segmentsW = 15; }
            if (segmentsH === void 0) { segmentsH = 15; }
            _super.call(this);
            this._segmentsW = 50;
            this._segmentsH = 50;
            this._radius = 100;
            this._radius = r;
            this._segmentsW = segmentsW;
            this._segmentsH = segmentsH;
            this.buildSphere();
        }
        SphereGeometry.prototype.buildSphere = function () {
            var vertices;
            var indices;
            var i = 0, j = 0, triIndex = 0;
            var numVerts = (this._segmentsH + 1) * (this._segmentsW + 1);
            var stride = this.vertexAttLength;
            var skip = stride - 9;
            vertices = new Array(numVerts * stride);
            indices = new Array((this._segmentsH - 1) * this._segmentsW * 6);
            var startIndex = 0;
            var index = 0;
            var comp1 = 0, comp2 = 0, t1 = 0, t2 = 0;
            for (j = 0; j <= this._segmentsH; ++j) {
                startIndex = index;
                var horangle = Math.PI * j / this._segmentsH;
                var z = -this._radius * Math.cos(horangle);
                var ringradius = this._radius * Math.sin(horangle);
                for (i = 0; i <= this._segmentsW; ++i) {
                    var verangle = 2 * Math.PI * i / this._segmentsW;
                    var x = ringradius * Math.cos(verangle);
                    var y = ringradius * Math.sin(verangle);
                    var normLen = 1 / Math.sqrt(x * x + y * y + z * z);
                    var tanLen = Math.sqrt(y * y + x * x);
                    t1 = 0;
                    t2 = tanLen > .007 ? x / tanLen : 0;
                    comp1 = -z;
                    comp2 = y;
                    if (i == this._segmentsW) {
                        vertices[index++] = vertices[startIndex];
                        vertices[index++] = vertices[startIndex + 1];
                        vertices[index++] = vertices[startIndex + 2];
                        vertices[index++] = x * normLen;
                        ;
                        vertices[index++] = comp1 * normLen;
                        ;
                        vertices[index++] = comp2 * normLen;
                        ;
                        vertices[index++] = tanLen > .007 ? -y / tanLen : 1;
                        vertices[index++] = t1;
                        vertices[index++] = t2;
                    }
                    else {
                        vertices[index++] = x;
                        vertices[index++] = comp1;
                        vertices[index++] = comp2;
                        vertices[index++] = x * normLen;
                        vertices[index++] = comp1 * normLen;
                        vertices[index++] = comp2 * normLen;
                        vertices[index++] = tanLen > .007 ? -y / tanLen : 1;
                        vertices[index++] = t1;
                        vertices[index++] = t2;
                    }
                    if (i > 0 && j > 0) {
                        var a = (this._segmentsW + 1) * j + i;
                        var b = (this._segmentsW + 1) * j + i - 1;
                        var c = (this._segmentsW + 1) * (j - 1) + i - 1;
                        var d = (this._segmentsW + 1) * (j - 1) + i;
                        if (j == this._segmentsH) {
                            vertices[index - 9] = vertices[startIndex];
                            vertices[index - 8] = vertices[startIndex + 1];
                            vertices[index - 7] = vertices[startIndex + 2];
                            indices[triIndex++] = a;
                            indices[triIndex++] = d;
                            indices[triIndex++] = c;
                        }
                        else if (j == 1) {
                            indices[triIndex++] = a;
                            indices[triIndex++] = c;
                            indices[triIndex++] = b;
                        }
                        else {
                            indices[triIndex++] = a;
                            indices[triIndex++] = d;
                            indices[triIndex++] = c;
                            indices[triIndex++] = a;
                            indices[triIndex++] = c;
                            indices[triIndex++] = b;
                        }
                    }
                    index += skip;
                }
            }
            //var i: number, j: number;
            var stride = 17;
            var numUvs = (this._segmentsH + 1) * (this._segmentsW + 1) * stride;
            var data;
            var skip = stride - 2;
            var index = 13;
            for (j = 0; j <= this._segmentsH; ++j) {
                for (i = 0; i <= this._segmentsW; ++i) {
                    vertices[index++] = (i / this._segmentsW);
                    vertices[index++] = (j / this._segmentsH);
                    index += skip;
                }
            }
            this.setGeomtryData(indices, vertices);
        };
        return SphereGeometry;
    })(egret3d.SubGeometry);
    egret3d.SphereGeometry = SphereGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.PlaneGeometry
     * @classdesc
     * PlaneGeometry类
     */
    var PlaneGeometry = (function (_super) {
        __extends(PlaneGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        * @param width {Number}
        * @param height {Number}
        * @param segmentsW {Number}
        * @param segmentsH {Number}
        * @param uScale {Number}
        * @param vScale {Number}
        */
        function PlaneGeometry(width, height, segmentsW, segmentsH, uScale, vScale) {
            if (width === void 0) { width = 500; }
            if (height === void 0) { height = 500; }
            if (segmentsW === void 0) { segmentsW = 1; }
            if (segmentsH === void 0) { segmentsH = 1; }
            if (uScale === void 0) { uScale = 1; }
            if (vScale === void 0) { vScale = 1; }
            _super.call(this);
            this._segmentsW = 1;
            this._segmentsH = 1;
            this._width = 500.0;
            this._height = 500.0;
            this._scaleU = 1;
            this._scaleV = 1;
            this._width = width;
            this._height = height;
            this._segmentsW = segmentsW;
            this._segmentsH = segmentsH;
            this._scaleU = uScale;
            this._scaleV = vScale;
            this.buildGeometry();
        }
        PlaneGeometry.prototype.buildGeometry = function () {
            var vertices;
            var indices;
            var x, y;
            var numIndices;
            var base;
            var tw = this._segmentsW + 1;
            var numVertices = (this._segmentsH + 1) * tw;
            var stride = this.vertexAttLength;
            var skip = stride - 15;
            numIndices = this._segmentsH * this._segmentsW * 6;
            vertices = new Array(numVertices * stride);
            indices = new Array(numIndices);
            numIndices = 0;
            var point = new egret3d.Vector3D();
            var index = 0;
            for (var yi = 0; yi <= this._segmentsH; ++yi) {
                for (var xi = 0; xi <= this._segmentsW; ++xi) {
                    x = (xi / this._segmentsW - .5) * this._width;
                    y = (yi / this._segmentsH - .5) * this._height;
                    vertices[index++] = x;
                    vertices[index++] = 0;
                    vertices[index++] = y;
                    vertices[index++] = 0;
                    vertices[index++] = 1;
                    vertices[index++] = 0;
                    vertices[index++] = 1;
                    vertices[index++] = 0;
                    vertices[index++] = 0;
                    vertices[index++] = 1;
                    vertices[index++] = 1;
                    vertices[index++] = 1;
                    vertices[index++] = 1;
                    vertices[index++] = (xi / this._segmentsW) * this._scaleU;
                    vertices[index++] = (1 - yi / this._segmentsH) * this._scaleV;
                    index += skip;
                    if (xi != this._segmentsW && yi != this._segmentsH) {
                        base = xi + yi * tw;
                        var mult = 1;
                        indices[numIndices++] = base * mult;
                        indices[numIndices++] = (base + tw + 1) * mult;
                        indices[numIndices++] = (base + tw) * mult;
                        indices[numIndices++] = base * mult;
                        indices[numIndices++] = (base + 1) * mult;
                        indices[numIndices++] = (base + tw + 1) * mult;
                    }
                }
            }
            this.setGeomtryData(indices, vertices);
            this.buildBoundBox();
        };
        return PlaneGeometry;
    })(egret3d.SubGeometry);
    egret3d.PlaneGeometry = PlaneGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.CylinderGeometry
     * @classdesc
     * CylinderGeometry类 表示圆柱体
     */
    var CylinderGeometry = (function (_super) {
        __extends(CylinderGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function CylinderGeometry() {
            _super.call(this);
            this.buildGeomtry();
        }
        /**
        * @language zh_CN
        * 生成网格
        */
        CylinderGeometry.prototype.buildGeomtry = function () {
            var vertices = new Array();
            var vertexIndices = new Array();
            var m_nSegments = 10;
            var m_rRadius = 10;
            var m_rHeight = 60;
            var nCurrentSegment = 10;
            var rDeltaSegAngle = (2.0 * Math.PI / m_nSegments);
            var rSegmentLength = 1.0 / m_nSegments;
            for (nCurrentSegment = 0; nCurrentSegment <= m_nSegments; nCurrentSegment++) {
                var x0 = m_rRadius * Math.sin(nCurrentSegment * rDeltaSegAngle);
                var z0 = m_rRadius * Math.cos(nCurrentSegment * rDeltaSegAngle);
                vertices.push(x0, 0.0 + (m_rHeight / 2.0), z0, x0, 0.0, z0, 1, 1, 1, 1, 1.0, 0.0, 0, 0, x0, 0.0 - (m_rHeight / 2.0), z0, x0, 0.0, z0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            }
            vertices.push(0.0, 0.0 + (m_rHeight / 2.0), 0.0, 0.0, 1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            for (nCurrentSegment = 0; nCurrentSegment <= m_nSegments; nCurrentSegment++) {
                var x0 = m_rRadius * Math.sin(nCurrentSegment * rDeltaSegAngle);
                var z0 = m_rRadius * Math.cos(nCurrentSegment * rDeltaSegAngle);
                //float tu0 = (0.5f * sinf(nCurrentSegment * rDeltaSegAngle)) + 0.5f;
                //float tv0 = (0.5f * cosf(nCurrentSegment * rDeltaSegAngle)) + 0.5f;
                vertices.push(x0, 0.0 + (m_rHeight / 2.0), z0, 0.0, 1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            }
            vertices.push(0.0, 0.0 - (m_rHeight / 2.0), 0.0, 0.0, -1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            for (nCurrentSegment = m_nSegments; nCurrentSegment >= 0; nCurrentSegment--) {
                var x0 = m_rRadius * Math.sin(nCurrentSegment * rDeltaSegAngle);
                var z0 = m_rRadius * Math.cos(nCurrentSegment * rDeltaSegAngle);
                vertices.push(x0, 0.0 - (m_rHeight / 2.0), z0, 0.0, -1.0, 0.0, 1, 1, 1, 1, 1.0, 0.0, 0, 0);
            }
            this.setGeomtryData(vertexIndices, vertices);
        };
        return CylinderGeometry;
    })(egret3d.SubGeometry);
    egret3d.CylinderGeometry = CylinderGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.FaceData
     * @classdesc
     * FaceData类 表示索引数据
     */
    var FaceData = (function () {
        function FaceData() {
            /**
            * @language zh_CN
            * 顶点索引数据
            */
            this.vertexIndices = new Array();
            /**
            * @language zh_CN
            * uv索引数据
            */
            this.uvIndices = new Array();
            /**
            * @language zh_CN
            * uv2索引数据
            */
            this.uv2Indices = new Array();
            /**
            * @language zh_CN
            * 法线索引数据
            */
            this.normalIndices = new Array();
            /**
            * @language zh_CN
            * 顶点色索引数据
            */
            this.colorIndices = new Array();
            /**
            * @language zh_CN
            *
            */
            this.indexIds = new Array(); // used for real index lookups
        }
        return FaceData;
    })();
    egret3d.FaceData = FaceData;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SkinGeometry
     * @classdesc
     * SkinGeometry类
     */
    var SkinGeometry = (function (_super) {
        __extends(SkinGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function SkinGeometry() {
            _super.call(this);
            /**
            * @language zh_CN
            *
            */
            this.time0 = 0;
            this.geomtryType = egret3d.GeometryType.Skin;
        }
        /**
        * @language zh_CN
        * 设置网格数据
        * @param indexData 顶点
        * @param vertexData: 索引
        * @param skeleton: 骨骼
        */
        SkinGeometry.prototype.setGeomtryData = function (indexData, vertexData, skeleton) {
            this.indexData = indexData;
            this.verticesData = vertexData;
            this.numItems = indexData.length;
            this.initialSkeleton = skeleton;
        };
        return SkinGeometry;
    })(egret3d.GeometryBase);
    egret3d.SkinGeometry = SkinGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.ElevationGeometry
     * @classdesc
     * ElevationGeometry类 表示圆柱体
     */
    var ElevationGeometry = (function (_super) {
        __extends(ElevationGeometry, _super);
        /**
        * @language zh_CN
        * constructor
        * @param heightmap {ImageTexture}
        * @param width {Number}
        * @param height {Number}
        * @param depth {Number}
        * @param segmentsW {Number}
        * @param segmentsH {Number}
        * @param maxElevation {Number}
        * @param minElevation {Number}
        */
        function ElevationGeometry(heightmap, width, height, depth, segmentsW, segmentsH, maxElevation, minElevation) {
            if (width === void 0) { width = 1000; }
            if (height === void 0) { height = 100; }
            if (depth === void 0) { depth = 1000; }
            if (segmentsW === void 0) { segmentsW = 30; }
            if (segmentsH === void 0) { segmentsH = 30; }
            if (maxElevation === void 0) { maxElevation = 255; }
            if (minElevation === void 0) { minElevation = 0; }
            _super.call(this);
            this._scaleU = 1.0;
            this._scaleV = 1.0;
            this._segmentsW = segmentsW;
            this._segmentsH = segmentsH;
            this._width = width;
            this._height = height;
            this._depth = depth;
            this._minElevation = minElevation;
            this._maxElevation = maxElevation;
            this.heightmap = heightmap;
            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext("2d");
            this.canvas.width = heightmap.width;
            this.canvas.height = heightmap.height;
            this.ctx.drawImage(heightmap.imageData, 0, 0, heightmap.width, heightmap.height);
            document.body.appendChild(this.canvas);
            this.canvas.hidden = true;
            this.imageData = this.ctx.getImageData(0, 0, this.heightmap.imageData.width, this.heightmap.imageData.height);
            this.buildElevationGeometry();
        }
        ElevationGeometry.prototype.buildTerrain = function (widthSegment, heightSegment) {
        };
        ElevationGeometry.prototype.getPixel = function (x, z) {
            var index = z * (this.heightmap.imageData.width * 4) + x * 4;
            var color = this.imageData.data[index + 3] << 24 | this.imageData.data[index + 0] << 16 | this.imageData.data[index + 1] << 8 | this.imageData.data[index + 2];
            return color;
        };
        ElevationGeometry.prototype.getHeightBypos = function (x, z) {
            var color = this.getPixel(x, z);
            return (color > this._maxElevation) ? (this._maxElevation / 0xff) * this._height : ((color < this._minElevation) ? (this._minElevation / 0xff) * this._height : (color / 0xff) * this._height);
        };
        ElevationGeometry.prototype.buildElevationGeometry = function () {
            var vertices;
            var indices;
            var x, z;
            var numInds;
            var base;
            var tw = this._segmentsW + 1;
            var numVerts = (this._segmentsH + 1) * tw;
            var uDiv = (this.heightmap.width - 1) / this._segmentsW;
            var vDiv = (this.heightmap.height - 1) / this._segmentsH;
            var u, v;
            var y;
            //if (numVerts == this._subGeometry.numVertices) {
            //    vertices = this._subGeometry.vertexData;
            //    indices = this._subGeometry.indexData;
            // } else {
            vertices = new Array(numVerts * 3);
            indices = new Array(this._segmentsH * this._segmentsW * 6);
            //}
            numVerts = 0;
            numInds = 0;
            var col;
            for (var zi = 0; zi <= this._segmentsH; ++zi) {
                for (var xi = 0; xi <= this._segmentsW; ++xi) {
                    x = (xi / this._segmentsW - 0.5) * this._width;
                    z = (zi / this._segmentsH - 0.5) * this._depth;
                    u = Math.floor(xi * uDiv);
                    v = Math.floor((this._segmentsH - zi) * vDiv);
                    col = this.getPixel(u, v) & 0xff;
                    y = (col > this._maxElevation) ? (this._maxElevation / 0xff) * this._height : ((col < this._minElevation) ? (this._minElevation / 0xff) * this._height : (col / 0xff) * this._height);
                    //pos
                    vertices[numVerts++] = x;
                    vertices[numVerts++] = y; //Math.random() * 1000;;
                    vertices[numVerts++] = z;
                    //normal
                    vertices[numVerts++] = 1.0;
                    vertices[numVerts++] = 1.0;
                    vertices[numVerts++] = 1.0;
                    //tan
                    vertices[numVerts++] = -1.0;
                    vertices[numVerts++] = 0.0;
                    vertices[numVerts++] = 0.0;
                    //color
                    vertices[numVerts++] = 1.0;
                    vertices[numVerts++] = 1.0;
                    vertices[numVerts++] = 1.0;
                    vertices[numVerts++] = 1.0;
                    //uv
                    vertices[numVerts++] = xi / this._segmentsW * this._scaleU;
                    vertices[numVerts++] = zi / this._segmentsH * this._scaleV;
                    vertices[numVerts++] = xi / this._segmentsW;
                    vertices[numVerts++] = zi / this._segmentsH;
                    if (xi != this._segmentsW && zi != this._segmentsH) {
                        base = xi + zi * tw;
                        indices[numInds++] = base;
                        indices[numInds++] = base + tw + 1;
                        indices[numInds++] = base + tw;
                        indices[numInds++] = base;
                        indices[numInds++] = base + 1;
                        indices[numInds++] = base + tw + 1;
                    }
                }
            }
            this.indexData = indices;
            this.verticesData = vertices;
            this.numItems = indices.length;
            // this.updateFaceNormals();
            //this._subGeometry.autoDeriveVertexNormals = true;
            //this._subGeometry.autoDeriveVertexTangents = true;
            //this._subGeometry.updateVertexData(vertices);
            //this._subGeometry.updateIndexData(indices);
        };
        ElevationGeometry.prototype.updateFaceNormals = function () {
            var i = 0, j = 0, k = 0;
            var index;
            var len = this.indexData.length;
            var x1, x2, x3;
            var y1, y2, y3;
            var z1, z2, z3;
            var dx1, dy1, dz1;
            var dx2, dy2, dz2;
            var cx, cy, cz;
            var d;
            var vertices = this.verticesData;
            var posStride = 17;
            var posOffset = 0;
            while (i < len) {
                index = posOffset + this.indexData[i++] * posStride;
                x1 = vertices[index];
                y1 = vertices[index + 1];
                z1 = vertices[index + 2];
                index = posOffset + this.indexData[i++] * posStride;
                x2 = vertices[index];
                y2 = vertices[index + 1];
                z2 = vertices[index + 2];
                index = posOffset + this.indexData[i++] * posStride;
                x3 = vertices[index];
                y3 = vertices[index + 1];
                z3 = vertices[index + 2];
                dx1 = x3 - x1;
                dy1 = y3 - y1;
                dz1 = z3 - z1;
                dx2 = x2 - x1;
                dy2 = y2 - y1;
                dz2 = z2 - z1;
                cx = dz1 * dy2 - dy1 * dz2;
                cy = dx1 * dz2 - dz1 * dx2;
                cz = dy1 * dx2 - dx1 * dy2;
                d = Math.sqrt(cx * cx + cy * cy + cz * cz);
                // length of cross product = 2*triangle area
                //if (true) {
                //    var w: number = d * 10000;
                //    if (w < 1)
                //        w = 1;
                //    geomtrtData.faceWeights[k++] = w;
                //}
                d = 1 / d;
                vertices[j * posStride + 3] = cx * d;
                vertices[j * posStride + 4] = cy * d;
                vertices[j * posStride + 5] = cz * d;
                j++;
            }
        };
        return ElevationGeometry;
    })(egret3d.GeometryBase);
    egret3d.ElevationGeometry = ElevationGeometry;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.GeometryUtil
    * @classdesc
    * 网格工具类
    */
    var GeometryUtil = (function () {
        function GeometryUtil() {
        }
        /**
        * @language zh_CN
        * 打包模型数据
        * @param num 顶点数
        * @param vertexLen 顶点长度
        * @param source 模型数据
        * @returns 打包后的模型
        */
        GeometryUtil.packageGeometry = function (num, vertexLen, source) {
            source.numberOfVertices = source.verticesData.length / source.vertexAttLength;
            var geometry = new egret3d.SubGeometry();
            var vertexAttLength = source.vertexAttLength;
            var newGeometryNumberOfVertices = source.numberOfVertices * vertexLen;
            var vertexData = new Array(newGeometryNumberOfVertices * num);
            var indexData = new Array(num * source.indexData.length);
            for (var i = 0; i < num; i++) {
                for (var j = 0; j < source.numberOfVertices; j++) {
                    vertexData[(j * vertexLen + 0) + i * newGeometryNumberOfVertices] = source.verticesData[j * vertexAttLength + 0];
                    vertexData[(j * vertexLen + 1) + i * newGeometryNumberOfVertices] = source.verticesData[j * vertexAttLength + 1];
                    vertexData[(j * vertexLen + 2) + i * newGeometryNumberOfVertices] = source.verticesData[j * vertexAttLength + 2];
                    vertexData[(j * vertexLen + 3) + i * newGeometryNumberOfVertices] = i;
                    vertexData[(j * vertexLen + 4) + i * newGeometryNumberOfVertices] = 0;
                    vertexData[(j * vertexLen + 5) + i * newGeometryNumberOfVertices] = 0;
                    vertexData[(j * vertexLen + 6) + i * newGeometryNumberOfVertices] = 0;
                    vertexData[(j * vertexLen + 7) + i * newGeometryNumberOfVertices] = source.verticesData[j * vertexAttLength + 13];
                    vertexData[(j * vertexLen + 8) + i * newGeometryNumberOfVertices] = source.verticesData[j * vertexAttLength + 14];
                }
            }
            for (var i = 0; i < num; i++) {
                for (var j = 0; j < source.indexData.length; j++) {
                    indexData[j + i * source.indexData.length] = source.indexData[j] + i * source.numberOfVertices;
                }
            }
            geometry.setGeomtryData(indexData, vertexData);
            geometry.geometryNum = num;
            geometry.vertexAttLength = vertexLen;
            geometry.numberOfVertices = geometry.verticesData.length / geometry.vertexAttLength;
            return geometry;
        };
        return GeometryUtil;
    })();
    egret3d.GeometryUtil = GeometryUtil;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Mesh
    * @classdesc
    * 3d模型 生成渲染模型
    */
    var Mesh = (function (_super) {
        __extends(Mesh, _super);
        /**
        * @language zh_CN
        * constructor
        * @param geometry 模型数据
        * @param material 模型材质
        * @param animation 模型动画
        */
        function Mesh(geometry, material, animation) {
            if (animation === void 0) { animation = null; }
            _super.call(this);
            this.geometry = geometry;
            this.material = material;
            this.animation = animation;
            this.box.fillBox(this.geometry.minPos, this.geometry.maxPos);
        }
        /**
        * @language zh_CN
        * 克隆一个模型
        * @returns 克隆后的模型
        */
        Mesh.prototype.clone = function () {
            return new Mesh(this.geometry, this.material, this.animation ? this.animation.clone() : null);
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 间隔时间
        */
        Mesh.prototype.update = function (time, delay) {
            if (this.isDisable)
                return;
            if (this.animation) {
                this.animation.updata(time, delay);
            }
        };
        return Mesh;
    })(egret3d.Object3D);
    egret3d.Mesh = Mesh;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (LoaderType) {
        LoaderType[LoaderType["LOADER_MODEL_TYPE"] = 0] = "LOADER_MODEL_TYPE";
        LoaderType[LoaderType["LOADER_SCENE_TYPE"] = 1] = "LOADER_SCENE_TYPE";
        LoaderType[LoaderType["LOADER_TEXTURE_TYPE"] = 2] = "LOADER_TEXTURE_TYPE";
    })(egret3d.LoaderType || (egret3d.LoaderType = {}));
    var LoaderType = egret3d.LoaderType;
    /**
     * @language zh_CN
     * @class egret3d.BaseLoader
     * @classdesc
     * BaseLoader类
     */
    var BaseLoader = (function (_super) {
        __extends(BaseLoader, _super);
        /**
         * @language zh_CN
         * constructor
         * @param type
         * @param url
         */
        function BaseLoader(type, url) {
            if (url === void 0) { url = null; }
            _super.call(this);
            this.type = type;
            this.url = url;
        }
        /**
         * @language zh_CN
         *  加载场景;
         * @param url场景URL路径目录;
         * @returns {}
         */
        BaseLoader.prototype.load = function (url) {
            if (url === void 0) { url = null; }
            if (url != null) {
                this.url = url;
            }
            if (null == this.url)
                return;
            this.onLoad();
        };
        /**
         * @language zh_CN
         * @returns {}
         */
        BaseLoader.prototype.onLoad = function () {
        };
        return BaseLoader;
    })(egret3d.EventDispatcher);
    egret3d.BaseLoader = BaseLoader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.TextureLoader
     * @classdesc
     * TextureLoader类 用于Texture文件加载
     */
    var TextureLoader = (function (_super) {
        __extends(TextureLoader, _super);
        /**
         * @language zh_CN
         * constructor
         * @param url
         */
        function TextureLoader(url) {
            if (url === void 0) { url = null; }
            _super.call(this, egret3d.LoaderType.LOADER_TEXTURE_TYPE, url);
        }
        Object.defineProperty(TextureLoader.prototype, "texture", {
            /**
             * @language zh_CN
             * @returns TextureBase
             */
            get: function () {
                return this._texture;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         * @returns {}
         */
        TextureLoader.prototype.onLoad = function () {
            var _this = this;
            var textureLoader = new egret3d.URLLoader();
            textureLoader.onLoadComplete = function (textureLoader) { return _this.onEMFileLoadComplete(textureLoader); };
            textureLoader.load(this.url);
        };
        TextureLoader.prototype.onEMFileLoadComplete = function (textureLoader) {
            this._texture = textureLoader.data;
			this._texture.upload(egret3d.Egret3DDrive.context3D);	
            this.dispatchEvent(new egret3d.Event3D(egret3d.Event3D.EVENT_LOAD_COMPLETE, this));
        };
        return TextureLoader;
    })(egret3d.BaseLoader);
    egret3d.TextureLoader = TextureLoader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.ModeLoader
     * @classdesc
     * ModeLoader类
     */
    var ModeLoader = (function (_super) {
        __extends(ModeLoader, _super);
        /**
         * @language zh_CN
         * constructor
         * @param rootURL
         * @param ESMFile
         * @param EAMFiles
         */
        function ModeLoader(rootURL, ESMFile, EAMFiles) {
            if (rootURL === void 0) { rootURL = null; }
            if (ESMFile === void 0) { ESMFile = null; }
            if (EAMFiles === void 0) { EAMFiles = null; }
            _super.call(this, egret3d.LoaderType.LOADER_MODEL_TYPE, rootURL);
            this.url = rootURL;
            this._esmFile = ESMFile;
            this._eamFiles = EAMFiles;
        }
        Object.defineProperty(ModeLoader.prototype, "esmFile", {
            /**
             * @language zh_CN
             * @returns string
             */
            get: function () {
                return this._esmFile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModeLoader.prototype, "mesh", {
            /**
             * 模型Mesh对象;
             */
            /**
             * @language zh_CN
             * 模型Mesh对象;
             * @returns Mesh
             */
            get: function () {
                return this._mesh;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModeLoader.prototype, "geomtry", {
            /**
             * 模型GeometryBase对象;
             */
            /**
             * @language zh_CN
             * 模型GeometryBase对象;
             * @returns GeometryBase
             */
            get: function () {
                return this._geomtry;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         */
        ModeLoader.prototype.onLoad = function () {
            var _this = this;
            this._mesh = null;
            this._geomtry = null;
            var esmLoader = new egret3d.URLLoader();
            esmLoader.onLoadComplete = function (loader) { return _this.onESMLoadComplete(_this.url, loader, _this._eamFiles); };
            esmLoader.load(this.url + this._esmFile);
        };
        ModeLoader.prototype.onESMLoadComplete = function (rootURL, esmLoader, EAMFiles) {
            this._geomtry = esmLoader.data;
            var useDiffuse = (this._geomtry.textureFile && this._geomtry.textureFile.length > 0);
            var useNormal = (this._geomtry.textureBump && this._geomtry.textureBump.length > 0);
            var useSpecular = (this._geomtry.textureSpecular && this._geomtry.textureSpecular.length > 0);
            var material = new egret3d.TextureMaterial(null);
            if (this._geomtry.textureFile.length > 0) {
                var asynLoadingMaterial = new egret3d.AsyncLoadingTexturematerial(material);
                asynLoadingMaterial.loadTexture(useDiffuse ? (rootURL + this._geomtry.textureFile) : null, useNormal ? (rootURL + this._geomtry.textureBump) : null, useSpecular ? (rootURL + this._geomtry.textureSpecular) : null);
            }
            if (this._geomtry.geomtryType == egret3d.GeometryType.Skin) {
                var skinGeomtry = this._geomtry;
                this._mesh = new egret3d.Mesh(this._geomtry, material, new egret3d.SkeletonAnimation(skinGeomtry.initialSkeleton));
            }
            else {
                this._mesh = new egret3d.Mesh(this._geomtry, material);
            }
            if (EAMFiles && EAMFiles.length > 0) {
                this.loadEAMFile(rootURL, 0, EAMFiles);
            }
            else {
                var e = new egret3d.Event3D(egret3d.Event3D.EVENT_LOAD_COMPLETE);
                e.data = this;
                this.dispatchEvent(e);
            }
        };
        ModeLoader.prototype.loadEAMFile = function (rootURL, index, EAMFiles) {
            var _this = this;
            if (index >= EAMFiles.length) {
                var e = new egret3d.Event3D(egret3d.Event3D.EVENT_LOAD_COMPLETE);
                e.data = this;
                this.dispatchEvent(e);
                return;
            }
            var urlLoader = new egret3d.URLLoader();
            urlLoader.onLoadComplete = function (loader) { return _this.onEAMLoadComplete(rootURL, loader.data, index, EAMFiles); };
            urlLoader.load(rootURL + EAMFiles[index]);
        };
        ModeLoader.prototype.onEAMLoadComplete = function (rootURL, animation, index, EAMFiles) {
            this._mesh.animation.addSkeletonAnimationClip(animation);
            this.loadEAMFile(rootURL, index + 1, EAMFiles);
        };
        return ModeLoader;
    })(egret3d.BaseLoader);
    egret3d.ModeLoader = ModeLoader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.SceneLoader
     * @classdesc
     * SceneLoader类 用于Scene文件加载
     */
    var SceneLoader = (function (_super) {
        __extends(SceneLoader, _super);
        /**
         * @language zh_CN
         * constructor
         * @param sceneURL {String}
         */
        function SceneLoader(sceneURL) {
            if (sceneURL === void 0) { sceneURL = null; }
            _super.call(this, egret3d.LoaderType.LOADER_SCENE_TYPE, sceneURL);
            this._meshList = [];
            this._totalNumber = 0;
        }
        Object.defineProperty(SceneLoader.prototype, "meshList", {
            /**
             * 场景对象列表;
             */
            /**
             * @language zh_CN
             * 场景对象列表;
             * @returns Array<egret3d.Mesh>
             */
            get: function () {
                return this._meshList;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language zh_CN
         */
        SceneLoader.prototype.onLoad = function () {
            var _this = this;
            this._meshList = [];
            var emLoader = new egret3d.URLLoader();
            emLoader.onLoadComplete = function (emLoader) { return _this.onEMFileLoadComplete(_this.url, emLoader); };
            emLoader.load(this.url + "/config.em");
        };
        SceneLoader.prototype.onEMFileLoadComplete = function (sceneURL, emLoader) {
            var obj = this.parsingXML(emLoader.data);
            var nodeList = obj.getElementsByTagName("mesh");
            this._totalNumber = nodeList.length;
            for (var i = 0; i < nodeList.length; i++) {
                var linkURL = sceneURL;
                linkURL += "/" + nodeList[i].attributes.getNamedItem("link").value;
                var rotation = new egret3d.Vector3D();
                rotation.parsing(nodeList[i].attributes.getNamedItem("rotation").value);
                var scaling = new egret3d.Vector3D();
                scaling.parsing(nodeList[i].attributes.getNamedItem("scaling").value);
                var translation = new egret3d.Vector3D();
                translation.parsing(nodeList[i].attributes.getNamedItem("translation").value);
                this.loadChild(linkURL, rotation, scaling, translation, sceneURL + "/");
            }
        };
        SceneLoader.prototype.loadChild = function (linkURL, rotation, scaling, translation, url) {
            var _this = this;
            var linkLoader = new egret3d.URLLoader();
            linkLoader.onLoadComplete = function (linkLoader) { return _this.onLoadComplete(linkLoader, rotation, scaling, translation, url); };
            linkLoader.load(linkURL);
        };
        SceneLoader.prototype.onLoadComplete = function (linkLoader, rotation, scaling, translation, url) {
            var geomtry = linkLoader.data;
            var material = new egret3d.TextureMaterial();
            var asynLoadingMaterial = new egret3d.AsyncLoadingTexturematerial(material);
            asynLoadingMaterial.loadTexture(geomtry.textureFile.length > 0 ? (url + geomtry.textureFile) : null, geomtry.textureBump.length > 0 ? (url + geomtry.textureBump) : null, geomtry.textureSpecular.length > 0 ? (url + geomtry.textureSpecular) : null);
            var mesh = new egret3d.Mesh(linkLoader.data, material);
            mesh.scaleX = scaling.x;
            mesh.scaleY = scaling.y;
            mesh.scaleZ = scaling.z;
            mesh.rotationX = rotation.x;
            mesh.rotationY = rotation.y;
            mesh.rotationZ = rotation.z;
            mesh.x = translation.x;
            mesh.y = translation.y;
            mesh.z = translation.z;
            this._meshList.push(mesh);
            if (this._meshList.length >= this._totalNumber) {
                this.dispatchEvent(new egret3d.Event3D(egret3d.Event3D.EVENT_LOAD_COMPLETE, this));
            }
        };
        SceneLoader.prototype.parsingXML = function (xmlString) {
            var xmlDoc = null;
            if (!window["DOMParser"] && window["ActiveXObject"]) {
                var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];
                for (var i = 0; i < xmlDomVersions.length; i++) {
                    try {
                        xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                        xmlDoc.async = false;
                        xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                        break;
                    }
                    catch (e) {
                    }
                }
            }
            else if (window["DOMParser"] && document.implementation && document.implementation.createDocument) {
                try {
                    var domParser = new DOMParser();
                    xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
                }
                catch (e) {
                }
            }
            else {
                return null;
            }
            return xmlDoc;
        };
        return SceneLoader;
    })(egret3d.BaseLoader);
    egret3d.SceneLoader = SceneLoader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.URLLoader
     * @classdesc
     * URLLoader类
     */
    var URLLoader = (function () {
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * @param url 加载数据的地址.如果参数不为空的话.将直接开始加载
         * @param dataformat 以什么方式进行加载.如果为空的话.将通过目标文件的后缀名判断,
         * 如果为空且文件后缀不为内置支持的集中文件类型的话.将以文本格式进行加载解析
        */
        function URLLoader(url, dataformat) {
            if (url === void 0) { url = null; }
            if (dataformat === void 0) { dataformat = null; }
            /**
          * @language en_US
          */
            /**
            * @language zh_CN
            * 加载的地址
            */
            this._url = "";
            /**
          * @language en_US
          */
            /**
            * @language zh_CN
            * 加载的数据.
            */
            this._data = null;
            /**
            * @language en_US
            */
            /**
            * @language zh_CN
            * 控制以哪种方式接收加载的数据.
             * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
             * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
            */
            this._dataformat = null;
            /**
            * @language en_US
            */
            /**
            * @language zh_CN
            * 加载完成的回调函数.
             * 回调函数参数为该UrlLoader实例
            */
            this.onLoadComplete = null;
            /**
            * @language en_US
            */
            /**
            * @language zh_CN
            * 加载失败的回调函数
            */
            this.onLoadError = null;
            /**
            * @language en_US
            */
            /**
            * @language zh_CN
             * 加载过程调用的函数
            */
            this.onLoadProgress = null;
            if (url) {
                if (dataformat) {
                    this.dataformat = dataformat;
                }
                this.load(url);
            }
        }
        /**
       * @language en_US
       */
        /**
        * @language zh_CN
        * 加载目标地址的数据
        * @param url 数据地址
        */
        URLLoader.prototype.load = function (url) {
            var _this = this;
            this._data = null;
            this._url = url;
            if (null == this._dataformat) {
                this._dataformat = URLLoader.DATAFORMAT_TEXT;
                if (this._url.length >= 4)
                    switch (this._url.substr(this._url.length - 4, 4).toLowerCase()) {
                        case ".dds":
                            this._dataformat = URLLoader.DATAFORMAT_DDS;
                            break;
                        case ".tga":
                            this._dataformat = URLLoader.DATAFORMAT_TGA;
                            break;
                        case ".bmp":
                            this._dataformat = URLLoader.DATAFORMAT_BITMAP;
                            break;
                        case ".png":
                            this._dataformat = URLLoader.DATAFORMAT_BITMAP;
                            break;
                        case ".jpg":
                            this._dataformat = URLLoader.DATAFORMAT_BITMAP;
                            break;
                        case "glsl":
                            this._dataformat = URLLoader.DATAFORMAT_TEXT;
                            break;
                        case ".pvr":
                            this._dataformat = URLLoader.DATAFORMAT_PVR;
                            break;
                        case ".esm":
                            this._dataformat = URLLoader.DATAFORMAT_ESM;
                            break;
                        case ".eam":
                            this._dataformat = URLLoader.DATAFORMAT_EAM;
                            break;
                        case ".eca":
                            this._dataformat = URLLoader.DATAFORMAT_ECA;
                            break;
                    }
            }
            if (this._xhr == null) {
                this._xhr = this.getXHR();
            }
            if (this._xhr == null) {
                alert("Your browser does not support XMLHTTP.");
                return;
            }
            if (this._xhr.readyState > 0) {
                this._xhr.abort();
            }
            this._xhr.open("GET", this._url, true);
            this._xhr.addEventListener("progress", function (e) { return _this.onProgress(e); }, false);
            this._xhr.addEventListener("readystatechange", function (e) { return _this.onReadyStateChange(e); }, false);
            this._xhr.addEventListener("error", function (e) { return _this.onError(e); }, false);
            if (this.dataformat == URLLoader.DATAFORMAT_BITMAP) {
                this._xhr.responseType = "blob";
            }
            else if (this.dataformat != URLLoader.DATAFORMAT_TEXT) {
                this._xhr.responseType = "arraybuffer";
            }
            this._xhr.send();
        };
        Object.defineProperty(URLLoader.prototype, "dataformat", {
            /**
             * @language zh_CN
             * @returns string
             */
            get: function () {
                return this._dataformat;
            },
            /**
             * @language zh_CN
             * @param value
             */
            set: function (value) {
                this._dataformat = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "data", {
            /**
             * @language zh_CN
             * @returns any
             */
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "url", {
            /**
             * @language zh_CN
             * @returns string
             */
            get: function () {
                return this._url;
            },
            enumerable: true,
            configurable: true
        });
        URLLoader.prototype.onReadyStateChange = function (event) {
            if (this._xhr.readyState == 4) {
                if (this._xhr.status >= 400 || this._xhr.status == 0) {
                    console.log(this._url, "load fail");
                }
                else {
                    this.loadComplete();
                }
            }
        };
        URLLoader.prototype.loadComplete = function () {
            switch (this.dataformat) {
                case URLLoader.DATAFORMAT_BINARY:
                    this._data = new egret3d.ByteArray(this._xhr.response);
                    break;
                case URLLoader.DATAFORMAT_SOUND:
                    this._data = this._xhr.responseBody;
                    break;
                case URLLoader.DATAFORMAT_TEXT:
                    this._data = this._xhr.responseText;
                    break;
                case URLLoader.DATAFORMAT_BITMAP:
                    var img = document.createElement("img");
                    img.src = window["URL"].createObjectURL(this._xhr.response);
                    var that = this;
                    img.onload = function () {
                        that._data = new egret3d.ImageTexture(img);
                        if (that.onLoadComplete) {
                            that.onLoadComplete(that);
                        }
                    };
                    return;
                case URLLoader.DATAFORMAT_DDS:
                    this._data = egret3d.DDSParser.parse(this._xhr.response);
                    break;
                case URLLoader.DATAFORMAT_TGA:
                    this._data = egret3d.TGAParser.parse(this._xhr.response);
                    break;
                case URLLoader.DATAFORMAT_ESM:
                    var geomtry = egret3d.ESMParser.parse(this._xhr.response);
                    this._data = geomtry;
                    break;
                case URLLoader.DATAFORMAT_EAM:
                    var skeletonAnimationClip = egret3d.EAMParser.parse(this._xhr.response);
                    this._data = skeletonAnimationClip;
                    break;
                case URLLoader.DATAFORMAT_ECA:
                    var cameraAnimationController = egret3d.ECAParser.parse(this._xhr.response);
                    this._data = cameraAnimationController;
                    break;
                case URLLoader.DATAFORMAT_PVR:
                    var pvr = egret3d.PVRParser.parse(this._xhr.response);
                    this._data = pvr;
                    break;
                default:
                    this._data = this._xhr.responseText;
            }
            if (this.onLoadComplete) {
                this.onLoadComplete(this);
            }
        };
        URLLoader.prototype.onProgress = function (event) {
            //console.log("progress event```");
        };
        URLLoader.prototype.onError = function (event) {
            if (this.onLoadError) {
                this.onLoadError();
            }
            egret3d.Debug.instance.trace("loaderror, url: ", this._url);
            console.log("load error", event);
        };
        URLLoader.prototype.getXHR = function () {
            var xhr = null;
            if (window["XMLHttpRequest"]) {
                xhr = new window["XMLHttpRequest"]();
            }
            else {
                xhr = new ActiveXObject("MSXML2.XMLHTTP");
            }
            return xhr;
        };
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 以二进制方式接收加载的数据
        */
        URLLoader.DATAFORMAT_BINARY = "binary";
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 以文本的方式接收加载的数据
         * 默认方式
        */
        URLLoader.DATAFORMAT_TEXT = "text";
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
         * 以音频的方式接收加载的数据
        */
        URLLoader.DATAFORMAT_SOUND = "sound";
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以图像的方式接收加载的数据
         * 支持jpg.png.等格式
        */
        URLLoader.DATAFORMAT_BITMAP = "bitmap";
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以DDS的方式接收加载的数据
        */
        URLLoader.DATAFORMAT_DDS = "dds";
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以TGA的方式接收加载的数据
        */
        URLLoader.DATAFORMAT_TGA = "tga";
        /**
          * @language en_US
          */
        /**
        * @language zh_CN
        * 以ESM格式接收加载的数据
         * Egret3D独有的格式 模型+蒙皮
        */
        URLLoader.DATAFORMAT_ESM = "esm";
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以EAM格式接收加载的数据
         * Egret3D独有的格式 动作文件
        */
        URLLoader.DATAFORMAT_EAM = "eam";
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以ECA格式接收加载的数据
         * Egret3D独有的格式 相机动画文件
        */
        URLLoader.DATAFORMAT_ECA = "eca";
        /**
      * @language en_US

      */
        /**
        * @language zh_CN
        * 以pvr格式接收加载的数据
        */
        URLLoader.DATAFORMAT_PVR = "pvr";
        return URLLoader;
    })();
    egret3d.URLLoader = URLLoader;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.AsyncLoadingTexturematerial
     * @classdesc
     * AsyncLoadingTexturematerial类 用于纹理的加载
     */
    var AsyncLoadingTexturematerial = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param mat {egret3d.TextureMaterial}
        */
        function AsyncLoadingTexturematerial(mat) {
            this._mat = mat;
        }
        /**
         * 加载纹理
         * @param texture
         * @param bump
         * @param spec
         */
        AsyncLoadingTexturematerial.prototype.loadTexture = function (texture, bump, spec) {
            var _this = this;
            if (bump === void 0) { bump = null; }
            if (spec === void 0) { spec = null; }
            if (texture) {
                var textureUrlLoader = new egret3d.URLLoader();
                textureUrlLoader.onLoadComplete = function (urlLoader) { return _this.__textureComplete(urlLoader); };
                //textureUrlLoader.dataformat = BlackSwan.URLLoader.DATAFORMAT_DDS;
                textureUrlLoader.load(texture);
            }
            if (bump) {
                var bumpUrlLoader = new egret3d.URLLoader();
                bumpUrlLoader.onLoadComplete = function (urlLoader) { return _this.__bumpComplete(urlLoader); };
                //bumpUrlLoader.dataformat = BlackSwan.URLLoader.DATAFORMAT_DDS;
                bumpUrlLoader.load(bump);
            }
            if (spec) {
                var specUrlLoader = new egret3d.URLLoader();
                specUrlLoader.onLoadComplete = function (urlLoader) { return _this.__specComplete(urlLoader); };
                //bumpUrlLoader.dataformat = BlackSwan.URLLoader.DATAFORMAT_DDS;
                specUrlLoader.load(spec);
            }
        };
        AsyncLoadingTexturematerial.prototype.__specComplete = function (e) {
            e.data.upload(egret3d.Egret3DDrive.context3D);
            this._mat.specularTexture = e.data;
        };
        AsyncLoadingTexturematerial.prototype.__textureComplete = function (e) {
            e.data.upload(egret3d.Egret3DDrive.context3D);
            this._mat.diffuseTexture = e.data;
        };
        AsyncLoadingTexturematerial.prototype.__bumpComplete = function (e) {
            e.data.upload(egret3d.Egret3DDrive.context3D);
            this._mat.normalTexture = e.data;
        };
        return AsyncLoadingTexturematerial;
    })();
    egret3d.AsyncLoadingTexturematerial = AsyncLoadingTexturematerial;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    //dds / st3c compressed texture formats
    (function (DDSFormat) {
        DDSFormat[DDSFormat["RGB_S3TC_DXT1_FORMAT"] = 2001] = "RGB_S3TC_DXT1_FORMAT";
        DDSFormat[DDSFormat["RGBA_S3TC_DXT1_FORMAT"] = 2002] = "RGBA_S3TC_DXT1_FORMAT";
        DDSFormat[DDSFormat["RGBA_S3TC_DXT3_FORMAT"] = 2003] = "RGBA_S3TC_DXT3_FORMAT";
        DDSFormat[DDSFormat["RGBA_S3TC_DXT5_FORMAT"] = 2003] = "RGBA_S3TC_DXT5_FORMAT";
    })(egret3d.DDSFormat || (egret3d.DDSFormat = {}));
    var DDSFormat = egret3d.DDSFormat;
    ;
    /**
     * @language zh_CN
     * @class egret3d.DDSParser
     * @classdesc
     * 用 DDSParser 类 解析.dds 文件
     */
    var DDSParser = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function DDSParser() {
        }
        /**
         * @language zh_CN
         * @param buffer 二进制
         * @param loadMipmaps 是否加载mipmaps
         * @returns TextureBase
         */
        DDSParser.parse = function (buffer, loadMipmaps) {
            if (loadMipmaps === void 0) { loadMipmaps = true; }
            var dds = new DDS();
            var headerLengthInt = 31; // The header length in 32 bit ints
            var off_magic = 0;
            var DDS_MAGIC = 0x20534444;
            var DDSD_CAPS = 0x1, DDSD_HEIGHT = 0x2, DDSD_WIDTH = 0x4, DDSD_PITCH = 0x8, DDSD_PIXELFORMAT = 0x1000, DDSD_MIPMAPCOUNT = 0x20000, DDSD_LINEARSIZE = 0x80000, DDSD_DEPTH = 0x800000;
            var DDSCAPS_COMPLEX = 0x8, DDSCAPS_MIPMAP = 0x400000, DDSCAPS_TEXTURE = 0x1000;
            var DDSCAPS2_CUBEMAP = 0x200, DDSCAPS2_CUBEMAP_POSITIVEX = 0x400, DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800, DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000, DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000, DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000, DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000, DDSCAPS2_VOLUME = 0x200000;
            var DDPF_ALPHAPIXELS = 0x1, DDPF_ALPHA = 0x2, DDPF_FOURCC = 0x4, DDPF_RGB = 0x40, DDPF_YUV = 0x200, DDPF_LUMINANCE = 0x20000;
            var FOURCC_DXT1 = DDSParser.fourCCToInt32("DXT1");
            var FOURCC_DXT3 = DDSParser.fourCCToInt32("DXT3");
            var FOURCC_DXT5 = DDSParser.fourCCToInt32("DXT5");
            //Pixel formats
            var RGBA_FORMAT = 1021;
            var off_magic = 0;
            var off_size = 1;
            var off_flags = 2;
            var off_height = 3;
            var off_width = 4;
            var off_mipmapCount = 7;
            var off_pfFlags = 20;
            var off_pfFourCC = 21;
            var off_RGBBitCount = 22;
            var off_RBitMask = 23;
            var off_GBitMask = 24;
            var off_BBitMask = 25;
            var off_ABitMask = 26;
            var off_caps = 27;
            var off_caps2 = 28;
            var off_caps3 = 29;
            var off_caps4 = 30;
            var header = new Int32Array(buffer, 0, headerLengthInt);
            if (header[off_magic] !== DDS_MAGIC) {
                console.error('DDSParser.parse: Invalid magic number in DDS header.');
                return null;
            }
            if (!(header[off_pfFlags] & DDPF_FOURCC)) {
                console.error('DDSParser.parse: Unsupported format, must contain a FourCC code.');
                return null;
            }
            var blockBytes;
            var fourCC = header[off_pfFourCC];
            var isRGBAUncompressed = false;
            switch (fourCC) {
                case FOURCC_DXT1:
                    blockBytes = 8;
                    dds.format = DDSFormat.RGB_S3TC_DXT1_FORMAT;
                    break;
                case FOURCC_DXT3:
                    blockBytes = 16;
                    dds.format = DDSFormat.RGBA_S3TC_DXT3_FORMAT;
                    break;
                case FOURCC_DXT5:
                    blockBytes = 16;
                    dds.format = DDSFormat.RGBA_S3TC_DXT5_FORMAT;
                    break;
                default:
                    if (header[off_RGBBitCount] == 32
                        && header[off_RBitMask] & 0xff0000
                        && header[off_GBitMask] & 0xff00
                        && header[off_BBitMask] & 0xff
                        && header[off_ABitMask] & 0xff000000) {
                        isRGBAUncompressed = true;
                        blockBytes = 64;
                        dds.format = RGBA_FORMAT;
                    }
                    else {
                        console.error('DDSParser.parse: Unsupported FourCC code ', DDSParser.int32ToFourCC(fourCC));
                        return null;
                    }
            }
            dds.mipmapCount = 1;
            if ((header[off_flags] & DDSD_MIPMAPCOUNT) && loadMipmaps !== false) {
                dds.mipmapCount = Math.max(1, header[off_mipmapCount]);
            }
            dds.isCubemap = header[off_caps2] & DDSCAPS2_CUBEMAP ? true : false;
            dds.width = header[off_width];
            dds.height = header[off_height];
            var dataOffset = header[off_size] + 4;
            // Extract mipmaps buffers
            var width = dds.width;
            var height = dds.height;
            var faces = dds.isCubemap ? 6 : 1;
            //是否软解DXT;
            var useSoftwareSolution = false;
            if (dds.format == DDSFormat.RGB_S3TC_DXT1_FORMAT && egret3d.Egret3DDrive.ColorFormat_DXT1_RGB == 0)
                useSoftwareSolution = true;
            else if (dds.format == DDSFormat.RGBA_S3TC_DXT3_FORMAT && egret3d.Egret3DDrive.ColorFormat_DXT3_RGBA == 0)
                useSoftwareSolution = true;
            else if (dds.format == DDSFormat.RGBA_S3TC_DXT5_FORMAT && egret3d.Egret3DDrive.ColorFormat_DXT5_RGBA == 0)
                useSoftwareSolution = true;
            for (var face = 0; face < faces; face++) {
                for (var i = 0; i < dds.mipmapCount; i++) {
                    var byteArray;
                    if (isRGBAUncompressed) {
                        byteArray = DDSParser.loadARGBMip(buffer, dataOffset, width, height);
                        var dataLength = byteArray.length;
                    }
                    else {
                        var dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes;
                        byteArray = new Uint8Array(buffer, dataOffset, dataLength);
                        if (useSoftwareSolution) {
                            byteArray = DDSParser.softSolutionDXT(width, height, dds.format, byteArray);
                        }
                    }
                    var mipmap = new egret3d.MipmapData(byteArray, width, height);
                    dds.mipmaps.push(mipmap);
                    dataOffset += dataLength;
                    width = Math.max(width * 0.5, 1);
                    height = Math.max(height * 0.5, 1);
                }
                width = dds.width;
                height = dds.height;
            }
            var texture = new egret3d.TextureBase();
            if (useSoftwareSolution) {
                texture.internalFormat = egret3d.InternalFormat.PixelArray;
                texture.colorFormat = egret3d.Egret3DDrive.ColorFormat_RGBA8888;
            }
            else {
                texture.internalFormat = egret3d.InternalFormat.CompressData;
                if (FOURCC_DXT1 == fourCC)
                    texture.colorFormat = egret3d.Egret3DDrive.ColorFormat_DXT1_RGB;
                else if (FOURCC_DXT3 == fourCC)
                    texture.colorFormat = egret3d.Egret3DDrive.ColorFormat_DXT3_RGBA;
                else if (FOURCC_DXT5 == fourCC)
                    texture.colorFormat = egret3d.Egret3DDrive.ColorFormat_DXT5_RGBA;
            }
            texture.mimapData = dds.mipmaps;
            return texture;
        };
        DDSParser.loadARGBMip = function (buffer, dataOffset, width, height) {
            var dataLength = width * height * 4;
            var srcBuffer = new Uint8Array(buffer, dataOffset, dataLength);
            var byteArray = new Uint8Array(dataLength);
            var dst = 0;
            var src = 0;
            for (var y = 0; y < height; y++) {
                for (var x = 0; x < width; x++) {
                    var b = srcBuffer[src];
                    src++;
                    var g = srcBuffer[src];
                    src++;
                    var r = srcBuffer[src];
                    src++;
                    var a = srcBuffer[src];
                    src++;
                    byteArray[dst] = r;
                    dst++; //r
                    byteArray[dst] = g;
                    dst++; //g
                    byteArray[dst] = b;
                    dst++; //b
                    byteArray[dst] = a;
                    dst++; //a
                }
            }
            return byteArray;
        };
        DDSParser.fourCCToInt32 = function (value) {
            return value.charCodeAt(0) + (value.charCodeAt(1) << 8) + (value.charCodeAt(2) << 16) + (value.charCodeAt(3) << 24);
        };
        DDSParser.int32ToFourCC = function (value) {
            return String.fromCharCode(value & 0xff, (value >> 8) & 0xff, (value >> 16) & 0xff, (value >> 24) & 0xff69);
        };
        //软解DXT数据块到像素组;
        DDSParser.softSolutionDXT = function (width, height, format, byteArray) {
            var nCount;
            var colorArray = new Uint8Array(width * height * 4);
            //色彩表;
            var colorTab = [new egret3d.Color(), new egret3d.Color(), new egret3d.Color(), new egret3d.Color()];
            //索引表;
            var indexTab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            switch (format) {
                case DDSFormat.RGB_S3TC_DXT1_FORMAT:
                case DDSFormat.RGBA_S3TC_DXT1_FORMAT:
                    {
                        nCount = byteArray.length / 8;
                        for (var blockIndex = 0; blockIndex < nCount; blockIndex++) {
                            var _16bit_0 = byteArray[blockIndex * 8 + 0] | (byteArray[blockIndex * 8 + 1] << 8);
                            var _16bit_1 = byteArray[blockIndex * 8 + 2] | (byteArray[blockIndex * 8 + 3] << 8);
                            //极端颜色1;
                            colorTab[0].r = (_16bit_0 >> 11) & 0x1F;
                            colorTab[0].g = (_16bit_0 >> 5) & 0x3F;
                            colorTab[0].b = _16bit_0 & 0x1F;
                            colorTab[0].a = 0xFF;
                            //极端颜色2;
                            colorTab[1].r = (_16bit_1 >> 11) & 0x1F;
                            colorTab[1].g = (_16bit_1 >> 5) & 0x3F;
                            colorTab[1].b = _16bit_1 & 0x1F;
                            colorTab[1].a = 0xFF;
                            if (_16bit_0 > _16bit_1) {
                                //线性插值计算出剩下的两个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.33);
                                colorTab[3].lerp(colorTab[0], colorTab[1], 0.66);
                            }
                            else {
                                //线性插值计算出剩下的一个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.5);
                            }
                            //取出16个2位索引;
                            for (var i = 0; i < 4; i++) {
                                indexTab[(i * 4) + 0] = byteArray[blockIndex * 8 + 4 + i] & 0x03;
                                indexTab[(i * 4) + 1] = (byteArray[blockIndex * 8 + 4 + i] >> 2) & 0x03;
                                indexTab[(i * 4) + 2] = (byteArray[blockIndex * 8 + 4 + i] >> 4) & 0x03;
                                indexTab[(i * 4) + 3] = (byteArray[blockIndex * 8 + 4 + i] >> 6) & 0x03;
                            }
                            for (var ci = 0; ci < colorTab.length; ci++) {
                                colorTab[ci].r = colorTab[ci].r * 8;
                                colorTab[ci].g = colorTab[ci].g * 4;
                                colorTab[ci].b = colorTab[ci].b * 8;
                            }
                            //填充像素数组;
                            var globalX = (blockIndex % (width / 4)) * 4;
                            var globalY = Math.floor(blockIndex / (width / 4)) * 4;
                            if (globalY + 0 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[0]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[0]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[0]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[0]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[1]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[1]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[1]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[1]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[2]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[2]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[2]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[2]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[3]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[3]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[3]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[3]].a;
                                }
                            }
                            if (globalY + 1 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[4]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[4]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[4]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[4]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[5]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[5]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[5]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[5]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[6]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[6]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[6]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[6]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[7]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[7]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[7]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[7]].a;
                                }
                            }
                            if (globalY + 2 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[8]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[8]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[8]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[8]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[9]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[9]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[9]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[9]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[10]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[10]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[10]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[10]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[11]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[11]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[11]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[11]].a;
                                }
                            }
                            if (globalY + 3 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[12]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[12]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[12]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 3] = colorTab[indexTab[12]].a;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[13]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[13]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[13]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 3] = colorTab[indexTab[13]].a;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[14]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[14]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[14]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 3] = colorTab[indexTab[14]].a;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[15]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[15]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[15]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 3] = colorTab[indexTab[15]].a;
                                }
                            }
                        }
                    }
                    break;
                case DDSFormat.RGBA_S3TC_DXT3_FORMAT:
                    {
                        nCount = byteArray.length / 16;
                        for (var blockIndex = 0; blockIndex < nCount; blockIndex++) {
                            var _16bit_0 = byteArray[blockIndex * 16 + 8] | (byteArray[blockIndex * 16 + 9] << 8);
                            var _16bit_1 = byteArray[blockIndex * 16 + 10] | (byteArray[blockIndex * 16 + 11] << 8);
                            //极端颜色1;
                            colorTab[0].r = (_16bit_0 >> 11) & 0x1F;
                            colorTab[0].g = (_16bit_0 >> 5) & 0x3F;
                            colorTab[0].b = _16bit_0 & 0x1F;
                            colorTab[0].a = 0xFF;
                            //极端颜色2;
                            colorTab[1].r = (_16bit_1 >> 11) & 0x1F;
                            colorTab[1].g = (_16bit_1 >> 5) & 0x3F;
                            colorTab[1].b = _16bit_1 & 0x1F;
                            colorTab[1].a = 0xFF;
                            if (_16bit_0 > _16bit_1) {
                                //线性插值计算出剩下的两个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.33);
                                colorTab[3].lerp(colorTab[0], colorTab[1], 0.66);
                            }
                            else {
                                //线性插值计算出剩下的一个颜色;
                                colorTab[2].lerp(colorTab[0], colorTab[1], 0.5);
                                colorTab[3].a = 0;
                            }
                            //取出16个2位索引;
                            for (var i = 0; i < 4; i++) {
                                indexTab[(i * 4) + 0] = byteArray[blockIndex * 16 + 12 + i] & 0x03;
                                indexTab[(i * 4) + 1] = (byteArray[blockIndex * 16 + 12 + i] >> 2) & 0x03;
                                indexTab[(i * 4) + 2] = (byteArray[blockIndex * 16 + 12 + i] >> 4) & 0x03;
                                indexTab[(i * 4) + 3] = (byteArray[blockIndex * 16 + 12 + i] >> 6) & 0x03;
                            }
                            for (var ci = 0; ci < colorTab.length; ci++) {
                                colorTab[ci].r = colorTab[ci].r * 8;
                                colorTab[ci].g = colorTab[ci].g * 4;
                                colorTab[ci].b = colorTab[ci].b * 8;
                            }
                            //填充像素数组;
                            var globalX = (blockIndex % (width / 4)) * 4;
                            var globalY = Math.floor(blockIndex / (width / 4)) * 4;
                            if (globalY + 0 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[0]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[0]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[0]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 0] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[1]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[1]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[1]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 0] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[2]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[2]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[2]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 1] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[3]].r;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[3]].g;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[3]].b;
                                    colorArray[(globalY + 0) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 1] >> 4) & 0x0F) * 17;
                                }
                            }
                            if (globalY + 1 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[4]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[4]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[4]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 2] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[5]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[5]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[5]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 2] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[6]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[6]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[6]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 3] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[7]].r;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[7]].g;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[7]].b;
                                    colorArray[(globalY + 1) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 3] >> 4) & 0x0F) * 17;
                                }
                            }
                            if (globalY + 2 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[8]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[8]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[8]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 4] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[9]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[9]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[9]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 4] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[10]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[10]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[10]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 5] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[11]].r;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[11]].g;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[11]].b;
                                    colorArray[(globalY + 2) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 5] >> 4) & 0x0F) * 17;
                                }
                            }
                            if (globalY + 3 < height) {
                                if (globalX + 0 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 0] = colorTab[indexTab[12]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 1] = colorTab[indexTab[12]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 2] = colorTab[indexTab[12]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 0) * 4) + 3] = (byteArray[blockIndex * 16 + 6] & 0x0F) * 17;
                                }
                                if (globalX + 1 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 0] = colorTab[indexTab[13]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 1] = colorTab[indexTab[13]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 2] = colorTab[indexTab[13]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 1) * 4) + 3] = ((byteArray[blockIndex * 16 + 6] >> 4) & 0x0F) * 17;
                                }
                                if (globalX + 2 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 0] = colorTab[indexTab[14]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 1] = colorTab[indexTab[14]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 2] = colorTab[indexTab[14]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 2) * 4) + 3] = (byteArray[blockIndex * 16 + 7] & 0x0F) * 17;
                                }
                                if (globalX + 3 < width) {
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 0] = colorTab[indexTab[15]].r;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 1] = colorTab[indexTab[15]].g;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 2] = colorTab[indexTab[15]].b;
                                    colorArray[(globalY + 3) * (width * 4) + ((globalX + 3) * 4) + 3] = ((byteArray[blockIndex * 16 + 7] >> 4) & 0x0F) * 17;
                                }
                            }
                        }
                    }
                    break;
                case DDSFormat.RGBA_S3TC_DXT5_FORMAT:
                    break;
            }
            return colorArray;
        };
        return DDSParser;
    })();
    egret3d.DDSParser = DDSParser;
    var DDS = (function () {
        function DDS() {
            this.mipmaps = new Array();
            this.width = 0;
            this.height = 0;
            this.format = null;
            this.mipmapCount = 1;
        }
        return DDS;
    })();
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.TGAParser
     * @classdesc
     * 用 TGAParser 类 解析.tga 文件
     */
    var TGAParser = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function TGAParser() {
        }
        /**
         * @language zh_CN
         * @param buffer 二进制流
         * @returns TexureBase
         */
        TGAParser.parse = function (buffer) {
            var TGA_TYPE_NO_DATA = 0, TGA_TYPE_INDEXED = 1, TGA_TYPE_RGB = 2, TGA_TYPE_GREY = 3, TGA_TYPE_RLE_INDEXED = 9, TGA_TYPE_RLE_RGB = 10, TGA_TYPE_RLE_GREY = 11, TGA_ORIGIN_MASK = 0x30, TGA_ORIGIN_SHIFT = 0x04, TGA_ORIGIN_BL = 0x00, TGA_ORIGIN_BR = 0x01, TGA_ORIGIN_UL = 0x02, TGA_ORIGIN_UR = 0x03;
            if (buffer.byteLength < 19) {
                console.error('TGAParser.parse: Not enough data to contain header.');
            }
            var content = new Uint8Array(buffer), offset = 0, header = {
                id_length: content[offset++],
                colormap_type: content[offset++],
                image_type: content[offset++],
                colormap_index: content[offset++] | content[offset++] << 8,
                colormap_length: content[offset++] | content[offset++] << 8,
                colormap_size: content[offset++],
                origin: [
                    content[offset++] | content[offset++] << 8,
                    content[offset++] | content[offset++] << 8
                ],
                width: content[offset++] | content[offset++] << 8,
                height: content[offset++] | content[offset++] << 8,
                pixel_size: content[offset++],
                flags: content[offset++]
            };
            function tgaCheckHeader(header) {
                switch (header.image_type) {
                    // Check indexed type
                    case TGA_TYPE_INDEXED:
                    case TGA_TYPE_RLE_INDEXED:
                        if (header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1) {
                            console.error('TGAParser.parse.tgaCheckHeader: Invalid type colormap data for indexed type');
                        }
                        break;
                    // Check colormap type
                    case TGA_TYPE_RGB:
                    case TGA_TYPE_GREY:
                    case TGA_TYPE_RLE_RGB:
                    case TGA_TYPE_RLE_GREY:
                        if (header.colormap_type) {
                            console.error('TGAParser.parse.tgaCheckHeader: Invalid type colormap data for colormap type');
                        }
                        break;
                    // What the need of a file without data ?
                    case TGA_TYPE_NO_DATA:
                        console.error('TGAParser.parse.tgaCheckHeader: No data');
                        break;
                    // Invalid type ?
                    default:
                        console.error('TGAParser.parse.tgaCheckHeader: Invalid type " ' + header.image_type + '"');
                }
                // Check image width and height
                if (header.width <= 0 || header.height <= 0) {
                    console.error('TGAParser.parse.tgaCheckHeader: Invalid image size');
                }
                // Check image pixel size
                if (header.pixel_size !== 8 &&
                    header.pixel_size !== 16 &&
                    header.pixel_size !== 24 &&
                    header.pixel_size !== 32) {
                    console.error('TGAParser.parse.tgaCheckHeader: Invalid pixel size "' + header.pixel_size + '"');
                }
            }
            // Check tga if it is valid format
            tgaCheckHeader(header);
            if (header.id_length + offset > buffer.byteLength) {
                console.error('TGAParser.parse: No data');
            }
            // Skip the needn't data
            offset += header.id_length;
            // Get targa information about RLE compression and palette
            var use_rle = false, use_pal = false, use_grey = false;
            switch (header.image_type) {
                case TGA_TYPE_RLE_INDEXED:
                    use_rle = true;
                    use_pal = true;
                    break;
                case TGA_TYPE_INDEXED:
                    use_pal = true;
                    break;
                case TGA_TYPE_RLE_RGB:
                    use_rle = true;
                    break;
                case TGA_TYPE_RGB:
                    break;
                case TGA_TYPE_RLE_GREY:
                    use_rle = true;
                    use_grey = true;
                    break;
                case TGA_TYPE_GREY:
                    use_grey = true;
                    break;
            }
            // Parse tga image buffer
            function tgaParse(use_rle, use_pal, header, offset, data) {
                var pixel_data, pixel_size, pixel_total, palettes;
                pixel_size = header.pixel_size >> 3;
                pixel_total = header.width * header.height * pixel_size;
                // Read palettes
                if (use_pal) {
                    palettes = data.subarray(offset, offset += header.colormap_length * (header.colormap_size >> 3));
                }
                // Read RLE
                if (use_rle) {
                    pixel_data = new Uint8Array(pixel_total);
                    var c, count, i;
                    var shift = 0;
                    var pixels = new Uint8Array(pixel_size);
                    while (shift < pixel_total) {
                        c = data[offset++];
                        count = (c & 0x7f) + 1;
                        // RLE pixels.
                        if (c & 0x80) {
                            // Bind pixel tmp array
                            for (i = 0; i < pixel_size; ++i) {
                                pixels[i] = data[offset++];
                            }
                            // Copy pixel array
                            for (i = 0; i < count; ++i) {
                                pixel_data.set(pixels, shift + i * pixel_size);
                            }
                            shift += pixel_size * count;
                        }
                        else {
                            // Raw pixels.
                            count *= pixel_size;
                            for (i = 0; i < count; ++i) {
                                pixel_data[shift + i] = data[offset++];
                            }
                            shift += count;
                        }
                    }
                }
                else {
                    // RAW Pixels
                    pixel_data = data.subarray(offset, offset += (use_pal ? header.width * header.height : pixel_total));
                }
                return {
                    pixel_data: pixel_data,
                    palettes: palettes
                };
            }
            function tgaGetImageData8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes) {
                var colormap = palettes;
                var color, i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i++) {
                        color = image[i];
                        imageData[(x + width * y) * 4 + 3] = 255;
                        imageData[(x + width * y) * 4 + 2] = colormap[(color * 3) + 0];
                        imageData[(x + width * y) * 4 + 1] = colormap[(color * 3) + 1];
                        imageData[(x + width * y) * 4 + 0] = colormap[(color * 3) + 2];
                    }
                }
                return imageData;
            }
            function tgaGetImageData16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var color, i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 2) {
                        color = image[i + 0] + (image[i + 1] << 8); // Inversed ?
                        imageData[(x + width * y) * 4 + 0] = (color & 0x7C00) >> 7;
                        imageData[(x + width * y) * 4 + 1] = (color & 0x03E0) >> 2;
                        imageData[(x + width * y) * 4 + 2] = (color & 0x001F) >> 3;
                        imageData[(x + width * y) * 4 + 3] = (color & 0x8000) ? 0 : 255;
                    }
                }
                return imageData;
            }
            function tgaGetImageData24bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 3) {
                        imageData[(x + width * y) * 4 + 3] = 255;
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 1];
                        imageData[(x + width * y) * 4 + 0] = image[i + 2];
                    }
                }
                return imageData;
            }
            function tgaGetImageData32bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 4) {
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 1];
                        imageData[(x + width * y) * 4 + 0] = image[i + 2];
                        imageData[(x + width * y) * 4 + 3] = image[i + 3];
                    }
                }
                return imageData;
            }
            function tgaGetImageDataGrey8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var color, i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i++) {
                        color = image[i];
                        imageData[(x + width * y) * 4 + 0] = color;
                        imageData[(x + width * y) * 4 + 1] = color;
                        imageData[(x + width * y) * 4 + 2] = color;
                        imageData[(x + width * y) * 4 + 3] = 255;
                    }
                }
                return imageData;
            }
            function tgaGetImageDataGrey16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
                var i = 0, x, y;
                var width = header.width;
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 2) {
                        imageData[(x + width * y) * 4 + 0] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 0];
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 3] = image[i + 1];
                    }
                }
                return imageData;
            }
            function getTgaRGBA(width, height, image, palette) {
                var x_start, y_start, x_step, y_step, x_end, y_end, data = new Uint8Array(width * height * 4);
                switch ((header.flags & TGA_ORIGIN_MASK) >> TGA_ORIGIN_SHIFT) {
                    default:
                    case TGA_ORIGIN_UL:
                        x_start = 0;
                        x_step = 1;
                        x_end = width;
                        y_start = 0;
                        y_step = 1;
                        y_end = height;
                        break;
                    case TGA_ORIGIN_BL:
                        x_start = 0;
                        x_step = 1;
                        x_end = width;
                        y_start = height - 1;
                        y_step = -1;
                        y_end = -1;
                        break;
                    case TGA_ORIGIN_UR:
                        x_start = width - 1;
                        x_step = -1;
                        x_end = -1;
                        y_start = 0;
                        y_step = 1;
                        y_end = height;
                        break;
                    case TGA_ORIGIN_BR:
                        x_start = width - 1;
                        x_step = -1;
                        x_end = -1;
                        y_start = height - 1;
                        y_step = -1;
                        y_end = -1;
                        break;
                }
                if (use_grey) {
                    switch (header.pixel_size) {
                        case 8:
                            tgaGetImageDataGrey8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        case 16:
                            tgaGetImageDataGrey16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        default:
                            console.error('TGAParser.parse.getTgaRGBA: not support this format');
                            break;
                    }
                }
                else {
                    switch (header.pixel_size) {
                        case 8:
                            tgaGetImageData8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette);
                            break;
                        case 16:
                            tgaGetImageData16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        case 24:
                            tgaGetImageData24bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        case 32:
                            tgaGetImageData32bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
                            break;
                        default:
                            console.error('TGAParser.parse.getTgaRGBA: not support this format');
                            break;
                    }
                }
                // Load image data according to specific method
                // var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
                // func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );
                return data;
            }
            var result = tgaParse(use_rle, use_pal, header, offset, content);
            var rgbaData = getTgaRGBA(header.width, header.height, result.pixel_data, result.palettes);
            var texture = new egret3d.TextureBase();
            texture.internalFormat = egret3d.InternalFormat.PixelArray;
            texture.colorFormat = egret3d.Egret3DDrive.ColorFormat_RGBA8888;
            texture.mimapData.push(new egret3d.MipmapData(rgbaData, header.width, header.height));
            return texture;
        };
        return TGAParser;
    })();
    egret3d.TGAParser = TGAParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    // data format describe;
    (function (ESMDataFormat) {
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_STATIC_MODEL"] = 1] = "DATA_FORMAT_STATIC_MODEL";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_SKELETAL_ANIM_MODEL"] = 2] = "DATA_FORMAT_SKELETAL_ANIM_MODEL";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXPORT_MESH"] = 4] = "DATA_FORMAT_EXPORT_MESH";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_VERTEX_POS"] = 8] = "DATA_FORMAT_EXIST_VERTEX_POS";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_VERTEX_NORMAL"] = 16] = "DATA_FORMAT_EXIST_VERTEX_NORMAL";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_VERTEX_TANGENT"] = 32] = "DATA_FORMAT_EXIST_VERTEX_TANGENT";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_VERTEX_COLOR"] = 64] = "DATA_FORMAT_EXIST_VERTEX_COLOR";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_VERTEX_UV1"] = 128] = "DATA_FORMAT_EXIST_VERTEX_UV1";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_VERTEX_UV2"] = 256] = "DATA_FORMAT_EXIST_VERTEX_UV2";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_SKELETAL_DATA"] = 512] = "DATA_FORMAT_EXIST_SKELETAL_DATA";
        ESMDataFormat[ESMDataFormat["DATA_FORMAT_EXIST_WEIGHTS_DATA"] = 1024] = "DATA_FORMAT_EXIST_WEIGHTS_DATA";
    })(egret3d.ESMDataFormat || (egret3d.ESMDataFormat = {}));
    var ESMDataFormat = egret3d.ESMDataFormat;
    /**
     * @language zh_CN
     * @class egret3d.ESMParser
     * @classdesc
     * 用 ESMParser 类 解析.esm 文件
     */
    var ESMParser = (function () {
        function ESMParser() {
        }
        /**
          * @language zh_CN
          * @param datas 加载的二进制流
          * @returns GeometryBase
          */
        ESMParser.parse = function (datas) {
            var bytes = new egret3d.ByteArray(datas);
            var geomtryData = new egret3d.GeometryData();
            var formatDescription = bytes.readUnsignedInt();
            var version = (formatDescription >> 28) & 0x0F;
            var textureDiffuse = bytes.readUTF();
            var textureSpecular = "";
            var textureNormal = "";
            if (version > 0) {
                textureSpecular = bytes.readUTF();
                textureNormal = bytes.readUTF();
            }
            ESMParser.readMeshInfo(bytes, geomtryData, formatDescription, version);
            var skeleton = new egret3d.Skeleton();
            ESMParser.readBoneSkinInfo(bytes, geomtryData, skeleton, version);
            var geomtry;
            if (geomtryData.source_skinData.length > 0) {
                var skinGeomtry = new egret3d.SkinGeometry();
                skinGeomtry.vertexAttLength = geomtryData.vertexAttLength = 17 + 8;
                geomtryData = egret3d.GeometryData.build(geomtryData);
                skinGeomtry.setGeomtryData(geomtryData.indices, geomtryData.vertexDatas, skeleton);
                geomtry = skinGeomtry;
            }
            else {
                geomtryData = egret3d.GeometryData.build(geomtryData);
                var staticGeomtry = new egret3d.SubGeometry();
                staticGeomtry.setGeomtryData(geomtryData.indices, geomtryData.vertexDatas);
                geomtry = staticGeomtry;
            }
            geomtry.buildBoundBox();
            geomtry.textureFile = textureDiffuse;
            geomtry.textureSpecular = textureSpecular;
            geomtry.textureBump = textureNormal;
            return geomtry;
        };
        /**
         * @language zh_CN
         * 读取mesh信息到传入的geomtryData中
         * @param bytes 二进制流
         * @param geomtryData 网格实例
         * @param formatDescription 数据格式
         * @param version 版本
         */
        ESMParser.readMeshInfo = function (bytes, geomtryData, formatDescription, version) {
            if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_POS) {
                ESMParser.readVertexInfo(bytes, geomtryData, version);
            }
            if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_NORMAL) {
                ESMParser.readVertexNormalsInfo(bytes, geomtryData, version);
            }
            if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_COLOR) {
                ESMParser.readVertexColorsInfo(bytes, geomtryData, version);
            }
            if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_UV1) {
                ESMParser.readVertexUVInfo(bytes, geomtryData.source_uvData, version);
            }
            if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_UV2) {
                ESMParser.readVertexUVInfo(bytes, geomtryData.source_uv2Data, version);
            }
            ESMParser.readVertexIndexInfo(bytes, geomtryData, formatDescription, version);
        };
        /**
         * @language zh_CN
         * 读取顶点信息到geomtryData实例中
         * @param bytes 二进制信息
         * @param geomtryData geomtryData实例
         * @param version 版本
         */
        ESMParser.readVertexInfo = function (bytes, geomtryData, version) {
            var vertexCount = bytes.readInt();
            for (var i = 0; i < vertexCount; i++) {
                geomtryData.source_vertexData.push(new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat()));
            }
        };
        /**
         * @language zh_CN
         * 读取顶点法线信息
         * @param bytes
         * @param geomtryData
         * @param version
         */
        ESMParser.readVertexNormalsInfo = function (bytes, geomtryData, version) {
            var vertexNormalCount = bytes.readInt();
            for (var i = 0; i < vertexNormalCount; i++) {
                geomtryData.source_normalData.push(new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat()));
            }
        };
        /**
         * @language zh_CN
         * 读取顶点颜色
         * @param bytes
         * @param geomtryData
         * @param version
         */
        ESMParser.readVertexColorsInfo = function (bytes, geomtryData, version) {
            var vertexColorCount = bytes.readInt();
            for (var i = 0; i < vertexColorCount; i++) {
                geomtryData.source_vertexColorData.push(new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat(), bytes.readFloat()));
            }
        };
        /**
         * @language zh_CN
         * 读取顶点UV
         * @param bytes
         * @param source_uvData
         * @param version
         */
        ESMParser.readVertexUVInfo = function (bytes, source_uvData, version) {
            var uvCount = bytes.readInt();
            for (var i = 0; i < uvCount; i++) {
                source_uvData.push(new egret3d.UV(bytes.readFloat(), bytes.readFloat()));
            }
        };
        ESMParser.readVertexIndexInfo = function (bytes, geomtryData, formatDescription, version) {
            var PosIndex1, PosIndex2, PosIndex3;
            var uv1_1, uv1_2, uv1_3;
            var facesCount = bytes.readInt();
            var uv1_index = 1;
            var uv2_index = 1;
            for (var i = 0; i < facesCount; i++) {
                var faceData = new egret3d.FaceData();
                PosIndex1 = bytes.readUnsignedInt();
                PosIndex2 = bytes.readUnsignedInt();
                PosIndex3 = bytes.readUnsignedInt();
                faceData.vertexIndices.push(PosIndex1 + 1, PosIndex2 + 1, PosIndex3 + 1);
                if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_NORMAL) {
                    faceData.normalIndices.push(bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1);
                }
                if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_COLOR) {
                    faceData.colorIndices.push(bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1);
                }
                if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_UV1) {
                    if (version >= 2) {
                        faceData.uvIndices.push(bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1);
                    }
                    else {
                        faceData.uvIndices.push(uv1_index++, uv1_index++, uv1_index++);
                    }
                }
                if (formatDescription & ESMDataFormat.DATA_FORMAT_EXIST_VERTEX_UV2) {
                    if (version >= 2) {
                        faceData.uv2Indices.push(bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1, bytes.readUnsignedInt() + 1);
                    }
                    else {
                        faceData.uv2Indices.push(uv2_index++, uv2_index++, uv2_index++);
                    }
                }
                faceData.indexIds.push(String(PosIndex1 + 1) + "/" + String(uv1_1 + 1) + "/" + String(PosIndex1 + 1));
                faceData.indexIds.push(String(PosIndex2 + 1) + "/" + String(uv1_2 + 1) + "/" + String(PosIndex2 + 1));
                faceData.indexIds.push(String(PosIndex3 + 1) + "/" + String(uv1_3 + 1) + "/" + String(PosIndex3 + 1));
                geomtryData.source_faceData.push(faceData);
            }
        };
        ESMParser.readBoneSkinInfo = function (bytes, geomtryData, skeleton, version) {
            ESMParser.readBoneInfo(bytes, skeleton, version);
            ESMParser.readSkinInfo(bytes, geomtryData, version);
        };
        ESMParser.readBoneInfo = function (bytes, skeleton, version) {
            var nBoneCount = bytes.readUnsignedByte();
            var orientation = new egret3d.Quaternion();
            var rotation = new egret3d.Vector3D();
            var scaling = new egret3d.Vector3D();
            var translation = new egret3d.Vector3D();
            for (var i = 0; i < nBoneCount; i++) {
                var joint = new egret3d.Joint(null);
                bytes.readInt();
                joint.parentIndex = bytes.readInt();
                joint.name = bytes.readUTF();
                rotation.x = bytes.readFloat() * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES;
                rotation.y = bytes.readFloat() * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES;
                rotation.z = bytes.readFloat() * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES;
                /*orientation.x = bytes.readFloat();
                orientation.y = bytes.readFloat();
                orientation.z = bytes.readFloat();
                orientation.w = bytes.readFloat();*/
                scaling.x = bytes.readFloat();
                scaling.y = bytes.readFloat();
                scaling.z = bytes.readFloat();
                translation.x = bytes.readFloat();
                translation.y = bytes.readFloat();
                translation.z = bytes.readFloat();
                joint.setInverseBindPose(translation, rotation, scaling);
                skeleton.joints.push(joint);
            }
        };
        ESMParser.readSkinInfo = function (bytes, geomtryData, version) {
            var nVertsCount = bytes.readInt();
            var nBoneIndex = 0;
            var nBoneWeight = 0;
            for (var i = 0; i < nVertsCount; i++) {
                var nCount = bytes.readUnsignedByte();
                for (var j = 0; j < nCount; j++) {
                    nBoneIndex = bytes.readUnsignedByte();
                    nBoneWeight = bytes.readFloat();
                    geomtryData.source_skinData.push(nBoneIndex, nBoneWeight);
                }
                for (var j = nCount; j < 4; j++) {
                    nBoneIndex = 0;
                    nBoneWeight = 0;
                    geomtryData.source_skinData.push(nBoneIndex, nBoneWeight);
                }
            }
        };
        return ESMParser;
    })();
    egret3d.ESMParser = ESMParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.EAMParser
     * @classdesc
     * 用 EAMParser 类 解析.eam 文件
     */
    var EAMParser = (function () {
        function EAMParser() {
        }
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns SkeletonAnimationClip
         */
        EAMParser.parse = function (datas) {
            var bytes = new egret3d.ByteArray(datas);
            var boneCount = bytes.readUnsignedByte();
            var animationName = bytes.readUTF();
            var sampling = bytes.readUnsignedByte();
            if (boneCount <= 0)
                return new egret3d.SkeletonAnimationClip(animationName);
            var boneNameArray = new Array();
            var parentBoneNameArray = new Array();
            for (var i = 0; i < boneCount; i++) {
                boneNameArray.push(bytes.readUTF());
                parentBoneNameArray.push(bytes.readUTF());
            }
            var frameCount = bytes.readInt();
            var poseArray = new Array();
            var nCount = bytes.readInt();
            for (var i = 0; i < nCount; i++) {
                var skeletonPose = new egret3d.Skeleton();
                skeletonPose.frameTime = bytes.readInt();
                for (var j = 0; j < boneCount; j++) {
                    var jointPose = new egret3d.Joint(boneNameArray[j]);
                    jointPose.parent = parentBoneNameArray[j];
                    jointPose.setLocalTransform(new egret3d.Quaternion().fromEulerAngles(bytes.readFloat() * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES, bytes.readFloat() * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES, bytes.readFloat() * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES), new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat()), new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat()));
                    skeletonPose.joints.push(jointPose);
                }
                if (i > 0) {
                    var pose = new egret3d.Skeleton();
                    pose.frameTime = skeletonPose.frameTime - 160 / 2;
                    var currentSkeletonPose = poseArray[poseArray.length - 1];
                    for (var j = 0; j < boneCount; j++) {
                        var jointPose = new egret3d.Joint(currentSkeletonPose.joints[j].name);
                        jointPose.parent = currentSkeletonPose.joints[j].parent;
                        jointPose.orientation = new egret3d.Quaternion();
                        jointPose.orientation.lerp(currentSkeletonPose.joints[j].orientation, skeletonPose.joints[j].orientation, 0.5);
                        jointPose.scale = new egret3d.Vector3D();
                        jointPose.scale.lerp(currentSkeletonPose.joints[j].scale, skeletonPose.joints[j].scale, 0.5);
                        jointPose.translation = new egret3d.Vector3D();
                        jointPose.translation.lerp(currentSkeletonPose.joints[j].translation, skeletonPose.joints[j].translation, 0.5);
                        jointPose.setLocalTransform(jointPose.orientation, jointPose.scale, jointPose.translation);
                        pose.joints.push(jointPose);
                    }
                    poseArray.push(pose);
                }
                poseArray.push(skeletonPose);
            }
            var skeletonAnimationClip = new egret3d.SkeletonAnimationClip(animationName);
            skeletonAnimationClip.sampling = sampling;
            skeletonAnimationClip.frameCount = frameCount * 2;
            skeletonAnimationClip.poseArray = poseArray;
            return skeletonAnimationClip;
        };
        return EAMParser;
    })();
    egret3d.EAMParser = EAMParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.ECAParser
     * @classdesc
     * 用 ECAParser 类 解析.eca 文件
     */
    var ECAParser = (function () {
        function ECAParser() {
        }
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns CameraAnimationController
         */
        ECAParser.parse = function (datas) {
            var bytes = new egret3d.ByteArray(datas);
            var cameraAnimationController = new egret3d.CameraAnimationController();
            var nFrame = bytes.readUnsignedInt();
            var cameraAnimationFrame = null;
            var scaling = new egret3d.Vector3D(1, 1, 1, 1);
            while (nFrame--) {
                cameraAnimationFrame = new egret3d.CameraAnimationFrame();
                cameraAnimationFrame.time = bytes.readInt();
                cameraAnimationFrame.fov = bytes.readFloat();
                cameraAnimationFrame.rotation = new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat());
                cameraAnimationFrame.translation = new egret3d.Vector3D(bytes.readFloat(), bytes.readFloat(), bytes.readFloat());
                cameraAnimationFrame.matrix = new egret3d.Matrix4_4();
                cameraAnimationFrame.matrix.recompose([cameraAnimationFrame.translation, cameraAnimationFrame.rotation, scaling]);
                cameraAnimationController.cameraAnimationFrames.push(cameraAnimationFrame);
            }
            return cameraAnimationController;
        };
        return ECAParser;
    })();
    egret3d.ECAParser = ECAParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.PVR
     * @classdesc
     * PVR  object
     */
    var PVR = (function () {
        function PVR() {
        }
        return PVR;
    })();
    egret3d.PVR = PVR;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (PVRFormat) {
        PVRFormat[PVRFormat["RGB_PVRTC_4BPPV1_Format"] = 2100] = "RGB_PVRTC_4BPPV1_Format";
        PVRFormat[PVRFormat["RGB_PVRTC_2BPPV1_Format"] = 2101] = "RGB_PVRTC_2BPPV1_Format";
        PVRFormat[PVRFormat["RGBA_PVRTC_4BPPV1_Format"] = 2102] = "RGBA_PVRTC_4BPPV1_Format";
        PVRFormat[PVRFormat["RGBA_PVRTC_2BPPV1_Format"] = 2103] = "RGBA_PVRTC_2BPPV1_Format";
    })(egret3d.PVRFormat || (egret3d.PVRFormat = {}));
    var PVRFormat = egret3d.PVRFormat;
    ;
    /**
     * @language zh_CN
     * @class egret3d.PVRParser
     * @classdesc
     * �� PVRParser �� ����.pvr �ļ�
     */
    var PVRParser = (function () {
        function PVRParser() {
        }
        /**
         * @language zh_CN
         * @param buffer
         */
        PVRParser.parse = function (buffer) {
            var pvr = new egret3d.PVR;
            var headerLengthInt = 13;
            var header = new Uint32Array(buffer, 0, headerLengthInt);
            var pvrDatas = {
                buffer: buffer,
                header: header
            };
            // PVR v3
            if (header[0] === 0x03525650) {
                pvr = PVRParser._parseV3(pvrDatas);
            }
            else if (header[11] === 0x21525650) {
                pvr = PVRParser._parseV2(pvrDatas);
            }
            else {
                console.log("PVRParser unknow pvr format. PVRParser::parse");
            }
            return pvr;
        };
        PVRParser._parseV2 = function (pvrDatas) {
            var header = pvrDatas.header;
            var headerLength = header[0], height = header[1], width = header[2], numMipmaps = header[3], flags = header[4], dataLength = header[5], bpp = header[6], bitmaskRed = header[7], bitmaskGreen = header[8], bitmaskBlue = header[9], bitmaskAlpha = header[10], pvrTag = header[11], numSurfs = header[12];
            var TYPE_MASK = 0xff;
            var PVRTC_2 = 24, PVRTC_4 = 25;
            var formatFlags = flags & TYPE_MASK;
            var bpp, format;
            var _hasAlpha = bitmaskAlpha > 0;
            if (formatFlags === PVRTC_4) {
                format = _hasAlpha ? PVRFormat.RGBA_PVRTC_4BPPV1_Format : PVRFormat.RGB_PVRTC_4BPPV1_Format;
                bpp = 4;
            }
            else if (formatFlags === PVRTC_2) {
                format = _hasAlpha ? PVRFormat.RGBA_PVRTC_2BPPV1_Format : PVRFormat.RGB_PVRTC_2BPPV1_Format;
                bpp = 2;
            }
            else
                throw new Error("pvrtc - unknown format " + formatFlags);
            pvrDatas.dataPtr = headerLength;
            pvrDatas.bpp = bpp;
            pvrDatas.format = format;
            pvrDatas.width = width;
            pvrDatas.height = height;
            pvrDatas.numSurfaces = numSurfs;
            pvrDatas.numMipmaps = numMipmaps + 1;
            // guess cubemap type seems tricky in v2
            // it juste a pvr containing 6 surface (no explicit cubemap type)
            pvrDatas.isCubemap = (numSurfs === 6);
            return PVRParser._extract(pvrDatas);
        };
        PVRParser._parseV3 = function (pvrDatas) {
            var header = pvrDatas.header;
            var bpp, format;
            var metaLen = header[12], pixelFormat = header[2], height = header[6], width = header[7], numSurfs = header[9], numFaces = header[10], numMipmaps = header[11];
            switch (pixelFormat) {
                case 0:
                    bpp = 2;
                    format = PVRFormat.RGB_PVRTC_2BPPV1_Format;
                    break;
                case 1:
                    bpp = 2;
                    format = PVRFormat.RGBA_PVRTC_2BPPV1_Format;
                    break;
                case 2:
                    bpp = 4;
                    format = PVRFormat.RGB_PVRTC_4BPPV1_Format;
                    break;
                case 3:
                    bpp = 4;
                    format = PVRFormat.RGBA_PVRTC_4BPPV1_Format;
                    break;
                default:
                    throw new Error("pvrtc - unsupported PVR format " + pixelFormat);
            }
            pvrDatas.dataPtr = 52 + metaLen;
            pvrDatas.bpp = bpp;
            pvrDatas.format = format;
            pvrDatas.width = width;
            pvrDatas.height = height;
            pvrDatas.numSurfaces = numFaces;
            pvrDatas.numMipmaps = numMipmaps;
            pvrDatas.isCubemap = (numFaces === 6);
            return PVRParser._extract(pvrDatas);
        };
        PVRParser._extract = function (pvrDatas) {
            var pvr = new egret3d.PVR();
            var buffer = pvrDatas.buffer;
            var dataOffset = pvrDatas.dataPtr, bpp = pvrDatas.bpp, numSurfs = pvrDatas.numSurfaces, dataSize = 0, blockSize = 0, blockWidth = 0, blockHeight = 0, widthBlocks = 0, heightBlocks = 0;
            if (bpp === 2) {
                blockWidth = 8;
                blockHeight = 4;
            }
            else {
                blockWidth = 4;
                blockHeight = 4;
            }
            blockSize = (blockWidth * blockHeight) * bpp / 8;
            pvr.mipmaps.length = pvrDatas.numMipmaps * numSurfs;
            var mipLevel = 0;
            while (mipLevel < pvrDatas.numMipmaps) {
                var sWidth = pvrDatas.width >> mipLevel;
                var sHeight = pvrDatas.height >> mipLevel;
                widthBlocks = sWidth / blockWidth;
                heightBlocks = sHeight / blockHeight;
                // Clamp to minimum number of blocks
                if (widthBlocks < 2) {
                    widthBlocks = 2;
                }
                if (heightBlocks < 2) {
                    heightBlocks = 2;
                }
                dataSize = widthBlocks * heightBlocks * blockSize;
                for (var surfIndex = 0; surfIndex < numSurfs; surfIndex++) {
                    var byteArray = new Uint8Array(buffer, dataOffset, dataSize);
                    var mipmap = {
                        data: byteArray,
                        width: sWidth,
                        height: sHeight
                    };
                    pvr.mipmaps[surfIndex * pvrDatas.numMipmaps + mipLevel] = mipmap;
                    dataOffset += dataSize;
                }
                mipLevel++;
            }
            return pvr;
        };
        return PVRParser;
    })();
    egret3d.PVRParser = PVRParser;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.AssetsManager
     * @classdesc
     * AssetsManager 资源管理类
     */
    var AssetsManager = (function (_super) {
        __extends(AssetsManager, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function AssetsManager() {
            _super.call(this);
            this.loadList = [];
            this.completeCount = 0;
            this.assets = {};
            this.assetsModel = {};
            this.assetsScene = {};
            this.assetsTexture = {};
            this.rootURL = "";
        }
        /**
         * @language zh_CN
         * @returns AssetsManager
         */
        AssetsManager.getInstance = function () {
            return AssetsManager._instance;
        };
        /**
         * @language zh_CN
         * 设置根路径
         * @param rootURL
         */
        AssetsManager.prototype.setRootURL = function (rootURL) {
            this.rootURL = rootURL;
        };
        /**
         * @language zh_CN
         * 查找资源
         * @param url
         * @returns any
         */
        AssetsManager.prototype.findAssets = function (url) {
            return this.assets[this.rootURL + url];
        };
        /**
         * @language zh_CN
         * @param url
         * @returns mesh
         */
        AssetsManager.prototype.findModel = function (url) {
            return this.assetsModel[this.rootURL + url];
        };
        /**
         * @language zh_CN
         * @param url
         * @returns Mesh
         */
        AssetsManager.prototype.findAnimModel = function (url) {
            return this.assetsModel[this.rootURL + url];
        };
        /**
         * @language zh_CN
         * @param url
         * @returns Array<Mesh>
         */
        AssetsManager.prototype.findScene = function (url) {
            return this.assetsScene[this.rootURL + url];
        };
        /**
         * @language zh_CN
         * @param url
         * @returns TexureBase
         */
        AssetsManager.prototype.findTexture = function (url) {
            return this.assetsTexture[this.rootURL + url];
        };
        /**
         * @language zh_CN
         */
        AssetsManager.prototype.startLoad = function () {
            var _this = this;
            for (var i = 0; i < this.loadList.length; i++) {
                var loader = this.loadList[i];
                loader.addEventListener(egret3d.Event3D.EVENT_LOAD_COMPLETE, function (e) { return _this.checkComplete(e); });
                loader.load();
            }
        };
        /**
         * @language zh_CN
         * @param url
         * @param ESMFile
         */
        AssetsManager.prototype.addLoadModel = function (url, ESMFile) {
            var modelLoad = new egret3d.ModeLoader(this.rootURL + url, ESMFile);
            this.loadList.push(modelLoad);
        };
        /**
         * @language zh_CN
         * @param url
         * @param ESMFile
         * @param EAMFiles
         */
        AssetsManager.prototype.addLoadAnimModel = function (url, ESMFile, EAMFiles) {
            var modelLoad = new egret3d.ModeLoader(this.rootURL + url, ESMFile, EAMFiles);
            this.loadList.push(modelLoad);
        };
        /**
         * @language zh_CN
         * @param url
         */
        AssetsManager.prototype.addLoadScene = function (url) {
            var sceneLoader = new egret3d.SceneLoader(this.rootURL + url);
            this.loadList.push(sceneLoader);
        };
        /**
         * @language zh_CN
         * @param url
         */
        AssetsManager.prototype.addLoadTexture = function (url) {
            var textureLoader = new egret3d.TextureLoader(this.rootURL + url);
            this.loadList.push(textureLoader);
        };
        AssetsManager.prototype.checkComplete = function (e) {
            var loader = e.data;
            switch (loader.type) {
                case egret3d.LoaderType.LOADER_MODEL_TYPE:
                    var modeLoader = loader;
                    this.assets[modeLoader.url + modeLoader.esmFile] = modeLoader.mesh;
                    this.assetsModel[modeLoader.url + modeLoader.esmFile] = modeLoader.mesh;
                    break;
                case egret3d.LoaderType.LOADER_SCENE_TYPE:
                    this.assets[loader.url] = loader.meshList;
                    this.assetsScene[loader.url] = loader.meshList;
                    break;
                case egret3d.LoaderType.LOADER_TEXTURE_TYPE:
                    this.assets[loader.url] = loader.texture;
                    this.assetsTexture[loader.url] = loader.texture;
                    break;
            }
            this.completeCount++;
            if (this.completeCount >= this.loadList.length) {
                this.dispatchEvent(new egret3d.Event3D(egret3d.Event3D.EVENT_LOAD_COMPLETE, this));
            }
        };
        AssetsManager._instance = new AssetsManager();
        return AssetsManager;
    })(egret3d.EventDispatcher);
    egret3d.AssetsManager = AssetsManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Picker
    * @classdesc
    * 鼠标拾取
    */
    var Picker = (function () {
        function Picker() {
        }
        /**
        * @language zh_CN
        * 返回鼠标拾取对象包围盒子得到的所有对象
        * @param camera 当前相机
        * @param objects 检测的对象列表
        * @returns 拾取的object列表
        */
        Picker.pickObject3DList = function (camera, objects) {
            var ret = new Array();
            var ray = this.ray;
            ray.CalculateAndTransformRay(egret3d.Egret3DDrive.canvasRectangle.width, egret3d.Egret3DDrive.canvasRectangle.height, camera.modelMatrix, camera.projectMatrix, egret3d.Input.instance.mouseX, egret3d.Input.instance.mouseY);
            for (var i = 0; i < objects.length; ++i) {
                var mesh = objects[i];
                var inPos = new egret3d.Vector3D();
                if (mesh.isCheckBox) {
                    if (mesh.box != null) {
                        if (ray.IntersectMesh(mesh.box.vexData, mesh.box.indexData, 3, mesh.box.indexData.length / 3, inPos, mesh.modelMatrix)) {
                            var target = new egret3d.PickResult();
                            objects[i].pickerData.globalPosition.copyFrom(inPos);
                            ret.push(objects[i]);
                        }
                    }
                }
            }
            return ret;
        };
        /**
        * @language zh_CN
        * 返回鼠标拾取对象模型得到的所有对象
        * @param camera 当前相机
        * @param objects 检测的对象列表
        * @returns 拾取的object列表
        */
        Picker.pickObject3DListToMesh = function (camera, objects) {
            var ret = new Array();
            var ray = this.ray;
            ray.CalculateAndTransformRay(egret3d.Egret3DDrive.canvasRectangle.width, egret3d.Egret3DDrive.canvasRectangle.height, camera.modelMatrix, camera.projectMatrix, egret3d.Input.instance.mouseX, egret3d.Input.instance.mouseY);
            for (var i = 0; i < objects.length; ++i) {
                var mesh = objects[i];
                var inPos = new egret3d.Vector3D();
                if (ray.IntersectMesh(mesh.geometry.verticesData, mesh.geometry.indexData, mesh.geometry.vertexAttLength, mesh.geometry.indexData.length / 3, inPos, mesh.modelMatrix)) {
                    var target = new egret3d.PickResult();
                    objects[i].pickerData.globalPosition.copyFrom(inPos);
                    ///target.target = mesh;
                    ///target.intPos.copyFrom(inPos);
                    ret.push(objects[i]);
                }
            }
            return ret;
        };
        Picker.ray = new egret3d.Ray();
        return Picker;
    })();
    egret3d.Picker = Picker;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.ControllerBase
    * @classdesc
    * 控制器 基类
    */
    var ControllerBase = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param targetObject 控制的目标
        */
        function ControllerBase(targetObject) {
            if (targetObject === void 0) { targetObject = null; }
            this._autoUpdate = true;
            this._target = targetObject;
        }
        Object.defineProperty(ControllerBase.prototype, "target", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns 返回当前的目标
            */
            get: function () {
                return this._target;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param val 当前的目标
            */
            set: function (val) {
                if (this._target == val)
                    return;
                ///if (this._target && _autoUpdate)
                ///    this._target._controller = null;
                this._target = val;
                ///if (this._target && _autoUpdate)
                ///    this._target._controller = this;
                ///notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControllerBase.prototype, "autoUpdate", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns 是否自动更新
            */
            get: function () {
                return this._autoUpdate;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param val 是否自动更新
            */
            set: function (val) {
                if (this._autoUpdate == val)
                    return;
                this._autoUpdate = val;
            },
            enumerable: true,
            configurable: true
        });
        ControllerBase.prototype.notifyUpdate = function () {
            ///if (_targetObject && _targetObject.implicitPartition && _autoUpdate)
            ///    _targetObject.implicitPartition.markForUpdate(_targetObject);
        };
        /**
        * @language zh_CN
        * 数据更新
        */
        ControllerBase.prototype.update = function () {
            ///throw null ;
        };
        return ControllerBase;
    })();
    egret3d.ControllerBase = ControllerBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.LookAtController
    * @classdesc
    * look at 相机控制器
    */
    var LookAtController = (function (_super) {
        __extends(LookAtController, _super);
        /**
        * @language zh_CN
        * 控制的目标相机，目标对象
        */
        function LookAtController(targetObject, lookAtObject) {
            var _this = this;
            if (targetObject === void 0) { targetObject = null; }
            if (lookAtObject === void 0) { lookAtObject = null; }
            _super.call(this, targetObject);
            this._origin = new egret3d.Vector3D(0.0, 0.0, 0.0);
            this._lookAtPosition = new egret3d.Vector3D();
            this._eyesPos = new egret3d.Vector3D();
            this._up = egret3d.Vector3D.Y_AXIS;
            this._eyesLength = 0;
            this._rotaEyesLine = new egret3d.Vector3D(0, 0, 1);
            this._eyesLine = new egret3d.Vector3D(0, 0, 1);
            this._rotaAngle = new egret3d.Vector3D();
            this._matRot = new egret3d.Matrix4_4();
            this._quaRot = new egret3d.Quaternion();
            this._tempVec = new egret3d.Vector3D();
            this._matTemp = new egret3d.Matrix4_4();
            this._mouseDown = false;
            this._mouseRightDown = false;
            this._screenMoveStartDetail = new egret3d.Point();
            this._screenMoveDelay = new egret3d.Point();
            this._isUpdate = false;
            this._elapsed = 0;
            this._speed = 3;
            this._xAngle = 0;
            this._keyArray = new Array();
            /**
            * @language zh_CN
            * 目标点偏移
            */
            this.lookAtOffset = new egret3d.Vector3D(0, 0, 0);
            /**
            * @language zh_CN
            * 是否第一人称相机
            */
            this.firstCamera = false;
            this._keyArray.push(false);
            this._keyArray.push(false);
            this._keyArray.push(false);
            this._keyArray.push(false);
            if (lookAtObject)
                this.lookAtObject = lookAtObject;
            else
                this.lookAtPosition = new egret3d.Vector3D();
            this._eyesPos.copyFrom(targetObject.position);
            this._lookAtPosition.copyFrom(lookAtObject.position.add(this.lookAtOffset));
            this._rotaEyesLine.copyFrom(this._eyesLine);
            this._target.lookAt(this._eyesPos, this._lookAtPosition);
            egret3d.Input.instance.addListenerMouseWheel(function () { return _this.mouseWheel(); });
            egret3d.Input.instance.addListenerMouseMove(function () { return _this.mouseMove(); });
            egret3d.Input.instance.addListenerKeyUp(function (e) { return _this.keyUp(e); });
            egret3d.Input.instance.addListenerKeyDown(function (e) { return _this.keyDown(e); });
            egret3d.Input.instance.addListenerSwipeUp(function () { return _this.onSwipeUp(); });
            egret3d.Input.instance.addListenerSwipeDown(function () { return _this.onSwipeDown(); });
            egret3d.Input.instance.addListenerSwipeLeft(function () { return _this.onSwipeLeft(); });
            egret3d.Input.instance.addListenerSwipeRight(function () { return _this.onSwipeRight(); });
        }
        LookAtController.prototype.onSwipeUp = function () {
            this._tempVec.copyFrom(this._rotaEyesLine);
            this._matTemp.identity();
            this._matTemp.appendRotation(90, egret3d.Vector3D.X_AXIS);
            this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
            this._tempVec.z = 0;
            this._tempVec.normalize();
            this._tempVec.scaleBy(Math.abs(egret3d.Input.instance.mouseOffsetY));
            this._tempVec.copyFrom(this._lookAtObject.position.add(this._tempVec));
            this._lookAtObject.position = this._tempVec;
        };
        LookAtController.prototype.onSwipeDown = function () {
            this._tempVec.copyFrom(this._rotaEyesLine);
            this._matTemp.identity();
            this._matTemp.appendRotation(90, egret3d.Vector3D.X_AXIS);
            this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
            this._tempVec.z = 0;
            this._tempVec.normalize();
            this._tempVec.scaleBy(Math.abs(egret3d.Input.instance.mouseOffsetY));
            this._tempVec.copyFrom(this._lookAtObject.position.subtract(this._tempVec));
            this._lookAtObject.position = this._tempVec;
        };
        LookAtController.prototype.onSwipeLeft = function () {
            this._tempVec.copyFrom(this._rotaEyesLine);
            this._matTemp.identity();
            this._matTemp.appendRotation(90, egret3d.Vector3D.Y_AXIS);
            this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
            this._tempVec.y = 0;
            this._tempVec.normalize();
            this._tempVec.scaleBy(Math.abs(egret3d.Input.instance.mouseOffsetX));
            this._tempVec.copyFrom(this._lookAtObject.position.add(this._tempVec));
            this._lookAtObject.position = this._tempVec;
        };
        LookAtController.prototype.onSwipeRight = function () {
            this._tempVec.copyFrom(this._rotaEyesLine);
            this._matTemp.identity();
            this._matTemp.appendRotation(90, egret3d.Vector3D.Y_AXIS);
            this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
            this._tempVec.y = 0;
            this._tempVec.normalize();
            this._tempVec.scaleBy(Math.abs(egret3d.Input.instance.mouseOffsetX));
            this._tempVec.copyFrom(this._lookAtObject.position.subtract(this._tempVec));
            this._lookAtObject.position = this._tempVec;
        };
        LookAtController.prototype.mouseWheel = function () {
            this.setEyesLength(this._eyesLength - egret3d.Input.instance.wheelDelta * 0.1);
        };
        LookAtController.prototype.mouseMove = function () {
            if (this._mouseDown && this._mouseRightDown) {
                var x1 = egret3d.Input.instance.mouseLastX;
                var y1 = egret3d.Input.instance.mouseLastY;
                var x2 = egret3d.Input.instance.mouseX;
                var y2 = egret3d.Input.instance.mouseY;
                var direction = egret3d.Input.instance.GetSlideDirection(x1, y1, x2, y2);
                switch (direction) {
                    case 0:
                        break;
                    case 1:
                        this.onSwipeUp();
                        break;
                    case 2:
                        this.onSwipeDown();
                        break;
                    case 3:
                        this.onSwipeLeft();
                        break;
                    case 4:
                        this.onSwipeRight();
                        break;
                    default:
                        break;
                }
            }
            else if (this._mouseDown) {
                this._rotaAngle.y += egret3d.Input.instance.mouseOffsetX;
                this._rotaAngle.x += egret3d.Input.instance.mouseOffsetY;
                this._rotaAngle.y %= 360;
                this._rotaAngle.x %= 360;
            }
        };
        Object.defineProperty(LookAtController.prototype, "lookAtPosition", {
            /**
            * @language zh_CN
            * 返回目标的位置
            * @readOnly
            * @returns 目标的位置
            */
            get: function () {
                return this._lookAtPosition;
            },
            /**
            * @language zh_CN
            * 设置目标坐标
            * @writeOnly
            * @param val
            */
            set: function (val) {
                if (this._lookAtObject)
                    this._lookAtObject = null;
                this._lookAtPosition.copyFrom(val.add(this.lookAtOffset));
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookAtController.prototype, "lookAtObject", {
            /**
            * @language zh_CN
            * @readOnly
            * 返回目标对象
            * @returns 目标对象
            */
            get: function () {
                return this._lookAtObject;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * 设置目标对象
            * @param val 目标
            */
            set: function (val) {
                if (this._lookAtObject == val)
                    return;
                this._lookAtObject = val;
                this._lookAtPosition.copyFrom(this._lookAtObject.position.add(this.lookAtOffset));
                this.notifyUpdate();
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 设置目标和相机的距离
        * @param length 距离
        */
        LookAtController.prototype.setEyesLength = function (length) {
            this._eyesLength = length;
            if (this._eyesLength < 1) {
                this._eyesLength = 1;
            }
        };
        /**
        * @language zh_CN
        * 数据更新
        */
        LookAtController.prototype.update = function () {
            if (this._target) {
                if (this._target.isController == false) {
                    return;
                }
                if (this._keyArray[0]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.add(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._keyArray[1]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._matTemp.identity();
                    this._matTemp.appendRotation(90, egret3d.Vector3D.Y_AXIS);
                    this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.subtract(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._keyArray[2]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.subtract(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._keyArray[3]) {
                    this._tempVec.copyFrom(this._rotaEyesLine);
                    this._matTemp.identity();
                    this._matTemp.appendRotation(90, egret3d.Vector3D.Y_AXIS);
                    this._tempVec.copyFrom(this._matTemp.transformVector(this._tempVec));
                    this._tempVec.y = 0;
                    this._tempVec.normalize();
                    this._tempVec.scaleBy(this._speed);
                    this._tempVec.copyFrom(this._lookAtObject.position.add(this._tempVec));
                    this._lookAtObject.position = this._tempVec;
                }
                if (this._rotaAngle.x >= 0 && this._rotaAngle.x <= 90) {
                    this._xAngle = 0;
                }
                if (this._rotaAngle.x >= 180 && this._rotaAngle.x <= 270) {
                    this._xAngle = 180;
                }
                if (this._rotaAngle.x > 90 && this._rotaAngle.x < 180) {
                    this._xAngle = 180;
                }
                if (this._rotaAngle.x > 270 && this._rotaAngle.x < 360) {
                    this._xAngle = 0;
                }
                if (this._rotaAngle.x <= 0 && this._rotaAngle.x >= -90) {
                    this._xAngle = 0;
                }
                if (this._rotaAngle.x <= -180 && this._rotaAngle.x >= -270) {
                    this._xAngle = 180;
                }
                if (this._rotaAngle.x < -90 && this._rotaAngle.x > -180) {
                    this._xAngle = 180;
                }
                if (this._rotaAngle.x < -270 && this._rotaAngle.x > -360) {
                    this._xAngle = 0;
                }
                this._quaRot.fromEulerAngles(this._rotaAngle.x, this._rotaAngle.y, 0);
                this._rotaEyesLine.copyFrom(this._quaRot.rotatePoint(this._eyesLine));
                this._tempVec.copyFrom(this._rotaEyesLine);
                this._tempVec.scaleBy(this._eyesLength);
                this._eyesPos.copyFrom(this._lookAtPosition.subtract(this._tempVec));
                ///this._lookAtObject.position = this._eyesPos.add(this._tempVec);
                if (this._lookAtObject) {
                    this._lookAtPosition.copyFrom(this._lookAtObject.position.add(this.lookAtOffset));
                }
                this._rotaEyesLine.normalize();
                this._quaRot.fromEulerAngles(this._xAngle, 0, this._rotaAngle.z);
                this._tempVec.copyFrom(this._up);
                this._tempVec.copyFrom(this._quaRot.rotatePoint(this._tempVec));
                this._tempVec.normalize();
                if (this.firstCamera) {
                    this._lookAtObject.rotationY = this._rotaAngle.y;
                    this._lookAtObject.rotationX = this._rotaAngle.x;
                }
                this._target.lookAt(this._eyesPos, this._lookAtPosition, this._tempVec);
            }
        };
        LookAtController.prototype.keyDown = function (key) {
            switch (key) {
                case egret3d.KeyCode.Key_W:
                    this._keyArray[0] = true;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._keyArray[1] = true;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._keyArray[2] = true;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._keyArray[3] = true;
                    break;
                case egret3d.KeyCode.Key_Mouse_Left:
                    this._mouseDown = true;
                    break;
                case egret3d.KeyCode.Key_Mouse_Right:
                    this._mouseRightDown = true;
                    break;
            }
        };
        LookAtController.prototype.keyUp = function (key) {
            switch (key) {
                case egret3d.KeyCode.Key_W:
                    this._keyArray[0] = false;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._keyArray[1] = false;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._keyArray[2] = false;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._keyArray[3] = false;
                    break;
                case egret3d.KeyCode.Key_Mouse_Left:
                    this._mouseDown = false;
                    break;
                case egret3d.KeyCode.Key_Mouse_Right:
                    this._mouseRightDown = false;
                    break;
            }
        };
        LookAtController.prototype.onButtonUp = function (b) {
            this._keyArray[0] = b;
        };
        LookAtController.prototype.onButtonDown = function (b) {
            this._keyArray[2] = b;
        };
        LookAtController.prototype.onButtonLeft = function (b) {
            this._keyArray[1] = b;
        };
        LookAtController.prototype.onButtonRight = function (b) {
            this._keyArray[3] = b;
        };
        return LookAtController;
    })(egret3d.ControllerBase);
    egret3d.LookAtController = LookAtController;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.CameraAnimationController
    * @classdesc
    * 摄像机动画控制器
    */
    var CameraAnimationController = (function () {
        /**
        * @language zh_CN
        * @param camera
        */
        function CameraAnimationController(camera) {
            if (camera === void 0) { camera = null; }
            /**
            * @language zh_CN
            * 相机动画每帧数据列表
            */
            this.cameraAnimationFrames = [];
            this._playing = false;
            this._playTime = 0;
            this._currentFrameIndex = 0;
            this._loop = true;
            this._smooth = false;
            this._cameraAnimationFrame = new CameraAnimationFrame();
            this._camera = camera;
            this._cameraAnimationFrame.fov = 45;
            this._cameraAnimationFrame.rotation = new egret3d.Vector3D();
            this._cameraAnimationFrame.translation = new egret3d.Vector3D();
        }
        /**
        * @language zh_CN
        * 绑定动画控制的相机
        * @param camera
        */
        CameraAnimationController.prototype.bindCamera = function (camera) {
            this._camera = camera;
        };
        /**
        * @language zh_CN
        * 播放相机动画 是否循环
        * @param isLoop 是否循环播放
        */
        CameraAnimationController.prototype.play = function (isLoop) {
            if (this.cameraAnimationFrames.length <= 0)
                return;
            this._loop = isLoop;
            this._playTime = 0;
            this._camera.isController = false;
            this._playing = true;
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        */
        CameraAnimationController.prototype.update = function (time, delay) {
            if (!this._playing)
                return;
            this._playTime += delay * 10;
            var Tnow = this._playTime % ((this.cameraAnimationFrames[this.cameraAnimationFrames.length - 1].time - this.cameraAnimationFrames[0].time) + (160));
            var currentFrameIndex = Math.floor(Tnow / (160)) % this.cameraAnimationFrames.length;
            if (!this._loop && this._currentFrameIndex > currentFrameIndex) {
                this._playing = false;
                this._camera.isController = true;
            }
            this._currentFrameIndex = currentFrameIndex;
            var currentFrame = this.cameraAnimationFrames[currentFrameIndex];
            if (this._smooth) {
                var nextFrameIndex = (currentFrameIndex + 1) % this.cameraAnimationFrames.length;
                var nextFrame = this.cameraAnimationFrames[nextFrameIndex];
                var t = (Tnow - currentFrame.time) / Math.abs(nextFrame.time - currentFrame.time);
                ///(v1.x - v0.x) * t + v0.x;
                this._cameraAnimationFrame.fov = (nextFrame.fov - currentFrame.fov) * t + currentFrame.fov;
                this._cameraAnimationFrame.rotation.copyFrom(currentFrame.rotation); ///.lerp(currentFrame.rotation, nextFrame.rotation, t);
                this._cameraAnimationFrame.translation.lerp(currentFrame.translation, nextFrame.translation, t);
            }
            else {
                this._cameraAnimationFrame.fov = currentFrame.fov;
                this._cameraAnimationFrame.rotation.copyFrom(currentFrame.rotation);
                this._cameraAnimationFrame.translation.copyFrom(currentFrame.translation);
            }
            this._camera.fieldOfView = this._cameraAnimationFrame.fov;
            this._camera.rotationX = this._cameraAnimationFrame.rotation.x * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES + 90;
            this._camera.rotationY = this._cameraAnimationFrame.rotation.y * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES;
            this._camera.rotationZ = this._cameraAnimationFrame.rotation.z * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES;
            this._camera.position = this._cameraAnimationFrame.translation;
        };
        return CameraAnimationController;
    })();
    egret3d.CameraAnimationController = CameraAnimationController;
    /**
    * @class egret3d.CameraAnimationFrame
    * @classdesc
    * 摄像机动画每帧数据
    */
    var CameraAnimationFrame = (function () {
        function CameraAnimationFrame() {
        }
        return CameraAnimationFrame;
    })();
    egret3d.CameraAnimationFrame = CameraAnimationFrame;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.CameraAnimationManager
    * @classdesc
    * 摄像机动画控制器管理
    */
    var CameraAnimationManager = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function CameraAnimationManager() {
            this._animation = {};
        }
        /**
        * @language zh_CN
        * 播放某个动画
        * @param name 动画名
        * @param camera 相机
        * @param isLoop 是否循环
        */
        CameraAnimationManager.prototype.play = function (name, camera, isLoop) {
            var _this = this;
            if (this._animation[name] != undefined) {
                this._animation[name].bindCamera(camera);
                this._animation[name].play(isLoop);
            }
            else {
                var loader = new egret3d.URLLoader();
                loader.onLoadComplete = function (loader) { return _this.onCallback(loader, name, camera, isLoop); };
                loader.load(name);
            }
        };
        /**
        * @language zh_CN
        * 更新数据
        * @param time 当前时间
        * @param delay 每帧间隔时间
        */
        CameraAnimationManager.prototype.update = function (time, delay) {
            for (var key in this._animation) {
                this._animation[key].update(time, delay);
            }
        };
        CameraAnimationManager.prototype.onCallback = function (loader, name, camera, isLoop) {
            this._animation[name] = loader.data;
            this._animation[name].bindCamera(camera);
            this._animation[name].play(isLoop);
        };
        return CameraAnimationManager;
    })();
    egret3d.CameraAnimationManager = CameraAnimationManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.CameraControllerBase
    * @classdesc
    * 相机控制器基类
    */
    var CameraControllerBase = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param  view3d
        */
        function CameraControllerBase(view3d) {
            this._lookAtPos = new egret3d.Vector3D;
            this._view3d = view3d;
            this._target = null;
            this._angle = 0;
            this._distance = 0;
            this._wide = 0;
            this._locked = false;
            this._cameraMoveHandler = null;
            this._lockTarget = false;
            ///_cameraAnim = new CameraAnim();
        }
        /**
        * @language zh_CN
        *
        * @param angle
        * @param distance
        * @param wide
        * @param locked
        */
        CameraControllerBase.prototype.start = function (angle, distance, wide, locked) {
            this._angle = angle;
            this._distance = distance;
            this._wide = wide;
            this._locked = locked;
            this._view3d.camera3D.rotationX = angle * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS;
            this._view3d.camera3D.y = Math.acos(angle * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS) * distance;
            this._view3d.camera3D.z = -Math.asin(angle * egret3d.Matrix3DUtils.DEGREES_TO_RADIANS) * distance;
        };
        /**
        * @language zh_CN
        *
        * @param timer
        * @param elapsed
        */
        CameraControllerBase.prototype.update = function (timer, elapsed) {
        };
        /**
        * @language zh_CN
        *
        * @param pos
        */
        CameraControllerBase.prototype.setCameraLookAtPos = function (pos) {
        };
        /**
        * @language zh_CN
        *
        * @retruns Vector3D
        */
        CameraControllerBase.prototype.getCameraPos = function () {
            return this._view3d.camera3D.position;
        };
        Object.defineProperty(CameraControllerBase.prototype, "target", {
            /**
            * @language zh_CN
            *
            * @retruns Object3D
            */
            get: function () {
                return this._target;
            },
            /**
            * @language zh_CN
            *
            * @param obj
            */
            set: function (obj) {
                this._target = obj;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraControllerBase.prototype, "lockTarget", {
            /**
            * @language zh_CN
            *
            * @retruns Boolean
            */
            get: function () {
                return this._lockTarget;
            },
            /**
            * @language zh_CN
            *
            * @param value
            */
            set: function (value) {
                this._lockTarget = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraControllerBase.prototype, "cameraMoveHandler", {
            /**
            * @language zh_CN
            *
            * @retruns Function
            */
            get: function () {
                return this._cameraMoveHandler;
            },
            /**
            * @language zh_CN
            *
            * @event handler
            */
            set: function (handler) {
                this._cameraMoveHandler = handler;
            },
            enumerable: true,
            configurable: true
        });
        return CameraControllerBase;
    })();
    egret3d.CameraControllerBase = CameraControllerBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.FreeCameraControl
    * @classdesc
    * 自由摄相机控制器
    */
    var FreeCameraControl = (function (_super) {
        __extends(FreeCameraControl, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function FreeCameraControl(view3d) {
            _super.call(this, view3d);
            this._moveSpeed = 3;
            this._moveDetail = new egret3d.Vector3D();
            this._screenMoveStartDetail = new egret3d.Point();
            this._screenMoveDelay = new egret3d.Point();
            this._mouseDown = false;
            this.initView();
        }
        FreeCameraControl.prototype.initView = function () {
        };
        /**
        * @language zh_CN
        * 初始化
        * @param angle 角度
        * @param distance 相机距离
        * @param wide
        * @param locked 是否锁定
        * @param lockRect
        */
        FreeCameraControl.prototype.start = function (angle, distance, wide, locked) {
            var _this = this;
            _super.prototype.start.call(this, angle, distance, wide, locked);
            egret3d.Input.instance.addListenerKeyDown(function (key) { return _this.onKeyDown(key); });
            egret3d.Input.instance.addListenerKeyUp(function (key) { return _this.onKeyUp(key); });
            egret3d.Input.instance.addListenerMouseMove(function () { return _this.mouseMove(); });
            egret3d.Input.instance.addListenerMouseWheel(function () { return _this.mouseWheel(); });
        };
        /**
        * @language zh_CN
        * 停止控制
        */
        FreeCameraControl.prototype.stop = function () {
        };
        FreeCameraControl.prototype.onKeyDown = function (key) {
            switch (key) {
                case egret3d.KeyCode.Key_Mouse_Left:
                    this._mouseDown = true;
                    break;
                case egret3d.KeyCode.Key_W:
                    this._moveDetail.z = this._moveSpeed;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._moveDetail.x = this._moveSpeed;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._moveDetail.z = -this._moveSpeed;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._moveDetail.x = -this._moveSpeed;
                    break;
            }
        };
        FreeCameraControl.prototype.onKeyUp = function (key) {
            switch (key) {
                case egret3d.KeyCode.Key_Mouse_Left:
                    this._mouseDown = false;
                    break;
                case egret3d.KeyCode.Key_W:
                    this._moveDetail.z = 0;
                    break;
                case egret3d.KeyCode.Key_A:
                    this._moveDetail.x = 0;
                    break;
                case egret3d.KeyCode.Key_S:
                    this._moveDetail.z = 0;
                    break;
                case egret3d.KeyCode.Key_D:
                    this._moveDetail.x = 0;
                    break;
            }
        };
        FreeCameraControl.prototype.mouseMove = function () {
            if (this._mouseDown) {
                this._view3d.camera3D.rotationY -= egret3d.Input.instance.mouseOffsetX * 0.1;
                this._view3d.camera3D.rotationX -= egret3d.Input.instance.mouseOffsetY * 0.1;
            }
        };
        FreeCameraControl.prototype.mouseWheel = function () {
            this._view3d.camera3D.rotationY += (egret3d.Input.instance.wheelDelta * 0.0001);
            ///this._view3d.camera3D.z += e.wheelDelta;
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param timer 当前时间
        * @param elapsed 时间间隔
        */
        FreeCameraControl.prototype.update = function (timer, elapsed) {
            ///this._view3d.camera3D.moveLeft(-this._moveDetail.x);
            ///this._view3d.camera3D.moveForward(this._moveDetail.z);
        };
        return FreeCameraControl;
    })(egret3d.CameraControllerBase);
    egret3d.FreeCameraControl = FreeCameraControl;
})(egret3d || (egret3d = {}));
var DeviceUtil = (function () {
    function DeviceUtil() {
    }
    /**
     * @language zh_CN
     * 获取设备信息
     */
    DeviceUtil.getDeviceInfo = function () {
        return null;
    };
    Object.defineProperty(DeviceUtil, "getGPUMode", {
        /**
         * @
         */
        /**
         * @language zh_CN
         * 获取GPU类型
         * @returns {}
         */
        get: function () {
            if (true) {
                return egret3d.Egret3DDrive.OpenGLES_2_0;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    return DeviceUtil;
})();
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret3d;
(function (egret3d) {
    /**
     * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
     * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
     * @class egret3d.Endian
     * @classdesc
     */
    var Endian = (function () {
        function Endian() {
        }
        /**
         * 表示多字节数字的最低有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.LITTLE_ENDIAN
         */
        Endian.LITTLE_ENDIAN = "littleEndian";
        /**
         * 表示多字节数字的最高有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.BIG_ENDIAN
         */
        Endian.BIG_ENDIAN = "bigEndian";
        return Endian;
    })();
    egret3d.Endian = Endian;
    /**
     * @class egret.ByteArray
     * @classdesc
     * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
     * 注意：ByteArray 类适用于需要在字节层访问数据的高级 开发人员。
     */
    var ByteArray = (function () {
        /**
         * 创建一个 egret.ByteArray 对象以引用指定的 ArrayBuffer 对象
         * @param buffer {ArrayBuffer} 数据源
         */
        function ByteArray(buffer) {
            this.BUFFER_EXT_SIZE = 0; //Buffer expansion size
            this.EOF_byte = -1;
            this.EOF_code_point = -1;
            this._setArrayBuffer(buffer || new ArrayBuffer(this.BUFFER_EXT_SIZE));
            this.endian = Endian.BIG_ENDIAN;
        }
        ByteArray.prototype._setArrayBuffer = function (buffer) {
            this.write_position = buffer.byteLength;
            this.data = new DataView(buffer);
            this._position = 0;
        };
        Object.defineProperty(ByteArray.prototype, "buffer", {
            get: function () {
                return this.data.buffer;
            },
            /**
             * @private
             */
            set: function (value) {
                this.data = new DataView(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "dataView", {
            get: function () {
                return this.data;
            },
            /**
             * @private
             */
            set: function (value) {
                this.data = value;
                this.write_position = value.byteLength;
            },
            enumerable: true,
            configurable: true
        });
        ByteArray.prototype.uncompress = function (type) {
            if (type === void 0) { type = "7z"; }
            var decoder = new nid.LZMA();
            var tmp = decoder.decode(new Uint8Array(this.data.buffer)).buffer;
            this.buffer = tmp;
            decoder = null;
        };
        Object.defineProperty(ByteArray.prototype, "bufferOffset", {
            /**
             * @private
             */
            get: function () {
                return this.data.byteOffset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "position", {
            /**
             * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
             * @member {number} egret.ByteArray#position
             */
            get: function () {
                return this._position;
            },
            set: function (value) {
                if (this._position < value) {
                    if (!this.validate(value - this._position)) {
                        return;
                    }
                }
                this._position = value;
                this.write_position = value > this.write_position ? value : this.write_position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "length", {
            /**
             * ByteArray 对象的长度（以字节为单位）。
             * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
             * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
             * @member {number} egret.ByteArray#length
             */
            get: function () {
                return this.write_position;
            },
            set: function (value) {
                this.validateBuffer(value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "bytesAvailable", {
            /**
             * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
             * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
             * @member {number} egret.ByteArray#bytesAvailable
             */
            get: function () {
                return this.data.byteLength - this._position;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
         * @method egret.ByteArray#clear
         */
        ByteArray.prototype.clear = function () {
            //this._position = 0;
            this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE));
        };
        //public getArray():Uint8Array {
        //    if (this.array == null) {
        //        this.array = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength);
        //    }
        //    return this.array;
        //}
        /**
         * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
         * @returns 如果字节不为零，则返回 true，否则返回 false
         * @method egret.ByteArray#readBoolean
         */
        ByteArray.prototype.readBoolean = function () {
            if (!this.validate(ByteArray.SIZE_OF_BOOLEAN))
                return null;
            return this.data.getUint8(this.position++) != 0;
        };
        /**
         * 从字节流中读取带符号的字节
         * @returns 介于 -128 和 127 之间的整数
         * @method egret.ByteArray#readByte
         */
        ByteArray.prototype.readByte = function () {
            if (!this.validate(ByteArray.SIZE_OF_INT8))
                return null;
            return this.data.getInt8(this.position++);
        };
        /**
         * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @method egret.ByteArray#readBytes
         */
        ByteArray.prototype.readBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (length == 0) {
                length = this.bytesAvailable;
            }
            else if (!this.validate(length)) {
                return null;
            }
            if (bytes) {
                bytes.validateBuffer(length);
            }
            else {
                bytes = new ByteArray(new ArrayBuffer(length));
            }
            //This method is expensive
            for (var i = 0; i < length; i++) {
                bytes.data.setUint8(i + offset, this.data.getUint8(this.position++));
            }
        };
        //public get leftBytes():ArrayBuffer {
        //    var begin = this.data.byteOffset + this.position;
        //    var end = this.data.byteLength;
        //    var result = new ArrayBuffer(end - begin);
        //    var resultBytes = new Uint8Array(result);
        //    var sourceBytes = new Uint8Array(this.data.buffer, begin, end - begin);
        //    resultBytes.set(sourceBytes);
        //    return resultBytes.buffer;
        //}
        /**
         * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
         * @returns 双精度（64 位）浮点数
         * @method egret.ByteArray#readDouble
         */
        ByteArray.prototype.readDouble = function () {
            if (!this.validate(ByteArray.SIZE_OF_FLOAT64))
                return null;
            var value = this.data.getFloat64(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT64;
            return value;
        };
        /**
         * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
         * @returns 单精度（32 位）浮点数
         * @method egret.ByteArray#readFloat
         */
        ByteArray.prototype.readFloat = function () {
            if (!this.validate(ByteArray.SIZE_OF_FLOAT32))
                return null;
            var value = this.data.getFloat32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT32;
            return value;
        };
        /**
         * 从字节流中读取一个带符号的 32 位整数
         * @returns 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
         * @method egret.ByteArray#readFloat
         */
        ByteArray.prototype.readInt = function () {
            if (!this.validate(ByteArray.SIZE_OF_INT32))
                return null;
            var value = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT32;
            return value;
        };
        //        public readInt64():Int64{
        //            if (!this.validate(ByteArray.SIZE_OF_UINT32)) return null;
        //
        //            var low = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_INT32;
        //            var high = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_INT32;
        //            return new Int64(low,high);
        //        }
        /**
         * 使用指定的字符集从字节流中读取指定长度的多字节字符串
         * @param length 要从字节流中读取的字节数
         * @param charSet 表示用于解释字节的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readMultiByte
         */
        //public readMultiByte(length:number, charSet?:string):string {
        //    if (!this.validate(length)) return null;
        //
        //    return "";
        //}
        /**
         * 从字节流中读取一个带符号的 16 位整数
         * @returns 介于 -32768 和 32767 之间的 16 位带符号整数
         * @method egret.ByteArray#readShort
         */
        ByteArray.prototype.readShort = function () {
            if (!this.validate(ByteArray.SIZE_OF_INT16))
                return null;
            var value = this.data.getInt16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT16;
            return value;
        };
        /**
         * 从字节流中读取无符号的字节
         * @returns 介于 0 和 255 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedByte
         */
        ByteArray.prototype.readUnsignedByte = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT8))
                return null;
            return this.data.getUint8(this.position++);
        };
        /**
         * 从字节流中读取一个无符号的 32 位整数
         * @returns 介于 0 和 4294967295 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedInt
         */
        ByteArray.prototype.readUnsignedInt = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT32))
                return null;
            var value = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT32;
            return value;
        };
        //public readVariableSizedUnsignedInt():number {
        //    var i:number;
        //    var c:number = this.data.getUint8(this.position++);
        //    if (c != 0xFF) {
        //        i = c << 8;
        //        c = this.data.getUint8(this.position++);
        //        i |= c;
        //    }
        //    else {
        //        c = this.data.getUint8(this.position++);
        //        i = c << 16;
        //        c = this.data.getUint8(this.position++);
        //        i |= c << 8;
        //        c = this.data.getUint8(this.position++);
        //        i |= c;
        //    }
        //    return i;
        //}
        //		public readUnsignedInt64():UInt64{
        //            if (!this.validate(ByteArray.SIZE_OF_UINT32)) return null;
        //
        //            var low = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_UINT32;
        //            var high = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
        //            this.position += ByteArray.SIZE_OF_UINT32;
        //			return new UInt64(low,high);
        //        }
        /**
         * 从字节流中读取一个无符号的 16 位整数
         * @returns 介于 0 和 65535 之间的 16 位无符号整数
         * @method egret.ByteArray#readUnsignedShort
         */
        ByteArray.prototype.readUnsignedShort = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT16))
                return null;
            var value = this.data.getUint16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT16;
            return value;
        };
        /**
         * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readUTF
         */
        ByteArray.prototype.readUTF = function () {
            if (!this.validate(ByteArray.SIZE_OF_UINT16))
                return null;
            var length = this.data.getUint16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT16;
            if (length > 0) {
                return this.readUTFBytes(length);
            }
            else {
                return "";
            }
        };
        /**
         * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
         * @param length 指明 UTF-8 字节长度的无符号短整型数
         * @returns 由指定长度的 UTF-8 字节组成的字符串
         * @method egret.ByteArray#readUTFBytes
         */
        ByteArray.prototype.readUTFBytes = function (length) {
            if (!this.validate(length))
                return null;
            var bytes = new Uint8Array(this.buffer, this.bufferOffset + this.position, length);
            this.position += length;
            /*var bytes: Uint8Array = new Uint8Array(new ArrayBuffer(length));
             for (var i = 0; i < length; i++) {
             bytes[i] = this.data.getUint8(this.position++);
             }*/
            return this.decodeUTF8(bytes);
        };
        //public readStandardString(length:number):string {
        //    if (!this.validate(length)) return null;
        //
        //    var str:string = "";
        //
        //    for (var i = 0; i < length; i++) {
        //        str += String.fromCharCode(this.data.getUint8(this.position++));
        //    }
        //    return str;
        //}
        //public readStringTillNull(keepEvenByte:boolean = true):string {
        //
        //    var str:string = "";
        //    var num:number = 0;
        //    while (this.bytesAvailable > 0) {
        //        var b:number = this.data.getUint8(this.position++);
        //        num++;
        //        if (b != 0) {
        //            str += String.fromCharCode(b);
        //        } else {
        //            if (keepEvenByte && num % 2 != 0) {
        //                this.position++;
        //            }
        //            break;
        //        }
        //    }
        //    return str;
        //}
        /**
         * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
         * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
         * @method egret.ByteArray#writeBoolean
         */
        ByteArray.prototype.writeBoolean = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_BOOLEAN);
            this.data.setUint8(this.position++, value ? 1 : 0);
        };
        /**
         * 在字节流中写入一个字节
         * 使用参数的低 8 位。忽略高 24 位
         * @param value 一个 32 位整数。低 8 位将被写入字节流
         * @method egret.ByteArray#writeByte
         */
        ByteArray.prototype.writeByte = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_INT8);
            this.data.setInt8(this.position++, value);
        };
        //public writeUnsignedByte(value:number):void {
        //    this.validateBuffer(ByteArray.SIZE_OF_UINT8);
        //
        //    this.data.setUint8(this.position++, value);
        //}
        /**
         * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
         * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
         * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
         * @param bytes ByteArray 对象
         * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
         * @param length 一个无符号整数，表示在缓冲区中的写入范围
         * @method egret.ByteArray#writeBytes
         */
        ByteArray.prototype.writeBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            var writeLength;
            if (offset < 0) {
                return;
            }
            if (length < 0) {
                return;
            }
            else if (length == 0) {
                writeLength = bytes.length - offset;
            }
            else {
                writeLength = Math.min(bytes.length - offset, length);
            }
            if (writeLength > 0) {
                this.validateBuffer(writeLength);
                var tmp_data = new DataView(bytes.buffer);
                for (var i = offset; i < writeLength + offset; i++) {
                    this.data.setUint8(this.position++, tmp_data.getUint8(i));
                }
            }
        };
        /**
         * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
         * @param value 双精度（64 位）浮点数
         * @method egret.ByteArray#writeDouble
         */
        ByteArray.prototype.writeDouble = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_FLOAT64);
            this.data.setFloat64(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT64;
        };
        /**
         * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
         * @param value 单精度（32 位）浮点数
         * @method egret.ByteArray#writeFloat
         */
        ByteArray.prototype.writeFloat = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_FLOAT32);
            this.data.setFloat32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_FLOAT32;
        };
        /**
         * 在字节流中写入一个带符号的 32 位整数
         * @param value 要写入字节流的整数
         * @method egret.ByteArray#writeInt
         */
        ByteArray.prototype.writeInt = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_INT32);
            this.data.setInt32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT32;
        };
        /**
         * 使用指定的字符集将多字节字符串写入字节流
         * @param value 要写入的字符串值
         * @param charSet 表示要使用的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @method egret.ByteArray#writeMultiByte
         */
        //public writeMultiByte(value:string, charSet:string):void {
        //
        //}
        /**
         * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
         * @param value 32 位整数，该整数的低 16 位将被写入字节流
         * @method egret.ByteArray#writeShort
         */
        ByteArray.prototype.writeShort = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_INT16);
            this.data.setInt16(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_INT16;
        };
        //public writeUnsignedShort(value:number):void {
        //    this.validateBuffer(ByteArray.SIZE_OF_UINT16);
        //
        //    this.data.setUint16(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
        //    this.position += ByteArray.SIZE_OF_UINT16;
        //}
        /**
         * 在字节流中写入一个无符号的 32 位整数
         * @param value 要写入字节流的无符号整数
         * @method egret.ByteArray#writeUnsignedInt
         */
        ByteArray.prototype.writeUnsignedInt = function (value) {
            this.validateBuffer(ByteArray.SIZE_OF_UINT32);
            this.data.setUint32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT32;
        };
        /**
         * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTF
         */
        ByteArray.prototype.writeUTF = function (value) {
            var utf8bytes = this.encodeUTF8(value);
            var length = utf8bytes.length;
            this.validateBuffer(ByteArray.SIZE_OF_UINT16 + length);
            this.data.setUint16(this.position, length, this.endian === Endian.LITTLE_ENDIAN);
            this.position += ByteArray.SIZE_OF_UINT16;
            this._writeUint8Array(utf8bytes, false);
        };
        /**
         * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTFBytes
         */
        ByteArray.prototype.writeUTFBytes = function (value) {
            this._writeUint8Array(this.encodeUTF8(value));
        };
        ByteArray.prototype.toString = function () {
            return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
        };
        /**
         * 将 Uint8Array 写入字节流
         * @param bytes 要写入的Uint8Array
         * @param validateBuffer
         */
        ByteArray.prototype._writeUint8Array = function (bytes, validateBuffer) {
            if (validateBuffer === void 0) { validateBuffer = true; }
            if (validateBuffer) {
                this.validateBuffer(this.position + bytes.length);
            }
            for (var i = 0; i < bytes.length; i++) {
                this.data.setUint8(this.position++, bytes[i]);
            }
        };
        /**
         * @private
         */
        ByteArray.prototype.validate = function (len) {
            //len += this.data.byteOffset;
            if (this.data.byteLength > 0 && this._position + len <= this.data.byteLength) {
                return true;
            }
            else {
            }
        };
        /*********************/
        /*  PRIVATE METHODS   */
        /*********************/
        ByteArray.prototype.validateBuffer = function (len, needReplace) {
            if (needReplace === void 0) { needReplace = false; }
            this.write_position = len > this.write_position ? len : this.write_position;
            len += this._position;
            if (this.data.byteLength < len || needReplace) {
                var tmp = new Uint8Array(new ArrayBuffer(len + this.BUFFER_EXT_SIZE));
                var length = Math.min(this.data.buffer.byteLength, len + this.BUFFER_EXT_SIZE);
                tmp.set(new Uint8Array(this.data.buffer, 0, length));
                this.buffer = tmp.buffer;
            }
        };
        /**
         * UTF-8 Encoding/Decoding
         */
        ByteArray.prototype.encodeUTF8 = function (str) {
            var pos = 0;
            var codePoints = this.stringToCodePoints(str);
            var outputBytes = [];
            while (codePoints.length > pos) {
                var code_point = codePoints[pos++];
                if (this.inRange(code_point, 0xD800, 0xDFFF)) {
                    this.encoderError(code_point);
                }
                else if (this.inRange(code_point, 0x0000, 0x007f)) {
                    outputBytes.push(code_point);
                }
                else {
                    var count, offset;
                    if (this.inRange(code_point, 0x0080, 0x07FF)) {
                        count = 1;
                        offset = 0xC0;
                    }
                    else if (this.inRange(code_point, 0x0800, 0xFFFF)) {
                        count = 2;
                        offset = 0xE0;
                    }
                    else if (this.inRange(code_point, 0x10000, 0x10FFFF)) {
                        count = 3;
                        offset = 0xF0;
                    }
                    outputBytes.push(this.div(code_point, Math.pow(64, count)) + offset);
                    while (count > 0) {
                        var temp = this.div(code_point, Math.pow(64, count - 1));
                        outputBytes.push(0x80 + (temp % 64));
                        count -= 1;
                    }
                }
            }
            return new Uint8Array(outputBytes);
        };
        ByteArray.prototype.decodeUTF8 = function (data) {
            var fatal = false;
            var pos = 0;
            var result = "";
            var code_point;
            var utf8_code_point = 0;
            var utf8_bytes_needed = 0;
            var utf8_bytes_seen = 0;
            var utf8_lower_boundary = 0;
            while (data.length > pos) {
                var _byte = data[pos++];
                if (_byte === this.EOF_byte) {
                    if (utf8_bytes_needed !== 0) {
                        code_point = this.decoderError(fatal);
                    }
                    else {
                        code_point = this.EOF_code_point;
                    }
                }
                else {
                    if (utf8_bytes_needed === 0) {
                        if (this.inRange(_byte, 0x00, 0x7F)) {
                            code_point = _byte;
                        }
                        else {
                            if (this.inRange(_byte, 0xC2, 0xDF)) {
                                utf8_bytes_needed = 1;
                                utf8_lower_boundary = 0x80;
                                utf8_code_point = _byte - 0xC0;
                            }
                            else if (this.inRange(_byte, 0xE0, 0xEF)) {
                                utf8_bytes_needed = 2;
                                utf8_lower_boundary = 0x800;
                                utf8_code_point = _byte - 0xE0;
                            }
                            else if (this.inRange(_byte, 0xF0, 0xF4)) {
                                utf8_bytes_needed = 3;
                                utf8_lower_boundary = 0x10000;
                                utf8_code_point = _byte - 0xF0;
                            }
                            else {
                                this.decoderError(fatal);
                            }
                            utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                            code_point = null;
                        }
                    }
                    else if (!this.inRange(_byte, 0x80, 0xBF)) {
                        utf8_code_point = 0;
                        utf8_bytes_needed = 0;
                        utf8_bytes_seen = 0;
                        utf8_lower_boundary = 0;
                        pos--;
                        code_point = this.decoderError(fatal, _byte);
                    }
                    else {
                        utf8_bytes_seen += 1;
                        utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
                        if (utf8_bytes_seen !== utf8_bytes_needed) {
                            code_point = null;
                        }
                        else {
                            var cp = utf8_code_point;
                            var lower_boundary = utf8_lower_boundary;
                            utf8_code_point = 0;
                            utf8_bytes_needed = 0;
                            utf8_bytes_seen = 0;
                            utf8_lower_boundary = 0;
                            if (this.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                                code_point = cp;
                            }
                            else {
                                code_point = this.decoderError(fatal, _byte);
                            }
                        }
                    }
                }
                //Decode string
                if (code_point !== null && code_point !== this.EOF_code_point) {
                    if (code_point <= 0xFFFF) {
                        if (code_point > 0)
                            result += String.fromCharCode(code_point);
                    }
                    else {
                        code_point -= 0x10000;
                        result += String.fromCharCode(0xD800 + ((code_point >> 10) & 0x3ff));
                        result += String.fromCharCode(0xDC00 + (code_point & 0x3ff));
                    }
                }
            }
            return result;
        };
        ByteArray.prototype.encoderError = function (code_point) {
            //$error(1026, code_point);
        };
        ByteArray.prototype.decoderError = function (fatal, opt_code_point) {
            if (fatal) {
            }
            return opt_code_point || 0xFFFD;
        };
        ByteArray.prototype.inRange = function (a, min, max) {
            return min <= a && a <= max;
        };
        ByteArray.prototype.div = function (n, d) {
            return Math.floor(n / d);
        };
        ByteArray.prototype.stringToCodePoints = function (string) {
            /** @type {Array.<number>} */
            var cps = [];
            // Based on http://www.w3.org/TR/WebIDL/#idl-DOMString
            var i = 0, n = string.length;
            while (i < string.length) {
                var c = string.charCodeAt(i);
                if (!this.inRange(c, 0xD800, 0xDFFF)) {
                    cps.push(c);
                }
                else if (this.inRange(c, 0xDC00, 0xDFFF)) {
                    cps.push(0xFFFD);
                }
                else {
                    if (i === n - 1) {
                        cps.push(0xFFFD);
                    }
                    else {
                        var d = string.charCodeAt(i + 1);
                        if (this.inRange(d, 0xDC00, 0xDFFF)) {
                            var a = c & 0x3FF;
                            var b = d & 0x3FF;
                            i += 1;
                            cps.push(0x10000 + (a << 10) + b);
                        }
                        else {
                            cps.push(0xFFFD);
                        }
                    }
                }
                i += 1;
            }
            return cps;
        };
        ByteArray.SIZE_OF_BOOLEAN = 1;
        ByteArray.SIZE_OF_INT8 = 1;
        ByteArray.SIZE_OF_INT16 = 2;
        ByteArray.SIZE_OF_INT32 = 4;
        ByteArray.SIZE_OF_UINT8 = 1;
        ByteArray.SIZE_OF_UINT16 = 2;
        ByteArray.SIZE_OF_UINT32 = 4;
        ByteArray.SIZE_OF_FLOAT32 = 4;
        ByteArray.SIZE_OF_FLOAT64 = 8;
        return ByteArray;
    })();
    egret3d.ByteArray = ByteArray;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.StringUtil
     * @classdesc
     * 字符串处理工具类
     */
    var StringUtil = (function () {
        function StringUtil() {
        }
        /**
         * @language zh_CN
         * 解析文件内容(按行解析)
         * @param file
         * @returns 行列表
         */
        StringUtil.parseContent = function (file) {
            var shaderList = new Array();
            var node = "";
            var endChar = ";";
            var index = -1;
            for (var i = 0; i < file.length; ++i) {
                if (file.charAt(i) == "{") {
                    index = node.indexOf("=");
                    if (index < 0) {
                        endChar = "}";
                    }
                }
                if (node == "") {
                    if (file.charAt(i) == " " || file.charAt(i) == "    ") {
                        continue;
                    }
                }
                node += file.charAt(i);
                if (endChar == file.charAt(i)) {
                    if (endChar == "}") {
                        var s_num = 0;
                        var e_num = 0;
                        for (var j = 0; j < node.length; ++j) {
                            if (node.charAt(j) == "{") {
                                s_num++;
                            }
                            else if (node.charAt(j) == "}") {
                                e_num++;
                            }
                        }
                        if (s_num != e_num) {
                            continue;
                        }
                        if (node.indexOf("struct") >= 0) {
                            endChar = ";";
                            continue;
                        }
                    }
                    if (node.length > 0) {
                        shaderList.push(node);
                    }
                    node = "";
                    endChar = ";";
                }
            }
            return shaderList;
        };
        /**
         * @language zh_CN
         * 解析一行的内容 有多少个成员
         * @param line 源内容
         * @returns 成员列表
         */
        StringUtil.parseLines = function (line) {
            var list = new Array();
            var value = "";
            for (var i = 0; i < line.length; ++i) {
                if (line.charAt(i) != " " && line.charAt(i) != "\t" && line.charAt(i) != "," &&
                    line.charAt(i) != "\r" && line.charAt(i) != "\n") {
                    if (line.charAt(i) == ";") {
                        if (value.length > 0) {
                            list.push(value);
                            value = "";
                        }
                        list.push(";");
                        break;
                    }
                    else if (line.charAt(i) == "=") {
                        if (value.length > 0) {
                            list.push(value);
                            value = "";
                        }
                        list.push("=");
                        continue;
                    }
                    value += line.charAt(i);
                    if (i == line.length - 1 && line != "") {
                        list.push(value);
                        value = "";
                    }
                }
                else {
                    if (value != "") {
                        list.push(value);
                        value = "";
                    }
                }
            }
            return list;
        };
        /**
         * @language zh_CN
         * 是否存在此字符串
         * @param fields 被检测的列表
         * @param str 比较字符串
         * @returns 成功返回true
         */
        StringUtil.hasString = function (fields, str) {
            for (var i = 0; i < fields.length; ++i) {
                if (fields[i] == str) {
                    return true;
                }
            }
            return false;
        };
        /**
         * @language zh_CN
         * 得到值的内容
         * @param fields 成员列表
         * @returns 值
         */
        StringUtil.getVarName = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length - 4 >= 0 && fields.length - 4 < fields.length) {
                    return fields[fields.length - 4];
                }
                return "";
            }
            if (fields.length - 2 >= 0 && fields.length - 2 < fields.length) {
                return fields[fields.length - 2];
            }
            return "";
        };
        /**
         * @language zh_CN
         * 返回变量的值
         * @param fields 变量数据列表
         * @returns 变量的值
         */
        StringUtil.getVarValue = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length - 2 >= 0 && fields.length - 2 < fields.length) {
                    return fields[fields.length - 2];
                }
            }
            return "";
        };
        /**
         * @language zh_CN
         * 返回变量类型
         * @param fields 变量数据列表
         * @returns 变量类型
         */
        StringUtil.getVarType = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length - 5 >= 0 && fields.length - 5 < fields.length) {
                    return fields[fields.length - 5];
                }
                return "";
            }
            if (fields.length - 3 >= 0 && fields.length - 3 < fields.length) {
                return fields[fields.length - 3];
            }
            return "";
        };
        /**
         * @language zh_CN
         * 返回变量属性
         * @param fields 变量数据列表
         * @returns 变量属性
         */
        StringUtil.getVarKey = function (fields) {
            var equal = this.hasString(fields, "=");
            if (equal) {
                if (fields.length > 5) {
                    return fields[0];
                }
                else {
                    return "";
                }
            }
            if (fields.length > 3) {
                return fields[0];
            }
            return "";
        };
        /**
         * @language zh_CN
         * 筛选文件中的指定字符去掉
         * @param file xxx
         * @returns 筛选后的字符
         */
        StringUtil.processShaderFile = function (file) {
            var filterChar = ["\n", "\r"];
            filterChar = [];
            var src = file;
            var dest = src;
            while (true) {
                var pos = src.indexOf("//");
                if (pos < 0) {
                    break;
                }
                var end = src.indexOf("\r\n", pos);
                if (end == -1) {
                    end = src.indexOf("\n", pos);
                }
                var slice_s = src.slice(pos, end);
                src = src.replace(slice_s, "");
                if (src == dest) {
                    break;
                }
                dest = src;
            }
            for (var i = 0; i < filterChar.length; ++i) {
                while (true) {
                    dest = src.replace(filterChar[i], "");
                    if (src == dest) {
                        break;
                    }
                    src = dest;
                }
            }
            return src;
        };
        /**
         * @language zh_CN
         * 解析字符颜色值
         * @param color
         * @returns
         */
        StringUtil.colorRgb = function (color) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var sColor = color.toLowerCase();
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i = 1; i < 4; i += 1) {
                        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                }
                //处理六位的颜色值  
                var sColorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
                }
                return "RGB(" + sColorChange.join(",") + ")";
            }
            else {
                return sColor;
            }
        };
        return StringUtil;
    })();
    egret3d.StringUtil = StringUtil;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Debug
    * @classdesc
    * 调试面板
    */
    var Debug = (function () {
        /**
         * @language zh_CN
         */
        function Debug() {
            this._isDebug = false;
            this._console = document.getElementById('console');
            this._console.style.color = "red";
        }
        /**
         * @language zh_CN
         * 输出调试信息
         * @param parameters
         */
        Debug.prototype.trace = function () {
            var parameters = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                parameters[_i - 0] = arguments[_i];
            }
            if (this._isDebug) {
                this.reset();
                var len = parameters.length;
                for (var i = 0; i < len; i++) {
                    this._console.innerHTML += parameters[i] + "</br>";
                }
            }
        };
        /**
         * @language zh_CN
         * 重置
         */
        Debug.prototype.reset = function () {
            this._console.innerHTML = "";
        };
        Object.defineProperty(Debug, "instance", {
            get: function () {
                if (this._instance == null) {
                    this._instance = new Debug();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Debug._instance = null;
        return Debug;
    })();
    egret3d.Debug = Debug;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.WireframeBase
     * @classdesc
     * 线框渲染基类
     */
    var WireframeBase = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param vs vs文件名
        * @param fs fs文件名
        */
        function WireframeBase(vs, fs) {
            if (vs === void 0) { vs = "wireframe_vertex"; }
            if (fs === void 0) { fs = "wireframe_fragment"; }
            this.vertexData = [
                0.5, 0.0, 0.0,
                -0.5, 0.0, 0.0
            ];
            this.vertexCount = 2;
            this.vertexLength = 3;
            this.vertexBytes = 12;
            /**
            * @language zh_CN
            * 是否以线渲染
            */
            this.isDrawLine = true;
            /**
            * @language zh_CN
            * 是否以点渲染
            */
            this.isDrawPoint = true;
            /**
            * @language zh_CN
            * 渲染顶点的大小
            */
            this.pointSize = 1.0;
            /**
            * @language zh_CN
            * 渲染顶点的颜色
            */
            this.pointColor = new egret3d.Vector3D(1, 1, 1, 1);
            /**
            * @language zh_CN
            * 渲染线的颜色
            */
            this.lineColor = new egret3d.Vector3D(1, 1, 1, 1);
            this.modleMatrix = new egret3d.Matrix4_4();
            this.usage = new egret3d.MethodUsageData();
            this.vsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.fsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.setShader(vs, fs);
            //this.modleMatrix.identity();
        }
        /**
        * @language zh_CN
        * 根据geometry创建一个线框
        * @param geometry 模型数据
        */
        WireframeBase.prototype.createFromGeometry = function (geometry) {
        };
        /**
        * @language zh_CN
        * 根据两个顶点创建一条线段
        * @param first 线段的起始点
        * @param second 线段的结束点
        */
        WireframeBase.prototype.createFromData = function (first, second) {
        };
        /**
        * @language zh_CN
        * 以下标来设置某个顶点的坐标
        * @param index 顶点下标
        * @param pos 设置顶点的坐标
        */
        WireframeBase.prototype.setVertexPos = function (index, pos) {
            var i = index * this.vertexLength;
            if (i + 2 >= this.vertexData.length) {
                return;
            }
            this.vertexData[i] = pos.x;
            this.vertexData[i + 1] = pos.y;
            this.vertexData[i + 2] = pos.z;
        };
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        */
        WireframeBase.prototype.setShader = function (vsName, fsName) {
            this.vsShader.addShader(vsName);
            this.fsShader.addShader(fsName);
            this.vsShaderSource = this.vsShader.getShaderSource();
            this.fsShaderSource = this.fsShader.getShaderSource();
        };
        /**
        * @language zh_CN
        * 渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        */
        WireframeBase.prototype.draw = function (context3D, camera) {
            //if (this.transformChange)
            //    this.notifyUpdate();
            context3D.gl.clear(egret3d.Egret3DDrive.DEPTH_BUFFER_BIT);
            if (!this.usage.program3D)
                this.rebuild(context3D);
            context3D.enbable(context3D.gl.DEPTH_TEST);
            context3D.setBlendFactors(egret3d.Egret3DDrive.ONE, egret3d.Egret3DDrive.ZERO);
            context3D.setProgram(this.usage.program3D);
            context3D.bindVertexBuffer(this.vertexBuffer3D);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, this.vertexBytes, 0);
            context3D.uniformMatrix4fv(this.usage.uniform_ModelMatrix.uniformIndex, false, this.modleMatrix.rawData);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, camera.viewProjectionMatrix.rawData);
            if (this.isDrawLine) {
                context3D.uniform4fv(this.uniform_color, [this.lineColor.x, this.lineColor.y, this.lineColor.z, this.lineColor.w]);
                context3D.drawArrays(egret3d.DrawMode.LINES, 0, this.vertexCount);
            }
            if (this.isDrawPoint) {
                context3D.uniform4fv(this.uniform_color, [this.pointColor.x, this.pointColor.y, this.pointColor.z, this.pointColor.w]);
                context3D.uniform1f(this.uniform_pointSize, this.pointSize);
                context3D.drawArrays(egret3d.DrawMode.POINTS, 0, this.vertexCount);
            }
        };
        WireframeBase.prototype.rebuild = function (context3D) {
            var vertexShader = context3D.creatVertexShader(this.vsShaderSource);
            var fragmentShader = context3D.creatFragmentShader(this.fsShaderSource);
            this.usage.program3D = context3D.creatProgram(vertexShader, fragmentShader);
            if (this.usage.program3D) {
                context3D.setProgram(this.usage.program3D);
            }
            if (!this.vertexBuffer3D) {
                this.vertexBuffer3D = context3D.creatVertexBuffer(this.vertexData);
            }
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_position");
            this.usage.uniform_ModelMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ModelMatrix");
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ProjectionMatrix");
            this.uniform_color = context3D.getUniformLocation(this.usage.program3D, "uniform_color");
            this.uniform_pointSize = context3D.getUniformLocation(this.usage.program3D, "uniform_pointSize");
        };
        return WireframeBase;
    })();
    egret3d.WireframeBase = WireframeBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.WireframeLine
     * @classdesc
     * 线渲染
     */
    var WireframeLine = (function (_super) {
        __extends(WireframeLine, _super);
        /**
        * @language zh_CN
        * constructor
        * @param vs vs文件名
        * @param fs fs文件名
        */
        function WireframeLine(vs, fs) {
            if (vs === void 0) { vs = "wireframe_vertex"; }
            if (fs === void 0) { fs = "wireframe_fragment"; }
            _super.call(this, vs, fs);
        }
        /**
        * @language zh_CN
        * 根据两个顶点创建一条线段
        * @param first 线段的起始点
        * @param second 线段的结束点
        */
        WireframeLine.prototype.createFromData = function (first, second) {
            this.vertexData = [];
            this.vertexCount = 0;
            this.vertexData.push(first.x, first.y, first.z, second.x, second.y, second.z);
            this.vertexCount = 2;
        };
        return WireframeLine;
    })(egret3d.WireframeBase);
    egret3d.WireframeLine = WireframeLine;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.WriframeMesh
     * @classdesc
     * 模型线框网格 以线框形式渲染模型
     */
    var WireframeMesh = (function (_super) {
        __extends(WireframeMesh, _super);
        /**
        * @language zh_CN
        * constructor
        */
        function WireframeMesh() {
            _super.call(this, "wireframe_vertex", "wireframe_fragment");
        }
        WireframeMesh.prototype.creatByMesh = function (mesh) {
            this.createFromGeometry(mesh.geometry);
            mesh.bindWireframe(this);
        };
        /**
        * @language zh_CN
        * 根据geometry创建一个线框
        * @param geometry 模型数据
        */
        WireframeMesh.prototype.createFromGeometry = function (geometry) {
            this.vertexData = [];
            this.vertexCount = 0;
            var pos_0 = new egret3d.Vector3D();
            var pos_1 = new egret3d.Vector3D();
            var pos_2 = new egret3d.Vector3D();
            for (var i = 0; i < geometry.indexData.length / 3; ++i) {
                var index_0 = geometry.indexData[i * 3 + 0];
                var index_1 = geometry.indexData[i * 3 + 1];
                var index_2 = geometry.indexData[i * 3 + 2];
                pos_0.x = geometry.verticesData[index_0 * geometry.vertexAttLength];
                pos_0.y = geometry.verticesData[index_0 * geometry.vertexAttLength + 1];
                pos_0.z = geometry.verticesData[index_0 * geometry.vertexAttLength + 2];
                pos_1.x = geometry.verticesData[index_1 * geometry.vertexAttLength];
                pos_1.y = geometry.verticesData[index_1 * geometry.vertexAttLength + 1];
                pos_1.z = geometry.verticesData[index_1 * geometry.vertexAttLength + 2];
                pos_2.x = geometry.verticesData[index_2 * geometry.vertexAttLength];
                pos_2.y = geometry.verticesData[index_2 * geometry.vertexAttLength + 1];
                pos_2.z = geometry.verticesData[index_2 * geometry.vertexAttLength + 2];
                this.vertexData.push(pos_0.x, pos_0.y, pos_0.z, pos_1.x, pos_1.y, pos_1.z, pos_1.x, pos_1.y, pos_1.z, pos_2.x, pos_2.y, pos_2.z, pos_2.x, pos_2.y, pos_2.z, pos_0.x, pos_0.y, pos_0.z);
                this.vertexCount += 6;
            }
        };
        return WireframeMesh;
    })(egret3d.WireframeBase);
    egret3d.WireframeMesh = WireframeMesh;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.PostCanvas
     * @classdesc
     * post canvas
     */
    var PostCanvas = (function () {
        function PostCanvas(vs, fs) {
            if (vs === void 0) { vs = "postCanvas_vertex"; }
            if (fs === void 0) { fs = "postCanvas_fragment"; }
            /**
            * @language zh_CN
            * rectangle
            */
            this.rectangle = new egret3d.Rectangle(0, 0, 0, 0);
            this.distortion = false;
            this.distortionK1 = 0.5;
            this.uniformDistortionK = new egret3d.Vector3D();
            this.transformChange = true;
            this.position = new egret3d.Vector3D();
            this.rotation = new egret3d.Vector3D();
            this.scale = new egret3d.Vector3D(1.0, 1.0, 1.0);
            this.px = 0;
            this.py = 0;
            //this.viewPort = view3D.viewPort ;
            //this.rectangle.x = this.viewPort.x ;
            //this.rectangle.y = this.viewPort.y ;
            //this.rectangle.width = this.viewPort.width;
            //this.rectangle.height = this.viewPort.height;
            this._viewMatrix = new egret3d.Matrix4_4();
            this.setShader(vs, fs);
        }
        Object.defineProperty(PostCanvas.prototype, "x", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns x
            */
            get: function () {
                return this.rectangle.x;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value x
            */
            set: function (value) {
                if (this.rectangle.x != value) {
                    this.rectangle.x = value;
                    this.transformChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PostCanvas.prototype, "y", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns y
            */
            get: function () {
                return this.rectangle.y;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value y
            */
            set: function (value) {
                if (this.rectangle.y != value) {
                    this.rectangle.y = value;
                    this.transformChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PostCanvas.prototype, "width", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns width
            */
            get: function () {
                return this.rectangle.width;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value width
            */
            set: function (value) {
                if (this.rectangle.width != value) {
                    this.rectangle.width = value;
                    this.transformChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PostCanvas.prototype, "height", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns height
            */
            get: function () {
                return this.rectangle.height;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value height
            */
            set: function (value) {
                if (this.rectangle.height != value) {
                    this.rectangle.height = value;
                    this.transformChange = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 曲面
        */
        PostCanvas.prototype.startWarped = function () {
            this.distortion = true;
            var scale1 = 0.0;
            var scale2 = 0.0;
            var norm = Math.sqrt((this.viewPort.height / 2.0) * (this.viewPort.height / 2.0) + (this.viewPort.width / 2.0) * (this.viewPort.width / 2.0));
            var vertDist = (this.viewPort.height / 2.0) / norm;
            scale2 = vertDist / (vertDist + this.distortionK1 * vertDist * vertDist * vertDist);
            var horizDist = (this.viewPort.width / 2.0) / norm;
            scale1 = (horizDist / ((horizDist + this.distortionK1 * horizDist * horizDist * horizDist)));
            this.uniformDistortionK.x = this.distortionK1;
            this.uniformDistortionK.y = scale1;
            this.uniformDistortionK.z = scale2;
        };
        /**
        * @language zh_CN
        * 设置渲染shader文件名
        * @param vsName vs
        * @param fsName fs
        */
        PostCanvas.prototype.setShader = function (vsName, fsName) {
            this.usage = new egret3d.MethodUsageData();
            this.vsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.fsShader = new egret3d.GLSL.ShaderBase(null, this.usage);
            this.vsShader.addShader(vsName);
            this.fsShader.addShader(fsName);
            this.vsShaderSource = this.vsShader.getShaderSource();
            this.fsShaderSource = this.fsShader.getShaderSource();
        };
        PostCanvas.prototype.rebuild = function (context3D) {
            var vertexShader = context3D.creatVertexShader(this.vsShaderSource);
            var fragmentShader = context3D.creatFragmentShader(this.fsShaderSource);
            this.usage.program3D = context3D.creatProgram(vertexShader, fragmentShader);
            if (this.usage.program3D) {
                context3D.setProgram(this.usage.program3D);
            }
            if (!this.vertexBuffer3D) {
                this.vertexBuffer3D = context3D.creatVertexBuffer(PostCanvas.singleQuadData);
                this.indexBuffer3D = context3D.creatIndexBuffer(PostCanvas.singleQuadIndex);
            }
            this.usage.attribute_position.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_position");
            this.usage.attribute_uv0.uniformIndex = context3D.getShaderAttribLocation(this.usage.program3D, "attribute_uv0");
            this.usage.uniform_ProjectionMatrix.uniformIndex = context3D.getUniformLocation(this.usage.program3D, "uniform_ProjectionMatrix");
            if (this.distortion) {
                this.distortionK1Register = context3D.getUniformLocation(this.usage.program3D, "_K");
            }
            if (this.usage.uniform_sceneWidth) {
                this.usage.uniform_sceneWidth.uniformIndex = context3D.getUniformLocation(this.usage.program3D, this.usage.uniform_sceneWidth.varName);
            }
            if (this.usage.uniform_sceneHeight) {
                this.usage.uniform_sceneHeight.uniformIndex = context3D.getUniformLocation(this.usage.program3D, this.usage.uniform_sceneHeight.varName);
            }
            //--------texture----------------
            var sampler2D;
            for (var index in this.usage.sampler2DList) {
                sampler2D = this.usage.sampler2DList[index];
                sampler2D.uniformIndex = context3D.getUniformLocation(this.usage.program3D, sampler2D.varName);
            }
            //--------texture----------------
            var sampler3D;
            for (var index in this.usage.sampler3DList) {
                sampler3D = this.usage.sampler3DList[index];
                sampler3D.uniformIndex = context3D.getUniformLocation(this.usage.program3D, sampler3D.varName);
            }
        };
        /**
        * @language zh_CN
        * xxxxxxxx
        * @param context3D xxx
        * @param viewPort xxx
        * @returns xxx
        */
        PostCanvas.prototype.draw = function (context3D, viewPort) {
            this.viewPort = viewPort;
            if (this.transformChange)
                this.notifyUpdate();
            //context3D.gl.clear(Egret3DDrive.DEPTH_BUFFER_BIT);
            if (!this.usage.program3D)
                this.rebuild(context3D);
            context3D.viewPort(viewPort.x, viewPort.y, viewPort.width, viewPort.height);
            context3D.disable(context3D.gl.DEPTH_TEST);
            context3D.disable(context3D.gl.BLEND);
            context3D.setProgram(this.usage.program3D);
            context3D.bindVertexBuffer(this.vertexBuffer3D);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_position.uniformIndex, 3, egret3d.Egret3DDrive.FLOAT, false, 20, 0);
            context3D.vertexAttribPointer(this.usage.program3D, this.usage.attribute_uv0.uniformIndex, 2, egret3d.Egret3DDrive.FLOAT, false, 20, 12);
            context3D.uniformMatrix4fv(this.usage.uniform_ProjectionMatrix.uniformIndex, false, this._viewMatrix.rawData);
            if (this.distortion) {
                context3D.uniform3f(this.distortionK1Register, this.uniformDistortionK.x, this.uniformDistortionK.y, this.uniformDistortionK.z);
            }
            if (this.usage.uniform_sceneWidth) {
                context3D.uniform1f(this.usage.uniform_sceneWidth.uniformIndex, this.viewPort.width);
            }
            if (this.usage.uniform_sceneHeight) {
                context3D.uniform1f(this.usage.uniform_sceneHeight.uniformIndex, this.viewPort.height);
            }
            //--------texture----------------
            var sampler2D;
            for (var index in this.usage.sampler2DList) {
                sampler2D = this.usage.sampler2DList[index];
                if (sampler2D.varName == "texture2D_1") {
                    context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, this.texture.texture);
                }
                else if (sampler2D.varName == "texture2D_2") {
                    context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, this.texture2.texture);
                }
            }
            context3D.drawElement(egret3d.DrawMode.TRIANGLES, this.indexBuffer3D, 0, 6);
        };
        PostCanvas.prototype.notifyUpdate = function () {
            this.transformChange = false;
            this._viewMatrix.identity();
            this.position.x = -1;
            this.position.y = 1;
            this.scale.x = this.rectangle.width / this.viewPort.width * 2.0;
            this.scale.y = this.rectangle.height / this.viewPort.height * 2.0;
            this._viewMatrix.recompose([this.position, this.rotation, this.scale]);
        };
        PostCanvas.singleQuadData = [
            0.0, -1.0, 0.0, 0.0, 0.0,
            1.0, -1.0, 0.0, 1.0, 0.0,
            1.0, 0.0, 0.0, 1.0, 1.0,
            0.0, 0.0, 0.0, 0.0, 1.0
        ];
        PostCanvas.singleQuadIndex = [0, 1, 2, 0, 2, 3];
        return PostCanvas;
    })();
    egret3d.PostCanvas = PostCanvas;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.HUD
     * @classdesc
     * HUD 渲染对象
     */
    var HUD = (function () {
        function HUD() {
            /**
            * @language zh_CN
            * rectangle
            */
            this.rectangle = new egret3d.Rectangle(0, 0, 0, 0);
            /**
            * @language zh_CN
            * anchor
            */
            this.anchor = new egret3d.Vector3D(0.5, 0.5);
            /**
            * @language zh_CN
            * rotation
            */
            this.rotation = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * r
            */
            this.r = 1;
            /**
            * @language zh_CN
            * g
            */
            this.g = 1;
            /**
            * @language zh_CN
            * b
            */
            this.b = 1;
            /**
            * @language zh_CN
            * a
            */
            this.a = 1;
            /**
            * @language zh_CN
            * uvRectangle
            */
            this.uvRectangle = new egret3d.Rectangle(0, 0, 1, 1);
            this.rectangle.x = 0;
            this.rectangle.y = 0;
            this.rectangle.width = 100;
            this.rectangle.height = 100;
            this._viewMatrix = new egret3d.Matrix4_4();
            //this._viewMatrix.appendScale(0.1,0.1, 1.0);
            this.quadShader = new QuadShader();
            // this.usage.attribute_position.index = context3D.getShaderAttribLocation(program3D, this.usage.attribute_position.name);
            // this.usage.attribute_normal.index = context3D.getShaderAttribLocation(program3D, this.usage.attribute_normal.name);
            // this.usage.attribute_tangent.index = context3D.getShaderAttribLocation(program3D, this.usage.attribute_tangent.name);
        }
        Object.defineProperty(HUD.prototype, "x", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns x
            */
            get: function () {
                return this.rectangle.x;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value x
            */
            set: function (value) {
                this.rectangle.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "y", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns y
            */
            get: function () {
                return this.rectangle.y;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value y
            */
            set: function (value) {
                this.rectangle.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "width", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns width
            */
            get: function () {
                return this.rectangle.width;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value width
            */
            set: function (value) {
                this.rectangle.width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HUD.prototype, "height", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns height
            */
            get: function () {
                return this.rectangle.height;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value height
            */
            set: function (value) {
                this.rectangle.height = value;
            },
            enumerable: true,
            configurable: true
        });
        HUD.prototype.rebuild = function (context3D) {
            var vertexShader = context3D.creatVertexShader(this.quadShader.vertexShaderSource);
            var fragmentShader = context3D.creatFragmentShader(this.quadShader.fragmentShaderSource);
            this.shaderProgram = context3D.creatProgram(vertexShader, fragmentShader);
            if (this.shaderProgram) {
                context3D.setProgram(this.shaderProgram);
            }
            if (!this.vertexBuffer3D) {
                this.vertexBuffer3D = context3D.creatVertexBuffer(HUD.singleQuadData);
                this.indexBuffer3D = context3D.creatIndexBuffer(HUD.singleQuadIndex);
            }
            this.posAtt = context3D.getShaderAttribLocation(this.shaderProgram, "aVertexPosition");
            this.uvAtt = context3D.getShaderAttribLocation(this.shaderProgram, "aTextureCoord");
            this.viewMatIndex = context3D.getUniformLocation(this.shaderProgram, "viewProjectionMatrix");
            this.uiDataIndex = context3D.getUniformLocation(this.shaderProgram, "uiDatas");
            this.textureIndex = context3D.getUniformLocation(this.shaderProgram, "diffuseTexture");
            this.materialDataIndex = context3D.getUniformLocation(this.shaderProgram, "materialData");
        };
        /**
        * @language zh_CN
        * 渲染
        * @param context3D Context3D
        */
        HUD.prototype.draw = function (context3D) {
            if (!this.shaderProgram)
                this.rebuild(context3D);
            this.viewPort = egret3d.Egret3DDrive.canvasRectangle;
            this._viewMatrix.identity();
            //test
            var tempMat = new egret3d.Matrix4_4();
            this._viewMatrix.appendRotation(this.rotation.z, egret3d.Vector3D.Z_AXIS);
            tempMat.appendScale(this.rectangle.width / this.viewPort.width * 2.0, this.rectangle.height / this.viewPort.height * 2.0, 1.0);
            this._viewMatrix.append(tempMat);
            var px = (this.viewPort.width - (this.rectangle.x + this.rectangle.width / 2) * 2.0) * (1 / this.viewPort.width); // +
            //(this.viewPort.width - (this.rectangle.width / 2.0) * 2.0) * (1 / this.viewPort.width); 
            var py = (this.viewPort.height - (this.rectangle.y + this.rectangle.height / 2) * 2.0) * (1 / this.viewPort.height); // +
            //(this.viewPort.height - (this.rectangle.height / 2.0) * 2.0) * (1 / this.viewPort.height); 
            this._viewMatrix.appendTranslation(-px, py, 0.0);
            context3D.setProgram(this.shaderProgram);
            //var len = 3 * Float32Array.BYTES_PER_ELEMENT +
            //    2 * Float32Array.BYTES_PER_ELEMENT;
            context3D.bindVertexBuffer(this.vertexBuffer3D);
            context3D.vertexAttribPointer(this.shaderProgram, this.posAtt, 3, egret3d.Egret3DDrive.FLOAT, false, 20, 0);
            context3D.vertexAttribPointer(this.shaderProgram, this.uvAtt, 2, egret3d.Egret3DDrive.FLOAT, false, 20, 12);
            context3D.uniformMatrix4fv(this.viewMatIndex, false, this._viewMatrix.rawData);
            this.texture.upload(context3D);
            context3D.setTexture2DAt(egret3d.ContextSamplerType.TEXTURE_0, this.textureIndex, 0, this.texture.texture);
            context3D.uniform4fv(this.materialDataIndex, [this.r, this.g, this.b, this.a]);
            //context3D.setTexture2DSamplerState(egret3d.NEAREST, egret3d.NEAREST, egret3d.CLAMP_TO_EDGE, egret3d.CLAMP_TO_EDGE);
            context3D.enbable(egret3d.Egret3DDrive.BLEND);
            context3D.setBlendFactors(egret3d.Egret3DDrive.SRC_ALPHA, egret3d.Egret3DDrive.ONE_MINUS_SRC_ALPHA);
            context3D.drawElement(egret3d.DrawMode.TRIANGLES, this.indexBuffer3D, 0, 6);
            context3D.gl.clear(egret3d.Egret3DDrive.DEPTH_BUFFER_BIT);
        };
        HUD.singleQuadData = [
            -0.5, -0.5, 0.0, 0.0, 0.0,
            0.5, -0.5, 0.0, 1.0, 0.0,
            0.5, 0.5, 0.0, 1.0, 1.0,
            -0.5, 0.5, 0.0, 0.0, 1.0
        ];
        HUD.singleQuadIndex = [0, 1, 2, 0, 2, 3];
        return HUD;
    })();
    egret3d.HUD = HUD;
    var QuadShader = (function () {
        function QuadShader() {
            this.vertexShaderSource = "";
            this.fragmentShaderSource = "";
            this.vertexShaderSource = "precision mediump float; \n";
            this.vertexShaderSource += " attribute vec3 aVertexPosition;                                                                       \n ";
            this.vertexShaderSource += " attribute vec2 aTextureCoord;                                                                         \n ";
            this.vertexShaderSource += "                                                                                                       \n ";
            this.vertexShaderSource += " varying  vec2 vTextureCoord;                                                                      \n ";
            this.vertexShaderSource += " uniform  mat4 viewProjectionMatrix;                                                                      \n ";
            this.vertexShaderSource += " uniform  vec4 uiDatas[116];                                                                      \n ";
            this.vertexShaderSource += "  void main(void) {                                                                                      \n ";
            this.vertexShaderSource += "     vec4 pos = vec4(aVertexPosition.xyz, 1.0) ;                                    \n ";
            this.vertexShaderSource += "     gl_Position = viewProjectionMatrix * pos;                                    \n ";
            this.vertexShaderSource += "     vTextureCoord = aTextureCoord ;                                                                       \n ";
            this.vertexShaderSource += " }                                                                                                     \n ";
            this.fragmentShaderSource = " precision mediump float; \n";
            this.fragmentShaderSource += " varying  vec2 vTextureCoord;                                                                      \n ";
            this.fragmentShaderSource += " uniform sampler2D diffuseTexture;                                                                      \n ";
            this.fragmentShaderSource += " uniform vec4 materialData;                                                                      \n ";
            this.fragmentShaderSource += "  void main(void) {                                                                                      \n ";
            this.fragmentShaderSource += "      vec4 color  = texture2D(diffuseTexture,vTextureCoord) * materialData ;                                    \n ";
            //this.fragmentShaderSource += "    vec4 color = vec4( 1.0 ,1.0 ,0.0 ,1.0) ;                                    \n ";
            this.fragmentShaderSource += "      gl_FragColor  = color;                                    \n ";
            this.fragmentShaderSource += "}                        \n ";
        }
        return QuadShader;
    })();
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.PostEffectBase
    * @classdesc
    * 后期合成基类
    */
    var PostEffectBase = (function () {
        /**
         * @language zh_CN
         */
        function PostEffectBase() {
            this.rec = new egret3d.Rectangle();
        }
        /**
         * @language zh_CN
         * @param context3D
         * @param width
         * @param height
         */
        PostEffectBase.prototype.init = function (context3D, width, height) {
            this.nextFrameBuffer = egret3d.RttManager.creatFrameBuffer(egret3d.FrameBufferType.defaultFrameBuffer, context3D, width, height, egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB);
            this.rec.width = width;
            this.rec.height = height;
        };
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        PostEffectBase.prototype.drawToTarget = function (source, target, context3D, viewPort) {
        };
        return PostEffectBase;
    })();
    egret3d.PostEffectBase = PostEffectBase;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.BrightPost
    * @classdesc
    * 后期亮度调整
    */
    var BrightPost = (function (_super) {
        __extends(BrightPost, _super);
        /**
         * @language zh_CN
         */
        function BrightPost() {
            _super.call(this);
            this.postCanvas = new egret3d.PostCanvas("postCanvas_vertex", "BrightPassFilter");
        }
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        BrightPost.prototype.drawToTarget = function (source, target, context3D, viewPort) {
            context3D.setRenderToTexture(this.nextFrameBuffer.texture.texture, true, 0);
            this.postCanvas.width = this.rec.width;
            this.postCanvas.height = this.rec.height;
            this.postCanvas.texture = target.texture;
            this.postCanvas.draw(context3D, this.rec);
            //context3D.setRenderToBackBuffer();
            //this.postCanvas.width = viewPort.width;
            //this.postCanvas.height = viewPort.height;
            //this.postCanvas.draw(context3D, this.nextFrameBuffer.texture.texture, viewPort);
        };
        return BrightPost;
    })(egret3d.PostEffectBase);
    egret3d.BrightPost = BrightPost;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.GaussianBlurHorizontalPost
    * @classdesc
    * 后期横向高斯模糊
    */
    var GaussianBlurHorizontalPost = (function (_super) {
        __extends(GaussianBlurHorizontalPost, _super);
        /**
         * @language zh_CN
         */
        function GaussianBlurHorizontalPost() {
            _super.call(this);
            this.postCanvas = new egret3d.PostCanvas("postCanvas_vertex", "GaussianBlurHorizontal");
        }
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        GaussianBlurHorizontalPost.prototype.drawToTarget = function (source, target, context3D, viewPort) {
            context3D.setRenderToTexture(this.nextFrameBuffer.texture.texture, true, 0);
            this.postCanvas.width = this.rec.width;
            this.postCanvas.height = this.rec.height;
            this.postCanvas.texture = target.texture;
            this.postCanvas.draw(context3D, this.rec);
        };
        return GaussianBlurHorizontalPost;
    })(egret3d.PostEffectBase);
    egret3d.GaussianBlurHorizontalPost = GaussianBlurHorizontalPost;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.GaussianBlurVerticalPost
    * @classdesc
    * 后期纵向高斯模糊
    */
    var GaussianBlurVerticalPost = (function (_super) {
        __extends(GaussianBlurVerticalPost, _super);
        /**
         * @language zh_CN
         */
        function GaussianBlurVerticalPost() {
            _super.call(this);
            this.postCanvas = new egret3d.PostCanvas("postCanvas_vertex", "GaussianBlurVertical");
        }
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        GaussianBlurVerticalPost.prototype.drawToTarget = function (source, target, context3D, viewPort) {
            context3D.setRenderToTexture(this.nextFrameBuffer.texture.texture, true, 0);
            this.postCanvas.width = this.rec.width;
            this.postCanvas.height = this.rec.height;
            this.postCanvas.texture = target.texture;
            this.postCanvas.draw(context3D, this.rec);
            //  context3D.setRenderToBackBuffer();
        };
        return GaussianBlurVerticalPost;
    })(egret3d.PostEffectBase);
    egret3d.GaussianBlurVerticalPost = GaussianBlurVerticalPost;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Composition
    * @classdesc
    * 后期合成
    */
    var Composition = (function (_super) {
        __extends(Composition, _super);
        /**
         * @language zh_CN
         */
        function Composition() {
            _super.call(this);
            this.postCanvas = new egret3d.PostCanvas("postCanvas_vertex", "Composition");
        }
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        Composition.prototype.drawToTarget = function (source, target, context3D, viewPort) {
            context3D.setRenderToTexture(this.nextFrameBuffer.texture.texture, true, 0);
            this.postCanvas.width = this.rec.width;
            this.postCanvas.height = this.rec.height;
            this.postCanvas.texture = target.texture;
            this.postCanvas.texture2 = source.texture;
            this.postCanvas.draw(context3D, this.rec);
        };
        return Composition;
    })(egret3d.PostEffectBase);
    egret3d.Composition = Composition;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.Tonemaping
    * @classdesc
    * 颜色调和
    */
    var Tonemaping = (function (_super) {
        __extends(Tonemaping, _super);
        /**
         * @language zh_CN
         */
        function Tonemaping() {
            _super.call(this);
            this.postCanvas = new egret3d.PostCanvas("postCanvas_vertex", "Tonemaping");
        }
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        Tonemaping.prototype.drawToTarget = function (source, target, context3D, viewPort) {
            this.postCanvas.width = this.rec.width;
            this.postCanvas.height = this.rec.height;
            this.postCanvas.texture = source.texture;
            this.postCanvas.texture2 = target.texture;
            this.postCanvas.draw(context3D, this.rec);
        };
        return Tonemaping;
    })(egret3d.PostEffectBase);
    egret3d.Tonemaping = Tonemaping;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @class egret3d.HDR
    * @classdesc
    * 后期HDR合成
    */
    var HDR = (function (_super) {
        __extends(HDR, _super);
        /**
         * @language zh_CN
         */
        function HDR() {
            _super.call(this);
            this.lumAdapt = 0.0;
            this.lum = 1.0;
            this.brightPost = new egret3d.BrightPost();
            this.gaussianBlurHorizontalPost = new egret3d.GaussianBlurHorizontalPost();
            this.gaussianBlurVerticalPost = new egret3d.GaussianBlurVerticalPost();
            this.composition = new egret3d.Composition();
            this.toneMap = new egret3d.Tonemaping();
        }
        /**
         * @language zh_CN
         * @param context3D
         * @param width
         * @param height
         */
        HDR.prototype.init = function (context3D, width, height) {
            this.brightPost.init(context3D, width, height);
            this.gaussianBlurHorizontalPost.init(context3D, width, height);
            this.gaussianBlurVerticalPost.init(context3D, width, height);
            this.composition.init(context3D, width, height);
            this.toneMap.init(context3D, width, height);
        };
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        HDR.prototype.drawToTarget = function (source, target, context3D, viewPort) {
            this.lumAdapt += (this.lum - this.lumAdapt) * (1 - Math.pow(0.98, 30 * 16));
            var next = source;
            this.brightPost.drawToTarget(source, next, context3D, viewPort);
            next = this.brightPost.nextFrameBuffer;
            this.nextFrameBuffer = this.brightPost.nextFrameBuffer;
            this.gaussianBlurHorizontalPost.drawToTarget(source, next, context3D, viewPort);
            next = this.gaussianBlurHorizontalPost.nextFrameBuffer;
            this.gaussianBlurVerticalPost.drawToTarget(source, next, context3D, viewPort);
            next = this.gaussianBlurVerticalPost.nextFrameBuffer;
            this.composition.drawToTarget(source, next, context3D, viewPort);
            this.nextFrameBuffer = this.composition.nextFrameBuffer;
            context3D.setRenderToBackBuffer();
        };
        return HDR;
    })(egret3d.PostEffectBase);
    egret3d.HDR = HDR;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.View3D
     * @classdesc
     * 渲染视图
     */
    var View3D = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param viewPort
        * @param camera
        * @param deferredShading
        */
        function View3D(viewPort, camera, deferredShading) {
            var _this = this;
            if (camera === void 0) { camera = null; }
            if (deferredShading === void 0) { deferredShading = false; }
            this._root = new egret3d.Object3D();
            this._width = 0;
            this._height = 0;
            this._x = 0;
            this._y = 0;
            this._localPos = new egret3d.Point();
            this._globalPos = new egret3d.Point();
            this._aspectRatio = 1;
            this._scissorRectDirty = true;
            this._viewportDirty = true;
            this._viewPortMatrix = new egret3d.Matrix4_4();
            this._useShadow = false;
            this._isDeferred = false;
            this._resizeFuncs = new Array();
            this._wireframeList = new Array();
            this._hudList = new Array();
            this._context3D = egret3d.Egret3DDrive.context3D;
            this._camera = camera || new egret3d.Camera3D(egret3d.CameraType.perspective);
            this._scissorRect = new egret3d.Rectangle();
            this._viewPort = viewPort;
            this._collect = new egret3d.EntityCollect(this._root);
            this._render = egret3d.RenderManager.getRender(egret3d.RenderType.defaultRender);
            this._isDeferred = deferredShading;
            //this.requestFrameBuffer();
            this.x = viewPort.x;
            this.y = viewPort.y;
            this.width = viewPort.width;
            this.height = viewPort.height;
            window.addEventListener("resize", function () { return _this.resize(); });
            this._mouseEventManager = new egret3d.Mouse3DManager(this._camera, this._collect);
        }
        Object.defineProperty(View3D.prototype, "root", {
            /**
            * @language zh_CN
            * @readOnly
            * 返回渲染根节点
            * @returns 根节点
            */
            get: function () {
                return this._root;
            },
            enumerable: true,
            configurable: true
        });
        View3D.prototype.resize = function () {
            this.x = this.viewPort.x = 0;
            this.y = this.viewPort.y = 0;
            this.width = this.viewPort.width = window.innerWidth;
            this.height = this.viewPort.height = window.innerHeight;
            egret3d.Egret3DDrive.canvas.width = this.viewPort.width;
            egret3d.Egret3DDrive.canvas.height = this.viewPort.height;
            egret3d.Egret3DDrive.canvasRectangle.x = this.x;
            egret3d.Egret3DDrive.canvasRectangle.y = this.y;
            egret3d.Egret3DDrive.canvasRectangle.width = this.width;
            egret3d.Egret3DDrive.canvasRectangle.height = this.height;
            this.updateViewSizeData();
            for (var i = 0; i < this._resizeFuncs.length; ++i) {
                this._resizeFuncs[i]();
            }
        };
        Object.defineProperty(View3D.prototype, "useShadow", {
            /**
            * @language zh_CN
            * @readOnly
            */
            get: function () {
                return this._useShadow;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * 是否使用影子
            * @param flag
            */
            set: function (flag) {
                this._useShadow = flag;
                if (flag) {
                    this._shadowRender = new egret3d.ShadowRender();
                }
            },
            enumerable: true,
            configurable: true
        });
        View3D.prototype.requestFrameBuffer = function () {
            if (this._isDeferred) {
            }
            else {
                this._postCanvas = new egret3d.PostCanvas();
            }
        };
        /**
        * @language zh_CN
        * 监听设备重置回调
        * @event func
        */
        View3D.prototype.addListenerResize = function (func) {
            this._resizeFuncs.push(func);
        };
        Object.defineProperty(View3D.prototype, "viewPort", {
            /**
            * @language zh_CN
            * 得到视口
            * @returns Rectangle
            */
            get: function () {
                return this._viewPort;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "sky", {
            /**
            * @language zh_CN
            * 得到天空盒子
            * @readOnly
            */
            get: function () {
                return this._sky;
            },
            /**
            * @language zh_CN
            * 设置天空盒子
            * @writeOnly
            */
            set: function (value) {
                this._sky = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "sphereSky", {
            /**
            * @language zh_CN
            * 设置天空球
            * @writeOnly
            */
            set: function (value) {
                this._sphereSky = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 增加HUD进渲染列表
        * @param hud
        */
        View3D.prototype.addHUD = function (hud) {
            this._hudList.push(hud);
        };
        /**
        * @language zh_CN
        * 在渲染列表中删除一个HUD
        * @param hud
        */
        View3D.prototype.delHUN = function (hud) {
            var index = this._hudList.indexOf(hud);
            this._hudList.splice(index, 1);
        };
        /**
        * @language zh_CN
        * 增加wireframe进渲染列表
        * @param wireframe
        */
        View3D.prototype.addWireframe = function (wireframe) {
            this._wireframeList.push(wireframe);
        };
        /**
        * @language zh_CN
        * 在渲染列表中删除一个HUD
        * @param hud
        */
        View3D.prototype.delWireframe = function (wireframe) {
            var index = this._wireframeList.indexOf(wireframe);
            this._wireframeList.splice(index, 1);
        };
        Object.defineProperty(View3D.prototype, "backImageTexture", {
            /**
            * @language zh_CN
            * 设置背景渲染贴图
            * @param texture 贴图
            */
            set: function (texture) {
                if (!this._backImg) {
                    this._backImg = new egret3d.HUD();
                    this._backImg.x = 0; // viewPort.width * 0.5  ;
                    this._backImg.y = 0; // * 0.5  ;
                    this._backImg.width = this.width;
                    this._backImg.height = this.height;
                }
                texture.upload(this._context3D);
                this._backImg.texture = texture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "postEffect", {
            /**
            * @language zh_CN
            * xxxxxxxx
            * @param postEffects xxx
            * @returns xxx
            */
            set: function (postEffects) {
                if (postEffects) {
                    this._postCanvas = this._postCanvas || new egret3d.PostCanvas();
                    this._postList = postEffects;
                    for (var i = 0; i < this._postList.length; i++) {
                        this._postList[i].init(this._context3D, 512, 512);
                    }
                    this._sourceFrameBuffer = this._sourceFrameBuffer || egret3d.RttManager.creatFrameBuffer(egret3d.FrameBufferType.defaultFrameBuffer, this._context3D, 512, 512, egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "collect", {
            /**
            * @language zh_CN
            * xxxxxxxx
            * @returns xxx
            */
            get: function () {
                return this._collect;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "camera3D", {
            /**
            * @language zh_CN
            * xxxxxxxx
            * @returns xxx
            */
            get: function () {
                return this._camera;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "context3D", {
            /**
            * @language zh_CN
            * @readOnly
            * @returns Context3D
            */
            get: function () {
                return this._context3D;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "width", {
            /**
            * @language zh_CN
            * The width of the viewport. When software rendering is used, this is limited by the
            * platform to 2048 pixels.
            * @returns width
            */
            get: function () {
                return this._width;
            },
            /**
            * @language zh_CN
            *
            * @param value width
            */
            set: function (value) {
                this._width = value;
                this._aspectRatio = this._width / this._height;
                this._camera.aspectRatio = this._aspectRatio;
                this._scissorRect.width = value;
                this._scissorRectDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "height", {
            /**
            * @language zh_CN
            * The height of the viewport. When software rendering is used, this is limited by the
            * platform to 2048 pixels.
            * @returns height
            */
            get: function () {
                return this._height;
            },
            /**
            * @language zh_CN
            *
            * @param value height
            */
            set: function (value) {
                this._height = value;
                this._aspectRatio = this._width / this._height;
                this._camera.aspectRatio = this._aspectRatio;
                this._scissorRect.height = value;
                this._scissorRectDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "x", {
            /**
            * @language zh_CN
            *
            * @returns x
            */
            get: function () {
                return this._x;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value x
            */
            set: function (value) {
                if (this._x == value)
                    return;
                this._localPos.x = this._x = value;
                this._globalPos.x = value;
                this._globalPosDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View3D.prototype, "y", {
            /**
            * @language zh_CN
            *
            * @returns y
            */
            get: function () {
                return this._y;
            },
            /**
            * @language zh_CN
            * @writeOnly
            * @param value y
            */
            set: function (value) {
                if (this._y == value)
                    return;
                this._localPos.y = value;
                this._globalPos.y = value;
                this._globalPosDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        *
        * @param child3D xxx
        */
        View3D.prototype.addChild3D = function (child3D) {
            this._root.addChild(child3D);
        };
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 时间间隔
        */
        View3D.prototype.renden = function (time, delay) {
            this.updateViewSizeData();
            this._context3D.gl.enable(egret3d.Egret3DDrive.BLEND);
            this._context3D.gl.enable(egret3d.Egret3DDrive.CULL_FACE);
            this._context3D.viewPort(this._viewPort.x, this._viewPort.y, this._viewPort.width, this._viewPort.height);
            this._context3D.clear(0.0, 0.0, 0.0, 1);
            if (this._backImg)
                this._backImg.draw(this._context3D);
            this._context3D.clearDepth(1);
            this._context3D.clearStencil(0);
            this._collect.update(this._camera);
            //----------即时渲染部分-------------------
            if (!this._isDeferred) {
                if (this._postList) {
                    if (this._useShadow) {
                        egret3d.RttManager.drawToTexture(time, delay, egret3d.ShadowRender.frameBuffer.texture.texture, this._context3D, this._shadowRender, this.collect, this._camera, this.viewPort);
                    }
                    if (this._sky) {
                        this._sky.draw(this._context3D, this.camera3D);
                    }
                    else if (this._sphereSky) {
                        this._sphereSky.draw(this._context3D, this.camera3D);
                    }
                    egret3d.RttManager.drawToTexture(time, delay, this._sourceFrameBuffer.texture.texture, this._context3D, this._render, this.collect, this._camera, this.viewPort);
                    this._context3D.clearDepth(1);
                    var next = this._sourceFrameBuffer;
                    for (var i = 0; i < this._postList.length; i++) {
                        this._postList[i].drawToTarget(this._sourceFrameBuffer, next, this._context3D, this._viewPort);
                        next = this._postList[i].nextFrameBuffer;
                    }
                    this._postCanvas.width = this._viewPort.width;
                    this._postCanvas.height = this._viewPort.height;
                    this._postCanvas.texture = next.texture;
                    this._postCanvas.draw(this._context3D, this._viewPort);
                }
                else {
                    if (this._sky) {
                        this._sky.draw(this._context3D, this.camera3D);
                    }
                    else if (this._sphereSky) {
                        this._sphereSky.draw(this._context3D, this.camera3D);
                    }
                    if (this._useShadow) {
                        egret3d.RttManager.drawToTexture(time, delay, egret3d.ShadowRender.frameBuffer.texture.texture, this._context3D, this._shadowRender, this.collect, this._camera, this.viewPort);
                    }
                    this._context3D.clearDepth(1);
                    this._context3D.viewPort(this._viewPort.x, this._viewPort.y, this._viewPort.width, this._viewPort.height);
                    this._render.draw(time, delay, this._context3D, this.collect, this._camera);
                }
            }
            //----------延迟渲染部分-------------------
            for (var i = 0; i < this._wireframeList.length; i++) {
                this._wireframeList[i].draw(this._context3D, this.camera3D);
            }
            for (var i = 0; i < this._hudList.length; i++) {
                this._hudList[i].draw(this._context3D);
            }
            this._context3D.gl.finish();
        };
        View3D.prototype.updateViewSizeData = function () {
            this._camera.aspectRatio = this._aspectRatio;
            if (this._scissorRectDirty) {
                this._scissorRectDirty = false;
                this._camera.updateScissorRect(this._scissorRect.x, this._scissorRect.y, this._scissorRect.width, this._scissorRect.height);
            }
            if (this._viewportDirty) {
                this._viewportDirty = false;
                this._camera.updateViewport(this._viewPort.x, this._viewPort.y, this._viewPort.width, this._viewPort.height);
            }
        };
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * @param name tag名
        * @param index 下标
        */
        View3D.prototype.setTags = function (name, index) {
            this._collect.setTags(name, index);
        };
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * @param layer layer名
        * @param index 下标
        */
        View3D.prototype.setTagsItem = function (layer, index) {
            this._collect.setTagsItem(layer, index);
        };
        /**
        * @language zh_CN
        * 得到layer的值
        * @param name tag名
        * @param layer layer名
        * @returns 返回layer的值
        */
        View3D.prototype.getTagLayer = function (name, layer) {
            if (name === void 0) { name = "default"; }
            if (layer === void 0) { layer = "layer_0"; }
            return this._collect.getTagLayer(name, layer);
        };
        /**
        * @language zh_CN
        * 得到tag
        * @param name tag名
        * @returns tag
        */
        View3D.prototype.getTag = function (name) {
            if (name === void 0) { name = "default"; }
            return this._collect.getTag(name);
        };
        return View3D;
    })();
    egret3d.View3D = View3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3d.VRView3D
     * @classdesc
     * VR渲染视图
     */
    var VRView3D = (function (_super) {
        __extends(VRView3D, _super);
        /**
        * @language zh_CN
        * constructor
        * @param viewPort
        */
        function VRView3D(viewPort) {
            _super.call(this, viewPort, new egret3d.Camera3D(egret3d.CameraType.VR));
            this.leftViewPort = new egret3d.Rectangle();
            this.rightViewPort = new egret3d.Rectangle();
            this.tab = false;
            this.eyeMatrix = new egret3d.EyesMatrix();
            this.leftViewPort.x = this.viewPort.x;
            this.leftViewPort.y = this.viewPort.y;
            this.leftViewPort.width = this.viewPort.width;
            this.leftViewPort.height = this.viewPort.height;
            this.rightViewPort.x = this.leftViewPort.width;
            this.rightViewPort.y = this.viewPort.y;
            this.rightViewPort.width = this.viewPort.width * 0.5;
            this.rightViewPort.height = this.viewPort.height;
            this.setupVR();
        }
        VRView3D.prototype.requestFrameBuffer = function () {
        };
        VRView3D.prototype.setupVR = function () {
            if (this._isDeferred) {
            }
            else {
                this._leftCanvas = new egret3d.PostCanvas("postCanvas_vertex", "warpedImage_fragment");
                this._rightCanvas = new egret3d.PostCanvas("postCanvas_vertex", "warpedImage_fragment");
                this._leftCanvas.rectangle.x = 0;
                this._leftCanvas.rectangle.y = 0;
                this._leftCanvas.rectangle.width = 480;
                this._leftCanvas.rectangle.height = 480 / 512 * this.viewPort.height;
                this._rightCanvas.rectangle.x = 480 + 30;
                this._rightCanvas.rectangle.y = 0;
                this._rightCanvas.rectangle.width = 480;
                this._rightCanvas.rectangle.height = 480 / 512 * this.viewPort.height;
                this._leftCanvas.startWarped();
                this._rightCanvas.startWarped();
                this._leftFrameBuffer = egret3d.RttManager.creatFrameBuffer(egret3d.FrameBufferType.leftEyeFrameBuffer, this._context3D, 1024, 1024, egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB);
                this._rightFrameBuffer = egret3d.RttManager.creatFrameBuffer(egret3d.FrameBufferType.rightEyeFrameBuffer, this._context3D, 1024, 1024, egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB);
            }
        };
        /**
        * @language zh_CN
        * 设置眼睛空间
        * @param value Eyes Space
        */
        VRView3D.prototype.setEyesSpace = function (value) {
            this._leftCanvas.x = 75;
            this._leftCanvas.y = 0;
            this._leftCanvas.width = 512;
            this._leftCanvas.height = 512;
            this._rightCanvas.x = 75;
            this._rightCanvas.y = 512 + value;
            this._rightCanvas.width = 512;
            this._rightCanvas.height = 512;
        };
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 间隔时间
        */
        VRView3D.prototype.renden = function (time, delay) {
            _super.prototype.updateViewSizeData.call(this);
            this._context3D.gl.enable(egret3d.Egret3DDrive.BLEND);
            this._context3D.gl.enable(egret3d.Egret3DDrive.CULL_FACE);
            this._context3D.viewPort(this._viewPort.x, this._viewPort.y, this._viewPort.width, this._viewPort.height);
            this._context3D.clear(0.0, 0.0, 0.0, 1.0);
            //this._root.rotationZ = 180;
            //this._root.rotationX = -90 ;
            //this._camera.tap(CameraType.perspective);
            this._collect.update(this._camera);
            // if (this.tab) {
            this.leftEye(time, delay);
            //      this.tab = false;
            // } else {
            this.rightEye(time, delay);
            //      this.tab = true;
            //   }
            this._context3D.viewPort(this._viewPort.x, this._viewPort.y, this._viewPort.width, this._viewPort.height);
            this._leftCanvas.texture = this._leftFrameBuffer.texture;
            this._rightCanvas.texture = this._leftFrameBuffer.texture;
            this._leftCanvas.draw(this._context3D, this._viewPort);
            this._rightCanvas.draw(this._context3D, this._viewPort);
            for (var i = 0; i < this._hudList.length; i++) {
                this._hudList[i].draw(this._context3D);
            }
            this._context3D.gl.finish();
        };
        VRView3D.prototype.leftEye = function (time, delay) {
            this._context3D.viewPort(this.leftViewPort.x, this.leftViewPort.y, this.leftViewPort.width, this.leftViewPort.height);
            this._camera.tap(egret3d.CameraType.VR, egret3d.VRType.left);
            this._context3D.setRenderToTexture(this._leftFrameBuffer.texture.texture, true, 0);
            if (this._sky) {
                this._sky.draw(this._context3D, this.camera3D);
            }
            if (this._sphereSky) {
                this._sphereSky.draw(this._context3D, this.camera3D);
            }
            this._context3D.clearDepth(1);
            this._render.draw(time, delay, this._context3D, this._collect, this._camera);
            this._context3D.setRenderToBackBuffer();
        };
        VRView3D.prototype.rightEye = function (time, delay) {
            this._context3D.viewPort(this.rightViewPort.x, this.rightViewPort.y, this.rightViewPort.width, this.rightViewPort.height);
            this._camera.tap(egret3d.CameraType.VR, egret3d.VRType.right);
            this._context3D.setRenderToTexture(this._rightFrameBuffer.texture.texture, true, 0);
            if (this._sky) {
                this._sky.draw(this._context3D, this.camera3D);
            }
            if (this._sphereSky) {
                this._sphereSky.draw(this._context3D, this.camera3D);
            }
            this._context3D.clearDepth(1);
            this._render.draw(time, delay, this._context3D, this._collect, this._camera);
            this._context3D.setRenderToBackBuffer();
        };
        return VRView3D;
    })(egret3d.View3D);
    egret3d.VRView3D = VRView3D;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    (function (KeyCode) {
        KeyCode[KeyCode["Key_BackSpace"] = 8] = "Key_BackSpace";
        KeyCode[KeyCode["Key_Tab"] = 9] = "Key_Tab";
        KeyCode[KeyCode["Key_Clear"] = 10] = "Key_Clear";
        KeyCode[KeyCode["Key_Enter"] = 11] = "Key_Enter";
        KeyCode[KeyCode["Key_Shift_L"] = 12] = "Key_Shift_L";
        KeyCode[KeyCode["Key_Control_L"] = 13] = "Key_Control_L";
        KeyCode[KeyCode["Key_Alt_L"] = 14] = "Key_Alt_L";
        KeyCode[KeyCode["Key_Pause"] = 15] = "Key_Pause";
        KeyCode[KeyCode["Key_CapsLock"] = 16] = "Key_CapsLock";
        KeyCode[KeyCode["Key_Escape"] = 17] = "Key_Escape";
        KeyCode[KeyCode["Key_Space"] = 18] = "Key_Space";
        KeyCode[KeyCode["Key_Prior"] = 19] = "Key_Prior";
        KeyCode[KeyCode["Key_Next"] = 20] = "Key_Next";
        KeyCode[KeyCode["Key_End"] = 21] = "Key_End";
        KeyCode[KeyCode["Key_Home"] = 22] = "Key_Home";
        KeyCode[KeyCode["Key_Left"] = 23] = "Key_Left";
        KeyCode[KeyCode["Key_Up"] = 24] = "Key_Up";
        KeyCode[KeyCode["Key_Right"] = 25] = "Key_Right";
        KeyCode[KeyCode["Key_Down"] = 26] = "Key_Down";
        KeyCode[KeyCode["Key_Select"] = 27] = "Key_Select";
        KeyCode[KeyCode["Key_Print"] = 28] = "Key_Print";
        KeyCode[KeyCode["Key_Execute"] = 29] = "Key_Execute";
        KeyCode[KeyCode["Key_Insert"] = 30] = "Key_Insert";
        KeyCode[KeyCode["Key_Delete"] = 31] = "Key_Delete";
        KeyCode[KeyCode["Key_Help"] = 32] = "Key_Help";
        KeyCode[KeyCode["Key_0"] = 48] = "Key_0";
        KeyCode[KeyCode["Key_1"] = 49] = "Key_1";
        KeyCode[KeyCode["Key_2"] = 50] = "Key_2";
        KeyCode[KeyCode["Key_3"] = 51] = "Key_3";
        KeyCode[KeyCode["Key_4"] = 52] = "Key_4";
        KeyCode[KeyCode["Key_5"] = 53] = "Key_5";
        KeyCode[KeyCode["Key_6"] = 54] = "Key_6";
        KeyCode[KeyCode["Key_7"] = 55] = "Key_7";
        KeyCode[KeyCode["Key_8"] = 56] = "Key_8";
        KeyCode[KeyCode["Key_9"] = 57] = "Key_9";
        KeyCode[KeyCode["Key_A"] = 65] = "Key_A";
        KeyCode[KeyCode["Key_B"] = 66] = "Key_B";
        KeyCode[KeyCode["Key_C"] = 67] = "Key_C";
        KeyCode[KeyCode["Key_D"] = 68] = "Key_D";
        KeyCode[KeyCode["Key_E"] = 69] = "Key_E";
        KeyCode[KeyCode["Key_F"] = 70] = "Key_F";
        KeyCode[KeyCode["Key_G"] = 71] = "Key_G";
        KeyCode[KeyCode["Key_H"] = 72] = "Key_H";
        KeyCode[KeyCode["Key_I"] = 73] = "Key_I";
        KeyCode[KeyCode["Key_J"] = 74] = "Key_J";
        KeyCode[KeyCode["Key_K"] = 75] = "Key_K";
        KeyCode[KeyCode["Key_L"] = 76] = "Key_L";
        KeyCode[KeyCode["Key_M"] = 77] = "Key_M";
        KeyCode[KeyCode["Key_N"] = 78] = "Key_N";
        KeyCode[KeyCode["Key_O"] = 79] = "Key_O";
        KeyCode[KeyCode["Key_P"] = 80] = "Key_P";
        KeyCode[KeyCode["Key_Q"] = 81] = "Key_Q";
        KeyCode[KeyCode["Key_R"] = 82] = "Key_R";
        KeyCode[KeyCode["Key_S"] = 83] = "Key_S";
        KeyCode[KeyCode["Key_T"] = 84] = "Key_T";
        KeyCode[KeyCode["Key_U"] = 85] = "Key_U";
        KeyCode[KeyCode["Key_V"] = 86] = "Key_V";
        KeyCode[KeyCode["Key_W"] = 87] = "Key_W";
        KeyCode[KeyCode["Key_X"] = 88] = "Key_X";
        KeyCode[KeyCode["Key_Y"] = 89] = "Key_Y";
        KeyCode[KeyCode["Key_Z"] = 90] = "Key_Z";
        KeyCode[KeyCode["Key_KP_0"] = 96] = "Key_KP_0";
        KeyCode[KeyCode["Key_KP_1"] = 97] = "Key_KP_1";
        KeyCode[KeyCode["Key_KP_2"] = 98] = "Key_KP_2";
        KeyCode[KeyCode["Key_KP_3"] = 99] = "Key_KP_3";
        KeyCode[KeyCode["Key_KP_4"] = 100] = "Key_KP_4";
        KeyCode[KeyCode["Key_KP_5"] = 101] = "Key_KP_5";
        KeyCode[KeyCode["Key_KP_6"] = 102] = "Key_KP_6";
        KeyCode[KeyCode["Key_KP_7"] = 103] = "Key_KP_7";
        KeyCode[KeyCode["Key_KP_8"] = 104] = "Key_KP_8";
        KeyCode[KeyCode["Key_KP_9"] = 105] = "Key_KP_9";
        KeyCode[KeyCode["Key_Multiply"] = 106] = "Key_Multiply";
        KeyCode[KeyCode["Key_Add"] = 107] = "Key_Add";
        KeyCode[KeyCode["Key_Separator"] = 108] = "Key_Separator";
        KeyCode[KeyCode["Key_Subtract"] = 109] = "Key_Subtract";
        KeyCode[KeyCode["Key_Decimal"] = 110] = "Key_Decimal";
        KeyCode[KeyCode["Key_Divide"] = 111] = "Key_Divide";
        KeyCode[KeyCode["Key_F1"] = 112] = "Key_F1";
        KeyCode[KeyCode["Key_F2"] = 113] = "Key_F2";
        KeyCode[KeyCode["Key_F3"] = 114] = "Key_F3";
        KeyCode[KeyCode["Key_F4"] = 115] = "Key_F4";
        KeyCode[KeyCode["Key_F5"] = 116] = "Key_F5";
        KeyCode[KeyCode["Key_F6"] = 117] = "Key_F6";
        KeyCode[KeyCode["Key_F7"] = 118] = "Key_F7";
        KeyCode[KeyCode["Key_F8"] = 119] = "Key_F8";
        KeyCode[KeyCode["Key_F9"] = 120] = "Key_F9";
        KeyCode[KeyCode["Key_F10"] = 121] = "Key_F10";
        KeyCode[KeyCode["Key_F11"] = 122] = "Key_F11";
        KeyCode[KeyCode["Key_F12"] = 123] = "Key_F12";
        KeyCode[KeyCode["Key_F13"] = 124] = "Key_F13";
        KeyCode[KeyCode["Key_F14"] = 125] = "Key_F14";
        KeyCode[KeyCode["Key_F15"] = 126] = "Key_F15";
        KeyCode[KeyCode["Key_F16"] = 127] = "Key_F16";
        KeyCode[KeyCode["Key_F17"] = 128] = "Key_F17";
        KeyCode[KeyCode["Key_F18"] = 129] = "Key_F18";
        KeyCode[KeyCode["Key_F19"] = 130] = "Key_F19";
        KeyCode[KeyCode["Key_F20"] = 131] = "Key_F20";
        KeyCode[KeyCode["Key_F21"] = 132] = "Key_F21";
        KeyCode[KeyCode["Key_F22"] = 133] = "Key_F22";
        KeyCode[KeyCode["Key_F23"] = 134] = "Key_F23";
        KeyCode[KeyCode["Key_F24"] = 135] = "Key_F24";
        KeyCode[KeyCode["Key_Num_Lock"] = 136] = "Key_Num_Lock";
        KeyCode[KeyCode["Key_Scroll_Lock"] = 137] = "Key_Scroll_Lock";
        KeyCode[KeyCode["Key_Mouse_Left"] = 256] = "Key_Mouse_Left";
        KeyCode[KeyCode["Key_Mouse_Right"] = 257] = "Key_Mouse_Right";
        KeyCode[KeyCode["Key_Mouse_Mid"] = 258] = "Key_Mouse_Mid";
    })(egret3d.KeyCode || (egret3d.KeyCode = {}));
    var KeyCode = egret3d.KeyCode;
    /**
     * @language zh_CN
     * @class egret3d.Input
     * @classdesc
     * 处理输入设备,鼠标.键盘.触摸
     */
    var Input = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function Input() {
            var _this = this;
            /**
            * @language zh_CN
            * 鼠标X坐标
            */
            this.mouseX = 0;
            /**
            * @language zh_CN
            * 鼠标Y坐标
            */
            this.mouseY = 0;
            /**
            * @language zh_CN
            * 鼠标滚轮增量值
            */
            this.wheelDelta = 0;
            /**
            * @language zh_CN
            * 鼠标X坐标的偏移值
            */
            this.mouseOffsetX = 0;
            /**
            * @language zh_CN
            * 鼠标Y坐标的偏移值
            */
            this.mouseOffsetY = 0;
            /**
            * @language zh_CN
            * 鼠标X坐标
            */
            this.mouseLastX = 0;
            /**
            * @language zh_CN
            * 鼠标Y坐标
            */
            this.mouseLastY = 0;
            this._time = 0;
            this._keyStatus = {};
            this._listenerKeyClick = new Array();
            this._listenerKey = new Array();
            this._listenerKeyUp = new Array();
            this._listenerKeyDown = new Array();
            this._listenerSwipe = new Array();
            this._mouseMoveFunc = new Array();
            this._mouseWheelFunc = new Array();
            this._ondeviceorientation = new Array();
            this._ondevicemotion = new Array();
            this._listenerGamepadButtons = new Array();
            this._touchStartCallback = new Array();
            this._touchEndCallback = new Array();
            this._touchMoveCallback = new Array();
            /**
            * @language zh_CN
            * 游戏手柄Stick1事件侦听函数
            */
            this.onGamepadStick1 = null;
            /**
            * @language zh_CN
            * 游戏手柄Stick2事件侦听函数
            */
            this.onGamepadStick2 = null;
            /**
            * @language zh_CN
            * 旋转
            */
            this.rotation = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 加速度
            */
            this._acceleration = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 重力
            */
            this.gravity = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 象限
            */
            this.quadrant = 0;
            this._gp = false;
            this._first = true;
            this._initAngle = new egret3d.Vector3D();
            this._oldPosition1 = null;
            this._oldPosition2 = null;
            window.onmousewheel = function (e) { return _this.mouseWheel(e); };
            window.onmousedown = function (e) { return _this.mouseStart(e); };
            window.onmouseup = function (e) { return _this.mouseEnd(e); };
            window.onmousemove = function (e) { return _this.mouseMove(e); };
            window.onkeydown = function (e) { return _this.keyDown(e); };
            window.onkeyup = function (e) { return _this.keyUp(e); };
            if (this.canGame()) {
                window.addEventListener("gamepadconnected", function (e) { return _this.ongamepadconnected(e); });
                window.addEventListener("gamepaddisconnected", function (e) { return _this.ongamepaddisconnected(e); });
            }
            window.ontouchstart = function (e) { return _this.touchStart(e); };
            window.ontouchend = function (e) { return _this.touchEnd(e); };
            window.ontouchmove = function (e) { return _this.touchMove(e); };
            window.ontouchcancel = function (e) { return _this.touchEnd(e); };
            window.addEventListener("deviceorientation", function (e) { return _this.ondeviceorientation(e); });
            window.addEventListener("devicemotion", function (e) { return _this.detectShake(e); });
        }
        Object.defineProperty(Input, "instance", {
            /**
            * @language zh_CN
            * 获取Input类对象的单例
            * @returns {Input}
            */
            get: function () {
                if (this._instance == null) {
                    this._instance = new Input();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @language zh_CN
        * 添加手指按下事件
        * @param callback {Function} 手指按下事件的侦听函数
        */
        Input.prototype.addTouchStartCallback = function (callback) {
            this._touchStartCallback.push(callback);
        };
        /**
        * @language zh_CN
        * 添加手指弹起事件
        * @param callback {Function} 手指弹起事件的侦听函数
        */
        Input.prototype.addTouchEndCallback = function (callback) {
            this._touchEndCallback.push(callback);
        };
        /**
        * @language zh_CN
        * 添加手指移动事件
        * @param callback {Function} 手指移动事件的侦听函数
        */
        Input.prototype.addTouchMoveCallback = function (callback) {
            this._touchMoveCallback.push(callback);
        };
        Input.prototype.ongamepaddisconnected = function (e) {
            egret3d.Debug.instance.trace("Gamepad disconnected!");
            this._gp = false;
        };
        Input.prototype.ongamepadconnected = function (e) {
            egret3d.Debug.instance.trace("Gamepad connected!");
            this._gp = true;
        };
        /**
        * @language zh_CN
        * 游戏手柄按钮是否按下
        * @param index {number}
        * @returns {boolean}
        */
        Input.prototype.getGamepadButtonState = function (index) {
            return navigator.getGamepads()[0].buttons[index].pressed;
        };
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick1
        * @returns {Vector3D}
        */
        Input.prototype.getGamepadStick1 = function () {
            return new egret3d.Vector3D(navigator.getGamepads()[0].axes[0], navigator.getGamepads()[0].axes[1], 0);
        };
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick2
        * @returns {Vector3D}
        */
        Input.prototype.getGamepadStick2 = function () {
            return new egret3d.Vector3D(navigator.getGamepads()[0].axes[2], navigator.getGamepads()[0].axes[3], 0);
        };
        Input.prototype.canGame = function () {
            return "getGamepads" in navigator;
        };
        /**
        * @language zh_CN
        * 更新游戏手柄信息
        */
        Input.prototype.reportOnGamepad = function () {
            if (this.canGame() && this._gp) {
                if (this.onGamepadStick1 != null) {
                    this.onGamepadStick1(this.getGamepadStick1());
                }
                if (this.onGamepadStick2 != null) {
                    this.onGamepadStick2(this.getGamepadStick2());
                }
                for (var i = 0; i < this._listenerGamepadButtons.length; ++i) {
                    this._listenerGamepadButtons[i](this.getGamepadButtonState(i));
                }
            }
        };
        Input.prototype.printout = function () {
            var html = "";
            html += "id: " + navigator.getGamepads()[0].id + "<br/>";
            var len = navigator.getGamepads()[0].buttons.length;
            for (var i = 0; i < len; i++) {
                html += "Button " + (i + 1) + ": ";
                if (this.getGamepadButtonState(i))
                    html += " pressed";
                html += "<br/>";
            }
            var v = this.getGamepadStick1();
            html += "Stick 1" + ": " + v.x + "," + v.y + "<br/>";
            v = this.getGamepadStick2();
            html += "Stick 2" + ": " + v.x + "," + v.y + "<br/>";
            egret3d.Debug.instance.trace(html);
        };
        Input.prototype.detectShake = function (evt) {
            var status = document.getElementById("console");
            var accl = evt.acceleration; //acceleration 排除重力影响的加速度  accelerationIncludingGravity(含重力的加速度)
            //x、y 和 z 轴方向加速
            if (accl.x > 1.5 || accl.y > 1.5 || accl.z > 1.5) {
            }
            else {
            }
            if (this._ondevicemotion && this._ondevicemotion.length > 0) {
                var x = Math.ceil(accl.x * 1000) / 1000;
                var y = Math.ceil(accl.y * 1000) / 1000;
                var z = Math.ceil(accl.z * 1000) / 1000;
                status.innerHTML = "x :" + x + "y :" + y + "z :" + z;
                this._ondevicemotion[0](x, y, z);
            }
        };
        Input.prototype.ondeviceorientation = function (e) {
            //alpha rotation around the z-axis  between 0 and 360 degrees 
            //在围绕 z 轴旋转时（即左右旋转时），y 轴的度数差 0 到 360度 。
            //beta Rotation around the x-axis cause the beta angle to change. The range of beta is between -180 and 180 degrees 
            //在围绕 x 轴旋转时（即前后旋转时），z 轴的度数差 -180到180度。  
            //gamma The gamma angle is associated with the y-axis between -90 and 90 degrees 
            //在围绕 y 轴旋转时（即扭转设备时），z 轴的度数差 -90到90度。  
            var directions = document.getElementById("console");
            //directions.style.color = 'red';
            if (this._ondeviceorientation && this._ondeviceorientation.length > 0) {
                var alpha = Math.round(e.alpha * 100) * 0.01;
                var beta = Math.round(e.beta * 100) * 0.01;
                var gamma = Math.round(e.gamma * 100) * 0.01;
                if (this._first) {
                    this._initAngle["x"] = alpha;
                    this._initAngle["y"] = beta;
                    this._initAngle["z"] = gamma;
                }
                this._delayX = alpha - this._caheX;
                this._delayY = beta - this._caheY;
                this._delayZ = gamma - this._caheZ;
                this._caheX = alpha;
                this._caheY = beta;
                this._caheZ = gamma;
                this._initAngle.x += this._delayX;
                this._initAngle.y += this._delayY;
                this._initAngle.z += this._delayZ;
                this._ondeviceorientation[0](this._initAngle);
                directions.innerHTML = e.absolute + "<br>" + this._delayX + "<br>" + this._delayY + " <br>" + this._delayZ;
                directions.innerHTML += "<br>" + this._initAngle["x"] + "<br>" + this._initAngle["y"] + "<br>" + this._initAngle["z"];
            }
        };
        //屏幕翻转
        Input.prototype.onorientationchange = function (e) {
        };
        Input.prototype.onPinch = function (x, y, x1, y1) {
            this._oldPosition1 = new egret3d.Point(x, y);
            this._oldPosition2 = new egret3d.Point(x1, y1);
        };
        Input.prototype.onSwipe = function (x, y) {
            this.mouseX = x;
            this.mouseY = y;
            this._oldPosition1 = null;
            this._oldPosition2 = null;
            this._time = new Date().getTime();
            for (var i = 0; i < this._listenerKeyDown.length; ++i) {
                this._listenerKeyDown[i](KeyCode.Key_Mouse_Left);
            }
        };
        Input.prototype.touchStart = function (e) {
            e.preventDefault();
            egret3d.Debug.instance.trace("touchStart: " + e.touches.length);
            var x1 = e.targetTouches[0].clientX - egret3d.Egret3DDrive.clientRect.left;
            var y1 = e.targetTouches[0].clientY - egret3d.Egret3DDrive.clientRect.top;
            if (e.targetTouches.length == 2) {
                var x2 = e.targetTouches[1].clientX - egret3d.Egret3DDrive.clientRect.left;
                var y2 = e.targetTouches[1].clientY - egret3d.Egret3DDrive.clientRect.top;
                this.onPinch(x1, y1, x2, y2);
            }
            else if (e.targetTouches.length == 1) {
                this.onSwipe(x1, y1);
            }
            for (var i = 0; i < this._touchStartCallback.length; i++) {
                this._touchStartCallback[i](e);
            }
        };
        Input.prototype.touchEnd = function (e) {
            egret3d.Debug.instance.trace("touchEnd : " + e.touches.length);
            if (e.targetTouches.length > 1) {
                var x = e.targetTouches[0].clientX - egret3d.Egret3DDrive.clientRect.left;
                var y = e.targetTouches[0].clientY - egret3d.Egret3DDrive.clientRect.top;
                var x1 = e.targetTouches[1].clientX - egret3d.Egret3DDrive.clientRect.left;
                var y1 = e.targetTouches[1].clientY - egret3d.Egret3DDrive.clientRect.top;
                this.onPinch(x, y, x1, y1);
            }
            else if (e.targetTouches.length == 1) {
                this.onSwipe(e.targetTouches[0].clientX - egret3d.Egret3DDrive.clientRect.left, e.targetTouches[0].clientY - egret3d.Egret3DDrive.clientRect.top);
            }
            else {
                this._oldPosition1 = null;
                this._oldPosition2 = null;
                this._time = 0;
                for (var i = 0; i < this._listenerKeyUp.length; ++i) {
                    this._listenerKeyUp[i](KeyCode.Key_Mouse_Left);
                }
            }
            for (var i = 0; i < this._touchEndCallback.length; i++) {
                this._touchEndCallback[i](e);
            }
        };
        Input.prototype.touchMove = function (e) {
            this.mouseLastX = this.mouseX;
            this.mouseLastY = this.mouseY;
            this.mouseX = e.targetTouches[0].clientX - egret3d.Egret3DDrive.clientRect.left;
            this.mouseY = e.targetTouches[0].clientY - egret3d.Egret3DDrive.clientRect.top;
            this.mouseOffsetX = this.mouseX - this.mouseLastX;
            this.mouseOffsetY = this.mouseY - this.mouseLastY;
            e.preventDefault();
            if (e.targetTouches.length > 1) {
                var newPosition1 = new egret3d.Point(this.mouseX, this.mouseY);
                var newPosition2 = new egret3d.Point(e.targetTouches[1].clientX - egret3d.Egret3DDrive.clientRect.left, e.targetTouches[1].clientY - egret3d.Egret3DDrive.clientRect.top);
                if (this._oldPosition1 == null)
                    this._oldPosition1 = newPosition1;
                if (this._oldPosition2 == null)
                    this._oldPosition2 = newPosition2;
                if (this.isEnlarge(this._oldPosition1, this._oldPosition2, newPosition1, newPosition2))
                    this.wheelDelta = 120;
                else
                    this.wheelDelta = -120;
                this._oldPosition1 = newPosition1;
                this._oldPosition2 = newPosition2;
                for (var i = 0; i < this._mouseWheelFunc.length; ++i) {
                    this._mouseWheelFunc[i]();
                }
            }
            else {
                if (new Date().getTime() - this._time > 500) {
                    for (var i = 0; i < this._mouseMoveFunc.length; ++i) {
                        this._mouseMoveFunc[i]();
                    }
                }
                else {
                    var direction = this.GetSlideDirection(this.mouseLastX, this.mouseLastY, this.mouseX, this.mouseY);
                    if (direction > 0) {
                        this._listenerSwipe[direction - 1]();
                    }
                }
            }
            for (var i = 0; i < this._touchMoveCallback.length; i++) {
                this._touchMoveCallback[i](e);
            }
        };
        /**
        * @language zh_CN
        * 更新游戏手柄信息
        */
        Input.prototype.update = function () {
            for (var key in this._keyStatus) {
                if (this._keyStatus[key]) {
                    if (this._listenerKey[key] != undefined) {
                        for (var i = 0; i < this._listenerKey.length; ++i) {
                            this._listenerKey[i](key);
                        }
                    }
                }
            }
        };
        /**
        * @language zh_CN
        * 添加鼠标移动事件的侦听器函数
        * @param func {Function} 处理鼠标移事件的侦听器函数
        */
        Input.prototype.addListenerMouseMove = function (func) {
            this._mouseMoveFunc.push(func);
        };
        /**
        * @language zh_CN
        * 添加鼠标滚轮事件的侦听器函数
        * @param func {Function} 处理鼠标滚轮事件的侦听器函数
        */
        Input.prototype.addListenerMouseWheel = function (func) {
            this._mouseWheelFunc.push(func);
        };
        /**
        * @language zh_CN
        * 添加键盘鼠标点击事件的侦听器函数
        * @param func {Function} 处理键盘鼠标点击事件的侦听器函数
        */
        Input.prototype.addListenerKeyClick = function (func) {
            this._listenerKeyClick.push(func);
        };
        /**
        * xxxxxxxx
        * @param func xxx
        * @returns xxx
        */
        Input.prototype.addListenerKey = function (func) {
            this._listenerKey.push(func);
        };
        /**
        * @language zh_CN
        * 添加键盘鼠标弹起事件的侦听器函数
        * @param func {Function} 处理键盘鼠标弹起事件的侦听器函数
        */
        Input.prototype.addListenerKeyUp = function (func) {
            this._listenerKeyUp.push(func);
        };
        /**
        * @language zh_CN
        * 添加键盘鼠标按下事件的侦听器函数
        * @param func {Function} 处理键盘鼠标按下事件的侦听器函数
        */
        Input.prototype.addListenerKeyDown = function (func) {
            this._listenerKeyDown.push(func);
        };
        /**
        * @language zh_CN
        * 添加向上划动的手势事件
        * @param func {Function} 处理向上划动的手势事件的侦听器函数
        */
        Input.prototype.addListenerSwipeUp = function (func) {
            this._listenerSwipe.push(func);
        };
        /**
        * @language zh_CN
        * 添加向下划动的手势事件
        * @param func {Function} 处理向下划动的手势事件的侦听器函数
        */
        Input.prototype.addListenerSwipeDown = function (func) {
            this._listenerSwipe.push(func);
        };
        /**
        * @language zh_CN
        * 添加向左划动的手势事件
        * @param func {Function} 处理向下划动的手势事件的侦听器函数
        */
        Input.prototype.addListenerSwipeLeft = function (func) {
            this._listenerSwipe.push(func);
        };
        /**
        * @language zh_CN
        * 添加向右划动的手势事件
        * @param func {Function} 处理向下划动的手势事件的侦听器函数
        */
        Input.prototype.addListenerSwipeRight = function (func) {
            this._listenerSwipe.push(func);
        };
        /**
        * @language zh_CN
        * 添加设备旋转事件
        * @param func {Function} 设备旋转事件的侦听器函数
        */
        Input.prototype.addListenerDeviceorientation = function (func) {
            this._ondeviceorientation.push(func);
        };
        /**
        * @language zh_CN
        * 添加设备移动事件
        * @param func {Function} 设备移动事件的侦听器函数
        */
        Input.prototype.addListenerDevicemotion = function (func) {
            this._ondevicemotion.push(func);
        };
        /**
        * @language zh_CN
        * 添加游戏手柄按钮点击事件
        * @param func {Function} 游戏手柄点击事件的侦听器函数
        */
        Input.prototype.addListenerGamePadButtons = function (func) {
            this._listenerGamepadButtons.push(func);
        };
        Input.prototype.mouseEnd = function (e) {
            this.mouseX = e.clientX - egret3d.Egret3DDrive.clientRect.left;
            this.mouseY = e.clientY - egret3d.Egret3DDrive.clientRect.top;
            var k = 0;
            switch (e.button) {
                case 0:
                    k = KeyCode.Key_Mouse_Left;
                    break;
                case 2:
                    k = KeyCode.Key_Mouse_Right;
                    break;
                case 1:
                    k = KeyCode.Key_Mouse_Mid;
                    break;
            }
            if (k != 0) {
                if (this._keyStatus[k]) {
                    for (var i = 0; i < this._listenerKeyClick.length; ++i) {
                        this._listenerKeyClick[i](k);
                    }
                }
                this._keyStatus[k] = false;
                for (var i = 0; i < this._listenerKeyUp.length; ++i) {
                    this._listenerKeyUp[i](k);
                }
            }
        };
        Input.prototype.mouseStart = function (e) {
            this.mouseX = e.clientX - egret3d.Egret3DDrive.clientRect.left;
            this.mouseY = e.clientY - egret3d.Egret3DDrive.clientRect.top;
            var k = 0;
            switch (e.button) {
                case 0:
                    k = KeyCode.Key_Mouse_Left;
                    break;
                case 2:
                    k = KeyCode.Key_Mouse_Right;
                    break;
                case 1:
                    k = KeyCode.Key_Mouse_Mid;
                    break;
            }
            if (k != 0) {
                this._keyStatus[k] = true;
                for (var i = 0; i < this._listenerKeyDown.length; ++i) {
                    this._listenerKeyDown[i](k);
                }
            }
        };
        Input.prototype.mouseMove = function (e) {
            this.mouseLastX = this.mouseX;
            this.mouseLastY = this.mouseY;
            this.mouseX = e.clientX - egret3d.Egret3DDrive.clientRect.left;
            this.mouseY = e.clientY - egret3d.Egret3DDrive.clientRect.top;
            this.mouseOffsetX = this.mouseX - this.mouseLastX;
            this.mouseOffsetY = this.mouseY - this.mouseLastY;
            for (var i = 0; i < this._mouseMoveFunc.length; ++i) {
                this._mouseMoveFunc[i]();
            }
        };
        Input.prototype.mouseWheel = function (e) {
            this.wheelDelta = e.wheelDelta;
            for (var i = 0; i < this._mouseWheelFunc.length; ++i) {
                this._mouseWheelFunc[i]();
            }
        };
        Input.prototype.keyDown = function (e) {
            this._keyStatus[e.keyCode] = true;
            for (var i = 0; i < this._listenerKeyDown.length; ++i) {
                this._listenerKeyDown[i](e.keyCode);
            }
        };
        Input.prototype.keyUp = function (e) {
            if (this._keyStatus[e.keyCode]) {
                for (var i = 0; i < this._listenerKeyClick.length; ++i) {
                    this._listenerKeyClick[i](e.keyCode);
                }
            }
            this._keyStatus[e.keyCode] = false;
            for (var i = 0; i < this._listenerKeyUp.length; ++i) {
                this._listenerKeyUp[i](e.keyCode);
            }
        };
        //返回角度
        Input.prototype.GetSlideAngle = function (dx, dy) {
            return Math.atan2(dy, dx) * 180 / Math.PI;
        };
        /**
        * @language zh_CN
        * 根据起点和终点返回方向
        * @param  startX 起点X坐标
        * @param  startY 起点Y坐标
        * @param  endX   终点X坐标
        * @param  endY   终点Y坐标
        * @returns result {number} 1：向上，2：向下，3：向左，4：向右,0：未滑动
        */
        Input.prototype.GetSlideDirection = function (startX, startY, endX, endY) {
            var dy = startY - endY;
            var dx = endX - startX;
            var result = 0;
            //如果滑动距离太短
            if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                return result;
            }
            var angle = this.GetSlideAngle(dx, dy);
            if (angle >= -45 && angle < 45) {
                result = 4;
            }
            else if (angle >= 45 && angle < 135) {
                result = 1;
            }
            else if (angle >= -135 && angle < -45) {
                result = 2;
            }
            else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            }
            return result;
        };
        Input.prototype.isEnlarge = function (op1, op2, np1, np2) {
            //函数传入上一次触摸两点的位置与本次触摸两点的位置计算出用户的手势
            var leng1 = Math.sqrt((op1.x - op2.x) * (op1.x - op2.x) + (op1.y - op2.y) * (op1.y - op2.y));
            var leng2 = Math.sqrt((np1.x - np2.x) * (np1.x - np2.x) + (np1.y - np2.y) * (np1.y - np2.y));
            if (leng1 < leng2) {
                //放大手势
                return true;
            }
            else {
                //缩小手势
                return false;
            }
        };
        Input._instance = null;
        return Input;
    })();
    egret3d.Input = Input;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.OrientationController
     * @classdesc
     * 陀螺仪控制器
     */
    var OrientationController = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function OrientationController() {
            this.orientation = new egret3d.Vector3D();
            this.screenOrientation = 0;
            this.openDebug = false;
            /**
            * @language zh_CN
            * 偏移旋转
            */
            this.offsetRotation = new egret3d.Vector3D();
            /**
            * @language zh_CN
            * 陀螺仪当前旋转角度
            */
            this.fixOritation = new egret3d.Vector3D();
            this.state = -1;
            this.degtorad = Math.PI / 180; // Degree-to-Radian conversion
            this.q = new egret3d.Quaternion();
            this.q1 = new egret3d.Quaternion();
            this.outQ = new egret3d.Quaternion();
            this.front = new egret3d.Vector3D(0, 0, 200);
            this.test = new egret3d.Vector3D();
            if (this.openDebug) {
                this.accDiv = document.createElement("div");
                this.accGravityDiv = document.createElement("div");
                this.rotationRateDiv = document.createElement("div");
                this.orientationRateDiv = document.createElement("div");
                this.stateDiv = document.createElement("div");
                this.accDiv.style.color = "red";
                this.accGravityDiv.style.color = "red";
                this.rotationRateDiv.style.color = "red";
                this.orientationRateDiv.style.color = "red";
                this.stateDiv.style.color = "red";
                this.stateDiv.style.fontSize = "52";
                document.body.appendChild(this.accDiv);
                document.body.appendChild(this.accGravityDiv);
                document.body.appendChild(this.rotationRateDiv);
                document.body.appendChild(this.orientationRateDiv);
                document.body.appendChild(this.stateDiv);
            }
        }
        /**
        * @language zh_CN
        * 初始化
        */
        OrientationController.prototype.start = function () {
            var _this = this;
            this.orientationchangeHandler();
            window.addEventListener("orientationchange", function () { return _this.orientationchangeHandler(); });
            window.addEventListener("devicemotion", function (e) { return _this.motionHandler(e); });
            window.addEventListener("deviceorientation", function (e) { return _this.orientationHandler(e); });
        };
        /**
        * @language zh_CN
        * 释放
        */
        OrientationController.prototype.stop = function () {
            var _this = this;
            window.removeEventListener("orientationchange", function () { return _this.orientationchangeHandler(); });
            window.removeEventListener("devicemotion", function (e) { return _this.motionHandler(e); });
            window.removeEventListener("deviceorientation", function (e) { return _this.orientationHandler(e); });
        };
        /**
        * @language zh_CN
        */
        OrientationController.prototype.orientationchangeHandler = function () {
            if (window.orientation != undefined)
                this.screenOrientation = window.orientation;
            //.this.state = window.orientation;
        };
        /**
        * @language zh_CN
        *
        * @param event
        */
        OrientationController.prototype.motionHandler = function (event) {
            this.acc = event.acceleration;
            this.accGravity = event.accelerationIncludingGravity;
            this.rotationRate = event.rotationRate;
        };
        /**
        * @language zh_CN
        *
        * @param event
        * @returns
        */
        OrientationController.prototype.orientationHandler = function (event) {
            this.orientation.x = event.alpha;
            this.orientation.y = event.beta;
            this.orientation.z = event.gamma;
            if (this.openDebug)
                this.debug();
        };
        OrientationController.prototype.debug = function () {
            //this.accDiv.innerHTML = "<br><br><br> acc-x:" + this.acc.x + "<br>acc-y:" + this.acc.y + "<br>acc-z:" + this.acc.z ;
            this.accGravityDiv.innerHTML = "<br><br> Gravity-x:" + this.orientation.x * egret3d.Matrix3DUtils.RADIANS_TO_DEGREES + "<br>Gravity-y:" + this.orientation.y + "<br>Gravity-z:" + this.orientation.z;
            //this.rotationRateDiv.innerHTML = "<br> Rate-x:" + this.rotationRate.alpha + "<br>Rate-y:" + this.rotationRate.gamma + "<br>Rate-z:" + this.rotationRate.beta;
            this.orientationRateDiv.innerHTML = "<br> orientation-x:" + this.fixOritation.x + "<br>orientation-y:" + this.fixOritation.y + "<br>orientation-z:" + this.fixOritation.z;
            //this.orientationRateDiv.innerHTML = "<br> orientation-x:" + this.fixOritation.x * Matrix3DUtils.RADIANS_TO_DEGREES + "<br>orientation-y:" + this.fixOritation.y * Matrix3DUtils.RADIANS_TO_DEGREES + "<br>orientation-z:" + this.fixOritation.z * Matrix3DUtils.RADIANS_TO_DEGREES;
            this.stateDiv.innerHTML = "<br> state: " + this.state;
        };
        /**
        * @language zh_CN
        *
        * @returns number
        */
        OrientationController.prototype.getOrientation = function () {
            switch (window.screen.msOrientation) {
                case 'landscape-primary':
                    return -90;
                case 'landscape-secondary':
                    return 90;
                case 'portrait-secondary':
                    return 180;
                case 'portrait-primary':
                    return 0;
            }
            // this returns 90 if width is greater then height 
            // and window orientation is undefined OR 0
            // if (!window.orientation && window.innerWidth > window.innerHeight)
            //   return 90;
            return window.orientation || 0;
        };
        /**
        * @language zh_CN
        * 由陀螺仪的角度值计算出旋转四元数
        * @param alpha
        * @param beta
        * @param gamma
        * @returns 旋转四元数
        */
        OrientationController.prototype.getQuaternion = function (alpha, beta, gamma) {
            var _x = beta ? beta * this.degtorad : 0; // beta value
            var _y = gamma ? gamma * this.degtorad : 0; // gamma value
            var _z = alpha ? alpha * this.degtorad : 0; // alpha value
            var orient = -this.getOrientation() * this.degtorad; // this.getOrientation()) * this.degtorad ; // O
            this.state = this.getOrientation();
            var cX = Math.cos(_x / 2);
            var cY = Math.cos(_y / 2);
            var cZ = Math.cos(_z / 2);
            var sX = Math.sin(_x / 2);
            var sY = Math.sin(_y / 2);
            var sZ = Math.sin(_z / 2);
            //this.q1.fromAxisAngle(Vector3D.Y_AXIS, alpha * this.degtorad);
            //
            // ZXY quaternion construction.
            //
            this.q.w = cX * cY * cZ - sX * sY * sZ;
            this.q.x = sX * cY * cZ - cX * sY * sZ;
            this.q.y = cX * sY * cZ + sX * cY * sZ;
            this.q.z = cX * cY * sZ + sX * sY * cZ;
            var zee = new egret3d.Vector3D(0, 0, 1);
            var q0 = new egret3d.Quaternion();
            q0.fromAxisAngle(zee, orient);
            this.q.multiply(this.q, q0); // camera looks out the back of the device, not the top
            zee.setTo(-1, 0, 0);
            q0.fromAxisAngle(zee, 90 * this.degtorad);
            this.q.multiply(this.q, q0);
            return this.q;
        };
        /**
        * @language zh_CN
        * 数据更新
        * @param camera3D 当前相机
        */
        OrientationController.prototype.update = function (camera3D) {
            this.getQuaternion(this.orientation.x, this.orientation.y, this.orientation.z);
            this.q.toEulerAngles(this.fixOritation);
            camera3D.rotationX = -this.fixOritation.x + this.offsetRotation.x;
            camera3D.rotationZ = -this.fixOritation.y + this.offsetRotation.z;
            camera3D.rotationY = -this.fixOritation.z + this.offsetRotation.y;
        };
        return OrientationController;
    })();
    egret3d.OrientationController = OrientationController;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.AudioManager
    * @classdesc
    * Audio管理类 支持HTML5 Audio 和 Web Audio
    */
    var AudioManager = (function () {
        /**
        * @language zh_CN
        * constructor
        */
        function AudioManager() {
            /**
            * @language zh_CN
            * 音量
            */
            this.volume = 1;
            this.codecs = {};
            if (this.hasAudioContext()) {
                if (typeof AudioContext !== 'undefined') {
                    this.context = new AudioContext();
                }
            }
        }
        /**
        * @language zh_CN
        * 是否支持 HTML5 Audio tag API
        * @returns {boolean}
        */
        AudioManager.prototype.hasAudio = function () {
            return (typeof Audio !== 'undefined');
        };
        /**
        * @language zh_CN
        * 是否支持 Web Audio API
        * @returns {boolean}
        */
        AudioManager.prototype.hasAudioContext = function () {
            return !!(typeof AudioContext !== 'undefined');
        };
        /**
        * @language zh_CN
        * 浏览器是否可以播放这种音频类型
        * @param url 音频路径
        * @param audio {HTMLAudioElement}
        * @returns {boolean}
        */
        AudioManager.prototype.isSupported = function (url, audio) {
            if (this.codecs == null) {
                if (audio == null)
                    audio = new Audio();
                this.codecs = {
                    mp3: !!audio.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                    opus: !!audio.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                    ogg: !!audio.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                    wav: !!audio.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
                    aac: !!audio.canPlayType('audio/aac;').replace(/^no$/, ''),
                    m4a: !!(audio.canPlayType('audio/x-m4a;') || audio.canPlayType('audio/m4a;') || audio.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    mp4: !!(audio.canPlayType('audio/x-mp4;') || audio.canPlayType('audio/mp4;') || audio.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    weba: !!audio.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
                };
            }
            var ext = url.match(/^data:audio\/([^;,]+);/i);
            if (!ext) {
                ext = url.split('?', 1)[0].match(/\.([^.]+)$/);
            }
            if (ext) {
                ext = ext[1].toLowerCase();
            }
            return this.codecs[ext];
        };
        /**
        * @language zh_CN
        * 创建一个新的Sound对象
        * @param {String}   音频文件路径
        * @param {Function} 音频文件加载成功的事件处理函数
        * @param {Function} 音频文件加载失败的事件处理函数
        * @returns {Sound}
        */
        AudioManager.prototype.createSound = function (url, success, error) {
            return new egret3d.Sound(url, success, error);
        };
        /**
        * @language zh_CN
        * 创建一个新的 Channel 对象 播放声音
        * @param {sound} 要播放的Sound对象.
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop]  是否循环播放.
        * @returns {Channel}
        */
        AudioManager.prototype.playSound = function (sound, options) {
            options = options || {};
            var channel = new egret3d.Channel(sound, options);
            channel.play();
            return channel;
        };
        /**
        * @language zh_CN
        * 创建一个新的 Channel3d 对象 在指定的位置播放声音
        * @param {Sound} 要播放的 Sound 对象
        * @param {position} 声音在三维空间中的位置
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop] 是否循环播放.
        * @returns {Channel}
        */
        AudioManager.prototype.playSound3d = function (sound, position, options) {
            options = options || {};
            var channel = new egret3d.Channel3d(sound, options);
            channel.position = position;
            if (options.volume) {
                channel.setVolume(options.volume);
            }
            if (options.loop) {
                channel.setLoop(options.loop);
            }
            if (options.maxDistance) {
                channel.maxDistance = options.maxDistance;
            }
            if (options.minDistance) {
                channel.minDistance = options.minDistance;
            }
            if (options.rollOffFactor) {
                channel.rollOffFactor = options.rollOffFactor;
            }
            channel.play();
            return channel;
        };
        Object.defineProperty(AudioManager, "instance", {
            get: function () {
                if (this._instance == null) {
                    this._instance = new AudioManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return AudioManager;
    })();
    egret3d.AudioManager = AudioManager;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Channel
     * @classdesc
     * 控制音频的 播放，暂停等
     */
    var Channel = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param sound {Sound}
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop] 是否循环播放.
        */
        function Channel(sound, options) {
            /**
            * @language zh_CN
            * 设置音量 从0到1
            */
            this.volume = 1.0;
            /**
            * @language zh_CN
            * 开始/关闭 循环属性 使声音播放结束时重新开始播放
            */
            this.loop = false;
            /**
            * @language zh_CN
            * 开始/关闭 循环属性 使声音播放结束时重新开始播放
            */
            /**
            * @language zh_CN
            * 设置音频 playbackRate
            */
            this.pitch = 1.0;
            options = options || {};
            if (options.volume)
                this.volume = options.volume;
            if (options.loop)
                this.loop = options.loop;
            if (options.pitch)
                this.pitch = options.pitch;
            this.sound = sound;
            this.paused = false;
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                this.context = egret3d.AudioManager.instance.context;
                this.startTime = 0;
                this.startOffset = 0;
                this.source = null;
                this.gain = this.context.createGain();
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.sound.audio) {
                    this.source = this.sound.audio.cloneNode(false);
                    this.source.pause();
                }
            }
        }
        /**
        * @language zh_CN
        * 开始播放声音
        */
        Channel.prototype.play = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    throw new Error("Call stop() before calling play()");
                }
                this.createSource();
                if (!this.source) {
                    return;
                }
                this.startTime = this.context.currentTime;
                this.source.start(0, this.startOffset % this.source.buffer.duration);
            }
            else if (egret3d.AudioManager.instance.hasAudio) {
                this.paused = false;
                this.source.play();
            }
            this.setVolume(this.volume);
            this.setLoop(this.loop);
            this.setPitch(this.pitch);
        };
        /**
        * @language zh_CN
        * 暂停播放声音
        */
        Channel.prototype.pause = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    this.startOffset += this.context.currentTime - this.startTime;
                    this.source.stop(0);
                    this.source = null;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    this.source.pause();
                }
            }
            this.paused = true;
        };
        /**
        * @language zh_CN
        * 继续播放声音  从暂停的位置继续播放声音
        */
        Channel.prototype.unpause = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source || !this.paused) {
                    throw new Error('Call pause() before unpausing.');
                }
                this.createSource();
                if (!this.source) {
                    return;
                }
                this.startTime = this.context.currentTime;
                this.source.start(0, this.startOffset % this.source.buffer.duration);
                // Initialize volume and loop
                this.setVolume(this.volume);
                this.setLoop(this.loop);
                this.setPitch(this.pitch);
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                this.source.play();
            }
            this.paused = false;
        };
        /**
        * @language zh_CN
        * 停止播放声音  执行 play() 从初始位置开始播放声音
        */
        Channel.prototype.stop = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    this.source.stop(0);
                    this.startOffset = 0;
                    this.source = null;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    this.source.pause();
                    this.source.currentTime = 0;
                }
            }
        };
        Channel.prototype.setLoop = function (value) {
            this.loop = value;
            if (this.source) {
                this.source.loop = value;
            }
        };
        Channel.prototype.setVolume = function (value) {
            this.volume = value;
            if (this.gain) {
                this.gain.gain.value = value * egret3d.AudioManager.instance.volume;
            }
            else if (this.source) {
                this.source.volume = value * egret3d.AudioManager.instance.volume;
            }
        };
        Channel.prototype.setPitch = function (value) {
            this.pitch = value;
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    this.source.playbackRate.value = value;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    this.source.playbackRate = value;
                }
            }
        };
        /**
        * @language zh_CN
        * 音频是否正在播放
        * @returns {boolean}
        */
        Channel.prototype.isPlaying = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                return (!this.paused);
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                return (!this.source.paused);
            }
        };
        /**
        * @language zh_CN
        * 音频持续时间
        * @returns {number}
        */
        Channel.prototype.getDuration = function () {
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (this.source) {
                    return this.source.buffer.duration;
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                if (this.source) {
                    var d = this.source.duration;
                    if (d === d) {
                        return d;
                    }
                }
            }
            return 0;
        };
        Channel.prototype.createSource = function () {
            var _this = this;
            if (this.sound.buffer) {
                this.source = this.context.createBufferSource();
                this.source.buffer = this.sound.buffer;
                this.source.connect(this.gain);
                this.gain.connect(this.context.destination);
                if (this.loop) {
                    this.source.onended = function () { return _this.play(); };
                }
            }
        };
        return Channel;
    })();
    egret3d.Channel = Channel;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Channel3d
     * @classdesc
     * 控制音频的 播放，暂停，三维空间中的位置
     */
    var Channel3d = (function (_super) {
        __extends(Channel3d, _super);
        /**
        * @language zh_CN
        * constructor
        * @param sound {Sound}
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop] 是否循环播放.
        */
        function Channel3d(sound, options) {
            _super.call(this, sound, options);
            this._position = new egret3d.Vector3D();
            this._velocity = new egret3d.Vector3D();
            if (egret3d.AudioManager.instance.hasAudioContext())
                this._panner = this.context.createPanner();
            this._maxDistance = 10000; // default maxDistance
            this._minDistance = 1;
            this._rollOffFactor = 1;
            this._listener = new egret3d.Vector3D();
        }
        Object.defineProperty(Channel3d.prototype, "listener", {
            /**
            * @language zh_CN
            * 监听者位置
            * @returns {Vector3D}
            */
            get: function () {
                return this._listener;
            },
            /**
            * @language zh_CN
            * 监听者位置
            * @param value {Vector3D}
            */
            set: function (value) {
                this._listener.copyFrom(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "position", {
            /**
            * @language zh_CN
            * 三维空间中的位置
            * @returns {Vector3D}
            */
            get: function () {
                return this._position;
            },
            /**
            * @language zh_CN
            * 三维空间中的位置
            * @param opsition {Vector3D}
            */
            set: function (position) {
                this._position.copyFrom(position);
                if (egret3d.AudioManager.instance.hasAudioContext()) {
                    this._panner.setPosition(position.x, position.y, position.z);
                }
                if (egret3d.AudioManager.instance.hasAudio()) {
                    if (this.source) {
                        var factor = this.fallOff(this._listener, this.position, this.minDistance, this.maxDistance, this.rollOffFactor);
                        this.source.volume = this.volume * factor;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "velocity", {
            /**
            * @language zh_CN
            * 传播方向
            * @returns {Vector3D}
            */
            get: function () {
                return this._velocity;
            },
            /**
            * @language zh_CN
            * 传播方向
            * @param velocity {Vector3D}
            */
            set: function (velocity) {
                this._velocity.copyFrom(velocity);
                if (egret3d.AudioManager.instance.hasAudioContext())
                    this._panner.setVelocity(velocity.x, velocity.y, velocity.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "maxDistance", {
            /**
            * @language zh_CN
            * 最大距离
            * @returns {Vector3D}
            */
            get: function () {
                return this._maxDistance;
            },
            /**
            * @language zh_CN
            * 最大距离
            * @param max{Number}
            */
            set: function (max) {
                this._maxDistance = max;
                if (egret3d.AudioManager.instance.hasAudioContext())
                    this._panner.maxDistance = max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "minDistance", {
            /**
            * @language zh_CN
            * 最小距离
            * @returns {Vector3D}
            */
            get: function () {
                return this._minDistance;
            },
            /**
            * @language zh_CN
            * 最小距离
            * @param min{Number}
            */
            set: function (min) {
                this._minDistance = min;
                if (egret3d.AudioManager.instance.hasAudioContext())
                    this._panner.refDistance = min;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Channel3d.prototype, "rollOffFactor", {
            /**
            * @language zh_CN
            * rollOff 系数
            * @returns {Number}
            */
            get: function () {
                return this._rollOffFactor;
            },
            /**
            * @language zh_CN
            * rollOff 系数
            * @param factor {Number}
            */
            set: function (factor) {
                this._rollOffFactor = factor;
                if (this._panner)
                    this._panner.rolloffFactor = factor;
            },
            enumerable: true,
            configurable: true
        });
        Channel3d.prototype.createSource = function () {
            this.source = this.context.createBufferSource();
            this.source.buffer = this.sound.buffer;
            // Connect up the nodes
            this.source.connect(this._panner);
            this._panner.connect(this.gain);
            this.gain.connect(this.context.destination);
        };
        // Fall off function which should be the same as the one in the Web Audio API,
        // taken from OpenAL
        Channel3d.prototype.fallOff = function (posOne, posTwo, refDistance, maxDistance, rolloffFactor) {
            var distance = egret3d.Vector3D.distance(posOne, posTwo);
            if (distance < refDistance) {
                return 1;
            }
            else if (distance > maxDistance) {
                return 0;
            }
            else {
                var numerator = refDistance + (rolloffFactor * (distance - refDistance));
                if (numerator !== 0) {
                    return refDistance / numerator;
                }
                else {
                    return 1;
                }
            }
        };
        return Channel3d;
    })(egret3d.Channel);
    egret3d.Channel3d = Channel3d;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @language zh_CN
     * @class egret3d.Sound
     * @classdesc
     * 音频数据
     */
    var Sound = (function () {
        /**
        * @language zh_CN
        * constructor
        * @param {String}   音频文件路径
        * @param {Function} 音频文件加载成功的事件处理函数
        * @param {Function} 音频文件加载失败的事件处理函数
        */
        function Sound(url, success, error) {
            var _this = this;
            /**
            * @language zh_CN
            * HTML音频数据
            */
            this.audio = null;
            this._success = success;
            this._error = error;
            this.isLoaded = false;
            if (egret3d.AudioManager.instance.hasAudioContext()) {
                if (egret3d.AudioManager.instance.isSupported(url, this.audio)) {
                    console.warn('Audio format not supported');
                    error(this);
                }
                else {
                    if (egret3d.AudioManager.instance.context) {
                        this.loadAudioFile(url);
                    }
                }
            }
            else if (egret3d.AudioManager.instance.hasAudio()) {
                try {
                    this.audio = new Audio();
                }
                catch (e) {
                    console.warn("No support for Audio element");
                    if (error)
                        error(this);
                    return;
                }
                if (egret3d.AudioManager.instance.isSupported(url, this.audio)) {
                    console.warn('Audio format not supported');
                    if (error)
                        error(this);
                }
                else {
                    this.audio.src = url;
                    this.audio.addEventListener("canplaythrough", function (ev) { return _this.oncanplaythrough(ev); });
                    this.audio.addEventListener("ended", function (ev) { return _this.onended(ev); });
                    this.audio.load();
                }
            }
        }
        Object.defineProperty(Sound.prototype, "buffer", {
            /**
            * @language zh_CN
            * Web音频数据
            * @returns {AudioBuffer}
            */
            get: function () {
                return this._buffer;
            },
            enumerable: true,
            configurable: true
        });
        Sound.prototype.loadAudioFile = function (url) {
            var _this = this;
            if (this.xhr == null)
                this.xhr = new XMLHttpRequest(); //通过XHR下载音频文件
            this.xhr.open('GET', url, true);
            this.xhr.responseType = 'arraybuffer';
            this.xhr.onload = function (e) { return _this.audioLoadend(e); };
            this.xhr.send();
        };
        Sound.prototype.audioLoadend = function (e) {
            var _this = this;
            egret3d.AudioManager.instance.context.decodeAudioData(this.xhr.response, function (buffer) { return _this.decodeSuccessCallback(buffer); });
        };
        Sound.prototype.decodeSuccessCallback = function (buffer) {
            this._buffer = buffer;
            if (this._success)
                this._success(this);
        };
        Sound.prototype.onended = function (ev) {
        };
        Sound.prototype.oncanplaythrough = function (ev) {
            if (!this.isLoaded) {
                this.isLoaded = true;
                if (this._success)
                    this._success(this);
            }
        };
        return Sound;
    })();
    egret3d.Sound = Sound;
})(egret3d || (egret3d = {}));
var egret3d;
(function (egret3d) {
    /**
     * @class egret3D.Egret3DEngine
     * @classdesc
     * 引擎库文件加载
     */
    var Egret3DEngine = (function () {
        function Egret3DEngine() {
        }
        Egret3DEngine.getXHR = function () {
            var xhr = null;
            if (window["XMLHttpRequest"]) {
                xhr = new window["XMLHttpRequest"]();
            }
            else {
                xhr = new ActiveXObject("MSXML2.XMLHTTP");
            }
            return xhr;
        };
        /**
         * @language zh_CN
         * 请求读取
         * @event complete 读取完成响应回调
         */
        Egret3DEngine.preload = function (complete) {
            this._complete = complete;
            if (this._xhr == null) {
                this._xhr = this.getXHR();
            }
            if (this._xhr == null) {
                alert("Your browser does not support XMLHTTP.");
                return;
            }
            if (this._xhr.readyState > 0) {
                this._xhr.abort();
            }
            this._xhr.open("GET", this._libUrl, true);
            this._xhr.addEventListener("progress", function (e) { return Egret3DEngine.onProgress(e); }, false);
            this._xhr.addEventListener("readystatechange", function (e) { return Egret3DEngine.onReadyStateChange(e); }, false);
            this._xhr.addEventListener("error", function (e) { return Egret3DEngine.onError(e); }, false);
            this._xhr.responseType = "text";
            this._xhr.send();
        };
        Egret3DEngine.onReadyStateChange = function (event) {
            if (this._xhr.readyState == 4) {
                if (this._xhr.status >= 400 || this._xhr.status == 0) {
                    console.log(this._libUrl, "load fail");
                }
                else {
                    this.loadComplete();
                }
            }
        };
        Egret3DEngine.loadComplete = function () {
            var libTex = this._xhr.responseText;
            this.applyClass(libTex);
        };
        Egret3DEngine.onProgress = function (event) {
            var e = event.loaded.toString() + event.total;
            console.log("progress event```" + e);
        };
        Egret3DEngine.onError = function (event) {
            console.log("load error", event);
        };
        Egret3DEngine.applyClass = function (source) {
            this.importList = source.split("///");
            this.importList.shift();
            for (var i = 0; i < this.importList.length; i++) {
                this.importList[i] = this.importList[i].replace("\r\n", "");
                this.importList[i] = this.importList[i].replace("import ", "/js/");
            }
            this.importList.pop();
            this.startLoadScript(null);
        };
        Egret3DEngine.startLoadScript = function (e) {
            var _this = this;
            if (this.importList.length > 0) {
                var egret3DScript = document.createElement("script");
                egret3DScript.src = this.importList.shift();
                egret3DScript.onload = function (e) { return _this.startLoadScript(e); };
                egret3DScript.onerror = function (e) { return _this.loadScriptError(e); };
                document.head.appendChild(egret3DScript);
            }
            else {
                console.log("all complete");
                this._complete();
            }
        };
        Egret3DEngine.loadScriptError = function (e) {
            var error = "load Script Error \r\n no file:" + e.srcElement.src;
            alert(error);
            this.startLoadScript(null);
        };
        Egret3DEngine.djs = "";
        Egret3DEngine._libUrl = "/js/Egret3D/egret3D.lib.js";
        return Egret3DEngine;
    })();
    egret3d.Egret3DEngine = Egret3DEngine;
})(egret3d || (egret3d = {}));
