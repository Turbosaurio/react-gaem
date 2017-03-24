import Sizes from '../arrays/sizes'
var coords=[];
for(var i=0;i<Sizes.max;i++){
	coords.push(i);
}

var coord=function(e){
	return{
		top: coords[e]*Sizes.width,
		left: coords[e]*Sizes.width,
		width: Sizes.width,
		height: Sizes.width
	}
}

module.exports=coord;