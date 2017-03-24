import Sizes from './sizes';

function rotateArr(arr){
	var	tall=arr.length*2-1,
		iso=[],a,b,c=0;
	for(var k=0, m=tall; k<tall, m>0; k++,m--){
		var	y=k, x=0, u=k;
		if(k>arr.length-1){
			y=arr.length-1;
			x=k-arr.length+1;
			u=m-1;
		}
		iso.push([[y,x]]);
		a=iso[k][0][0];
		b=iso[k][0][1];
		for(var g=0;g<u;g++){
			a--;
			b++;
			iso[k].push([a,b]);
			c++;
		}
	}
	return iso;
}

var RotateArr=rotateArr(Max);
module.exports=RotateArr;