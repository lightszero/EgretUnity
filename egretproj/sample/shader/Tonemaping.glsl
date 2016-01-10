varying vec2 uv ;

uniform sampler2D texture2D_1;
uniform sampler2D texture2D_2;


void main(void){
	vec4 lumfact = vec4(0.27,0.67,0.06,0.0);
	float AveLum = 15.0;
	float Key= 0.75 ;
	vec4 color = texture2D(texture2D_1,uv);
    float lum = dot(color , lumfact);
    color *= Key *lum/AveLum;
    color /= vec4(vec4(1.0,1.0,1.0,0.0)+color);
    gl_FragColor = clamp(color + texture2D(texture2D_2,uv)*1.3, 0.0,1.0);

}
