uniform vec4 uniform_skyLightSource ;
vec3 skyLight(){
    vec3 frontColor = vec3(1.0,1.0,1.0);
    vec3 backColor = vec3(1.0,1.0,1.0);
	vec3 dirlightDir = vec3( 0.0,1.0,0.0);
    float s =  max(0.0 , dot( normalize(varying_normal) , dirlightDir) ) ;
    frontColor = uniform_skyLightSource.xyz * (s * 0.5 + 0.5 )  * uniform_skyLightSource.w ;
    return frontColor ;
}

void main(){
    lightColor.xyz = skyLight() ;
}