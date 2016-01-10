varying vec4 varying_pos        ;
varying vec2 varying_uv0        ;
varying vec3 varying_eyeNormal  ;
varying vec4 varying_color  ;
varying vec3 varying_eyedir  ;
varying mat3 TBN ;

uniform vec4 uniform_materialSource[4] ;

vec4 ambientColor  ;
vec4 diffuseColor  ;
vec4 specularColor ;
vec4 lightColor  ;
vec3 normalTexC ;

uniform sampler2D diffuseTexture ;
void main(void){
	 ambientColor= vec4( 1.0,1.1,0.1,1.0);
	 lightColor = vec4( 1.0,1.0,1.0,1.0);
	 specularColor = vec4( 1.0,1.0,1.0,1.0);
	 normalTexC = vec3( 1.0,1.0,1.0);
	 vec3 normal = normalize(varying_eyeNormal);

     diffuseColor = texture2D( diffuseTexture , varying_uv0 );

	 gl_FragColor = diffuseColor * lightColor ;//diffuseColor * ( lightColor + ambientColor + specularColor )  ;//diffuseColor * (lightColor + ambientColor + specularColor) ;// diffuseColor * lightColor ;//diffuseColor * lightColor ;
}

