
varying vec4 varying_pos        ;
void main() {
	gl_FragColor =  vec4( varying_pos.xyz/varying_pos.w , 1.0 ); 
}



