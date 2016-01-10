const int max_pointLight = 0 ;
uniform float uniform_pointLightSource[7*max_pointLight] ;

struct PointLight{
        vec3 lightPos ;
        vec3 color ;
        float intensity;
};

void calculatePointLight(MaterialSource materialSource){
	vec3 ldir,halfV;
    float NdotL,dist,lambertTerm,specularfract;
	for(int i = 0 ; i < max_pointLight ; i++){
        //  PointLight L = PointLight(  
		//	vec3(uniform_pointLightSource[i*7],uniform_pointLightSource[i*7+1],uniform_pointLightSource[i*7+2]),
		//	vec3(uniform_pointLightSource[i*7+3],uniform_pointLightSource[i*7+4],uniform_pointLightSource[i*7+5]),
		//	uniform_pointLightSource[i*7+6]
		//  );

		PointLight L;
		L.lightPos = vec3(uniform_pointLightSource[i*7],uniform_pointLightSource[i*7+1],uniform_pointLightSource[i*7+2]);
		L.color = vec3(uniform_pointLightSource[i*7+3],uniform_pointLightSource[i*7+4],uniform_pointLightSource[i*7+5]);
		L.intensity = uniform_pointLightSource[i*7+6];


		  ldir = L.lightPos - varying_pos.xyz ;
		  dist = length(ldir);
		  ldir = normalize(ldir );
		  NdotL = max(dot(normalize(normal),ldir),0.0);
		  
		  lambertTerm = ( L.intensity  ) / ( dist * dist )  ;
		  light.xyz += lambertTerm * (NdotL * L.color.xyz) * 1000.0 ;

		  halfV = normalize(ldir - eyedir);

		  specularfract = max( dot(halfV,normal) , 0.0 );
		  specularfract = pow(specularfract, materialSource.shininess );
		  specular.xyz += materialSource.specular.xyz * specularfract * lambertTerm ;

	};
}

void main() {
   calculatePointLight(materialSource);
}
