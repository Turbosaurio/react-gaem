import Sizes from '../arrays/sizes';

var coord=function(y,x){
	var	//top=e*Sizes.height,
			top=y*Sizes.height,
			left=x*Sizes.width;
	return{
		left: left+400,
		top: top+50,
		width: Sizes.width,
		height: Sizes.height
	}
}

module.exports=coord;