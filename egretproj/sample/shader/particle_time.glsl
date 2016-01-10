
//.x StartTime
//.y SpaceTime
//.z LifeTime
//.w isLoop
attribute vec4 attribute_time ;

void main(void){
	float startTime = attribute_time.x + attribute_time.y * attribute_position.w ;
	realTime = startTime + attribute_time.z ; 
	if ( mod(attribute_time.w, 10.0) == 1.0 ){
		realTime = mod( uniform_time , realTime );
		ratioTime = realTime / attribute_time.z;
	}
	else{
		realTime = uniform_time;
		if( realTime > attribute_time.z ){
			ratioTime = 0.0 ;
			localScal.xyz = localScal.xyz * ratioTime ; 
		}else{
			ratioTime = realTime / attribute_time.z;
		}
	}
	realTime = realTime - startTime ;
	if( realTime < 0.0 ){
		varying_color.w = 0.0 ; 
		realTime = 0.0 ; 
		localPos = vec3(0.0,0.0,0.0);
	}
}