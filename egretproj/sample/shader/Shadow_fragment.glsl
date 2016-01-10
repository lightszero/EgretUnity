varying vec4 varying_globalpos ;
varying vec2 varying_uv0        ;

uniform sampler2D diffuseTex ;

vec4 pack(float fDist)
{
   vec4 bitSh = vec4( 256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
   vec4 bitMsk = vec4( 0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
   vec4 comp;
   comp = fDist * bitSh;
   comp = fract(comp);
   comp -= comp.xxyz * bitMsk;
   return vec4(comp.y, comp.z, comp.w, comp.x);
}

void main(void){
	vec4 color = texture2D( diffuseTex , varying_uv0 );
	if( 0.3 > color.w ){
		 discard ;
	}

	vec3 glFragCoord  = (varying_globalpos.xyz / varying_globalpos.w) * 0.5 + 0.5;
    vec4 diffuse = pack( glFragCoord.z );
}
 