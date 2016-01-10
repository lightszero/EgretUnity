uniform vec4 uniform_directLightSource[7] ;
const int max_directLight = 4 ;

struct DirectLight{
    vec3 dir;
    vec3 diffuseColor;
    float intensity;
};

void main() {
    for( int i = 0 ; i < max_directLight ; i++ ) {
            //DirectLight l = DirectLight( uniform_directLightSource[i*2].xyz , uniform_directLightSource[i*2+1].xyz , uniform_directLightSource[i*2+1].w ) ;
			DirectLight l;
			l.dir = uniform_directLightSource[i*2].xyz;
			l.diffuseColor = uniform_directLightSource[i*2+1].xyz;
			l.intensity = uniform_directLightSource[i*2+1].w;

            vec3 N = normalize(varying_normal);
            vec3 L = l.dir ;
            float lambertTerm = max(0.0,dot(N,L)) ;
            //lightColor.xyz +=  vec3( l.intensity,l.intensity,l.intensity) ;
            lightColor.xyz += lambertTerm * l.intensity ;
    }
}
