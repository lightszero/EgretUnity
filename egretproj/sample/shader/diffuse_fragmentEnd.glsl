void main() {

	//float lambertTerm = min(1.0,max(0.0,dot(normal,normalize(eyedir)))) * 0.5 + 0.5;		  
	//diffuse.xyz = diffuse.xyz * lambertTerm  ;

	ttt.xyz = materialSource.ambient.xyz * materialSource.ambientPower;
	light.xyz = light.xyz + ttt.xyz;
	specular.xyz = specular.w * (specular.xyz * materialSource.specular * materialSource.specularPower);
	diffuse.w = varying_color.w * materialSource.alpha * diffuse.w ;
	diffuse.xyz = diffuse.xyz * materialSource.diffusePower ;
	
	diffuse.xyz = ( (light.xyz+specular.xyz) * shadow.xyz + ttt.xyz ) * diffuse.xyz  ;
	diffuse.xyz = diffuse.xyz / diffuse.w;
	diffuse.xyz *= varying_color.xyz ;

}


