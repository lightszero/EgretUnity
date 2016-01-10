attribute vec4 attribute_position ;
attribute vec3 attribute_offset ;
attribute highp vec2 attribute_uv0 ;

varying vec4 varying_pos        ;
varying highp vec2 varying_uv0        ;
varying vec2 varying_uv1        ;
varying vec3 varying_eyeNormal  ;
varying vec4 varying_color  ;
varying vec3 varying_eyedir  ;
varying vec3 varying_tangent	;

uniform mat4 uniform_ModelMatrix ;
uniform mat4 uniform_ProjectionMatrix ;
uniform mat4 uniform_normalMatrix ;
uniform vec3 uniform_eyepos ;
uniform float uniform_time ;

uniform mat4 uniform_testMatrix ;

vec3 localPos  ;
vec3 localRot  ;
vec3 localScal  ; 
vec4 color ;
highp float realTime ;
highp float ratioTime ;
const float pi = 3.1415926 ;
const float t = 16.666 ;

mat4 buildRotMat4(vec3 rot)
{
    mat4 ret = mat4(
	vec4(1.0, 0.0, 0.0, 0.0),
	vec4(0.0, 1.0, 0.0, 0.0),
	vec4(0.0, 0.0, 1.0, 0.0),
	vec4(0.0, 0.0, 0.0, 1.0)
	);

	float s;
	float c;

	s = sin(rot.x);
	c = cos(rot.x);
	
	ret *= mat4(
	vec4(1.0, 0.0, 0.0, 0.0),
	vec4(0.0, c, s, 0.0),
	vec4(0.0, -s, c, 0.0),
	vec4(0.0, 0.0, 0.0, 1.0)
	);
	
	s = sin(rot.y);
	c = cos(rot.y);
	
	ret *= mat4(
	vec4(c, 0.0, -s, 0.0),
	vec4(0.0, 1.0, 0.0, 0.0),
	vec4(s, 0.0, c, 0.0),
	vec4(0.0, 0.0, 0.0, 1.0)
	);

	s = sin(rot.z);
	c = cos(rot.z);

	ret *= mat4(
	vec4(c, s, 0.0, 0.0),
	vec4(-s, c, 0.0, 0.0),
	vec4(0.0, 0.0, 1.0, 0.0),
	vec4(0.0, 0.0, 0.0, 1.0)
	);

	return ret;
}

void main(void){

	localScal = vec3(1.0,1.0,1.0) ; 
	localPos = vec3(0.0,0.0,0.0) ; 
	localRot = vec3(0.0,0.0,0.0) ; 
	varying_color = vec4(1.0,1.0,1.0,1.0);
	varying_uv0 = attribute_uv0 ;

}