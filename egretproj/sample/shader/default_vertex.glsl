attribute highp vec3 attribute_position ;
attribute vec3 attribute_normal ;
attribute vec3 attribute_tangent ;
attribute vec4 attribute_color ;
attribute vec2 attribute_uv0 ;
attribute vec2 attribute_uv1 ;

uniform mat4 uniform_ModelMatrix ;
uniform mat4 uniform_ProjectionMatrix ;
uniform mat4 uniform_normalMatrix ;
uniform vec3 uniform_eyepos ;

varying vec4 varying_pos        ;
varying vec4 varying_globalpos        ;
varying highp vec2 varying_uv0        ;
varying vec2 varying_uv1        ;
varying vec3 varying_eyeNormal  ;
varying vec4 varying_color  ;
varying vec3 varying_eyedir  ;
varying vec3 varying_tangent	;

void main(void){
   highp vec4 temp_p ;

   temp_p =  uniform_ModelMatrix * vec4(attribute_position,1.0) ;

   varying_eyedir = uniform_eyepos ;
   varying_pos =  temp_p ;

   temp_p = uniform_ProjectionMatrix * temp_p ;
   varying_globalpos = temp_p ; 

   //varying_pos.w = temp_p.z / temp_p.w ;
   varying_eyeNormal =  (uniform_normalMatrix*vec4(attribute_normal,0.0) ).xyz ;
   varying_uv0 = attribute_uv0;
   varying_uv1 = attribute_uv1;

   varying_color = attribute_color ;
   varying_tangent = normalize((uniform_ModelMatrix * vec4( attribute_tangent,0.0 )).xyz) ; 
}