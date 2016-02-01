using UnityEngine;
using System.Collections;

public class com_testtpose : MonoBehaviour
{

    // Use this for initialization
    void Start()
    {
        var mats =
        this.GetComponent<SkinnedMeshRenderer>().sharedMesh.bindposes;

        foreach (var m in mats)
        {
            var gameo = new GameObject();
            var sub=GameObject.CreatePrimitive(PrimitiveType.Cube);
            gameo.transform.parent = this.transform;

            sub.transform.parent = gameo.transform;
            sub.transform.localPosition = Vector3.zero;
            sub.transform.localRotation = Quaternion.identity;
            sub.transform.localScale = new Vector3(0.05f, 0.05f, 0.05f);
            Vector3 pos;
            Vector3 scale;
            Quaternion quat;
            BitHelper.MatrixDeCompose(m.inverse, out pos, out scale, out quat);
            gameo.transform.localScale = scale;
            gameo.transform.localRotation = quat;
            gameo.transform.localPosition = pos;
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
