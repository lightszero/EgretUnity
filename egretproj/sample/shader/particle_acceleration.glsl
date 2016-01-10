attribute vec3 attribute_acceleration ;

void main(void){
	localPos.xyz += realTime * realTime * attribute_acceleration.xyz * 0.5 ;
}