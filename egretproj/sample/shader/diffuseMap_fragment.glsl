uniform sampler2D diffuseTex ;
void main(void){
    diffuse = texture2D( diffuseTex , varying_uv0 );
	if( materialSource.cutAlpha > diffuse.w ){
		 discard ;
	}
}

