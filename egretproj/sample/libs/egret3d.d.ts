declare module egret3d {
    /**
     * @class egret3d.DrawMode
     * @classdesc
     * 渲染模式
     * LINES 线框显示模式
     * POINTS 点显示模式
     * TRIANGLES 三角形显示模式
     * LINE_STRIP 连接线显示模式
     */
    class DrawMode {
        /**
         * @language zh_CN
         * 线框显示模式
         */
        static LINES: number;
        /**
         * @language zh_CN
         * 点显示模式
         */
        static POINTS: number;
        /**
         * @language zh_CN
         * 三角形显示模式
         */
        static TRIANGLES: number;
        /**
         * @language zh_CN
         * 连接线显示模式
         */
        static LINE_STRIP: number;
    }
    /**
     * @private
     * @class egret3d.Egret3DDrive
     * @classdesc
     * 3d 驱动
     */
    class Egret3DDrive {
        /**
        * @private
        */
        static Direct3D_Opengl_Auto: string;
        /**
        * @private
        */
        static Direct3D_9_0: string;
        /**
        * @private
        */
        static Direct3D_10_0: string;
        /**
        * @private
        */
        static Direct3D_11_0: string;
        /**
        * @private
        */
        static OpenGLES_2_0: string;
        /**
        * @private
        */
        static OpenGLES_3_0: string;
        /**
        * @private
        */
        static OpenGL: string;
        /**
        * @private
        */
        static context3D: Context3D;
        /**
        * @private
        */
        static canvas: HTMLCanvasElement;
        /**
        * @private
        */
        static VERTEX_SHADER: number;
        /**
        * @private
        */
        static FRAGMENT_SHADER: number;
        /**
        * @private
        */
        static BLEND: number;
        /**
        * @private
        */
        static FLOAT: number;
        /**
        * @private
        */
        static CULL_FACE: number;
        /**
        * @private
        */
        static FRONT: number;
        /**
        * @private
        */
        static BACK: number;
        /**
        * 深度测试
        */
        static DEPTH_TEST: number;
        /**
        * 深度缓冲值
        */
        static DEPTH_BUFFER_BIT: number;
        /**
        * @private
        */
        static ELEMENT_ARRAY_BUFFER: number;
        /**
        * @private
        */
        static UNSIGNED_SHORT: number;
        /**
        * @private
        */
        static NEAREST: number;
        /**
        * @private
        */
        static REPEAT: number;
        /**
        * @private
        */
        static ONE: number;
        /**
        * @private
        */
        static ZERO: number;
        /**
        * @private
        */
        static SRC_ALPHA: number;
        /**
        * @private
        */
        static ONE_MINUS_SRC_ALPHA: number;
        /**
        * @private
        */
        static SRC_COLOR: number;
        /**
        * @private
        */
        static ONE_MINUS_SRC_COLOR: number;
        /**
        * @private
        */
        static ColorFormat_RGB565: number;
        /**
        * @private
        */
        static ColorFormat_RGBA5551: number;
        /**
        * @private
        */
        static ColorFormat_RGBA4444: number;
        /**
        * @private
        */
        static ColorFormat_RGBA8888: number;
        /**
        * @private
        */
        static ColorFormat_DXT1_RGB: number;
        /**
        * @private
        */
        static ColorFormat_DXT1_RGBA: number;
        /**
        * @private
        */
        static ColorFormat_DXT3_RGBA: number;
        /**
        * @private
        */
        static ColorFormat_DXT5_RGBA: number;
        /**
        * canvas窗口矩形
        */
        static canvasRectangle: Rectangle;
        /**
        * 用户窗口矩形
        */
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
        private static requestWEBGL(viewPort, blend2D?);
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
    /**
    * @private
    */
    interface IProgram3D {
        /**
        *
        */
        program: any;
        /**
        *
        */
        vertextAttribActive: boolean;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.IndexBuffer3D
    * @classdesc
    * 网格的顶点索引数据基类
    * @version Egret 3.0
    * @platform Web,Native
    */
    interface IndexBuffer3D {
        /**
        * 由number类型组成的数组
        */
        buffer: any;
    }
}
declare module egret3d {
    /**
    * @class egret3d.MipmapData
    * @classdesc
    * 一个贴图的不同LOD层级数据。</p>
    * 生成 mipmap 可以使用 TextureUtil.generateMipMaps() 来制作lod mipmapdata。</p>
    *
    *
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MipmapData {
        /**
        *
        * @language zh_CN
        *
        * array buffer类型的 像素值信息
        */
        data: Uint8Array;
        /**
        *
        * @language zh_CN
        *
        * 此mipmap的大小宽度
        */
        width: number;
        /**
        *
        * @language zh_CN
        *
        * 此mipmap的大小高度
        */
        height: number;
        constructor(data: Uint8Array, width: number, height: number);
    }
}
declare module egret3d {
    /**
    * @private
    */
    enum InternalFormat {
        PixelArray = 0,
        CompressData = 1,
        ImageData = 2,
    }
    /**
    * @private
    */
    interface ITexture2D {
        /**
        *
        */
        gpu_index: number;
        /**
        *
        */
        gpu_border: number;
        /**
        *
        */
        gpu_texture: any;
        /**
        *
        */
        gpu_colorformat: number;
        /**
        *
        */
        gpu_internalformat: InternalFormat;
        /**
        *
        */
        width: number;
        /**
        *
        */
        height: number;
        /**
        *
        */
        image: HTMLImageElement;
        /**
        *
        */
        mipmapDatas: Array<MipmapData>;
        /**
        *
        */
        frameBuffer: WebGLFramebuffer;
        /**
        *
        */
        renderbuffer: WebGLRenderbuffer;
    }
}
declare module egret3d {
    /**
    * @private
    */
    interface ICubeTexture {
        /**
        *
        */
        gpu_texture: any;
        /**
        *
        */
        image: HTMLImageElement;
        /**
        *
        */
        image_front: TextureBase;
        /**
        *
        */
        image_back: TextureBase;
        /**
        *
        */
        image_left: TextureBase;
        /**
        *
        */
        image_right: TextureBase;
        /**
        *
        */
        image_up: TextureBase;
        /**
        *
        */
        image_down: TextureBase;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.IVertexBuffer3D
    * @classdesc
    * 网格的顶点数据基类
    * @version Egret 3.0
    * @platform Web,Native
    */
    interface IVertexBuffer3D {
        /**
        * 由number类型组成的数组
        */
        buffer: any;
    }
}
declare module egret3d {
    /**
    * @private
    */
    interface IShader {
        /**
        *
        */
        id: number;
        /**
        *
        */
        shader: any;
    }
}
declare module egret3d.openGLES {
    /**
    * @class egret3d.openGLES.IndexBuffer3D
    * @classdesc
    * IndexBuffer3D 用于表示顶点索引列表，由图形子系统保留的图形元素构成。</p>
    *
    * 定义一个立方图纹理，以便在渲染期间使用。立方体贴图可用于多种渲染技术，例如环境图、skyboxes 和 skylight 光照。</p>
    * 不能直接创建 CubeTexture 对象，而应使用 Context3D createCubeTexture()。</p>
    *
    * 由 IndexBuffer3D 对象管理的索引可用于从顶点流中选择顶点。索引为 16 位无符号整数。所允许的最大索引值为 65535 (0xffff)。图形子系统不会保留对提供给此对象的顶点的引用。修改或丢弃上载到此对象中的数据不会影响已存储的值。</p>

    * 无法直接实例化 IndexBuffer3D。使用 Context3D.CreateIndexBuffer() 可创建实例。</p>
    * @see egret3d.Context3D
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class IndexBuffer3D implements egret3d.IndexBuffer3D {
        /**
        * @language zh_CN
        * @private
        * WebGLBuffer 的引用
        */
        buffer: WebGLBuffer;
        /**
        * @language zh_CN
        * 构造
        * @param buffer webglbuffer
        */
        constructor(buffer: WebGLBuffer);
    }
}
declare module egret3d.openGLES {
    /**
    * @class egret3d.openGLES.Program3D
    * @classdesc
    * Program3D 类表示上载到渲染上下文的一对渲染程序（也称为“编译后的着色器”）。</p>
    *
    * 由 Program3D 对象管理的程序控制 drawTriangles 调用期间的整个三角形渲染。使用 upload 方法将二进制字节码上载到渲染上下文。（上载完成后，将不再引用原始字节数组中的数据；更改或放弃源字节数组不会更改该程序。）。</p>
    * 这些程序始终由两个相互关联的部分组成：顶点程序和片段程序。</p>
    * 顶点程序会操作 VertexBuffer3D 中定义的数据，负责将顶点投影到剪辑空间，并将任何所需的顶点数据（例如颜色）传递到片段着色器。</p>
    * 片段着色器会操作顶点程序传递给它的属性，并为三角形的每个栅格化片段生成颜色，最终形成像素颜色。请注意，片段程序在 3D 编程文献中具有多个名称，包括片段着色器和像素着色器。</p>
    * 通过将相应 Program3D 实例传递到 Context3D setProgram() 方法，指定后续渲染操作要使用的程序对。</p>
    * 您无法直接创建 Program3D 对象；请改用 Context3D createProgram() 方法。</p>
    *
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Program3D implements egret3d.IProgram3D {
        /**
        * @language zh_CN
        * @private
        * WebGLBuffer 的引用
        */
        vertextAttribActive: boolean;
        /**
        * @language zh_CN
        * @private
        * WebGLProgram 的引用
        */
        program: WebGLProgram;
        /**
        * @language zh_CN
        * 构造
        */
        constructor(pg3D: WebGLProgram);
    }
}
declare module egret3d.openGLES {
    /**
    * @class egret3d.openGLES.Shader
    * @classdesc
    * Shader 类表示上载到渲染上下文的一对渲染程序中的 顶点找色shader，或片段着色的shader 。</p>
    *
    * shader 是基于 opengl es 2.0 标准 也就是webgl版本的shader着色器。</p>
    *
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Shader implements egret3d.IShader {
        /**
       * @language zh_CN
       * @private
       * 获取已经有的shader 的ID
       */
        static ID_COUNT: number;
        /**
        * @language zh_CN
        *
        * 获取已经有的shader 的ID
        */
        id: number;
        /**
        * @language zh_CN
        * @private
        * WebGLShader 的引用
        */
        private _shader;
        /**
        * @language zh_CN
        * 构造
        */
        constructor(shader: WebGLShader);
        /**
        * @language zh_CN
        * @private
        * WebGLShader 的引用
        */
        shader: WebGLShader;
    }
}
declare module egret3d.openGLES {
    /**
    * @class egret3d.openGLES.Texture2D
    * @classdesc
    * Texture 类表示上载到渲染上下文的二维纹理。</p>
    *
    * 定义一个 2D 纹理，以便在渲染期间使用。</p>
    * 无法直接实例化 Texture。使用 Context3D createTexture() 方法创建实例。</p>
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Texture2D implements egret3d.ITexture2D {
        /**
        * @language zh_CN
        * @private
        * Context3D 引用
        */
        private context3D;
        /**
        * @language zh_CN
        * @private
        * 提交显卡的 index
        */
        gpu_index: number;
        /**
        * @language zh_CN
        * @private
        * 显卡中上传使用的 border 边框像素大小
        */
        gpu_border: number;
        /**
        * @language zh_CN
        * @private
        * 纹理贴图的颜色模式
        */
        gpu_colorformat: number;
        /**
        * @language zh_CN
        * @private
        * 纹理贴图标准的格式
        */
        gpu_internalformat: InternalFormat;
        /**
        * @language zh_CN
        * @private
        * context.creatTexture()接口生成的GPU纹理
        */
        gpu_texture: any;
        /**
        * @language zh_CN
        * @private
        * 网页imageElement 的标签贴图
        */
        image: HTMLImageElement;
        /**
        * @language zh_CN
        * @private
        * 二维纹理中的mimap
        * 二维纹理中的 LOD texture 贴图这个可以通过 textureUtil.generateMipMaps() api 来生成
        */
        mipmapDatas: Array<MipmapData>;
        /**
        * @private
        */
        frameBuffer: WebGLFramebuffer;
        /**
        * @private
        */
        renderbuffer: WebGLRenderbuffer;
        /**
        * @language zh_CN
        *
        * 二维纹理中的 像素宽度
        */
        width: number;
        /**
        * @language zh_CN
        *
        * 二维纹理中的 像素高度
        */
        height: number;
        /**
        * @language zh_CN
        * 构造
        * @param texture2D webgl贴图数据
        * @param context3D 上下文数据
        */
        constructor(texture2D: WebGLTexture, context3D: any);
    }
}
declare module egret3d.openGLES {
    /**
    * @class egret3d.openGLES.CubeTexture
    * @classdesc
    * CubeTexture 类表示上载到渲染上下文的立方体纹理。
    *
    * 定义一个立方图纹理，以便在渲染期间使用。立方体贴图可用于多种渲染技术，例如环境图、skyboxes 和 skylight 光照。
    * 不能直接创建 CubeTexture 对象，而应使用 Context3D createCubeTexture()。
    *
    *
    * @see egret3d.openGLES.Texture2D
    *  @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CubeTexture implements egret3d.ICubeTexture {
        /**
        * @language zh_CN
        * gpu texture 的引用
        * @private
        */
        gpu_texture: any;
        /**
        * @language zh_CN
        * texture 的引用
        * @private
        */
        image: HTMLImageElement;
        /**
        * @language zh_CN
        * 立方体贴图的 前面
        */
        image_front: TextureBase;
        /**
        * @language zh_CN
        * 立方体贴图的 后面
        */
        image_back: TextureBase;
        /**
        * @language zh_CN
        * 立方体贴图的 左面
        */
        image_left: TextureBase;
        /**
        * @language zh_CN
        * 立方体贴图的 右面
        */
        image_right: TextureBase;
        /**
        * @language zh_CN
        * 立方体贴图的 上面
        */
        image_up: TextureBase;
        /**
        * @language zh_CN
        * 立方体贴图的 下面
        */
        image_down: TextureBase;
        constructor(cubeTexture: WebGLTexture);
    }
}
declare module egret3d.openGLES {
    /**
     * @class egret3d.openGLES.IndexBuffer3D
     * @classdesc
     * IndexBuffer3D 用于表示顶点索引列表，由图形子系统保留的图形元素构成。</p>
     * VertexBuffer3D 类表示上载到渲染上下文的一组顶点数据。</p>
     * 使用 VertexBuffer3D 对象定义与一组顶点中每个点相关联的数据。</p>
     * 您可以从 Vector 数组或 ByteArray 上载顶点数据。（上载完成后，将不再引用原始数组中的数据；更改或放弃源数组不会更改顶点数据。）</p>
     * 与每个顶点相关联的数据采用应用程序定义的格式，并用作顶点着色器程序的输入。</p>
     * 使用 Context3D.vertexAttribPointer  函数标识哪些值属于哪个顶点程序输入。</p>
     * 一个顶点程序最多可以使用 8 个输入（也称为顶点属性寄存器）。</p>
     * 每个输入可能需要 1 到 4 个 32 位值。</p>
     * 例如，一个顶点的 [x,y,z] 位置坐标可以作为包含 3 个 32 位值的矢量传递到顶点程序。</p>
     * 您最多可以为每个点提供 64 个 32 位值（256 字节）数据（但在这种情况下，单个顶点着色器无法使用所有数据）。</p>
     * @see egret3d.Context3D
     * @see egret3d.openGLES.CubeTexture
     * @version Egret 3.0
     * @platform Web,Native
     */
    class VertexBuffer3D implements egret3d.IVertexBuffer3D {
        /**
         *
         * @language zh_CN
         * @private
         * WebGLBuffer的引用
         */
        buffer: WebGLBuffer;
        /**
         * @language zh_CN
         * 构造
         * @param buffer webglbuffer
         */
        constructor(buffer: WebGLBuffer);
    }
}
declare module egret3d {
    /**
       * @class egret3d.FrameBuffer
       * @classdesc
       * FrameBuffer 类提供了用于呈现几何定义图形的上下文的帧缓冲对象。</p>
       *
       * 渲染上下文包括一个绘图表面及其关联的资源帧缓冲对象。</p>
       * 通过context creatFrameBuffer 来创建，不能直接使用 new 的方式实例化。</p>
       * @see egret3d.openGLES.Program3D
       * @see egret3d.openGLES.IndexBuffer3D
       * @see egret3d.openGLES.VertexBuffer3D
       * @see egret3d.openGLES.Texture2D
       * @see egret3d.openGLES.Shader
       * @see egret3d.openGLES.CubeTexture
       * @version Egret 3.0
       * @platform Web,Native
       */
    class FrameBuffer {
        /**
        * @language zh_CN
        * @private
        * frame buferr 的buffer 名字
        */
        frameBufferName: number;
        /**
        * @language zh_CN
        * @private
        * frame buferr 的 像素宽度
        */
        width: number;
        /**
        * @language zh_CN
        * @private
        * frame buferr 的 像素高度
        */
        height: number;
        /**
        * @language zh_CN
        * @private
        * RenderTexture 的引用
        */
        texture: RenderTexture;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Context3D
    * @classdesc
    * Context3D 类提供了用于呈现几何定义图形的上下文。</p>
    *
    * 渲染上下文包括一个绘图表面及其关联的资源和状态。</p>
    * Context3D 渲染上下文是一个可编程的管道，基于OpenGL ES 2.0规范。</p>
    * 您可以通过提供适当的顶点和像素片段程序来创建 2D/3D渲染器，不同的平台有不同的硬件限制，对于移动端限制要求比较大。</p>
    * egret3d.Egret3DDrive.requstContext3D（DeviceUtil.getGPUMode , viewPort , callBack），且，一个canvas 只能申请一个context。</p>
    *
    * @see egret3d.openGLES.Program3D
    * @see egret3d.openGLES.IndexBuffer3D
    * @see egret3d.openGLES.VertexBuffer3D
    * @see egret3d.openGLES.Texture2D
    * @see egret3d.openGLES.Shader
    * @see egret3d.openGLES.CubeTexture
    * @version Egret 3.0
    * @platform Web,Native
    */
    interface Context3D {
        /**
        * @language zh_CN
        * @private
        * WebGLRenderingContext 的引用
        */
        gl: WebGLRenderingContext;
        /**
        * @language zh_CN
        * @private
        */
        version: string;
        /**
        * @language zh_CN
        * @private
        */
        isLost: boolean;
        /**
        * @language zh_CN
        * 设置渲染缓冲区的视口尺寸和其他属性
        *
        * 缓冲区的最大大小受到设备能力的限制，也可以由用户通过 viewPort 进行设置。配置缓冲区是一个缓慢的操作。在正常渲染操作期间，请避免更改缓冲区大小或属性。
        * @param x 渲染视口的位置坐标 X
        * @param y 渲染视口的位置坐标 y
        * @param width  渲染视口的宽度
        * @param height  渲染视口的高度
        */
        viewPort(x: number, y: number, width: number, height: number): any;
        /**
        * @language zh_CN
        * 创建 Program3D 对象。
        *
        * 每一个渲染对象都需要这样一个显卡着色程序
        * @param 顶点着色 Shader
        * @param 片段着色 Shader
        */
        creatProgram(vsShader: IShader, fsShader: IShader): IProgram3D;
        /**
        * @language zh_CN
        * 创建 顶点索引流
        *
        * 使用 IndexBuffer3D 对象将一组三角形索引上载到渲染上下文，并在渲染时引用这组索引。索引缓冲区中的每个索引引用顶点缓冲区中一个相对应的顶点。由 3 个索引组成的每一组索引标识一个三角形。将 IndexBuffer3D 对象传递给 drawTriangles() 方法以渲染索引缓冲区中定义的一个或多个三角形。
        * @param indexData 传入模型的顶点索引数组对象3个点为一个三角形（0/1/2 或者 0/2/1 ）不同的顺序不同现实方向，正向索引就是正面，反向索引就是反面
        */
        creatIndexBuffer(indexData: Array<number>): IndexBuffer3D;
        /**
        * @language zh_CN
        *
        * 创建 VertexBuffer3D 对象。
        *
        * 每一个顶点的数据结构也会不同，可以使用   context3D.vertexAttribPointer（） 的方式来指定顶点的数据结构
        * 不能直接使用 new VertexBuffer3D() 的方式来创建对象
        * @param vertexData 传入模型的顶点数据
        */
        creatVertexBuffer(vertexData: Array<number>): IVertexBuffer3D;
        /**
        * @language zh_CN
        *
        * 创建 GPU级别的显示贴图
        *
        * 创建 GPU级别的显示贴图辅助对象，不能直接使用 new Texture2D() 的方式来创建贴图显示对象
        */
        creatTexture2D(): ITexture2D;
        /**
        * @language zh_CN
        *
        * 上传贴图信息给GPU到 显存
        *
        * 在显卡渲染中，不同的深度会进行优化显示，显示不同的贴图LOD级别，可以通过 upLoadTextureData（） 上传需要显示的层级关系
        * @param mipLevel load 贴图层级
        * @param textureMipmap 贴图
        */
        upLoadTextureData(mipLevel: number, textureMipmap: ITexture2D): any;
        /**
        * @language zh_CN
        *
        * 上传压缩格式贴图信息给GPU 显存
        *
        * 贴图格式分压缩后，和未压缩，压缩后的贴图体积更小，加载快，但是上传GPU时，需要解压过程，耗费一定的时间，这个时间是根据贴图像素大小而定
        * @param mipLevel load 贴图层级
        * @param textureMipmap 上传mipmap
        */
        upLoadCompressedTexture2D(mipLevel: number, textureMipmap: ITexture2D): any;
        /**
        * @language zh_CN
        *
        * 设置贴图采样的状态
        *
        * 在上传贴图的时候就可以设计贴图采样方式，也可后修改贴图采样
        * 采样方式决定了贴图的显示精度，uv 的使用方式，如果超过uv的坐标是取最大值重复，还是取下一个 0.0~1.0 的循环
        * @param min_filter 最小 uv 边界 纹理使用方式
        * @param mag_filter 最大 uv 边界 纹理使用方式
        * @param wrap_u_filter u 边界 纹理使用方式
        * @param wrap_v_filter v 边界 纹理使用方式
        */
        setTexture2DSamplerState(min_filter: number, mag_filter: number, wrap_u_filter: number, wrap_v_filter: number): any;
        /**
        * @language zh_CN
        *
        * 创建 Cube贴图
        *
        * 主要用于天空材质贴图，环境贴图
        */
        creatCubeTexture(): ICubeTexture;
        /**
        * @language zh_CN
        *
        * 上传cube贴图
        *
        * 此处需要提醒开发者，cube贴图的大小会直接影响显示性能
        * @param tex 需要上传的cube贴图数据
        */
        uploadCubetexture(tex: ICubeTexture): any;
        /**
        * @language zh_CN
        *
        * 创建 离屏渲染缓冲 framebuffer
        *
        * 此处需要提醒开发者，faramebufer 的大小，及是否使用深度检测会直接影响显卡能力，像素越多，填充的速度就会越小
        * 1024*1024 显卡就需要填充那么多的像素，再之，每一帧绘制frame过多也会极大影响显卡性能，同时需要将像素拷贝到贴图内存中
        * @param width frame buffer 的宽度
        * @param height frame buffer 的宽高
        * @param format 渲染的buffer
        */
        createFramebuffer(width: number, height: number, format: FrameBufferFormat): ITexture2D;
        /**
        * @language zh_CN
        *
        * 渲染到纹理
        *
        * 将当前屏幕内容渲染到指定的纹理，通常这个功能用于离屏渲染，延迟渲染，等使用
        * @param texture 要接受离屏像素的贴图
        * @param enableDepthAndStencil 是否开启深度检测
        * @param surfaceSelector 如果是cubemap，指定其要渲染的面索引
        */
        setRenderToTexture(texture: ITexture2D, enableDepthAndStencil: Boolean, surfaceSelector: number): any;
        /**
        * @language zh_CN
        *
        * 从离屏渲染状态恢复到即时渲染状态
        *
        * 在使用 setRenderToTexture（） 之后，主渲染缓冲会停止渲染，会切换到setRenderToTexture所使用的渲染缓冲进行渲染
        * 需要恢复主渲染缓冲的时候就会需要调用这个接口来切换回主渲染缓冲
        */
        setRenderToBackBuffer(): any;
        /**
        * @language zh_CN
        *
        * 创建图形渲染 顶点着色器程序
        *
        * 顶点着色器程序用来处理渲染目标的显示矩阵，和顶点流数据变换，并与提供片段着色器需要的数据
        * @param source
        */
        creatVertexShader(source: string): IShader;
        /**
        * @language zh_CN
        *
        * 创建片段着色器
        *
        * 片段着色器程序用来处理渲染目标的渲染显示效果，texture color transform 等等
        * @param source
        */
        creatFragmentShader(source: string): IShader;
        /**
        * @language zh_CN
        *
        * 清除渲染区域的颜色
        *
        * context 渲染上下文 清除 渲染窗口内的颜色 rgba 四个通道 一般清除会接连调用清除深度clearDepth（）
        * @param r 清除红色到什么值
        * @param g 清除绿色到什么值
        * @param b 清除蓝色到什么值
        * @param a 清除透明到什么值
        */
        clear(r: number, g: number, b: number, a: number): any;
        /**
        * @language zh_CN
        *
        * 清除渲染区域 深度
        * @param depth 深度值
        */
        clearDepth(depth: number): any;
        /**
        * @language zh_CN
        *
        * 清除渲染区域 模板缓冲
        *
        * 如果在渲染场景的时候设置过深度模板缓冲 那么下一次渲染场景在没有任何视图变化的时候可以直接使用模板缓冲
        * @param stencil 模板索引值
        */
        clearStencil(stencil: number): any;
        /**
        * @language zh_CN
        *
        * 使用显卡着色器
        *
        * 设置当前渲染目标要使用的编译后的着色程序，是通过 createProgram() 创建的program 再编译 vsshader 和 fsshader 后的程序
        * @param programe 编译后的着色程序
        */
        setProgram(programe: IProgram3D): any;
        /**
        * @language zh_CN
        *
        * 获取一致变量的 显卡内存ID
        *
        * 从编译后的着色器程序获取一致变量引用ID，用来指定 要上传数据的 编译后的着色器程序 的变量名
        * @param programe  编译后的着色器程序
        * @param name  着色器程序里的变量名
        */
        getUniformLocation(programe3D: IProgram3D, name: string): number;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个float 变量的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location  一致变量ID 通过getUniformLocation（）获得
        * @param x  一个类型为float的值
        */
        uniform1f(location: any, x: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个float数组 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location   一致变量ID 通过getUniformLocation（）获得
        * @param v  一个类型为float的数组
        */
        uniform1fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个int 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location   一致变量ID 通过getUniformLocation（）获得
        * @param x  一个类型为int的值
        */
        uniform1i(location: any, x: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个int数组 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location   一致变量ID 通过getUniformLocation（）获得
        * @param x  一个类型为int的数组
        */
        uniform1iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个int数组 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param x  一个类型为float的值
        * @param y  一个类型为float的值
        */
        uniform2f(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个point数组 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param v 一个[x,y]的值
        */
        uniform2fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为 [0,0] 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param x 一个 int 值
        * @param y 一个 int 值
        */
        uniform2i(location: any, x: number, y: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个 Int32Array 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param v 一个 Int32Array 的值
        */
        uniform2iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 三个 float 的值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param x  一个类型为float的值
        * @param y  一个类型为float的值
        * @param z  一个类型为float的值
        */
        uniform3f(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为[0.0,0.0,0.0] float 数组
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param v 一个类型为float的值
        */
        uniform3fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为[0,0,0] int 数组
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param x 一个类型为int的值
        * @param y 一个类型为int的值
        * @param z 一个类型为int的值
        */
        uniform3i(location: any, x: number, y: number, z: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为 Int32Array 数组
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param v 一个类型为Int32Array的值
        */
        uniform3iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 四个 float 数值
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param x 一个类型为float的值
        * @param y 一个类型为float的值
        * @param z 一个类型为float的值
        * @param w 一个类型为float的值
        */
        uniform4f(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为 [0.0,0.0,0.0,0.0] 的float 数组
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param v 一个结构为 [0.0,0.0,0.0,0.0] 的float 数组
        */
        uniform4fv(location: any, v: any): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为 [0.0,0.0,0.0,0.0] 的float 数组
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param x 一个 int 数值
        * @param y 一个 int 数值
        * @param z 一个 int 数值
        * @param w 一个 int 数值
        */
        uniform4i(location: any, x: number, y: number, z: number, w: number): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个结构为 [0.0,0.0,0.0,0.0] 的float 数组
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param v 一个 Int32Array 数据
        */
        uniform4iv(location: any, v: Int32Array): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个2*2的浮点矩阵
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param transpose 进行变换 默认false
        * @param value 一个长度2*2的float型数据，或者数组，或者 arrayBuffer 型数据
        */
        uniformMatrix2fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个3*3的浮点矩阵
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param transpose 进行变换 默认false
        * @param value 一个长度3*3的float型数据，或者数组，或者 arrayBuffer 型数据
        */
        uniformMatrix3fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        *
        * 给编译后的着色器程序传 一个4*4的浮点矩阵
        *
        * 上传显卡中的常量数据，进行单向数据传输，从 cpu内存 传输到GPU编译后的着色器中
        * @param location 一致变量ID 通过getUniformLocation（）获得
        * @param transpose 进行变换 默认false
        * @param value 一个长度3*3的float型数据，或者数组，或者 arrayBuffer 型数据
        */
        uniformMatrix4fv(location: any, transpose: boolean, value: any): void;
        /**
        * @language zh_CN
        *
        * 指定用于使用现有颜色混合绘制操作的输出颜色的系数。
        * 像素着色器程序的输出（源）颜色根据以下公式与该像素的现有（目标）颜色组合：
        * result color = (source color * sourceFactor) + (destination color * destinationFactor)
        * 目标颜色为该像素在渲染缓冲区中的当前颜色。因此，这是最近的 clear() 调用和任何中间 drawTriangles() 调用的结果。
        * 使用 setBlendFactors() 设置用于与源颜色和目标颜色相乘然后将它们相加的系数。默认混合系数为 sourceFactor = Egret3DDrive.ONE 和 destinationFactor = Egret3DDrive.ZERO，这会导致源颜色覆盖目标颜色（也就是说，不会发生两种颜色混合）。对于正常 alpha 混合，请使用 sourceFactor = Egret3DDrive.SOURCE_ALPHA 和 destinationFactor = Egret3DDrive.ONE_MINUS_SOURCE_ALPHA。
        * 使用 Egret3DDrive 类中定义的常量设置此函数的参数。
        * @param src 用于与源颜色相乘的系数。默认为 Egret3DDrive.ONE。
        * @param dst 用于与源颜色相乘的系数。默认为 Context3DBlendFactor.ZERO。
        */
        setBlendFactors(src: number, dst: number): any;
        /**
        * @language zh_CN
        *
        * 设置三角形剔除模式。
        * 可基于其相对于视图平面的方向，提前在呈现管道流程中从场景中排除三角形。如模型外部所示，一致地指定顶点顺序（顺时针或逆时针）以正确剔除。
        * @param mode 剔除模式。使用 Egret3DDrive 类中定义的常量之一。 默认 Egret3DDrive.BACK 。
        */
        setCulling(mode: number): any;
        /**
        * @language zh_CN
        *
        * 开启当前着色器的能力
        * 一般需要开启深度测试，混合模式，剔除模式
        * Egret3DDrive.DEPTH_TEST
        * Egret3DDrive.CULL_FACE
        * Egret3DDrive.BLEND
        * @param cap 要开启的能力 使用Egret3DDrive类中定义的常量，默认全部关闭
        */
        enbable(cap: number): any;
        /**
        * @language zh_CN
        *
        * 关闭 绘制模式
        * 一般需要开启深度测试，混合模式，剔除模式
        *
        * Egret3DDrive.DEPTH_TEST
        * Egret3DDrive.CULL_FACE
        * Egret3DDrive.BLEND
        * @param cap 要开启的能力 使用Egret3DDrive类中定义的常量，默认全部关闭
        */
        disable(cap: number): any;
        /**
        * @language zh_CN
        *
        * 设置用于深度测试的比较类型。
        *
        * 像素着色器程序的源像素输出的深度将与深度缓冲区中的当前值进行比较。如果比较计算结果为 false，则丢弃源像素。如果为 true，则呈现管道中的下一步“印模测试”将处理源像素。此外，只要 depthMask 参数设置为 true，就会使用源像素的深度更新深度缓冲区。
        * 设置用于比较源像素和目标像素的深度值的测试。当比较为 true 时，源像素与目标像素合成。将比较运算符按该顺序作为源像素值和目标像素值之间的中缀运算符应用。
        *
        * @param flag 是否开启深度测试
        * @param compareMode 开始深度测试的模式 使用Egret3DDrive类中定义的常量
        */
        enableDepthTest(flag: boolean, compareMode: number): any;
        /**
        * @language zh_CN
        *
        * 获取顶点着色器变量 索引
        * @param programe 编译后的着色器程序
        * @param attribName 要指定的顶点结构在shader中的名字
        */
        getShaderAttribLocation(programe: IProgram3D, attribName: string): any;
        /**
        * @language zh_CN
        *
        * 指定与单个着色器程序输入相对应的顶点数据组件。
        * 使用 setVertexBufferAt 方法来标识 VertexBuffer3D 缓冲区中每个顶点定义的哪些数据组件属于顶点程序的哪些输入。顶点程序的开发人员会确定每个顶点需要的数据量。该数据从 1 个或多个 VertexBuffer3D 流映射到顶点着色器程序的属性寄存器中。
        * 顶点着色器所使用数据的最小单位为 32 位数据。距顶点流的偏移量以 32 位的倍数指定。
        * 举例来说，编程人员可以使用以下数据定义每个顶点：
        * position: x    float32
        *           y    float32
        *           z    float32
        * color:    r    unsigned byte
        *           g    unsigned byte
        *           b    unsigned byte
        *           a    unsigned byte
        * 假定在 VertexBuffer3D 对象中定义了名为 buffer 的对象，则可使用以下代码将其分配给顶点着色器：
        * @param programe3D 编译后的着色器程序
        * @param index      顶点索引
        * @param size       顶点结构大小索引
        * @param dataType   数据类型
        * @param normalized 是否需要归一化
        * @param stride     占用长度
        * @param offset     偏移位置
        */
        vertexAttribPointer(programe3D: IProgram3D, index: number, size: number, dataType: number, normalized: boolean, stride: number, offset: number): any;
        /**
        * @language zh_CN
        *
        * 实时传入显卡顶点着色器变量数组数据
        * 设置 个可通过顶点或片段程序访问的常量数据。
        *
        *
        * @param floats arrayBuffer 型数据
        * @param offest 偏移量
        * @param numLen 总长度
        */
        setVertexShaderConstData(floats: Float32Array, offest: number, numLen: number): any;
        /**
        * @language zh_CN
        *
        * 实时传入显卡片段着色器变量数组数据
        * @param floats arrayBuffer 型数据
        * @param offest 偏移量
        * @param numLen 总长度
        */
        setFragmentShaderConstData(floats: Float32Array, offest: number, numLen: number): any;
        /**
        * @language zh_CN
        *
        * 指定要为片段程序的纹理输入寄存器使用的纹理。
        * 一个片段程序最多可以从 8 个纹理对象读取信息。使用此函数将 Texture 或 CubeTexture 对象分配给片段程序使用的取样器寄存器之一。
        * 注意：如果将活动的片段程序（使用 setProgram）更改为使用较少纹理的着色器，请将未使用的寄存器设置为 null：
        * <code>
        *       context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, null );
        *       context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture);
        * </code>
        * @param samplerIndex 取样器寄存器索引，介于 0 到 7 之间的值。
        * @param uniLocation 一致变量ID 通过getUniformLocation（）获得
        * @param index 贴图的索引
        * @param texture 贴图
        */
        setTexture2DAt(samplerIndex: number, uniLocation: number, index: number, texture: ITexture2D): any;
        /**
        * @language zh_CN
        *
        * 指定要为片段程序的纹理输入寄存器使用的纹理。
        * 一个片段程序最多可以从 8 个纹理对象读取信息。使用此函数将 Texture 或 CubeTexture 对象分配给片段程序使用的取样器寄存器之一。
        * 注意：如果将活动的片段程序（使用 setProgram）更改为使用较少纹理的着色器，请将未使用的寄存器设置为 null：
        * <code>
        *       context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, null );
        *       context3D.setTexture2DAt(sampler2D.activeTextureIndex, sampler2D.uniformIndex, sampler2D.index, sampler2D.texture.texture);
        * </code>
        * @param samplerIndex — 取样器寄存器索引，介于 0 到 7 之间的值。
        * @param uniLocation - 致变量ID 通过getUniformLocation（）获得
        * @param index 贴图的索引
        * @param texture 贴图
        */
        setCubeTextureAt(samplerIndex: number, uniLocation: number, index: number, texture: ICubeTexture): any;
        /**
        * @language zh_CN
        * @private
        * 设置一个裁剪矩形，绘制遮罩的类型。渲染器仅绘制到裁剪矩形内部的区域。裁剪不影响清除操作。
        * @param rectangle — 要在其中绘制的矩形。指定矩形的位置和尺寸（以像素为单位）。坐标系统原点为视口的左上角，向下和向右为递增的正值。
        */
        setScissorRectangle(rectangle: Rectangle): any;
        /**
        * @language zh_CN
        * @private
        * 可将一个 8 位印模引用值与每个绘制调用关联。在渲染期间，可根据先前存储在帧缓冲区中的值测试引用值。测试结果可控制绘制操作，以及是否更新已存储的印模值或如何更新。此外，深度测试控制是否执行印模测试。失败的深度测试也可用于控制要对印模缓冲区执行的操作。
        * 在像素处理管道流程中，首先执行深度测试。如果深度测试失败，可执行印模缓冲区更新操作，但无法进一步评估印模缓冲区值。如果深度测试通过，则执行印模测试。根据印模测试的结果，也可执行其他操作。
        * @param triangleFace —允许促使印模操作的三角形方向。一个 Context3DTriangleFace。
        * @param compareMode —用于比较当前印模引用值和目标像素印模值的测试运算符。当比较结果为 true 时，会执行目标像素颜色和深度更新。根据下面操作参数中的请求执行印模操作。将比较运算符按该顺序作为当前引用值和目标引用值之间的中缀运算符应用（以伪代码表示：if stencilReference OPERATOR stencilBuffer then pass）。使用 Context3DCompareMode 类中定义的常量之一。
        * @param actionOnBothPass —当深度和印模比较通过时要执行的操作。使用 Context3DStencilAction 类中定义的常量之一。
        * @param actionOnDepthFail —当深度比较失败时要执行的操作。使用 Context3DStencilAction 类中定义的常量之一。
        * @param actionOnDepthPassStencilFail —当深度比较通过而印模比较失败时要执行的操作。使用 Context3DStencilAction 类中定义的常量之一。
        */
        setStencilActions(triangleFace: string, compareMode: string, actionOnBothPass: string, actionOnDepthFail: string, actionOnDepthPassStencilFail: string): any;
        /**
        * @language zh_CN
        * @private
        * 设置用于印模测试的印模比较值。
        */
        setStencilReferenceValue(referenceValue: number, readMask: number, writeMask: number): any;
        /**
        * @language zh_CN
        *
        * 绑定顶点buffer
        *
        * 在当前的着色器下使用一个 geomtery 模型顶点数据buffer
        @ see egret3d.VertexBuffer3D
        * @param vertexBuffer
        */
        bindVertexBuffer(vertexBuffer: IVertexBuffer3D): any;
        /**
        * @language zh_CN
        * @private
        * 绘制模型元素
        * @param type 图元类型
        * @param first 第一个顶点索引
        * @param length 顶点个数
        */
        drawArrays(type: number, first: number, length: number): any;
        /**
        * @language zh_CN
        *
        * 绘制模型元素
        * 绘制前，一定要设置好 indexBuffer 和 vertexBuffer，并且单个顶点的数目不能超过 65535 的限制，超出模型渲染就出现拉丝的情况
        * @param type-图元类型
        * @param indexBuffer-索引数据
        * @param offset-顶点偏移
        * @param length-顶点个数
        */
        drawElement(type: number, indexBuffer: IndexBuffer3D, offset: number, length: number): any;
        /**
        * @language zh_CN
        *
        * 绘制提交
        * 所有的draw完成之后会将后台缓冲的画面渲染到主屏幕上
        * 调用 flush() 方法会让从上一次 flush() 调用起的所有渲染操作结果可见，并开始新的渲染周期。调用 flush 之后，必须在调用另一个 drawElement() 之前调用 clear()。否则，此函数会将渲染缓冲区清除为黄色和绿色 。
        * 与调用 setRenderToBackBuffer() 相同，调用 present() 也会重置渲染目标。
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
        /**
        * @private
        */
        gl: WebGLRenderingContext;
        /**
        * @language zh_CN
        * 构造
        * @param context3D
        */
        constructor(context3D: WebGLRenderingContext);
        /**
        * @language zh_CN
        * 版本号
        *
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
        creatProgram(vsShader: IShader, fsShader: IShader): IProgram3D;
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
        creatVertexBuffer(vertexData: Array<number>): IVertexBuffer3D;
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
        upLoadTextureData(mipLevel: number, texture: ITexture2D): void;
        /**
        * @language zh_CN
        * 提交2D压缩纹理
        * @param mipLevel
        * @param texture
        */
        upLoadCompressedTexture2D(mipLevel: number, texture: ITexture2D): void;
        /**
        * @language zh_CN
        * 创建 2维贴图
        */
        creatTexture2D(): ITexture2D;
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
        createFramebuffer(width: number, height: number, format: FrameBufferFormat): ITexture2D;
        /**
        * @language zh_CN
        *
        * @param texture
        * @param enableDepthAndStencil
        * @param surfaceSelector
        */
        setRenderToTexture(texture: ITexture2D, enableDepthAndStencil?: Boolean, surfaceSelector?: number): void;
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
        creatVertexShader(source: string): IShader;
        /**
        * @language zh_CN
        *
        * @param source
        */
        creatFragmentShader(source: string): IShader;
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
        setTexture2DAt(samplerIndex: number, uniLocation: number, index: number, texture: ITexture2D): void;
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
        * 设置模板测试
        */
        setStencilActions(triangleFace: string, compareMode: string, actionOnBothPass: string, actionOnDepthFail: string, actionOnDepthPassStencilFail: string): void;
        /**
        * @language zh_CN
        * 绑定顶点Buffer
        * @param vertexBuffer
        */
        bindVertexBuffer(vertexBuffer: IVertexBuffer3D): void;
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
    /**
    * @language zh_CN
    * 渲染混合模式
    * BlendMode 类中的一个值，用于指定要使用的混合模式。 内部绘制位图的方法有两种。 如果启用了混合模式或外部剪辑遮罩，则将通过向矢量渲染器添加有位图填充的正方形来绘制位图。 如果尝试将此属性设置为无效值，则 Flash 运行时会将此值设置为 BlendMode.NORMAL。
    * blendMode 属性影响显示对象的每个像素。每个像素都由三种原色（红色、绿色和蓝色）组成，每种原色的值介于 0x00 和 0xFF 之间。Flash Player 或 Adobe AIR 将影片剪辑中一个像素的每种原色与背景中像素的对应颜色进行比较。例如，如果 blendMode 设置为 BlendMode.LIGHTEN，则 Flash Player 或 Adobe AIR 会将显示对象的红色值与背景的红色值进行比较，然后使用两者中较亮的一种颜色作为显示颜色的红色成分的值。
    * 下表将对 blendMode 设置进行说明。BlendMode 类定义可使用的字符串值。表中的插图显示应用于交叠于显示对象 (1) 之上的圆形显示对象 (2) 的 blendMode 值。
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum BlendMode {
        /**
         * @language zh_CN
         * 将显示对象的每个像素的 Alpha 值应用于背景。
         * @version Egret 3.0
         * @platform Web,Native
         */
        ALPHA = 0,
        /**
         * @language zh_CN
         * 强制为该显示对象创建一个透明度组。
         * @version Egret 3.0
         * @platform Web,Native
         */
        LAYER = 1,
        /**
        * @language zh_CN
        * 该显示对象出现在背景前面。
        * @version Egret 3.0
        * @platform Web,Native
        */
        NORMAL = 2,
        /**
        * @language zh_CN
        * 将显示对象的原色值与背景颜色的原色值相乘，然后除以 0xFF 进行标准化，从而得到较暗的颜色。
        * @version Egret 3.0
        * @platform Web,Native
        */
        MULTIPLY = 3,
        /**
        * @language zh_CN
        * 将显示对象的原色值添加到它的背景颜色中，上限值为 0xFF。
        * @version Egret 3.0
        * @platform Web,Native
        */
        ADD = 4,
        /**
        * @language zh_CN
        * 从背景颜色的值中减去显示对象原色的值，下限值为 0。
        * @version Egret 3.0
        * @platform Web,Native
        */
        SUB = 5,
        /**
        * @language zh_CN
        * 将显示对象颜色的补色（反色）与背景颜色的补色相除。
        * @version Egret 3.0
        * @platform Web,Native
        */
        DIV = 6,
        /**
        * @language zh_CN
        * 将显示对象颜色的补色（反色）与背景颜色的补色相乘，会产生漂白效果。
        * @version Egret 3.0
        * @platform Web,Native
        */
        SCREEN = 7,
    }
    /**
     * @private
     * @class egret3d.ContextSamplerType
     * @classdesc
     * 贴图采样类型
     */
    class ContextSamplerType {
        /**
        * @language zh_CN
        * 纹理0数据
        */
        static TEXTURE_0: any;
        /**
        * @language zh_CN
        * 纹理1数据
        */
        static TEXTURE_1: any;
        /**
        * @language zh_CN
        * 纹理2数据
        */
        static TEXTURE_2: any;
        /**
        * @language zh_CN
        * 纹理3数据
        */
        static TEXTURE_3: any;
        /**
        * @language zh_CN
        * 纹理4数据
        */
        static TEXTURE_4: any;
        /**
        * @language zh_CN
        * 纹理5数据
        */
        static TEXTURE_5: any;
        /**
        * @language zh_CN
        * 纹理6数据
        */
        static TEXTURE_6: any;
        /**
        * @language zh_CN
        * 纹理7数据
        */
        static TEXTURE_7: any;
        /**
        * @language zh_CN
        * 纹理8数据
        */
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
     * @private
     * @language zh_CN
     * @class egret3d.UV
     * @classdesc
     * UV类，用来存储模型顶点uv数据
     *
     * @see egret3d.GeometryData
     *
     * @version Egret 3.0
     * @platform Web,Native
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
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Point {
        /**
         * @language en_US
         * The horizontal coordinate of the point. The default value is 0.
         */
        /**
         * @language zh_CN
         * x坐标
         */
        x: number;
        /**
         * @language en_US
         * The vertical coordinate of the point. The default value is 0.
         */
        /**
         * @language zh_CN
         * y坐标
         */
        y: number;
        /**
         * @language en_US
         * The length of the line segment from(0,0) to this point.
         * @returns length
         */
        /**
         * @language zh_CN
         * 返回从(0, 0)到(x, y)的距离
         * @returns 当前2维向量的长度
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
        /**
         * @language zh_CN
         * 创建一个Point实例
         * @param x
         * @param y
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
        /**
         * @language zh_CN
         * 当前Point加上v Point，结果返回新的实例
         * @param v
         */
        add(v: Point): Point;
        /**
         * @language en_US
         * Creates a copy of this Point object.
         *
         * @returns The new Point object.
         */
        /**
         * @language zh_CN
         * 克隆Point
         * @param 返回克隆后的Point
         */
        clone(): Point;
        /**
         * @language zh_CN
         * 复制源Point的值
         * @param sourcePoint
         */
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
        /**
         * @language zh_CN
         * 比较两个Point是否全等
         * @param toCompare 被比较的Point
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
        /**
         * @language zh_CN
         * 当前Point标准化
         * @param thickness 使当前Point的长度为thickness 原点(0, 0)到(x, y)的距离
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
        /**
         * @language zh_CN
         * 当前Point偏移位置
         * @param dx 偏移的x坐标
         * @param dx 偏移的y坐标
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
        /**
         * @language zh_CN
         * 当前Point减去v Point,结果返回一个新实例
         * @param v
         * @returns 结果返回
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
        /**
        * @language zh_CN
        * 当前Point以字符串形式返回
        * @returns string
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
        /**
        * @language zh_CN
        * 计算两个Point之间的距离
        * @returns 返回两个Point之间的距离
        */
        static distance(pt1: Point, pt2: Point): number;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Vector3D
     * @classdesc
     * 用 Vector3D 表示三维空间中的位置,也可以做4维向量,当为3维向量时w始终为0。</p>
     * 定义了一个三元的浮点向量。</p>
     * 当使用一个向量表示一个表面法线时，向量应该是标准化的。</p>
     * 其他用途的定向矢量的大小不变。当用作一个点，元素的矢量表示在三维空间中的位置。</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Vector3D {
        /**
        * @language en_US
        * The x axis defined as a Vector3D object with coordinates (1,0,0).
        */
        /**
        * @language zh_CN
        * X轴坐标 (1,0,0).
        */
        static X_AXIS: Vector3D;
        /**
        * @language en_US
        * The y axis defined as a Vector3D object with coordinates (0,1,0).
        */
        /**
        * @language zh_CN
        * Y轴坐标 (0,1,0).
        */
        static Y_AXIS: Vector3D;
        /**
        * @language en_US
        * The z axis defined as a Vector3D object with coordinates (0,0,1).
        */
        /**
        * @language zh_CN
        * Z轴坐标 (0,0,1).
        */
        static Z_AXIS: Vector3D;
        /**
        * @language en_US
        * The first element of a Vector3D object, such as the x coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        /**
        * @language zh_CN
        * 在三维空间中x坐标，默认值是0
        */
        x: number;
        /**
        * @language en_US
        * The second element of a Vector3D object, such as the y coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        /**
        * @language zh_CN
        * 在三维空间中y坐标，默认值是0
        */
        y: number;
        /**
        * @language en_US
        * The third element of a Vector3D object, such as the y coordinate of
        * a point in the three-dimensional space. The default value is 0.
        */
        /**
        * @language zh_CN
        * 在三维空间中z坐标，默认值是0
        */
        z: number;
        /**
        * @language zh_CN
        * 可作为一种透视投影的三维位置或投影
        * 也可以做四元数中的w
        */
        w: number;
        /**
        * @language en_US
        *  得到w分量
        */
        /**
        * @language en_US
        *  设置w分量
        */
        a: number;
        /**
        * @language en_US
        *  得到x分量
        */
        /**
        * @language en_US
        *  设置x分量
        */
        r: number;
        /**
        * @language en_US
        *  得到y分量
        */
        /**
        * @language en_US
        *  设置y分量
        */
        g: number;
        /**
        * @language en_US
        *  得到z分量
        */
        /**
        * @language en_US
        *  设置z分量
        */
        b: number;
        /**
        * @language en_US
        * The length, magnitude, of the current Vector3D object from the
        * origin (0,0,0) to the object's x, y, and z coordinates. The w
        * property is ignored. A unit vector has a length or magnitude of
        * one.
        */
        /**
        * @language zh_CN
        * 向量的长度，原点(0, 0, 0)到(x, y, z)的距离
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
        /**
        * @language zh_CN
        * 3维向量的坐标x的平方加 y的平方加 z的平方
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
        /**
        * @language zh_CN
        * 创建一个对象实例，默认为(0, 0, 0, 0)
        */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
        * @language en_US
        * Adds the value of the x, y, and z elements of the current Vector3D。
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
        /**
        * @language zh_CN
        * 向量相加，结果返回一个新实例
        * @returns Vector3D 结果返回
        */
        add(a: Vector3D): Vector3D;
        /**
        * @language en_US
        * Returns a new Vector3D object that is an exact copy of the current
        * Vector3D object.
        *
        * @returns A new Vector3D object that is a copy of the current
        * Vector3D object.
        */
        /**
        * @language zh_CN
        * 克隆一个Vector3D
        * @returns 返回克隆后的实例
        */
        clone(): Vector3D;
        /**
        * @language en_US
        * Copies all of vector data from the source Vector3D object into the
        * calling Vector3D object.
        *
        * @param src The Vector3D object from which to copy the data.
        */
        /**
        * @language zh_CN
        * 复制Vector3D对象
        * @param src 数据源
        */
        copyFrom(src: Vector3D): void;
        /**
        * @language en_US
        * Returns a new Vector3D object that is perpendicular (at a right。
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
        /**
        * @language zh_CN
        * 两个Vector3D进行叉乘 this 叉乘 a
        * 叉乘后的结果是这两条向量的垂直向量
        * @param a
        * @returns 返回叉乘结果
        */
        crossProduct(a: Vector3D): Vector3D;
        /**
        * @language en_US
        * Decrements the value of the x, y, and z elements of the current。
        * Vector3D object by the values of the x, y, and z elements of
        * specified Vector3D object. Unlike the
        * <code>Vector3D.subtract()</code> method, the
        * <code>decrementBy()</code> method changes the current Vector3D
        * object and does not return a new Vector3D object.
        *
        * @param a The Vector3D object containing the values to subtract from
        *          the current Vector3D object.
        */
        /**
        * @language zh_CN
        * 当前向量减去a向量，结果赋值给自己
        * @param a 减去的向量
        */
        decrementBy(a: Vector3D): void;
        /**
        * @language en_US
        * Returns the distance between two Vector3D objects. The。
        * <code>distance()</code> method is a static method. You can use it
        * directly as a method of the Vector3D class to get the Euclidean
        * distance between two three-dimensional points.
        *
        * @param pt1 A Vector3D object as the first three-dimensional point.
        * @param pt2 A Vector3D object as the second three-dimensional point.
        * @returns The distance between two Vector3D objects.
        */
        /**
        * @language zh_CN
        * 计算两个Vector3D之间的距离
        * @param pt1 坐标1
        * @param pt2 坐标2
        * @returns 两个Vector3D之间的距离
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
        */
        /**
        * @language zh_CN
        * 计算两个Vector3D的点积,返回两个Vector3D之间的夹角关系
        * @param a 另一个Vector3D
        * @returns 返回两个Vector3D之间的夹角关系
        */
        dotProduct(a: Vector3D): number;
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
        /**
        * @language zh_CN
        * 求两个Vector3D的值是否全等
        * @param toCompare 与些Vector3D进行比较
        * @param allFour 是否比较w分量
        * @returns 全等返回true
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
        /**
        * @language zh_CN
        * 当前Vector3D加等于a Vector3D，只加x y z 3个分量
        * @param a 加等a
        */
        incrementBy(a: Vector3D): void;
        /**
        * @language en_US
        * Sets the current Vector3D object to its inverse. The inverse object
        * is also considered the opposite of the original object. The value of
        * the x, y, and z properties of the current Vector3D object is changed
        * to -x, -y, and -z.
        */
        /**
        * @language zh_CN
        * 当前Vector3D x y z 3个分量取反
        */
        negate(): void;
        /**
        * @language en_US
        * Scales the line segment between(0,0) and the current point to a set
        * length.
        *
        * @param thickness The scaling value. For example, if the current
        * Vector3D object is (0,3,4), and you normalize it to
        * 1, the point returned is at(0,0.6,0.8).
        */
        /**
        * @language zh_CN
        * 当前Vector3D标准化
        * @param thickness 使当前Vector3D的长度为thickness 原点(0, 0, 0)到(x, y, z)的距离
        */
        normalize(thickness?: number): void;
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
        /**
        * @language zh_CN
        * 当前Vector3D扩大s倍
        * @param s 扩大的倍数
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
        /**
        * @language zh_CN
        * 填充当前Vector3D的x, y, z
        * @param s 扩大的倍数
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
        */
        /**
        * @language zh_CN
        * 当前Vector3D减去a Vector3D 结果返回新实例
        * @param a 减去的Vector3D
        * @returns 结果返回
        */
        subtract(a: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 当前Vector3D乘other Vector3D 结果返回新实例
        * @param a 相乘的Vector3D
        * @returns 结果返回
        */
        multiply(other: Vector3D): Vector3D;
        /**
        * @language zh_CN
        * 计算两个Vector3D之间的线性差值，结果为当前对象
        * @param v0 Vector3D 1
        * @param v1 Vector3D 2
        * @param t 时刻
        */
        lerp(v0: Vector3D, v1: Vector3D, t: number): void;
        /**
        * @language zh_CN
        * 当前Vector3D以字符串形式返回
        * @returns string
        */
        toString(): string;
        /**
        * @language zh_CN
        * 解析字符串为Vector3D
        * @param str 格式用空格间隔开，只解析为x,y,z
        */
        parsing(str: string): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Rectangle
     * @classdesc
     * Rectangle 类 表示矩形
     *
     * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。
     *
     * Rectangle 类的 x、y、width 和 height 属性相互独立；更改一个属性的值不会影响其它属性。
     *
     * 您可以使用 new Rectangle() 构造函数创建 Rectangle 对象。
     * @version Egret 3.0
     * @platform Web,Native
    
     */
    class Rectangle {
        /**
        * @language zh_CN
        * 矩形左上角的 x 坐标
        */
        x: number;
        /**
        * @language zh_CN
        * 矩形左上角的 y 坐标
        */
        y: number;
        /**
        * @language zh_CN
        * 矩形的宽度
        */
        width: number;
        /**
        * @language zh_CN
        * 矩形的高度
        */
        height: number;
        /**
         * @language zh_CN
         * 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。
         * @param x 矩形左上角的 x 坐标。
         * @param y 矩形左上角的 y 坐标。
         * @param width 矩形的宽度
         * @param height 矩形的高度
         */
        constructor(x?: number, y?: number, width?: number, height?: number);
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Quaternion
     * @classdesc
     * Quaternion类
     *
     * 定义了一个四元数表示物体在空间的旋转。
     * 四元数通常用作替代欧拉角和旋转矩阵的方式来实现平滑插值和避免万向节锁
     * 注意，这四元数类不自动保持四元数标准化。因此，在必要的时候，必须采取单位化的四元数，通过调用单位化方法
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Quaternion {
        /**
        * @language en_US
        * The x value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的x值.
        */
        x: number;
        /**
        * @language en_US
        * The y value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的y值.
        */
        y: number;
        /**
        * @language en_US
        * The z value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的z值.
        */
        z: number;
        /**
        * @language en_US
        * The w value of the quaternion.
        */
        /**
        * @language zh_CN
        * 四元数的w值.
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
        /**
        * @language zh_CN
        * 创建一个四元数.
        * @param x
        * @param y
        * @param z
        * @param w
        */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
        * @language en_US
        *
        * @returns the magnitude of the quaternion object.
        */
        /**
        * @language zh_CN
        *
        * 返回四元数的大小.
        * @param w
        * @returns 四元数的大小.
        */
        magnitude: number;
        /**
        * @language en_US
        * Fills the quaternion object with the result from a multiplication of two quaternion objects.
        *
        * @param    qa    The first quaternion in the multiplication.
        * @param    qb    The second quaternion in the multiplication.
        */
        /**
        * @language zh_CN
        * 两个四元数相乘,然后结果给当调用者.
        * @param qa 第一个四元数
        * @param qb 第二个四元数
        */
        multiply(qa: Quaternion, qb: Quaternion): void;
        /**
        * @language zh_CN
        * 四元数乘以一个3维向量，结果返回一个四元数
        * @param vector 相乘的向量
        * @param target 返回的结果，如果为null就会实例化一个四元数对象返回
        * @returns 返回相乘后的结果
        */
        multiplyVector(vector: Vector3D, target?: Quaternion): Quaternion;
        /**
        * @language en_US
        * Fills the quaternion object with values representing the given rotation around a vector.
        *
        * @param    axis    The axis around which to rotate
        * @param    angle    The angle in radians of the rotation.
        */
        /**
        * @language zh_CN
        * 创建一个以axis轴为中心旋转angle角度的四元数
        *
        * @param axis   旋转轴
        * @param angle  旋转角度
        */
        fromAxisAngle(axis: Vector3D, angle: number): void;
        /**
        * @language zh_CN
        * 返回四元数绕轴心和角度
        *
        * @param axis 轴心
        * @returns 角度
        */
        toAxisAngle(axis: Vector3D): number;
        /**
        * @language en_US
        * Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        /**
        * @language zh_CN
        * 两个四元数之间球形插值，插值之间提供旋转恒定角变化率。
        *
        * @param qa 四元数1
        * @param qb 四元数2
        * @param t 差值时刻
        */
        slerp(qa: Quaternion, qb: Quaternion, t: number): void;
        /**
        * @language en_US
        * Linearly interpolates between two quaternions.
        * @param qa The first quaternion to interpolate.
        * @param qb The second quaternion to interpolate.
        * @param t The interpolation weight, a value between 0 and 1.
        */
        /**
        * @language zh_CN
        * 两个四元数之间的线性插值
        *
        * @param qa 四元数1
        * @param qb 四元数2
        * @param t 差值时刻
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
        /**
        * @language zh_CN
        * 用数值表示给定的欧拉旋转填充四元数对象。
        *
        * @param ax x轴旋转角度
        * @param ay y轴旋转角度
        * @param az z轴旋转角度
        */
        fromEulerAngles(ax: number, ay: number, az: number): Quaternion;
        /**
        * @language en_US
        * Fills a target Vector3D object with the Euler angles that form the rotation represented by this quaternion.
        * @param target An optional Vector3D object to contain the Euler angles. If not provided, a new object is created.
        * @returns The Vector3D containing the Euler angles.
        */
        /**
        * @language zh_CN
        * 把四元数转成欧拉角返回
        *
        * @param target 转成的欧拉返回值，如果为null就新建一个对象返回
        * @retruns 转成的欧拉返回值
        */
        toEulerAngles(target?: Vector3D): Vector3D;
        /**
        * @language en_US
        * Normalises the quaternion object.
        */
        /**
        * @language zh_CN
        * 单位化四元数
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
        * 以字符串形式返回四元数的值
        * @returns
        */
        toString(): string;
        /**
        * @language en_US
        * Converts the quaternion to a Matrix3D object representing an equivalent rotation.
        * @param target An optional Matrix3D container to store the transformation in. If not provided, a new object is created.
        * @returns A Matrix3D object representing an equivalent rotation.
        */
        /**
        * @language zh_CN
        * 把一个四元数转换成矩阵
        * @param target 返回转换后的矩阵，如果为null就新建一个对象返回
        * @see egret3d.Matrix4_4
        * @returns 返回转换后的矩阵
        */
        toMatrix3D(target?: Matrix4_4): Matrix4_4;
        /**
        * @language en_US
        * Extracts a quaternion rotation matrix out of a given Matrix3D object.
        * @param matrix The Matrix3D out of which the rotation will be extracted.
        */
        /**
        * @language zh_CN
        * 用一个旋转矩阵生成四元数
        * @param matrix 旋转矩阵
        */
        fromMatrix(matrix: Matrix4_4): void;
        /**
        * @language en_US
        * Clones the quaternion.
        * @returns An exact duplicate of the current Quaternion.
        */
        /**
        * @language zh_CN
        * 克隆一个四元数
        * @returns 当前四元数复制后返回.
        */
        clone(): Quaternion;
        /**
        * @language en_US
        * Rotates a point.
        * @param vector The Vector3D object to be rotated.
        * @param target An optional Vector3D object that will contain the rotated coordinates. If not provided, a new object will be created.
        * @returns A Vector3D object containing the rotated point.
        */
        /**
        * @language zh_CN
        * 旋转一个3量坐标点
        * @param vector 被旋转的对象
        * @param target 旋转后的坐标对象。如果为null，将创建一个新的对象
        * @returns 返回旋转后的坐标对象
        */
        rotatePoint(vector: Vector3D, target?: Vector3D): Vector3D;
        /**
        * @language en_US
        * Copies the data from a quaternion into this instance.
        * @param q The quaternion to copy from.
        */
        /**
        * @language zh_CN
        * 将数据从四元数复制到该实例
        * @param q 被复制的四元数对象
        */
        copyFrom(q: Quaternion): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Orientation3D
     * @classdesc
     * 定义 Orientation3D 常量。</p>
     * Matrix4_4.decompose 会分 axisAngle、eulerAngles、quaternion这3种类型进行分解。</p>
     * 比如:</p>
     <pre>
     matrix.decompose(Orientation3D.QUATERNION)
     </pre>
     *
     * @see egret3d.Matrix4_4
     * @see egret3d.Quaternion
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Orientation3D {
        /**
        * @language zh_CN
        * 按轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        static AXIS_ANGLE: string;
        /**
        * @language zh_CN
        * 按欧拉角旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        static EULER_ANGLES: string;
        /**
        * @language zh_CN
        * 四元数旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        static QUATERNION: string;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Plane3D
     * @classdesc
     * Plane3D 类 3D空间中的平面表示数据
     * 由a,b,c,d4个分量组成 在三维空间中定义了一个平面 Ax + By + Cz + D = 0
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Plane3D {
        /**
         * @language en_US
         * The A coefficient of this plane. (Also the x dimension of the plane normal)
         */
        /**
         * @language zh_CN
         * 平面中的a分量
         */
        a: number;
        /**
         * @language en_US
         * The B coefficient of this plane. (Also the y dimension of the plane normal)
         */
        /**
         * @language zh_CN
         * 平面中的b分量
         */
        b: number;
        /**
         * @language en_US
         * The C coefficient of this plane. (Also the z dimension of the plane normal)
         */
        /**
         * @language zh_CN
         * 平面中的c分量
         */
        c: number;
        /**
         * @language en_US
         * The D coefficient of this plane. (Also the inverse dot product between normal and point)
         */
        /**
         * @language zh_CN
         * 平面中的d分量
         */
        d: number;
        /**
         * @private
         */
        static ALIGN_ANY: number;
        /**
         * @private
         */
        static ALIGN_XY_AXIS: number;
        /**
         * @private
         */
        static ALIGN_YZ_AXIS: number;
        /**
         * @private
         */
        static ALIGN_XZ_AXIS: number;
        /**
         * @language en_US
         * Create a Plane3D with ABCD coefficients
         */
        /**
         * @language zh_CN
         * 创建一个平面实例
         * @param a
         * @param b
         * @param c
         * @param d
         */
        constructor(a?: number, b?: number, c?: number, d?: number);
        /**
         * @language zh_CN
         * 填充平面的各分量的值
         * @param a
         * @param b
         * @param c
         * @param d
         */
        setTo(a?: number, b?: number, c?: number, d?: number): void;
        /**
         * @language en_US
         * Fills this Plane3D with the coefficients from 3 points in 3d space.
         * @param p0 Vector3D
         * @param p1 Vector3D
         * @param p2 Vector3D
         */
        /**
         * @language zh_CN
         * 由3个坐标来创建一个3d平面
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
        /**
         * @language zh_CN
         * 由一条normal向量和一个坐标创建一个3d平面
         * @param normal Vector3D
         * @param point  Vector3D
         */
        fromNormalAndPoint(normal: Vector3D, point: Vector3D): void;
        /**
         * @language en_US
         * Normalize this Plane3D
         * @returns Plane3D This Plane3D.
         */
        /**
         * @language zh_CN
         * 单位化3d平面
         * @returns 返回平面长度
         */
        normalize(): number;
        /**
         * @language en_US
         * Returns the signed distance between this Plane3D and the point p.
         * @param p Vector3D
         * @returns Number
         */
        /**
         * @language zh_CN
         * 计算3d平面到点p的距离
         * @param p Vector3D
         * @returns 返回计算后的距离
         */
        distance(p: Vector3D): number;
        /**
         * @language en_US
         * Classify a point against this Plane3D. (in front, back or intersecting)
         * @param p Vector3D
         * @param epsilon
         * @returns PlaneClassification.FRONT在平面正面
         * PlaneClassification.BACK在平面背面面
         * PlaneClassification.INTERSECT在平面上
         */
        /**
         * @language zh_CN
         * 计算3d平面和点p的空间关系
         * @param p Vector3D
         * @param epsilon 相对偏移值
         * @returns int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
         */
        classifyPoint(p: Vector3D, epsilon?: number): number;
        /**
         * @language zh_CN
         * 当前Plane3D以字符串形式返回
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
     * 可使用 CubeBoxBound 类 取得包围盒的数据。</p>
     * 包含包围盒的各顶点信息，当包围盒要进行世界变换时，应当变换各顶点信息。</p>
     * @version Egret 3.0
     * @platform Web,Native
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
        private matTransform;
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
        * 得到变换矩阵
        * @returns 变换矩阵
        */
        /**
        * @language zh_CN
        * 设置变换矩阵
        * @param mat 变换矩阵
        */
        Transform: Matrix4_4;
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
     *
     * Matrix4_4 类表示一个转换矩阵，该矩阵确定三维 (3D) 显示对象的位置和方向。
     * 该矩阵可以执行转换功能，包括平移（沿 x、y 和 z 轴重新定位）、旋转和缩放（调整大小）.
     * Matrix4_4 类还可以执行透视投影，这会将 3D 坐标空间中的点映射到二维 (2D) 视图.
     * 单一矩阵可以将多个转换组合在一起，并一次性对 3D 显示对象应用这些转换.
     * 例如，可以将一个矩阵应用于 3D 坐标，以便依次执行旋转和平移.
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Matrix4_4 {
        /**
        * @language zh_CN
        * 一个由 16 个数字组成的矢量，其中，每四个元素可以是 4x4 矩阵的一行或一列
        */
        rawData: Float32Array;
        /**
        * @language zh_CN
        * 构造
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
        * 通过将当前 Matrix4_4 对象与另一个 Matrix4_4 对象相乘来前置一个矩阵
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
        *
        * @returns 行列式值
        */
        determinant: number;
        /**
        * @language zh_CN
        * 返回矩阵位移
        *
        * @returns 位移
        */
        /**
        * @language zh_CN
        * 设置矩阵位移
        *
        * @param value 位移
        */
        position: Vector3D;
        /**
        * @language zh_CN
        * 返回矩阵缩放
        *
        * @returns 缩放
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 以字符串返回矩阵的值
        *
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
     * 它会在摄像机的位置做一个左 右偏移 模拟出眼睛的矩阵
     * @version Egret 3.0
     * @platform Web,Native
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
     * @private
     * @language zh_CN
     * @class egret3d.PlaneClassification
     * @classdesc
     * 定义 PlaneClassification 常量
     * @version Egret 3.0
     * @platform Web,Native
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
     * @private
     * @class egret3d.MathUtil
     * @classdesc
     * @version Egret 3.0
     * @platform Web,Native
     */
    class MathUtil {
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
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.Matrix3DUtils
    * @classdesc
    * 可使用 Matrix3DUtils 类 进行3d矩阵的计算
    * @version Egret 3.0
    * @platform Web,Native
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
        /**
        * @private
        * 1角度为多少弧度
        */
        static RAW_DATA_CONTAINER: Float32Array;
        /**
        * @private
        */
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
        /**
        * @language zh_CN
        * 把一个值固定在一个范围之内
        * @param value 当前判定的值
        * @param min_inclusive 最小取值
        * @param max_inclusive 最大取值
        * @returns 计算后的结果
        */
        static clampf(value: number, min_inclusive: number, max_inclusive: number): number;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Ray
     * @classdesc
     * 射线是指直线上的一点和它一旁的部分所组成的直线，射线有且仅有一个端点，无法测量，由一个原点,和一个方向构成
     * 用于检测射线,也可用于鼠标拣选场景中的模型
     *
     * @see egret3d.Picker
     * @see egret3d.Vector3D
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Ray {
        /**
        * @language zh_CN
        * 射线原点
        */
        origin: Vector3D;
        /**
        * @language zh_CN
        * 射线方向
        */
        dir: Vector3D;
        /**
        * @language zh_CN
        * constructor
        * @origin 射线原点
        * @direction 射线方向
        * @version Egret 3.0
        * @platform Web,Native
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        IntersectTriangle(v0: Vector3D, v1: Vector3D, v2: Vector3D, ret?: Array<number>): boolean;
        /**
        * @language zh_CN
        * 检测射线相交模型
        * @param mesh 检测的模型
        * @param inPos 相交点
        * @returns 相交返回true
        * @version Egret 3.0
        * @platform Web,Native
        */
        IntersectMeshEx(mesh: Mesh, uv_offset: number, result: PickResult): boolean;
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        IntersectMesh(verticesData: Array<number>, indexData: Array<number>, offset: number, faces: number, uv_offset: number, mMat: Matrix4_4, result: PickResult): boolean;
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        CalculateAndTransformRay(width: number, height: number, viewMat: Matrix4_4, projMat: Matrix4_4, x: number, y: number): void;
        /**
        * @language zh_CN
        * 射线重置
        * @version Egret 3.0
        * @platform Web,Native
        */
        reset(): void;
    }
}
declare module egret3d {
    /**
    * @private
     * @language zh_CN
     * @class egret3d.Color
     * @classdesc
     * 可使用 Color 类调整显示对象的颜色值
     * @version Egret 3.0
     * @platform Web,Native
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
    * 鼠标拾取返回数据。</p>
    * 鼠标拾取模型上的交点 (本地坐标、世界坐标)。</p>
    * 鼠标拾取模型的uv。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PickResult {
        /**
        * @language zh_CN
        * 鼠标拾取模型上的交点 (本地坐标)。
        * @version Egret 3.0
        * @platform Web,Native
        */
        localPosition: Vector3D;
        /**
        * @language zh_CN
        * 鼠标拾取模型上的交点 (世界坐标)。
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalPosition: Vector3D;
        /**
        * @language zh_CN
        * 鼠标拾取模型的uv。
        * @version Egret 3.0
        * @platform Web,Native
        */
        uv: Vector3D;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.EventDispatcher
    * @classdesc
    * EventDispatcher 类是可调度事件的所有类的基类。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EventDispatcher {
        /**
         * @language zh_CN
         * @private
         */
        listeners: any;
        /**
         * @language zh_CN
         * 派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。
         * @param event {any} 事件类型。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispatchEvent(event: any): void;
        /**
        * @language zh_CN
        * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeEventListener()。然后，可以使用新的优先级再次注册该侦听器。
        * @param type {string} 事件的类型。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
         * @version Egret 3.0
         * @platform Web,Native
        */
        addEventListener(type: string, callback: Function, priolity?: number): void;
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param type {string} 事件名。
         * @param callback {Function} 侦听函数。
         * @version Egret 3.0
         * @platform Web,Native
         */
        removeEventListener(type: string, callback: Function): void;
        /**
         * @language zh_CN
         * 移除所有事件侦听器。
         * @version Egret 3.0
         * @platform Web,Native
         */
        clearEventListener(): void;
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string}
        * @returns {boolean}
         * @version Egret 3.0
         * @platform Web,Native
        */
        containEventListener(type: string): boolean;
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string} 事件名
        * @param callback {Function} 处理事件的侦听器函数
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasEventListener(type: string, callback: Function): boolean;
    }
    /**
    * @language zh_CN
    * @class egret3d.Event3D
    * @classdesc
    * Event3D 类作为创建 Event3D 对象的基类，当发生事件时，Event3D 对象将作为参数传递给事件侦听器。Event3D 类的属性包含有关事件的基本信息，例如事件的类型。对于许多事件（如由 Event3D 类常量表示的事件），此基本信息就足够了。但其他事件可能需要更详细的信息。例如，与鼠标单击关联的事件需要包括有关单击事件的位置以及在单击事件期间是否按下了任何键的其他信息。您可以通过扩展 Event3D 类（MouseEvent 类执行的操作）将此类其他信息传递给事件侦听器。
    * @includeExample events/Event3D.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Event3D {
        /**
        * @language zh_CN
        * EVENT_LOAD_COMPLETE 常量定义 load_complete 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static EVENT_LOAD_COMPLETE: string;
        /**
        * @language zh_CN
        * EVENT_LOAD_PROGRESS 常量定义 onLoadProgress 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static EVENT_LOAD_PROGRESS: string;
        /**
        * @language zh_CN
        * MOUSE_CLICK 常量定义 onClick 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static MOUSE_CLICK: string;
        /**
        * @language zh_CN
        * MOUSE_DOWN 常量定义 onMouseDown 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static MOUSE_DOWN: string;
        /**
        * @language zh_CN
        * MOUSE_UP 常量定义 onMouseUp 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static MOUSE_UP: string;
        /**
        * @language zh_CN
        * MOUSE_MOVE 常量定义 onMouseMove 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static MOUSE_MOVE: string;
        /**
        * @language zh_CN
        * TOUCH_MOVE 常量定义 onTouchMove 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_MOVE: string;
        /**
        * @language zh_CN
        * TOUCH_START 常量定义 onTouchStart 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_START: string;
        /**
        * @language zh_CN
        * TOUCH_END 常量定义 onTouchEnd 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_END: string;
        /**
        * @language zh_CN
        * COMPLETE 常量定义 complete 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static COMPLETE: string;
        /**
        * @language zh_CN
        * CHANGE_PROPERTY 常量定义 changeProperty 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static CHANGE_PROPERTY: string;
        private _currentTarget;
        /**
        * @language zh_CN
        * 事件当前对象。
        * @returns {any}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 事件当前对象。
        * @param value {any}
        * @version Egret 3.0
        * @platform Web,Native
        */
        currentTarget: any;
        private _type;
        /**
        * @language zh_CN
        * 事件类型。
        * @returns {string}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 事件类型。
        * @param value {string}
        * @version Egret 3.0
        * @platform Web,Native
        */
        type: string;
        private _data;
        /**
        * @language zh_CN
        * 附加数据。
        * @returns {any}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 附加数据。
        * @param value {any}
        * @version Egret 3.0
        * @platform Web,Native
        */
        data: any;
        /**
        * @language zh_CN
        * 创建一个作为参数传递给事件侦听器的 Event3D 对象。
        * @param typeName {string} 事件类型
        * @param data {any}附加数据(可选)
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(type?: string, data?: any);
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.Mouse3DManager
    * @classdesc
    * 鼠标事件管理。
    * @version Egret 3.0
    * @platform Web,Native
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
        * 创建一个新的 Mouse3DManager 对象。
        * @param camera {Camera3D}
        * @param collect {CollectBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(camera: Camera3D);
        private onTouchMove(e);
        private onTouchEnd(e);
        private onTouchStart(e);
        private onMouseClick(code);
        private onMouseDown(code);
        private onMouseUp(code);
        private onMouseMove(e);
        update(collect: CollectBase): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.TextureBase
    * @private
    * @classdesc
    * TextureBase 类为 贴图基类。
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/TextureBase.ts
    */
    class TextureBase {
        /**
         * @language zh_CN
         * 边界
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
        texture: ITexture2D;
        /**
         * @language zh_CN
         * 立方形贴图
         */
        cubeTexture: ICubeTexture;
        /**
         * @language zh_CN
         * 构造函数
         */
        constructor();
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * @param context3D
         */
        upload(context3D: Context3D): void;
        uploadForcing(context3D: Context3D): void;
        /**
         * @language zh_CN
         * 获取宽度值
         *
         * @returns width
         */
        width: number;
        /**
         * @language zh_CN
         * 获取高度值
         *
         * @returns height
         */
        height: number;
    }
}
declare module egret3d {
    /**
     * @class egret3d.VideoTexture
     * @classdesc
     * VideoTexture 使用 Video 标签采集 video 视频 </p>
     * VideoTexture 仅且暂时只能在pc上正常使用，移动端需要直接与用户交互才可正常生成播放</p>
     * 需要设置贴图的宽度和高度。必须为2的N次</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class VideoTexture extends TextureBase {
        private video;
        private canUpdataTexture;
        private context;
        private tmpCanvas;
        private _width;
        private _height;
        constructor(width?: number, height?: number);
        private loadReady();
        /**
        * @language zh_CN
        * 返回 视频链接
        * 视频的链接地址，只要是h5 支持的格式都支持， 例如:ogv,mp4,avi
        */
        /**
         * @language zh_CN
         * 设置 视频链接
         * 设置 视频的链接地址，只要是h5 支持的格式都支持， 例如:ogv,mp4,avi
         * @param src 视频格式的链接地址
         */
        source: string;
        /**
        * @language zh_CN
        * 播放视频
        * 当视频缓冲好之后才能正常播放视频
        */
        play(): void;
        /**
        * @language zh_CN
        * 暂停视频
        * 控制视频的播放暂停状态
        */
        pause(): void;
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * 将video的视频数据实时传输到GPU上
         * @param context3D
        */
        upload(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.RenderTexture
    * @private
    * @classdesc
    * RenderTexture 类为渲染目标纹理，用于离屏渲染中。
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/RenderTexture.ts
    */
    class RenderTexture extends TextureBase {
        /**
         * @language zh_CN
         * 构造函数
         * @param texture ITexture2D对象
         */
        constructor(texture: ITexture2D);
    }
}
declare module egret3d {
    /**
     * @class egret3d.SkyTexture
     * @classdesc
     * SkyTexture 类为天空贴图
     *
     * 天空贴图用于Sky类使用，其内部是将6张HTMLImageElement（网页图片元素）封装到CubeTexture对象，CubeTexture为引擎内部使用对象。</p>
     *
     * 示例：</p>
     * 假设html中已有</p>
     <pre>
     <img id="t1" src="image_front.png" />
     <img id="t2" src="image_back.png" />
     <img id="t3" src="image_left.png" />
     <img id="t4" src="image_right.png" />
     <img id="t5" src="image_up.png" />
     <img id="t6" src="image_down.png" />
     </pre>
     使用示例：</p>
     <pre>
     var skyTexture: egret3d.SkyTexture = new egret3d.SkyTexture(
     <HTMLImageElement>document.getElementById("t1"),
     <HTMLImageElement>document.getElementById("t2"),
     <HTMLImageElement>document.getElementById("t3"),
     <HTMLImageElement>document.getElementById("t4"),
     <HTMLImageElement>document.getElementById("t5"),
     <HTMLImageElement>document.getElementById("t6")
     );

     view3D.sky = new egret3d.Sky(skyTexture);
     </pre>
     * @see egret3d.Sky
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample texture/SkyTexture.ts
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
         * 构造函数
         * @param image_front 前部HTMLImageElement图片元素
         * @param image_back 背部HTMLImageElement图片元素
         * @param image_left 左部HTMLImageElement图片元素
         * @param image_right 右部HTMLImageElement图片元素
         * @param image_up 顶部HTMLImageElement图片元素
         * @param image_down 底部HTMLImageElement图片元素
         */
        constructor(image_front: TextureBase, image_back: TextureBase, image_left: TextureBase, image_right: TextureBase, image_up: TextureBase, image_down: TextureBase);
        /**
         * @language zh_CN
         * 上传贴图数据给GPU
         * 更新上传 cube 贴图纹理到GPU 现存中缓存起来
         * @param context3D
         */
        upload(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.ImageTexture
    * @classdesc
    * ImageTexture 类为 图像贴图
    *
    * 图像贴图用于封装 HTMLImageElement（网页图像元素）到引擎内部可使用的Texture2D对象, </p>
     * HTMLImageElement 可通过内嵌HTML文件中获取。</p>
    *
     *
    * 示例：
    * 假设html中已有 &lt;img id="t1" src="xxx.png" /&gt;
    * <pre>
    * var img: HTMLImageElement = <HTMLImageElement>document.getElementById("t1");
    * var imageTexture: egret3d.ImageTexture = new egret3d.ImageTexture(img);
     * </pre>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ImageTexture extends TextureBase {
        /**
         * @language zh_CN
         * 贴图数据
         *
         */
        imageData: HTMLImageElement;
        /**
         * @language zh_CN
         * 构造函数
         * @param img HTMLImageElement（网页图像元素）
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
    * CheckerboardTexture 类为 棋盘格纹理类</p>
    *
    * 棋盘格纹理为黑白间隔色块组成的一张纹理，主要用于判别模型UV的正确性，若某模型UV值不正确，其纹理表现必定乱序不规整。</p>
    * 使用示例:</p>
     <pre>
    var material: egret3d.TextureMaterial = new egret3d.TextureMaterial(egret3d.CheckerboardTexture.texture );
    var mesh: egret3d.Mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), material);
     </pre>
    *
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample texture/CheckerboardTexture.ts
    */
    class CheckerboardTexture extends TextureBase {
        /**
         * @language zh_CN
         * 公用棋盘格实例对象
         */
        static texture: CheckerboardTexture;
        private _width;
        private _height;
        private _pixelArray;
        /**
         * @language zh_CN
         * 构造函数
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
     * @private
     * @language zh_CN
     * @class egret3d.IAnimation
     * @classdesc
     * 动画接口
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/IAnimation.ts
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
     *
     * 动画驱动的基本节点父类，实现基本统一的动画节点结构
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/AnimNodeBase.ts
     */
    class AnimNodeBase {
        /**
        * @language zh_CN
        * 顶点Shader
        * @private
        */
        vertexShader: string;
        /**
        * @language zh_CN
        * 片元Shader
        * @private
        */
        fragmentShader: string;
        /**
        * @language zh_CN
        * 使用的属性
        * @private
        */
        usageAttribute: string;
        /**
        * @language zh_CN
        * 属性长度
        * @private
        */
        usageAttributeLen: number;
        /**
        * @language zh_CN
        * uniform索引
        * @private
        */
        uniformIndex: any;
        /**
        * @language zh_CN
        * 偏移字节数
        * @private
        */
        offsetBytes: number;
        /**
        * @language zh_CN
        * 偏移量
        * @private
        */
        offset: number;
        /**
        * @language zh_CN
        * 填充GeomtryData
        * @param geometry: Geometry对象
        * @private
        */
        fillGeomtryData(geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.AnimaNodeCollection
     * @classdesc
     * 动画功能节点收集器
     * 动画功能的收集，整理，初始化容器，一般在粒子系统里使用
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/AnimaNodeCollection.ts
     */
    class AnimaNodeCollection {
        /**
        * @language zh_CN
        * 动画节点容器
        * @priavte
        */
        nodes: Array<AnimNodeBase>;
        /**
        * @language zh_CN
        * 顶点数
        * @priavte
        */
        numberOfVertices: number;
        /**
        * @language zh_CN
        * 顶点字节大小
        * @priavte
        */
        vertexSizeInBytes: number;
        /**
        * @language zh_CN
        * @priavte
        */
        private _nodeData;
        /**
        * @language zh_CN
        * @priavte
        */
        private _vertexAttributes;
        /**
        * @language zh_CN
        * 构造函数
        * @priavte
        */
        constructor();
        /**
        * @language zh_CN
        * 添加动画功能节点
        * 添加继承 animNodeBase 功能节点 例如粒子的 加速度功能节点，匀速功能节点
        * @param node 节点对象
        */
        addNode(node: AnimNodeBase): void;
        /**
        * @language zh_CN
        * 移除动画功能节点
        * 删除指定的动画功能节点，但是不能动态删除，需要进行 功能重置
        * @param node 节点对象
        */
        removeNode(node: AnimNodeBase): void;
        /**
        * @language zh_CN
        * 获取节点容器
        * 获取整体的功能节点列表
        * @return 节点容器
        */
        getNodes(): Array<AnimNodeBase>;
        /**
        * @language zh_CN
        * 获取节点顶点Shader
        * @return 顶点Shader容器
        * @private
        */
        getNodesVertexShaders(): Array<string>;
        /**
        * @language zh_CN
        * 获取节点片元Shader
        * @return 片元Shader容器
        * @private
        */
        getNodesFragmentShaders(): Array<string>;
        /**
        * @language zh_CN
        * 计算节点
        * @private
        */
        calculateNode(): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.Joint
     * @classdesc
     * Joint 类表示骨骼关节，属于骨架类的组成部分， Joint类属于骨架实现的内部类，无需直接实例化。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/Joint.ts
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
        /**
        * @language zh_CN
        * 构造函数
        * @param name 骨骼名称
        */
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
     * @private
     * @language zh_CN
     * @class egret3d.Skeleton
     * @classdesc
     * Skeleton 类表示骨架类，其中包含若干个 Joint（骨骼关节） 对象，Skeleton（骨架类）是组成骨骼动画的单帧单位。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/Skeleton.ts
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
     * SkeletonAnimationClip 类为骨骼动画
     *
     * SkeletonAnimationClip类为骨骼动画，其中保存管理若干个Skeleton（骨架对象），每个骨架对象都为该动画某时刻的骨骼帧信息。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/SkeletonAnimationClip.ts
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
     * SkeletonAnimation 类表示骨骼动画控制类
     *
     * 骨骼动画控制类中管理若干个 SkeletonAnimationClip（骨骼动画） 对象，每个SkeletonAnimationClip对象，都是对*.eam 文件的实例。
     *
     * @see egret3d.SkeletonAnimationClip
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample animation/skeletonAnimation/SkeletonAnimation.ts
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
        * @param vertexShader 顶点Shader
        * @param pixelShader 片元Shader
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
    * @private
    * @class egret3d.VarConstName
    * @classdesc
    * shader 变量 名字定义
    * 用户在写自定义shader时，按照引擎中已经列取出来的变量名进行命名
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
    * @private
    * @class egret3d.AttributeType
    * @classdesc
    *
    * shader中的变量属性类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    class AttributeType {
        /**
        * shader int类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static int: string;
        /**
        * shader float类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static float: string;
        /**
        * shader vec2类型 两个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec2: string;
        /**
        * shader vec3类型 三个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec3: string;
        /**
        * shader vec4类型 四个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec4: string;
        /**
        * shader 2x2 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat2: string;
        /**
        * shader 3x3 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat3: string;
        /**
        * shader 4x4 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat4: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.UniformType
    * @classdesc
    * shader Uniform 变量的类型
    */
    class UniformType {
        /**
        * shader bool类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bool: string;
        /**
        * shader int类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static int: string;
        /**
        * shader float类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static float: string;
        /**
        * shader vec2类型 两个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec2: string;
        /**
        * shader vec3类型 三个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec3: string;
        /**
        * shader vec4类型 四个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec4: string;
        /**
        * shader 2x2 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat2: string;
        /**
        * shader 3x3 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat3: string;
        /**
        * shader 4x4 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat4: string;
        /**
        * shader 贴图对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampler2D: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampleCube: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.VaryingType
    * @classdesc
    * shader中varying 变量 类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    class VaryingType {
        /**
        * shader bool类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bool: string;
        /**
        * shader int类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static int: string;
        /**
        * shader float类型
        * @version Egret 3.0
        * @platform Web,Native
        */
        static float: string;
        /**
        * shader vec2类型 两个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec2: string;
        /**
        * shader vec3类型 三个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec3: string;
        /**
        * shader vec4类型 四个 float 组成
        * @version Egret 3.0
        * @platform Web,Native
        */
        static vec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static bvec4: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec2: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec3: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static ivec4: string;
        /**
        * shader 2x2 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat2: string;
        /**
        * shader 3x3 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat3: string;
        /**
        * shader 4x4 矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        static mat4: string;
        /**
        * shader 贴图对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampler2D: string;
        /**
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        static sampleCube: string;
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.VarRegister
    * @classdesc
    * shader 变量 基类
    *
    * @version Egret 3.0
    * @platform Web,Native
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
    * @private
    * @class egret3d.TmpVar
    * @classdesc
    *
    * shader中临时变量类型的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TmpVar extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 变量名
        * @param valueType 变量类型
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Attribute
    * @classdesc
    * 变量属性
    * @version Egret 3.0
    * @platform Web,Native
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
    * @private
    * @class egret3d.Varying
    * @classdesc
    *
    * shader中varying类型的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Varying extends VarRegister {
        /**
        * @language zh_CN
        * 构造函数
        * @param name 变量名
        * @param valueType 变量类型
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Uniform
    * @classdesc
    *
    * shader中uniform类型的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Uniform extends VarRegister {
        /**
        * @language zh_CN
        * 创建一个Uniform对象
        * @param name 变量名
        * @param valueType 变量类型
        */
        constructor(name: string, valueType: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.ConstVar
    * @classdesc
    * shader中常量类型变量的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ConstVar extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 常量名
        * @param valueType 常量类型
        * @param value 常量的值
        */
        constructor(name: string, valueType: string, value: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @class egret3d.Sampler2D
    * @classdesc
    *
    * shader中sampler2D类型变量的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Sampler2D extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 变量名
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @private
    * @class egret3d.Sampler3D
    * @classdesc
    *
    * shader中samplerCube类型变量的所有数据
    * 包含变量类型，变量名，变量的值
    *
    * @see egret3d.AttributeType
    *
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Sampler3D extends VarRegister {
        /**
        * @language zh_CN
        * 构造
        * @param name 变量名
        */
        constructor(name: string);
    }
}
declare module egret3d.GLSL {
    /**
    * @private
    * @private
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
    /**
    * @private
    * @class egret3d.FuncData
    * @classdesc
    * shader函数内容的数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    class FuncData {
        /**
        * @private
        * 函数名
        * @version Egret 3.0
        * @platform Web,Native
        */
        name: string;
        /**
        * @private
        * 函数内容
        * @version Egret 3.0
        * @platform Web,Native
        */
        func: string;
    }
    /**
    * @private
    * @class egret3d.ShaderContent
    * @classdesc
    * shader文件解析后的数据内容
    * 每种变量类型都进行了规类
    * 用相应的列表进行存储，这样可以便于shader文件进行合并
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShaderContent {
        /**
        * @private
        * shader文件名
        * @version Egret 3.0
        * @platform Web,Native
        */
        name: string;
        private funcDict;
        /**
        * @private
        * 结构体列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        structDict: {
            [name: string]: string;
        };
        /**
        * @private
        * attribute列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        attributeList: Array<Attribute>;
        /**
        * @private
        * varying列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        varyingList: Array<Varying>;
        /**
        * @private
        * uniform列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        uniformList: Array<Uniform>;
        /**
        * @private
        * const列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        constList: Array<ConstVar>;
        /**
        * @private
        * 临时变量列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        tempList: Array<TmpVar>;
        /**
        * @private
        * sampler2D列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        sampler2DList: Array<Sampler2D>;
        /**
        * @private
        * sampler3D列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        sampler3DList: Array<Sampler3D>;
        /**
        * @private
        * 函数列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        funcList: Array<FuncData>;
        /**
        * @private
        * 增加一个变量对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addVar(sVar: VarRegister): void;
        /**
        * @private
        * 增加一个函数
        * @version Egret 3.0
        * @platform Web,Native
        */
        addFunc(name: string, func: string): void;
        /**
        * @private
        * 增加一个结构体
        * @version Egret 3.0
        * @platform Web,Native
        */
        addStruct(name: string, structStr: string): void;
        /**
        * @private
        * 合并一个shader内容
        * @version Egret 3.0
        * @platform Web,Native
        */
        addContent(otherContent: ShaderContent): void;
        private mergeMainFunc(func1, func2);
        private findFunc(name);
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.FuncData
    * @classdesc
    * shader系统工具类，管理所有要用到的shader文件
    * @version Egret 3.0
    * @platform Web,Native
    */
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
        *
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
    * @private
    * @class egret3d.MethodUsageData
    * @classdesc
    * 方法中需要用到的数据。
    * @version Egret 3.0
    * @platform Web,Native
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
        vs_shader: IShader;
        /**
         * @language zh_CN
         */
        fs_shader: IShader;
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
   * @private
    * @language zh_CN
    * @class egret3d.MaterialData
    * @classdesc
    * 材质数据。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MaterialData {
        /**
        * @private
        * @language zh_CN
        * 材质类型数组。
        * @每个材质球可能会有很多种贴图方法，而这个是做为默认支持的材质方法的添加通道。要使用的方法
        * @default MaterialType.DIFFUSE
        * @version Egret 3.0
        * @platform Web,Native
        */
        textureMethodTypes: TextureMethodType[];
        /**
        * @language zh_CN
        * diffuse pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffusePassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 深度 pass usage data。
        * @version Egret 3.0
        * @platform Web,Native
        */
        depthPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 法线 pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        normalPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * position pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        positionPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * post pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        postPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 灯光 pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        lightPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 阴影 pass usage 数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        shadowPassUsageData: MethodUsageData;
        /**
        * @language zh_CN
        * 渲染模式。
        * @default DrawMode.TRIANGLES
        * @version Egret 3.0
        * @platform Web,Native
        */
        drawMode: number;
        /**
        * @language zh_CN
        * Context3D 设备。
        * @version Egret 3.0
        * @platform Web,Native
        */
        context3D: Context3D;
        /**
        * @language zh_CN
        * 阴影贴图。
        * @version Egret 3.0
        * @platform Web,Native
        */
        shadowMapTex: TextureBase;
        /**
        * @language zh_CN
        * 漫反射贴图。
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffuseTex: TextureBase;
        /**
        * @language zh_CN
        * 法线贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        normalTex: TextureBase;
        /**
        * @language zh_CN
        * 特效贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularTex: TextureBase;
        /**
        * @language zh_CN
        * 灯光贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        lightMapTex: TextureBase;
        /**
        * @language zh_CN
        * ao 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        aoMapTex: TextureBase;
        /**
        * @language zh_CN
        * 环境贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        environmentMapTex: TextureBase;
        /**
        * @language zh_CN
        * mask 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        maskTex: TextureBase;
        /**
        * @language zh_CN
        * splat_0 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_0Tex: TextureBase;
        /**
        * @language zh_CN
        * splat_1 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_1Tex: TextureBase;
        /**
        * @language zh_CN
        * splat_2 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_2Tex: TextureBase;
        /**
        * @language zh_CN
        * splat_3 贴图。
        * @default CheckerboardTexture.texture
        * @version Egret 3.0
        * @platform Web,Native
        */
        splat_3Tex: TextureBase;
        /**
        * @language zh_CN
        * 方向光列表。
        * @version Egret 3.0
        * @platform Web,Native
        */
        directLightList: Array<DirectLight>;
        /**
        * @language zh_CN
        * 聚光灯列表。
        * @version Egret 3.0
        * @platform Web,Native
        */
        sportLightList: Array<SpotLight>;
        /**
        * @language zh_CN
        * 点光源列表。
        * @version Egret 3.0
        * @platform Web,Native
        */
        pointLightList: Array<PointLight>;
        /**
        * @language zh_CN
        * layer。
        * @default 0
        * @version Egret 3.0
        * @platform Web,Native
        */
        layer: number;
        /**
        * @language zh_CN
        * 投射阴影 。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        castShadow: boolean;
        /**
        * @language zh_CN
        * 接受阴影。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        acceptShadow: boolean;
        /**
        * @language zh_CN
        * 深度测试 。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        depthTest: boolean;
        /**
        * @language zh_CN
        * 是否平滑 。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        smooth: boolean;
        /**
        * @language zh_CN
        * 混合模式 。
        * @default BlendMode.NORMAL
        * @version Egret 3.0
        * @platform Web,Native
        */
        blendMode: BlendMode;
        /**
        * @language zh_CN
        * blend_src 值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        blend_src: number;
        /**
        * @language zh_CN
        * blend_dest 值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        blend_dest: number;
        /**
        * @language zh_CN
        * alphaBlending。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        alphaBlending: boolean;
        /**
        * @language zh_CN
        * ambientColor 值。
        * @default 0x0
        * @version Egret 3.0
        * @platform Web,Native
        */
        ambientColor: number;
        /**
        * @language zh_CN
        * diffuseColor 值。
        * @default 0xffffff
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffuseColor: number;
        /**
        * @language zh_CN
        * specularColor 值。
        * @default 0xffffff
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularColor: number;
        /**
        * @language zh_CN
        * shininess 值。
        * @default 8.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        shininess: number;
        /**
        * @language zh_CN
        * cutAlpha 值。
        * @default 0.7
        * @version Egret 3.0
        * @platform Web,Native
        */
        cutAlpha: number;
        /**
        * @language zh_CN
        * 是否重复。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        repeat: boolean;
        /**
        * @language zh_CN
        * bothside 值。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        bothside: boolean;
        /**
        * @language zh_CN
        * alpha 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        alpha: number;
        /**
        * @language zh_CN
        * specularPower 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularPower: number;
        /**
        * @language zh_CN
        * ambientPower 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        ambientPower: number;
        /**
        * @language zh_CN
        * diffusePower。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffusePower: number;
        /**
        * @language zh_CN
        * normalPower 值。
        * @default 1.0
        * @version Egret 3.0
        * @platform Web,Native
        */
        normalPower: number;
        /**
        * @language zh_CN
        * 材质数据需要变化。
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        materialDataNeedChange: boolean;
        /**
        * @language zh_CN
        * 纹理变化。
        * @default false
        * @version Egret 3.0
        * @platform Web,Native
        */
        textureChange: boolean;
        /**
        * @language zh_CN
        * passChange
        * @default true
        * @version Egret 3.0
        * @platform Web,Native
        */
        passChange: boolean;
        /**
        * @language zh_CN
        * cullFrontOrBack。
        * @default Egret3DDrive.BACK
        * @version Egret 3.0
        * @platform Web,Native
        */
        cullFrontOrBack: number;
        /**
        * @language zh_CN
        * 克隆方法。
        * @returns {MaterialData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        clone(): MaterialData;
        /**
        * @language zh_CN
        * 销毁。
        * @version Egret 3.0
        * @platform Web,Native
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.MethodBase
    * @classdesc
    * ColorMethod，DepthMethod，DiffuseMethod，NormalMethod，ShadowMapingMethod，ShadowMapMethod，TerrainMethod ，ParticleVertexMethod，ShadowVertexMethod，SkinVertexMethod，StaticVertexMethod 方法的基类。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MethodBase {
        /**
         * @private
         */
        protected materialData: MaterialData;
        /**
         * @private
         */
        protected usage: MethodUsageData;
        /**
         * @private
         */
        protected vsMethodName: string;
        /**
         * @private
         */
        protected fsMethodName: string;
        /**
         * @private
         */
        protected context3D: Context3D;
        /**
         * @language zh_CN
         * 是否支持Shadow。
         * @version Egret 3.0
         * @platform Web,Native
         */
        acceptShadow: boolean;
        /**
        * @language zh_CN
        * 创建一个新的 MethodBase 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 设置材质信息。
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
        * @language zh_CN
        * 获取顶点方法名。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        vertexMethodName: string;
        /**
        * @language zh_CN
        * 获取frag方法名。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        fragMethodName: string;
        /**
         * @language zh_CN
         * 激活。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
        * @version Egret 3.0
        * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
        * @version Egret 3.0
        * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.VertexShader
    * @classdesc
    * 顶点着色器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class VertexShader extends GLSL.ShaderBase {
        /**
        * @language zh_CN
        * 创建一个新的 VertexShader 对象。
        * @param materialData {MaterialData}
        * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(materialData: MaterialData, usage: MethodUsageData);
        /**
        * @language zh_CN
        * 设置顶点着色器。
        * @param geometry {GeometryBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        setVertexShader(geometry: GeometryBase): void;
        /**
        * @language zh_CN
        * 返回 Shader 源。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        getShaderSource(): string;
        /**
        * @language zh_CN
        * 构建 VertexShader。
        * @version Egret 3.0
        * @platform Web,Native
        */
        build(): void;
        /**
        * @language zh_CN
        * 添加 Method。
        * @version Egret 3.0
        * @platform Web,Native
        * @param method {MethodBase}
        */
        addMethod(method: MethodBase): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.PixelShader
    * @classdesc
    * 像素着色器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PixelShader extends GLSL.ShaderBase {
        /**
        * @language zh_CN
        * 创建一个新的 PixelShader 对象。
        * @param materialData {MaterialData}
        * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(materialData: MaterialData, usage: MethodUsageData);
        /**
        * @language zh_CN
        * 添加 Method。
        * @param method {MethodBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addMethod(method: MethodBase): void;
        /**
        * @language zh_CN
        * 添加 EffectMethod。
        * @param method {EffectMethod}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addEffectMethod(method: EffectMethod): void;
        /**
        * @language zh_CN
        * 返回 Shader 源。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        getShaderSource(): string;
        /**
        /**
        * @language zh_CN
        * 构建 PixelShader。
        * @version Egret 3.0
        * @platform Web,Native
        */
        build(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.StaticVertexMethod
    * @classdesc
    * 静态顶点方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class StaticVertexMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 StaticVertexMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 静态顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * -pos     3 12 0
         * -normal  3 12 12
         * -tangent 3 12 24
         * -color   4 16 36
         * -uv0     2 8 52
         * -uv      1 8 60
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
        private normalMatrix;
        /**
         * @language zh_CN
         * 更新 静态顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.ShadowVertexMethod
    * @classdesc
    * 阴影顶点方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShadowVertexMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 ShadowVertexMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 阴影顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         *-pos     3 12 0
         *-normal  3 12 12
         *-tangent 3 12 24
         *-color   4 16 36
         *-uv0     2 8  52
         *-uv      1 8  60
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
        /**
         * @language zh_CN
         * 更新 阴影顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.SkinVertexMethod
    * @classdesc
    * 蒙皮顶点方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class SkinVertexMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 SkinVertexMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 蒙皮顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * -pos        3 12 0
         * -normal     3 12 12
         * -tangent    3 12 24
         * -color      4 16 36
         * -uv0        2 8 52
         * -uv         1 8 60
         * -boneIndex  4 16 68
         * -boneWeight 4 16 84
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        private normalMatrix;
        /**
         * @language zh_CN
         * 更新 蒙皮顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.ParticleVertexMethod
    * @classdesc
    * 粒子顶点方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ParticleVertexMethod extends MethodBase {
        private index;
        /**
        * @language zh_CN
        * 创建一个新的 ParticleVertexMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 粒子顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * -pos            3       12      0
         * -uv0            2        8      12
         * -speed          3       12      20
         * -lifecycle      1       4       32
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        private time;
        private normalMatrix;
        /**
         * @language zh_CN
         * 更新 粒子顶点方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.ShadowMapMethod
    * @classdesc
    * 阴影采样。
    * 材质球接受阴影的着色片段，即使在模型中写入acceptShdow 也需要在材质球中加入这个阴影映射方法
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShadowMapMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 ShadowMapMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 阴影采样。
         * @private
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新 阴影采样。
         * @private
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.TerrainMethod
    * @classdesc
    * 地形图方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TerrainMethod extends MethodBase {
        private uvData;
        private uvIndex;
        /**
        * @language zh_CN
        * 创建一个新的 TerrainMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 设置UVTitling 图层索引
         * @param index
         * @param x
         * @param y
         */
        setUVTitling(index: number, x: number, y: number): void;
        /**
         * @language zh_CN
         * 激活 地形图方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新 地形图方法。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁 地形图方法。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @class egret3d.NormalMethod
    * @classdesc
    * 法线方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class NormalMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 NormalMethod 对象。
        * @version Egret 3.0
        * @platform Web,Nativeo
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 NormalMethod。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新 NormalMethod。
         * @version Egret 3.0
         * @platform Web,Native
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁 NormalMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.DepthMethod
    * @classdesc
    * 深度方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DepthMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 DepthMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 DepthMethod。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新 DepthMethod。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁 DepthMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.DiffuseMethod
    * @classdesc
    * 漫反射方法。
    * 漫反射使用的着色片段方法，可以设置漫反射的贴图
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DiffuseMethod extends MethodBase {
        /**
        * @language zh_CN
        * 创建一个新的 DiffuseMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 激活 DiffuseMethod。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新 DiffuseMethod。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁 DiffuseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.ShadowMapingMethod
    * @classdesc
    * 阴影映射。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShadowMapingMethod extends MethodBase {
        /**
         * @language zh_CN
         * 偏移值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        bias: number;
        /**
         * @language zh_CN
         * 阴影颜色红色通道值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        shdowColorR: number;
        /**
         * @language zh_CN
         * 阴影颜色绿色通道值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        shdowColorG: number;
        /**
         * @language zh_CN
         * 阴影颜色蓝色通道值。
         * @version Egret 3.0
         * @platform Web,Native
         */
        shdowColorB: number;
        private weightUniformIndex;
        /**
        * @language zh_CN
        * 创建一个新的 ShadowMapingMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 设置材质信息。
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 激活 阴影映射。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 更新 阴影映射。
         * @param context3D {Context3D}
         * @param program3D {IProgram3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, program3D: IProgram3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.EffectMethod
    * @classdesc
    * AOMapMethod，DistanceFog，EnvironmentMappingMethod，LightMapMethod 的基类。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EffectMethod {
        protected materialData: MaterialData;
        protected usage: MethodUsageData;
        protected vsMethodName: string;
        protected fsMethodName: string;
        protected context3D: Context3D;
        /**
        * @language zh_CN
        * 创建一个新的 EffectMethod 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
         * @language zh_CN
         * 设置材质信息。
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
        * @language zh_CN
        * 返回顶点方法名。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        vertexMethodName: string;
        /**
        * @language zh_CN
        * 返回frag方法名。
        * @returns {String}
        * @version Egret 3.0
        * @platform Web,Native
        */
        fragMethodName: string;
        /**
         * @private
         * @language zh_CN
         * 激活特效。
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效。
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁。
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.AOMapMethod
     * @classdesc
     * AO贴图方法。
     *
     * 可通过目前流行的 3d渲染软件 C4D 3Dmax Zbush 等都可以渲染环境吸收贴图，将对于不需要显示的光线屏蔽在外。
     *
     * @version Egret 3.0
     * @platform Web,Native
     */
    class AOMapMethod extends EffectMethod {
        private _aoPower;
        private texture;
        /**
         * @language zh_CN
         * 创建一个新的 AOMapMethod 对象。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(texture: TextureBase);
        aoPower: number;
        /**
         * @language zh_CN
         * 设置MaterialData。
         * @private
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 设置ao Texture。
         * 这里设置 环境吸收贴图纹理 ， 可通过 load 加载
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        aoTexture: TextureBase;
        /**
         * @private
         * @language zh_CN
         * 激活特效
         * @private
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效
         * @private
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * 进行相关的 贴图纹理资源回收
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.LightMapMethod
    * @classdesc
    * 光照贴图方法。</p>
    * 可通过目前流行的 3d渲染软件 C4D 3Dmax Zbush 等都可以烘焙灯光贴图，再使用模型中的第二uvmaping 映射出来。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class LightMapMethod extends EffectMethod {
        private texture;
        /**
        * @language zh_CN
        * 创建一个新的 LightMapMethod 对象。
        * 创建一个新的 LightMapMethod 对象。
        * @param texture {TextureBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(texture: TextureBase);
        /**
         * @language zh_CN
         * 设置材质信息。
         * 设置材质信息。
         * @private
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 设置灯光贴图。
         * 设置烘焙后的灯光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        lightTexture: TextureBase;
        /**
         * @private
         * @language zh_CN
         * 激活特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * 进行相关的 贴图纹理资源回收
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.EnvironmentMappingMethod
    * @classdesc
    * 环境贴图方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EnvironmentMappingMethod extends EffectMethod {
        private texture;
        private reflectValue;
        /**
        * @language zh_CN
        * 创建一个新的 EnvironmentMappingMethod 对象。
        * @param texture {TextureBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(texture: TextureBase);
        /**
        * @language zh_CN
        * 获取反射值。
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置反射值。
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        reflect: number;
        /**
         * @language zh_CN
         * 设置材质信息。
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 设置灯光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        lightTexture: TextureBase;
        /**
         * @private
         * @language zh_CN
         * 激活特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.EnvironmentMappingMethod
    * @classdesc
    * 模拟汽车油漆
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PaintFresnelReflectionMappingMethod extends EffectMethod {
        private _envtexture;
        private _rimPower;
        private _envLightPower;
        private _randomTexture;
        private _maskColor;
        private _maskColorR;
        private _maskColorG;
        private _maskColorB;
        /**
        * @language zh_CN
        * 创建一个新的 EnvironmentMappingMethod 对象。
        * @param texture {TextureBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(texture: TextureBase, randomTexture: TextureBase);
        /**
        * @language zh_CN
        * 获取反射值。
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置反射值。
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        rimPower: number;
        /**
        * @language zh_CN
        * 获取反射值。
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置反射值。
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        envLightPower: number;
        maskColor: number;
        /**
         * @language zh_CN
         * 设置材质信息。
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 设置灯光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        envtexture: TextureBase;
        /**
         * @language zh_CN
         * 设置灯光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        randomTexture: TextureBase;
        /**
         * @private
         * @language zh_CN
         * 激活特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.EnvironmentMappingMethod
    * @classdesc
    *
    * 环境贴图方法 通过材质球的 Specular 贴图纹理强度作为 反射强度值
    * @version Egret 3.0
    * @platform Web,Native
    */
    class SpecularEnvironmentMappingMethod extends EffectMethod {
        private texture;
        private reflectValue;
        /**
        * @language zh_CN
        * 创建一个新的 EnvironmentMappingMethod 对象。
        * @param texture {TextureBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(texture: TextureBase);
        /**
        * @language zh_CN
        * 获取反射值。
        * @private
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置反射值。
        * @private
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        reflect: number;
        /**
         * @language zh_CN
         * 设置材质信息。
        * @private
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 设置贴图。
         *  设置环境光照的贴图，必须为cube纹理贴图
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        lightTexture: TextureBase;
        /**
         * @private
         * @language zh_CN
         * 激活特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * 进行相关的 贴图纹理资源回收
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @language zh_CN
    * @class egret3d.EnvironmentMappingMethod
    * @classdesc
    * 环境贴图方法。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class AlphaEnvironmentMappingMethod extends EffectMethod {
        private texture;
        private reflectValue;
        /**
        * @language zh_CN
        * 创建一个新的 EnvironmentMappingMethod 对象。
        * @param texture {TextureBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(texture: TextureBase);
        /**
         * @language zh_CN
         * 设置材质信息。
         * @param materialData {MaterialData}
         * @param usage {MethodUsageData}
        * @version Egret 3.0
        * @platform Web,Native
         */
        setMaterialData(materialData: MaterialData, usage: MethodUsageData): void;
        /**
         * @language zh_CN
         * 设置灯光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        lightTexture: TextureBase;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.DistanceFog
    * @classdesc
    * DistanceFog 类 表示远景雾。 </p>
    * 创建顶点着色的雾，可设置雾的形成远近范围，雾的浓度。</p>
    * 为场景添加景深效果。</p>
    * @version Egret 3.0
    * @platform Web,Native
    *
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
        * 创建一个新的 DistanceFog 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 获取雾颜色。
        * 返回16进制的雾颜色
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾颜色。
        * 设置16进制的雾颜色
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        fogColor: number;
        /**
        * @language zh_CN
        * 获取雾的全局密度。
        * 获取全局雾的密度，值的区间在 0~1之间
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的全局密度。
        * 设置全局雾的密度，值的区间在 0~1之间
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalDensity: number;
        /**
        * @language zh_CN
        * 获取雾的开始距离。
        * 获取全局雾的显示最近的距离
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的开始距离。
        * 设置全局雾的显示最近的距离
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        startDistance: number;
        /**
        * @language zh_CN
        * 获取雾的缩放距离。
        * 获取全局雾的显示浓雾缩放比例
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置雾的缩放距离。
        * 设置全局雾的显示浓雾缩放比例
        * @param value{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        distanceScale: number;
        /**
         * @private
         * @language zh_CN
         * 激活特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 更新特效
         * @param context3D {Context3D}
         * @param usage {MethodUsageData}
         * @param materialData {MaterialData}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataEffect(context3D: Context3D, usage: MethodUsageData, materialData: MaterialData, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 销毁
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.MaterialPassBase
    * @classdesc
    * 材质通道渲染器。ColorMapPass，DepthMapPass，DiffuseMapPass，NormalMapPass，OutLinePass的基类。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MaterialPassBase {
        /**
         * @private
         * @language zh_CN
         */
        protected shaderChange: boolean;
        /**
         * @private
         * @language zh_CN
         */
        protected context3DChange: boolean;
        /**
         * @private
         * @language zh_CN
         */
        protected materialData: MaterialData;
        /**
         * @private
         * @language zh_CN
         */
        protected vertexShader: VertexShader;
        /**
         * @private
         * @language zh_CN
         */
        protected pixelShader: PixelShader;
        /**
         * @private
         * @language zh_CN
         */
        protected methodList: Array<MethodBase>;
        /**
         * @private
         * @language zh_CN
         */
        protected effectMethodList: Array<EffectMethod>;
        /**
         * @private
         * @language zh_CN
         */
        diffuseMethod: MethodBase;
        /**
         * @private
         * @language zh_CN
         */
        shadowMaping: ShadowMapingMethod;
        /**
         * @private
         * @language zh_CN
         */
        protected animation: IAnimation;
        /**
        * @language zh_CN
        * 创建一个新的 MaterialPassBase 对象。
        * @param data {MaterialData} 材质数据
         * @version Egret 3.0
         * @platform Web,Native
        */
        constructor(data?: MaterialData);
        /**
         * @language zh_CN
         * 添加方法。
         * @param method {MethodBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        addMethod(method: MethodBase): void;
        /**
         * @language zh_CN
         * 移除方法。
         * @param method {MethodBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        removeMethod(method: MethodBase): void;
        /**
         * @language zh_CN
         * 添加EffectMethod。
         * @param method {EffectMethod}
         * @version Egret 3.0
         * @platform Web,Native
         */
        addEffectMethod(method: EffectMethod): void;
        /**
         * @language zh_CN
         * 移除 EffectMethod。
         * @param method {EffectMethod}
         * @version Egret 3.0
         * @platform Web,Native
         */
        removeEffectMethod(method: EffectMethod): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        initShader(context3D: Context3D, geomtry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * @returns {}
         */
        protected resetTexture(): void;
        private buildShader(context3D);
        /**
         * @language zh_CNa
         * 激活 材质通道渲染器。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 绘制。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 设置为非活动。
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @version Egret 3.0
         * @platform Web,Native
         */
        unActive(context3D: Context3D, camera3D: Camera3D): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.DiffuseMapPass
    * @classdesc
    * 漫反射贴图通道渲染器，TerrainMapPass 的基类
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DiffuseMapPass extends MaterialPassBase {
        /**
        * @language zh_CN
        * 创建一个新的 DiffuseMapPass 对象。
        * @param data {MaterialData} 材质数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
        * @version Egret 3.0
        * @platform Web,Native
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 重置纹理。
         * @version Egret 3.0
         * @platform Web,Native
         */
        protected resetTexture(): void;
        /**
         * @language zh_CNa
         * 激活 漫反射贴图通道渲染器。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 索引。
         * @version Egret 3.0
         * @platform Web,Native
         */
        index: number;
        /**
         * @language zh_CNa
         * 绘制。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.DiffuseMapPass
    * @classdesc
    * cube贴图用的漫反射渲染通道
    * 漫反射贴图通道渲染器，TerrainMapPass 的基类
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CubeDiffuseMapPass extends DiffuseMapPass {
        /**
        * @language zh_CN
        * 创建一个新的 DiffuseMapPass 对象。
        * @param data {MaterialData} 材质数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
        * @version Egret 3.0
        * @platform Web,Native
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 重置纹理。
         * @version Egret 3.0
         * @platform Web,Native
         */
        protected resetTexture(): void;
        /**
         * @language zh_CNa
         * 激活 漫反射贴图通道渲染器。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 索引。
         * @version Egret 3.0
         * @platform Web,Native
         */
        index: number;
        /**
         * @language zh_CNa
         * 绘制。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.TerrainMapPass
    * @classdesc
    * 地形贴图通道渲染器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TerrainMapPass extends DiffuseMapPass {
        /**
        * @language zh_CN
        * 创建一个新的 TerrainMapPass 对象。
        * @param data {MaterialData} 材质数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.DepthMapPass
    * @classdesc
    * 深度贴图通道渲染器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DepthMapPass extends MaterialPassBase {
        private depthMethod;
        /**
        * @language zh_CN
        * 创建一个新的 DepthMapPass 对象。
        * @param data {MaterialData} 材质数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 激活 深度贴图通道渲染器。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 索引。
         * @version Egret 3.0
         * @platform Web,Native
         */
        index: number;
        /**
         * @language zh_CNa
         * 绘制。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.NormalMapPass
    * @classdesc
    * 发现贴图通道渲染器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class NormalMapPass extends MaterialPassBase {
        private normalMethod;
        /**
        * @language zh_CN
        * 创建一个新的 NormalMapPass 对象。
        * @param data {MaterialData} 材质数据
         * @version Egret 3.0
         * @platform Web,Native
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 激活 发现贴图通道渲染器。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 索引。
         * @version Egret 3.0
         * @platform Web,Native
         */
        index: number;
        /**
         * @language zh_CNa
         * 绘制。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.ColorMapPass
    * @classdesc
    * 颜色贴图通道渲染器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ColorMapPass extends MaterialPassBase {
        /**
        * @language zh_CN
        * 创建一个新的 ColorMapPass 对象。
        * @version Egret 3.0
        * @platform Web,Native
        * @param data {MaterialData} 材质数据
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 激活 ColorMapPass。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 索引
         * @version Egret 3.0
         * @platform Web,Native
         */
        index: number;
        /**
         * @language zh_CNa
         * 更新 ColorMapPass。
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        updata(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
   * @private
    * @language zh_CN
    * @class egret3d.ShadowMapPass
    * @classdesc
    * 阴影贴图通道渲染器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ShadowMapPass extends MaterialPassBase {
        /**
        * @language zh_CN
        * 创建一个新的 ShadowMapPass 对象。
        * @param data {MaterialData} 材质数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(data: MaterialData);
        /**
         * @language zh_CN
         * 初始化 UseMethod。
         * @version Egret 3.0
         * @platform Web,Native
         */
        initUseMethod(): void;
        /**
         * @language zh_CN
         * 初始化 shader 。
         * @param context3D {Context3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        initShader(context3D: Context3D, geometry: GeometryBase, animation: IAnimation): void;
        private index;
        /**
         * @language zh_CNa
         * 激活 阴影贴图通道渲染器。
         * @version Egret 3.0
         * @platform Web,Native
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activate(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CNa
         * 绘制。
         * @version Egret 3.0
         * @platform Web,Native
         * @param context3D {Context3D}
         * @param modeltransform {Matrix4_4}
         * @param camera3D {Camera3D}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        draw(context3D: Context3D, modeltransform: Matrix4_4, camera3D: Camera3D, geometry: GeometryBase, animation: IAnimation): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    enum TextureMethodType {
        DIFFUSE = 0,
        NORMAL = 1,
        SPECULAR = 2,
        RGBATERRAIN = 3,
    }
    /**
    * @language zh_CN
    * @class egret3d.MaterialBase
    * @classdesc
    * TerrainMaterial,TextureMaterial 的基类。</p>
    * 材质球共有的基础类型，封装了材质球共有的基础数据设置方法。</p>
    * 不同的渲染通道pass。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class MaterialBase {
        /**
         * @private
         * @language zh_CN
         * 材质数据。
         * @version Egret 3.0
         * @platform Web,Native
         */
        materialData: MaterialData;
        /**
         * @private
         * @language zh_CN
         * diffuse pass。
         * @version Egret 3.0
         * @platform Web,Native
         */
        diffusePass: MaterialPassBase;
        /**
         * @private
         * @language zh_CN
         * shadow pass。
         * @version Egret 3.0
         * @platform Web,Native
         */
        shadowPass: ShadowMapPass;
        /**
         * @private
         * @language zh_CN
         * 法线pass。
         * @version Egret 3.0
         * @platform Web,Native
         */
        normalPass: NormalMapPass;
        /**
         * @private
         * @language zh_CN
         * depthPass。
         * @version Egret 3.0
         * @platform Web,Native
         */
        depthPass: DepthMapPass;
        /**
         * @private
         * @language zh_CN
         * position pass。
         * @version Egret 3.0
         * @platform Web,Native
         */
        positionPass: MaterialPassBase;
        /**
         * @private
         * @language zh_CN
         * outLin pass。
         * @version Egret 3.0
         * @platform Web,Native
         */
        outLinePass: MaterialPassBase;
        /**
         * @private
        * @language zh_CN
        * 创建一个新的 MethodBase 对象。
        * @param materialData {MaterialData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(materialData?: MaterialData);
        /**
         * @private
        * @language zh_CN
        * 初始化 MatPass。
        * @version Egret 3.0
        * @platform Web,Native
        */
        protected initMatPass(): void;
        /**
        * @language zh_CN
        * 设置材质球数据。
        * 设置材质球的数据data，今后的工具编辑器会直接使用
        * @param materialData {MaterialData}
        * @version Egret 3.0
        * @platform Web,Native
        */
        setData(matData: MaterialData): void;
        /**
         * @language zh_CN
         * 返回材质球数据。
         * 返回材质球数据。
         * @returns {MaterialData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        getData(): MaterialData;
        /**
        * @language zh_CN
        * 添加材质 DiffusePass 方法。
        * 添加自定义的 材质球渲染通道，渲染不同的pass
        * @param method {MethodBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addDiffusePassMothod(method: MethodBase): void;
        /**
        * @language zh_CN
        * 添加材质 DiffusePassEffect 方法。
        * 添加材质球的特效找色片段，其着色shader会加入到最后一行
        * @param method {EffectMethod}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addDiffusePassEffectMothod(method: EffectMethod): void;
        /**
        * @language zh_CN
        * 返回 shadowMaping 方法。
        * 返回 阴影的maping 方式。
        * @returns {ShadowMapingMethod}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置材质 shadowMaping 方法。
        * 设置材质 接受阴影的方法，如果要 接受阴影必须设置 acceptShadow 和maping方式
        * @param method {ShadowMapingMethod}
        * @version Egret 3.0
        * @platform Web,Native
        */
        shadowMapingMethod: ShadowMapingMethod;
        /**
        * @language zh_CN
        * 设置材质 diffuseColor。
        * 设置 16 进制的漫反射颜色
        * @param color {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        diffuseColor: number;
        /**
        * @language zh_CN
        * 设置材质 ambientColor。
        * 设置 16 进制的环境光颜色
        * @param color {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        ambientColor: number;
        /**
        * @language zh_CN
        * 设置材质 specularColor。
        * 设置 16 进制的镜面光反射颜色
        * @param color {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        specularColor: number;
        /**
         * @language zh_CN
         * 返回材质 alpha 值。
         * 返回 alpha 颜色
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 alpha 值。
         * 设置 材质球的透明度，如果透明度小于1会自动启用 alphablending
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        alpha: number;
        /**
         * @language zh_CN
         * 返回材质 shininess 值。
         * 返回材质 光滑程度 值越大，越不光滑
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 shininess 值。
         * 设置材质球的 光滑程度 值越大，越不光滑
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        shininess: number;
        /**
         * @language zh_CN
         * 返回材质 specularPower 值。
         * 返回材质 高光颜色的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 specularPower 值。
         * 设置材质 高光颜色的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        specularPower: number;
        /**
         * @language zh_CN
         * 返回材质 ambientPower 值。
         * 返回材质 环境光颜色的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 ambientPower 值。
         * 设置材质 环境光颜色的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        ambientPower: number;
        /**
         * @language zh_CN
         * 返回材质 diffusePower 值。
         * 返回材质 漫反射颜色的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 diffusePower 值。
         * 设置材质 漫反射颜色的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        diffusePower: number;
        /**
         * @language zh_CN
         * 返回材质 normalPower 值。
         * 返回材质 法线的强度 值。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 normalPower 值。
         * 设置材质 法线的强度 值。
         * @param value {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        normalPower: number;
        /**
         * @language zh_CN
         * 返回材质 castShadow 值。
         * 返回材质 是否产生阴影 值。
         * @returns {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置材质 castShadow 值。
         * 设置材质是否接受阴影，设置了之后必须要给 shadowmaping 的方法。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        castShadow: boolean;
        /**
        * @language zh_CN
        * 返回材质 acceptShadow 值。
        * 返回材质是否接受阴影，设置了之后必须要给 shadowmaping 的方法。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 acceptShadow 值。
         * 设置材质是否是否产生阴影，设置了之后必须要给 shadowmaping 的方法。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        acceptShadow: boolean;
        /**
        * @language zh_CN
        * 返回材质 smooth 值。
        * 返回 材质纹理的采样方式，是否抗锯齿，是否精细显示。的开关
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 smooth 值。
         * 材质纹理的采样方式，是否抗锯齿，是否精细显示。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        smooth: boolean;
        /**
        * @language zh_CN
        * 返回材质 repeat 值。
        * 返回材质 是否进行纹理重复采样的方式开关。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 repeat 值。
         * 设置材质 是否进行纹理重复采样的方式开关。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        repeat: boolean;
        /**
        * @language zh_CN
        * 返回材质 bothside 值。
       * 返回是否显示双面的开关，一般情况不需要。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 bothside 值。
        * 设置材质是否显示双面的开关，一般情况不需要。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        bothside: boolean;
        /**
         * @language zh_CN
         * 返回 cull 模式。
         * @returns {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
       * @language zh_CN
       * 设置 cull 模式。
       * @param value {Number}
       * @version Egret 3.0
       * @platform Web,Native
       */
        cullMode: number;
        /**
        * @language zh_CN
        * 返回材质 blendMode 值。
        * 返回材质 blendMode 值。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 blendMode 值。
         * 设置材质球的 混合模式可以参照 blendmode 中的值
         * @param value {BlendMode}
         * @version Egret 3.0
         * @platform Web,Native
         */
        blendMode: BlendMode;
        /**
         * @private
         * @language zh_CN
         * 设置材质 Outline 样式。
         * @param color {Number}
         * @param thickness {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setOutlineStyler(color: number, thickness: number): void;
        /**
        * @language zh_CN
        * 返回材质 depthTest 值。
        * 返回物件渲染，是否需要进行深度排序的开关。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 depthTest。
         * 设置物件渲染，是否需要进行深度排序的开关。
         * @param value {boolean}
         * @version Egret 3.0
         * @platform Web,Native
         */
        depthTest: boolean;
        /**
         * @language zh_CN
         * 设置材质 lightGroup 。
         * 设置材质球接受的灯光组。
         * @param lightGroup {LightGroup}
         * @version Egret 3.0
         * @platform Web,Native
         */
        lightGroup: LightGroup;
        /**
        * @language zh_CN
        * 返回材质 diffuseTexture。
        * 返回材质球的漫反射贴图。
        * @returns {TextureBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
         * @language zh_CN
         * 设置材质 diffuseTexture 。
         * 设置材质球的漫反射贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        diffuseTexture: TextureBase;
        /**
         * @language zh_CN
         * 设置材质 normalTexture 。
         * 设置材质球的凹凸法线贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        normalTexture: TextureBase;
        /**
         * @language zh_CN
         * 设置材质 specularTexture 。
         * 设置材质球的高光贴图。
         * @param texture {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        specularTexture: TextureBase;
        /**
         * @language zh_CN
         * 克隆材质。
         * 返回新的材质球，但是共用材质纹理，和着色器。
         * @returns {MaterialBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        clone(): MaterialBase;
        /**
         * @private
         * @language zh_CN
         * 激活 DiffusePass
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateDiffusePass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 渲染 DiffusePass
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        rendenDiffusePass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 激活 ShadowPass
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateShadowPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 渲染 ShadowPass
         * @language zh_CN
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        rendenShadowPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 激活 NormalPass
         * @language zh_CN
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateNormalPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 渲染 NormalPass
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        rendenNormalPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 激活 DepthPass
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        activateDepthPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @private
         * @language zh_CN
         * 渲染 DepthPass
         * @param context3D {Context3D}
         * @param camera3D {Camera3D}
         * @param modelMatrix {Matrix4_4}
         * @param geometry {GeometryBase}
         * @param animation {IAnimation}
         * @version Egret 3.0
         * @platform Web,Native
         */
        rendenDepthPass(context3D: Context3D, camera3D: Camera3D, modelMatrix: Matrix4_4, geometry: GeometryBase, animation: IAnimation): void;
        /**
         * @language zh_CN
         * 销毁
         * 进行材质球的纹理，着色器回收，相关的克隆对象会受影响
         * @version Egret 3.0
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.TerrainMaterial
    * @classdesc
    * 地形材质。</p>
    * 地形材质球，可以使用 一张control 的rgba 贴图控制融合地表纹理，最大只能融合4张地表纹理，后期可以进行拓展，也可设置单独的纹理重复次数，纹理的uv映射方式，具体可以看官方的示例教程。</p>
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TerrainMaterial extends MaterialBase {
        /**
         * @language zh_CN
         * 创建一个新的 TerrainMaterial 对象。
         * @param colormap {TextureBase}
         * @param controlTex {TextureBase}
         * @param splat_0 {TextureBase}
         * @param splat_1 {TextureBase}
         * @param splat_2 {TextureBase}
         * @param splat_3 {TextureBase}
         * @param lightMap {TextureBase}
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(colormap: TextureBase, controlTex: TextureBase, splat_0: TextureBase, splat_1: TextureBase, splat_2: TextureBase, splat_3: TextureBase, lightMap?: TextureBase);
        protected initMatPass(): void;
        /**
         * @language zh_CN
         * 设置 UVTitling。
         * @param index {Number} 图层索引
         * @param x {Number}
         * @param y {Number}
         * @version Egret 3.0
         * @platform Web,Native
         */
        setUVTitling(index: number, x: number, y: number): void;
    }
}
declare module egret3d {
    /**
    * @language zh_CN
    * @class egret3d.TextureMaterial
    * @classdesc
    * 纹理材质。
    * 标准的贴图材质球，可以设置三种贴图， diffuse ， normal ， speclar 贴图
    * 材质球中默认不设置纹理，显示的黑白棋盘格
    * @version Egret 3.0
    * @platform Web,Native
    */
    class TextureMaterial extends MaterialBase {
        /**
         * @language zh_CN
         * 创建一个新的 TextureMaterial 对象。
         * @param texture {TextureBase}
         * @param materialData {MaterialData}
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(texture?: TextureBase, materialData?: MaterialData);
        protected initMatPass(): void;
        /**
         * @language zh_CN
         * 克隆方法。
         * 将材质球克隆一份，公用shader着色器和贴图，不公用参数
         * @returns {TextureMaterial}
         * @version Egret 3.0
         * @platform Web,Native
         */
        clone(): TextureMaterial;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Frustum
    * @classdesc
    * 摄像机视椎体,计算出摄像机的可视范围.
    *
    * @see egret3d.Camera3D
    * @version Egret 3.0
    * @platform Web,Native
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        center: Vector3D;
        private _curVer;
        /**
        * @language zh_CN
        * 构造
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 生成一个视椎体
        * @param fovY 观察时y 轴方向的角度，就是观察范围夹角。
        * @param aspectRatio 纵横比，在视空间宽度除以高度.
        * @param nearPlane 近裁剪面位置Z值.
        * @param farPlane 远裁剪面位置Z值.
        * @version Egret 3.0
        * @platform Web,Native
        */
        makeFrustum(fovY: number, aspectRatio: number, nearPlane: number, farPlane: number): void;
        /**
        * @language zh_CN
        * 数据更新.
        * @param camera 视椎的摄像机.
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 检测一个坐标点是否在视椎体内
        * @param pos 检测的坐标
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inPoint(pos: Vector3D): boolean;
        /**
        * @language zh_CN
        * 检测一个球是否在视椎体内
        * @param center 球的坐标
        * @param radius 球的半径
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inSphere(center: Vector3D, radius: number): boolean;
        /**
        * @language zh_CN
        * 检测一个盒子是否在视椎体内
        * @param box 盒子
        * @returns 在视椎内返回ture
        * @version Egret 3.0
        * @platform Web,Native
        */
        inBox(box: CubeBoxBound): boolean;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 拣选类型，拣选时可以分为，包围盒拣选、模型拣选返回模型拣选到的位置、模型拣选返回模型拣选到的UV坐标
    * 这几种拣选方式
    * 设置鼠标拣选的类型，鼠标拣选不同的类型有不同的效果作用，还有性能
    * 需要的拣选精度越高，性能要求就越高，反之亦然
    *
    * @see egret3d.Picker
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum PickType {
        /**
        * 包围盒拣选
        */
        BoundPick = 0,
        /**
        * 模型拣选返回模型拣选到的位置
        */
        PositionPick = 1,
        /**
        * 模型拣选返回模型拣选到的UV坐标
        */
        UVPick = 2,
    }
    /**
    * @class egret3d.Object3D
    * @classdesc
    * 3d空间中的实体对象。
    * 场景图中的Object3D对象是一个树型结构，对象中包含了变换信息.
    * 这些变换信息应用于所有的子对象,子对象也有自己的变换信息,最终
    * 的变换信息要结合父对象的变换信息
    * 每个Object3D对象在生成时会创建一个包围盒
    *
    * @see egret3d.Vector3D
    * @see egret3d.Matrix4_4
    * @see egret3d.Quaternion
    * @see egret3d.CubeBoxBound
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Object3D extends EventDispatcher {
        /**
         * @private
         * @language zh_CN
         * 当前对象名
         * @version Egret 3.0
         * @platform Web,Native
         */
        static renderListChange: boolean;
        protected static s_id: number;
        protected _modeMatrix3D: Matrix4_4;
        protected _transformChange: boolean;
        protected _pos: Vector3D;
        protected _rot: Vector3D;
        protected _sca: Vector3D;
        protected _orientation: Quaternion;
        protected _axis: Vector3D;
        protected _angle: number;
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        name: string;
        /**
        * @language zh_CN
        * 当前对象id
        * @version Egret 3.0
        * @platform Web,Native
        */
        id: number;
        /**
        * @language zh_CN
        * 渲染层级
        * 渲染时分组进行依次渲染 前16位表示tag,后16位表示layer
        * @version Egret 3.0
        * @platform Web,Native
        */
        layer: number;
        /**
        * @language zh_CN
        * 渲染层级分类标签
        * @version Egret 3.0
        * @platform Web,Native
        */
        tag: Tag;
        /**
        * @language zh_CN
        * 是否开启鼠标事件
        * 设定这个物件是否具有 鼠标交互能力的开关
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseEnable: boolean;
        /**
        * @language zh_CN
        * 是否需要视锥体裁剪
        * 设定这个物件是否具有 视锥体裁剪功能，为否的话，将永远不参加场景渲染剔除树，无论是否在显示范围内都会进行相关的渲染逻辑运算
        * @version Egret 3.0
        * @platform Web,Native
        */
        enableCut: boolean;
        /**
        * @language zh_CN
        * 父亲节点
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        parent: Object3D;
        /**
        * @language zh_CN
        * 子对象列表
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        childs: Array<Object3D>;
        /**
        * @language zh_CN
        * 动作对象，控制骨骼动画
        * 可拓展的动画功能属性，动画功能的驱动类总接口
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        animation: IAnimation;
        /**
        * @language zh_CN
        * 网格信息
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        geometry: GeometryBase;
        /**
        * @language zh_CN
        * 材质信息
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        material: MaterialBase;
        /**
        * @language zh_CN
        * 对象模型包围盒
        * 每个场景物件都需要有的 包围盒子，可以自定义包围盒形状大小，也可以根据模型本身生成
        * @version Egret 3.0
        * @platform Web,Native
        */
        box: CubeBoxBound;
        /**
        * @language zh_CN
        * 鼠标检测数据
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        pickerData: PickResult;
        /**
        * @language zh_CN
        * 是否控制，当摄像机被绑定摄像机动画时，这个值为false.
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        isController: boolean;
        /**
        * @language zh_CN
        * 是否可见
        * 设置渲染是否显示的快速通道，在渲染列表中，但是不进行渲染，但是进行逻辑运算
        * @version Egret 3.0
        * @platform Web,Native
        */
        isVisible: boolean;
        /**
        * @language zh_CN
        * 是否关闭
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        isDisable: boolean;
        /**
        * @language zh_CN
        * 鼠标拣选类型
        * 设置鼠标的拣选类型，可通过 PickType来进行设置
        * 快速拣选默认使用 正方形包围盒子
        * 高精度型需要 PositionPick ， uv pick 等
        * @see egret3d.PickType
        * @version Egret 3.0
        * @platform Web,Native
        */
        pickType: PickType;
        /**
        * @language zh_CN
        * 实例化这个类
        * 如果直接实例化这个类，就会生成一个空的3D容器，可以往里添加3D显示对象，作为对象的父级，但是本身没有渲染属性
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 返回位移
        * 获取容器的坐标位置，基于父节点的位置坐标
        * @returns 位移
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置位移
        * 设置基于父节点的位置坐标，当父容器发生变化时，子节点也会变化
        * @param vec 位移
        * @version Egret 3.0
        * @platform Web,Native
        */
        position: Vector3D;
        /**
        * @language zh_CN
        * 返回旋转
        * 获取容器的旋转信息，基于父节点的旋转信息 欧拉角信息
        * @returns 旋转 欧拉角信息
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置旋转
        * 设置基于父节点的旋转信息 欧拉角信息，当父容器发生变化时，子节点也会变化
        * @param vec 旋转 欧拉角信息
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 返回旋转
        * 返回 基于四元素的旋转信息
        * @returns 旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置旋转
        * 设置旋转 基于四元素 旋转信息，当父容器发生变化时，子节点也会变化
        * @param value 旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        orientation: Quaternion;
        /**
        * @language zh_CN
        * 返回缩放
        * 返回基于父容器的缩放信息
        * @returns 缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置缩放
        * 设置基于父容器的缩放信息，当父容器发生变化时，子节点也会变化
        * @param vec 缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scale: Vector3D;
        /**
        * @language zh_CN
        * 返回x坐标
        * 返回基于父容器的位置坐标信息值
        * @returns x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x坐标
        * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value x坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 返回y坐标
        *
        * 返回基于父容器的位置坐标信息值
        * @returns y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y坐标
        *
        * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value y坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * 返回z坐标
        *
        * 返回基于父容器的位置坐标信息值
        * @returns z坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z坐标
        *
        * 设置基于父容器的位置信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value z坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        z: number;
        /**
        * @language zh_CN
        * 返回x旋转
        *
        * 返回基于父容器的位置旋转信息值
        * @returns x旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x轴旋转
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value x轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationX: number;
        /**
        * @language zh_CN
        * 返回y旋转
        *
        * 返回基于父容器的位置旋转信息值
        * @returns y旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y轴旋转
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value y轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationY: number;
        /**
        * @language zh_CN
        * 返回z旋转
        *
        * 返回基于父容器的位置旋转信息值
        * @returns z旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z轴旋转
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value z轴旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationZ: number;
        /**
        * @language zh_CN
        * 返回x缩放
        * 返回基于父容器的缩放信息值
        * @returns x缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置x轴缩放
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value x轴缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scaleX: number;
        /**
        * @language zh_CN
        * 返回y缩放
        * 返回基于父容器的缩放信息值
        * @returns y缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置y轴缩放
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value y轴缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scaleY: number;
        /**
        * @language zh_CN
        * 返回z缩放
        * 返回基于父容器的缩放信息值
        * @returns z缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置z轴缩放
        *
        * 设置基于父容器的旋转信息，当父容器发生变化时，子节点也会变化，值不变
        * @param value z轴缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        scaleZ: number;
        /**
        * @language zh_CN
        * 以axis轴为中心进行旋转
        * 设置基于父容器的旋转信息，数值通过axis的角度进行设置。当父容器发生变化时，子节点也会变化，值不变
        * @param axis 中心轴
        * @param angle 旋转的角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        setRotationFromAxisAngle(axis: Vector3D, angle: number): void;
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * 如果有父亲节点对象的话，要乘以父对象的变换.
        * @returns object 世界渲染矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        modelMatrix: Matrix4_4;
        /**
        * @language zh_CN
        * 返回 object 世界渲染矩阵
        * 如果有父亲节点对象的话，要乘以父对象的变换.
        * @private
        * @returns object 世界渲染矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        protected updateModleMatrix(): void;
        protected onUpdateTransform(): void;
        /**
        * @language zh_CN
        * 返回 object 世界位置
        * 返回世界坐标系的 全局位置坐标
        * @returns object 世界位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalPosition: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界旋转
        * 返回世界坐标系的 全局旋转信息
        * @returns object 世界旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalRotation: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界缩放
        * 返回世界坐标系的 全局缩放信息
        * @returns object 世界缩放
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalScale: Vector3D;
        /**
        * @language zh_CN
        * 返回 object 世界旋转
        * 返回世界坐标系的 全局旋转信息，数据类型是 四元素
        * @returns object 世界旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        globalOrientation: Quaternion;
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * 在容器中添加子对象，如果有显示接口的，将会放到场景显示树种进行渲染逻辑运算，及渲染
        * @param child 增加的子对象
        * @returns 子对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChild(child: Object3D): Object3D;
        /**
        * @language zh_CN
        * 增加一个子对象,并返回当前子对象
        * 在容器中添加子对象，如果有显示接口的，将会放到场景显示树种进行渲染逻辑运算，及渲染
        * @param child 增加的子对象
        * @param index 子对象的下标
        * @returns 子对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChildAt(child: Object3D, index: number): Object3D;
        /**
        * @language zh_CN
        * 返回下标为index的子对象
        * @private
        * @param index 子对象下标
        * @returns 如果有就返回子对象,否则就返回null.
        * @version Egret 3.0
        * @platform Web,Native
        */
        getChildAt(index: number): Object3D;
        /**
        * @language zh_CN
        * @private
        * 返回子对角child的下标
        * @param child 子对象
        * @returns 如果有就返回子对象的下标,否则就返回-1.
        * @version Egret 3.0
        * @platform Web,Native
        */
        getChildIndex(child: Object3D): number;
        /**
        * @language zh_CN
        * 移除child子对象 并返回
        * 移除显示列表中的指定对象，如果为空将会返回
        * @param child 子对象
        * @returns 如果成功就返回child,否则返回null
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeChild(child: Object3D): Object3D;
        /**
        * @language zh_CN
        * 移除下标为index的子对象 并返回
        * @private
        * @param index 子对象的下标
        * @returns 如果成功就返回child,否则返回null
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeChildAt(index: number): Object3D;
        /**
        * @language zh_CN
        * 设置子对象的下标
        * @private
        * @param child 子对象
        * @param index 子对象的下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setChildIndex(child: Object3D, index: number): void;
        /**
        * @language zh_CN
        * @private
        * 交换子对象的位置
        * @param child1 子对象1
        * @param child2 子对象2
        * @version Egret 3.0
        * @platform Web,Native
        */
        swapChildren(child1: Object3D, child2: Object3D): void;
        /**
        * @language zh_CN
        * @private
        * 交换子对象的位置
        * @param index1 子对象1下标
        * @param index2 子对象2下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        swapChildrenAt(index1: number, index2: number): void;
        /**
        * @language zh_CN
        * 当前对象对视位置
        * @private
        * @param pos 对象的位置
        * @param target 目标的位置
        * @param up 向上的方向
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAt(pos: Vector3D, target: Vector3D, up?: Vector3D): void;
        /**
        * @language zh_CN
        * 返回目标的位置
        *
        * @private
        * @returns 目标的位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtPosition: Vector3D;
        protected updateTransformChange(change: boolean): void;
        /**
        * @language zh_CN
        * 当前对象数据更新
        * @private
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D, time: number, delay: number): void;
        /**
        * @language zh_CN
        * 返回对象的屏幕坐标
        * 获取当前物体的屏幕坐标值，一般用来指定屏幕相关的ui绑定及其他功能
        * @param camera 对象渲染的摄像机
        * @returns 对象的屏幕坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        getScreenPosition(camera: Camera3D): Vector3D;
        /**
        * @language zh_CN
        * 释放所有数据
        * 是否内存中的相关数据连接引用，移除逻辑运算，从主渲染刘表中挪出
        * @version Egret 3.0
        * @platform Web,Native
        */
        dispose(): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Billboard
     * @classdesc
     * 公告板渲染对象 始终面朝摄像机的面板
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Billboard extends Object3D {
        /**
         * @language zh_CN
         * 指定材质，和公告板宽、高，构建一个公告板
         * @param material 渲染材质
         * @param width 公告板宽
         * @param height 公告板高
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(material: MaterialBase, width?: number, height?: number);
        /**
        * @language zh_CN
        * 数据更新，不前对象的旋转和摄像机的旋转一致
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D, time: number, delay: number): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.SphereSky
    * @classdesc
    * 天空球
    * 球形的天空盒子，需要sphere的360全景照片，可进行全景照片和video的球形显示
    * @version Egret 3.0
    * @platform Web,Native
    */
    class SphereSky {
        /**
        * @language zh_CN
        * 天空球贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        skyTexture: TextureBase;
        private viewMatIndex;
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(tex1: TextureBase);
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        * @version Egret 3.0
        * @platform Web,Native
        */
        setShader(vsName: string, fsName: string): void;
        private rebuild(context3D);
        private px;
        private py;
        private pz;
        private offest;
        /**
        * @language zh_CN
        * 提交数据给GPU渲染当前天空球
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        draw(context3D: Context3D, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.Sky
    * @classdesc
    * 场景中天空盒子，是6面体cube，以6张无缝结合的贴图构成.
    *
    * @see egret3d.Skytexture
    *
    * 示例:
    * @version Egret 3.0
    * @platform Web,Native
    * @includeExample core/node/Sky.ts
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
        * 构建一个天空盒子对象
        * @param skyTexture 天空盒子贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(skyTexture: SkyTexture);
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        * @version Egret 3.0
        * @platform Web,Native
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
        * 提交数据给GPU渲染当前天空盒子
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        draw(context3D: Context3D, camera: Camera3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.Entity
    * @classdesc
    * 3d空间中的实体对象 extends Object3D
    * @version Egret 3.0
    * @platform Web,Native
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
    /**
    * @private
    * 摄像机类型
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum CameraType {
        /**
        * 透视投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        perspective = 0,
        /**
        * 正交投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        orthogonal = 1,
        /**
        * VR投影
        * @version Egret 3.0
        * @platform Web,Native
        */
        VR = 2,
    }
    /**
    * VR类型
    * @private
    * @version Egret 3.0
    * @platform Web,Native
    */
    enum VRType {
        /**
        * 左眼
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        left = 0,
        /**
        * 右眼
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        right = 1,
    }
    /**
    * @class egret3d.Camera3D
    * @classdesc
    * 相机数据处理，生成3D摄相机。</p>
    * 渲染场景从摄像机视点到缓冲区。</p>
    * 相机分为透视摄像机、正交摄像机、VR摄像机。</p>
    *
    * @see egret3d.Matrix4_4
    *
    * @includeExample camera/Camera3D.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Camera3D extends Entity {
        /**
         * @language zh_CN
         * 相机投影矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        projectMatrix: Matrix4_4;
        /**
         * @language zh_CN
         * 眼睛矩阵(左，右眼) 实现VR时会用到
        * @version Egret 3.0
         * @platform Web,Native
         */
        eyeMatrix: EyesMatrix;
        /**
         * @language zh_CN
         * 当前相机使用的世界变换矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        cameraMatrix: Matrix4_4;
        /**
         * @language zh_CN
         * 相机的视椎体，用来检测是否在当前相机可视范围内
         * @version Egret 3.0
         * @platform Web,Native
         */
        frustum: Frustum;
        private _viewPort;
        private _scissorRect;
        private _aspectRatio;
        private _fovY;
        private _near;
        private _far;
        private temp;
        private _lookAtPosition;
        private _up;
        private _cameraType;
        private _cameraMatrixChange;
        private _viewMatrix;
        private _tempQuat;
        /**
         * @language zh_CN
         * constructor
         * @param cameraType 相机类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(cameraType?: CameraType);
        /**
         * @language zh_CN
         * 设置相机类型
         * @param cameraType 相机类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        cameraType: CameraType;
        /**
         * @language zh_CN
         * 打开VR相机
         * @param cameraType 相机类型
         * @param vrType VR类型
         * @version Egret 3.0
         * @platform Web,Native
         */
        tap(cameraType: CameraType, vrType?: VRType): void;
        /**
        * @language zh_CN
        * 返回相机横纵比
        *
        * @returns 横纵比
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机横纵比
        *
        * @param value 横纵比
        * @version Egret 3.0
        * @platform Web,Native
        */
        aspectRatio: number;
        /**
        * @language zh_CN
        * 返回相机fovY
        *
        * @returns fovY
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机fovY
        *
        * @param value fovY
        * @version Egret 3.0
        * @platform Web,Native
        */
        fieldOfView: number;
        /**
        * @language zh_CN
        * 返回相机近截面
        *
        * @returns 近截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机近截面
        *
        * @param value 近截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        near: number;
        /**
        * @language zh_CN
        * 返回相机远截面
        *
        * @returns 远截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机远截面
        *
        * @param value 远截面
        * @version Egret 3.0
        * @platform Web,Native
        */
        far: number;
        /**
        * @language zh_CN
        * 返回相机视图投影矩阵
        *
        * @returns 视图投影矩阵
        * @version Egret 3.0
        * @platform Web,Native
        */
        viewProjectionMatrix: Matrix4_4;
        /**
         * @private
         * @language zh_CN
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         * @version Egret 3.0
         * @platform Web,Native
         */
        updateScissorRect(x: number, y: number, width: number, height: number): void;
        /**
         * @language zh_CN
         * 更新视口
         * @param x number
         * @param y number
         * @param width number
         * @param height number
         * @version Egret 3.0
         * @platform Web,Native
         */
        updateViewport(x: number, y: number, width: number, height: number): void;
        /**
         * @language zh_CN
         * 当前对象对视位置
         * @param pos 对象的位置
         * @param target 目标的位置
         * @param up 向上的方向
         * @version Egret 3.0
         * @platform Web,Native
         */
        lookAt(pos: Vector3D, target: Vector3D, up?: Vector3D): void;
        protected onUpdateTransform(): void;
        /**
         * @language zh_CN
         *
         * 相机视图矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        viewMatrix: Matrix4_4;
        /**
         * @language zh_CN
         *
         * 相机目标点
         * @version Egret 3.0
         * @platform Web,Native
         */
        lookAtPosition: Vector3D;
        /**
         * @language zh_CN
         * 更新正交矩阵
         * @version Egret 3.0
         * @platform Web,Native
         */
        updataOrth(): void;
        /**
         * @language zh_CN
         * 检测对象是否在相机视椎体内
         * @param object 需要体测的对象
         * @returns 成功返回true
         * @version Egret 3.0
         * @platform Web,Native
         */
        isVisibleToCamera(object: Object3D): boolean;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * 灯光的基础类型。</p>
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向。</p>
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式。</p>
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好。</p>
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @version Egret 3.0
    * @platform Web,Native
    */
    class LightBase extends Object3D {
        /**
         *@language zh_CN
         *@private
         * 类型
         */
        protected _lightType: number;
        /**
         * @language zh_CN
         *@private
         * 环境颜色
         */
        protected _ambient: Vector3D;
        /**
         * @language zh_CN
         *@private
         * 漫反射
         */
        protected _diffuse: Vector3D;
        /**
        * @language zh_CN
        *@private
        * 背光颜色
        */
        protected _halfColor: Vector3D;
        /**
         * @language zh_CN
         *@private
         * 镜面反射
         */
        protected _specular: Vector3D;
        /**
         * @language zh_CN
         *@private
         */
        protected _halfVector: Vector3D;
        /**
         * @language zh_CN
         *@private
         * @param value 强度
         */
        protected _intensity: number;
        /**
        *@language zh_CN
        *@private
        * @param value 背光强度
        */
        protected _halfIntensity: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _spotExponent: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _spotCutoff: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _spotCosCutoff: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _constantAttenuation: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _linearAttenuation: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _quadraticAttenuation: number;
        /**
         * @language zh_CN
         *@private
         */
        _lightIndex: number;
        /**
         * @language zh_CN
         *@private
         */
        protected len: number;
        /**
         * @language zh_CN
         *@private
         */
        protected _change: boolean;
        constructor();
        /**
         * @language zh_CN
         * 得到灯光强度
         * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光
         */
        /**
         * @language zh_CN
         * 设置灯光强度
         * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光
         */
        intensity: number;
        /**
         * @language zh_CN
         * 得到灯光强度
         * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光
         */
        /**
        * @language zh_CN
        * 设置灯光强度
        * 影响灯光的强弱显示，值的范围0~没有上限，但是值过大会导致画面过度曝光
        */
        halfIntensity: number;
        /**
         * @language zh_CN
         * 获取 灯光环境颜色
         * 物体在未受到光的直接照射的地方 模拟间接环境光颜色，会影响背光面的颜色
         * return ambient  灯光环境颜色
         */
        /**
         * @language zh_CN
         * 设置灯光环境颜色
         * 物体在未受到光的直接照射的地方 模拟间接环境光颜色，会影响背光面的颜色
         */
        ambient: number;
        /**
         * @language zh_CN
         * 设置灯光漫反射颜色
         * 直接影响最终灯光的颜色色值 16进制的颜色 例如 red：0xffff0000
         * 也可以通过 diffusePower 来改变这个值的总体强弱
         * return diffuse
         */
        /**
         * @language zh_CN
         * 设置灯光漫反射颜色
         * 直接影响最终灯光的颜色色值 16进制的颜色 例如 red：0xffff0000
         * 也可以通过 diffusePower 来改变这个值的总体强弱
         */
        diffuse: number;
        /**
         * @language zh_CN
         * 在灯光方向与物体和相机成一个反光角度的时候，就会产生反光，高光，而不同的物体会有不同的颜色色值，尤其是金属
         * 16进制的颜色 例如 red：0xffff0000
         * 也可以通过 specularPower 来改变这个值的总体强弱
         * return  灯光镜面高光反射颜色
         */
        /**
         * @language zh_CN
         * 设置灯光镜面高光反射颜色
         * 在灯光方向与物体和相机成一个反光角度的时候，就会产生反光，高光，而不同的物体会有不同的颜色色值，尤其是金属
         * 16进制的颜色 例如 red：0xffff0000
         * 也可以通过 specularPower 来改变这个值的总体强弱
         */
        specular: number;
        private init();
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * 平行灯光</p>
    * 平行光是一种只有方向，强弱度，没有大小范围的灯光，一般情况下，directlight 可以产生阴影;</p>
    * 如果要产生阴影 需要设置 egret3d.ShadowRender.castShadowLight = directLight; 及其他相关模型的设置.</p>
    *
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @includeExample lights/DirectLight.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DirectLight extends LightBase {
        /**
        * @language zh_CN
        * @private
        * 光源数据结构长度
        */
        static stride: number;
        /**
        * @language zh_CN
        * @private
        * @param dir 光线的方向
        */
        constructor(dir: Vector3D);
        /**
        * @language zh_CN
        *
        * 背光颜色
        * 模拟间接光照而开发的背光，而不用去同时打两盏不同方向的组合灯光，可以优化显示效果
        * @param color 背光颜色色值
        */
        halfColor: number;
        /**
         * @language zh_CN
         *
         * 是否产生阴影
         * 模拟间接光照而开发的背光，而不用去同时打两盏不同方向的组合灯光，可以优化显示效果
         * @param color 背光颜色色值
         */
        /**
         * @language en_US
         * @param index
         * @param lightData
         */
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    *
    * 点光源
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好
    * 点光源是游戏中常常用到的动态光源，实时渲染中，灯光的数量会直接影响渲染性能
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @includeExample lights/PointLight.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PointLight extends LightBase {
        /**
         * @language zh_CN
         * @private
         * 点光源的数据长度
         */
        static stride: number;
        /**
         * @language zh_CN
         * @private
         * constructor
         * @param color {Number}
         */
        constructor(color: number);
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.DirectLight
    * @classdesc
    * spot 的灯光 也就是筒灯
    * 所有的灯光基本要素 灯光的颜色，强度，位置，方向
    * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式
    * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好
    * spot light 可以直接想象为点光源照了个罩子，有方向且有范围的灯光
    * @see egret3d.Object3D
    * @see egret3d.LightGroup
    * @see egret3d.LightBase
    * @see egret3d.PointLight
    * @see egret3d.SpotLight
    * @version Egret 3.0
    * @platform Web,Native
    */
    class SpotLight extends LightBase {
        /**
         * @language zh_CN
         * @priavete
         */
        static stride: number;
        /**
         * @language zh_CN
         * @priavete
         * constructor
         * @param color {Vector3D}
         */
        constructor(color: Vector3D);
        /**
         * @language zh_CN
         *
         * spot 的 裁切范围
         * spot light 照射范围的大小指数
         * @returns Cutoff -spot 的 裁切范围
         */
        /**
         * @language zh_CN
         *
         * spot 的 裁切范围
         * spot light 照射范围的大小指数
         *
         * @param value Cutoff
         */
        spotCosCutoff: number;
        /**
         * @language zh_CN
         *
         * spot 的 灯光强弱
         * spot light 灯光圆形范围内随半径大小改变发生的灯光强弱指数
         * @returns 灯光强弱指数
         */
        /**
         * @language zh_CN
         * spot 的 灯光强弱
         * spot light 灯光圆形范围内随半径大小改变发生的灯光强弱指数
         *
         * @param value 灯光强弱指数
         */
        spotExponent: number;
        /**
         * @language zh_CN
         * spot 的 灯光衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光衰减常数指数
         * @returns 持续衰减
         */
        /**
         * @language zh_CN
         *
         * spot 的 灯光衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光衰减常数指数
         * @param value 持续衰减
         */
        constantAttenuation: number;
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性衰减
         * @returns 线性衰减
         */
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性衰减
         * @param value 线性衰减
         */
        linearAttenuation: number;
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性2次衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性2次衰减
         * @returns 返回2次衰减
         */
        /**
         * @language zh_CN
         *
         * spot 的 灯光线性2次衰减
         * spot light 灯光圆形范围内随半径大小改变发生的灯光线性2次衰减
         * @param value 2次衰减
         */
        quadraticAttenuation: number;
        /**
         * @language zh_CN
         * @private
         * 更新灯光数据
         * @param index 灯光ID
         * @param lightData 灯光数据
         */
        updateLightData(index: number, lightData: Float32Array): void;
    }
}
declare module egret3d {
    /**
   * @class egret3d.DirectLight
   * @classdesc
   *
   * 点光源。</p>
   * 所有的灯光基本要素 灯光的颜色，强度，位置，方向。</p>
   * 颜色的色值均是16进制 red:0xffff0000 argb的定义模式。</p>
   * 每个材质球所能最大使用的灯光建议别太多，能省则省，尤其是移动端，能用灯光缓存图 lightmap 最好。</p>
   * 点光源是游戏中常常用到的动态光源，实时渲染中，灯光的数量会直接影响渲染性能。</p>
   * @see egret3d.Object3D
   * @see egret3d.LightGroup
   * @see egret3d.LightBase
   * @see egret3d.PointLight
   * @see egret3d.SpotLight
   * @version Egret 3.0
   * @platform Web,Native
   */
    class LightGroup {
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 灯光个数
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
    * @private
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
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.SphereSky
    * @classdesc
    * default render
    * 把所有需要渲染的对象，依次进行渲染
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DefaultRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 把所有需要渲染的对象，依次进行渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.PositionRender
    * @classdesc
    * position render
    * @version Egret 3.0
    * @platform Web,Native
    */
    class PositionRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @private
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.NormalRender
    * @classdesc
    * 法线渲染器,渲染有法线的实现对象
    * @version Egret 3.0
    * @platform Web,Native
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.DepthRender
    * @classdesc
    * 深度渲染器 渲染场景中的实体对象
    * @version Egret 3.0
    * @platform Web,Native
    */
    class DepthRender extends RenderBase {
        /**
        * @language zh_CN
        * constructor
        */
        constructor();
        /**
        * @language zh_CN
        * 提交数据给GPU渲染
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @param context3D 设备上下文
        * @param collect 渲染对象收集器
        * @param camera 渲染时的相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @private
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
        draw(time: number, delay: number, context3D: Context3D, collect: CollectBase, camera: Camera3D, viewPort: Rectangle): void;
        private cameraTarget;
        private cameraPos;
        private distance;
        offsetPos(offset: Vector3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    */
    enum RenderType {
        defaultRender = 0,
        positionRender = 1,
        normalRender = 2,
        specularRender = 3,
        shadowRender = 4,
    }
    /**
    * @private
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
    * @private
    * @class egret3d.CollectBase
    * @classdesc
    * @version Egret 3.0
    * @platform Web,Native
    * Object3D 渲染对象收集器基类
    */
    class CollectBase {
        /**
        * @language zh_CN
        * 可渲染对象列表
        */
        renderList: Array<Object3D>;
        mousePickList: Array<Object3D>;
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
    * 每个Layer分两个渲染列表，一个是有alpha的对象列表，另一个是没有alpha的对象列表
    * 不同的Layer层级可以使用不同的渲染方式，来达到各组不同的渲染效果.
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Layer {
        /**
        * @language zh_CN
        * 没有alpha的对象列表
        */
        objects: Array<Object3D>;
        /**
        * @language zh_CN
        * 有alpha的对象列表
        */
        alphaObjects: Array<Object3D>;
    }
    /**
    * @class egret3d.Tag
    * @classdesc
    * Object3D 渲染tag
    * 图形属性标签页的属性，由layer列表组成，共用深度信息
    * 渲染每个tag他们的深度信息是不清理的
    *
    * @see egret3d.Layer
    * @version Egret 3.0
    * @platform Web,Native
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
    * Object3D 渲染对象收集器,把渲染对象进行可视筛选，
    * 并且划分渲染层级，依次排序到加入列表.
    *
    * @see egret3d.Scene3D
    * @see egret3d.View3D
    * @version Egret 3.0
    * @platform Web,Native
    */
    class EntityCollect extends CollectBase {
        protected _tags: Array<Tag>;
        protected _layers: Array<string>;
        protected _tagsName: Array<string>;
        /**
        * @language zh_CN
        * constructor
        * @param root 渲染根节点
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(root: Object3D);
        /**
        * @language zh_CN
        * 返回tags 列表
        *
        * @returns tags 列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        tags: Array<Tag>;
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * @param name tag名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setTags(name: string, index: number): void;
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * @param layer layer名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setTagsItem(layer: string, index: number): void;
        /**
        * @language zh_CN
        * 得到layer的值
        * @param name tag名
        * @param layer layer名
        * @returns 返回layer的值
        * @version Egret 3.0
        * @platform Web,Native
        */
        getTagLayer(name?: string, layer?: string): number;
        /**
        * @language zh_CN
        * 得到tag
        * @param name tag名
        * @returns tag
        * @version Egret 3.0
        * @platform Web,Native
        */
        getTag(name?: string): Tag;
        /**
        * @language zh_CN
        * 增加tag
        * @param name tag名
        * @param clearDapth 是否清理深度
        * @version Egret 3.0
        * @platform Web,Native
        */
        addTag(name: string, clearDapth?: boolean): void;
        /**
        * @language zh_CN
        * 插入tag
        * @param name tag名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        insertTag(name: string, index: number): void;
        /**
        * @language zh_CN
        * 移除tag
        * @param name tag名
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeTag(name: string): void;
        /**
        * @language zh_CN
        * 增加layer
        * @param name layer名
        * @version Egret 3.0
        * @platform Web,Native
        */
        addLayer(name: string): void;
        /**
        * @language zh_CN
        * 插入layer
        * @param name layer名
        * @param index layer下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        insetLayer(name: string, index: number): void;
        /**
        * @language zh_CN
        * 移除layer
        * @param name layer名
        * @version Egret 3.0
        * @platform Web,Native
        */
        removeLayer(name: string): void;
        private applyRender(child, camera);
        private addRenderList(object3d, camera);
        /**
        * @language zh_CN
        * 数据更新 处理需要渲染的对象
        * @param camera 当前摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D): void;
        protected findLayer(object3d: Object3D): Layer;
        protected findTag(object3d: Object3D): Tag;
        protected clearLayerList(): void;
        protected sort(a: Object3D, b: Object3D, camera: Camera3D): number;
    }
}
declare module egret3d {
    /**
    * @private
    */
    class Scene3D extends Object3D {
        collect: EntityCollect;
        constructor();
    }
}
declare module egret3d {
    /**
    * @private
    */
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
    /**
    * @private
    */
    enum FrameBufferFormat {
        FLOAT_RGB = 0,
        FLOAT_RGBA = 1,
        UNSIGNED_BYTE_RGB = 2,
        UNSIGNED_BYTE_RGBA = 3,
    }
    /**
    * @private
    * @class egret3d.RttManager
    * @classdesc
    * 离屏渲染管理, 把数据渲染在一张纹理上，
    * @version Egret 3.0
    * @platform Web,Native
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
        static drawToTexture(time: number, delay: number, renderTragetTexture: ITexture2D, context3D: Context3D, render: RenderBase, collect: CollectBase, camera: Camera3D, rec: Rectangle): void;
        /**
        * @language zh_CN
        * 开始渲染
        * @param renderTragetTexture
        * @param context3D
        * @param rec
        */
        static drawToTextureStart(renderTragetTexture: ITexture2D, context3D: Context3D, rec: Rectangle): void;
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
        static drawToTextureEnd(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.GeometryData
     * @classdesc
     * GeometryData类 表示几何形状数据
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/GeometryData.ts
     */
    class GeometryData {
        /**
        * @language zh_CN
        * 顶点属性长度
        */
        vertexAttLength: number;
        /**
        * @language zh_CN
        * 数据长度
        */
        length: number;
        /**
        * @language zh_CN
        * 顶点长度
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
        * 顶点索引
        */
        vertexIndex: number;
        /**
        * @language zh_CN
        * 索引数据数组
        */
        indices: Array<number>;
        /**
        * @language zh_CN
        * 顶点数据数组(x、y、z)三个number为一个顶点数据
        */
        vertices: Array<number>;
        /**
        * @language zh_CN
        * 法线数据数组(x、y、z)三个number为一个法线数据
        */
        normals: Array<number>;
        /**
        * @language zh_CN
        * 切线数据数组(x、y、z)三个number为一个切线数据
        */
        tangts: Array<number>;
        /**
        * @language zh_CN
        * 顶点颜色数据数组
        */
        verticesColor: Array<number>;
        /**
        * @language zh_CN
        * 第一套UV数据数组
        */
        uvs: Array<number>;
        /**
        * @language zh_CN
        * 第二套UV数据数组
        */
        uv2s: Array<number>;
        /**
        * @language zh_CN
        * 蒙皮数据数组
        */
        skinMesh: Array<number>;
        /**
        * @language zh_CN
        * 面法线数据数组
        */
        faceNormals: Array<number>;
        /**
        * @language zh_CN
        * 面权重数据数组
        */
        faceWeights: Array<number>;
        /**
        * @language zh_CN
        * 顶点数据数组
        */
        vertexDatas: Array<number>;
        /**
        * @language zh_CN
        * 构建顶点数据数组
        * @param source 未组合顶点数据的GeometryData对象
        * @returns 经过组合并生成顶点数据数组的新GeometryData对象
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
    /**
     * @private
     * @language zh_CN
     * @class egret3d.GeometryBase
     * @classdesc
     * 网格类型类型
     * @version Egret 3.0
     * @platform Web,Native
     */
    enum GeometryType {
        /**
        * @language zh_CN
        * 静态模型类型
        */
        Static = 0,
        /**
        * @language zh_CN
        * 骨骼动画模型类型
        */
        Skin = 1,
        /**
        * @language zh_CN
        * 粒子类型
        */
        Particle = 2,
        /**
        * @language zh_CN
        * 公告板类型
        */
        Billbord = 3,
        /**
        * @language zh_CN
        * 顶点动画类型
        */
        VertexAnim = 4,
        /**
        * @language zh_CN
        * 草地类型
        */
        Grass = 5,
        /**
        * @language zh_CN
        * 带形状类型
        */
        Ribbon = 6,
        /**
        * @language zh_CN
        * 线框类型
        */
        wrieFrame = 7,
        /**
        * @language zh_CN
        * 影引类型
        */
        Shadow = 8,
    }
    /**
     * @private
     * @language zh_CN
     * @class egret3d.GeometryBase
     * @classdesc
     * GeometryBase类 表示几何形状基类
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/GeometryBase.ts
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
        * 顶点偏移数
        */
        numberOfVertices: number;
        /**
        * @language zh_CN
        * 顶点字节数
        */
        vertexSizeInBytes: number;
        /**
        * @language zh_CN
        * geometry数
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
        * Item数
        */
        numItems: number;
        /**
        * @language zh_CN
        * shader buffer
        */
        sharedVertexBuffer: IVertexBuffer3D;
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
        * 构造函数
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
        dispose(): void;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.SubGeometry
     * @classdesc
     * SubGeometry类
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/SubGeometry.ts
     */
    class SubGeometry extends GeometryBase {
        /**
        * @language zh_CN
        * 构造函数
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
     * CubeGeometry类 表示立方体</p>
     *
     * 示例：</p>
     * 用 CubeGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）; </p>
     <pre>
      var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.CubeGeometry(), new egret3d.TextureMaterial() );
     </pre>
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/CubeGeometry.ts
     */
    class CubeGeometry extends SubGeometry {
        /**
        * @language zh_CN
        * Cube宽度
        *
        */
        width: number;
        /**
        * @language zh_CN
        * Cube高度
        *
        */
        height: number;
        /**
        * @language zh_CN
        * Cube深度
        *
        */
        depth: number;
        /**
        * @language zh_CN
        * 构造函数
        * @param width 宽度
        * @param height 高度
        * @param depth 深度
        */
        constructor(width?: number, height?: number, depth?: number);
        /**
        * @language zh_CN
        * 生成网格
        */
        buildGeomtry(): void;
        /**
       * @private
       * @language zh_CN
       * 位移且改变顶点数据
       */
        transfromVertex(pos: Vector3D): void;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SphereGeometry
     * @classdesc
     * SphereGeometry类 表示球体
     *
     * 示例：
     * //用 SphereGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）;
     * var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.SphereGeometry(), new egret3d.TextureMaterial() );
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/SphereGeometry.ts
     */
    class SphereGeometry extends SubGeometry {
        private _segmentsW;
        private _segmentsH;
        private _radius;
        /**
        * @language zh_CN
        * 构造函数
        * @param r 半径
        * @param segmentsW 宽度分段数
        * @param segmentsH 高度分段数
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
     * PlaneGeometry类 表示面板几何体
     *
     * 示例：
     * //用 PlaneGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理）;
     * var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.PlaneGeometry(), new egret3d.TextureMaterial() );
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/PlaneGeometry.ts
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
        * 构造函数
        * @param width 宽度
        * @param height 高度
        * @param segmentsW 宽度分段数
        * @param segmentsH 高度分段数
        * @param uScale U缩放
        * @param vScale V缩放
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
     * CylinderGeometry类 表示圆柱体</p>
     *
     * 示例：</p>
     * 用 CylinderGeometry 对象创建一个mesh，并给予默认纹理材质TextureMaterial（默认为棋盘格纹理)</p>
     <pre>
     var box: egret3d.Mesh = new egret3d.Mesh( new egret3d.CylinderGeometry(), new egret3d.TextureMaterial() );
     </pre>
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/CylinderGeometry.ts
     */
    class CylinderGeometry extends SubGeometry {
        /**
        * @language zh_CN
        * 构造函数
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
     * FaceData类 表示三角面索引数据
     *
     * FaceData用于储存三角面所需的各类索引数据，如顶点索引、UV纹理索引、法线索引、定点颜色索引等。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/FaceData.ts
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
        * 索引数据数组
        */
        indexIds: Array<any>;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.SkinGeometry
     * @classdesc
     * SkinGeometry类 表示带有蒙皮信息的几何图形。
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/SkinGeometry.ts
     */
    class SkinGeometry extends GeometryBase {
        /**
        * @language zh_CN
        * 初始骨架（TPose骨架）
        */
        initialSkeleton: Skeleton;
        /**
        * @language zh_CN
        * 构造函数
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
     * ElevationGeometry类 表示高度图几何图形</p>
     *
     * 高度图几何图形常用于做场景地形，其由一张色彩图片记录高度信息，在程序中解析该色彩图生成相应大小高度的模型网格，以达到逼真动态地形。</p>
     *
     * @version Egret 3.0
     * @platform Web,Native
     * @includeExample geometry/ElevationGeometry.ts
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
        * 构造函数
        * @param heightmap 附带高度信息的高度图纹理
        * @param width 宽度
        * @param height 高度
        * @param depth 深度
        * @param segmentsW 宽度片段数
        * @param segmentsH 高度片段数
        * @param maxElevation 最大高度
        * @param minElevation 最小高度
        */
        constructor(heightmap: ImageTexture, width?: number, height?: number, depth?: number, segmentsW?: number, segmentsH?: number, maxElevation?: number, minElevation?: number);
        /**
        * @language zh_CN
        * 获取像素
        * @param x 纹理X位置
        * @param z 纹理Y位置
        */
        getPixel(x: number, z: number): number;
        /**
        * @language zh_CN
        * 获取高度值
        * @param x X位置
        * @param z Y位置
        */
        getHeightBypos(x: number, z: number): number;
        private buildElevationGeometry();
        private updateFaceNormals();
    }
}
declare module egret3d {
    /**
    * @private
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
    * 3d模型网格 生成渲染模型
    * 创建一个Mesh网格数据和材质数据是必需的，如果是动态模型就加上动画数据
    * 继承Object3D对象，场景中实体渲染对象
    *
    * @see egret3d.Object3D
    * @see egret3d.GeometryBase
    * @see egret3d.MaterialBase
    * @see egret3d.IAnimation
    *
    * 示例:
    * @includeExample core/node/Mesh.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Mesh extends Object3D {
        /**
        * @language zh_CN
        * 构建一个Mesh对象
        * @param geometry 模型数据
        * @param material 模型材质
        * @param animation 模型动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(geometry: GeometryBase, material: MaterialBase, animation?: IAnimation);
        /**
        * @language zh_CN
        * 克隆一个模型
        * @returns 克隆后的模型
        * @version Egret 3.0
        * @platform Web,Native
        */
        clone(): Mesh;
        /**
        * @language zh_CN
        * 当前对象数据更新，只有在视锥内的对象才会执行此更新
        * @param camera 当前渲染的摄相机
        * @param time 当前时间
        * @param delay 每帧时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(camera: Camera3D, time: number, delay: number): void;
    }
}
declare module egret3d {
    /**
     * @private
     */
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
     * @private
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
         */
        protected onLoad(): void;
    }
}
declare module egret3d {
    /**
     * @private
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
     * @private
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
     * @private
     * @language zh_CN
     * @class egret3d.SceneLoader
     * @classdesc
     * SceneLoader类 用于Scene文件加载
     * @version Egret 3.0
     * @platform Web,Native
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
     * 用于加载和解析各类3d资源.
     * DDS, TGA, jpg, png等格式的贴图文件.
     * ESM, EAM, ECA等egret3d独有的模型文件,动作文件,相机动画文件
     * @includeExample loader/URLLoader.ts
     *
     * @version Egret 3.0
     *@platform Web,Native
     */
    class URLLoader {
        /**
         * @language en_US
         */
        /**
         * @private
         * @language zh_CN
         * 加载的地址
         * @version Egret 3.0
         *@platform Web,Native
         */
        private _url;
        /**
         * @language en_US
         */
        /**
         * @private
         * @language zh_CN
         * 加载的数据.
         * @version Egret 3.0
         *@platform Web,Native
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
         * @version Egret 3.0
         * @platform Web,Native
         */
        private _dataformat;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 加载完成的回调函数.
         * 回调函数参数为该UrlLoader实例
         * @version Egret 3.0
         *@platform Web,Native
         */
        onLoadComplete: Function;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 加载失败的回调函数
         * @version Egret 3.0
         * @platform Web,Native
         */
        onLoadError: Function;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 加载过程调用的函数
         * @version Egret 3.0
         * @platform Web,Native
         */
        onLoadProgress: Function;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以二进制方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_BINARY: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以文本的方式接收加载的数据
         * 默认方式
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_TEXT: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以音频的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_SOUND: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以图像的方式接收加载的数据
         * 支持jpg.png.等格式
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_BITMAP: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以DDS的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_DDS: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以TGA的方式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_TGA: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以ESM格式接收加载的数据
         * Egret3D独有的格式 模型+蒙皮
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_ESM: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以EAM格式接收加载的数据
         * Egret3D独有的格式 动作文件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_EAM: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 以ECA格式接收加载的数据
         * Egret3D独有的格式 相机动画文件
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_ECA: string;
        /**
         * @language en_US

         */
        /**
         * @private
         * @language zh_CN
         * 以pvr格式接收加载的数据
         * @version Egret 3.0
         * @platform Web,Native
         */
        static DATAFORMAT_PVR: string;
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 构造函数
         * @param url 加载数据的地址.如果参数不为空的话.将直接开始加载
         * @param dataformat 以什么方式进行加载.如果为空的话.将通过目标文件的后缀名判断,
         * 如果为空且文件后缀不为内置支持的集中文件类型的话.将以文本格式进行加载解析
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor(url?: string, dataformat?: string);
        /**
         * @language en_US
         */
        /**
         * @language zh_CN
         * 加载目标地址的数据
         * @param url 数据地址
         * @version Egret 3.0
         * @platform Web,Native
         */
        load(url: string): void;
        /**
         * @language zh_CN
         * 控制以哪种方式接收加载的数据.
         * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
         * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
         * @returns string
         * @version Egret 3.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 控制以哪种方式接收加载的数据.
         * 如果未赋值则通过加载文件的后缀名来判断加载的类型以解析.
         * 如果未赋值且加载的类型并非为内置支持的文件类型.将以文本格式进行加载
         * @param value
         * @version Egret 3.0
         * @platform Web,Native
         */
        dataformat: string;
        /**
         * @language zh_CN
         * 加载的数据.
         * @returns any
         * @version Egret 3.0
         * @platform Web,Native
         */
        data: any;
        /**
         * @language zh_CN
         * 加载的地址
         * @readonly
         * @returns string
         * @version Egret 3.0
         * @platform Web,Native
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
     * @private
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
    /**
     * @private
     * dds / st3c compressed texture formats
     */
    enum DDSFormat {
        RGB_S3TC_DXT1_FORMAT = 2001,
        RGBA_S3TC_DXT1_FORMAT = 2002,
        RGBA_S3TC_DXT3_FORMAT = 2003,
        RGBA_S3TC_DXT5_FORMAT = 2003,
    }
    /**
     * @private
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
     * @private
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
    /**
     * @private
     * data format describe;
     */
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
     * @private
     * @language zh_CN
     * @class egret3d.ESMParser
     * @classdesc
     * 用 ESMParser 类 解析.esm 文件
     */
    class ESMParser {
        /**
          * @language zh_CN
          * 从二进制流中解析出模型Geometry信息
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
     * @private
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
     * @private
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
     * @private
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
    /**
    * @private
    */
    enum PVRFormat {
        RGB_PVRTC_4BPPV1_Format = 2100,
        RGB_PVRTC_2BPPV1_Format = 2101,
        RGBA_PVRTC_4BPPV1_Format = 2102,
        RGBA_PVRTC_2BPPV1_Format = 2103,
    }
    /**
     * @private
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
     * AssetsManager 资源管理类.
     * 用于加载各类3d美术资源.
     * 模型.场景.贴图,等.
     * @version Egret 3.0
     * @platform Web,Native
     */
    class AssetsManager extends EventDispatcher {
        /**
         * @language zh_CN
         * @private
         */
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
         * 获取单例实例
         * @returns AssetsManager
         * @version Egret 3.0
         * @platform Web,Native
         */
        static getInstance(): AssetsManager;
        /**
         * @private
         * @language zh_CN
         * constructor
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language zh_CN
         * 获取已加载完成的总数
         * @param rootURL
         * @version Egret 3.0
         * @platform Web,Native
         */
        loadCompleteNumber: number;
        /**
         * @language zh_CN
         * 获取等待加载的总数
         * @param rootURL
         * @version Egret 3.0
         * @platform Web,Native
         */
        loadTotalNumber: number;
        /**
         * @language zh_CN
         * 设置根路径
         * @param rootURL
         * @version Egret 3.0
         * @platform Web,Native
         */
        setRootURL(rootURL: string): void;
        /**
         * @language zh_CN
         * 查找资源
         * @param url 路径地址
         * @returns 返回对应url的资源
         * @version Egret 3.0
         * @platform Web,Native
         */
        findAssets(url: string): any;
        /**
         * @language zh_CN
         * 查找已下载的模型.
         * @param url 路径地址
         * @returns mesh
         * @version Egret 3.0
         * @platform Web,Native
         */
        findModel(url: string): Mesh;
        /**
         * @language zh_CN
         * 查找已下载的动作模型文件
         * @param url 路径地址
         * @returns Mesh
         * @version Egret 3.0
         * @platform Web,Native
         */
        findAnimModel(url: string): Mesh;
        /**
         * @language zh_CN
         * 查找已经下载完成的场景资源文件
         * @param url 路径地址
         * @returns Array<Mesh>
         * @version Egret 3.0
         * @platform Web,Native
         */
        findScene(url: string): Array<Mesh>;
        /**
         * @language zh_CN
         * 查找贴图
         * @param url 路径地址
         * @returns TexureBase
         * @version Egret 3.0
         * @platform Web,Native
         */
        findTexture(url: string): TextureBase;
        /**
         * @language zh_CN
         * 启动加载, 加载目标为通过add系列方法添加的资源路径
         * @version Egret 3.0
         * @platform Web,Native
         */
        startLoad(): void;
        /**
         * @language zh_CN
         * 加载模型, 将地址传入加载队列, 调用startLoad之后才会进行加载
         * @param url 模型路径
         * @param ESMFile 模型文件名
         * @version Egret 3.0
         * @platform Web,Native
         */
        addLoadModel(url: string, ESMFile: string): void;
        /**
         * @language zh_CN
         * 加载模型动作文件, 将加入加载队列, 在调用startLoad()之后进行加载  加载完成后, 会自动将加载的动作文件和模型一起绑定
         * @param url 模型路径
         * @param ESMFile 模型文件名
         * @param EAMFiles 模型动作名列表
         * @version Egret 3.0
         * @platform Web,Native
         */
        addLoadAnimModel(url: string, ESMFile: string, EAMFiles: string[]): void;
        /**
         * @language zh_CN
         * 加载场景, 将加入加载队列, 在调用startLoad()之后进行加载
         * @param url 场景文件地址
         * @version Egret 3.0
         * @platform Web,Native
         */
        addLoadScene(url: string): void;
        /**
         * @language zh_CN
         * 加载贴图文件, 将加入加载队列, 在调用startLoad()之后进行加载
         * @param url 要加载的贴图文件地址
         * @version Egret 3.0
         * @platform Web,Native
         */
        addLoadTexture(url: string): void;
        /**
         * @private
         * @param e
         * @version Egret 3.0
         * @platform Web,Native
         */
        private checkComplete(e);
    }
}
declare module egret3d {
    /**
    * @class egret3d.Picker
    * @classdesc
    * 射线对场景中的实体对像进行检测。</p>
    * 以摄像机向场景中产生的一条射线对所有场景中的对象进行拾取。</p>
    * 根据性能的需要分为几种拣选类型。</p>
    * 1.包围盒拣选。</p>
    * 2.模型拣选返回模型拣选到的位置。</p>
    * 3.模型拣选返回模型拣选到的UV坐标。</p>
    *
    * @see egret3d.Ray
    * @see egret3d.PickType
    *
    * 示例:鼠标拣选模型,拣选到的进行绕Y轴旋转
    * @includeExample core/traverse/Picker.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class Picker {
        protected static ray: Ray;
        /**
        * @language zh_CN
        * 返回鼠标拾取对象得到的所有对象,调用之前到设置被拣选对象的pickType.
        * @param camera 当前相机
        * @param objects 检测的对象列表
        * @returns 拾取的object列表
        * @version Egret 3.0
        * @platform Web,Native
        */
        static pickObject3DList(camera: Camera3D, objects: Array<Object3D>): Array<Object3D>;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.ControllerBase
    * @classdesc
    * 控制器 基类, 抽象控制器的一些数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    class ControllerBase {
        protected _autoUpdate: boolean;
        protected _target: Object3D;
        protected _lookAtObject: Object3D;
        protected _origin: Vector3D;
        /**
        * @language zh_CN
        * 构造函数
        * @param targetObject 控制的目标
        */
        constructor(targetObject?: Object3D, lookAtObject?: Object3D);
        /**
        * @language zh_CN
        *
        * @returns 返回当前的目标
        */
        /**
        * @language zh_CN
        *
        * @param val 当前的目标
        */
        target: Object3D;
        /**
        * @language zh_CN
        *
        * @returns 是否自动更新
        */
        /**
        * @language zh_CN
        *
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
    * look at 摄像机控制器 。</p>
    * 指定摄像机看向的目标对象。</p>
    * 1.按下鼠标左键并移动鼠标可以使摄像机绕着目标进行旋转。</p>
    * 2.按下键盘的(w s a d) 可以摄像机(上 下 左 右)移动。</p>
    * 3.滑动鼠标滚轮可以控制摄像机的视距。</p>
    *
    * @includeExample controller/ctl/LookAtController.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class LookAtController extends ControllerBase {
        protected _lookAtObject: Object3D;
        protected _origin: Vector3D;
        protected _lookAtPosition: Vector3D;
        private _eyesPos;
        private _up;
        private _eyesLength;
        private _rotaEyesLine;
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
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtOffset: Vector3D;
        /**
        * @language zh_CN
        * 是否第一人称相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        firstCamera: boolean;
        /**
        * @language zh_CN
        * 控制的目标相机，目标对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(targetObject?: Object3D, lookAtObject?: Object3D);
        private mouseWheel();
        private mouseMove();
        /**
        * @language zh_CN
        * 返回目标的位置
        *
        * @returns 目标的位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标坐标
        *
        * @param val 摄像机看向的目标点
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtPosition: Vector3D;
        /**
        * @language zh_CN
        *
        * 返回目标对象
        * @returns 目标对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        *
        * 设置目标对象
        * @param val 目标
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtObject: Object3D;
        /**
        * @language zh_CN
        * 设置目标和相机的距离
        * @param length 距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        setEyesLength(length: number): void;
        /**
        * @language zh_CN
        * 设置相机x轴旋转
        * @param x 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationX: number;
        /**
        * @language zh_CN
        * 设置相机y轴旋转
        * @param y 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationY: number;
        /**
        * @language zh_CN
        * 设置相机z轴旋转
        * @param z 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotationZ: number;
        /**
        * @language zh_CN
        * 控制器数据更新
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(): void;
        private keyDown(key);
        private keyUp(key);
    }
}
declare module egret3d {
    /**
    * @class egret3d.HoverController
    * @classdesc
    * 摄像机控制器 ,实现摄像机平滑移动
    * 指定摄像机看向的目标对象
    * 1.按下鼠标左键并移动鼠标(或手机手指滑动)可以使摄像机绕着目标进行旋转.
    * 2.滑动鼠标滚轮(或双指滑动)可以控制摄像机的视距.
    *
    * 示例:
    * @includeExample controller/ctl/HoverController.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class HoverController extends ControllerBase {
        private _currentPanAngle;
        private _currentTiltAngle;
        private _panAngle;
        private _tiltAngle;
        private _distance;
        private _minPanAngle;
        private _maxPanAngle;
        private _minTiltAngle;
        private _maxTiltAngle;
        private _maxDistance;
        private _minDistance;
        private _steps;
        private _yFactor;
        private _wrapPanAngle;
        private _lookAtPosition;
        private _mouseDown;
        private _mouseRightDown;
        private _keyArray;
        constructor(targetObject?: Object3D, lookAtObject?: Object3D, panAngle?: number, tiltAngle?: number, distance?: number, minTiltAngle?: number, maxTiltAngle?: number, minPanAngle?: number, maxPanAngle?: number, steps?: number, yFactor?: number, wrapPanAngle?: boolean);
        private mouseWheel();
        private keyDown(key);
        private keyUp(key);
        private mouseMove();
        /**
        * @language zh_CN
        * 返回目标的位置
        *
        * @returns 目标的位置
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标坐标
        *
        * @param val 摄像机看向的目标点
        * @version Egret 3.0
        * @platform Web,Native
        */
        lookAtPosition: Vector3D;
        /**
        * @private
        */
        /**
        * @private
        */
        steps: number;
        /**
        * @language zh_CN
        * 得到相机y轴旋转角度
        * @returns 相机y轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机y轴旋转
        * @param val 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        panAngle: number;
        /**
        * @language zh_CN
        * 得到相机x轴旋转角度
        * @returns 相机x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机x轴旋转
        * @param val 旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        tiltAngle: number;
        /**
        * @language zh_CN
        * 得到目标和相机的距离
        * @returns 目标和相机的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置目标和相机的距离
        * @param val 距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        distance: number;
        /**
        * @language zh_CN
        * 得到相机最小y轴旋转角度
        * @returns 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最小y轴旋转角度
        * @param val 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        minPanAngle: number;
        /**
        * @language zh_CN
        * 得到相机最大y轴旋转角度
        * @returns 相机最大y轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最大y轴旋转角度
        * @param val 相机最大y轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxPanAngle: number;
        /**
        * @language zh_CN
        * 得到相机最小x轴旋转角度
        * @returns 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最小x轴旋转角度
        * @param val 相机最小x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        minTiltAngle: number;
        /**
        * @language zh_CN
        * 得到相机最大x轴旋转角度
        * @returns 相机最大x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机最大x轴旋转角度
        * @param val 相机最大x轴旋转角度
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxTiltAngle: number;
        /**
        * @language zh_CN
        * 得到相机和目标最大的距离
        * @returns 相机和目标最大的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机和目标最大的距离
        * @param val 相机和目标最大的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxDistance: number;
        /**
        * @language zh_CN
        * 得到相机和目标最小的距离
        * @returns 相机和目标最小的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置相机和目标最小的距离
        * @param val 相机和目标最小的距离
        * @version Egret 3.0
        * @platform Web,Native
        */
        minDistance: number;
        /**
        * @private
        */
        /**
        * @private
        */
        yFactor: number;
        /**
        * @private
        */
        /**
        * @private
        */
        wrapPanAngle: boolean;
        /**
        * @language zh_CN
        * 控制器数据更新
        * @param interpolate
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(interpolate?: boolean): void;
    }
}
declare module egret3d {
    /**
    * @class egret3d.CameraAnimationController
    * @classdesc
    * 摄像机动画控制器。
    * 每个摄像机动画绑定一个摄像机，控制摄像机的行为
    * 可以更换绑定的摄像机
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CameraAnimationController {
        /**
        * @language zh_CN
        * 相机动画每帧数据列表
        * @version Egret 3.0
        * @platform Web,Native
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
        * 构造函数
        * @param camera 需要一个摄像机对象来创建摄像机动画
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(camera?: Camera3D);
        /**
        * @language zh_CN
        * 绑定动画控制的相机
        * @param camera
        * @version Egret 3.0
        * @platform Web,Native
        */
        bindCamera(camera: Camera3D): void;
        /**
        * @language zh_CN
        * 播放相机动画 是否循环
        * @param isLoop 是否循环播放
        * @version Egret 3.0
        * @platform Web,Native
        */
        play(isLoop: boolean): void;
        /**
        * @language zh_CN
        * 数据更新
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
    }
    /**
    * @private
    * @class egret3d.CameraAnimationFrame
    * @classdesc
    * 摄像机动画每帧数据
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CameraAnimationFrame {
        /**
        * @language zh_CN
        * 帧时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        time: number;
        /**
        * @language zh_CN
        * 观察时y 轴方向的角度，就是观察范围夹角。
        * @version Egret 3.0
        * @platform Web,Native
        */
        fov: number;
        /**
        * @language zh_CN
        * 旋转
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 平移
        * @version Egret 3.0
        * @platform Web,Native
        */
        translation: Vector3D;
        /**
        * @private
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
    * 管理所有摄像机动画
    * @version Egret 3.0
    * @platform Web,Native
    */
    class CameraAnimationManager {
        private _animation;
        /**
        * @language zh_CN
        * 构建一个摄像机动画管理对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 播放某个动画
        * 根据动画名字来播放，指定摄像机，并且控制动画是否循环播放
        * @param name 动画名
        * @param camera 相机
        * @param isLoop 是否循环
        * @version Egret 3.0
        * @platform Web,Native
        */
        play(name: string, camera: Camera3D, isLoop: boolean): void;
        /**
        * @language zh_CN
        * 更新所有的摄像机动画
        * @param time 当前时间
        * @param delay 每帧间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
        private onCallback(loader, name, camera, isLoop);
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
        /**
         * @private
         */
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
     * @private
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
    * @private
    * @class egret3d.Debug
    * @classdesc
    * 调试面板
    */
    class Debug {
        private _console;
        isDebug: boolean;
        /**
         * @language zh_CN
         * 构造
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
         * 重置显示数据
         */
        reset(): void;
        private static _instance;
        /**
         * @language zh_CN
         * 取到当前Debug单例对象
         */
        static instance: Debug;
    }
}
declare module egret3d {
    /**
     * @class egret3d.WireframeBase
     * @classdesc
     * 线框渲染基类，可以控制顶点的颜色，顶点的大小
     * 可控制线的颜色，可选择是否渲染点或者渲染线
     *
     * @see egret3d.Object3D
     * @version Egret 3.0
     * @platform Web,Native
     */
    class WireframeBase extends Object3D {
        protected vertexData: Array<number>;
        protected vertexCount: number;
        protected vertexLength: number;
        protected vertexBytes: number;
        /**
        * @language zh_CN
        * 是否以线渲染
        * @version Egret 3.0
        * @platform Web,Native
        */
        isDrawLine: boolean;
        /**
        * @language zh_CN
        * 是否以点渲染
        * @version Egret 3.0
        * @platform Web,Native
        */
        isDrawPoint: boolean;
        /**
        * @language zh_CN
        * 渲染顶点的大小
        * @version Egret 3.0
        * @platform Web,Native
        */
        pointSize: number;
        /**
        * @language zh_CN
        * 渲染顶点的颜色
        * @version Egret 3.0
        * @platform Web,Native
        */
        pointColor: Vector3D;
        /**
        * @language zh_CN
        * 渲染线的颜色
        * @version Egret 3.0
        * @platform Web,Native
        */
        lineColor: Vector3D;
        protected vsShaderSource: string;
        protected fsShaderSource: string;
        protected vertexBuffer3D: IVertexBuffer3D;
        protected usage: MethodUsageData;
        protected vsShader: GLSL.ShaderBase;
        protected fsShader: GLSL.ShaderBase;
        private uniform_color;
        private uniform_pointSize;
        /**
        * @private
        * @language zh_CN
        * constructor
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 根据geometry创建一个线框
        * @param geometry 模型数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        createFromGeometry(geometry: GeometryBase): void;
        /**
        * @language zh_CN
        * 根据顶点数据创建条线段
        * @param vertexData 线段的顶点数据 3个number是一个顶点
        * @version Egret 3.0
        * @platform Web,Native
        */
        createFromData(vertexData: Array<number>): void;
        /**
        * @language zh_CN
        * 根据顶点数据创建条线段
        * @param vertexData 线段的顶点数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        createFromArray(vertexData: Array<Vector3D>): void;
        /**
        * @language zh_CN
        * 以下标来设置某个顶点的坐标
        * @param index 顶点下标
        * @param pos 设置顶点的坐标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setVertexPos(index: number, pos: Vector3D): void;
        /**
        * @language zh_CN
        * 设置渲染用的shader文件名字
        * @param vsName vs文件名
        * @param fsName fs文件名
        * @version Egret 3.0
        * @platform Web,Native
        */
        setShader(vsName: string, fsName: string): void;
        /**
        * @language zh_CN
        * 提交数据到GPU渲染
        * @param context3D 设备上下文
        * @param camera 渲染时的相机
        * @version Egret 3.0
        * @platform Web,Native
        */
        draw(context3D: Context3D, camera: Camera3D): void;
        private rebuild(context3D);
    }
}
declare module egret3d {
    /**
     * @class egret3d.WireframeLine
     * @classdesc
     *
     * 线渲染把两个顶点之间以线渲染的形式渲染出来
     * @includeExample Wireframe/WireframeLine.ts
     * @version Egret 3.0
     * @platform Web,Native
     *
     */
    class WireframeLine extends WireframeBase {
        /**
        * @language zh_CN
        * 构建一个线框渲染对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 根据顶点数据创建条线段
        * @param vertexData 线段的顶点数据 3个number是一个顶点
        * @version Egret 3.0
        * @platform Web,Native
        */
        createFromData(vertexData: Array<number>): void;
        /**
        * @language zh_CN
        * 根据顶点数据创建条线段
        * @param vertexData 线段的顶点数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        createFromArray(vertexData: Array<Vector3D>): void;
    }
}
declare module egret3d {
    /**
     * @class egret3d.WriframeMesh
     * @classdesc
     *
     * 模型线框网格,以线框形式渲染模型
     * @includeExample Wireframe/WireframeLine.ts
     * @version Egret 3.0
     * @platform Web,Native
     */
    class WireframeMesh extends WireframeBase {
        /**
        * @language zh_CN
        * 构建一个线框渲染Mesh对象
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 根据mesh创建一个线框
        * @param mesh 需要渲染的Mesh
        * @version Egret 3.0
        * @platform Web,Native
        */
        createByMesh(mesh: Mesh): void;
        /**
        * @language zh_CN
        * 根据geometry创建一个线框
        * @param geometry 模型数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        createFromGeometry(geometry: GeometryBase): void;
    }
}
declare module egret3d {
    /**
     * @private
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
        *
        * @returns x
        */
        /**
        * @language zh_CN
        *
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
        *
        * @param value y
        */
        y: number;
        /**
        * @language zh_CN
        *
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
        *
        * @returns height
        */
        /**
        * @language zh_CN
        *
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
        * @param context3D
        * @param viewPort
        * @returns
        */
        draw(context3D: Context3D, viewPort: Rectangle): void;
        private notifyUpdate();
    }
}
declare module egret3d {
    /**
     * @class egret3d.HUD
     * @classdesc
     * HUD直接渲染在屏幕上的一张贴图</p>
     * 可直接指定2维坐标，贴图的宽度和高度。</p>
     * 其底层渲染也是由4个顶点构成，顶点数据结构有位置信息和uv信息。</p>
     * 其所有的HUD对象的顶点信息数据都是共用的。</p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class HUD {
        private static singleQuadData;
        private static singleQuadIndex;
        /**
         * @language zh_CN
         * @private
         */
        rectangle: Rectangle;
        /**
         * @language zh_CN
         * @private
         * anchor
         */
        anchor: Vector3D;
        /**
         * @language zh_CN
         * @private
         * rotation
         */
        rotation: Vector3D;
        /**
         * @language zh_CN
         * @private
         * r
         */
        r: number;
        /**
         * @language zh_CN
         * @private
         * g
         */
        g: number;
        /**
         * @language zh_CN
         * @private
         * b
         */
        b: number;
        /**
         * @language zh_CN
         * @private
         * a
         */
        a: number;
        /**
         * @language zh_CN
         * @private
         * uvRectangle
         */
        uvRectangle: Rectangle;
        /**
         * @language zh_CN
         * @private
         * texture
         */
        texture: TextureBase;
        /**
         * @language zh_CN
         * @private
         * viewMatIndex
         */
        viewMatIndex: WebGLUniformLocation;
        /**
         * @language zh_CN
         * @private
         * uiDataIndex
         */
        uiDataIndex: WebGLUniformLocation;
        /**
         * @language zh_CN
         * @private
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
        /**
         * @language zh_CN
         * 构造
         */
        constructor();
        /**
         * @language zh_CN
         * 得到x坐标
         * @returns x坐标
         */
        /**
         * @language zh_CN
         * 设置x坐标
         * @param value x坐标
         */
        x: number;
        /**
         * @language zh_CN
         * 得到y坐标
         * @returns y坐标
         */
        /**
         * @language zh_CN
         * 设置y坐标
         * @param value y坐标
         */
        y: number;
        /**
         * @language zh_CN
         *  得到HUD的宽度
         * @returns HUD宽
         */
        /**
         * @language zh_CN
         * 设置HUD的宽度
         * @param value HUD宽
         */
        width: number;
        /**
         * @language zh_CN
         * 得到HUD的高度
         * @returns HUD高
         */
        /**
         * @language zh_CN
         * 设置HUD的高度
         * @param value HUD高
         */
        height: number;
        private rebuild(context3D);
        /**
         * @language zh_CN
         * 提交数据给GPU渲染
         * @param context3D Context3D
         */
        draw(context3D: Context3D): void;
    }
}
declare module egret3d {
    /**
    * @private
    * @class egret3d.PostEffectBase
    * @classdesc
    * 后期合成基类
    */
    class PostEffectBase {
        /**
         * @language zh_CN
         * @private
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
    * @private
    * @class egret3d.BrightPost
    * @classdesc
    * 后期亮度调整
    * @version Egret 3.0
    * @platform Web,Native
    */
    class BrightPost extends PostEffectBase {
        /**
         * @language zh_CN
         * 构造
         * @version Egret 3.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language zh_CN
         * 渲染到目标帧缓冲上
         * @param source 数据来源buffer
         * @param target 渲染的目标buffer
         * @param context3D  gpu设备
         * @param viewPort 视口
         * @version Egret 3.0
         * @platform Web,Native
         */
        drawToTarget(source: FrameBuffer, target: FrameBuffer, context3D: Context3D, viewPort: Rectangle): void;
    }
}
declare module egret3d {
    /**
    * @private
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
    * @private
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
    * @private
    * @language zh_CN
    * @class egret3d.Composition
    * @classdesc
    * 后期合成
    */
    class Composition extends PostEffectBase {
        /**
         * @language zh_CN
         * 构造
         */
        constructor();
        /**
         * @language zh_CN
         * 渲染到目标帧缓冲上
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
    * @private
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
    * @private
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
     * 渲染视图。</p>
     * view3D 是整个3D引擎的渲染视口，可以控制渲染窗口的大小，渲染的方式。</p>
     * 可以设置不同的相机 camera3D。</p>
     * 交换不同的场景元素 scene3D 。</p>
     * skyBox需要在这里直接设置，有cube sky 和 sphere sky。</p>
     * 整个渲染的主循环通过 render  。</p>
     * @see egret3d.camera3d
     * @see egret3d.scene3D
     * @version Egret 3.0
     * @platform Web,Native
     */
    class View3D {
        protected _context3D: Context3D;
        protected _camera: Camera3D;
        protected _scene: Scene3D;
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
        protected _wireframeList: Array<WireframeBase>;
        protected _hudList: Array<HUD>;
        private _mouseEventManager;
        /**
        * @language zh_CN
        * 返回渲染根节点
        * 返回渲染场景的 scene3D
        * @returns Object3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        root: Object3D;
        /**
        * @language zh_CN
        * 返回 Scene3D 对象
        * 返回 Scene3D 对象
        * @returns {Scene3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置场景
        * 设置渲染场景的 scene3D ， 可以将整个渲染 列表替换，可作为游戏中切换游戏场景的主要接口
        * @param scene {Scene3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        scene: Scene3D;
        /**
        * @language zh_CN
        * 创建一个新的 View3D 对象。
        * @param viewPort {Rectangle} 显示区域
        * @param camera {Camera3D} 摄像机
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(viewPort: Rectangle, camera?: Camera3D);
        /**
        * @language zh_CN
        * 重置canvas位置和大小
        * @param x canvas的x坐标
        * @param y canvas的y坐标
        * @param width  canvas的宽度
        * @param height canvas的高度
        * @version Egret 3.0
        * @platform Web,Native
        */
        resize(x: number, y: number, width: number, height: number): void;
        /**
        * @language zh_CN
        * 设置渲染器
        * view3D 可以使用不同的渲染器，每个渲染器可以渲染不同的渲染通道使之直接在主屏幕中显示出来
        * @param val {RenderBase}
        * @version Egret 3.0
        * @platform Web,Native
        */
        render: RenderBase;
        /**
        * @language zh_CN
        * 是否使用影子
        * 在当前的渲染时口中，是否可以使用阴影映射，如果是将开始进行渲染逻辑
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 是否使用影子
        * 在当前的渲染时口中，是否可以使用阴影映射，如果是将开始进行渲染逻辑
        * @param flag {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        useShadow: boolean;
        protected requestFrameBuffer(): void;
        /**
        * @language zh_CN
        * @private
        * 监听设备重置回调
        * 事件机制
        * @event func  {Function}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addListenerResize(func: Function): void;
        /**
        * @language zh_CN
        * 返回视口
        * 返回视口的尺寸大小
        * @returns {Rectangle}
        * @version Egret 3.0
        * @platform Web,Native
        */
        viewPort: Rectangle;
        /**
        * @language zh_CN
        * 返回天空盒子
        * 设置天空盒子，天空盒子的类型有 cubesky 和 spheresky 两种类型，其中 spheresky 是属于360天空全景照片使用
        * @returns {Sky}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置天空盒子
        * 设置天空盒子，天空盒子的类型有 cubesky 和 spheresky 两种类型，其中 spheresky 是属于360天空全景照片使用
        * @param value {Sky} 天空盒子
        * @version Egret 3.0
        * @platform Web,Native
        */
        sky: Sky;
        /**
        * @language zh_CN
        * 设置天空球
        * 设置天空盒子，天空盒子的类型有 cubesky 和 spheresky 两种类型，其中 spheresky 是属于360天空全景照片使用
        * @param value {SphereSky} 天空球
        * @version Egret 3.0
        * @platform Web,Native
        */
        sphereSky: SphereSky;
        /**
        * @language zh_CN
        * 添加 HUD 到渲染列表中
        * 设置天空盒子，天空盒子的类型有 cubesky 和 spheresky 两种类型，其中 spheresky 是属于360天空全景照片使用
        * @param hud {HUD}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addHUD(hud: HUD): void;
        /**
        * @language zh_CN
        * @private
        * 在渲染列表中删除一个HUD
        * @param hud {HUD}
        * @version Egret 3.0
        * @platform Web,Native
        */
        delHUD(hud: HUD): void;
        /**
        * @language zh_CN
        * 增加wireframe进渲染列表
        * 在view3D中添加物体的网格显示对象
        * @param wireframe
        * @version Egret 3.0
        * @platform Web,Native
        */
        addWireframe(wireframe: WireframeBase): void;
        /**
        * @language zh_CN
        * 在渲染列表中删除一个wireframe
        * 动态删除物体的显示网格
        * @param hud
        * @version Egret 3.0
        * @platform Web,Native
        */
        delWireframe(wireframe: WireframeBase): void;
        /**
        * @language zh_CN
        * 设置背景渲染贴图
        * 设置一个可跟随视口大小匹配，且永远在最后的背景显示贴图
        * @param texture 贴图
        * @version Egret 3.0
        * @platform Web,Native
        */
        backImageTexture: TextureBase;
        /**
        * @language zh_CN
        * 设置 postEffect
        * 设置后期MRT处理的着色滤镜，例如（HDR，tonymaping，bloom）
        * @param postEffects {Array<PostEffectBase>}
        * @version Egret 3.0
        * @platform Web,Native
        */
        postEffect: Array<PostEffectBase>;
        /**
        * @language zh_CN
        * 返回 摄像机
        * 返回 摄像机 Camera3D
        * @returns Camera3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        camera3D: Camera3D;
        /**
        * @language zh_CN
        * @private
        * 返回 Context3D
        * @returns Context3D
        * @version Egret 3.0
        * @platform Web,Native
        */
        context3D: Context3D;
        /**
        * @language zh_CN
        * 获取视口的大小
        * 视口的宽度。当使用软件渲染，平台限制2048像素
        * @private
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置视口的宽度。
        * 视口的宽度。当使用软件渲染，平台限制2048像素
        * @param width {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        width: number;
        /**
        * @language zh_CN
        * 获取视口的大小
        * 视口的高度。当使用软件渲染，平台限制2048像素
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置视口的宽度。
        * 视口的高度。当使用软件渲染，平台限制2048像素
        * @param height {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        height: number;
        /**
        * @language zh_CN
        * 返回 x 坐标值
        * 返回在网页中的webgl画面位置
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 x 坐标值。
        * 设置在网页中的webgl画面位置
        * @param  x {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        x: number;
        /**
        * @language zh_CN
        * 返回 y 坐标值
        * 返回在网页中的webgl画面位置
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置 y 坐标值。
        * 设置在网页中的webgl画面位置
        * @param  x {number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        y: number;
        /**
        * @language zh_CN
        * 将一个 Object3D 实例添加到 Scene3D 实例中。
        * 将一个 Object3D 实例添加到 Scene3D 实例中。参与scene3D中的显示树优化，并且即时渲染出来
        * @param  child3D {Object3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        addChild3D(child3D: Object3D): void;
        /**
        * @language zh_CN
        * 数据更新
        * 渲染中的主循环，可以使用外部时间控制器驱动，也可使用 requestFrame
        * @param time 当前时间
        * @param delay 时间间隔
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
        protected updateViewSizeData(): void;
        /**
        * @language zh_CN
        * 设置tag名和name的下标为index 没有的话会新加tag
        * 设置渲染的层级标签，可以自定义渲染优先顺序，让渲染可自定义化
        * @param name tag名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setTags(name: string, index: number): void;
        /**
        * @language zh_CN
        * 设置layer名和name的下标为index
        * 设置渲染的层级标签，可以自定义渲染优先顺序，让渲染可自定义化
        * @param layer layer名
        * @param index 下标
        * @version Egret 3.0
        * @platform Web,Native
        */
        setTagsItem(layer: string, index: number): void;
        /**
        * @language zh_CN
        * 返回layer的值
        * 返回当前标签的渲染层级
        * @param name tag名
        * @param layer layer名
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        getTagLayer(name?: string, layer?: string): number;
        /**
        * @language zh_CN
        * 得到tag
        * 返回当前标签的渲染标签的名字
        * @param name tag名
        * @returns {Tag}
        * @version Egret 3.0
        * @platform Web,Native
        */
        getTag(name?: string): Tag;
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @class egret3d.Channel
     * @classdesc
     * VR 渲染视图。
     * @version Egret 3.0
     * @platform Web,Native
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
        * 创建一个新的 VRView3D 对象。
        * @param viewPort {Rectangle} 显示区域
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(viewPort: Rectangle);
        protected requestFrameBuffer(): void;
        private setupVR();
        /**
        * @language zh_CN
        * 设置眼睛空间
        * @param value {Number} Eyes Space。
        * @version Egret 3.0
        * @platform Web,Native
        */
        setEyesSpace(value: number): void;
        private tab;
        /**
        * @language zh_CN
        * 数据更新
        * @param time {Number} 当前时间
        * @param delay {Number} 间隔时间
        * @version Egret 3.0
        * @platform Web,Native
        */
        update(time: number, delay: number): void;
        private leftEye(time, delay);
        private rightEye(time, delay);
    }
}
declare module egret3d {
    /**
     * @private
     * @language zh_CN
     * @version Egret 3.0
     * @platform Web,Native
     */
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
     * 处理输入设备,鼠标.键盘.触摸。
     * @includeExample input/Input.ts
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Input {
        /**
        * @language zh_CN
        * 当前鼠标X坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseX: number;
        /**
        * @language zh_CN
        * 当前鼠标Y坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseY: number;
        /**
        * @language zh_CN
        * 鼠标滚轮增量值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        wheelDelta: number;
        /**
        * @language zh_CN
        * 鼠标X坐标的偏移值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseOffsetX: number;
        /**
        * @language zh_CN
        * 鼠标Y坐标的偏移值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseOffsetY: number;
        /**
        * @language zh_CN
        * 上一次鼠标X坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseLastX: number;
        /**
        * @language zh_CN
        * 上一次鼠标Y坐标。
        * @version Egret 3.0
        * @platform Web,Native
        */
        mouseLastY: number;
        private _time;
        private _keyStatus;
        private _listenerKeyClick;
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
        * 游戏手柄Stick1事件侦听函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        onGamepadStick1: Function;
        /**
        * @language zh_CN
        * 游戏手柄Stick2事件侦听函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        onGamepadStick2: Function;
        /**
        * @language zh_CN
        * 旋转。
        * @version Egret 3.0
        * @platform Web,Native
        */
        rotation: Vector3D;
        /**
        * @language zh_CN
        * 加速度。
        * @version Egret 3.0
        * @platform Web,Native
        */
        _acceleration: Vector3D;
        /**
        * @language zh_CN
        * 重力。
        * @version Egret 3.0
        * @platform Web,Native
        */
        gravity: Vector3D;
        /**
        * @language zh_CN
        * 象限。
        * @version Egret 3.0
        * @platform Web,Native
        */
        quadrant: number;
        private static _instance;
        /**
        * @language zh_CN
        * 获取Input类对象的单例。
        * @returns Input
        * @version Egret 3.0
        * @platform Web,Native
        */
        static instance: Input;
        /**
        * @language zh_CN
        * 创建一个新的 Input 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 添加手指按下事件。
        * @version Egret 3.0
        * @platform Web,Native
        * @param callback {Function} 手指按下事件的侦听函数
        */
        addTouchStartCallback(callback: Function): void;
        /**
        * @language zh_CN
        * 添加手指弹起事件。
        * @version Egret 3.0
        * @platform Web,Native
        * @param callback {Function} 手指弹起事件的侦听函数
        */
        addTouchEndCallback(callback: Function): void;
        /**
        * @language zh_CN
        * 添加手指移动事件。
        * @version Egret 3.0
        * @platform Web,Native
        * @param callback {Function} 手指移动事件的侦听函数
        */
        addTouchMoveCallback(callback: Function): void;
        private _gp;
        private ongamepaddisconnected(e);
        private ongamepadconnected(e);
        /**
        * @language zh_CN
        * 游戏手柄按钮是否按下。
        * @version Egret 3.0
        * @platform Web,Native
        * @param index {number}
        * @returns {boolean}
        */
        getGamepadButtonState(index: number): boolean;
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick1 。
        * @version Egret 3.0
        * @platform Web,Native
        * @returns {Vector3D}
        */
        getGamepadStick1(): Vector3D;
        /**
        * @language zh_CN
        * 游戏手柄摇杆方向 Stick2 。
        * @version Egret 3.0
        * @platform Web,Native
        * @returns {Vector3D}
        */
        getGamepadStick2(): Vector3D;
        private canGame();
        /**
        * @language zh_CN
        * 更新游戏手柄信息。
        * @version Egret 3.0
        * @platform Web,Native
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
        * 添加鼠标移动事件的侦听器函数。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 处理鼠标移事件的侦听器函数
        */
        addListenerMouseMove(func: Function): void;
        /**
        * @language zh_CN
        * 添加鼠标滚轮事件的侦听器函数。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 处理鼠标滚轮事件的侦听器函数
        */
        addListenerMouseWheel(func: Function): void;
        /**
        * @language zh_CN
        * 添加键盘鼠标点击事件的侦听器函数。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 处理键盘鼠标点击事件的侦听器函数
        */
        addListenerKeyClick(func: Function): void;
        /**
        * @language zh_CN
        * 添加键盘鼠标弹起事件的侦听器函数。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 处理键盘鼠标弹起事件的侦听器函数
        */
        addListenerKeyUp(func: Function): void;
        /**
        * @language zh_CN
        * 添加键盘鼠标按下事件的侦听器函数。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 处理键盘鼠标按下事件的侦听器函数
        */
        addListenerKeyDown(func: Function): void;
        /**
        * @language zh_CN
        * 移动端手指划动的手势事件。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 手指划动划动的手势事件的侦听器函数
        */
        addListenerSwipe(func: Function): void;
        /**
        * @language zh_CN
        * 添加设备旋转事件。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 设备旋转事件的侦听器函数
        */
        addListenerDeviceorientation(func: Function): void;
        /**
        * @language zh_CN
        * 添加设备移动事件。
        * @version Egret 3.0
        * @platform Web,Native
        * @param func {Function} 设备移动事件的侦听器函数
        */
        addListenerDevicemotion(func: Function): void;
        /**
        * @language zh_CN
        * 添加游戏手柄按钮点击事件。
        * @version Egret 3.0
        * @platform Web,Native
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
        * @param  startX {Number} 起点X坐标
        * @param  startY {Number} 起点Y坐标
        * @param  endX   {Number} 终点X坐标
        * @param  endY   {Number} 终点Y坐标
        * @returns result {number} 1：向上，2：向下，3：向左，4：向右,0：未滑动
        */
        GetSlideDirection(startX: number, startY: number, endX: number, endY: number): number;
        private isEnlarge(op1, op2, np1, np2);
    }
}
declare module egret3d {
    /**
     * @private
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
    * AudioManager 类允许您在应用程序中 播放 HTML5 Audio 和 Web Audio。
    * @includeExample audio/AudioManager.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    class AudioManager {
        /**
         * @language zh_CN
         * AudioContext 上下文。
         * @version Egret 3.0
         * @platform Web,Native
         */
        context: any;
        /**
        * @language zh_CN
        * 音量，范围从 0（静音）至 1（最大幅度）。
        * @version Egret 3.0
        * @platform Web,Native
        */
        volume: number;
        /**
        * @language zh_CN
        * 创建一个新的 AudioManager 对象。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor();
        /**
        * @language zh_CN
        * 是否支持 HTML5 Audio tag API。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasAudio(): boolean;
        /**
        * @language zh_CN
        * 是否支持 Web Audio API。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        hasAudioContext(): boolean;
        private codecs;
        /**
        * @language zh_CN
        * 浏览器是否可以播放这种音频类型。
        * @param url 指向外部音频文件的 URL。
        * @param audio {HTMLAudioElement} HTMLAudio元素
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        isSupported(url: string, audio: HTMLAudioElement): boolean;
        /**
        * @language zh_CN
        * 生成一个新的 Sound 对象 ，将声音数据加载到 Sound 对象中。
        * @param url {String}   指向外部音频文件的 URL。
        * @param success {Function} 一个可选的音频文件加载成功的事件处理函数。
        * @param error {Function} 一个可选的音频文件加载失败的事件处理函数。
        * @returns {Sound}
        * @version Egret 3.0
        * @platform Web,Native
        */
        createSound(url: string, success?: Function, error?: Function): Sound;
        /**
        * @language zh_CN
        * 生成一个新的 Channel 对象来播放该声音。此方法返回 Channel 对象，访问该对象可停止声音并监控音量。
        * @param sound{Sound} 要播放的声音数据。
        * @param options{any}   ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @returns {Channel}
        * @version Egret 3.0
        * @platform Web,Native
        */
        playSound(sound: Sound, options: any): Channel;
        /**
        * @language zh_CN
        * 生成一个新的 Channel3d 对象来播放该声音。此方法返回 Channel3d 对象，访问该对象可停止声音并监控音量。
        * @param sound {Sound}  要播放的声音数据。
        * @param position {Vector3D} 在三维空间中播放的位置。
        * @param options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @returns {Channel}
        * @version Egret 3.0
        * @platform Web,Native
        */
        playSound3d(sound: Sound, position: Vector3D, options: any): Channel3d;
        private static _instance;
        /**
        * @language zh_CN
        * AudioManager类的单例模式，返回一个 AudioManager 对象。
        * @returns AudioManager
        * @version Egret 3.0
        * @platform Web,Native
        */
        static instance: AudioManager;
    }
}
declare module egret3d {
    /**
     * @language zh_CN
     * @class egret3d.Channel
     * @classdesc
     * Channel 类控制应用程序中的声音，对声音执行更精细的控制。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Channel {
        /**
        * @language zh_CN
        * 音量，范围从 0（静音）至 1（最大幅度）。
        * @version Egret 3.0
        * @platform Web,Native
        */
        volume: number;
        /**
        * @language zh_CN
        * 是否循环播放 使声音播放结束时重新开始播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        loop: boolean;
        /**
        * @language zh_CN
        * 当前播放速度。1.0 正常速度。0.5 半速（更慢）。2.0 倍速（更快）。-1.0 向后。正常速度。-0.5 向后，半速。
        * @version Egret 3.0
        * @platform Web,Native
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
        * 创建一个新的 Channel 对象。
        * @param sound {Sound} Sound 对象 音频的数据源。
        * @param {Object} options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(sound: Sound, options: any);
        /**
        * @language zh_CN
        * 开始在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        play(): void;
        /**
        * @language zh_CN
        * 暂时停止在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        pause(): void;
        /**
        * @language zh_CN
        * 从暂停的位置继续在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        unpause(): void;
        /**
        * @language zh_CN
        * 停止在该声道中播放声音。
        * @version Egret 3.0
        * @platform Web,Native
        */
        stop(): void;
        private setLoop(value);
        private setVolume(value);
        private setPitch(value);
        /**
        * @language zh_CN
        * 是否正在播放。
        * @returns {boolean}
        * @version Egret 3.0
        * @platform Web,Native
        */
        isPlaying(): boolean;
        /**
        * @language zh_CN
        * 音频持续时间。
        * @returns {number}
        * @version Egret 3.0
        * @platform Web,Native
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
     * Channel3d 类控制应用程序中 在三维空间中播放的声音。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Channel3d extends Channel {
        private _panner;
        private _listener;
        /**
        * @language zh_CN
        * 返回监听者位置。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 设置监听者位置。
        * @param value {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        listener: Vector3D;
        /**
        * @language zh_CN
        * 创建一个新的 Channel3d 对象。
        * @param sound {Sound} Sound 对象 音频的数据源。
        * @param {Object} options {any} ["volume":1,"loop":true volume] 回放音量, 0 到 1 ， loop 是否循环播放。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(sound: Sound, options: any);
        private _position;
        /**
        * @language zh_CN
        * 三维空间中的位置。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 三维空间中的位置。
        * @param opsition {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        position: Vector3D;
        private _velocity;
        /**
        * @language zh_CN
        * 传播方向。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 传播方向。
        * @param velocity {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        velocity: Vector3D;
        private _maxDistance;
        /**
        * @language zh_CN
        * 最大距离。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 最大距离。
        * @param max{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        maxDistance: number;
        private _minDistance;
        /**
        * @language zh_CN
        * 最小距离。
        * @returns {Vector3D}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * 最小距离。
        * @param min{Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        minDistance: number;
        private _rollOffFactor;
        /**
        * @language zh_CN
        * rollOff 系数。
        * @returns {Number}
        * @version Egret 3.0
        * @platform Web,Native
        */
        /**
        * @language zh_CN
        * rollOff 系数。
        * @param factor {Number}
        * @version Egret 3.0
        * @platform Web,Native
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
     * Sound 类允许您在应用程序中使用声音。</p>
     * 使用 Sound 类可以创建 Sound 对象、将外部 MP3 文件加载到该对象并播放该文件、关闭声音流，以及访问有关声音的数据，如有关流中字节数和 ID3 元数据的信息。</p>
     * 可通过以下项对声音执行更精细的控制：声音源（声音的 Channel 和 Channel3d）用于控制向计算机扬声器输出声音的属性。  </p>
     * @version Egret 3.0
     * @platform Web,Native
     */
    class Sound {
        private isLoaded;
        /**
        * @language zh_CN
        * HTML音频 数据源。
        * @version Egret 3.0
        * @platform Web,Native
        */
        audio: HTMLAudioElement;
        private _buffer;
        /**
        * @language zh_CN
        * Web音频 数据源。
        * @returns {AudioBuffer}
        * @version Egret 3.0
        * @platform Web,Native
        */
        buffer: any;
        private _success;
        private _error;
        /**
        * @language zh_CN
        * 创建一个新的 Sound 对象。一旦某个 Sound 对象加载完成声音文件，就不能再将另一个声音文件加载到该 Sound 对象中。要加载另一个声音文件，请创建新的 Sound 对象。
        * @param {String}   指向外部音频文件的 URL。
        * @param {Function} 一个可选的音频文件加载成功的事件处理函数。
        * @param {Function} 一个可选的音频文件加载失败的事件处理函数。
        * @version Egret 3.0
        * @platform Web,Native
        */
        constructor(url: string, success?: Function, error?: Function);
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
     * @private
     * @class egret3D.Egret3DEngine
     * @classdesc
     * 引擎库文件加载
     * 引擎库前期加载设置，开发中加载未压缩的编译引擎
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
