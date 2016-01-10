uniform sampler2D sky_texture ;
varying vec2 uv        ;
varying vec3 normal        ;

void main(void){
    vec4 color = texture2D( sky_texture , uv );
    gl_FragColor = color  ;
}

