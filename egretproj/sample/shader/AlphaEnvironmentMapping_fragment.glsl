uniform samplerCube environmentMapTex ;
uniform float reflectValue;
void main(){
    eyedir.y = -eyedir.y ;
	diffuse.xyz = vec3(0.0,0.0,0.0);  
	vec3 r = reflect(-normalize(eyedir), normal  );
	vec4 reflectiveColor = textureCube(environmentMapTex,r.xyz);
	diffuse.xyz = mix( diffuse.xyz,reflectiveColor.xyz, 1.0 );  
}
         