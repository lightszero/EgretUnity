//.x startScale
//.y endScale
attribute vec3 attribute_scale ;

void main(void){

	localScal.xyz += (attribute_scale.y - attribute_scale.x) * ratioTime + attribute_scale.x;
}