uniform sampler2D aoMapTex ;
void main(void){
    diffuse.xyz * (texture2D( aoMapTex , varying_uv0 ).xyz+ vec3(0.5,0.5,0.5)) ;   
}

