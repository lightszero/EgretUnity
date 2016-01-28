using System;
using System.IO;
using System.Collections.Generic;
using UnityEngine;
using System.Text;


public class BitHelper
{
    public static byte[] getBytes(Vector2 pos)
    {
        byte[] buf = new byte[8];
        BitConverter.GetBytes(pos.x).CopyTo(buf, 0);
        BitConverter.GetBytes(pos.y).CopyTo(buf, 4);
        return buf;
    }
    public static Vector2 ToVector2(byte[] buf, int pos)
    {
        Vector2 vec;
        vec.x = BitConverter.ToSingle(buf, pos + 0);
        vec.y = BitConverter.ToSingle(buf, pos + 4);
        return vec;
    }
    public static byte[] getBytes(Vector3 pos)
    {
        byte[] buf = new byte[12];
        BitConverter.GetBytes(pos.x).CopyTo(buf, 0);
        BitConverter.GetBytes(pos.y).CopyTo(buf, 4);
        BitConverter.GetBytes(pos.z).CopyTo(buf, 8);
        return buf;
    }
    public static Vector3 ToVector3(byte[] buf, int pos)
    {
        Vector3 vec;
        vec.x = BitConverter.ToSingle(buf, pos + 0);
        vec.y = BitConverter.ToSingle(buf, pos + 4);
        vec.z = BitConverter.ToSingle(buf, pos + 8);
        return vec;
    }
    public static byte[] getBytes(Vector4 pos)
    {
        byte[] buf = new byte[16];
        BitConverter.GetBytes(pos.x).CopyTo(buf, 0);
        BitConverter.GetBytes(pos.y).CopyTo(buf, 4);
        BitConverter.GetBytes(pos.z).CopyTo(buf, 8);
        BitConverter.GetBytes(pos.w).CopyTo(buf, 12);
        return buf;
    }
    public static Vector4 ToVector4(byte[] buf, int pos)
    {
        Vector4 vec;
        vec.x = BitConverter.ToSingle(buf, pos + 0);
        vec.y = BitConverter.ToSingle(buf, pos + 4);
        vec.z = BitConverter.ToSingle(buf, pos + 8);
        vec.w = BitConverter.ToSingle(buf, pos + 12);
        return vec;
    }
    public static byte[] getBytes(Quaternion pos)
    {
        byte[] buf = new byte[16];
        BitConverter.GetBytes(pos.x).CopyTo(buf, 0);
        BitConverter.GetBytes(pos.y).CopyTo(buf, 4);
        BitConverter.GetBytes(pos.z).CopyTo(buf, 8);
        BitConverter.GetBytes(pos.w).CopyTo(buf, 12);
        return buf;
    }
    public static Quaternion ToQuaternion(byte[] buf, int pos)
    {
        Quaternion vec;
        vec.x = BitConverter.ToSingle(buf, pos + 0);
        vec.y = BitConverter.ToSingle(buf, pos + 4);
        vec.z = BitConverter.ToSingle(buf, pos + 8);
        vec.w = BitConverter.ToSingle(buf, pos + 12);
        return vec;
    }
    public static void MatrixDeCompose(Matrix4x4 m, out Vector3 pos, out Vector3 scale, out Quaternion quat)
    {
        //quat
        Vector3 vf = m.MultiplyVector(Vector3.forward);
        Vector3 vu = m.MultiplyVector(Vector3.up);
        quat = Quaternion.LookRotation(vf, vu);
        //pos
        pos = new Vector3(m.m03, m.m13, m.m23);
        //去掉旋转和偏移
        m.m03 = 0; m.m13 = 0; m.m23 = 0;
        Matrix4x4 im = Matrix4x4.TRS(Vector3.zero, quat, Vector3.one);
        m *= im.inverse;
        //scale
        scale = new Vector3(m.m00, m.m11, m.m22);

    }
    public static byte[] getBytes(Bounds bound)
    {
        byte[] buf = new byte[24];
        getBytes(bound.center).CopyTo(buf, 0);
        getBytes(bound.size).CopyTo(buf, 12);
        return buf;
    }
    public static Bounds ToBounds(byte[] bytes, int pos)
    {
        Bounds b = new Bounds(ToVector3(bytes, pos + 0), ToVector3(bytes, pos + 12));
        return b;
    }
    public static byte[] getBytes(Color32 color)
    {
        byte[] buf = new byte[4];
        buf[0] = color.a;
        buf[1] = color.r;
        buf[2] = color.g;
        buf[3] = color.b;
        return buf;
    }
    public static Color32 ToColor32(byte[] buf, int pos)
    {
        Color32 c;
        c.a = buf[pos + 0];
        c.r = buf[pos + 1];
        c.g = buf[pos + 2];
        c.b = buf[pos + 3];
        return c;
    }
    public static byte[] getBytes(string str)
    {

        byte[] bs = System.Text.Encoding.UTF8.GetBytes(str);
        byte[] bnew = new byte[bs.Length + 1];
        bnew[0] = (byte)bs.Length;
        bs.CopyTo(bnew, 1);
        return bnew;
    }
    public static string ReadString(byte[] buf, int pos, out int seekoffset)
    {
        int len = buf[pos];
        string str = System.Text.Encoding.UTF8.GetString(buf, pos + 1, len);

        seekoffset = len + 1;
        return str;
    }
    public static string ToString(byte[] buf, int pos)
    {
        int len = buf[pos];
        string str = System.Text.Encoding.UTF8.GetString(buf, pos + 1, len);
        return str;
    }

