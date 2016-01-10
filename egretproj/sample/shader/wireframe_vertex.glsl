attribute vec3 attribute_position ;

varying vec4 varying_color ;

uniform mat4 uniform_ModelMatrix ;
uniform mat4 uniform_ProjectionMatrix ;
uniform vec4 uniform_color ;
uniform float uniform_pointSize = 1.0 ;

void main(void){
	varying_color = uniform_color;
	gl_PointSize = uniform_pointSize;
	gl_Position = uniform_ProjectionMatrix * uniform_ModelMatrix * vec4(attribute_position,1.0) ;
}