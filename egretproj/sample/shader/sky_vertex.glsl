attribute vec3 attribute_position ;
uniform mat4 uniform_ProjectionMatrix ;
uniform mat4 uniform_ModelMatrix ;
varying vec3 varying_pos        ;
void main(void){
   varying_pos =  attribute_position ;
   gl_Position = uniform_ProjectionMatrix * uniform_ModelMatrix * vec4(varying_pos,1.0) ;
}