uniform samplerCube environmentMapTex ;
uniform float reflectValue;

const float g_fEta = 0.66; 
const float g_fEtaR = 0.65;
const float g_fEtaG = 0.67;
const float g_fEtaB = 0.69; 
const float g_fFresnelPower = 0.8;
void main(){
	float f = ((1.0-g_fEta) * (1.0-g_fEta)) / ((1.0+g_fEta) * (1.0+g_fEta)); 

	float g_fFresnelRatio = f + (1.0 - f) * pow((1.0 - dot(-normalize(eyedir), normal)),g_fFresnelPower); 
	vec3 NV = -normalize(eyedir) ;
	vec3 N =normalize(normal);
	
	vec3  g_vec3Reflect = reflect(NV, N);
	g_vec3Reflect.y = g_vec3Reflect.y;
	vec3 g_vec3Refract = refract(NV, N, g_fEta);
	g_vec3Refract.y = g_vec3Refract.y;

	vec3 vec3ReflectColor = vec3(textureCube(environmentMapTex, g_vec3Reflect));
	vec3 vec3RefractColor = vec3(textureCube(environmentMapTex, g_vec3Refract));
	vec3 vec3FinalColor = mix(vec3RefractColor, vec3ReflectColor, g_fFresnelRatio);
	diffuse.xyz = diffuse.xyz + vec3FinalColor ;  
}
         

