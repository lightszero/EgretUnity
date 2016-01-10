attribute vec3 attribute_position ;
attribute vec2 attribute_uv0 ;

uniform mat4 uniform_ProjectionMatrix ;
varying vec2 uv ;
void main(void){
   uv = attribute_uv0 ;
   gl_Position = uniform_ProjectionMatrix * vec4(attribute_position,1.0) ;
}