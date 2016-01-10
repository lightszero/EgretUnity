uniform mat4 uniform_shadowMatrix ;
varying vec4 shadowPosition ;
void main(void){
    shadowPosition = uniform_shadowMatrix * (uniform_ModelMatrix * vec4(attribute_position,1.0)) ;
}

