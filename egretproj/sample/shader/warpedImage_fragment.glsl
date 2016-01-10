varying vec2 uv;
uniform sampler2D texture2D_1;
uniform	vec3 _K ;
void main()
{
		float _K1 = _K.x ;	
		vec2 _texScale = vec2(_K.yz) ;	
		vec2 screenCenter = vec2(0.5,0.5);
		float norm = length(screenCenter);
		
		vec2 radial_vector = (uv - screenCenter)/norm;
		float radial_vector_len = length(radial_vector);
		vec2 radial_vector_unit = radial_vector.xy / radial_vector_len;
	
		float new_dist = radial_vector_len + _K1 * pow(radial_vector_len,3.0);
		vec2 warp_coord = radial_vector_unit * (new_dist * norm);
		warp_coord = warp_coord * _texScale;
		warp_coord = warp_coord + screenCenter;
	
		vec4 newColor = vec4(0.0,0.0,0.0,1.0);
		if ( (warp_coord.x > 1.0  || warp_coord.x < 0.0) || (warp_coord.y > 1.0 || warp_coord.y < 0.0) ){
			newColor = vec4(0.0,0.0,0.0,1.0);
			//discard;
		}else{
			newColor = texture2D (texture2D_1, vec2(warp_coord.x,warp_coord.y) );//1.0-1.0-
		}

		gl_FragColor = newColor;
	}