varying vec2 uv ;
uniform sampler2D texture2D_1 ;


void main(void){
  // vec4 lumfact = vec4(0.27,0.67,0.06,0.0); 
  // vec4 color = texture2D(texture2D_1,uv);
  // float lum = log(dot(color , lumfact) + 0.0001) + 0.1 ;
  // gl_FragColor = vec4(lum,lum,lum,1.0);
    
    vec4 color = texture2D( texture2D_1 , uv ) ;
    float intensity = 0.2990 * color.x + 0.5870 * color.y + 0.1140* color.z ;
    //intensity *= 0.2 ;
    color.xyz = color.xyz - vec3(intensity,intensity,intensity) ;
    gl_FragColor = color ; 

    
}
