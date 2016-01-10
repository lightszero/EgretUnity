const int max_sportLight = 1 ;
uniform float uniform_sportLightSource[14*max_sportLight] ;

struct SpotLight{
       vec3 lightPos ;
       vec3 spotDirection ;
       vec3 spotColor ;
       float spotExponent ;
       float spotCosCutoff ;
       float constantAttenuation ;
       float linearAttenuation ;
       float quadrAttenuation ;
};

void calculateSpotLight( MaterialSource materialSource ){
	vec3 ldir,halfV;
	float NdotL,dist,att,spotEffect,specularfract;
	for(int i = 0 ; i < max_sportLight ; i++){
			//SpotLight L = SpotLight(  
			//	vec3(uniform_sportLightSource[i*max_sportLight],uniform_sportLightSource[i*max_sportLight+1],uniform_sportLightSource[i*max_sportLight+2]),
			//	vec3(uniform_sportLightSource[i*max_sportLight+3],uniform_sportLightSource[i*max_sportLight+4],uniform_sportLightSource[i*max_sportLight+5]),
			//	vec3(uniform_sportLightSource[i*max_sportLight+6],uniform_sportLightSource[i*max_sportLight+7],uniform_sportLightSource[i*max_sportLight+8]),
			//	uniform_sportLightSource[i*max_sportLight+9],
			//	uniform_sportLightSource[i*max_sportLight+10],
			//	uniform_sportLightSource[i*max_sportLight+11],
			//	uniform_sportLightSource[i*max_sportLight+12],
			//	uniform_sportLightSource[i*max_sportLight+13]
			//);

			SpotLight L;
			L.lightPos = vec3(uniform_sportLightSource[i*max_sportLight],uniform_sportLightSource[i*max_sportLight+1],uniform_sportLightSource[i*max_sportLight+2]);
			L.spotDirection = vec3(uniform_sportLightSource[i*max_sportLight+3],uniform_sportLightSource[i*max_sportLight+4],uniform_sportLightSource[i*max_sportLight+5]);
			L.spotColor = vec3(uniform_sportLightSource[i*max_sportLight+6],uniform_sportLightSource[i*max_sportLight+7],uniform_sportLightSource[i*max_sportLight+8]);
			L.spotExponent = uniform_sportLightSource[i*max_sportLight+9];
			L.spotCosCutoff = uniform_sportLightSource[i*max_sportLight+10];
			L.constantAttenuation = uniform_sportLightSource[i*max_sportLight+11];
			L.linearAttenuation = uniform_sportLightSource[i*max_sportLight+12];
			L.quadrAttenuation = uniform_sportLightSource[i*max_sportLight+13];
		   
		     ldir = normalize( L.lightPos.xyz - varying_pos.xyz );
		     NdotL = max(dot(normal,ldir),0.0);
			 dist = length(ldir);

		     spotEffect = dot(normalize(L.spotDirection), normalize(ldir));
		    if (spotEffect > L.spotCosCutoff )
		    {
		        spotEffect = pow(spotEffect, L.spotExponent);
		        att = spotEffect / (L.constantAttenuation + L.linearAttenuation * dist + L.quadrAttenuation * dist * dist) ;
				light.xyz += att * L.spotColor.xyz * NdotL ;
		    }

		  halfV = normalize(ldir - eyedir);

		  specularfract = max( dot(halfV,normal) , 0.0 );
		  specularfract = pow(specularfract, materialSource.shininess );
		  specular.w += specularfract ;
	};
}

void main() {
	calculateSpotLight( materialSource );
}
