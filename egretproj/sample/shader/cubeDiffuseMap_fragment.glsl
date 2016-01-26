uniform samplerCube diffuseTex ;
void main(void){
	diffuse = vec4(textureCube( diffuseTex , varying_pos.xyz ));
	if( materialSource.cutAlpha > diffuse.w ){
		 discard ;
	}
}

