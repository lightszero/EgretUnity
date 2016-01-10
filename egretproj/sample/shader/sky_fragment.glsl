uniform samplerCube sky_texture ;
//uniform sampler2D diffuseTex ;
varying vec3 varying_pos   ;
void main(void){
	//vec4 diffuse = texture2D( diffuseTex , varying_pos.xy );
	vec4 ref = vec4(textureCube( sky_texture , varying_pos.xyz ));
    gl_FragColor = ref ;
}


