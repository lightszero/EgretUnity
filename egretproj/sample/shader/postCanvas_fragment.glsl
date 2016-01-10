varying vec2 uv ;
uniform sampler2D texture2D_1 ;
void main(void){
   gl_FragColor = texture2D( texture2D_1 , uv ); 
}