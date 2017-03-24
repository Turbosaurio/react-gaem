import Sizes from '../arrays/sizes'

var	coords=[],
	floorPos=Sizes.max*Sizes.width;
for(var i=0;i<Sizes.max;i++){
		coords.push(i);

}

var coord=function(e){
	return{
		left: coords[e]*Sizes.width+floorPos,
		top: coords[e]*Sizes.width,
		width: Sizes.width,
		height: Sizes.width
	}
}

module.exports=coord;