uniform sampler2D normalTex;

void main(void){
     normal = normalize( TBN * ( normalize(  (2.0 * ( texture2D( normalTex , varying_uv0 ).xyz - vec3( 0.5 , 0.5 , 0.5 ) )) ) ) ) ;
	 //normal.y *= materialSource.normalPower ; 
}






