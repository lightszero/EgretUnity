mat3 TBN ;

varying vec4 varying_pos        ;
varying vec2 varying_uv0        ;
varying vec3 varying_eyeNormal  ;
varying vec3 varying_tangent	;

vec4 test  ;
vec4 diffuse  ;
vec3 light    ;
vec3 specular ;
vec3 normal  ;

void main() {
	TBN[0] = varying_tangent ;
	TBN[2] = normalize( varying_eyeNormal.xyz ) ;
    TBN[1] = normalize( cross(TBN[0],TBN[2]) ); 
	normal = 0.5 * normalize(varying_eyeNormal.xyz) + vec3( 0.5 , 0.5 , 0.5 ) ;
	 
	diffuse =  vec4( varying_pos.xyz , 1.0 ); 
}



