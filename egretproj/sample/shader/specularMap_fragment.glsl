uniform sampler2D specularTex;

void main(void){
    specular.xyz = texture2D( specularTex , varying_uv0 ).xyz ;
}

