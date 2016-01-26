using System.Security.Cryptography;
public class ResLibTool
{
    public static string HashToString(byte[] hash)
    {
        string _out = "";
        for (int i = 0; i < hash.Length; i++)
        {
            _out += hash[i].ToString("X02");
        }
        return _out;
    }

    public static byte[] StringToHash(string str)
    {

        byte[] bbs = new byte[str.Length / 2];

        for (int i = 0; i < bbs.Length; i++)
        {
            string hex = str.Substring(i * 2, 2);
            bbs[i] = byte.Parse(hex, System.Globalization.NumberStyles.HexNumber);
        }
        return bbs;
    }

    public static bool CheckHashString(string hashstr)
    {
        var hash = StringToHash(hashstr);
        var str2 = HashToString(hash);
        return str2 == hashstr;
    }
    static SHA1 sha1 = new SHA1Managed();
    //public static byte[] ComputeHash(byte[] bytes)
    //{
    //    return sha1.ComputeHash(bytes);

    //}
    public static string ComputeHashString(byte[] bytes)
    {
        var data = sha1.ComputeHash(bytes);
        return HashToString(data);
    }
    public static string ComputeHashString(string text)
    {
        byte[] bytes = System.Text.Encoding.UTF8.GetBytes(text);
        var data = sha1.ComputeHash(bytes);
        return HashToString(data);
    }

    public static byte[] GetStringBytes(string text)
    {
        return System.Text.Encoding.UTF8.GetBytes(text);
    }
}