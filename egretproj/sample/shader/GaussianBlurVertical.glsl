varying vec2 uv ;
uniform sampler2D texture2D_1 ;


uniform float uniform_sceneHeight ; 

const int blurSize = 30 ;
const float bias = 0.1 ;
void main(void){

	float weightOffset = bias ;
	float blurOffset = 1.0 / uniform_sceneHeight ;
    vec3 tc = vec3(0.0, 0.0, 0.0);
	vec2 texCoord = uv ;
	tc = texture2D(texture2D_1, texCoord).xyz * weightOffset ;

    for (int i=0; i<blurSize; i++) 
    {
	   weightOffset = bias - bias * float(i)/float(blurSize) ;
       tc += texture2D(texture2D_1, uv.xy + vec2( float(i) * blurOffset , 0.0 ) ).xyz * weightOffset ;
       tc += texture2D(texture2D_1, uv.xy - vec2( float(i) * blurOffset , 0.0 ) ).xyz * weightOffset ;
    }

    gl_FragColor = vec4(tc, 1.0 );
}

