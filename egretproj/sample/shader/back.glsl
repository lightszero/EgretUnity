
struct MaterialSource{
    vec4 ambient;
    vec4 diffuse;
    vec4 specular;
    vec4 emission;
};

struct LightModelSource{
    vec4 ambient;
};

struct LightSource{
    int lightType;//0 dir 1 point 2 sport
    vec3 position;
    float spotExponent;
    vec3 spotDirection;
    float spotCutoff; // (range: [0.0,90.0], 180.0)
    vec3 halfVector;
    float spotCosCutoff; // (range: [1.0,a0.0],-1.0)
    vec3 ambient;
    float constantAttenuation;
    vec3 diffuse;
    float linearAttenuation;
    vec3 specular;
    float quadraticAttenuation;
};

varying vec4 varying_pos        ;
varying vec3 varying_normal     ;
varying vec2 varying_uv0        ;
varying vec3 varying_eyeNormal  ;
varying vec4 varying_color      ;

uniform vec4 uniform_materialSource[4];
uniform vec4 uniform_lightModelSource ;
uniform float uniform_LightSource[25];
//uniform lightModelSource uniform_lightModelSource[1];


void main() {
        vec3 normal, lightDir;
        vec4 diffuse, ambient, globalAmbient , finalColor ;
        float NdotL;
        finalColor = vec4(0.0,0.0,0.0,0.0);
        normal = normalize(varying_eyeNormal);

        MaterialSource frontMaterial = MaterialSource( materialSource[0] , materialSource[1] , materialSource[2] , materialSource[3] ) ;
        LightModelSource lightModel = LightModelSource( uniform_lightModelSource );

        for(int i = 0 ; i < 1 ; i++){
                     LightSource light = LightSource(
                         int(uniform_LightSource[i]),
                         vec3(uniform_LightSource[i+1],uniform_LightSource[i+2],uniform_LightSource[i+3]),
                          uniform_LightSource[i+4],
                          vec3( uniform_LightSource[i+5],uniform_LightSource[i+6],uniform_LightSource[i+7]),
                          uniform_LightSource[i+8],
                          vec3( uniform_LightSource[i+9],uniform_LightSource[i+10],uniform_LightSource[i+11]),
                          uniform_LightSource[i+12],
                          vec3( uniform_LightSource[i+13],uniform_LightSource[i+14],uniform_LightSource[i+15]),
                          uniform_LightSource[i+16],
                          vec3( uniform_LightSource[i+17],uniform_LightSource[i+18],uniform_LightSource[i+19]),
                          uniform_LightSource[i+20],
                          vec3( uniform_LightSource[i+21],uniform_LightSource[i+22],uniform_LightSource[i+23]),
                          uniform_LightSource[i+24]
                     );

                     if( light.lightType == 0 ){
                         normal = normalize(varying_eyeNormal);
                         lightDir = normalize(light.position);
                         NdotL = max(dot(normal, lightDir), 0.0);
                         diffuse = vec4( frontMaterial.diffuse.xyz * light.diffuse , frontMaterial.diffuse.w );
                         //* Compute the ambient and globalAmbient terms */
                         ambient = vec4( frontMaterial.ambient.xyz * light.ambient , frontMaterial.ambient.w );
                         globalAmbient = frontMaterial.ambient * lightModel.ambient ;
                         finalColor +=  NdotL * diffuse + globalAmbient + ambient;
                     }
                 }
        gl_FragColor =  finalColor ;
}

                                 color += att * (diffuse.xyz * NdotL + ambient.xyz);
                                                               halfV = normalize(halfVector);
                                                               NdotHV = max(dot(n,halfV),0.0);
                                                               color += att * frontMaterial.specular.xyz * light.specular.xyz *
                                                                               pow(NdotHV,frontMaterial.shininess);