    public static byte[] StreamToBytes(Stream stream)
    {
        byte[] bytes = new byte[stream.Length];
        stream.Read(bytes, 0, bytes.Length);
        // 设置当前流的位置为流的开始
        //stream.Seek(0, SeekOrigin.Begin);
        return bytes;
    }
    public static void WriteMesh(Mesh mesh, System.IO.Stream s)
    {
        byte[] nambuf = BitHelper.getBytes(mesh.name);
        s.Write(nambuf, 0, nambuf.Length);
        byte[] buf = BitHelper.getBytes(mesh.bounds);
        s.Write(buf, 0, 24);
        UInt32 vc = (UInt32)mesh.vertexCount;
        buf = BitConverter.GetBytes(vc);
        s.Write(buf, 0, 4);
        if (mesh.vertices != null && mesh.vertices.Length != 0)
        {
            s.WriteByte(1);//1 vb pos tag
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.vertices[i]), 0, 12);
                //if (i == 0)
                //{
                //    Debug.Log("pos0:" + mesh.vertices[i]);
                //}
            }
        }
        if (mesh.colors32 != null && mesh.colors32.Length != 0)
        {

            s.WriteByte(2);//2 vb color tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.colors32[i]), 0, 4);
                //Debug.Log("color0:" + mesh.colors32[i]);
                //if (i == 0)
                //{
                //    Debug.Log("pos0:" + mesh.vertices[i]);
                //}
            }
        }
        if (mesh.normals != null && mesh.normals.Length != 0)
        {
            s.WriteByte(3);//3 vb normal tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.normals[i]), 0, 12);
                //if (i == 0)
                //{
                //    Debug.Log("normal0:" + mesh.normals[i]);
                //}
            }
        }
        if (mesh.uv != null && mesh.uv.Length != 0)
        {
            s.WriteByte(4);//4 vb uv tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.uv[i]), 0, 8);
                //if (i == 0)
                //{
                //    Debug.Log("uv0:" + mesh.uv[i]);
                //}
            }
        }
        if (mesh.uv2 != null && mesh.uv2.Length != 0)
        {
            s.WriteByte(5);//5 vb uv2 tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.uv2[i]), 0, 8);
            }
        }
        if (mesh.uv3 != null && mesh.uv3.Length != 0)
        {
            s.WriteByte(6);//6 vb uv3 tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.uv3[i]), 0, 8);
            }
        }
        if (mesh.tangents != null && mesh.tangents.Length != 0)
        {
            s.WriteByte(7);//7 tangents tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.tangents[i]), 0, 16);
            }
        }
        if (mesh.uv4 != null && mesh.uv4.Length != 0)
        {
            s.WriteByte(8);//8 vb uv4 tag;
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitHelper.getBytes(mesh.uv4[i]), 0, 8);
            }
        }
        if (mesh.bindposes != null && mesh.bindposes.Length != 0)
        {
            s.WriteByte(16);//16 bindposes
            s.WriteByte((byte)mesh.bindposes.Length);//length diff
            for (int i = 0; i < mesh.bindposes.Length; i++)
            {
                Vector3 pos;
                Vector3 scale;
                Quaternion quat;
                BitHelper.MatrixDeCompose(mesh.bindposes[i], out pos, out scale, out quat);
                s.Write(BitHelper.getBytes(pos), 0, 12);
                s.Write(BitHelper.getBytes(scale), 0, 12);
                s.Write(BitHelper.getBytes(quat), 0, 16);
                //Debug.Log(mesh.bindposes[i] + "\n pos:" + pos + "\n scale:" + scale  + "\n quat:" + quat + "\n euler:" + quat.ToEuler());
            }
            //mesh.bindposes = mesh.bindposes;
            //mesh.UploadMeshData(false);
        }
        if (mesh.boneWeights != null && mesh.boneWeights.Length != 0)
        {
            s.WriteByte(17);//17 boneweights
            for (int i = 0; i < vc; i++)
            {
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].boneIndex0), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].boneIndex1), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].boneIndex2), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].boneIndex3), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].weight0), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].weight1), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].weight2), 0, 4);
                s.Write(BitConverter.GetBytes(mesh.boneWeights[i].weight3), 0, 4);
            }
        }
        s.WriteByte(255);//vb end
        int sub = mesh.subMeshCount;
        s.WriteByte((byte)sub);
        {
            Debug.Log("sub:" + sub);
        }
        for (int i = 0; i < sub; i++)
        {
            int tv = (int)mesh.GetTopology(i);//绘制方式
            s.Write(BitConverter.GetBytes(tv), 0, 4);
            var indices = mesh.GetIndices(i);//索引
            UInt32 length = (UInt32)indices.Length;
            Debug.Log("indlength:" + sub);

            s.Write(BitConverter.GetBytes(length), 0, 4);
            for (int j = 0; j < length; j++)
            {
                s.Write(BitConverter.GetBytes(indices[j]), 0, 4);
            }
        }
    }
    public static Mesh ReadMesh(byte[] data, int _seek)
    {
        Mesh m = new Mesh();
        int seek = _seek;
        int offset;
        m.name = BitHelper.ReadString(data, seek, out offset);
        m.name = "Instance";
        seek += offset;
        m.bounds = BitHelper.ToBounds(data, seek);
        seek += 24;
        UInt32 vcount = BitConverter.ToUInt32(data, seek);
        seek += 4;
        while (true)
        {
            byte tag = data[seek];
            Debug.Log("ReadMesh tag=" + tag);
            seek += 1;
            if (tag == 255) break;
            if (tag == 1)//pos
            {
                Vector3[] poss = new Vector3[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    poss[i] = BitHelper.ToVector3(data, seek);
                    seek += 12;
                    //if (i == 0)
                    //{
                    //    Debug.Log("vertices0:" + poss[i]);
                    //}
                }
                m.vertices = poss;
            }
            if (tag == 2)//color
            {
                Color32[] colors = new Color32[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    colors[i] = BitHelper.ToColor32(data, seek);
                    seek += 4;
                    //if (i == 0)
                    //{
                    //    Debug.Log("colors320:" + colors[i]);
                    //}
                }
                m.colors32 = colors;
            }
            if (tag == 3)//normal
            {
                Vector3[] normals = new Vector3[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    normals[i] = BitHelper.ToVector3(data, seek);
                    seek += 12;
                    //if (i == 0)
                    //{
                    //    Debug.Log("normals0:" + normals[i]);
                    //}
                }
                m.normals = normals;
            }
            if (tag == 4)//uv
            {
                Vector2[] uvs = new Vector2[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    uvs[i] = BitHelper.ToVector2(data, seek);
                    seek += 8;
                    //if (i == 0)
                    //{
                    //    Debug.Log("uvs0:" + uvs[i]);
                    //}
                }
                m.uv = uvs;
            }
            if (tag == 5)//uv2
            {
                Vector2[] uvs = new Vector2[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    uvs[i] = BitHelper.ToVector2(data, seek);
                    seek += 8;
                }
                m.uv2 = uvs;
            }
            if (tag == 6)//uv3
            {
                Vector2[] uvs = new Vector2[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    uvs[i] = BitHelper.ToVector2(data, seek);
                    seek += 8;
                }
                m.uv3 = uvs;
            }
            if (tag == 7)
            {
                Vector4[] tangents = new Vector4[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    tangents[i] = BitHelper.ToVector4(data, seek);
                    seek += 16;
                }
                m.tangents = tangents;
            }
            if (tag == 8)//uv4
            {
                Vector2[] uvs = new Vector2[vcount];
                for (int i = 0; i < vcount; i++)
                {
                    uvs[i] = BitHelper.ToVector2(data, seek);
                    seek += 8;
                }
                m.uv4 = uvs;
            }
            if (tag == 16)
            {
                int len = data[seek]; seek++;
                //s.WriteByte((byte)mesh.bindposes.Length);//length diff
                Matrix4x4[] bindpose = new Matrix4x4[len];

                for (int i = 0; i < len; i++)
                {
                    Vector3 pos = BitHelper.ToVector3(data, seek);
                    seek += 12;
                    Vector3 scale = BitHelper.ToVector3(data, seek);
                    seek += 12;
                    Quaternion quat = BitHelper.ToQuaternion(data, seek);
                    seek += 16;
                    bindpose[i] = Matrix4x4.TRS(pos, quat, scale);
                }
                m.bindposes = bindpose;
            }
            if (tag == 17)
            {
                BoneWeight[] weights = new BoneWeight[vcount];

                for (int i = 0; i < vcount; i++)
                {
                    weights[i].boneIndex0 = BitConverter.ToInt32(data, seek); seek += 4;
                    weights[i].boneIndex1 = BitConverter.ToInt32(data, seek); seek += 4;
                    weights[i].boneIndex2 = BitConverter.ToInt32(data, seek); seek += 4;
                    weights[i].boneIndex3 = BitConverter.ToInt32(data, seek); seek += 4;
                    weights[i].weight0 = BitConverter.ToSingle(data, seek); seek += 4;
                    weights[i].weight1 = BitConverter.ToSingle(data, seek); seek += 4;
                    weights[i].weight2 = BitConverter.ToSingle(data, seek); seek += 4;
                    weights[i].weight3 = BitConverter.ToSingle(data, seek); seek += 4;
                }
                m.boneWeights = weights;
            }
        }
        int subcount = data[seek];
        seek += 1;
        Debug.Log("sub=" + subcount);
        for (int i = 0; i < subcount; i++)
        {
            int tv = BitConverter.ToInt32(data, seek);
            seek += 4;


            UInt32 length = BitConverter.ToUInt32(data, seek);

            Debug.Log("indlength:" + length);

            seek += 4;
            int[] indices = new int[length];
            for (int j = 0; j < length; j++)
            {
                indices[j] = BitConverter.ToInt32(data, seek);
                seek += 4;
            }
            MeshTopology ttv = (MeshTopology)tv;
            m.SetIndices(indices, (MeshTopology)tv, i);
        }
        return m;
    }

    public static void WriteAniClip(FB.PosePlus.AniClip clip, System.IO.Stream ms)
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
    }

    public static FB.PosePlus.AniClip ReadAniClip(System.IO.Stream s)
    {
        var buf4 = new byte[4];

        var clip = new FB.PosePlus.AniClip();
        //name
        int slen = s.ReadByte();
        byte[] buf = new byte[slen];
        s.Read(buf, 0, slen);
        clip.name = System.Text.Encoding.UTF8.GetString(buf);
        //fps
        s.Read(buf4, 0, 4);
        clip.fps = BitConverter.ToSingle(buf4, 0);
        //loop
        clip.loop = s.ReadByte() > 0;
        {
            //boneinfo
            s.Read(buf4, 0, 4);
            int bcount = BitConverter.ToInt32(buf4, 0);

            for (int i = 0; i < bcount; i++)
            {
                slen = s.ReadByte();
                buf = new byte[slen];
                s.Read(buf, 0, slen);
                string bone = System.Text.Encoding.UTF8.GetString(buf);
                clip.boneinfo.Add(bone);
            }
        }
        {
            //subclips
            s.Read(buf4, 0, 4);
            int scount = BitConverter.ToInt32(buf4, 0);
            for (int i = 0; i < scount; i++)
            {
                FB.PosePlus.SubClip sc = new FB.PosePlus.SubClip();
                slen = s.ReadByte();
                buf = new byte[slen];
                s.Read(buf, 0, slen);
                sc.name = System.Text.Encoding.UTF8.GetString(buf);
                sc.loop = s.ReadByte() > 0;
                s.Read(buf4, 0, 4);
                sc.startframe = BitConverter.ToUInt32(buf4,0);
                s.Read(buf4, 0, 4);
                sc.endframe = BitConverter.ToUInt32(buf4,0);

                clip.subclips.Add(sc);
            }
        }
        {//frame
            s.Read(buf4, 0, 4);
            int fcount = BitConverter.ToInt32(buf4, 0);

            for (int i = 0; i < fcount; i++)
            {
                FB.PosePlus.Frame f = new FB.PosePlus.Frame();
                s.Read(buf4, 0, 4);
                f.fid = BitConverter.ToInt32(buf4, 0);
                f.key = s.ReadByte() > 0;
                clip.frames.Add(f);

                for (int ib = 0; ib < clip.boneinfo.Count; ib++)
                {
                    clip.frames[i].bonesinfo.Add(new FB.PosePlus.PoseBoneMatrix());
                    clip.frames[i].bonesinfo[ib].Load(s,
                        i > 0 ? clip.frames[i - 1].bonesinfo[ib] : null);
                }
            }
        }
        return clip;
    }
}
