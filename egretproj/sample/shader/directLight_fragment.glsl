const int max_directLight = 1 ;
uniform float uniform_directLightSource[7*max_directLight] ;

struct DirectLight{
    vec3 direction;
	vec3 diffuse;
    float intensity;
};

void calculateDirectLight( MaterialSource materialSource ){
	float specularfract ;
	vec3 halfV,ldir;
	for(int i = 0 ; i < max_directLight ; i++){
          DirectLight l = DirectLight(  
			vec3(uniform_directLightSource[i*7+0],uniform_directLightSource[i*7+1],uniform_directLightSource[i*7+2]),
			vec3(uniform_directLightSource[i*7+3],uniform_directLightSource[i*7+4],uniform_directLightSource[i*7+5]),
			uniform_directLightSource[i*7+6]
		  );

		  vec3 N = normalize(normal) ;
		  ldir = normalize(l.direction) ;
		  float lambertTerm = min(1.0,max(0.0,dot(N,ldir))) ;		  
		  
		  light.xyz += (l.diffuse * lambertTerm*0.5 + l.diffuse*0.5) * l.intensity  ;

		  if(lambertTerm>0.0){
		     halfV = normalize(ldir + normalize(eyedir));
		     specularfract = max( dot(halfV, N ) , 0.0 );
		     specularfract = pow(specularfract, materialSource.shininess );
		     specular.w += specularfract ;
		  }
	};
}

void main() {
	calculateDirectLight( materialSource );
}
