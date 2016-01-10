uniform sampler2D lightMapTex ;
void main(void){
    diffuse.xyz *= texture2D( lightMapTex , varying_uv1 ).xyz * 2.0 ;
}

