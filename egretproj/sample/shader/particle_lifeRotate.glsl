attribute vec3 attribute_lifeRotate ;

void main(void){
	localRot.xyz += realTime * attribute_lifeRotate.xyz;
}