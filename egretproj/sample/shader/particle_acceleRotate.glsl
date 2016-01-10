attribute vec3 attribute_acceleRotate ;

void main(void){
	localRot.xyz += realTime * realTime * attribute_acceleRotate.xyz * 0.5 ;
}