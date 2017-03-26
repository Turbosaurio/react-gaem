function Rhombus(height,width){
	var arr=[], p=0;
	for(var i=1;i<height*2;i++){
		var qui=0;
		var mex,max=height;
		i>height ? mex=max-i%height : mex=i;
		for(var h=1;h<mex;h++){
			mex/2!=Math.round(mex/2) ? qui++ : qui=h%mex;
			arr.push([qui+h-mex]*width);
			p++;
		};
	};
	return arr;
}
module.exports=Rhombus;