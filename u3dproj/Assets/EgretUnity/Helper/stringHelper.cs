using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

public class StringHelper
{
    public static string ToString(Color c)
    {
        return ToString((Color32)c);
    }
    public static string ToString(Color32 c)
    {
        return c.r + "," + c.g + "," + c.b + "," + c.a;
    }
    public static Color32 ToColor32(string str)
    {
        var strs = str.Split(',');
        return new Color32(byte.Parse(strs[0]), byte.Parse(strs[1]), byte.Parse(strs[2]), byte.Parse(strs[3]));
    }
    public static string ToString(Vector2 vec)
    {
        return vec.x + "," + vec.y;
    }
    public static Vector3 ToVector2(string str)
    {
        string[] s = str.Split(',');
        return new Vector2(float.Parse(s[0]), float.Parse(s[1]));
    }
    public static string ToString(Vector3 vec)
    {
        return vec.x + "," + vec.y + "," + vec.z;
    }
    public static Vector3 ToVector3(string str)
    {
        string[] s = str.Split(',');
        return new Vector3(float.Parse(s[0]), float.Parse(s[1]), float.Parse(s[2]));
    }
    public static string ToString(Vector4 vec)
    {
        return vec.x + "," + vec.y + "," + vec.z + "," + vec.w;
    }
    public static Vector4 ToVector4(string str)
    {
        string[] s = str.Split(',');
        return new Vector4(float.Parse(s[0]), float.Parse(s[1]), float.Parse(s[2]), float.Parse(s[3]));
    }
    public static string ToString(Quaternion vec)
    {
        return vec.x + "," + vec.y + "," + vec.z + "," + vec.w;
    }
    public static Quaternion ToQuaternion(string str)
    {
        string[] s = str.Split(',');
        return new Quaternion(float.Parse(s[0]), float.Parse(s[1]), float.Parse(s[2]), float.Parse(s[3]));
    }

}
