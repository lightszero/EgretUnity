uniform samplerCube environmentMapTex ;
void main(){
  	vec3 r = reflect(-normalize(eyedir),  normal  );
	vec4 reflectiveColor = textureCube(environmentMapTex,r.xyz);
	 diffuse.xyz += mix( diffuse.xyz,reflectiveColor.xyz, 0.2  );  
}
 




 
// uniform samplerCube environmentMapTex ;
//void main(){
//  	vec3 r = reflect(-normalize(eyedir),  normal  );
//	vec4 reflectiveColor = textureCube(environmentMapTex,r.xyz);
//	 diffuse.xyz = mix( diffuse.xyz,reflectiveColor.xyz, ttt.w  );  
//}
              

			     vec3 viewDir = normalize(eyedir);
   vec3 r = reflect(-viewDir,  normal  );
	 //vec4 reflectiveColor = textureCube(environmentMapTex,r.xyz);
	 //diffuse.xyz += mix( diffuse.xyz,reflectiveColor.xyz, 0.5  );  
	
	 vec4 c = textureCube(environmentMapTex,r.xyz) * 1.0;
	float rim = dot(normal,normalize(r));//clamp(dot(normal,normalize(viewDir)), 0.0, 1.0);

	// rim = pow( rim ,1.0);
	
	
   gl_FragColor =  diffuse + c * rim ;