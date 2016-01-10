attribute vec3 attribute_acceleScale ;

void main(void){
	localPos.xyz *= (realTime / 1000.0 * realTime / 1000.0) * attribute_acceleScale.xyz * 0.5 ;
}