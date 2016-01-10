mat3 TBN ;
struct MaterialSource{
    vec3 diffuse;
    vec3 ambient;
    vec3 specular;
    float alpha;
    float cutAlpha;
    float shininess;
	float diffusePower;
	float specularPower;
	float ambientPower;
	float normalPower;
};

varying vec4 varying_pos        ;
varying highp vec2 varying_uv0  ;
varying vec2 varying_uv1        ;
varying vec3 varying_eyeNormal  ;
varying vec4 varying_color		;
varying vec3 varying_eyedir		;
varying vec3 varying_tangent	;

uniform float uniform_materialSource[16];

vec4 test  ;
vec4 diffuse  ;
vec3 light    ;
vec4 specular ;
vec3 normal  ;
vec3 eyedir  ;
vec4 ttt  ;
void main() {
	test = vec4(1.0,1.0,1.0,1.0);
	ttt = vec4(1.0,1.0,1.0,0.0);
	diffuse = vec4(1.0,1.0,1.0,1.0);
	light   = vec3(0.0,0.0,0.0);
	normal = varying_eyeNormal ;
	MaterialSource materialSource = MaterialSource( 
		vec3(uniform_materialSource[0],uniform_materialSource[1],uniform_materialSource[2]) , 
		vec3(uniform_materialSource[3],uniform_materialSource[4],uniform_materialSource[5]) , 
		vec3(uniform_materialSource[6],uniform_materialSource[7],uniform_materialSource[8]) , 
		uniform_materialSource[9] , 
		uniform_materialSource[10] ,
		uniform_materialSource[11] , 
		uniform_materialSource[12] , 
		uniform_materialSource[13] , 
		uniform_materialSource[14] ,
		uniform_materialSource[15] 
		) ;
	specular = vec4(materialSource.specular,0.0);

	TBN[0] = -varying_tangent ;
	TBN[2] = normalize( normal.xyz ) ;
    TBN[1] = normalize( cross(TBN[0],TBN[2]) ); 

	eyedir = varying_eyedir.xyz - varying_pos.xyz ; 

}



