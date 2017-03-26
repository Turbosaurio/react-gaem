import Sizes from '../arrays/sizes';
import RotateArr from '../arrays/RotateArr';
import Rhombus from '../arrays/Rhombus';

var	coords=RotateArr(Sizes.max),
		floorPos=Sizes.max*Sizes.width;

var coord=function(e){
	return{
		left: Rhombus(Sizes.max)[e]*Sizes.width,
		top: e*Sizes.height,
		width: Sizes.width,
		height: Sizes.height
	}
}

module.exports=coord;