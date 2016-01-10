attribute vec3 attribute_position ;
attribute vec3 attribute_normal ;
attribute vec2 attribute_uv0 ;

uniform mat4 uniform_ProjectionMatrix ;
uniform mat4 uniform_ModelMatrix ;
uniform mat4 uniform_normalMatrix ;

varying vec3 normal        ;
varying vec2 uv        ;


void main(void){

    vec4 vVert4 = uniform_ModelMatrix * vec4(attribute_position,1.0) ;
    gl_Position = uniform_ProjectionMatrix * vVert4 ;


	// Normal in Eye Space
    vec3 vEyeNormal =  normalize(attribute_position);
    
    // Vertex position in Eye Space
    float pi = 3.1415926 ;

    // Pass on the texture coordinates 
    uv.x = vEyeNormal.x / pi + 0.5 ;
    uv.y = vEyeNormal.y / pi + 0.5 ;

	uv = attribute_uv0 ;
}