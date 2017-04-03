var Rhombus=function(e){
	var arr=[];
	for(var i=1;i<e*2;i++){
		var qui=0;
		var usa,max=e;
		i>e ? usa=max-i%e : usa=i;
		for(var h=1;h<usa;h++){
			usa/2!=Math.round(usa/2) ? qui++ : qui=h%usa;
			arr.push([qui+h-usa]);
		};
	};
	return arr;
}
module.exports=Rhombus;