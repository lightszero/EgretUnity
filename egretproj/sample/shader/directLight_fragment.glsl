const int max_directLight = 1 ;
uniform float uniform_directLightSource[11*max_directLight] ;

struct DirectLight{
    vec3 direction;
	vec3 diffuse;
	vec3 halfColor;
    float intensity;
    float halfIntensity;
};

void calculateDirectLight( MaterialSource materialSource ){
	float specularfract ;
	vec3 halfV,ldir;
	for(int i = 0 ; i < max_directLight ; i++){
          DirectLight l ;
		  l.direction = vec3(uniform_directLightSource[i*10+0],uniform_directLightSource[i*10+1],uniform_directLightSource[i*10+2]);
		  l.diffuse = vec3(uniform_directLightSource[i*10+3],uniform_directLightSource[i*10+4],uniform_directLightSource[i*10+5]);
		  l.halfColor = vec3(uniform_directLightSource[i*10+6],uniform_directLightSource[i*10+7],uniform_directLightSource[i*10+8]);
		  l.intensity = uniform_directLightSource[i*7+9];
		  l.halfIntensity = uniform_directLightSource[i*7+10];

		  vec3 N = normalize(normal) ;
		  ldir = normalize(l.direction) ;
		  float lambertTerm = min(1.0,max(0.0,dot(N,ldir))) ;		  
		  
		  light.xyz += l.diffuse * lambertTerm  * l.intensity ;
		  float halfLambertTerm = min(1.0,dot(N,-ldir));		  
		  light.xyz += ( halfLambertTerm * l.halfColor * 0.25 + l.halfColor * 0.25 ) * l.halfIntensity;

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
