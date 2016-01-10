varying vec2 uv ;
uniform sampler2D texture2D_1 ;
uniform sampler2D texture2D_2 ;

void main(void){
	vec4 color = texture2D(texture2D_1, uv ) ;
	color = texture2D(texture2D_2, uv ) + color ;
    gl_FragColor = vec4(color.xyz, 1.0 );
}