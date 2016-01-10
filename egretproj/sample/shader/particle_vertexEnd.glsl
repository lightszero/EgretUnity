void main(void){
	vec4 temp_p = uniform_ProjectionMatrix * uniform_ModelMatrix * ( (billboardMatrix * (buildRotMat4(localRot) * vec4(attribute_position.xyz * localScal,1.0))) + vec4(attribute_offset.xyz+localPos.xyz,1.0));
	//vec4 temp_p = uniform_ProjectionMatrix * uniform_ModelMatrix * billboardMatrix * (buildRotMat4(vec3(0.0,0.0,0.0)) * vec4(attribute_position.xyz ,1.0));

}