var Rhombus=function(e){
	var arr=[];
	for(var i=0; i<e*2; i++){
		var qui=0,
				aux= i>e ? e-i%e : i;
		for(var h=1;h<aux;h++){
			aux/2!=Math.round(aux/2) ? qui++ : qui=h%aux;
			arr.push([qui+h-aux]);
		};
	};
	return arr;
}
module.exports=Rhombus;