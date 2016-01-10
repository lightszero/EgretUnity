declare module egret3d {
    /**
     * @class egret3d.DrawMode
     * @classdesc
     * 渲染类型
     */
    class DrawMode {
        static LINES: number;
        static POINTS: number;
        static TRIANGLES: number;
        static LINE_STRIP: number;
    }
    /**
     * @class egret3d.Egret3DDrive
     * @classdesc
     * 3d 驱动
     */
    class Egret3DDrive {
        static Direct3D_Opengl_Auto: string;
        static Direct3D_9_0: string;
        static Direct3D_10_0: string;
        static Direct3D_11_0: string;
        static OpenGLES_2_0: string;
        static OpenGLES_3_0: string;
        static OpenGL: string;
        static context3D: Context3D;
        static canvas: HTMLCanvasElement;
        static VERTEX_SHADER: number;
        static FRAGMENT_SHADER: number;
        static BLEND: number;
        static FLOAT: number;
        static CULL_FACE: number;
        static FRONT: number;
        static BACK: number;
        static DEPTH_BUFFER_BIT: number;
        static ELEMENT_ARRAY_BUFFER: number;
        static UNSIGNED_SHORT: number;
        static NEAREST: number;
        static REPEAT: number;
        static ONE: number;
        static ZERO: number;
        static SRC_ALPHA: number;
        static ONE_MINUS_SRC_ALPHA: number;
        static SRC_COLOR: number;
        static ONE_MINUS_SRC_COLOR: number;
        static ColorFormat_RGB565: number;
        static ColorFormat_RGBA5551: number;
        static ColorFormat_RGBA4444: number;
        static ColorFormat_RGBA8888: number;
        static ColorFormat_DXT1_RGB: number;
        static ColorFormat_DXT1_RGBA: number;
        static ColorFormat_DXT3_RGBA: number;
        static ColorFormat_DXT5_RGBA: number;
        static canvasRectangle: Rectangle;
        static clientRect: ClientRect;
        /**
        * @language zh_CN
        * get GPU Context3D
        * 获取GPU交换链表程序
        * @param GPU_CONFIG
        * @param canvasRec
        * @event call
        */
        static requstContext3D(GPU_CONFIG: string, canvasRec: Rectangle, call: Function): void;
        private static requstWEBGL(viewPort);
        /**
        * @language zh_CN
        * 请求全屏
        */
        static requestFullScreen(): void;
        /**
        * @language zh_CN
        * 退出全屏
        */
        static exitFullscreen(): void;
    }
}
declare module egret3d {
    interface IProgram3D {
        /**
        * @readOnly
        */
        program: any;
        /**
        * @readOnly
        */
        vertextAttrib: any;
        /**
        * @readOnly
        */
        vertextAttribActive: boolean;
        /**
        * @readOnly
        */
        pMatrixUniform: any;
        /**
        * @readOnly
        */
        mMatrixUniform: any;
    }
}
declare module egret3d {
    interface IndexBuffer3D {
        /**
        * @readOnly
        */
        buffer: any;
    }
}
declare module egret3d {
    class MipmapData {
        data: Uint8Array;
        width: number;
        height: number;
        constructor(data: Uint8Array, width: number, height: number);
    }
}
declare module egret3d {
    enum InternalFormat {
        PixelArray = 0,
        CompressData = 1,
        ImageData = 2,
    }
    interface Texture2D {
        /**
        * @readOnly
        */
        gpu_index: number;
        /**
        * @readOnly
        */
        gpu_border: number;
        /**
        * @readOnly
        */
        gpu_texture: any;
        /**
        * @readOnly
        */
        gpu_colorformat: number;
        /**
        * @readOnly
        */
        gpu_internalformat: InternalFormat;
        /**
        * @readOnly
        */
        width: number;
        /**
        * @readOnly
        */
        height: number;
        /**
        * @readOnly
        */
        image: HTMLImageElement;
        /**
        * @readOnly
        */
        mipmapDatas: Array<MipmapData>;
        /**
        * @readOnly
        */
        frameBuffer: WebGLFramebuffer;
        /**
        * @readOnly
        */
        renderbuffer: WebGLRenderbuffer;
    }
}
declare module egret3d {
    interface ICubeTexture {
        /**
        * @readOnly
        */
        gpu_texture: any;
        /**
        * @readOnly
        */
        image: HTMLImageElement;
        /**
        * @readOnly
        */
        image_front: HTMLImageElement;
        /**
        * @readOnly
        */
        image_back: HTMLImageElement;
        /**
        * @readOnly
        */
        image_left: HTMLImageElement;
        /**
        * @readOnly
        */
        image_right: HTMLImageElement;
        /**
        * @readOnly
        */
        image_up: HTMLImageElement;
        /**
        * @readOnly
        */
        image_down: HTMLImageElement;
    }
}
declare module egret3d {
    interface VertexBuffer3D {
        /**
        * @readOnly
        */
        buffer: any;
    }
}
declare module egret3d {
    interface Shader {
        /**
        * @readOnly
        */
        id: number;
        /**
        * @readOnly
        */
        shader: any;
    }
}
declare module egret3d.openGLES {
    class IndexBuffer3D implements egret3d.IndexBuffer3D {
        buffer: WebGLBuffer;
        constructor(buffer: WebGLBuffer);
    }
}
declare module egret3d.openGLES {
    class Program3D implements egret3d.IProgram3D {
        pMatrixUniform: number;
        mMatrixUniform: number;
        vertextAttrib: any;
        vertextAttribActive: boolean;
        program: WebGLProgram;
        constructor(pg3D: WebGLProgram);
    }
}
declare module egret3d.openGLES {
    class Shader implements egret3d.Shader {
        static ID_COUNT: number;
        id: number;
        private _shader;
        constructor(shader: WebGLShader);
        shader: WebGLShader;
    }
}
declare module egret3d.openGLES {
    class Texture2D implements egret3d.Texture2D {
        private context3D;
        gpu_index: number;
        gpu_border: number;
        gpu_colorformat: number;
        gpu_internalformat: InternalFormat;
        gpu_texture: any;
        image: HTMLImageElement;
        mipmapDatas: Array<MipmapData>;
        frameBuffer: WebGLFramebuffer;
        renderbuffer: WebGLRenderbuffer;
        width: number;
        height: number;
        constructor(texture2D: WebGLTexture, context3D: any);
    }
}
declare module egret3d.openGLES {
    class CubeTexture implements egret3d.ICubeTexture {
        gpu_texture: any;
        image: HTMLImageElement;
        image_front: HTMLImageElement;
        image_back: HTMLImageElement;
        image_left: HTMLImageElement;
        image_right: HTMLImageElement;
        image_up: HTMLImageElement;
        image_down: HTMLImageElement;
        constructor(cubeTexture: WebGLTexture);
    }
}
declare module egret3d.openGLES {
    class VertexBuffer3D implements egret3d.VertexBuffer3D {
        buffer: WebGLBuffer;
        constructor(buffer: WebGLBuffer);
    }
}
declare module egret3d {
    interface Context3D {
        gl: WebGLRenderingContext;
        version: string;
        isLost: boolean;
        /**
        * @language zh_CN
        * 视口设置定义
        * @param x position X
        * @param y position Y
        * @param width  3D canvas width
        * @param height  3D canvas  height
        */
        viewPort(x: number, y: number, width: number, height: number): any;
        /**
        * @language zh_CN
        * 创建 显卡程序
        * @param vsShader
        * @param fsShader
        */
        creatProgram(vsShader: Shader, fsShader: Shader): IProgram3D;
        /**
        * @language zh_CN
        * 创建 顶点索引流
        * @param vertexData
        */
        creatIndexBuffer(indexData: Array<number>): IndexBuffer3D;
        /**
        * @language zh_CN
        * 创建 顶点数据流
        * @param vertexData
        */
        creatVertexBuffer(vertexData: Array<number>): VertexBuffer3D;
        /**
        * @language zh_CN
        * 创建 2维贴图
        */
        creatTexture2D(): Texture2D;
        /**
        * @language zh_CN
        * 上传贴图信息给GPU 显存
        * @param mipLevel load 贴图层级
        * @param textureMipmap 上传mipmap
        */
        upLoadTextureData(mipLevel: number, textureMipmap: Texture2D): any;
        /**
        * @language zh_CN
        * 上传压缩贴图信息给GPU 显存
        * @param mipLevel load 贴图层级
        * @param textureMipmap 上传mipmap
        */
        upLoadCompressedTexture2D(mipLevel: number, textureMipmap: Texture2D): any;
        /**
        * @language zh_CN
        * 调协贴图采样的状态
        * @param min_filter
        * @param mag_filter
        * @param wrap_u_filter
        * @param wrap_v_filter
        */
        setTexture2DSamplerState(min_filter: number, mag_filter: number, wrap_u_filter: number, wrap_v_filter: number): any;
        /**
        * @language zh_CN
        * 创建 Cube贴图
        */
        creatCubeTexture(): ICubeTexture;
        /**
        * @language zh_CN
        * 上传cube贴图
        * @param tex
        */
        uploadCubetexture(tex: ICubeTexture): any;
        /**
        * @language zh_CN
        * 创建 离屏渲染缓冲
        * @param width
        * @param height
        * @param format 渲染的buffer
        */
        createFramebuffer(width: number, height: number, format: FrameBufferFormat): Texture2D;
        /**
        * @language zh_CN
        * 渲染到纹理
        * @param texture
        * @param enableDepthAndStencil
        * @param surfaceSelector
        */
        setRenderToTexture(texture: Texture2D, enableDepthAndStencil: Boolean, surfaceSelector: number): any;
        /**
        * @language zh_CN
        * 恢复渲染
        */
        setRenderToBackBuffer(): any;
        /**
        * @language zh_CN
        * 创建图形渲染着色器程序
        * @param source
        */
        creatVertexShader(source: string): Shader;
        /**
        * @language zh_CN
        *
        * @param source
        */
        creatFragmentShader(source: string): Shader;
        /**
        * @language zh_CN
        * 清除渲染区域的颜色 深度
        * @param r
        * @param g
        * @param b
        * @param a
        */
        clear(r: number, g: number, b: number, a: number): any;
        /**
        * @language zh_CN
        * 清除渲染区域 深度
        * @param depth 深度值
        */
        clearDepth(depth: number): any;
        /**
        * @language zh_CN
        * 清除渲染区域 模板
        * @param stencil 模板值
        */
        clearStencil(stencil: number): any;
        /**
        * @language zh_CN
        * 使用显卡着色器
        * @param programe
        */
        setProgram(programe: IProgram3D): any;
        /**
        * @language zh_CN
        * 获取矩阵变量ID
        * @param programe  着色器
        * @param name  变量名
        */
        getUniformLocation(programe3D: IProgram3D, name: string): number;
        /**
        * @language zh_CN
        * 设置shader float 变量的值
        * @param location  变量
        * @param x  值
        */
        uniform1f(location: any, x: number): void;
        /**
        * @language zh_CN
        * 设置shader float 数组的值
        * @param location  变量
        * @param v  值
        */
        uniform1fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 设置shader int 变量的值
        * @param location  变量
        * @param x  值
        */
        uniform1i(location: any, x: number): void;
        /**
        * @language zh_CN
        * 设置shader int 数组的值
        * @param location  变量
        * @param v  值
        */
        uniform1iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 设置shader vec2 变量的值
        * @param location  变量
        * @param x  vec2.x值
        * @param y  vec2.y值
        */
        uniform2f(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        * 设置shader vec2 数组的值
        * @param location  变量
        * @param v  值
        */
        uniform2fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param x
        * @param y
        */
        uniform2i(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param v
        */
        uniform2iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param x
        * @param y
        * @param z
        */
        uniform3f(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param v
        */
        uniform3fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param x
        * @param y
        * @param z
        */
        uniform3i(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param v
        */
        uniform3iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param x
        * @param y
        * @param z
        * @param w
        */
        uniform4f(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param v
        */
        uniform4fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param x
        * @param y
        * @param z
        * @param w
        */
        uniform4i(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param v
        */
        uniform4iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param transpose
        * @param value
        */
        uniformMatrix2fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param transpose
        * @param value
        */
        uniformMatrix3fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        *
        * @param location  变量
        * @param transpose
        * @param value
        */
        uniformMatrix4fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 设置 绘制混合模式
        * @param src 源颜色
        * @param dst 目标颜色
        */
        setBlendFactors(src: number, dst: number): any;
        /**
        * @language zh_CN
        * 设置 绘制剔除模式
        * @param mode 模式
        */
        setCulling(mode: number): any;
        /**
        * @language zh_CN
        * 开启 绘制模式
        * @param cap
        */
        enbable(cap: number): any;
        /**
        * @language zh_CN
        * 关闭 绘制模式
        * @param cap
        */
        disable(cap: number): any;
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        enableDepthTest(flag: boolean, compareMode: number): any;
        /**
        * @language zh_CN
        * 获取顶点着色器变量 索引
        * @param programe
        * @param attribName
        */
        getShaderAttribLocation(programe: IProgram3D, attribName: string): any;
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
        vertexAttribPointer(programe3D: IProgram3D, index: number, size: number, dataType: number, normalized: boolean, stride: number, offset: number): any;
        /**
        * @language zh_CN
        * 实时传入显卡顶点着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        setVertexShaderConstData(floats: Float32Array, offest: number, numLen: number): any;
        /**
        * @language zh_CN
        * 实时传入显卡片段着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        setFragmentShaderConstData(floats: Float32Array, offest: number, numLen: number): any;
        /**
        * @language zh_CN
        * 设置贴图采样
        * @param samplerIndex
        * @param uniLocation
        * @param index
        * @param texture
        */
        setTexture2DAt(samplerIndex: number, uniLocation: number, index: number, texture: Texture2D): any;
        /**
        * @language zh_CN
        *
        * @param samplerIndex
        * @param uniLocation
        * @param index
        * @param texture
        */
        setCubeTextureAt(samplerIndex: number, uniLocation: number, index: number, texture: ICubeTexture): any;
        /**
        * @language zh_CN
        * 设置矩形裁切区域
        * @param rectangle
        */
        setScissorRectangle(rectangle: Rectangle): any;
        /**
        * @language zh_CN
        * 设置模板测试
        */
        setStencilReferenceValue(): any;
        /**
        * @language zh_CN
        * 绑定顶点buffer
        * @param vertexBuffer
        */
        bindVertexBuffer(vertexBuffer: VertexBuffer3D): any;
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param first 第一个顶点索引
        * @param length 顶点个数
        */
        drawArrays(type: number, first: number, length: number): any;
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param indexBuffer 索引数据
        * @param offset 顶点偏移
        * @param length 顶点个数
        */
        drawElement(type: number, indexBuffer: IndexBuffer3D, offset: number, length: number): any;
        /**
        * @language zh_CN
        * 绘制提交
        */
        flush(): any;
    }
    /**
    * @class egret3d.Context3DChild_OpenGLES_2_0
    * @classdesc
    * Context3DChild_OpenGLES_2_0  implements egret3d.Context3D
    * 3d设备数据
    */
    class Context3DChild_OpenGLES_2_0 implements egret3d.Context3D {
        private programes;
        gl: WebGLRenderingContext;
        /**
        * @language zh_CN
        * constructor
        * @param context3D
        */
        constructor(context3D: WebGLRenderingContext);
        /**
        * @language zh_CN
        * 版本号
        * @readOnly
        * @param context3D
        */
        version: string;
        isLost: boolean;
        /**
        * @language zh_CN
        * 版本号
        * 视口设置定义
        * @param x position X
        * @param y position Y
        * @param width  3D canvas width
        * @param height  3D canvas  height
        */
        viewPort(x: number, y: number, width: number, height: number): void;
        /**
        * @language zh_CN
        * 创建 显卡程序
        * @param vsShader
        * @param fsShader
        */
        creatProgram(vsShader: Shader, fsShader: Shader): IProgram3D;
        /**
        * @language zh_CN
        * 创建 顶点索引流
        * @param indexData
        */
        creatIndexBuffer(indexData: Array<number>): IndexBuffer3D;
        /**
        * @language zh_CN
        * 创建 顶点数据流
        * @param vertexData
        */
        creatVertexBuffer(vertexData: Array<number>): VertexBuffer3D;
        /**
        * @language zh_CN
        * 设置2D纹理状态
        * @param min_filter
        * @param mag_filter
        * @param wrap_u_filter
        * @param wrap_v_filter
        */
        setTexture2DSamplerState(min_filter: number, mag_filter: number, wrap_u_filter: number, wrap_v_filter: number): void;
        /**
        * @language zh_CN
        * 提交2D纹理
        * @param mipLevel
        * @param texture
        */
        upLoadTextureData(mipLevel: number, texture: Texture2D): void;
        /**
        * @language zh_CN
        * 提交2D压缩纹理
        * @param mipLevel
        * @param texture
        */
        upLoadCompressedTexture2D(mipLevel: number, texture: Texture2D): void;
        /**
        * @language zh_CN
        * 创建 2维贴图
        */
        creatTexture2D(): Texture2D;
        /**
        * @language zh_CN
        * 创建 Cube贴图
        */
        creatCubeTexture(): ICubeTexture;
        /**
        * @language zh_CN
        *
        * @param tex
        */
        uploadCubetexture(tex: ICubeTexture): void;
        /**
        * @language zh_CN
        *
        * @param width
        * @param height
        * @param format
        */
        createFramebuffer(width: number, height: number, format: FrameBufferFormat): Texture2D;
        /**
        * @language zh_CN
        *
        * @param texture
        * @param enableDepthAndStencil
        * @param surfaceSelector
        */
        setRenderToTexture(texture: Texture2D, enableDepthAndStencil?: Boolean, surfaceSelector?: number): void;
        /**
        * @language zh_CN
        *
        */
        setRenderToBackBuffer(): void;
        /**
        * @language zh_CN
        *
        * @param source
        */
        creatVertexShader(source: string): Shader;
        /**
        * @language zh_CN
        *
        * @param source
        */
        creatFragmentShader(source: string): Shader;
        /**
        * @language zh_CN
        * 清除渲染区域的颜色 深度
        * @param r
        * @param g
        * @param b
        * @param a
        */
        clear(r: number, g: number, b: number, a: number): void;
        /**
        * @language zh_CN
        * 清除渲染区域的 深度
        * @param depth
        */
        clearDepth(depth: number): void;
        /**
        * @language zh_CN
        * 清除渲染区域的 模板
        * @param stencil
        */
        clearStencil(stencil: number): void;
        /**
        * @language zh_CN
        * 使用显卡着色器
        * @param program
        */
        setProgram(program: IProgram3D): void;
        /**
        * @language zh_CN
        * 获取矩阵变量ID
        * @param program
        * @param name
        */
        getUniformLocation(programe3D: IProgram3D, name: string): any;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        */
        uniform1f(location: any, x: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform1fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        */
        uniform1i(location: any, x: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform1iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        */
        uniform2f(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform2fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        */
        uniform2i(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform2iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        */
        uniform3f(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform3fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        */
        uniform3i(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform3iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        * @param w
        */
        uniform4f(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform4fv(location: any, v: any): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param x
        * @param y
        * @param z
        * @param w
        */
        uniform4i(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param v
        */
        uniform4iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param transpose
        * @param value
        */
        uniformMatrix2fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param transpose
        * @param value
        */
        uniformMatrix3fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 传值给shader
        * @param location
        * @param transpose
        * @param value
        */
        uniformMatrix4fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        * 设置 绘制混合模式
        * @param src
        * @param dst
        */
        setBlendFactors(src: number, dst: number): void;
        /**
        * @language zh_CN
        * 设置 绘制剔除模式
        * @param mode
        */
        setCulling(mode: number): void;
        /**
        * @language zh_CN
        * 开启 绘制模式
        * @param cap
        */
        enbable(cap: number): void;
        /**
        * @language zh_CN
        * 关闭 绘制模式
        * @param cap
        */
        disable(cap: number): void;
        /**
        * @language zh_CN
        * 开启 深度模式 及 深度测试比较模式
        * @param flag
        * @param compareMode
        */
        enableDepthTest(flag: boolean, compareMode?: number): void;
        /**
        * @language zh_CN
        * 获取顶点着色器变量 索引
        * @param programe
        * @param attribName
        * @returns 着色器变量
        */
        getShaderAttribLocation(programe: IProgram3D, attribName: string): any;
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
        vertexAttribPointer(programe3D: IProgram3D, index: number, size: number, dataType: number, normalized: boolean, stride: number, offset: number): void;
        /**
        * @language zh_CN
        * 实时传入显卡顶点着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        setVertexShaderConstData(floats: Float32Array, offest: number, numLen: number): void;
        /**
        * @language zh_CN
        * 实时传入显卡片段着色器变量数组数据
        * @param floats
        * @param offest
        * @param numLen
        */
        setFragmentShaderConstData(floats: Float32Array, offest: number, numLen: number): void;
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex
        * @param uniLocation
        * @param index
        * @param texture
        */
        setTexture2DAt(samplerIndex: number, uniLocation: number, index: number, texture: Texture2D): void;
        /**
        * @language zh_CN
        * 设置贴图采样 第一个参数并不是类型
        * @param samplerIndex
        * @param uniLocation
        * @param index
        * @param texture
        */
        setCubeTextureAt(samplerIndex: number, uniLocation: number, index: number, texture: ICubeTexture): void;
        /**
        * @language zh_CN
        * 设置矩形裁切区域
        * @param rectangle
        */
        setScissorRectangle(rectangle: Rectangle): void;
        /**
        * @language zh_CN
        * 设置模板测试
        */
        setStencilReferenceValue(): void;
        /**
        * @language zh_CN
        * 绑定顶点Buffer
        * @param vertexBuffer
        */
        bindVertexBuffer(vertexBuffer: VertexBuffer3D): void;
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param first 第一个顶点索引
        * @param length 顶点个数
        */
        drawArrays(type: number, first: number, length: number): void;
        /**
        * @language zh_CN
        * 绘制模型元素
        * @param type 图元类型
        * @param indexBuffer 索引数据
        * @param offset 顶点偏移
        * @param length 顶点个数
        */
        drawElement(type: number, indexBuffer: IndexBuffer3D, offset: number, length: number): void;
        /**
        * @language zh_CN
        * 绘制提交
        */
        flush(): void;
    }
}
declare module egret3d {
    enum BlendMode {
        ALPHA = 0,
        LAYER = 1,
        NORMAL = 2,
        MULTIPLY = 3,
        ADD = 4,
        SUB = 5,
        DIV = 6,
        SCREEN = 7,
    }
    /**
     * @class egret3d.ContextSamplerType
     * @classdesc
     * 贴图采样类型
     */
    class ContextSamplerType {
        static TEXTURE_0: any;
        static TEXTURE_1: any;
        static TEXTURE_2: any;
        static TEXTURE_3: any;
        static TEXTURE_4: any;
        static TEXTURE_5: any;
        static TEXTURE_6: any;
        static TEXTURE_7: any;
        static TEXTURE_8: any;
        /**
        * @language zh_CN
        * 重复 0~1 的纹理坐标 例如：5.2 % 1 = 0.2
        */
        static REPEAT: number;
        /**
        * @language zh_CN
        * 重复 0~1 的纹理坐标 例如：5.2 % 1 = 0.2
        */
        static NEAREST: number;
        /**
        * @language zh_CN
        * 重复 0~1 的纹理坐标 例如：5.2 % 1 = 0.2
        */
        static LINEAR: number;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.UV
     * @classdesc
     * UV 类
     */
    class UV {
        /**
        * @language zh_CN
        * u
        */
        u: number;
        /**
        * @language zh_CN
        * v
        */
        v: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor(u?: number, v?: number);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Point
     * @classdesc
     * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     */
    class Point {
        /**
         * @language en_US
         * The horizontal coordinate of the point. The default value is 0.
         */
        x: number;
        /**
         * @language en_US
         * The vertical coordinate of the point. The default value is 0.
         */
        y: number;
        /**
         * @language en_US
         * The length of the line segment from(0,0) to this point.
         */
        length: number;
        /**
         * @language en_US
         * Creates a new point. If you pass no parameters to this method, a point is
         * created at(0,0).
         *
         * @param x The horizontal coordinate.
         * @param y The vertical coordinate.
         */
        constructor(x?: number, y?: number);
        /**
         * @language en_US
         * Adds the coordinates of another point to the coordinates of this point to
         * create a new point.
         *
         * @param v The point to be added.
         * @returns The new point.
         */
        add(v: Point): Point;
        /**
         * @language en_US
         * Creates a copy of this Point object.
         *
         * @returns The new Point object.
         */
        clone(): Point;
        copyFrom(sourcePoint: Point): void;
        /**
         * @language en_US
         * Determines whether two points are equal. Two points are equal if they have
         * the same <i>x</i> and <i>y</i> values.
         *
         * @param toCompare The point to be compared.
         * @returns A value of <code>true</code> if the object is equal to this Point
         *         object; <code>false</code> if it is not equal.
         */
        equals(toCompare: Point): boolean;
        /**
         * @language en_US
         * Scales the line segment between(0,0) and the current point to a set
         * length.
         *
         * @param thickness The scaling value. For example, if the current point is
         *                 (0,5), and you normalize it to 1, the point returned is
         *                  at(0,1).
         */
        normalize(thickness?: number): void;
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
        offset(dx: number, dy: number): void;
        /**
         * @language en_US
         * Subtracts the coordinates of another point from the coordinates of this
         * point to create a new point.
         *
         * @param v The point to be subtracted.
         * @returns The new point.
         */
        subtract(v: Point): Point;
        /**
         * @language en_US
         * Returns a string that contains the values of the <i>x</i> and <i>y</i>
         * coordinates. The string has the form <code>"(x=<i>x</i>,
         * y=<i>y</i>)"</code>, so calling the <code>toString()</code> method for a
         * point at 23,17 would return <code>"(x=23, y=17)"</code>.
         *
         * @returns The string representation of the coordinates.
         */
        toString(): string;
        /**
         * @language en_US
         * Returns the distance between <code>pt1</code> and <code>pt2</code>.
         *
         * @param pt1 The first point.
         * @param pt2 The second point.
         * @returns The distance between the first and second points.
         */
        static distance(pt1: Point, pt2: Point): number;
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
        static interpolate(pt1: Point, pt2: Point, f: number): Point;
        /**
         * @language en_US
         * Converts a pair of polar coordinates to a Cartesian point coordinate.
         *
         * @param len   The length coordinate of the polar pair.
         * @param angle The angle, in radians, of the polar pair.
         * @returns The Cartesian point.
         */
        static polar(len: number, angle: number): Point;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Vector3D
     * @classdesc
     * 用 Vector3D 类 表示三维空间中的位置
     */
    class Vector3D {
        /**
        * @language en_US
        * The x axis defined as a Vector3D object with coordinates (1,0,0).
        */
        static X_AXIS: Vector3D;
        /**
        * @language en_US
        * The y axis defined as a Vector3D object with coordinates (0,1,0).
        */
        static Y_AXIS: Vector3D;
        /**
        * @language en_US
        * The z axis defined as a Vector3D object with coordinates (0,0,1).
        */
        static Z_AXIS: Vector3D;
        /**
        * @language en_US
        * The first element of a Vector3D object, such as the x coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        x: number;
        /**
        * @language en_US
        * The second element of a Vector3D object, such as the y coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        y: number;
        /**
        * @language en_US
        * The third element of a Vector3D object, such as the y coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        z: number;
        /**
        * @language en_US
        * TThe fourth element of a Vector3D object (in addition to the x, y,
        * and z properties) can hold data such as the angle of rotation. The
        * default value is 0.
        *
        * <p>Quaternion notation employs an angle as the fourth element in
        * its calculation of three-dimensional rotation. The w property can
        * be used to define the angle of rotation about the Vector3D object.
        * The combination of the rotation angle and the coordinates (x,y,z)
        * determines the display object's orientation.</p>
        *
        * <p>In addition, the w property can be used as a perspective warp
        * factor for a projected three-dimensional position or as a projection
        * transform value in representing a three-dimensional coordinate
        * projected into the two-dimensional space. For example, you can
        * create a projection matrix using the <code>Matrix3D.rawData</code>
        * property, that, when applied to a Vector3D object, produces a
        * transform value in the Vector3D object's fourth element (the w
        * property). Dividing the Vector3D object's other elements by the
        * transform value then produces a projected Vector3D object. You can
        * use the <code>Vector3D.project()</code> method to divide the first
        * three elements of a Vector3D object by its fourth element.</p>
        */
        w: number;
        /**
        * @language en_US
        * @readOnly
        */
        /**
        * @language en_US
        * @writeOnly
        */
        a: number;
        /**
        * @language en_US
        * @readOnly
        */
        /**
        * @language en_US
        * @writeOnly
        */
        r: number;
        /**
        * @language en_US
        * @readOnly
        */
        /**
        * @language en_US
        * @writeOnly
        */
        g: number;
        /**
        * @language en_US
        * @readOnly
        */
        /**
        * @language en_US
        * @writeOnly
        */
        b: number;
        /**
        * @language en_US
        * The length, magnitude, of the current Vector3D object from the
        * origin (0,0,0) to the object's x, y, and z coordinates. The w
        * property is ignored. A unit vector has a length or magnitude of
        * one.
        */
        length: number;
        /**
        * @language en_US
        * The square of the length of the current Vector3D object, calculated。
        * using the x, y, and z properties. The w property is ignored. Use the
        * <code>lengthSquared()</code> method whenever possible instead of the
        * slower <code>Math.sqrt()</code> method call of the
        * <code>Vector3D.length()</code> method.
        */
        lengthSquared: number;
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
        constructor(x?: number, y?: number, z?: number, w?: number);
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
        add(a: Vector3D): Vector3D;
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
        static angleBetween(a: Vector3D, b: Vector3D): number;
        /**
        * @language en_US
        * Returns a new Vector3D object that is an exact copy of the current
        * Vector3D object.
        *
        * @returns A new Vector3D object that is a copy of the current
        * Vector3D object.
        */
        clone(): Vector3D;
        /**
        * @language en_US
        * Copies all of vector data from the source Vector3D object into the
        * calling Vector3D object.
        *
        * @param src The Vector3D object from which to copy the data.
        */
        copyFrom(src: Vector3D): void;
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
        crossProduct(a: Vector3D): Vector3D;
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
        decrementBy(a: Vector3D): void;
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
        static distance(pt1: Vector3D, pt2: Vector3D): number;
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
        dotProduct(a: Vector3D): number;
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
        equals(toCompare: Vector3D, allFour?: boolean): boolean;
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
        incrementBy(a: Vector3D): void;
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
        nearEquals(toCompare: Vector3D, tolerance: number, allFour?: boolean): boolean;
        /**
        * @language en_US
        * Sets the current Vector3D object to its inverse. The inverse object
        * is also considered the opposite of the original object. The value of
        * the x, y, and z properties of the current Vector3D object is changed
        * to -x, -y, and -z.
        */
        negate(): void;
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
        normalize(thickness?: number): void;
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
        project(): void;
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
        scaleBy(s: number): void;
        /**
        * @language en_US
        * Sets the members of Vector3D to the specified values
        *
        * @param xa The first element, such as the x coordinate.
        * @param ya The second element, such as the y coordinate.
        * @param za The third element, such as the z coordinate.
        */
        setTo(xa: number, ya: number, za: number): void;
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
        subtract(a: Vector3D): Vector3D;
        multiply(other: Vector3D): Vector3D;
        lerp(v0: Vector3D, v1: Vector3D, t: number): void;
        toString(): string;
        parsing(str: string): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Rectangle
     * @classdesc
     * Rectangle 类 表示矩形
     */
    class Rectangle {
        /**
        * @language zh_CN
        * 矩形x坐标
        */
        x: number;
        /**
        * @language zh_CN
        * 矩形y坐标
        */
        y: number;
        /**
        * @language zh_CN
        * 矩形宽
        */
        width: number;
        /**
        * @language zh_CN
        * 矩形高
        */
        height: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor(x?: number, y?: number, width?: number, height?: number);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Quaternion
     * @classdesc
     * Quaternion 类用于表示旋转
     */
    class Quaternion {
        /**
        * @language en_US
        * The x value of the quaternion.
        */
        x: number;
        /**
        * @language en_US
        * The y value of the quaternion.
        */
        y: number;
        /**
        * @language en_US
        * The z value of the quaternion.
        */
        z: number;
        /**
        * @language en_US
        * The w value of the quaternion.
        */
        w: number;
        /**
        * @language en_US
        * Creates a new Quaternion object.
        * @param x The x value of the quaternion.
        * @param y The y value of the quaternion.
        * @param z The z value of the quaternion.
        * @param w The w value of the quaternion.
        */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
        * @language en_US
        * @@readOnly
        * Returns the magnitude of the quaternion object.
        */
        magnitude: number;
        /**
        * @language en_US
        * Fills the quaternion object with the result from a multiplication of two quaternion objects.
        *
        * @param    qa    The first quaternion in the multiplication.
        * @param    qb    The second quaternion in the multiplication.
        */
        multiply(qa: Quaternion, qb: Quaternion): void;
        /**
        * @language en_US
        *
        *
        * @param
        * @param
        */
        multiplyVector(vector: Vector3D, target?: Quaternion): Quaternion;
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given rotation around a vector.
        *
        * @param    axis    The axis around which to rotate
        * @param    angle    The angle in radians of the rotation.
        */
        fromAxisAngle(axis: Vector3D, angle: number): void;
        /**
        * @language en_US
        * Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        slerp(qa: Quaternion, qb: Quaternion, t: number): void;
        /**
        * @language en_US
        * Linearly interpolates between two quaternions.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        lerp(qa: Quaternion, qb: Quaternion, t: number): void;
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given euler rotation.
        *
        * @param    ax        The angle in radians of the rotation around the ax axis.
        * @param    ay        The angle in radians of the rotation around the ay axis.
        * @param    az        The angle in radians of the rotation around the az axis.
        */
        fromEulerAngles(ax: number, ay: number, az: number): Quaternion;
        /**
        * @language en_US
        * Fills a target Vector3D object with the Euler angles that form the rotation represented by this quaternion.
        * @param target An optional Vector3D object to contain the Euler angles. If not provided, a new object is created.
        * @returns The Vector3D containing the Euler angles.
        */
        toEulerAngles(target?: Vector3D): Vector3D;
        /**
        * @language en_US
        * Normalises the quaternion object.
        */
        normalize(val?: number): void;
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
        toString(): string;
        /**
        * @language en_US
        * Converts the quaternion to a Matrix3D object representing an equivalent rotation.
        * @param target An optional Matrix3D container to store the transformation in. If not provided, a new object is created.
        * @returns A Matrix3D object representing an equivalent rotation.
        */
        toMatrix3D(target?: Matrix4_4): Matrix4_4;
        /**
        * @language en_US
        * Extracts a quaternion rotation matrix out of a given Matrix3D object.
        * @param matrix The Matrix3D out of which the rotation will be extracted.
        */
        fromMatrix(matrix: Matrix4_4): void;
        /**
        * @language en_US
        * Converts the quaternion to a Vector.&lt;Number&gt; matrix representation of a rotation equivalent to this quaternion.
        * @param target The Vector.&lt;Number&gt; to contain the raw matrix data.
        * @param exclude4thRow If true, the last row will be omitted, and a 4x3 matrix will be generated instead of a 4x4.
        */
        toRawData(target: number[], exclude4thRow?: boolean): void;
        /**
        * @language en_US
        * Clones the quaternion.
        * @returns An exact duplicate of the current Quaternion.
        */
        clone(): Quaternion;
        /**
        * @language en_US
        * Rotates a point.
        * @param vector The Vector3D object to be rotated.
        * @param target An optional Vector3D object that will contain the rotated coordinates. If not provided, a new object will be created.
        * @returns A Vector3D object containing the rotated point.
        */
        rotatePoint(vector: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language en_US
        * Copies the data from a quaternion into this instance.
        * @param q The quaternion to copy from.
        */
        copyFrom(q: Quaternion): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Orientation3D
     * @classdesc
     *  定义 Orientation3D 常量
     */
    class Orientation3D {
        static AXIS_ANGLE: string;
        static EULER_ANGLES: string;
        static QUATERNION: string;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Plane3D
     * @classdesc
     * Plane3D 类
     */
    class Plane3D {
        /**
         * @language en_US
         * The A coefficient of this plane. (Also the x dimension of the plane normal)
         */
        a: number;
        /**
         * @language en_US
         * The B coefficient of this plane. (Also the y dimension of the plane normal)
         */
        b: number;
        /**
         * @language en_US
         * The C coefficient of this plane. (Also the z dimension of the plane normal)
         */
        c: number;
        /**
         * @language en_US
         * The D coefficient of this plane. (Also the inverse dot product between normal and point)
         */
        d: number;
        static ALIGN_ANY: number;
        static ALIGN_XY_AXIS: number;
        static ALIGN_YZ_AXIS: number;
        static ALIGN_XZ_AXIS: number;
        /**
         * @language en_US
         * Create a Plane3D with ABCD coefficients
         */
        constructor(a?: number, b?: number, c?: number, d?: number);
        /**
         * @language en_US
         */
        setTo(a?: number, b?: number, c?: number, d?: number): void;
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from 3 points in 3d space.
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        fromPoints(p0: Vector3D, p1: Vector3D, p2: Vector3D): void;
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.
         * @param normal Vector3D
         * @param point  Vector3D
         */
        fromNormalAndPoint(normal: Vector3D, point: Vector3D): void;
        /**
         * @language en_US
         * Normalize this Plane3D
         * @returns Plane3D This Plane3D.
         */
        normalize(): number;
        /**
         * @language en_US
         * Returns the signed distance between this Plane3D and the point p.
         * @param p Vector3D
         * @returns Number
         */
        distance(p: Vector3D): number;
        /**
         * @language en_US
         * Classify a point against this Plane3D. (in front, back or intersecting)
         * @param p Vector3D
         * @returns int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
         */
        classifyPoint(p: Vector3D, epsilon?: number): number;
        /**
         * @language en_US
         * @returns string
         */
        toString(): string;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.CubeBoxBound
     * @classdesc
     * 可使用 CubeBoxBound 类 取得包围盒的数据
     */
    class CubeBoxBound {
        /**
        * @language zh_CN
        * 盒子最小点
        */
        min: Vector3D;
        /**
        * @language zh_CN
        * 盒子最大点
        */
        max: Vector3D;
        /**
        * @language zh_CN
        * 盒子顶点
        */
        vexData: Array<number>;
        /**
        * @language zh_CN
        * 盒子索引
        */
        indexData: Array<number>;
        /**
        * @language zh_CN
        * 盒子宽
        */
        width: number;
        /**
        * @language zh_CN
        * 盒子高
        */
        heigth: number;
        /**
        * @language zh_CN
        * 盒子长
        */
        depth: number;
        /**
        * @language zh_CN
        * 盒子体积
        */
        volume: number;
        /**
        * @language zh_CN
        * 盒子包围球中心点
        */
        center: Vector3D;
        /**
        * @language zh_CN
        * 盒子包围球半径
        */
        radius: number;
        /**
        * @language zh_CN
        * constructor
        * @param min
        * @param max
        */
        constructor(min?: Vector3D, max?: Vector3D);
        /**
        * @language zh_CN
        * 拷贝一个包围盒
        * @param box
        */
        copyFrom(box: CubeBoxBound): void;
        /**
        * @language zh_CN
        * 填充当前包围盒
        * @param box
        */
        fillBox(min: Vector3D, max: Vector3D): void;
        /**
        * @language zh_CN
        * 检测一个点是否包围盒内
        * @param pos 检测的点
        * @returns 成功返回true
        */
        inBox(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 检测两个包围盒是否相交
        * @param box2 其中一个包围盒
        * @param boxIntersect 相交的包围盒
        * @returns 成功返回true
        */
        intersectAABBs(box2: CubeBoxBound, boxIntersect: CubeBoxBound): boolean;
        /**
        * @language zh_CN
        * 包围盒矩阵变换
        * @param mat 变换矩阵
        * @returns 返回变换后的矩阵
        */
        Transform(mat: Matrix4_4): CubeBoxBound;
        /**
        * @language zh_CN
        * 以字符串形式返回box的值
        * @returns 字符串
        */
        toString(): string;
        /**
        * @language zh_CN
        * 计算包围盒数据
        */
        calculateBox(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Matrix4_4
     * @classdesc
     * Matrix4_4 矩阵类
     */
    class Matrix4_4 {
        rawData: Float32Array;
        /**
        * @language zh_CN
        * constructor
        * @param datas {number[16]}
        */
        constructor(datas?: Float32Array);
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
        lookAt(eye: Vector3D, at: Vector3D, up: Vector3D): void;
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
        perspective(fovy: number, aspect: number, zn: number, zf: number): void;
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
        ortho(w: number, h: number, zn: number, zf: number): void;
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
        orthoOffCenter(l: number, r: number, b: number, t: number, zn: number, zf: number): void;
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
        append(lhs: Matrix4_4): void;
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
        add(lhs: Matrix4_4): Matrix4_4;
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
        sub(lhs: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 矩阵乘分量.
        * @param v .
        * @returns 返回一个相乘后的结果 矩阵.
        */
        mult(v: number): Matrix4_4;
        /**
        * @language zh_CN
        * 创建一个欧拉旋转矩阵.
        * @param x 绕x轴旋转角度.
        * @param y 绕y轴旋转角度.
        * @param z 绕z轴旋转角度.
        */
        rotation(x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 当前矩阵乘 (按axis轴旋转degrees角度创建出来的矩阵)
        * @param degrees 旋转角度.
        * @param axis 绕axis轴旋转角度.
        */
        appendRotation(degrees: number, axis: Vector3D): void;
        /**
        * @language zh_CN
        * 生成一个缩放矩阵
        * @param xScale x轴缩放
        * @param yScale y轴缩放
        * @param zScale z轴缩放
        */
        appendScale(xScale: number, yScale: number, zScale: number): void;
        /**
        * @language zh_CN
        * 加上一个平移矩阵
        * @param x x轴坐标
        * @param y y轴坐标
        * @param z z轴坐标
        */
        appendTranslation(x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        * 返回一个当前矩阵的克隆矩阵
        * @returns 克隆后的矩阵
        */
        clone(): Matrix4_4;
        /**
        * @language zh_CN
        * 给当前矩阵其中一行赋值
        * @param column 拷贝的行
        * @param vector3D 拷贝的值
        */
        copyColumnFrom(column: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 拷贝矩阵中的其中一行 把值存在vector3D.
        * @param column 拷贝的行
        * @param vector3D 拷贝存值目标
        */
        copyRowTo(column: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 把一个矩阵的值赋给当前矩阵.
        * @param sourceMatrix3D 源矩阵.
        * @returns 返回当前矩阵
        */
        copyFrom(sourceMatrix3D: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 把一个 float 数组赋值给当前矩阵.
        * @param vector 源数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        copyRawDataFrom(vector: Float32Array, index?: number, transpose?: boolean): void;
        /**
        * @language zh_CN
        * 把当前矩阵的值拷贝给一个 float 数组.
        * @param vector 目标数组.
        * @param index 从数组的index 开始copy.
        * @param transpose 是否转置当前矩阵.
        */
        copyRawDataTo(vector: Float32Array, index?: number, transpose?: boolean): void;
        /**
        * @language zh_CN
        * 给当前矩阵的某一列 赋值
        * @param col 列
        * @param vector3D 值来源
        */
        copyColFrom(col: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 拷贝当前矩阵的某一列
        * @param col 列
        * @param vector3D 拷贝目标
        */
        copyColTo(col: number, vector3D: Vector3D): void;
        /**
        * @language zh_CN
        * 拷贝当前矩阵
        * @param dest 拷贝目标
        */
        copyToMatrix3D(dest: Matrix4_4): void;
        /**
        * @language zh_CN
        * 分解当前矩阵
        * @param orientationStyle 分解类型
        * @returns Vector3D[3] pos rot scale
        */
        decompose(orientationStyle?: string): Vector3D[];
        /**
        * @language zh_CN
        * 当前矩阵变换一个向量
        * @param v 要变换的向量
        * @returns 变换后的向量
        */
        deltaTransformVector(v: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 单位化当前矩阵
        */
        identity(): void;
        /**
        * @language zh_CN
        * 填充当前矩阵
        * @param value 填充的值
        */
        fill(value: number): void;
        /**
        * @language zh_CN
        * 当前矩阵求逆
        */
        invers33(): void;
        /**
        * @language zh_CN
        * 当前矩阵求逆
        * @returns 是否能求逆
        */
        invert(): boolean;
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param pos  位移
        * @param scale 缩放
        * @param rot 旋转
        */
        makeTransform(pos: Vector3D, scale: Vector3D, rot: Quaternion): void;
        /**
        * @language zh_CN
        * 生成一个变换矩阵
        * @param components Vector3D[3] 位移 旋转 缩放
        * @returns 生成是否成功
        */
        recompose(components: Vector3D[]): boolean;
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D向量
        * @param v 变换的向量
        * @returns 变换后的向量
        */
        transformVector(v: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 用当前矩阵变换一个3D平面
        * @param plane 变换的平面
        * @returns 变换后的平面
        */
        transformPlane(plane: Plane3D): Plane3D;
        private oRawData;
        /**
        * @language zh_CN
        * 当前矩阵转置
        */
        transpose(): void;
        /**
        * @language zh_CN
        * 生成一个(以x,y,z为中心轴旋转degrees角度)的矩阵
        * @param x 中心轴的x
        * @param y 中心轴的y
        * @param z 中心轴的z
        * @param degrees 旋转角度
        */
        static getAxisRotation(x: number, y: number, z: number, degrees: number): Matrix4_4;
        /**
        * @language zh_CN
        * 返回矩阵行列式
        * @readOnly
        * @returns 行列式值
        */
        determinant: number;
        /**
        * @language zh_CN
        * 返回矩阵位移
        * @readOnly
        * @returns 位移
        */
        /**
        * @language zh_CN
        * 设置矩阵位移
        * @writeOnly
        * @param value 位移
        */
        position: Vector3D;
        /**
        * @language zh_CN
        * 返回矩阵缩放
        * @readOnly
        * @returns 缩放
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 以字符串返回矩阵的值
        * @readOnly
        * @returns 字符
        */
        toString(): string;
        /**
        * @language zh_CN
        * 求两个矩阵之间的差值
        * @param m0 矩阵0
        * @param m1 矩阵1
        * @param t 时间差 0.0 - 1.0
        */
        lerp(m0: Matrix4_4, m1: Matrix4_4, t: number): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.EyesMatrix
     * @classdesc
     * 可使用 EyesMatrix 类 对左，右眼睛矩阵的操作
     */
    class EyesMatrix {
        /**
        * @language zh_CN
        * 左眼睛矩阵
        */
        leftEyeMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 右眼睛矩阵
        */
        rightEyeMatrix: Matrix4_4;
        private eyePosition;
        private eyeRotation;
        private eyeLookTarget;
        private eyeSpace;
        private eyeFocalLength;
        private leftPos;
        private rightPos;
        private targetPos;
        private lookAtPos;
        private quaternion;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 数据更新
        * @param matrix 当前相机矩阵
        */
        updte(matrix: Matrix4_4): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.PlaneClassification
     * @classdesc
     * 定义 PlaneClassification 常量
     */
    class PlaneClassification {
        static BACK: number;
        static FRONT: number;
        static IN: number;
        static OUT: number;
        static INTERSECT: number;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Matrix3DUtils
    * @classdesc
    * 可使用 Matrix3DUtils 类 进行3d矩阵的计算
    */
    class Matrix3DUtils {
        /**
        * @language zh_CN
        * 1弧度为多少角度
        */
        static RADIANS_TO_DEGREES: number;
        /**
        * @language zh_CN
        * 1角度为多少弧度
        */
        static DEGREES_TO_RADIANS: number;
        static RAW_DATA_CONTAINER: Float32Array;
        static CALCULATION_MATRIX: Matrix4_4;
        /**
        * @language zh_CN
        * 四元数转矩阵
        * @param quarternion 源四元数
        * @param m 目标矩阵
        * @returns 返回转出矩阵
        */
        static quaternion2matrix(quarternion: Quaternion, m?: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 得到矩阵朝前的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        static getForward(m: Matrix4_4, v?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 得到矩阵朝上的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        static getUp(m: Matrix4_4, v?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 得到矩阵朝右的方向
        * @param m 源矩阵
        * @param v 返回的方向 可为null
        * @returns 返回方向
        */
        static getRight(m: Matrix4_4, v?: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 比较两个矩阵是否相同
        * @param m1 矩阵1
        * @param m2 矩阵2
        * @returns 相同返回true
        */
        static compare(m1: Matrix4_4, m2: Matrix4_4): boolean;
        /**
        * @language zh_CN
        * 得到平面的反射矩阵
        * @param plane 反射的面
        * @param target 计算返回的矩阵
        * @returns 返回计算的结果
        */
        static reflection(plane: Plane3D, target?: Matrix4_4): Matrix4_4;
        /**
        * @language zh_CN
        * 得到矩阵的平移
        * @param transform 计算的矩阵
        * @param result 计算返回平移坐标
        * @returns 返回平移坐标
        */
        static getTranslation(transform: Matrix4_4, result?: Vector3D): Vector3D;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Ray
     * @classdesc
     * Ray 类 用于检测射线
     */
    class Ray {
        origin: Vector3D;
        dir: Vector3D;
        /**
        * @language zh_CN
        * constructor
        * @origin 射线原点
        * @direction 射线方向
        */
        constructor(origin?: Vector3D, direction?: Vector3D);
        /**
        * @language zh_CN
        * 计算一个三角形和一个射线的交点
        * @param v0 三角形的第一个顶点
        * @param v1 三角形的第二个顶点
        * @param v2 三角形的第三个顶点
        * @param ret t(交点到射线起始点的距离) u(交点在v1-v0上的投影的位置) v(交点在v1-v2上的投影的位置, 交点为ret=v0+pU*(v1-v0)+pV*(v2-v0))
        * @returns 相交返回true
        */
        IntersectTriangle(v0: Vector3D, v1: Vector3D, v2: Vector3D, ret?: Array<number>): boolean;
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param mesh 检测的模型
        * @param inPos 相交点
        * @returns 相交返回true
        */
        IntersectMeshEx(mesh: Mesh, inPos: Vector3D): boolean;
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
        IntersectMesh(verticesData: Array<number>, indexData: Array<number>, offset: number, faces: number, inPos: Vector3D, mMat: Matrix4_4): boolean;
        private invViewMat;
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
        CalculateAndTransformRay(width: number, height: number, viewMat: Matrix4_4, projMat: Matrix4_4, x: number, y: number): void;
        /**
        * @language zh_CN
        * 射线重置
        */
        reset(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Color
     * @classdesc
     * 可使用 Color 类调整显示对象的颜色值
     */
    class Color {
        /**
        * @language zh_CN
        * alpha
        */
        a: number;
        /**
        * @language zh_CN
        * red
        */
        r: number;
        /**
        * @language zh_CN
        * green
        */
        g: number;
        /**
        * @language zh_CN
        * blue
        */
        b: number;
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        static white(): Color;
        /**
        * @language zh_CN
        * 返回黑色
        * @retrun 黑色
        */
        static black(): Color;
        /**
        * @language zh_CN
        * 返回白色
        * @retrun 白色
        */
        static red(): Color;
        /**
        * @language zh_CN
        * 返回绿色
        * @retrun 绿色
        */
        static green(): Color;
        /**
        * @language zh_CN
        * 返回蓝色
        * @retrun 蓝色
        */
        static blue(): Color;
        /**
        * @language zh_CN
        * constructor
        * @param r red
        * @param g green
        * @param b blue
        * @param a alpha
        */
        constructor(r?: number, g?: number, b?: number, a?: number);
        /**
        * @language zh_CN
        * 以number值返加颜色
        * @param colorFormat 格式
        * @returns 颜色
        */
        getColor(colorFormat?: number): number;
        /**
        * @language zh_CN
        * 颜色取差值
        * @param c0
        * @param c1
        * @param t (0.0-1.0)
        */
        lerp(c0: Color, c1: Color, t: number): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.PickResult
    * @classdesc
    * 鼠标拾取返回数据
    */
    class PickResult {
        localPosition: Vector3D;
        /**
        * @language zh_CN
        * 鼠标拾取模型上的交点 (世界坐标)
        */
        globalPosition: Vector3D;
        object3DPosition: Vector3D;
        uv: Vector3D;
        near: number;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.EventDispatcher
    * @classdesc
    * 事件触发器
    */
    class EventDispatcher {
        listeners: any;
        /**
         * @language zh_CN
         * 派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。
         * @param event {any} 事件类型
         */
        dispatchEvent(event: any): void;
        /**
        * @language zh_CN
        * 添加事件侦听器
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        */
        addEventListener(type: string, callback: Function, priolity?: number): void;
        /**
         * @language zh_CN
         * 移除事件侦听器
         * @param type {string} 事件名
         * @param callback {Function} 侦听函数
         */
        removeEventListener(type: string, callback: Function): void;
        /**
         * @language zh_CN
         * 移除所有事件侦听器
         */
        clearEventListener(): void;
        /**
        * @language zh_CN
        * 检测是否存在监听器
        * @param type {string}
        * @returns {boolean}
        */
        containEventListener(type: string): boolean;
        /**
        * @language zh_CN
        * 检测是否存在监听器
        * @param type {string} 事件名
        * @param callback {Function} 处理事件的侦听器函数
        * @returns {boolean}
        */
        hasEventListener(type: string, callback: Function): boolean;
    }
    class Event3D {
        static EVENT_LOAD_COMPLETE: string;
        static MOUSE_CLICK: string;
        static MOUSE_DOWN: string;
        static MOUSE_UP: string;
        static MOUSE_OVER: string;
        static MOUSE_OUT: string;
        static MOUSE_MOVE: string;
        static COMPLETE: string;
        static CHANGE_PROPERTY: string;
        private _currentTarget;
        /**
        * @language zh_CN
        * 事件当前对象
        * @returns {any}
        */
        /**
        * @language zh_CN
        * 事件当前对象
        * @param value {any}
        */
        currentTarget: any;
        private _type;
        /**
        * @language zh_CN
        * 事件类型
        * @returns {string}
        */
        /**
        * @language zh_CN
        * 事件类型
        * @param value {string}
        */
        type: string;
        private _data;
        /**
        * @language zh_CN
        * 附加数据
        * @returns {any}
        */
        /**
        * @language zh_CN
        * 附加数据
        * @param value {any}
        */
        data: any;
        /**
        * @language zh_CN
        * Event3D
        * @param typeName {string} 事件类型
        * @param data {any}附加数据(可选)
        */
        constructor(type?: string, data?: any);
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Mouse3DManager
    * @classdesc
    * 鼠标事件管理
    */
    class Mouse3DManager {
        static left_mouse_over: string;
        static left_mouse_down: string;
        static left_mouse_up: string;
        static left_mouse_click: string;
        static right_mouse_over: string;
        static right_mouse_down: string;
        static right_mouse_up: string;
        static right_mouse_click: string;
        static middle_mouse_over: string;
        static middle_mouse_down: string;
        static middle_mouse_up: string;
        static middle_mouse_click: string;
        static mouse_move: string;
        type: string;
        data: PickResult;
        private _camera;
        private _collect;
        /**
        * @language zh_CN
        * constructor
        * @param camera {Camera3D}
        * @param collect {CollectBase}
        */
        constructor(camera: Camera3D, collect: CollectBase);
        private onMouseClick(e);
        private onMouseDown(e);
        private onMouseUp(e);
        private onMouseOver(e);
        private onMouseOut(e);
        private onMouseMove(e);
    }
}
declare module egret3d {
    /**
    * @class egret3d.TextureBase
    * @classdesc
    * 贴图基类
    */
    class TextureBase {
        /**
         * @language zh_CN
         */
        border: number;
        /**
         * @language zh_CN
         * 是否使用mipmap
         */
        useMipmap: boolean;
        /**
         * @language zh_CN
         * 贴图元素对象
         */
        imageData: HTMLImageElement;
        /**
         * @language zh_CN
         * mipmap数据
         */
        mimapData: Array<MipmapData>;
        /**
         * @language zh_CN
         * 颜色格式
         */
        colorFormat: number;
        /**
         * @language zh_CN
         * 内部格式
         */
        internalFormat: InternalFormat;
        /**
         * @language zh_CN
         * 贴图 gup 数据
         */
        texture: Texture2D;
        /**
         * @language zh_CN
         * 立方形贴图
         */
        cubeTexture: ICubeTexture;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3D): void;
        /**
         * @language zh_CN
         * @readOnly
         * @returns width
         */
        width: number;
        /**
         * @language zh_CN
         * @readOnly
         * @returns height
         */
        height: number;
    }
}
declare module egret3d {
    /**
    * @class egret3d.RenderTexture
    * @classdesc
    * 渲染材质
    */
    class RenderTexture extends TextureBase {
        /**
         * @language zh_CN
         * @param texture
         */
        constructor(texture: Texture2D);
    }
}
declare module egret3d {
    /**
    * @class egret3d.SkyTexture
    * @classdesc
    * 天空贴图
    */
    class SkyTexture extends TextureBase {
        private image_front;
        private image_back;
        private image_left;
        private image_right;
        private image_up;
        private image_down;
        /**
         * @language zh_CN
         */
        constructor(image_front: HTMLImageElement, image_back: HTMLImageElement, image_left: HTMLImageElement, image_right: HTMLImageElement, image_up: HTMLImageElement, image_down: HTMLImageElement);
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ImageTexture
    * @classdesc
    * 图像贴图
    */
    class ImageTexture extends TextureBase {
        /**
         * @language zh_CN
         * 贴图数据
         */
        imageData: HTMLImageElement;
        /**
         * @language zh_CN
         * @param img
         */
        constructor(img: HTMLImageElement);
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
    * @class egret3d.CheckerboardTexture
    * @classdesc
    * 棋盘格纹理
    */
    class CheckerboardTexture extends TextureBase {
        /**
         * @language zh_CN
         */
        static texture: CheckerboardTexture;
        private _width;
        private _height;
        private _pixelArray;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3D): void;
        private buildCheckerboard();
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.IAnimation
     * @classdesc
     * 动画接口
     */
    interface IAnimation {
        /**
        * @language zh_CN
        * 骨骼动画控制器对象
        */
        skeletonAnimationController?: SkeletonAnimation;
        /**
        * @language zh_CN
        * 总时间
        */
        time: number;
        /**
        * @language zh_CN
        * 帧间隔时间
        */
        delay: number;
        /**
        * @language zh_CN
        * 动画播放速度
        */
        speed: number;
        /**
        * @language zh_CN
        * 动画节点容器
        */
        animaNodeCollection?: AnimaNodeCollection;
        /**
        * @language zh_CN
        * 初始化Shader
        * @param vertexShader 顶点Shader
        * @param pixelShader 片元Shader
        */
        initShader(vertexShader: VertexShader, pixelShader: PixelShader): any;
        /**
        * @language zh_CN
        * 更新调度
        * @param time 总时间
        * @param delay 帧间隔时间
        */
        updata(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 播放动画
        * @param animName 动画名称
        * @param speed 播放速度（默认为1）
        */
        play(animName?: string, speed?: number): void;
        /**
        * @language zh_CN
        * 停止动画播放
        */
        stop(): void;
        /**
        * @language zh_CN
        * 是否正在播放
        */
        isPlay(): boolean;
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画名称数组
        */
        getAnimList(): string[];
        /**
        * @language zh_CN
        * 获取动画节点
        * @return 动画节点数组
        */
        getAnimNode(): Array<AnimNodeBase>;
        /**
        * @language zh_CN
        * 克隆新的IAnimation对象
        * @return 新的IAnimation对象
        */
        clone(): IAnimation;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.AnimNodeBase
     * @classdesc
     * 动画节点基类
     */
    class AnimNodeBase {
        /**
        * @language zh_CN
        * 顶点Shader
        */
        vertexShader: string;
        /**
        * @language zh_CN
        * 片元Shader
        */
        fragmentShader: string;
        /**
        * @language zh_CN
        * 使用的属性
        */
        usageAttribute: string;
        /**
        * @language zh_CN
        * 属性长度
        */
        usageAttributeLen: number;
        /**
        * @language zh_CN
        * uniform索引
        */
        uniformIndex: any;
        /**
        * @language zh_CN
        * 偏移字节数
        */
        offsetBytes: number;
        /**
        * @language zh_CN
        * 偏移量
        */
        offset: number;
        /**
        * @language zh_CN
        * 填充GeomtryData
        * @param geometry: Geometry对象
        */
        fillGeomtryData(geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.AnimaNodeCollection
     * @classdesc
     * 动画节点容器
     */
    class AnimaNodeCollection {
        /**
        * @language zh_CN
        * 动画节点容器
        */
        nodes: Array<AnimNodeBase>;
        /**
        * @language zh_CN
        * 顶点数
        */
        numberOfVertices: number;
        /**
        * @language zh_CN
        * 顶点字节大小
        */
        vertexSizeInBytes: number;
        private _nodeData;
        private _vertexAttributes;
        /**
        * @language zh_CN
        * 构造函数
        */
        constructor();
        /**
        * @language zh_CN
        * 添加节点
        * @param node 节点对象
        */
        addNode(node: AnimNodeBase): void;
        /**
        * @language zh_CN
        * 移除节点
        * @param node 节点对象
        */
        removeNode(node: AnimNodeBase): void;
        /**
        * @language zh_CN
        * 获取节点容器
        * @return 节点容器
        */
        getNodes(): Array<AnimNodeBase>;
        /**
        * @language zh_CN
        * 获取节点顶点Shader
        * @return 顶点Shader容器
        */
        getNodesVertexShaders(): Array<string>;
        /**
        * @language zh_CN
        * 获取节点片元Shader
        * @return 片元Shader容器
        */
        getNodesFragmentShaders(): Array<string>;
        /**
        * @language zh_CN
        * 计算节点
        */
        calculateNode(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Joint
     * @classdesc
     * 骨骼
     */
    class Joint {
        /**
        * @language zh_CN
        * 骨骼矩阵是否有效
        */
        jointMatrixValid: boolean;
        /**
        * @language zh_CN
        * 骨骼世界矩阵是否有效
        */
        worldMatrixValid: boolean;
        /**
        * @language zh_CN
        * 骨骼矩阵
        */
        jointMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 骨骼世界矩阵
        */
        worldMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 骨骼名称
        */
        name: string;
        /**
        * @language zh_CN
        * 父骨骼名称
        */
        parent: string;
        /**
        * @language zh_CN
        * 父骨骼索引编号
        */
        parentIndex: number;
        /**
        * @language zh_CN
        * 骨骼逆矩阵
        */
        inverseBindPose: Matrix4_4;
        /**
        * @language zh_CN
        * 骨骼缩放量
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 骨骼旋转量
        */
        orientation: Quaternion;
        /**
        * @language zh_CN
        * 骨骼平移量
        */
        translation: Vector3D;
        /**
        * @language zh_CN
        * 骨骼本地矩阵
        */
        localMatrix: Matrix4_4;
        constructor(name: string);
        /**
        * @language zh_CN
        * 克隆新骨骼对象
        * @return 新骨骼对象
        */
        clone(): Joint;
        /**
        * @language zh_CN
        * 设置骨骼逆矩阵
        * @param translation 平移量
        * @param rotation 旋转量
        * @param scaling 缩放量
        */
        setInverseBindPose(translation: Vector3D, rotation: Vector3D, scaling: Vector3D): void;
        /**
        * @language zh_CN
        * 设置骨骼本地置换
        * @param orientation 旋转量
        * @param scale 缩放量
        * @param translation 平移量
        */
        setLocalTransform(orientation: Quaternion, scale: Vector3D, translation: Vector3D): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Skeleton
     * @classdesc
     * 骨架
     */
    class Skeleton {
        /**
        * @language zh_CN
        * 当前骨架帧时间
        */
        frameTime: number;
        /**
        * @language zh_CN
        * 骨架包含的骨骼
        */
        joints: Array<Joint>;
        /**
        * @language zh_CN
        * 骨架矩阵是否有效
        */
        skeletonMatrixValid: boolean;
        private _skeletonMatrix;
        private _initialSkeleton;
        private _temp_q0;
        private _temp_q1;
        private _temp_q2;
        private _temp_v0;
        private _temp_v1;
        private _temp_v2;
        constructor(initialSkeleton?: Skeleton);
        /**
        * @language zh_CN
        * 克隆新骨架对象
        * @return 新骨架对象
        */
        clone(): Skeleton;
        /**
        * @language zh_CN
        * 重置骨架数据
        */
        reset(): void;
        /**
        * @language zh_CN
        * 初始骨架
        */
        /**
        * @language zh_CN
        * 设置初始骨架
        * @param value 初始骨架
        */
        initialSkeleton: Skeleton;
        /**
        * @language zh_CN
        * 骨架矩阵阵列
        */
        skeletonMatrix: Float32Array;
        /**
        * @language zh_CN
        * 骨骼数量
        */
        numJoint: number;
        /**
        * @language zh_CN
        * 通过名称查找指定骨骼
        * @param name 骨骼名称
        * @return 骨骼对象
        */
        findJoint(name: string): Joint;
        /**
        * @language zh_CN
        * 通过名称查找骨骼索引编号
        * @param name 骨骼名称
        * @return 骨骼索引编号
        */
        findJointIndex(name: string): number;
        /**
        * @language zh_CN
        * 骨架插值
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param tNow 新骨架帧时间（骨架0.frameTime ~ 骨架1.frameTime）
        */
        skeletonLerp(skeleton0: Skeleton, skeleton1: Skeleton, tNow: number): void;
        /**
        * @language zh_CN
        * 骨架插值计算
        * @param skeleton0 骨架0
        * @param skeleton1 骨架1
        * @param t 时间因子(0.0~1.0);
        */
        lerp(skeleton0: Skeleton, skeleton1: Skeleton, t: number): void;
        /**
        * @language zh_CN
        * 骨架转矩阵阵列数组
        * @param target 用于储存的矩阵阵列数组
        * @return 矩阵阵列数组
        */
        toMatrixData(target?: Float32Array): Float32Array;
        /**
        * @language zh_CN
        * 更新骨架矩阵
        */
        updateSkeletonMatrix(): void;
        /**
        * @language zh_CN
        * 计算骨骼世界矩阵
        * @param initialSkeleton 初始骨架对象
        */
        calculateJointWorldMatrix(initialSkeleton: Skeleton): void;
        private calculateAbsoluteMatrix(currentSkeletonPose, jointIndex, initialSkeleton);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimationClip
     * @classdesc
     * 骨骼动画
     */
    class SkeletonAnimationClip {
        /**
        * @language zh_CN
        * 帧数
        */
        frameCount: number;
        private _animName;
        private _sampling;
        private _timePosition;
        private _loop;
        private _playing;
        private _enabled;
        private _weight;
        private _length;
        private _parent;
        private _poseArray;
        constructor(animName: string);
        /**
        * @language zh_CN
        * 父对象
        */
        parent: SkeletonAnimation;
        /**
        * @language zh_CN
        * 动画Pose骨架序列
        */
        /**
        * @language zh_CN
        * 动画Pose骨架序列
        */
        poseArray: Array<Skeleton>;
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimationClip对象
        * @return 新的SkeletonAnimationClip
        */
        clone(): SkeletonAnimationClip;
        /**
        * @language zh_CN
        * 是否已经结束
        * @return 是否已经结束
        */
        hasEnded(): boolean;
        /**
        * @language zh_CN
        * 添加动画播放时间偏移量
        * @param offset 时间增量
        */
        addTime(offset: number): void;
        /**
        * @language zh_CN
        * 当前帧索引
        */
        /**
        * @language zh_CN
        * 当前帧索引
        */
        currentFrameIndex: number;
        /**
        * @language zh_CN
        * 下一帧的索引
        */
        nextFrameIndex: number;
        /**
        * @language zh_CN
        * 动画名称
        */
        animationName: string;
        /**
        * @language zh_CN
        * 动画长度
        */
        length: number;
        /**
        * @language zh_CN
        * 采样率
        */
        /**
        * @language zh_CN
        * 采样率
        */
        sampling: number;
        /**
        * @language zh_CN
        * 是否循环
        */
        /**
        * @language zh_CN
        * 是否循环
        */
        loop: boolean;
        /**
        * @language zh_CN
        * 是否播放中
        */
        /**
        * @language zh_CN
        * 是否播放
        */
        play: boolean;
        /**
        * @language zh_CN
        * 是否启用
        */
        /**
        * @language zh_CN
        * 是否启用
        */
        enabled: boolean;
        /**
        * @language zh_CN
        * 混合权重
        */
        /**
        * @language zh_CN
        * 混合权重
        */
        weight: number;
        /**
        * @language zh_CN
        * 播放的时间位置
        */
        /**
        * @language zh_CN
        * 播放的时间位置
        */
        timePosition: number;
        /**
        * @language zh_CN
        * 填充帧
        * @param initialSkeleton 初始骨架
        */
        fillFrame(initialSkeleton: Skeleton): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SkeletonAnimation
     * @classdesc
     * 骨骼动画控制器
     */
    class SkeletonAnimation extends EventDispatcher implements IAnimation {
        /**
        * @language zh_CN
        * 动画播放完一个周期的事件
        */
        static EVENT_PLAY_COMPLETE: string;
        /**
        * @language zh_CN
        * 动画帧更改的事件
        */
        static EVENT_FRAME_CHANGE: string;
        /**
        * @language zh_CN
        * 时间
        */
        time: number;
        /**
        * @language zh_CN
        * 延迟
        */
        delay: number;
        /**
        * @language zh_CN
        * 速度
        */
        speed: number;
        /**
        * @language zh_CN
        * 当前动画
        */
        currentAnim: string;
        /**
        * @language zh_CN
        * 是否开启平滑
        */
        smooth: boolean;
        private _initialSkeleton;
        private _animList;
        private _skeletonMatrix;
        private _animationSkeleton;
        private _bindList;
        private _enabledSkeletonAnimationClips;
        private _eventCallbackList;
        private _skeletonAnimationClips;
        private _blendSkeleton;
        private _useCache;
        private _dirtyFrameNumber;
        private _playSpeed;
        private _playing;
        private _currentFrame;
        private _temp_smooth;
        private _temp_quat;
        private _temp_vec3;
        constructor(initialSkeleton: Skeleton);
        /**
        * @language zh_CN
        * 骨骼动画容器
        * @return SkeletonAnimation对象
        */
        skeletonAnimationController: SkeletonAnimation;
        /**
        * @language zh_CN
        * 初始化Shader
        * @param vertexShader vertexShader
        * @param pixelShader pixelShader
        * @return xxx
        */
        initShader(vertexShader: VertexShader, pixelShader: PixelShader): void;
        /**
        * @language zh_CN
        * 克隆新的SkeletonAnimation对象
        * @return 新的SkeletonAnimation对象
        */
        clone(): SkeletonAnimation;
        /**
        * @language zh_CN
        * 当前播放的骨架矩阵阵列数组
        */
        currentSkeletonMatrixData: Float32Array;
        /**
        * @language zh_CN
        * 骨骼数
        */
        jointNumber: number;
        /**
        * @language zh_CN
        * 添加SkeletonAnimationClip对象
        * @param animationState SkeletonAnimationClip对象
        * @return SkeletonAnimationClip对象
        */
        addSkeletonAnimationClip(animationState: SkeletonAnimationClip): SkeletonAnimationClip;
        /**
        * @language zh_CN
        * 更新
        * @param time 总时间
        * @param delay 延迟时间
        */
        updata(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 播放
        * @param animName 动画名称
        * @param speed 速度
        * @return 是否成功
        */
        play(animName?: string, speed?: number): boolean;
        /**
        * @language zh_CN
        * 播放一次
        * @param animName 动画名称
        * @param speed 播放速度
        * @return 是否成功
        */
        playOnce(animName?: string, speed?: number): boolean;
        /**
        * @language zh_CN
        * 当前帧索引
        */
        /**
        * @language zh_CN
        * 当前帧索引
        */
        currentFrame: number;
        /**
        * @language zh_CN
        * 获取总帧数
        * @param animName 动画名称
        * @return 动画总帧数
        */
        getTotalNumberOfFrame(animName?: string): number;
        /**
        * @language zh_CN
        * 停止动画播放
        */
        stop(): void;
        /**
        * @language zh_CN
        * 动画是否在播放
        * @return 是否在播放
        */
        isPlay(): boolean;
        /**
        * @language zh_CN
        * 设置动画播放速度
        * @param speed 播放速度
        */
        setPlaySpeed(speed: number): void;
        /**
        * @language zh_CN
        * 绑定3D对象到骨骼
        * @param jointName 骨骼名称
        * @param obj3d 3D对象
        * @return 是否成功
        */
        bindToJointPose(jointName: string, obj3d: Object3D): boolean;
        private updateBindList(skeletonPose);
        /**
        * @language zh_CN
        * 获取动画列表
        * @return 动画列表
        */
        getAnimList(): string[];
        /**
        * @language zh_CN
        * 获取动画节点
        */
        getAnimNode(): AnimNodeBase[];
        /**
        * @language zh_CN
        * 脏帧数
        * @return xxx
        */
        dirtyFrameNumber: number;
        /**
        * @language zh_CN
        * 获取SkeletonAnimationClip对象
        * @param name 动画名称
        * @return SkeletonAnimationClip对象
        */
        getAnimationState(name: string): SkeletonAnimationClip;
        /**
        * @language zh_CN
        * 移除动画
        * @param name 动画名称
        */
        removeAnimationState(name: string): void;
        /**
        * @language zh_CN
        * 移除所有动画
        */
        removeAllAnimationStates(): void;
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.VarConstName
    * @classdesc
    * shader 变量 名字定义
    */
    class VarConstName {
        static attribute_position: string;
        static attribute_normal: string;
        static attribute_tangent: string;
        static attribute_vertexColor: string;
        static attribute_uv0: string;
        static attribute_uv1: string;
        static varying_pos: string;
        static varying_normal: string;
        static varying_tangent: string;
        static varying_color: string;
        static varying_uv0: string;
        static varying_uv1: string;
        static varying_globalPos: string;
        static varying_lightDir: string;
        static varying_eye: string;
        static uniform_floatv_0: string;
        static uniform_floatv_1: string;
        static uniform_floatv_2: string;
        static uniform_iv_0: string;
        static uniform_iv_1: string;
        static uniform_iv_2: string;
        static uniform_bv_0: string;
        static uniform_bv_1: string;
        static uniform_bv_2: string;
        static uniform_vec2fv_0: string;
        static uniform_vec2fv_1: string;
        static uniform_vec2fv_2: string;
        static uniform_vec3fv_0: string;
        static uniform_vec3fv_1: string;
        static uniform_vec3fv_2: string;
        static uniform_vec4fv_0: string;
        static uniform_vec4fv_1: string;
        static uniform_vec4fv_2: string;
        static uniform_vec2iv_0: string;
        static uniform_vec2iv_1: string;
        static uniform_vec2iv_2: string;
        static uniform_vec3iv_0: string;
        static uniform_vec3iv_1: string;
        static uniform_vec3iv_2: string;
        static uniform_vec4iv_0: string;
        static uniform_vec4iv_1: string;
        static uniform_vec4iv_2: string;
        static uniform_vec2bv_0: string;
        static uniform_vec2bv_1: string;
        static uniform_vec2bv_2: string;
        static uniform_vec3bv_0: string;
        static uniform_vec3bv_1: string;
        static uniform_vec3bv_2: string;
        static uniform_vec4bv_0: string;
        static uniform_vec4bv_1: string;
        static uniform_vec4bv_2: string;
        static uniform_modelMatrix: string;
        static uniform_projectionMatrix: string;
        static uniform_normalMatrix: string;
        static uniform_eye: string;
        static uniform_lightDir: string;
        static texture2D_0: string;
        static texture2D_1: string;
        static texture2D_2: string;
        static texture2D_3: string;
        static texture2D_4: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.AttributeType
    * @classdesc
    * 属性类型
    */
    class AttributeType {
        static int: string;
        static float: string;
        static vec2: string;
        static vec3: string;
        static vec4: string;
        static mat2: string;
        static mat3: string;
        static mat4: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.UniformType
    * @classdesc
    * Uniform 变量类型
    */
    class UniformType {
        static bool: string;
        static int: string;
        static float: string;
        static vec2: string;
        static vec3: string;
        static vec4: string;
        static bvec2: string;
        static bvec3: string;
        static bvec4: string;
        static ivec2: string;
        static ivec3: string;
        static ivec4: string;
        static mat2: string;
        static mat3: string;
        static mat4: string;
        static sampler2D: string;
        static sampleCube: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.VaryingType
    * @classdesc
    * shader Varying 变量 类型
    */
    class VaryingType {
        static bool: string;
        static int: string;
        static float: string;
        static vec2: string;
        static vec3: string;
        static vec4: string;
        static bvec2: string;
        static bvec3: string;
        static bvec4: string;
        static ivec2: string;
        static ivec3: string;
        static ivec4: string;
        static mat2: string;
        static mat3: string;
        static mat4: string;
        static sampler2D: string;
        static sampleCube: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.VarRegister
    * @classdesc
    * shader 变量 基类
    */
    class VarRegister {
        /**
        * @language zh_CN
        * 值名字
        */
        varName: string;
        /**
        * @language zh_CN
        * 变量名
        */
        name: string;
        /**
        * @language zh_CN
        * 变量属性类型
        */
        key: string;
        /**
        * @language zh_CN
        * 变量类型
        */
        valueType: string;
        /**
        * @language zh_CN
        * 变量值
        */
        value: any;
        /**
        * @language zh_CN
        * usage use
        */
        data: any;
        /**
        * @language zh_CN
        * texture
        */
        texture: egret3d.TextureBase;
        /**
        * @language zh_CN
        * uniform Index
        */
        uniformIndex: any;
        /**
        * @language zh_CN
        * active Texture Index
        */
        activeTextureIndex: number;
        /**
        * @language zh_CN
        * index
        */
        index: number;
        /**
        * @language zh_CN
        * level
        */
        level: string;
        /**
        * @language zh_CN
        * 得到组合后的字符串
        * @param compoments
        */
        var(compoments: string): string;
        /**
        * @language zh_CN
        *
        * @param compoments
        */
        use(compoments?: string): string;
        /**
        * @language zh_CN
        *
        * @returns VarRegister
        */
        clone(): VarRegister;
        protected computeVarName(): void;
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.TmpVar
    * @classdesc
    * 临时变量
    */
    class TmpVar extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.Attribute
    * @classdesc
    * 变量属性
    */
    class Attribute extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.VarRegister
    * @classdesc
    * shader Varying 变量
    */
    class Varying extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.Uniform
    * @classdesc
    * uniform 变量
    */
    class Uniform extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.ConstVar
    * @classdesc
    * 常量
    */
    class ConstVar extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        * @param valueType
        */
        constructor(name: string, valueType: string, value: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.Sampler2D
    * @classdesc
    * 采样2D类型
    */
    class Sampler2D extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.Sampler3D
    * @classdesc
    * 采样3D类型
    */
    class Sampler3D extends VarRegister {
        /**
        * @language zh_CN
        * constructor
        * @param name
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @class egret3d.ShaderBase
    * @classdesc
    * shader 基类
    */
    class ShaderBase {
        protected materialData: MaterialData;
        protected useage: MethodUsageData;
        protected index: number;
        protected source: string;
        protected shadersName: Array<string>;
        protected endShadername: string;
        protected stateChange: boolean;
        /**
        * @language zh_CN
        *
        */
        maxBone: number;
        /**
        * @language zh_CN
        * constructor
        * @param materialData
        * @param usage
        */
        constructor(materialData: MaterialData, usage: MethodUsageData);
        /**
        * @language zh_CN
        *
        * @param shaderName xxx
        */
        addShader(shaderName: string): void;
        /**
        * @language zh_CN
        *
        * @param shaderName xxx
        */
        addEnd(shaderName: string): void;
        /**
        * @language zh_CN
        *
        * @param context3D
        * @param program3D
        * @param modeltransform
        * @param camera3D
        */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @language zh_CN
        *
        * @param context3D
        * @param program3D
        * @param modeltransform
        * @param camera3D
        */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D): void;
        /**
        * @language zh_CN
        *
        * @returns string
        */
        getShaderSource(): string;
        /**
        * @language zh_CN
        *
        * @param att
        */
        connectAtt(att: GLSL.Attribute): void;
        /**
        * @language zh_CN
        *
        * @param tempVar
        */
        connectTemp(tempVar: GLSL.TmpVar): void;
        /**
        * @language zh_CN
        *
        * @param struct
        */
        connectStruct(struct: string): void;
        /**
        * @language zh_CN
        *
        * @param constVar
        */
        connectConst(constVar: GLSL.ConstVar): void;
        /**
        * @language zh_CN
        *
        * @param varying
        */
        connectVarying(varying: GLSL.Varying): void;
        /**
        * @language zh_CN
        *
        * @param unifrom
        */
        connectUniform(unifrom: GLSL.Uniform): void;
        /**
        * @language zh_CN
        *
        * @param sampler
        */
        connectSampler(sampler: GLSL.Sampler2D): void;
        /**
        * @language zh_CN
        *
        * @param sampler
        */
        connectSampler3D(sampler: GLSL.Sampler3D): void;
        private getTexture2DIndex(i);
        /**
        * @language zh_CN
        * dispose
        */
        dispose(): void;
    }
}
declare module egret3d.GLSL {
    class FuncData {
        name: string;
        func: string;
    }
    class ShaderContent {
        name: string;
        private funcDict;
        structDict: {
            [name: string]: string;
        };
        attributeList: Array<Attribute>;
        varyingList: Array<Varying>;
        uniformList: Array<Uniform>;
        constList: Array<ConstVar>;
        tempList: Array<TmpVar>;
        sampler2DList: Array<Sampler2D>;
        sampler3DList: Array<Sampler3D>;
        funcList: Array<FuncData>;
        addVar(sVar: VarRegister): void;
        addFunc(name: string, func: string): void;
        addStruct(name: string, structStr: string): void;
        addContent(otherContent: ShaderContent): void;
        private mergeMainFunc(func1, func2);
        private findFunc(name);
    }
}
declare module egret3d {
    class ShaderSystemTool {
        private libs;
        private _shaderLibs;
        private _methodLibs;
        private _loaderDict;
        private _loadFunc;
        private _loadList;
        private _shaderContentDict;
        private static _filterChar;
        private static _instance;
        /**
        * @language zh_CN
        * @readOnly
        * 单例
        */
        static instance: ShaderSystemTool;
        /**
        * @language zh_CN
        * 注册加载shader文件回调
        * @event func 加载完成响应
        */
        static regist(func: Function): void;
        private load(prefixUrl);
        private onCompleteShader(loader);
        private setupShader(url, data);
        /**
        * @language zh_CN
        * 得到shader内容
        * @param name shader 名字
        * @returns shader内容
        */
        getShaderSource(name: string): string;
        /**
        * @language zh_CN
        * 返回组合shader后的内容
        * @param shaderNameList 要组合的shader名字列表
        * @param usage
        * @returns shader 内容
        */
        getShader(shaderNameList: Array<string>, usage: MethodUsageData): GLSL.ShaderContent;
        private readShader(str);
        private getLineType(line);
        private getAttribute(shaderLine);
        private getTemper(shaderLine);
        private getVarying(shaderLine);
        private getUniform(shaderLine);
        private getConst(shaderLine);
        private getSampler2D(shaderLine);
        private getSampler3D(shaderLine);
        private filterCharacter(name);
        private processStruct(name, structStr, content);
    }
}
declare module egret3d {
    /**
    * @class egret3d.MethodUsageData
    * @classdesc
    * 方法中需要用到的数据
    */
    class MethodUsageData {
        /**
         * @language zh_CN
         */
        passNeedReset: boolean;
        /**
         * @language zh_CN
         */
        uniform_1ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_1fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_2ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_2fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_3ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_3fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_4ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        uniform_4fvs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        attribute_position: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_offset: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_normal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_tangent: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_color: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_uv0: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_uv1: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_boneIndex: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_boneWeight: GLSL.Attribute;
        attribute_rotate: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_acceleRotate: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_scale: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_acceleScale: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_speed: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_acceleSpeed: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        attribute_startSpaceLifeTime: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        uniform_time: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_cameraMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        varying_pos: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_normal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_tangent: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_color: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_uv0: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_uv1: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_eyeNormal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        varying_eyedir: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        TBN: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        uniform_ModelMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_ProjectionMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_normalMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_shadowMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_eyepos: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_PoseMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_sceneWidth: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_sceneHeight: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        sampler2DList: Array<GLSL.Sampler2D>;
        /**
         * @language zh_CN
         */
        sampler3DList: Array<GLSL.Sampler3D>;
        /**
         * @language zh_CN
         */
        uniform_materialSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_LightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_lightModelSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_directLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_sportLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_pointLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        uniform_skyLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        program3D: IProgram3D;
        /**
         * @language zh_CN
         */
        vs_shader: Shader;
        /**
         * @language zh_CN
         */
        fs_shader: Shader;
        /**
         * @language zh_CN
         */
        vsMethodList: Array<MethodBase>;
        /**
         * @language zh_CN
         */
        fsMethodList: Array<MethodBase>;
        /**
         * @language zh_CN
         */
        effectMethodList: Array<EffectMethod>;
        /**
         * @language zh_CN
         */
        materialSourceData: Float32Array;
        /**
         * @language zh_CN
         */
        directLightData: Float32Array;
        /**
         * @language zh_CN
         */
        sportLightData: Float32Array;
        /**
         * @language zh_CN
         */
        pointLightData: Float32Array;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.MaterialData
    * @classdesc
    * 材质数据
    */
    class MaterialData {
        /**
        * @language zh_CN
        * 材质类型
        */
        matType: MaterialType;
        /**
        * @language zh_CN
        * diffuse pass usage data
        */
        diffusePassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 深度 pass usage data
        */
        depthPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 法线 pass usage data
        */
        normalPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * position pass usage data
        */
        positionPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * post pass usage data
        */
        postPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 灯光 pass usage data
        */
        lightPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 阴影 pass usage data
        */
        shadowPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 渲染模式
        */
        drawMode: number;
        /**
        * @language zh_CN
        * 设备
        */
        context3D: Context3D;
        /**
        * @language zh_CN
        * 阴影贴图
        */
        shadowMapTex: TextureBase;
        /**
        * @language zh_CN
        * 漫反射贴图
        */
        diffuseTex: TextureBase;
        /**
        * @language zh_CN
        * 法线贴图
        */
        normalTex: TextureBase;
        /**
        * @language zh_CN
        * 特效贴图
        */
        specularTex: TextureBase;
        /**
        * @language zh_CN
        * 灯光贴图
        */
        lightMapTex: TextureBase;
        /**
        * @language zh_CN
        * ao 贴图
        */
        aoMapTex: TextureBase;
        /**
        * @language zh_CN
        * 环境贴图
        */
        environmentMapTex: TextureBase;
        /**
        * @language zh_CN
        * mask 贴图
        */
        maskTex: TextureBase;
        /**
        * @language zh_CN
        * splat_0 贴图
        */
        splat_0Tex: TextureBase;
        /**
        * @language zh_CN
        * splat_1 贴图
        */
        splat_1Tex: TextureBase;
        /**
        * @language zh_CN
        * splat_2 贴图
        */
        splat_2Tex: TextureBase;
        /**
        * @language zh_CN
        * splat_3 贴图
        */
        splat_3Tex: TextureBase;
        /**
        * @language zh_CN
        * 方向光列表
        */
        directLightList: Array<DirectLight>;
        /**
        * @language zh_CN
        * 聚光灯列表
        */
        sportLightList: Array<SpotLight>;
        /**
        * @language zh_CN
        * 点光源列表
        */
        pointLightList: Array<PointLight>;
        /**
        * @language zh_CN
        *
        */
        layer: number;
        /**
        * @language zh_CN
        *
        */
        castShadow: boolean;
        /**
        * @language zh_CN
        *
        */
        acceptShadow: boolean;
        /**
        * @language zh_CN
        *
        */
        depthTest: boolean;
        /**
        * @language zh_CN
        *
        */
        smooth: boolean;
        /**
        * @language zh_CN
        *
        */
        blendMode: BlendMode;
        /**
        * @language zh_CN
        *
        */
        blend_src: number;
        /**
        * @language zh_CN
        *
        */
        blend_dest: number;
        /**
        * @language zh_CN
        *
        */
        alphaBlending: boolean;
        /**
        * @language zh_CN
        *
        */
        ambientColor: number;
        /**
        * @language zh_CN
        *
        */
        diffuseColor: number;
        /**
        * @language zh_CN
        *
        */
        specularColor: number;
        /**
        * @language zh_CN
        *
        */
        shininess: number;
        /**
        * @language zh_CN
        *
        */
        cutAlpha: number;
        /**
        * @language zh_CN
        *
        */
        repeat: boolean;
        /**
        * @language zh_CN
        *
        */
        bothside: boolean;
        /**
        * @language zh_CN
        *
        */
        alpha: number;
        /**
        * @language zh_CN
        *
        */
        specularPower: number;
        /**
        * @language zh_CN
        *
        */
        ambientPower: number;
        /**
        * @language zh_CN
        *
        */
        diffusePower: number;
        /**
        * @language zh_CN
        *
        */
        normalPower: number;
        /**
        * @language zh_CN
        *
        */
        materialDataNeedChange: boolean;
        /**
        * @language zh_CN
        *
        */
        textureChange: boolean;
        /**
        * @language zh_CN
        *
        */
        passChange: boolean;
        /**
        * @language zh_CN
        *
        */
        cullFrontOrBack: number;
        /**
        * @language zh_CN
        *
        * @returns MaterialData
        */
        clone(): MaterialData;
        /**
        * @language zh_CN
        *
        * @returns
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.MethodBase
    * @classdesc
    * 所有方法的基类
    */
    class MethodBase {
        /**
         * @language zh_CN
         */
        protected materialData: MaterialData;
        /**
         * @language zh_CN
         */
        protected usage: MethodUsageData;
        /**
         * @language zh_CN
         */
        protected vsMethodName: string;
        /**
         * @language zh_CN
         */
        protected fsMethodName: string;
        /**
         * @language zh_CN
         */
        protected context3D: Context3D;
        /**
         * @language zh_CN
         */
        acceptShadow: boolean;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         */
        vertexMethodName: string;
        /**
         * @language zh_CN
         */
        fragMethodName: string;
        /**
         * @language zh_CN
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.VertexShader
    * @classdesc
    * 顶点着色器
    */
    class VertexShader extends GLSL.ShaderBase {
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        constructor(materialData: MaterialData, usage: MethodUsageData);
        /**
         * @language zh_CN
         * @param geometry
         */
        setVertexShader(geometry: GeometryBase): void;
        /**
         * @language zh_CN
         * @returns string
         */
        getShaderSource(): string;
        /**
         * @language zh_CN
         */
        build(): void;
        /**
         * @language zh_CN
         * @param method
         */
        addMethod(method: MethodBase): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.PixelShader
    * @classdesc
    * 像素着色器
    */
    class PixelShader extends GLSL.ShaderBase {
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        constructor(materialData: MaterialData, usage: MethodUsageData);
        /**
         * @language zh_CN
         * @param method
         */
        addMethod(method: MethodBase): void;
        /**
         * @language zh_CN
         * @param method
         */
        addEffectMethod(method: EffectMethod): void;
        /**
         * @language zh_CN
         */
        getShaderSource(): string;
        /**
         * @language zh_CN
         */
        build(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.StaticVertexMethod
    * @classdesc
    * 静态顶点方法
    */
    class StaticVertexMethod extends MethodBase {
        /**
         * @language zh_CN
         * StaticVertexMethod
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
        private normalMatrix;
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ShadowVertexMethod
    * @classdesc
    * 阴影顶点方法
    */
    class ShadowVertexMethod extends MethodBase {
        /**
         * @language zh_CN
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param program3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.SkinVertexMethod
    * @classdesc
    * 蒙皮顶点方法
    */
    class SkinVertexMethod extends MethodBase {
        /**
         * @language zh_CN
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        private normalMatrix;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ShadowMapMethod
    * @classdesc
    * 阴影采样
    */
    class ShadowMapMethod extends MethodBase {
        /**
         * @language zh_CN
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.TerrainMethod
    * @classdesc
    * 地形图方法
    */
    class TerrainMethod extends MethodBase {
        private uvData;
        private uvIndex;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * 设置UVTitling
         * @param index
         * @param x
         * @param y
         */
        setUVTitling(index: number, x: number, y: number): void;
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.NormalMethod
    * @classdesc
    * 法线方法
    */
    class NormalMethod extends MethodBase {
        /**
         * @language zh_CN
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DepthMethod
    * @classdesc
    * 深度方法
    */
    class DepthMethod extends MethodBase {
        /**
         * @language zh_CN
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DiffuseMethod
    * @classdesc
    * 漫反射方法
    */
    class DiffuseMethod extends MethodBase {
        /**
         * @language zh_CN
         */
        constructor();
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ShadowMapingMethod
    * @classdesc
    * 阴影映射
    */
    class ShadowMapingMethod extends MethodBase {
        /**
         * @language zh_CN
         * 偏移值
         */
        bias: number;
        /**
         * @language zh_CN
         * 阴影颜色红色通道值
         */
        shdowColorR: number;
        /**
         * @language zh_CN
         * 阴影颜色绿色通道值
         */
        shdowColorG: number;
        /**
         * @language zh_CN
         * 阴影颜色蓝色通道值
         */
        shdowColorB: number;
        private weightUniformIndex;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * 设置材质信息
         * @param materialData
         * @param usage
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
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
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.EffectMethod
    * @classdesc
    * 效果方法
    */
    class EffectMethod {
        protected materialData: MaterialData;
        protected usage: MethodUsageData;
        protected vsMethodName: string;
        protected fsMethodName: string;
        protected context3D: Context3D;
        /**
         * @language zh_CN
         * constructor
         */
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * @returns string
         */
        vertexMethodName: string;
        /**
         * @language zh_CN
         * @returns string
         */
        fragMethodName: string;
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
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.AOMapMethod
     * @classdesc
     * AO贴图方法
     */
    class AOMapMethod extends EffectMethod {
        private texture;
        /**
         * @language zh_CN
         * @param texture
         */
        constructor(texture: TextureBase);
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * @param texture
         */
        lightTexture: TextureBase;
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
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.LightMapMethod
    * @classdesc
    * 光照贴图方法
    */
    class LightMapMethod extends EffectMethod {
        private texture;
        /**
         * @language zh_CN
         * @param texture
         */
        constructor(texture: TextureBase);
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * @param texture
         */
        lightTexture: TextureBase;
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
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.EnvironmentMappingMethod
    * @classdesc
    * 环境贴图方法
    */
    class EnvironmentMappingMethod extends EffectMethod {
        private texture;
        private reflectValue;
        /**
         * @language zh_CN
         * @param texture
         */
        constructor(texture: TextureBase);
        /**
         *
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        reflect: number;
        /**
         * @language zh_CN
         * @param materialData
         * @param usage
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * @param texture
         */
        lightTexture: TextureBase;
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
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DistanceFog
    * @classdesc
    * 远景雾
    */
    class DistanceFog extends EffectMethod {
        private _fogColor;
        private _globalDensity;
        private _startDistance;
        private _distanceScale;
        private _height;
        private _heightScale;
        private _data;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         */
        /**
         * @language zh_CN
         * @param value
         */
        fogColor: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        globalDensity: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        startDistance: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * number
         * @param value
         */
        distanceScale: number;
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
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
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
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.MaterialPassBase
    * @classdesc
    * 材质通道渲染器
    */
    class MaterialPassBase {
        /**
         * @language zh_CN
         */
        protected shaderChange: boolean;
        /**
         * @language zh_CN
         */
        protected context3DChange: boolean;
        /**
         * @language zh_CN
         */
        protected materialData: MaterialData;
        /**
         * @language zh_CN
         */
        protected vertexShader: VertexShader;
        /**
         * @language zh_CN
         */
        protected pixelShader: PixelShader;
        /**
         * @language zh_CN
         */
        protected methodList: Array<MethodBase>;
        /**
         * @language zh_CN
         */
        protected effectMethodList: Array<EffectMethod>;
        /**
         * @language zh_CN
         */
        diffuseMethod: MethodBase;
        /**
         * @language zh_CN
         */
        shadowMaping: ShadowMapingMethod;
        /**
         * @language zh_CN
         */
        protected animation: IAnimation;
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data?: MaterialData);
        /**
         * @language zh_CN
         * @param method
         */
        addMethod(method: MethodBase): void;
        /**
         * @language zh_CN
         * @param method
         */
        removeMethod(method: MethodBase): void;
        /**
         * @language zh_CN
         * @param method
         */
        addEffectMethod(method: EffectMethod): void;
        /**
         * @language zh_CN
         * @param method
         */
        removeEffectMethod(method: EffectMethod): void;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        cullMode: number;
        /**
         * @language zh_CN
         * @returns boolean
         */
        /**
         * @language zh_CN
         * @param flag
         */
        bothSides: boolean;
        /**
         * @language zh_CN
         * @param lights
         */
        lightGroup: Array<LightBase>;
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
        initShader(context3D: Context3D, geomtry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @returns {}
         */
        protected resetTexture(): void;
        private buildShader(context3D);
        /**
         * @language zh_CN
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         */
        unActive(context3D: Context3D, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DiffuseMapPass
    * @classdesc
    * 漫反射贴图通道渲染器
    */
    class DiffuseMapPass extends MaterialPassBase {
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化
         */
        initUseMethod(): void;
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
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 重置纹理
         */
        protected resetTexture(): void;
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        index: number;
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.TerrainMapPass
    * @classdesc
    * 地形贴图通道渲染器
    */
    class TerrainMapPass extends DiffuseMapPass {
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化
         */
        initUseMethod(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DepthMapPass
    * @classdesc
    * 深度贴图通道渲染器
    */
    class DepthMapPass extends MaterialPassBase {
        private depthMethod;
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         */
        initUseMethod(): void;
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
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        index: number;
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.NormalMapPass
    * @classdesc
    * 发现贴图通道渲染器
    */
    class NormalMapPass extends MaterialPassBase {
        private normalMethod;
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化
         */
        initUseMethod(): void;
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
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         */
        index: number;
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ColorMapPass
    * @classdesc
    * 颜色贴图通道渲染器
    */
    class ColorMapPass extends MaterialPassBase {
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 的地方
         * @param context3D
         * @param geometry
         * @param animation
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 序号
         */
        index: number;
        /**
         * @language zh_CN
         * 更新
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        updata(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ShadowMapPass
    * @classdesc
    * 阴影贴图通道渲染器
    */
    class ShadowMapPass extends MaterialPassBase {
        /**
         * @language zh_CN
         * @param data
         */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化
         */
        initUseMethod(): void;
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
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        private index;
        /**
         * @language zh_CN
         * 激活
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 绘制
         * @param context3D
         * @param modeltransform
         * @param camera3D
         * @param geometry
         * @param animation
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    enum MaterialType {
        DIFFUSE = 0,
        DIFFUSE_BUMP = 1,
        DIFFUSE_BUMP_SPECULAR = 2,
        RGBATERRAIN = 3,
    }
    /**
    * @class egret3d.MaterialBase
    * @classdesc
    * 材质基类
    */
    class MaterialBase {
        /**
         * @language zh_CN
         * 材质数据
         */
        materialData: MaterialData;
        /**
         * @language zh_CN
         * diffuse pass
         */
        diffusePass: MaterialPassBase;
        /**
         * @language zh_CN
         * shadow pass
         */
        shadowPass: ShadowMapPass;
        /**
         * @language zh_CN
         * 法线pass
         */
        normalPass: NormalMapPass;
        /**
         * @language zh_CN
         * 尝试pass
         */
        depthPass: DepthMapPass;
        /**
         * @language zh_CN
         * position pass
         */
        positionPass: MaterialPassBase;
        /**
         * @language zh_CN
         *
         */
        outLinePass: MaterialPassBase;
        /**
         * @language zh_CN
         * @param materialData
         */
        constructor(materialData?: MaterialData);
        /**
         * @language zh_CN
         */
        protected initMatPass(): void;
        /**
         * @language zh_CN
         * @param matData
         */
        setData(matData: MaterialData): void;
        /**
         * @language zh_CN
         * @returns MaterialData
         */
        getData(): MaterialData;
        /**
         * @language zh_CN
         * @param method
         */
        addDiffusePassMothod(method: MethodBase): void;
        /**
         * @language zh_CN
         * @param method
         */
        addDiffusePassEffectMothod(method: EffectMethod): void;
        /**
         * @language zh_CN
         * @returns ShadowMapingMethod
         */
        /**
         * @language zh_CN
         * @param method
         */
        shadowMapingMethod: ShadowMapingMethod;
        /**
         * @language zh_CN
         * @param color
         */
        diffuseColor: number;
        /**
         * @language zh_CN
         * @param color
         */
        ambientColor: number;
        /**
         * @language zh_CN
         * @param color
         */
        specularColor: number;
        /**
         * @language zh_CN
         * 得到alpha
         * @returns alpha
         */
        /**
         * @language zh_CN
         * 设置材质alpha
         * @param value
         */
        alpha: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        shininess: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        specularPower: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        ambientPower: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        diffusePower: number;
        /**
         * @language zh_CN
         * @returns number
         */
        /**
         * @language zh_CN
         * @param value
         */
        normalPower: number;
        /**
         * @language zh_CN
         * @returns boolean
         */
        /**
         * @language zh_CN
         * @param value
         */
        castShadow: boolean;
        /**
         * @language zh_CN
         * @returns boolean
         */
        /**
         * @language zh_CN
         * @param value
         */
        acceptShadow: boolean;
        smooth: boolean;
        repeat: boolean;
        bothside: boolean;
        /**
         * @language zh_CN
         * @returns BlendMode
         */
        blendMode: BlendMode;
        /**
         * @language zh_CN
         * @param color
         * @param thickness
         */
        setOutlineStyler(color: number, thickness: number): void;
        /**
         * @language zh_CN
         * @returns boolean
         */
        /**
         * @language zh_CN
         * @param value
         */
        depthTest: boolean;
        /**
         * @language zh_CN
         * @param lightGroup
         */
        lightGroup: LightGroup;
        /**
         * @language zh_CN
         * @returns TextureBase
         */
        /**
         * @language zh_CN
         * @param texture
         */
        diffuseTexture: TextureBase;
        /**
         * @language zh_CN
         * @param texture
         */
        normalTexture: TextureBase;
        /**
         * @language zh_CN
         * @param texture
         */
        specularTexture: TextureBase;
        /**
         * @language zh_CN
         * @returns MaterialBase
         */
        clone(): MaterialBase;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        activateDiffusePass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        rendenDiffusePass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        activateShadowPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        rendenShadowPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        activateNormalPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        rendenNormalPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        activateDepthPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * @param context3D
         * @param camera3D
         * @param modelMatrix
         * @param geometry
         * @param animation
         */
        rendenDepthPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.TerrainMaterial
    * @classdesc
    * 地形材质
    */
    class TerrainMaterial extends MaterialBase {
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
        constructor(colormap: TextureBase, controlTex: TextureBase, splat_0: TextureBase, splat_1: TextureBase, splat_2: TextureBase, splat_3: TextureBase, lightMap?: TextureBase);
        /**
         * @language zh_CN
         * @param index
         * @param x
         * @param y
         */
        setUVTitling(index: number, x: number, y: number): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.TextureMaterial
    * @classdesc
    * 纹理材质
    */
    class TextureMaterial extends MaterialBase {
        /**
         * @language zh_CN
         * @param texture
         * @param materialData
         */
        constructor(texture?: TextureBase, materialData?: MaterialData);
        /**
         * @language zh_CN
         */
        clone(): TextureMaterial;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Frustum
    * @classdesc
    * 摄相机视椎体
    */
    class Frustum {
        box: CubeBoxBound;
        private _vtxNum;
        private _planeNum;
        private _vertex;
        private _pos;
        private _plane;
        /**
        * @language zh_CN
        * 视椎体中心点
        */
        center: Vector3D;
        private _curVer;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 生成一个视椎体
        * @param fovY 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspectRatio 纵横比，在视空间宽度除以高度.
        * @param nearPlane 近裁剪面位置Z值.
        * @param farPlane 远裁剪面位置Z值.
        */
        makeFrustum(fovY: number, aspectRatio: number, nearPlane: number, farPlane: number): void;
        /**
        * @language zh_CN
        * 数据更新.
        * @param camera 视椎的摄像机.
        */
        update(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 检测一个坐标点是否在视椎体内
        * @param pos 检测的坐标
        @ return 在视椎内返回ture
        */
        inPoint(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 检测一个球是否在视椎体内
        * @param center 球的坐标
        * @param radius 球的半径
        @ return 在视椎内返回ture
        */
        inSphere(center: Vector3D, radius: number): boolean;
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param box 盒子
        @ return 在视椎内返回ture
        */
        inBox(box: CubeBoxBound): boolean;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 3d空间中的实体对象
    */
    class Object3D extends EventDispatcher {
        static renderListChange: boolean;
        static s_id: number;
        protected _modeMatrix3D: Matrix4_4;
        protected _transformChange: boolean;
        protected _pos: Vector3D;
        protected _rot: Vector3D;
        protected _sca: Vector3D;
        protected _orientation: Quaternion;
        protected _globalPos: Vector3D;
        protected _globalRot: Vector3D;
        protected _globalSca: Vector3D;
        protected _globalOrientation: Quaternion;
        protected _qut: Quaternion;
        protected _active: boolean;
        protected _mat: Matrix4_4;
        /**
        * @language zh_CN
        * 当前对象名
        */
        name: string;
        /**
        * @language zh_CN
        * 当前对象id
        */
        id: number;
        /**
        * @language zh_CN
        * 渲染层级
        */
        layer: number;
        /**
        * @language zh_CN
        * 渲染层级分类标签
        */
        tag: Tag;
        /**
        * @language zh_CN
        * 是否开启鼠标事件
        */
        mouseEnable: boolean;
        /**
        * @language zh_CN
        * 是否需要视锥体裁剪
        */
        isCut: boolean;
        /**
        * @language zh_CN
        * 父亲节点
        */
        parent: Object3D;
        /**
        * @language zh_CN
        * 子对象列表
        */
        childs: Array<Object3D>;
        /**
        * @language zh_CN
        * 动作对象
        */
        animation: IAnimation;
        /**
        * @language zh_CN
        * 几何对象
        */
        geometry: GeometryBase;
        /**
        * @language zh_CN
        * 材质
        */
        material: MaterialBase;
        /**
        * @language zh_CN
        * 碰撞盒子
        */
        box: CubeBoxBound;
        /**
        * @language zh_CN
        * 是否开启盒子检测
        */
        isCheckBox: boolean;
        /**
        * @language zh_CN
        * 鼠标检测数据
        */
        pickerData: PickResult;
        /**
        * @language zh_CN
        * 是否控制
        */
        isController: boolean;
        /**
        * @language zh_CN
        * 是否可见
        */
        isVisible: boolean;
        /**
        * @language zh_CN
        * 是否关闭
        */
        isDisable: boolean;
        private _worldBox;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 返回位移
        * @readOnly
        * @returns 位移
        */
        /**
        * @language zh_CN
        * 设置位移
        * @writeOnly
        * @param vec 位移
        */
        position: Vector3D;
        /**
        * @language zh_CN
        * 返回旋转
        * @readOnly
        * @returns 旋转
        */
        /**
        * @language zh_CN
        * 设置旋转
        * @writeOnly
        * @param vec 旋转
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 返回缩放
        * @readOnly
        * @returns 缩放
        */
        /**
        * @language zh_CN
        * 设置缩放
        * @writeOnly
        * @param vec 缩放
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 返回x坐标
        * @readOnly
        * @returns x坐标
        */
        /**
        * @language zh_CN
        * 设置x坐标
        * @writeOnly
        * @param value x坐标
        */
        x: number;
        /**
        * @language zh_CN
        * 返回y坐标
        * @readOnly
        * @returns y坐标
        */
        /**
        * @language zh_CN
        * 设置y坐标
        * @writeOnly
        * @param value y坐标
        */
        y: number;
        /**
        * @language zh_CN
        * 返回z坐标
        * @readOnly
        * @returns z坐标
        */
        /**
        * @language zh_CN
        * 设置z坐标
        * @writeOnly
        * @param value z坐标
        */
        z: number;
        /**
        * @language zh_CN
        * 返回x旋转
        * @readOnly
        * @returns x旋转
        */
        /**
        * @language zh_CN
        * 设置x轴旋转
        * @writeOnly
        * @param value x轴旋转
        */
        rotationX: number;
        /**
        * @language zh_CN
        * 返回y旋转
        * @readOnly
        * @returns y旋转
        */
        /**
        * @language zh_CN
        * 设置y轴旋转
        * @writeOnly
        * @param value y轴旋转
        */
        rotationY: number;
        /**
        * @language zh_CN
        * 返回z旋转
        * @readOnly
        * @returns z旋转
        */
        /**
        * @language zh_CN
        * 设置z轴旋转
        * @writeOnly
        * @param value z轴旋转
        */
        rotationZ: number;
        /**
        * @language zh_CN
        * 返回x缩放
        * @readOnly
        * @returns x缩放
        */
        /**
        * @language zh_CN
        * 设置x轴缩放
        * @writeOnly
        * @param value x轴缩放
        */
        scaleX: number;
        /**
        * @language zh_CN
        * 返回y缩放
        * @readOnly
        * @returns y缩放
        */
        /**
        * @language zh_CN
        * 设置y轴缩放
        * @writeOnly
        * @param value y轴缩放
        */
        scaleY: number;
        /**
        * @language zh_CN
        * 返回z缩放
        * @readOnly
        * @returns z缩放
        */
        /**
        * @language zh_CN
        * 设置z轴缩放
        * @writeOnly
        * @param value z轴缩放
        */
        scaleZ: number;
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * @readOnly
        * @returns object 世界渲染矩阵
        */
        modelMatrix: Matrix4_4;
        protected updateModleMatrix(): void;
        protected onUpdateTransform(): void;
        /**
        * @language zh_CN
        * 返回 object 世界位置
        * @readOnly
        * @returns object 世界位置
        */
        globalPosition: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界旋转
        * @readOnly
        * @returns object 世界旋转
        */
        globalRotation: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界缩放
        * @readOnly
        * @returns object 世界缩放
        */
        globalScale: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界旋转
        * @readOnly
        * @returns object 世界旋转
        */
        globalOrientation: Quaternion;
        /**
        * @language zh_CN
        * 返回 object 世界变换后的碰撞盒子
        * @readOnly
        * @returns object 世界变换后的碰撞盒子
        */
        worldBox: CubeBoxBound;
        /**
        * Moves the 3d object forwards along it's local z axis
        *
        * @param    distance    The length of the movement
        */
        moveForward(distance: number): void;
        /**
        * Moves the 3d object backwards along it's local z axis
        *
        * @param    distance    The length of the movement
        */
        moveBackward(distance: number): void;
        /**
        * Moves the 3d object backwards along it's local x axis
        *
        * @param    distance    The length of the movement
        */
        moveLeft(distance: number): void;
        /**
        * Moves the 3d object forwards along it's local x axis
        *
        * @param    distance    The length of the movement
        */
        moveRight(distance: number): void;
        /**
        * Moves the 3d object forwards along it's local y axis
        *
        * @param    distance    The length of the movement
        */
        moveUp(distance: number): void;
        /**
        * Moves the 3d object backwards along it's local y axis
        *
        * @param    distance    The length of the movement
        */
        moveDown(distance: number): void;
        /**
        * Moves the 3d object along a vector by a defined length
        *
        * @param    axis        The vector defining the axis of movement
        * @param    distance    The length of the movement
        */
        translateLocal(axis: Vector3D, distance: number): void;
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * @param child 增加的子对象
        * @returns 子对象
        */
        addChild(child: Object3D): Object3D;
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * @param child 增加的子对象
        * @param index 子对象的下标
        * @returns 子对象
        */
        addChildAt(child: Object3D, index: number): Object3D;
        /**
        * @language zh_CN
        * 返回下标为index的子对象
        * @param index 子对象下标
        * @returns 如果有就返回子对象,否则就返回null.
        */
        getChildAt(index: number): Object3D;
        /**
        * @language zh_CN
        * 返回子对角child的下标
        * @param child 子对象
        * @returns 如果有就返回子对象的下标,否则就返回-1.
        */
        getChildIndex(child: Object3D): number;
        /**
        * @language zh_CN
        * 移除child子对象 并返回
        * @param child 子对象
        * @returns 如果成功就返回child,否则返回null
        */
        removeChild(child: Object3D): Object3D;
        /**
        * @language zh_CN
        * 移除下标为index的子对象 并返回
        * @param index 子对象的下标
        * @returns 如果成功就返回child,否则返回null
        */
        removeChildAt(index: number): Object3D;
        /**
        * @language zh_CN
        * 设置子对象的下标
        * @param child 子对象
        * @param index 子对象的下标
        */
        setChildIndex(child: Object3D, index: number): void;
        /**
        * @language zh_CN
        * 交换子对象的位置
        * @param child1 子对象1
        * @param child2 子对象2
        */
        swapChildren(child1: Object3D, child2: Object3D): void;
        /**
        * @language zh_CN
        * 交换子对象的位置
        * @param index1 子对象1下标
        * @param index2 子对象2下标
        */
        swapChildrenAt(index1: number, index2: number): void;
        bindWireframe(wireframe: WireframeBase): void;
        /**
        * @language zh_CN
        * 当前对象对视位置
        * @param pos 对象的位置
        * @param target 目标的位置
        * @param up 向上的方向
        */
        lookAt(pos: Vector3D, target: Vector3D, up?: Vector3D): void;
        /**
        * @language zh_CN
        * 返回目标的位置
        * @readOnly
        * @returns 目标的位置
        */
        lookAtPosition: Vector3D;
        protected updateTransformChange(change: boolean): void;
        /**
        * @language zh_CN
        * 当前对象数据更新
        * @param time 当前时间
        * @param delay 每帧时间间隔
        */
        update(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 返回对象的屏幕坐标
        * @param camera 对象渲染的摄像机
        * @returns 对象的屏幕坐标
        */
        getScreenPosition(camera: Camera3D): Vector3D;
    }
}
declare module egret3d {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * 天空球
    */
    class SphereSky {
        private viewMatIndex;
        private skyTexture;
        private vsShaderSource;
        private fsShaderSource;
        private usage;
        private vsShader;
        private fsShader;
        private sphereGeometry;
        private skyMatrix;
        private normalMatrix;
        /**
        * @language zh_CN
        * constructor
        * @param tex1 天空球贴图
        */
        constructor(tex1: HTMLImageElement);
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        */
        setShader(vsName: string, fsName: string): void;
        private rebuild(context3D);
        private px;
        private py;
        private pz;
        private offest;
        /**
        * @language zh_CN
        * 渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        */
        draw(context3D: Context3D, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Sky
    * @classdesc
    * 天空盒子
    */
    class Sky {
        private viewMatIndex;
        private skyTexture;
        private vsShaderSource;
        private fsShaderSource;
        private usage;
        private vsShader;
        private fsShader;
        private cubeGeometry;
        private skyMatrix;
        private modelMatrix;
        /**
        * @language zh_CN
        * constructor
        * @param skyTexture 天空盒子贴图
        */
        constructor(skyTexture: SkyTexture);
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        */
        setShader(vsName: string, fsName: string): void;
        private rebuild(context3D);
        private skyUni;
        private texUni;
        private test;
        private px;
        private py;
        private pz;
        private offest;
        /**
        * @language zh_CN
        * 渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        */
        draw(context3D: Context3D, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Entity
    * @classdesc
    * 3d空间中的实体对象 extends Object3D
    */
    class Entity extends Object3D {
        bound: any;
        canPick: boolean;
        renderLayer: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
    }
}
declare module egret3d {
    enum CameraType {
        perspective = 0,
        orthogonal = 1,
        VR = 2,
    }
    enum VRType {
        left = 0,
        right = 1,
    }
    /**
    * @class egret3d.Camera3D
    * @classdesc
    * 相机数据处理，生成3D摄相机
    */
    class Camera3D extends Entity {
        /**
          * @language en_US
          */
        /**
         * @language zh_CN
         * 相机投影矩阵
         */
        projectMatrix: Matrix4_4;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 眼睛矩阵(左，右眼)
         */
        eyeMatrix: EyesMatrix;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 当前相机使用的世界变换矩阵
         */
        cameraMatrix: Matrix4_4;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * @相机的视椎体
         */
        frustum: Frustum;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         *
         */
        private _viewPort;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _scissorRect;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _aspectRatio;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _fovY;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _near;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _far;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private temp;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _lookAtPosition;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _up;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _cameraType;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _cameraMatrixChange;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _viewMatrix;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _tempQuat;
        /**
         * @language en_US
         * @param cameraType CameraType
         */
        /**
         * @language zh_CN
         * constructor
         * @param cameraType 相机类型
         */
        constructor(cameraType?: CameraType);
        /**
         * @language zh_CN
         * 设置相机类型
         * @param cameraType 相机类型
         */
        cameraType: CameraType;
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
        tap(cameraType: CameraType, vrType?: VRType): void;
        /**
        * @language zh_CN
        * 返回相机横纵比
        * @readOnly
        * @returns 横纵比
        */
        /**
        * @language zh_CN
        * 设置相机横纵比
        * @writeOnly
        * @param value 横纵比
        */
        aspectRatio: number;
        /**
        * @language zh_CN
        * 返回相机fovY
        * @readOnly
        * @returns fovY
        */
        /**
        * @language zh_CN
        * 设置相机fovY
        * @writeOnly
        * @param value fovY
        */
        fieldOfView: number;
        /**
        * @language zh_CN
        * 返回相机近截面
        * @readOnly
        * @returns 近截面
        */
        /**
        * @language zh_CN
        * 设置相机近截面
        * @writeOnly
        * @param value 近截面
        */
        near: number;
        /**
        * @language zh_CN
        * 返回相机远截面
        * @readOnly
        * @returns 远截面
        */
        /**
        * @language zh_CN
        * 设置相机远截面
        * @writeOnly
        * @param value 远截面
        */
        far: number;
        /**
        * @language zh_CN
        * 返回相机视图投影矩阵
        * @readOnly
        * @returns 视图投影矩阵
        */
        viewProjectionMatrix: Matrix4_4;
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
        updateScissorRect(x: number, y: number, width: number, height: number): void;
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
        updateViewport(x: number, y: number, width: number, height: number): void;
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
        lookAt(pos: Vector3D, target: Vector3D, up?: Vector3D): void;
        protected onUpdateTransform(): void;
        /**
         * @language zh_CN
         * @readOnly
         * 相机视图矩阵
         */
        viewMatrix: Matrix4_4;
        /**
         * @language zh_CN
         * @readOnly
         * 相机目标点
         */
        lookAtPosition: Vector3D;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 更新正交矩阵
         */
        updataOrth(): void;
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
        isVisibleToCamera(object: Object3D): boolean;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.LightBase
     * @classdesc
     * 灯光基类
     */
    class LightBase extends Object3D {
        /**
         * @language en_US
         */
        /**
         *@language zh_CN
         * 类型
         */
        protected _lightType: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 环境颜色
         */
        protected _ambient: Vector3D;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 漫反射
         */
        protected _diffuse: Vector3D;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 镜面反射
         */
        protected _specular: Vector3D;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _halfVector: Vector3D;
        /**
        * @language en_US
        * @param value
        */
        /**
         * @language zh_CN
         * @param value 强度
         */
        protected _intensity: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _spotExponent: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _spotCutoff: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _spotCosCutoff: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _constantAttenuation: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _linearAttenuation: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        protected _quadraticAttenuation: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        _lightIndex: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private len;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        private _change;
        constructor();
        /**
         * @language zh_CN
         * @readOnly
         * 得到灯光强度
         */
        /**
         * @language zh_CN
         * @writeOnly
         * 设置灯光强度
         */
        intensity: number;
        /**
         * @language zh_CN
         * @readOnly
         * return ambient
         */
        /**
         * @language zh_CN
         * @writeOnly
         * 设置灯光环境色
         */
        ambient: number;
        /**
         * @language zh_CN
         * @readOnly
         * return diffuse
         */
        /**
         * @language zh_CN
         * @writeOnly
         * 设置灯光漫反射颜色
         */
        diffuse: number;
        /**
         * @language zh_CN
         * @readOnly
         * return specular
         */
        /**
         * @language zh_CN
         * @writeOnly
         * 设置灯光镜面反射颜色
         */
        specular: number;
        private init();
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
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.DirectLight
     * @classdesc
     * 方向光数据处理
     */
    class DirectLight extends LightBase {
        static stride: number;
        /**
        * @language en_US
        * constructor
        */
        /**
        * @language zh_CN
        * constructor
        * @param dir 光线的方向
        */
        constructor(dir: Vector3D);
        /**
         * @language en_US
         * @param value
         */
        /**
        * @language zh_CN
        * @param value 是否投影
        */
        castShadow: boolean;
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
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.PointLight
     * @classdesc
     * 点光源数据处理
     */
    class PointLight extends LightBase {
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        static stride: number;
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
        constructor(color: number);
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
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SpotLight
     * @classdesc
     * 聚光灯数据处理
     */
    class SpotLight extends LightBase {
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        static stride: number;
        /**
         * @language zh_CN
         * constructor
         * @param color {Vector3D}
         */
        constructor(color: Vector3D);
        /**
         * @language en_US
         * @readOnly
         * @returns Cutoff
         */
        /**
         * @language en_US
         * @writeOnly
         * @param value Cutoff
         */
        spotCosCutoff: number;
        /**
         * @language en_US
         * @readOnly
         * @returns 指数
         */
        /**
         * @language en_US
         * @writeOnly
         * @param value 指数
         */
        spotExponent: number;
        /**
         * @language en_US
         * @readOnly
         * @returns 持续衰减
         */
        /**
         * @language en_US
         * @writeOnly
         * @param value 持续衰减
         */
        constantAttenuation: number;
        /**
         * @language en_US
         * @readOnly
         * @returns 线性衰减
         */
        /**
         * @language en_US
         * @writeOnly
         * @param value 线性衰减
         */
        linearAttenuation: number;
        /**
         * @language en_US
         * @readOnly
         * @returns 返回2次衰减
         */
        /**
         * @language en_US
         * @writeOnly
         * @param value 2次衰减
         */
        quadraticAttenuation: number;
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
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.LightGroup
     * @classdesc
     * 灯光管理类
     */
    class LightGroup {
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         */
        lightNum: number;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 方向光列表
         */
        directLightList: Array<DirectLight>;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 聚光灯列表
         */
        spotLightList: Array<SpotLight>;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 点光源列表
         */
        pointLightList: Array<PointLight>;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
         * @language en_US
         * @param light
         */
        /**
         * @language zh_CN
         * 增加一个方向光
         * @param light  Direct Light
         */
        addDirectLight(light: DirectLight): void;
        /**
         * @language en_US
         * @param light
         */
        /**
         * @language zh_CN
         * 增加一个聚光灯
         * @param light Spot Light
         */
        addSpotLight(light: SpotLight): void;
        /**
         * @language en_US
         * @param light
         */
        /**
         * @language zh_CN
         * 增加一个点光源
         * @param light  Point Light
         */
        addPointLight(light: PointLight): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.RenderBase
    * @classdesc
    * 渲染器基类
    */
    class RenderBase {
        protected _renderIndex: number;
        protected _numEntity: number;
        protected _frameBuffer: WebGLFramebuffer;
        protected _frameBufferTexture: WebGLTexture;
        protected _renderList: Array<Object3D>;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 每帧渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * default render
    */
    class DefaultRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.PositionRender
    * @classdesc
    * position render
    */
    class PositionRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        renden(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.NormalRender
    * @classdesc
    * 法线渲染器,渲染有法线的实现对象
    */
    class NormalRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DepthRender
    * @classdesc
    * 深度渲染器 渲染场景中的实体对象
    */
    class DepthRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ShadowRender
    * @classdesc
    * 阴影渲染器
    */
    class ShadowRender extends RenderBase {
        static frameBuffer: FrameBuffer;
        static castShadowLight: LightBase;
        static shadowCamera3D: Camera3D;
        shadowTexture_width: number;
        shadowTexture_height: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D): void;
        private cameraTarget;
        private cameraPos;
        private distance;
        offsetPos(offset: Vector3D): void;
    }
}
declare module egret3d {
    enum RenderType {
        defaultRender = 0,
        positionRender = 1,
        normalRender = 2,
        specularRender = 3,
        shadowRender = 4,
    }
    /**
    * @class egret3d.RenderManager
    * @classdesc
    * 渲染器管理,管理所有的渲染器对象
    */
    class RenderManager {
        private static renders;
        /**
        * @language zh_CN
        * 以渲染类型拿到渲染器
        * @param renderType 渲染类型
        */
        static getRender(renderType: RenderType): RenderBase;
        private static creatSystemRender(renderType);
    }
}
declare module egret3d {
    /**
    * @class egret3d.CollectBase
    * @classdesc
    * Object3D 渲染对象收集器基类
    */
    class CollectBase {
        /**
        * @language zh_CN
        * 可渲染对象列表
        */
        renderList: Array<Object3D>;
        protected _nodes: Array<Object3D>;
        protected _num: number;
        protected _rootNode: Object3D;
        private _tempRootNode;
        private _objDict;
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        */
        constructor(root: Object3D);
        /**
        * @language zh_CN
        * 数据更新
        * @param camera 当前摄像机
        */
        update(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 查找一个对象在渲染列表的下标
        * @param obj 要查找的对象
        * @returns 返回对象在渲染列表的下标
        */
        findRenderObject(obj: Object3D): number;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Layer
    * @classdesc
    * Object3D 渲染Layer
    */
    class Layer {
        /**
        * @language zh_CN
        * 没有alpht的对象列表
        */
        objects: Array<Object3D>;
        /**
        * @language zh_CN
        * 有alpht的对象列表
        */
        alphaObjects: Array<Object3D>;
    }
    /**
    * @class egret3d.Tag
    * @classdesc
    * Object3D 渲染tag
    */
    class Tag {
        /**
        * @language zh_CN
        * layer 列表
        */
        layers: Array<Layer>;
        /**
        * @language zh_CN
        * 是否清理深度
        */
        clearDepth: boolean;
        /**
        * @language zh_CN
        * 层级清理深度状态
        */
        cleanState: boolean;
    }
    /**
    * @class egret3d.EntityCollect
    * @classdesc
    * Object3D 渲染对象收集器
    */
    class EntityCollect extends CollectBase {
        protected _tags: Array<Tag>;
        protected _layers: Array<string>;
        protected _tagsName: Array<string>;
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        */
        constructor(root: Object3D);
        /**
        * @language zh_CN
        * 返回tags 列表
        * @readOnly
        * @returns tags 列表
        */
        tags: Array<Tag>;
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * @param name tag名
        * @param index 下标
        */
        setTags(name: string, index: number): void;
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * @param layer layer名
        * @param index 下标
        */
        setTagsItem(layer: string, index: number): void;
        /**
        * @language zh_CN
        * 得到layer的值
        * @param name tag名
        * @param layer layer名
        * @returns 返回layer的值
        */
        getTagLayer(name?: string, layer?: string): number;
        /**
        * @language zh_CN
        * 得到tag
        * @param name tag名
        * @returns tag
        */
        getTag(name?: string): Tag;
        /**
        * @language zh_CN
        * 增加tag
        * @param name tag名
        * @param clearDapth 是否清理深度
        */
        addTag(name: string, clearDapth?: boolean): void;
        /**
        * @language zh_CN
        * 插入tag
        * @param name tag名
        * @param index 下标
        */
        insertTag(name: string, index: number): void;
        /**
        * @language zh_CN
        * 移除tag
        * @param name tag名
        */
        removeTag(name: string): void;
        /**
        * @language zh_CN
        * 增加layer
        * @param name layer名
        */
        addLayer(name: string): void;
        /**
        * @language zh_CN
        * 插入layer
        * @param name layer名
        * @param index layer下标
        */
        insetLayer(name: string, index: number): void;
        /**
        * @language zh_CN
        * 移除layer
        * @param name layer名
        */
        removeLayer(name: string): void;
        private applyRender(child, camera);
        private addRenderList(object3d, camera);
        /**
        * @language zh_CN
        * 数据更新
        * @param camera 当前摄像机
        */
        update(camera: Camera3D): void;
        protected findLayer(object3d: Object3D): Layer;
        protected findTag(object3d: Object3D): Tag;
        protected clearLayerList(): void;
        protected sort(a: Object3D, b: Object3D, camera: Camera3D): number;
    }
}
declare module egret3d {
    enum FrameBufferType {
        shadowFrameBufrfer = 0,
        defaultFrameBuffer = 1,
        positionFrameBuffer = 2,
        normalFrameBuffer = 3,
        specularFrameBuffer = 4,
        leftEyeFrameBuffer = 5,
        rightEyeFrameBuffer = 6,
        nextFrameBuffer = 7,
    }
    enum FrameBufferFormat {
        FLOAT_RGB = 0,
        FLOAT_RGBA = 1,
        UNSIGNED_BYTE_RGB = 2,
        UNSIGNED_BYTE_RGBA = 3,
    }
    /**
    * @class egret3d.FrameBuffer
    * @classdesc
    * 渲染buffer
    */
    class FrameBuffer {
        frameBufferName: number;
        width: number;
        height: number;
        texture: RenderTexture;
    }
    /**
    * @class egret3d.RttManager
    * @classdesc
    * 离屏渲染管理
    */
    class RttManager {
        static instance: RttManager;
        shadowFrameBufrfer: FrameBuffer;
        defaultFrameBuffer: FrameBuffer;
        positionFrameBuffer: FrameBuffer;
        normalFrameBuffer: FrameBuffer;
        specularFrameBuffer: FrameBuffer;
        leftEyeFrameBuffer: FrameBuffer;
        rightFrameBuffer: FrameBuffer;
        nextFrameBuffer: FrameBuffer;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
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
        static creatFrameBuffer(framName: FrameBufferType, context3D: Context3D, width: number, height: number, format: FrameBufferFormat): FrameBuffer;
        /**
        * @language zh_CN
        * 把帧缓冲的内容渲染到贴图
        * @param time
        * @param delay
        * @param context3D
        * @param collect
        * @param rec
        */
        drawFrameBuffersToTexture(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, rec: Rectangle): void;
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
        static drawToTexture(time: number, delay: number, renderTragetTexture: Texture2D, context3D: Context3D, render: RenderBase, collect: CollectBase, camera: Camera3D, rec: Rectangle): void;
        /**
        * @language zh_CN
        * 开始渲染
        * @param renderTragetTexture
        * @param context3D
        * @param rec
        */
        static drawToTextureStart(renderTragetTexture: Texture2D, context3D: Context3D, rec: Rectangle): void;
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
        static drawToTextureEnd(time: number, delay: number, context3D: Context3D, render: RenderBase, collect: CollectBase, camera: Camera3D, rec: Rectangle): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.GeometryData
     * @classdesc
     * GeometryData类 表示几何形状数据
     */
    class GeometryData {
        /**
        * @language zh_CN
        * 顶点属性长度
        */
        vertexAttLength: number;
        /**
        * @language zh_CN
        *
        */
        length: number;
        /**
        * @language zh_CN
        *
        */
        vertLen: number;
        /**
        * @language zh_CN
        * 索引数据
        */
        source_indexData: Array<number>;
        /**
        * @language zh_CN
        * 顶点数据
        */
        source_vertexData: Array<Vector3D>;
        /**
        * @language zh_CN
        * 顶点色数据
        */
        source_vertexColorData: Array<Vector3D>;
        /**
        * @language zh_CN
        * 顶点法线
        */
        source_normalData: Array<Vector3D>;
        /**
        * @language zh_CN
        * 顶点切线数据
        */
        source_tangtData: Array<number>;
        /**
        * @language zh_CN
        * 顶点uv数据
        */
        source_uvData: Array<UV>;
        /**
        * @language zh_CN
        * 顶点uv2数据
        */
        source_uv2Data: Array<UV>;
        /**
        * @language zh_CN
        * 每个3角面的数据
        */
        source_faceData: Array<FaceData>;
        /**
        * @language zh_CN
        * 蒙皮数据
        */
        source_skinData: Array<number>;
        /**
        * @language zh_CN
        *
        */
        vertexIndex: number;
        /**
        * @language zh_CN
        *
        */
        indices: Array<number>;
        /**
        * @language zh_CN
        *
        */
        vertices: Array<number>;
        /**
        * @language zh_CN
        *
        */
        normals: Array<number>;
        /**
        * @language zh_CN
        *
        */
        tangts: Array<number>;
        /**
        * @language zh_CN
        *
        */
        verticesColor: Array<number>;
        /**
        * @language zh_CN
        *
        */
        uvs: Array<number>;
        /**
        * @language zh_CN
        *
        */
        uv2s: Array<number>;
        /**
        * @language zh_CN
        *
        */
        skinMesh: Array<number>;
        /**
        * @language zh_CN
        *
        */
        faceNormals: Array<number>;
        /**
        * @language zh_CN
        *
        */
        faceWeights: Array<number>;
        /**
        * @language zh_CN
        *
        */
        vertexDatas: Array<number>;
        /**
        * @language zh_CN
        *
        * @param source
        * @returns
        */
        static build(source: GeometryData): GeometryData;
        private static translateMaterialGroup(geomtryData);
        private static translateVertexData(face, vertexIndex, sourceGeomtryData, targetGeomtryData);
        /**
        * 4 pos
        * 3 normal
        * 4 color
        * 2 uv
        * 2 uv2s
        * length 15
        */
        private static combinGeomtryData(geomtrtData, needTangent?);
        /**
         * Updates the normals for each face.
         */
        private static updateFaceNormals(geomtrtData);
        /**
         * Updates the vertex normals based on the geometry.
         */
        private static updateVertexNormals(geomtrtData);
        private static buildFaceTangents(geomtryData);
        private static updateFaceTangents(geomtrtData);
    }
}
declare module egret3d {
    enum GeometryType {
        Static = 0,
        Skin = 1,
        Particle = 2,
        Billbord = 3,
        VertexAnim = 4,
        Grass = 5,
        Ribbon = 6,
        wrieFrame = 7,
        Shadow = 8,
    }
    /**
     * @language zh_CN
     * @class egret3d.GeometryBase
     * @classdesc
     * GeometryBase类 表示几何形状基类
     */
    class GeometryBase {
        /**
        * @language zh_CN
        * 网格类型
        */
        geomtryType: number;
        /**
        * @language zh_CN
        * 顶点属性长度
        */
        vertexAttLength: number;
        /**
        * @language zh_CN
        * 顶点数据
        */
        verticesData: Array<number>;
        /**
        * @language zh_CN
        * 索引数据
        */
        indexData: Array<number>;
        /**
        * @language zh_CN
        *
        */
        numberOfVertices: number;
        /**
        * @language zh_CN
        * 顶点字节数
        */
        vertexSizeInBytes: number;
        /**
        * @language zh_CN
        *
        */
        geometryNum: number;
        /**
        * @language zh_CN
        * 顶点坐标大小
        */
        positionSize: number;
        /**
        * @language zh_CN
        * 顶点法线大小
        */
        normalSize: number;
        /**
        * @language zh_CN
        * 顶点切线大小
        */
        tangentSize: number;
        /**
        * @language zh_CN
        * 顶点色大小
        */
        colorSize: number;
        /**
        * @language zh_CN
        * 顶点uv大小
        */
        uvSize: number;
        /**
        * @language zh_CN
        * 顶点uv2大小
        */
        uv2Size: number;
        /**
        * @language zh_CN
        *
        */
        numItems: number;
        /**
        * @language zh_CN
        * shader buffer
        */
        sharedVertexBuffer: VertexBuffer3D;
        /**
        * @language zh_CN
        * shader index
        */
        sharedIndexBuffer: IndexBuffer3D;
        /**
        * @language zh_CN
        * 包围盒min pos
        */
        minPos: Vector3D;
        /**
        * @language zh_CN
        * 包围盒max pos
        */
        maxPos: Vector3D;
        /**
        * @language zh_CN
        * 漫反射贴图名
        */
        textureFile: string;
        /**
        * @language zh_CN
        * 高光贴图名
        */
        textureSpecular: string;
        /**
        * @language zh_CN
        * 法线贴图名
        */
        textureBump: string;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 生成网格
        */
        buildGeomtry(): void;
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        */
        updata(time: number, delay: number): void;
        /**
        * @language zh_CN
        * 生成包围盒
        */
        buildBoundBox(): void;
        private rotationQ;
        /**
        * @language zh_CN
        * 转旋网格的每个顶点
        * @param euler 转旋欧拉角
        */
        rotationGeomtry(euler: Vector3D): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SubGeometry
     * @classdesc
     * SubGeometry类
     */
    class SubGeometry extends GeometryBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 设置网格数据
        * @param indexData 顶点
        * @param vertexData: 索引
        */
        setGeomtryData(indexData: Array<number>, vertexData: Array<number>): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.CubeGeometry
     * @classdesc
     * CubeGeometry类 表示立方体
     */
    class CubeGeometry extends SubGeometry {
        /**
        * @language zh_CN
        * width
        */
        width: number;
        /**
        * @language zh_CN
        * height
        */
        height: number;
        /**
        * @language zh_CN
        * depth
        */
        depth: number;
        /**
        * @language zh_CN
        * constructor
        * @param width {Number}
        * @param height {Number}
        * @param depth {Number}
        */
        constructor(width?: number, height?: number, depth?: number);
        /**
        * @language zh_CN
        * 生成网格
        */
        buildGeomtry(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SphereGeometry
     * @classdesc
     * SphereGeometry类 表示球体
     */
    class SphereGeometry extends SubGeometry {
        private _segmentsW;
        private _segmentsH;
        private _radius;
        /**
        * @language zh_CN
        * constructor
        * @param r {Number}
        * @param segmentsW {Number}
        * @param segmentsH {Number}
        */
        constructor(r?: number, segmentsW?: number, segmentsH?: number);
        private buildSphere();
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.PlaneGeometry
     * @classdesc
     * PlaneGeometry类
     */
    class PlaneGeometry extends SubGeometry {
        private _segmentsW;
        private _segmentsH;
        private _width;
        private _height;
        private _scaleU;
        private _scaleV;
        private _rotation;
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
        constructor(width?: number, height?: number, segmentsW?: number, segmentsH?: number, uScale?: number, vScale?: number);
        private buildGeometry();
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.CylinderGeometry
     * @classdesc
     * CylinderGeometry类 表示圆柱体
     */
    class CylinderGeometry extends SubGeometry {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 生成网格
        */
        buildGeomtry(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.FaceData
     * @classdesc
     * FaceData类 表示索引数据
     */
    class FaceData {
        /**
        * @language zh_CN
        * 顶点索引数据
        */
        vertexIndices: Array<number>;
        /**
        * @language zh_CN
        * uv索引数据
        */
        uvIndices: Array<number>;
        /**
        * @language zh_CN
        * uv2索引数据
        */
        uv2Indices: Array<number>;
        /**
        * @language zh_CN
        * 法线索引数据
        */
        normalIndices: Array<number>;
        /**
        * @language zh_CN
        * 顶点色索引数据
        */
        colorIndices: Array<number>;
        /**
        * @language zh_CN
        *
        */
        indexIds: Array<any>;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SkinGeometry
     * @classdesc
     * SkinGeometry类
     */
    class SkinGeometry extends GeometryBase {
        /**
        * @language zh_CN
        *
        */
        initialSkeleton: Skeleton;
        /**
        * @language zh_CN
        *
        */
        time0: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 设置网格数据
        * @param indexData 顶点
        * @param vertexData: 索引
        * @param skeleton: 骨骼
        */
        setGeomtryData(indexData: Array<number>, vertexData: Array<number>, skeleton: Skeleton): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.ElevationGeometry
     * @classdesc
     * ElevationGeometry类 表示圆柱体
     */
    class ElevationGeometry extends GeometryBase {
        private _segmentsW;
        private _segmentsH;
        private _width;
        private _height;
        private _depth;
        private _minElevation;
        private _maxElevation;
        private _scaleU;
        private _scaleV;
        private heightmap;
        private canvas;
        private ctx;
        private imageData;
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
        constructor(heightmap: ImageTexture, width?: number, height?: number, depth?: number, segmentsW?: number, segmentsH?: number, maxElevation?: number, minElevation?: number);
        buildTerrain(widthSegment: number, heightSegment: number): void;
        getPixel(x: number, z: number): number;
        getHeightBypos(x: number, z: number): number;
        private buildElevationGeometry();
        private updateFaceNormals();
    }
}
declare module egret3d {
    /**
    * @class egret3d.GeometryUtil
    * @classdesc
    * 网格工具类
    */
    class GeometryUtil {
        /**
        * @language zh_CN
        * 打包模型数据
        * @param num 顶点数
        * @param vertexLen 顶点长度
        * @param source 模型数据
        * @returns 打包后的模型
        */
        static packageGeometry(num: number, vertexLen: number, source: GeometryBase): GeometryBase;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Mesh
    * @classdesc
    * 3d模型 生成渲染模型
    */
    class Mesh extends Object3D {
        /**
        * @language zh_CN
        * constructor
        * @param geometry 模型数据
        * @param material 模型材质
        * @param animation 模型动画
        */
        constructor(geometry: GeometryBase, material: MaterialBase, animation?: IAnimation);
        /**
        * @language zh_CN
        * 克隆一个模型
        * @returns 克隆后的模型
        */
        clone(): Mesh;
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 间隔时间
        */
        update(time: number, delay: number): void;
    }
}
declare module egret3d {
    enum LoaderType {
        LOADER_MODEL_TYPE = 0,
        LOADER_SCENE_TYPE = 1,
        LOADER_TEXTURE_TYPE = 2,
    }
    /**
     * @language zh_CN
     * @class egret3d.BaseLoader
     * @classdesc
     * BaseLoader类
     */
    class BaseLoader extends EventDispatcher {
        /**
         * @language zh_CN
         */
        url: string;
        /**
         * @language zh_CN
         */
        type: LoaderType;
        /**
         * @language zh_CN
         * constructor
         * @param type
         * @param url
         */
        constructor(type: LoaderType, url?: string);
        /**
         * @language zh_CN
         *  加载场景;
         * @param url场景URL路径目录;
         * @returns {}
         */
        load(url?: string): void;
        /**
         * @language zh_CN
         * @returns {}
         */
        protected onLoad(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.TextureLoader
     * @classdesc
     * TextureLoader类 用于Texture文件加载
     */
    class TextureLoader extends BaseLoader {
        private _texture;
        /**
         * @language zh_CN
         * constructor
         * @param url
         */
        constructor(url?: string);
        /**
         * @language zh_CN
         * @returns TextureBase
         */
        texture: TextureBase;
        /**
         * @language zh_CN
         * @returns {}
         */
        protected onLoad(): void;
        private onEMFileLoadComplete(textureLoader);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.ModeLoader
     * @classdesc
     * ModeLoader类
     */
    class ModeLoader extends BaseLoader {
        private _mesh;
        private _geomtry;
        private _esmFile;
        private _eamFiles;
        /**
         * @language zh_CN
         * constructor
         * @param rootURL
         * @param ESMFile
         * @param EAMFiles
         */
        constructor(rootURL?: string, ESMFile?: string, EAMFiles?: string[]);
        /**
         * @language zh_CN
         * @returns string
         */
        esmFile: string;
        /**
         * 模型Mesh对象;
         */
        /**
         * @language zh_CN
         * 模型Mesh对象;
         * @returns Mesh
         */
        mesh: egret3d.Mesh;
        /**
         * 模型GeometryBase对象;
         */
        /**
         * @language zh_CN
         * 模型GeometryBase对象;
         * @returns GeometryBase
         */
        geomtry: egret3d.GeometryBase;
        /**
         * @language zh_CN
         */
        protected onLoad(): void;
        private onESMLoadComplete(rootURL, esmLoader, EAMFiles);
        private loadEAMFile(rootURL, index, EAMFiles);
        private onEAMLoadComplete(rootURL, animation, index, EAMFiles);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SceneLoader
     * @classdesc
     * SceneLoader类 用于Scene文件加载
     */
    class SceneLoader extends BaseLoader {
        private _meshList;
        private _totalNumber;
        /**
         * @language zh_CN
         * constructor
         * @param sceneURL {String}
         */
        constructor(sceneURL?: string);
        /**
         * 场景对象列表;
         */
        /**
         * @language zh_CN
         * 场景对象列表;
         * @returns Array<egret3d.Mesh>
         */
        meshList: Array<egret3d.Mesh>;
        /**
         * @language zh_CN
         */
        protected onLoad(): void;
        private onEMFileLoadComplete(sceneURL, emLoader);
        private loadChild(linkURL, rotation, scaling, translation, url);
        private onLoadComplete(linkLoader, rotation, scaling, translation, url);
        private parsingXML(xmlString);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.URLLoader
     * @classdesc
     * URLLoader类
     */
    class URLLoader {
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 加载的地址
        */
        private _url;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 加载的数据.
        */
        private _data;
        private _xhr;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 控制以哪种方式接收加载的数据.
         * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
         * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
        */
        private _dataformat;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 加载完成的回调函数.
         * 回调函数参数为该UrlLoader实例
        */
        onLoadComplete: Function;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 加载失败的回调函数
        */
        onLoadError: Function;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
         * 加载过程调用的函数
        */
        onLoadProgress: Function;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 以二进制方式接收加载的数据
        */
        static DATAFORMAT_BINARY: string;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
        * 以文本的方式接收加载的数据
         * 默认方式
        */
        static DATAFORMAT_TEXT: string;
        /**
        * @language en_US
        */
        /**
        * @language zh_CN
         * 以音频的方式接收加载的数据
        */
        static DATAFORMAT_SOUND: string;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以图像的方式接收加载的数据
         * 支持jpg.png.等格式
        */
        static DATAFORMAT_BITMAP: string;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以DDS的方式接收加载的数据
        */
        static DATAFORMAT_DDS: string;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以TGA的方式接收加载的数据
        */
        static DATAFORMAT_TGA: string;
        /**
          * @language en_US
          */
        /**
        * @language zh_CN
        * 以ESM格式接收加载的数据
         * Egret3D独有的格式 模型+蒙皮
        */
        static DATAFORMAT_ESM: string;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以EAM格式接收加载的数据
         * Egret3D独有的格式 动作文件
        */
        static DATAFORMAT_EAM: string;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * 以ECA格式接收加载的数据
         * Egret3D独有的格式 相机动画文件
        */
        static DATAFORMAT_ECA: string;
        /**
      * @language en_US

      */
        /**
        * @language zh_CN
        * 以pvr格式接收加载的数据
        */
        static DATAFORMAT_PVR: string;
        /**
      * @language en_US
      */
        /**
        * @language zh_CN
        * @param url 加载数据的地址.如果参数不为空的话.将直接开始加载
         * @param dataformat 以什么方式进行加载.如果为空的话.将通过目标文件的后缀名判断,
         * 如果为空且文件后缀不为内置支持的集中文件类型的话.将以文本格式进行加载解析
        */
        constructor(url?: string, dataformat?: string);
        /**
       * @language en_US
       */
        /**
        * @language zh_CN
        * 加载目标地址的数据
        * @param url 数据地址
        */
        load(url: string): void;
        /**
         * @language zh_CN
         * @returns string
         */
        /**
         * @language zh_CN
         * @param value
         */
        dataformat: string;
        /**
         * @language zh_CN
         * @returns any
         */
        data: any;
        /**
         * @language zh_CN
         * @returns string
         */
        url: string;
        private onReadyStateChange(event);
        private loadComplete();
        private onProgress(event);
        private onError(event);
        private getXHR();
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.AsyncLoadingTexturematerial
     * @classdesc
     * AsyncLoadingTexturematerial类 用于纹理的加载
     */
    class AsyncLoadingTexturematerial {
        private _mat;
        /**
        * @language zh_CN
        * constructor
        * @param mat {egret3d.TextureMaterial}
        */
        constructor(mat: egret3d.TextureMaterial);
        /**
         * 加载纹理
         * @param texture
         * @param bump
         * @param spec
         */
        loadTexture(texture: string, bump?: string, spec?: string): void;
        private __specComplete(e);
        private __textureComplete(e);
        private __bumpComplete(e);
    }
}
declare module egret3d {
    enum DDSFormat {
        RGB_S3TC_DXT1_FORMAT = 2001,
        RGBA_S3TC_DXT1_FORMAT = 2002,
        RGBA_S3TC_DXT3_FORMAT = 2003,
        RGBA_S3TC_DXT5_FORMAT = 2003,
    }
    /**
     * @language zh_CN
     * @class egret3d.DDSParser
     * @classdesc
     * 用 DDSParser 类 解析.dds 文件
     */
    class DDSParser {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
         * @language zh_CN
         * @param buffer 二进制
         * @param loadMipmaps 是否加载mipmaps
         * @returns TextureBase
         */
        static parse(buffer: ArrayBuffer, loadMipmaps?: boolean): TextureBase;
        private static loadARGBMip(buffer, dataOffset, width, height);
        private static fourCCToInt32(value);
        private static int32ToFourCC(value);
        private static softSolutionDXT(width, height, format, byteArray);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.TGAParser
     * @classdesc
     * 用 TGAParser 类 解析.tga 文件
     */
    class TGAParser {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
         * @language zh_CN
         * @param buffer 二进制流
         * @returns TexureBase
         */
        static parse(buffer: ArrayBuffer): TextureBase;
    }
}
declare module egret3d {
    enum ESMDataFormat {
        DATA_FORMAT_STATIC_MODEL = 1,
        DATA_FORMAT_SKELETAL_ANIM_MODEL = 2,
        DATA_FORMAT_EXPORT_MESH = 4,
        DATA_FORMAT_EXIST_VERTEX_POS = 8,
        DATA_FORMAT_EXIST_VERTEX_NORMAL = 16,
        DATA_FORMAT_EXIST_VERTEX_TANGENT = 32,
        DATA_FORMAT_EXIST_VERTEX_COLOR = 64,
        DATA_FORMAT_EXIST_VERTEX_UV1 = 128,
        DATA_FORMAT_EXIST_VERTEX_UV2 = 256,
        DATA_FORMAT_EXIST_SKELETAL_DATA = 512,
        DATA_FORMAT_EXIST_WEIGHTS_DATA = 1024,
    }
    /**
     * @language zh_CN
     * @class egret3d.ESMParser
     * @classdesc
     * 用 ESMParser 类 解析.esm 文件
     */
    class ESMParser {
        /**
          * @language zh_CN
          * @param datas 加载的二进制流
          * @returns GeometryBase
          */
        static parse(datas: ArrayBuffer): GeometryBase;
        /**
         * @language zh_CN
         * 读取mesh信息到传入的geomtryData中
         * @param bytes 二进制流
         * @param geomtryData 网格实例
         * @param formatDescription 数据格式
         * @param version 版本
         */
        private static readMeshInfo(bytes, geomtryData, formatDescription, version);
        /**
         * @language zh_CN
         * 读取顶点信息到geomtryData实例中
         * @param bytes 二进制信息
         * @param geomtryData geomtryData实例
         * @param version 版本
         */
        private static readVertexInfo(bytes, geomtryData, version);
        /**
         * @language zh_CN
         * 读取顶点法线信息
         * @param bytes
         * @param geomtryData
         * @param version
         */
        private static readVertexNormalsInfo(bytes, geomtryData, version);
        /**
         * @language zh_CN
         * 读取顶点颜色
         * @param bytes
         * @param geomtryData
         * @param version
         */
        private static readVertexColorsInfo(bytes, geomtryData, version);
        /**
         * @language zh_CN
         * 读取顶点UV
         * @param bytes
         * @param source_uvData
         * @param version
         */
        private static readVertexUVInfo(bytes, source_uvData, version);
        private static readVertexIndexInfo(bytes, geomtryData, formatDescription, version);
        private static readBoneSkinInfo(bytes, geomtryData, skeleton, version);
        private static readBoneInfo(bytes, skeleton, version);
        private static readSkinInfo(bytes, geomtryData, version);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.EAMParser
     * @classdesc
     * 用 EAMParser 类 解析.eam 文件
     */
    class EAMParser {
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns SkeletonAnimationClip
         */
        static parse(datas: ArrayBuffer): SkeletonAnimationClip;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.ECAParser
     * @classdesc
     * 用 ECAParser 类 解析.eca 文件
     */
    class ECAParser {
        /**
         * @language zh_CN
         * @param datas 加载的二进制流
         * @returns CameraAnimationController
         */
        static parse(datas: ArrayBuffer): CameraAnimationController;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.PVR
     * @classdesc
     * PVR  object
     */
    class PVR {
        mipmaps: Array<MipmapData>;
        width: number;
        height: number;
        format: number;
        mipmapCount: number;
        isCubemap: boolean;
        constructor();
    }
}
declare module egret3d {
    enum PVRFormat {
        RGB_PVRTC_4BPPV1_Format = 2100,
        RGB_PVRTC_2BPPV1_Format = 2101,
        RGBA_PVRTC_4BPPV1_Format = 2102,
        RGBA_PVRTC_2BPPV1_Format = 2103,
    }
    /**
     * @language zh_CN
     * @class egret3d.PVRParser
     * @classdesc
     * �� PVRParser �� ����.pvr �ļ�
     */
    class PVRParser {
        constructor();
        /**
         * @language zh_CN
         * @param buffer
         */
        static parse(buffer: ArrayBuffer): PVR;
        private static _parseV2(pvrDatas);
        private static _parseV3(pvrDatas);
        private static _extract(pvrDatas);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.AssetsManager
     * @classdesc
     * AssetsManager 资源管理类
     */
    class AssetsManager extends EventDispatcher {
        static _instance: AssetsManager;
        private loadList;
        private completeCount;
        private assets;
        private assetsModel;
        private assetsScene;
        private assetsTexture;
        private rootURL;
        /**
         * @language zh_CN
         * @returns AssetsManager
         */
        static getInstance(): AssetsManager;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
         * @language zh_CN
         * 设置根路径
         * @param rootURL
         */
        setRootURL(rootURL: string): void;
        /**
         * @language zh_CN
         * 查找资源
         * @param url
         * @returns any
         */
        findAssets(url: string): any;
        /**
         * @language zh_CN
         * @param url
         * @returns mesh
         */
        findModel(url: string): Mesh;
        /**
         * @language zh_CN
         * @param url
         * @returns Mesh
         */
        findAnimModel(url: string): Mesh;
        /**
         * @language zh_CN
         * @param url
         * @returns Array<Mesh>
         */
        findScene(url: string): Array<Mesh>;
        /**
         * @language zh_CN
         * @param url
         * @returns TexureBase
         */
        findTexture(url: string): TextureBase;
        /**
         * @language zh_CN
         */
        startLoad(): void;
        /**
         * @language zh_CN
         * @param url
         * @param ESMFile
         */
        addLoadModel(url: string, ESMFile: string): void;
        /**
         * @language zh_CN
         * @param url
         * @param ESMFile
         * @param EAMFiles
         */
        addLoadAnimModel(url: string, ESMFile: string, EAMFiles: string[]): void;
        /**
         * @language zh_CN
         * @param url
         */
        addLoadScene(url: string): void;
        /**
         * @language zh_CN
         * @param url
         */
        addLoadTexture(url: string): void;
        private checkComplete(e);
    }
}
declare module egret3d {
    /**
    * @class egret3d.Picker
    * @classdesc
    * 鼠标拾取
    */
    class Picker {
        protected static ray: Ray;
        /**
        * @language zh_CN
        * 返回鼠标拾取对象包围盒子得到的所有对象
        * @param camera 当前相机
        * @param objects 检测的对象列表
        * @returns 拾取的object列表
        */
        static pickObject3DList(camera: Camera3D, objects: Array<Object3D>): Array<Object3D>;
        /**
        * @language zh_CN
        * 返回鼠标拾取对象模型得到的所有对象
        * @param camera 当前相机
        * @param objects 检测的对象列表
        * @returns 拾取的object列表
        */
        static pickObject3DListToMesh(camera: Camera3D, objects: Array<Object3D>): Array<Object3D>;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ControllerBase
    * @classdesc
    * 控制器 基类
    */
    class ControllerBase {
        protected _autoUpdate: boolean;
        protected _target: Object3D;
        /**
        * @language zh_CN
        * constructor
        * @param targetObject 控制的目标
        */
        constructor(targetObject?: Object3D);
        /**
        * @language zh_CN
        * @readOnly
        * @returns 返回当前的目标
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param val 当前的目标
        */
        target: Object3D;
        /**
        * @language zh_CN
        * @readOnly
        * @returns 是否自动更新
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param val 是否自动更新
        */
        autoUpdate: boolean;
        protected notifyUpdate(): void;
        /**
        * @language zh_CN
        * 数据更新
        */
        update(): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.LookAtController
    * @classdesc
    * look at 相机控制器
    */
    class LookAtController extends ControllerBase {
        protected _lookAtObject: Object3D;
        protected _origin: Vector3D;
        protected _lookAtPosition: Vector3D;
        private _eyesPos;
        private _up;
        private _eyesLength;
        private _rotaEyesLine;
        private _eyesLine;
        private _rotaAngle;
        private _matRot;
        private _quaRot;
        private _tempVec;
        private _matTemp;
        private _mouseDown;
        private _mouseRightDown;
        private _screenMoveStartDetail;
        private _screenMoveDelay;
        private _isUpdate;
        private _elapsed;
        private _speed;
        private _xAngle;
        private _keyArray;
        /**
        * @language zh_CN
        * 目标点偏移
        */
        lookAtOffset: Vector3D;
        /**
        * @language zh_CN
        * 是否第一人称相机
        */
        firstCamera: boolean;
        /**
        * @language zh_CN
        * 控制的目标相机，目标对象
        */
        constructor(targetObject?: Object3D, lookAtObject?: Object3D);
        private onSwipeUp();
        private onSwipeDown();
        private onSwipeLeft();
        private onSwipeRight();
        private mouseWheel();
        private mouseMove();
        /**
        * @language zh_CN
        * 返回目标的位置
        * @readOnly
        * @returns 目标的位置
        */
        /**
        * @language zh_CN
        * 设置目标坐标
        * @writeOnly
        * @param val
        */
        lookAtPosition: Vector3D;
        /**
        * @language zh_CN
        * @readOnly
        * 返回目标对象
        * @returns 目标对象
        */
        /**
        * @language zh_CN
        * @writeOnly
        * 设置目标对象
        * @param val 目标
        */
        lookAtObject: Object3D;
        /**
        * @language zh_CN
        * 设置目标和相机的距离
        * @param length 距离
        */
        setEyesLength(length: number): void;
        /**
        * @language zh_CN
        * 数据更新
        */
        update(): void;
        private keyDown(key);
        private keyUp(key);
        private onButtonUp(b);
        private onButtonDown(b);
        private onButtonLeft(b);
        private onButtonRight(b);
    }
}
declare module egret3d {
    /**
    * @class egret3d.CameraAnimationController
    * @classdesc
    * 摄像机动画控制器
    */
    class CameraAnimationController {
        /**
        * @language zh_CN
        * 相机动画每帧数据列表
        */
        cameraAnimationFrames: Array<CameraAnimationFrame>;
        private _camera;
        private _playing;
        private _playTime;
        private _currentFrameIndex;
        private _loop;
        private _smooth;
        private _cameraAnimationFrame;
        /**
        * @language zh_CN
        * @param camera
        */
        constructor(camera?: Camera3D);
        /**
        * @language zh_CN
        * 绑定动画控制的相机
        * @param camera
        */
        bindCamera(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 播放相机动画 是否循环
        * @param isLoop 是否循环播放
        */
        play(isLoop: boolean): void;
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        */
        update(time: number, delay: number): void;
    }
    /**
    * @class egret3d.CameraAnimationFrame
    * @classdesc
    * 摄像机动画每帧数据
    */
    class CameraAnimationFrame {
        /**
        * @language zh_CN
        * 帧时间
        */
        time: number;
        /**
        * @language zh_CN
        * 观察时y 轴方向的角度，就是观察范围夹角。
        */
        fov: number;
        /**
        * @language zh_CN
        * 旋转
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 平移
        */
        translation: Vector3D;
        /**
        * @language zh_CN
        * 计算时用的矩阵
        */
        matrix: Matrix4_4;
    }
}
declare module egret3d {
    /**
    * @class egret3d.CameraAnimationManager
    * @classdesc
    * 摄像机动画控制器管理
    */
    class CameraAnimationManager {
        private _animation;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 播放某个动画
        * @param name 动画名
        * @param camera 相机
        * @param isLoop 是否循环
        */
        play(name: string, camera: Camera3D, isLoop: boolean): void;
        /**
        * @language zh_CN
        * 更新数据
        * @param time 当前时间
        * @param delay 每帧间隔时间
        */
        update(time: number, delay: number): void;
        private onCallback(loader, name, camera, isLoop);
    }
}
declare module egret3d {
    /**
    * @class egret3d.CameraControllerBase
    * @classdesc
    * 相机控制器基类
    */
    class CameraControllerBase {
        protected _view3d: View3D;
        protected _target: Object3D;
        protected _angle: number;
        protected _distance: number;
        protected _wide: number;
        protected _locked: Boolean;
        protected _cameraMoveHandler: Function;
        protected _lockTarget: Boolean;
        protected _lookAtPos: Vector3D;
        /**
        * @language zh_CN
        * constructor
        * @param  view3d
        */
        constructor(view3d: View3D);
        /**
        * @language zh_CN
        *
        * @param angle
        * @param distance
        * @param wide
        * @param locked
        */
        start(angle: number, distance: number, wide: number, locked: Boolean): void;
        /**
        * @language zh_CN
        *
        * @param timer
        * @param elapsed
        */
        update(timer: number, elapsed: number): void;
        /**
        * @language zh_CN
        *
        * @param pos
        */
        setCameraLookAtPos(pos: Vector3D): void;
        /**
        * @language zh_CN
        *
        * @retruns Vector3D
        */
        getCameraPos(): Vector3D;
        /**
        * @language zh_CN
        *
        * @retruns Object3D
        */
        /**
        * @language zh_CN
        *
        * @param obj
        */
        target: Object3D;
        /**
        * @language zh_CN
        *
        * @retruns Boolean
        */
        /**
        * @language zh_CN
        *
        * @param value
        */
        lockTarget: Boolean;
        /**
        * @language zh_CN
        *
        * @retruns Function
        */
        /**
        * @language zh_CN
        *
        * @event handler
        */
        cameraMoveHandler: Function;
    }
}
declare module egret3d {
    /**
    * @class egret3d.FreeCameraControl
    * @classdesc
    * 自由摄相机控制器
    */
    class FreeCameraControl extends CameraControllerBase {
        private _moveSpeed;
        private _moveDetail;
        private _screenMoveStartDetail;
        private _screenMoveDelay;
        private _mouseDown;
        /**
        * @language zh_CN
        * constructor
        */
        constructor(view3d: View3D);
        private initView();
        /**
        * @language zh_CN
        * 初始化
        * @param angle 角度
        * @param distance 相机距离
        * @param wide
        * @param locked 是否锁定
        * @param lockRect
        */
        start(angle: number, distance: number, wide: number, locked: boolean): void;
        /**
        * @language zh_CN
        * 停止控制
        */
        stop(): void;
        protected onKeyDown(key: number): void;
        protected onKeyUp(key: number): void;
        protected mouseMove(): void;
        protected mouseWheel(): void;
        /**
        * @language zh_CN
        * 数据更新
        * @param timer 当前时间
        * @param elapsed 时间间隔
        */
        update(timer: number, elapsed: number): void;
    }
}
declare class DeviceUtil {
    /**
     * @language zh_CN
     * 获取设备信息
     */
    static getDeviceInfo(): any;
    /**
     * @
     */
    /**
     * @language zh_CN
     * 获取GPU类型
     * @returns {}
     */
    static getGPUMode: string;
}
declare module egret3d {
    /**
     * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
     * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
     * @class egret3d.Endian
     * @classdesc
     */
    class Endian {
        /**
         * 表示多字节数字的最低有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.LITTLE_ENDIAN
         */
        static LITTLE_ENDIAN: string;
        /**
         * 表示多字节数字的最高有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @constant {string} egret.Endian.BIG_ENDIAN
         */
        static BIG_ENDIAN: string;
    }
    /**
     * @class egret.ByteArray
     * @classdesc
     * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
     * 注意：ByteArray 类适用于需要在字节层访问数据的高级 开发人员。
     */
    class ByteArray {
        private static SIZE_OF_BOOLEAN;
        private static SIZE_OF_INT8;
        private static SIZE_OF_INT16;
        private static SIZE_OF_INT32;
        private static SIZE_OF_UINT8;
        private static SIZE_OF_UINT16;
        private static SIZE_OF_UINT32;
        private static SIZE_OF_FLOAT32;
        private static SIZE_OF_FLOAT64;
        private BUFFER_EXT_SIZE;
        private data;
        private _position;
        private write_position;
        /**
         * 更改或读取数据的字节顺序；egret.Endian.BIG_ENDIAN 或 egret.Endian.LITTLE_ENDIAN。
         * @default egret.Endian.BIG_ENDIAN
         * @member egret.ByteArray#endian
         */
        endian: string;
        /**
         * 创建一个 egret.ByteArray 对象以引用指定的 ArrayBuffer 对象
         * @param buffer {ArrayBuffer} 数据源
         */
        constructor(buffer?: ArrayBuffer);
        private _setArrayBuffer(buffer);
        /**
         * @private
         */
        buffer: ArrayBuffer;
        /**
         * @private
         */
        dataView: DataView;
        uncompress(type?: string): void;
        /**
         * @private
         */
        bufferOffset: number;
        /**
         * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
         * @member {number} egret.ByteArray#position
         */
        position: number;
        /**
         * ByteArray 对象的长度（以字节为单位）。
         * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
         * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
         * @member {number} egret.ByteArray#length
         */
        length: number;
        /**
         * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
         * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
         * @member {number} egret.ByteArray#bytesAvailable
         */
        bytesAvailable: number;
        /**
         * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
         * @method egret.ByteArray#clear
         */
        clear(): void;
        /**
         * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
         * @returns 如果字节不为零，则返回 true，否则返回 false
         * @method egret.ByteArray#readBoolean
         */
        readBoolean(): boolean;
        /**
         * 从字节流中读取带符号的字节
         * @returns 介于 -128 和 127 之间的整数
         * @method egret.ByteArray#readByte
         */
        readByte(): number;
        /**
         * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @method egret.ByteArray#readBytes
         */
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
         * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
         * @returns 双精度（64 位）浮点数
         * @method egret.ByteArray#readDouble
         */
        readDouble(): number;
        /**
         * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
         * @returns 单精度（32 位）浮点数
         * @method egret.ByteArray#readFloat
         */
        readFloat(): number;
        /**
         * 从字节流中读取一个带符号的 32 位整数
         * @returns 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
         * @method egret.ByteArray#readFloat
         */
        readInt(): number;
        /**
         * 使用指定的字符集从字节流中读取指定长度的多字节字符串
         * @param length 要从字节流中读取的字节数
         * @param charSet 表示用于解释字节的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readMultiByte
         */
        /**
         * 从字节流中读取一个带符号的 16 位整数
         * @returns 介于 -32768 和 32767 之间的 16 位带符号整数
         * @method egret.ByteArray#readShort
         */
        readShort(): number;
        /**
         * 从字节流中读取无符号的字节
         * @returns 介于 0 和 255 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedByte
         */
        readUnsignedByte(): number;
        /**
         * 从字节流中读取一个无符号的 32 位整数
         * @returns 介于 0 和 4294967295 之间的 32 位无符号整数
         * @method egret.ByteArray#readUnsignedInt
         */
        readUnsignedInt(): number;
        /**
         * 从字节流中读取一个无符号的 16 位整数
         * @returns 介于 0 和 65535 之间的 16 位无符号整数
         * @method egret.ByteArray#readUnsignedShort
         */
        readUnsignedShort(): number;
        /**
         * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
         * @returns UTF-8 编码的字符串
         * @method egret.ByteArray#readUTF
         */
        readUTF(): string;
        /**
         * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
         * @param length 指明 UTF-8 字节长度的无符号短整型数
         * @returns 由指定长度的 UTF-8 字节组成的字符串
         * @method egret.ByteArray#readUTFBytes
         */
        readUTFBytes(length: number): string;
        /**
         * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
         * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
         * @method egret.ByteArray#writeBoolean
         */
        writeBoolean(value: boolean): void;
        /**
         * 在字节流中写入一个字节
         * 使用参数的低 8 位。忽略高 24 位
         * @param value 一个 32 位整数。低 8 位将被写入字节流
         * @method egret.ByteArray#writeByte
         */
        writeByte(value: number): void;
        /**
         * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
         * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
         * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
         * @param bytes ByteArray 对象
         * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
         * @param length 一个无符号整数，表示在缓冲区中的写入范围
         * @method egret.ByteArray#writeBytes
         */
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
         * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
         * @param value 双精度（64 位）浮点数
         * @method egret.ByteArray#writeDouble
         */
        writeDouble(value: number): void;
        /**
         * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
         * @param value 单精度（32 位）浮点数
         * @method egret.ByteArray#writeFloat
         */
        writeFloat(value: number): void;
        /**
         * 在字节流中写入一个带符号的 32 位整数
         * @param value 要写入字节流的整数
         * @method egret.ByteArray#writeInt
         */
        writeInt(value: number): void;
        /**
         * 使用指定的字符集将多字节字符串写入字节流
         * @param value 要写入的字符串值
         * @param charSet 表示要使用的字符集的字符串。可能的字符集字符串包括 "shift-jis"、"cn-gb"、"iso-8859-1"”等
         * @method egret.ByteArray#writeMultiByte
         */
        /**
         * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
         * @param value 32 位整数，该整数的低 16 位将被写入字节流
         * @method egret.ByteArray#writeShort
         */
        writeShort(value: number): void;
        /**
         * 在字节流中写入一个无符号的 32 位整数
         * @param value 要写入字节流的无符号整数
         * @method egret.ByteArray#writeUnsignedInt
         */
        writeUnsignedInt(value: number): void;
        /**
         * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTF
         */
        writeUTF(value: string): void;
        /**
         * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
         * @param value 要写入的字符串值
         * @method egret.ByteArray#writeUTFBytes
         */
        writeUTFBytes(value: string): void;
        toString(): string;
        /**
         * 将 Uint8Array 写入字节流
         * @param bytes 要写入的Uint8Array
         * @param validateBuffer
         */
        _writeUint8Array(bytes: Uint8Array, validateBuffer?: boolean): void;
        /**
         * @private
         */
        validate(len: number): boolean;
        /*********************/
        /*********************/
        private validateBuffer(len, needReplace?);
        /**
         * UTF-8 Encoding/Decoding
         */
        private encodeUTF8(str);
        private decodeUTF8(data);
        private encoderError(code_point);
        private decoderError(fatal, opt_code_point?);
        private EOF_byte;
        private EOF_code_point;
        private inRange(a, min, max);
        private div(n, d);
        private stringToCodePoints(string);
    }
}
declare module egret3d {
    /**
     * @class egret3d.StringUtil
     * @classdesc
     * 字符串处理工具类
     */
    class StringUtil {
        /**
         * @language zh_CN
         * 解析文件内容(按行解析)
         * @param file
         * @returns 行列表
         */
        static parseContent(file: string): Array<string>;
        /**
         * @language zh_CN
         * 解析一行的内容 有多少个成员
         * @param line 源内容
         * @returns 成员列表
         */
        static parseLines(line: string): Array<string>;
        /**
         * @language zh_CN
         * 是否存在此字符串
         * @param fields 被检测的列表
         * @param str 比较字符串
         * @returns 成功返回true
         */
        static hasString(fields: Array<string>, str: string): boolean;
        /**
         * @language zh_CN
         * 得到值的内容
         * @param fields 成员列表
         * @returns 值
         */
        static getVarName(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 返回变量的值
         * @param fields 变量数据列表
         * @returns 变量的值
         */
        static getVarValue(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 返回变量类型
         * @param fields 变量数据列表
         * @returns 变量类型
         */
        static getVarType(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 返回变量属性
         * @param fields 变量数据列表
         * @returns 变量属性
         */
        static getVarKey(fields: Array<string>): string;
        /**
         * @language zh_CN
         * 筛选文件中的指定字符去掉
         * @param file xxx
         * @returns 筛选后的字符
         */
        static processShaderFile(file: string): string;
        /**
         * @language zh_CN
         * 解析字符颜色值
         * @param color
         * @returns
         */
        static colorRgb(color: string): string;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Debug
    * @classdesc
    * 调试面板
    */
    class Debug {
        private _console;
        private _isDebug;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * 输出调试信息
         * @param parameters
         */
        trace(...parameters: string[]): void;
        /**
         * @language zh_CN
         * 重置
         */
        reset(): void;
        private static _instance;
        static instance: Debug;
    }
}
declare module egret3d {
    /**
     * @class egret3d.WireframeBase
     * @classdesc
     * 线框渲染基类
     */
    class WireframeBase {
        protected vertexData: Array<number>;
        protected vertexCount: number;
        protected vertexLength: number;
        protected vertexBytes: number;
        /**
        * @language zh_CN
        * 是否以线渲染
        */
        isDrawLine: boolean;
        /**
        * @language zh_CN
        * 是否以点渲染
        */
        isDrawPoint: boolean;
        /**
        * @language zh_CN
        * 渲染顶点的大小
        */
        pointSize: number;
        /**
        * @language zh_CN
        * 渲染顶点的颜色
        */
        pointColor: Vector3D;
        /**
        * @language zh_CN
        * 渲染线的颜色
        */
        lineColor: Vector3D;
        protected vsShaderSource: string;
        protected fsShaderSource: string;
        protected vertexBuffer3D: VertexBuffer3D;
        protected usage: MethodUsageData;
        protected vsShader: GLSL.ShaderBase;
        protected fsShader: GLSL.ShaderBase;
        modleMatrix: Matrix4_4;
        private uniform_color;
        private uniform_pointSize;
        /**
        * @language zh_CN
        * constructor
        * @param vs vs文件名
        * @param fs fs文件名
        */
        constructor(vs?: string, fs?: string);
        /**
        * @language zh_CN
        * 根据geometry创建一个线框
        * @param geometry 模型数据
        */
        createFromGeometry(geometry: GeometryBase): void;
        /**
        * @language zh_CN
        * 根据两个顶点创建一条线段
        * @param first 线段的起始点
        * @param second 线段的结束点
        */
        createFromData(first: Vector3D, second: Vector3D): void;
        /**
        * @language zh_CN
        * 以下标来设置某个顶点的坐标
        * @param index 顶点下标
        * @param pos 设置顶点的坐标
        */
        setVertexPos(index: number, pos: Vector3D): void;
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        */
        setShader(vsName: string, fsName: string): void;
        /**
        * @language zh_CN
        * 渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        */
        draw(context3D: Context3D, camera: Camera3D): void;
        private rebuild(context3D);
    }
}
declare module egret3d {
    /**
     * @class egret3d.WireframeLine
     * @classdesc
     * 线渲染
     */
    class WireframeLine extends WireframeBase {
        /**
        * @language zh_CN
        * constructor
        * @param vs vs文件名
        * @param fs fs文件名
        */
        constructor(vs?: string, fs?: string);
        /**
        * @language zh_CN
        * 根据两个顶点创建一条线段
        * @param first 线段的起始点
        * @param second 线段的结束点
        */
        createFromData(first: Vector3D, second: Vector3D): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.WriframeMesh
     * @classdesc
     * 模型线框网格 以线框形式渲染模型
     */
    class WireframeMesh extends WireframeBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        creatByMesh(mesh: Mesh): void;
        /**
        * @language zh_CN
        * 根据geometry创建一个线框
        * @param geometry 模型数据
        */
        createFromGeometry(geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.PostCanvas
     * @classdesc
     * post canvas
     */
    class PostCanvas {
        private static singleQuadData;
        private static singleQuadIndex;
        private _viewMatrix;
        /**
        * @language zh_CN
        * rectangle
        */
        rectangle: Rectangle;
        /**
        * @language zh_CN
        * texture
        */
        texture: TextureBase;
        /**
        * @language zh_CN
        * texture2
        */
        texture2: TextureBase;
        private vsShaderSource;
        private fsShaderSource;
        private indexBuffer3D;
        private vertexBuffer3D;
        private usage;
        private vsShader;
        private fsShader;
        private viewPort;
        private distortion;
        private distortionK1;
        private distortionK1Register;
        private uniformDistortionK;
        private transformChange;
        private position;
        private rotation;
        private scale;
        /**
        * @language zh_CN
        * @readOnly
        * @returns x
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value x
        */
        x: number;
        /**
        * @language zh_CN
        * @readOnly
        * @returns y
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value y
        */
        y: number;
        /**
        * @language zh_CN
        * @readOnly
        * @returns width
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value width
        */
        width: number;
        /**
        * @language zh_CN
        * @readOnly
        * @returns height
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value height
        */
        height: number;
        constructor(vs?: string, fs?: string);
        /**
        * @language zh_CN
        * 曲面
        */
        startWarped(): void;
        /**
        * @language zh_CN
        * 设置渲染shader文件名
        * @param vsName vs
        * @param fsName fs
        */
        setShader(vsName: string, fsName: string): void;
        private rebuild(context3D);
        private px;
        private py;
        /**
        * @language zh_CN
        * xxxxxxxx
        * @param context3D xxx
        * @param viewPort xxx
        * @returns xxx
        */
        draw(context3D: Context3D, viewPort: Rectangle): void;
        private notifyUpdate();
    }
}
declare module egret3d {
    /**
     * @class egret3d.HUD
     * @classdesc
     * HUD 渲染对象
     */
    class HUD {
        private static singleQuadData;
        private static singleQuadIndex;
        /**
        * @language zh_CN
        * rectangle
        */
        rectangle: Rectangle;
        /**
        * @language zh_CN
        * anchor
        */
        anchor: Vector3D;
        /**
        * @language zh_CN
        * rotation
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * r
        */
        r: number;
        /**
        * @language zh_CN
        * g
        */
        g: number;
        /**
        * @language zh_CN
        * b
        */
        b: number;
        /**
        * @language zh_CN
        * a
        */
        a: number;
        /**
        * @language zh_CN
        * uvRectangle
        */
        uvRectangle: Rectangle;
        /**
        * @language zh_CN
        * texture
        */
        texture: TextureBase;
        /**
        * @language zh_CN
        * viewMatIndex
        */
        viewMatIndex: WebGLUniformLocation;
        /**
        * @language zh_CN
        * uiDataIndex
        */
        uiDataIndex: WebGLUniformLocation;
        /**
        * @language zh_CN
        * materialDataIndex
        */
        materialDataIndex: WebGLUniformLocation;
        private shaderProgram;
        private indexBuffer3D;
        private vertexBuffer3D;
        private posAtt;
        private uvAtt;
        private textureIndex;
        private _viewMatrix;
        private viewPort;
        private quadShader;
        private list;
        constructor();
        /**
        * @language zh_CN
        * @readOnly
        * @returns x
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value x
        */
        x: number;
        /**
        * @language zh_CN
        * @readOnly
        * @returns y
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value y
        */
        y: number;
        /**
        * @language zh_CN
        * @readOnly
        * @returns width
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value width
        */
        width: number;
        /**
        * @language zh_CN
        * @readOnly
        * @returns height
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value height
        */
        height: number;
        private rebuild(context3D);
        /**
        * @language zh_CN
        * 渲染
        * @param context3D Context3D
        */
        draw(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.PostEffectBase
    * @classdesc
    * 后期合成基类
    */
    class PostEffectBase {
        /**
         * @language zh_CN
         */
        nextFrameBuffer: FrameBuffer;
        protected rec: Rectangle;
        protected postCanvas: PostCanvas;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param context3D
         * @param width
         * @param height
         */
        init(context3D: Context3D, width: number, height: number): void;
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.BrightPost
    * @classdesc
    * 后期亮度调整
    */
    class BrightPost extends PostEffectBase {
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.GaussianBlurHorizontalPost
    * @classdesc
    * 后期横向高斯模糊
    */
    class GaussianBlurHorizontalPost extends PostEffectBase {
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.GaussianBlurVerticalPost
    * @classdesc
    * 后期纵向高斯模糊
    */
    class GaussianBlurVerticalPost extends PostEffectBase {
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Composition
    * @classdesc
    * 后期合成
    */
    class Composition extends PostEffectBase {
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Tonemaping
    * @classdesc
    * 颜色调和
    */
    class Tonemaping extends PostEffectBase {
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.HDR
    * @classdesc
    * 后期HDR合成
    */
    class HDR extends PostEffectBase {
        private brightPost;
        private gaussianBlurHorizontalPost;
        private gaussianBlurVerticalPost;
        private composition;
        private toneMap;
        /**
         * @language zh_CN
         */
        constructor();
        /**
         * @language zh_CN
         * @param context3D
         * @param width
         * @param height
         */
        init(context3D: Context3D, width: number, height: number): void;
        private lumAdapt;
        private lum;
        /**
         * @language zh_CN
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.View3D
     * @classdesc
     * 渲染视图
     */
    class View3D {
        protected _root: Object3D;
        protected _context3D: Context3D;
        protected _camera: Camera3D;
        protected _collect: EntityCollect;
        protected _render: RenderBase;
        protected _shadowRender: ShadowRender;
        protected _width: number;
        protected _height: number;
        protected _x: number;
        protected _y: number;
        protected _localPos: Point;
        protected _globalPos: Point;
        protected _globalPosDirty: Boolean;
        protected _aspectRatio: number;
        protected _scissorRect: Rectangle;
        protected _viewPort: Rectangle;
        protected _scissorRectDirty: Boolean;
        protected _viewportDirty: Boolean;
        protected _viewPortMatrix: Matrix4_4;
        protected _useShadow: boolean;
        protected _backImg: HUD;
        protected _postCanvas: PostCanvas;
        protected _sky: Sky;
        protected _sphereSky: SphereSky;
        protected _postList: Array<PostEffectBase>;
        protected _isDeferred: boolean;
        protected _sourceFrameBuffer: FrameBuffer;
        protected _resizeFuncs: Array<Function>;
        private _mouseEventManager;
        /**
        * @language zh_CN
        * @readOnly
        * 返回渲染根节点
        * @returns 根节点
        */
        root: Object3D;
        protected _wireframeList: Array<WireframeBase>;
        protected _hudList: Array<HUD>;
        /**
        * @language zh_CN
        * constructor
        * @param viewPort
        * @param camera
        * @param deferredShading
        */
        constructor(viewPort: Rectangle, camera?: Camera3D, deferredShading?: boolean);
        private resize();
        /**
        * @language zh_CN
        * @readOnly
        */
        /**
        * @language zh_CN
        * @writeOnly
        * 是否使用影子
        * @param flag
        */
        useShadow: boolean;
        protected requestFrameBuffer(): void;
        /**
        * @language zh_CN
        * 监听设备重置回调
        * @event func
        */
        addListenerResize(func: Function): void;
        /**
        * @language zh_CN
        * 得到视口
        * @returns Rectangle
        */
        viewPort: Rectangle;
        /**
        * @language zh_CN
        * 得到天空盒子
        * @readOnly
        */
        /**
        * @language zh_CN
        * 设置天空盒子
        * @writeOnly
        */
        sky: Sky;
        /**
        * @language zh_CN
        * 设置天空球
        * @writeOnly
        */
        sphereSky: SphereSky;
        /**
        * @language zh_CN
        * 增加HUD进渲染列表
        * @param hud
        */
        addHUD(hud: HUD): void;
        /**
        * @language zh_CN
        * 在渲染列表中删除一个HUD
        * @param hud
        */
        delHUN(hud: HUD): void;
        /**
        * @language zh_CN
        * 增加wireframe进渲染列表
        * @param wireframe
        */
        addWireframe(wireframe: WireframeBase): void;
        /**
        * @language zh_CN
        * 在渲染列表中删除一个HUD
        * @param hud
        */
        delWireframe(wireframe: WireframeBase): void;
        /**
        * @language zh_CN
        * 设置背景渲染贴图
        * @param texture 贴图
        */
        backImageTexture: TextureBase;
        /**
        * @language zh_CN
        * xxxxxxxx
        * @param postEffects xxx
        * @returns xxx
        */
        postEffect: Array<PostEffectBase>;
        /**
        * @language zh_CN
        * xxxxxxxx
        * @returns xxx
        */
        collect: CollectBase;
        /**
        * @language zh_CN
        * xxxxxxxx
        * @returns xxx
        */
        camera3D: Camera3D;
        /**
        * @language zh_CN
        * @readOnly
        * @returns Context3D
        */
        context3D: Context3D;
        /**
        * @language zh_CN
        * The width of the viewport. When software rendering is used, this is limited by the
        * platform to 2048 pixels.
        * @returns width
        */
        /**
        * @language zh_CN
        *
        * @param value width
        */
        width: number;
        /**
        * @language zh_CN
        * The height of the viewport. When software rendering is used, this is limited by the
        * platform to 2048 pixels.
        * @returns height
        */
        /**
        * @language zh_CN
        *
        * @param value height
        */
        height: number;
        /**
        * @language zh_CN
        *
        * @returns x
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value x
        */
        x: number;
        /**
        * @language zh_CN
        *
        * @returns y
        */
        /**
        * @language zh_CN
        * @writeOnly
        * @param value y
        */
        y: number;
        /**
        * @language zh_CN
        *
        * @param child3D xxx
        */
        addChild3D(child3D: Object3D): void;
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 时间间隔
        */
        renden(time: number, delay: number): void;
        protected updateViewSizeData(): void;
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * @param name tag名
        * @param index 下标
        */
        setTags(name: string, index: number): void;
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * @param layer layer名
        * @param index 下标
        */
        setTagsItem(layer: string, index: number): void;
        /**
        * @language zh_CN
        * 得到layer的值
        * @param name tag名
        * @param layer layer名
        * @returns 返回layer的值
        */
        getTagLayer(name?: string, layer?: string): number;
        /**
        * @language zh_CN
        * 得到tag
        * @param name tag名
        * @returns tag
        */
        getTag(name?: string): Tag;
    }
}
declare module egret3d {
    /**
     * @class egret3d.VRView3D
     * @classdesc
     * VR渲染视图
     */
    class VRView3D extends View3D {
        private eyeMatrix;
        private leftViewPort;
        private rightViewPort;
        private _leftFrameBuffer;
        private _rightFrameBuffer;
        private _leftCanvas;
        private _rightCanvas;
        /**
        * @language zh_CN
        * constructor
        * @param viewPort
        */
        constructor(viewPort: Rectangle);
        protected requestFrameBuffer(): void;
        private setupVR();
        /**
        * @language zh_CN
        * 设置眼睛空间
        * @param value Eyes Space
        */
        setEyesSpace(value: number): void;
        private tab;
        /**
        * @language zh_CN
        * 渲染
        * @param time 当前时间
        * @param delay 间隔时间
        */
        renden(time: number, delay: number): void;
        private leftEye(time, delay);
        private rightEye(time, delay);
    }
}
declare module egret3d {
    enum KeyCode {
        Key_BackSpace = 8,
        Key_Tab = 9,
        Key_Clear = 10,
        Key_Enter = 11,
        Key_Shift_L = 12,
        Key_Control_L = 13,
        Key_Alt_L = 14,
        Key_Pause = 15,
        Key_CapsLock = 16,
        Key_Escape = 17,
        Key_Space = 18,
        Key_Prior = 19,
        Key_Next = 20,
        Key_End = 21,
        Key_Home = 22,
        Key_Left = 23,
        Key_Up = 24,
        Key_Right = 25,
        Key_Down = 26,
        Key_Select = 27,
        Key_Print = 28,
        Key_Execute = 29,
        Key_Insert = 30,
        Key_Delete = 31,
        Key_Help = 32,
        Key_0 = 48,
        Key_1 = 49,
        Key_2 = 50,
        Key_3 = 51,
        Key_4 = 52,
        Key_5 = 53,
        Key_6 = 54,
        Key_7 = 55,
        Key_8 = 56,
        Key_9 = 57,
        Key_A = 65,
        Key_B = 66,
        Key_C = 67,
        Key_D = 68,
        Key_E = 69,
        Key_F = 70,
        Key_G = 71,
        Key_H = 72,
        Key_I = 73,
        Key_J = 74,
        Key_K = 75,
        Key_L = 76,
        Key_M = 77,
        Key_N = 78,
        Key_O = 79,
        Key_P = 80,
        Key_Q = 81,
        Key_R = 82,
        Key_S = 83,
        Key_T = 84,
        Key_U = 85,
        Key_V = 86,
        Key_W = 87,
        Key_X = 88,
        Key_Y = 89,
        Key_Z = 90,
        Key_KP_0 = 96,
        Key_KP_1 = 97,
        Key_KP_2 = 98,
        Key_KP_3 = 99,
        Key_KP_4 = 100,
        Key_KP_5 = 101,
        Key_KP_6 = 102,
        Key_KP_7 = 103,
        Key_KP_8 = 104,
        Key_KP_9 = 105,
        Key_Multiply = 106,
        Key_Add = 107,
        Key_Separator = 108,
        Key_Subtract = 109,
        Key_Decimal = 110,
        Key_Divide = 111,
        Key_F1 = 112,
        Key_F2 = 113,
        Key_F3 = 114,
        Key_F4 = 115,
        Key_F5 = 116,
        Key_F6 = 117,
        Key_F7 = 118,
        Key_F8 = 119,
        Key_F9 = 120,
        Key_F10 = 121,
        Key_F11 = 122,
        Key_F12 = 123,
        Key_F13 = 124,
        Key_F14 = 125,
        Key_F15 = 126,
        Key_F16 = 127,
        Key_F17 = 128,
        Key_F18 = 129,
        Key_F19 = 130,
        Key_F20 = 131,
        Key_F21 = 132,
        Key_F22 = 133,
        Key_F23 = 134,
        Key_F24 = 135,
        Key_Num_Lock = 136,
        Key_Scroll_Lock = 137,
        Key_Mouse_Left = 256,
        Key_Mouse_Right = 257,
        Key_Mouse_Mid = 258,
    }
    /**
     * @language zh_CN
     * @class egret3d.Input
     * @classdesc
     * 处理输入设备,鼠标.键盘.触摸
     */
    class Input {
        /**
        * @language zh_CN
        * 鼠标X坐标
        */
        mouseX: number;
        /**
        * @language zh_CN
        * 鼠标Y坐标
        */
        mouseY: number;
        /**
        * @language zh_CN
        * 鼠标滚轮增量值
        */
        wheelDelta: number;
        /**
        * @language zh_CN
        * 鼠标X坐标的偏移值
        */
        mouseOffsetX: number;
        /**
        * @language zh_CN
        * 鼠标Y坐标的偏移值
        */
        mouseOffsetY: number;
        /**
        * @language zh_CN
        * 鼠标X坐标
        */
        mouseLastX: number;
        /**
        * @language zh_CN
        * 鼠标Y坐标
        */
        mouseLastY: number;
        private _time;
        private _keyStatus;
        private _listenerKeyClick;
        private _listenerKey;
        private _listenerKeyUp;
        private _listenerKeyDown;
        private _listenerSwipe;
        private _mouseMoveFunc;
        private _mouseWheelFunc;
        private _ondeviceorientation;
        private _ondevicemotion;
        private _listenerGamepadButtons;
        private _touchStartCallback;
        private _touchEndCallback;
        private _touchMoveCallback;
        /**
        * @language zh_CN
        * 游戏手柄Stick1事件侦听函数
        */
        onGamepadStick1: Function;
        /**
        * @language zh_CN
        * 游戏手柄Stick2事件侦听函数
        */
        onGamepadStick2: Function;
        /**
        * @language zh_CN
        * 旋转
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 加速度
        */
        _acceleration: Vector3D;
        /**
        * @language zh_CN
        * 重力
        */
        gravity: Vector3D;
        /**
        * @language zh_CN
        * 象限
        */
        quadrant: number;
        private static _instance;
        /**
        * @language zh_CN
        * 获取Input类对象的单例
        * @returns {Input}
        */
        static instance: Input;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 添加手指按下事件
        * @param callback {Function} 手指按下事件的侦听函数
        */
        addTouchStartCallback(callback: Function): void;
        /**
        * @language zh_CN
        * 添加手指弹起事件
        * @param callback {Function} 手指弹起事件的侦听函数
        */
        addTouchEndCallback(callback: Function): void;
        /**
        * @language zh_CN
        * 添加手指移动事件
        * @param callback {Function} 手指移动事件的侦听函数
        */
        addTouchMoveCallback(callback: Function): void;
        private _gp;
        private ongamepaddisconnected(e);
        private ongamepadconnected(e);
        /**
        * @language zh_CN
        * 游戏手柄按钮是否按下
        * @param index {number}
        * @returns {boolean}
        */
        getGamepadButtonState(index: number): boolean;
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick1
        * @returns {Vector3D}
        */
        getGamepadStick1(): Vector3D;
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick2
        * @returns {Vector3D}
        */
        getGamepadStick2(): Vector3D;
        private canGame();
        /**
        * @language zh_CN
        * 更新游戏手柄信息
        */
        reportOnGamepad(): void;
        private printout();
        private detectShake(evt);
        private _caheX;
        private _caheY;
        private _caheZ;
        private _delayX;
        private _delayY;
        private _delayZ;
        private _first;
        private _initAngle;
        private ondeviceorientation(e);
        private onorientationchange(e);
        private onPinch(x, y, x1, y1);
        private onSwipe(x, y);
        private touchStart(e);
        private _oldPosition1;
        private _oldPosition2;
        private touchEnd(e);
        private touchMove(e);
        /**
        * @language zh_CN
        * 更新游戏手柄信息
        */
        update(): void;
        /**
        * @language zh_CN
        * 添加鼠标移动事件的侦听器函数
        * @param func {Function} 处理鼠标移事件的侦听器函数
        */
        addListenerMouseMove(func: Function): void;
        /**
        * @language zh_CN
        * 添加鼠标滚轮事件的侦听器函数
        * @param func {Function} 处理鼠标滚轮事件的侦听器函数
        */
        addListenerMouseWheel(func: Function): void;
        /**
        * @language zh_CN
        * 添加键盘鼠标点击事件的侦听器函数
        * @param func {Function} 处理键盘鼠标点击事件的侦听器函数
        */
        addListenerKeyClick(func: Function): void;
        /**
        * xxxxxxxx
        * @param func xxx
        * @returns xxx
        */
        addListenerKey(func: Function): void;
        /**
        * @language zh_CN
        * 添加键盘鼠标弹起事件的侦听器函数
        * @param func {Function} 处理键盘鼠标弹起事件的侦听器函数
        */
        addListenerKeyUp(func: Function): void;
        /**
        * @language zh_CN
        * 添加键盘鼠标按下事件的侦听器函数
        * @param func {Function} 处理键盘鼠标按下事件的侦听器函数
        */
        addListenerKeyDown(func: Function): void;
        /**
        * @language zh_CN
        * 添加向上划动的手势事件
        * @param func {Function} 处理向上划动的手势事件的侦听器函数
        */
        addListenerSwipeUp(func: Function): void;
        /**
        * @language zh_CN
        * 添加向下划动的手势事件
        * @param func {Function} 处理向下划动的手势事件的侦听器函数
        */
        addListenerSwipeDown(func: Function): void;
        /**
        * @language zh_CN
        * 添加向左划动的手势事件
        * @param func {Function} 处理向下划动的手势事件的侦听器函数
        */
        addListenerSwipeLeft(func: Function): void;
        /**
        * @language zh_CN
        * 添加向右划动的手势事件
        * @param func {Function} 处理向下划动的手势事件的侦听器函数
        */
        addListenerSwipeRight(func: Function): void;
        /**
        * @language zh_CN
        * 添加设备旋转事件
        * @param func {Function} 设备旋转事件的侦听器函数
        */
        addListenerDeviceorientation(func: Function): void;
        /**
        * @language zh_CN
        * 添加设备移动事件
        * @param func {Function} 设备移动事件的侦听器函数
        */
        addListenerDevicemotion(func: Function): void;
        /**
        * @language zh_CN
        * 添加游戏手柄按钮点击事件
        * @param func {Function} 游戏手柄点击事件的侦听器函数
        */
        addListenerGamePadButtons(func: Function): void;
        private mouseEnd(e);
        private mouseStart(e);
        private mouseMove(e);
        private mouseWheel(e);
        private keyDown(e);
        private keyUp(e);
        private GetSlideAngle(dx, dy);
        /**
        * @language zh_CN
        * 根据起点和终点返回方向
        * @param  startX 起点X坐标
        * @param  startY 起点Y坐标
        * @param  endX   终点X坐标
        * @param  endY   终点Y坐标
        * @returns result {number} 1：向上，2：向下，3：向左，4：向右,0：未滑动
        */
        GetSlideDirection(startX: any, startY: any, endX: any, endY: any): number;
        private isEnlarge(op1, op2, np1, np2);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.OrientationController
     * @classdesc
     * 陀螺仪控制器
     */
    class OrientationController {
        private acc;
        private accGravity;
        private rotationRate;
        private orientation;
        private screenOrientation;
        private openDebug;
        private accDiv;
        private accGravityDiv;
        private rotationRateDiv;
        private orientationRateDiv;
        private stateDiv;
        /**
        * @language zh_CN
        * 偏移旋转
        */
        offsetRotation: Vector3D;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 初始化
        */
        start(): void;
        /**
        * @language zh_CN
        * 释放
        */
        stop(): void;
        /**
        * @language zh_CN
        */
        orientationchangeHandler(): void;
        /**
        * @language zh_CN
        *
        * @param event
        */
        motionHandler(event: DeviceMotionEvent): void;
        /**
        * @language zh_CN
        *
        * @param event
        * @returns
        */
        orientationHandler(event: DeviceOrientationEvent): void;
        /**
        * @language zh_CN
        * 陀螺仪当前旋转角度
        */
        fixOritation: Vector3D;
        private state;
        private debug();
        /**
        * @language zh_CN
        *
        * @returns number
        */
        getOrientation(): number;
        private degtorad;
        private q;
        private q1;
        private outQ;
        /**
        * @language zh_CN
        * 由陀螺仪的角度值计算出旋转四元数
        * @param alpha
        * @param beta
        * @param gamma
        * @returns 旋转四元数
        */
        getQuaternion(alpha: number, beta: number, gamma: number): Quaternion;
        private front;
        private test;
        /**
        * @language zh_CN
        * 数据更新
        * @param camera3D 当前相机
        */
        update(camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.AudioManager
    * @classdesc
    * Audio管理类 支持HTML5 Audio 和 Web Audio
    */
    class AudioManager {
        /**
         * @language zh_CN
         */
        context: any;
        /**
        * @language zh_CN
        * 音量
        */
        volume: number;
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 是否支持 HTML5 Audio tag API
        * @returns {boolean}
        */
        hasAudio(): boolean;
        /**
        * @language zh_CN
        * 是否支持 Web Audio API
        * @returns {boolean}
        */
        hasAudioContext(): boolean;
        private codecs;
        /**
        * @language zh_CN
        * 浏览器是否可以播放这种音频类型
        * @param url 音频路径
        * @param audio {HTMLAudioElement}
        * @returns {boolean}
        */
        isSupported(url: string, audio: HTMLAudioElement): boolean;
        /**
        * @language zh_CN
        * 创建一个新的Sound对象
        * @param {String}   音频文件路径
        * @param {Function} 音频文件加载成功的事件处理函数
        * @param {Function} 音频文件加载失败的事件处理函数
        * @returns {Sound}
        */
        createSound(url: any, success: any, error: any): Sound;
        /**
        * @language zh_CN
        * 创建一个新的 Channel 对象 播放声音
        * @param {sound} 要播放的Sound对象.
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop]  是否循环播放.
        * @returns {Channel}
        */
        playSound(sound: any, options: any): Channel;
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
        playSound3d(sound: Sound, position: Vector3D, options: any): Channel3d;
        private static _instance;
        static instance: AudioManager;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Channel
     * @classdesc
     * 控制音频的 播放，暂停等
     */
    class Channel {
        /**
        * @language zh_CN
        * 设置音量 从0到1
        */
        volume: number;
        /**
        * @language zh_CN
        * 开始/关闭 循环属性 使声音播放结束时重新开始播放
        */
        loop: boolean;
        /**
        * @language zh_CN
        * 开始/关闭 循环属性 使声音播放结束时重新开始播放
        */
        /**
        * @language zh_CN
        * 设置音频 playbackRate
        */
        pitch: number;
        protected context: any;
        protected sound: Sound;
        private paused;
        private startTime;
        private startOffset;
        protected gain: any;
        protected source: any;
        /**
        * @language zh_CN
        * constructor
        * @param sound {Sound}
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop] 是否循环播放.
        */
        constructor(sound: Sound, options: any);
        /**
        * @language zh_CN
        * 开始播放声音
        */
        play(): void;
        /**
        * @language zh_CN
        * 暂停播放声音
        */
        pause(): void;
        /**
        * @language zh_CN
        * 继续播放声音  从暂停的位置继续播放声音
        */
        unpause(): void;
        /**
        * @language zh_CN
        * 停止播放声音  执行 play() 从初始位置开始播放声音
        */
        stop(): void;
        setLoop(value: boolean): void;
        setVolume(value: number): void;
        setPitch(value: number): void;
        /**
        * @language zh_CN
        * 音频是否正在播放
        * @returns {boolean}
        */
        isPlaying(): boolean;
        /**
        * @language zh_CN
        * 音频持续时间
        * @returns {number}
        */
        getDuration(): number;
        protected createSource(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Channel3d
     * @classdesc
     * 控制音频的 播放，暂停，三维空间中的位置
     */
    class Channel3d extends Channel {
        private _panner;
        private _listener;
        /**
        * @language zh_CN
        * 监听者位置
        * @returns {Vector3D}
        */
        /**
        * @language zh_CN
        * 监听者位置
        * @param value {Vector3D}
        */
        listener: Vector3D;
        /**
        * @language zh_CN
        * constructor
        * @param sound {Sound}
        * @param {Object} options
        * @param {Number} [options.volume] 回放音量, 0 到 1.
        * @param {Boolean} [options.loop] 是否循环播放.
        */
        constructor(sound: Sound, options: any);
        private _position;
        /**
        * @language zh_CN
        * 三维空间中的位置
        * @returns {Vector3D}
        */
        /**
        * @language zh_CN
        * 三维空间中的位置
        * @param opsition {Vector3D}
        */
        position: Vector3D;
        private _velocity;
        /**
        * @language zh_CN
        * 传播方向
        * @returns {Vector3D}
        */
        /**
        * @language zh_CN
        * 传播方向
        * @param velocity {Vector3D}
        */
        velocity: Vector3D;
        private _maxDistance;
        /**
        * @language zh_CN
        * 最大距离
        * @returns {Vector3D}
        */
        /**
        * @language zh_CN
        * 最大距离
        * @param max{Number}
        */
        maxDistance: number;
        private _minDistance;
        /**
        * @language zh_CN
        * 最小距离
        * @returns {Vector3D}
        */
        /**
        * @language zh_CN
        * 最小距离
        * @param min{Number}
        */
        minDistance: number;
        private _rollOffFactor;
        /**
        * @language zh_CN
        * rollOff 系数
        * @returns {Number}
        */
        /**
        * @language zh_CN
        * rollOff 系数
        * @param factor {Number}
        */
        rollOffFactor: number;
        protected createSource(): void;
        private fallOff(posOne, posTwo, refDistance, maxDistance, rolloffFactor);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Sound
     * @classdesc
     * 音频数据
     */
    class Sound {
        private isLoaded;
        /**
        * @language zh_CN
        * HTML音频数据
        */
        audio: HTMLAudioElement;
        private _buffer;
        /**
        * @language zh_CN
        * Web音频数据
        * @returns {AudioBuffer}
        */
        buffer: any;
        private _success;
        private _error;
        /**
        * @language zh_CN
        * constructor
        * @param {String}   音频文件路径
        * @param {Function} 音频文件加载成功的事件处理函数
        * @param {Function} 音频文件加载失败的事件处理函数
        */
        constructor(url: string, success: Function, error: Function);
        private xhr;
        private loadAudioFile(url);
        private audioLoadend(e);
        private decodeSuccessCallback(buffer);
        private onended(ev);
        private oncanplaythrough(ev);
    }
}
declare module egret3d {
    /**
     * @class egret3D.Egret3DEngine
     * @classdesc
     * 引擎库文件加载
     */
    class Egret3DEngine {
        private static djs;
        private static scriptSource;
        private static importList;
        private static _xhr;
        private static _libUrl;
        private static _complete;
        private static getXHR();
        /**
         * @language zh_CN
         * 请求读取
         * @event complete 读取完成响应回调
         */
        static preload(complete: Function): void;
        private static onReadyStateChange(event);
        private static loadComplete();
        private static onProgress(event);
        private static onError(event);
        private static applyClass(source);
        private static startLoadScript(e);
        private static loadScriptError(e);
    }
}
