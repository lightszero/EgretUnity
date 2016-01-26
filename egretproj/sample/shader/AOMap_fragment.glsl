uniform sampler2D aoMapTex ;
uniform float aoPower ;
void main(void){
    float ao = texture2D( aoMapTex , varying_uv1 ).x ;
	vec3 cc = (1.0-ao) * ttt.xyz * (1.0-aoPower);
	diffuse.xyz *= (ao * aoPower + cc) ; 
}

