attribute vec3 attribute_speed ;

void main(void){
	localPos.xyz += realTime * attribute_speed.xyz ;
}