attribute float attribute_billboardXYZ ;
uniform mat4 uniform_cameraMatrix ;
uniform vec3 uniform_cameraRotate ;

void main(void){
	
	mat4 billboardMatrix;
	
	if ( attribute_billboardXYZ == 111.0 ){
		billboardMatrix = mat4(
				uniform_cameraMatrix[0],
				uniform_cameraMatrix[1],
				uniform_cameraMatrix[2],
				vec4(0.0, 0.0,1.0, 1.0));
	}
	else {
	
		billboardMatrix = mat4(
			vec4(1.0, 0.0, 0.0, 0.0),
			vec4(0.0, 1.0, 0.0, 0.0),
			vec4(0.0, 0.0, 1.0, 0.0),
			vec4(0.0, 0.0, 0.0, 1.0));
	
		if ( mod(attribute_billboardXYZ, 10.0) == 1.0 ){
			billboardMatrix *= mat4(
				vec4(1.0, 0.0, 0.0, 0.0),
				vec4(0.0, uniform_cameraMatrix[1].y, uniform_cameraMatrix[1].z, 0.0),
				vec4(0.0, uniform_cameraMatrix[2].y, uniform_cameraMatrix[2].z, 0.0),
				vec4(0.0, 0.0, 0.0, 1.0)
				);
		}
	
		if ( mod(attribute_billboardXYZ / 10.0, 10.0) == 1.0 ){
			billboardMatrix *= mat4(
				vec4(uniform_cameraMatrix[0].x, 0.0, uniform_cameraMatrix[0].z, 0.0),
				vec4(0.0, 1.0, 0.0, 0.0),
				vec4(uniform_cameraMatrix[2].x, 0.0, uniform_cameraMatrix[2].z, 0.0),
				vec4(0.0, 0.0, 0.0, 1.0)
				);
		}
	
		if ( mod(attribute_billboardXYZ / 100.0, 10.0) == 1.0 ){
			billboardMatrix *= mat4(
				vec4(uniform_cameraMatrix[0].x, uniform_cameraMatrix[0].y, 0.0, 0.0),
				vec4(uniform_cameraMatrix[1].x, uniform_cameraMatrix[1].y, 0.0, 0.0),
				vec4(0.0, 0.0, 1.0, 0.0),
				vec4(0.0, 0.0, 0.0, 1.0)
				);
		}
	
	}
	
	//localPos.xyz = (billboardMatrix * vec4(localPos.xyz, 1.0)).xyz;
}