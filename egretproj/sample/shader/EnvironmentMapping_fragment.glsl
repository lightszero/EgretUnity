uniform samplerCube environmentMapTex ;
uniform float reflectValue;
void main(){
  	vec3 r = reflect(-normalize(eyedir),  normal  );
	vec4 reflectiveColor = textureCube(environmentMapTex,r.xyz);
	diffuse.xyz = mix( diffuse.xyz,reflectiveColor.xyz, reflectValue );  
}
         