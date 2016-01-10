struct Fog{
   vec3 fogColor  ;
   float globalDensity ;
   vec2 startDistance ;
   vec2 height ;
};

uniform float uniform_globalFog[8];
void main(void){
	//Fog fog = Fog( 
	//	vec3(uniform_globalFog[0],uniform_globalFog[1],uniform_globalFog[2]), 
	//	uniform_globalFog[3], 
	//	vec2(uniform_globalFog[4], uniform_globalFog[5]), 
	//	vec2(uniform_globalFog[6], uniform_globalFog[7]) 
	//);

	Fog fog;
	fog.fogColor = vec3(uniform_globalFog[0],uniform_globalFog[1],uniform_globalFog[2]);
	fog.globalDensity = uniform_globalFog[3];
	fog.startDistance = vec2(uniform_globalFog[4], uniform_globalFog[5]);
	fog.height = vec2(uniform_globalFog[6], uniform_globalFog[7]) ;


	float d = distance(varying_eyedir.xyz,varying_pos.xyz);
	float distFog = max( 0.0 , d - fog.startDistance.x )* fog.startDistance.y;
	float fogFactor = (1.0-exp(-fog.globalDensity * distFog )) ;//* exp(-yFog);
	diffuse.xyz = mix( diffuse.xyz  , fog.fogColor , min(fogFactor,1.0) );
}




 