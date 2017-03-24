var React = require ('react');
var Tiles = require ('./Tiles');
var Sizes = require ('../arrays/sizes');

var Floor=React.createClass({
	render: function(){
		var p=[];
		for(var i=0; i<Sizes.max; i++){
			p.push(
				<Tiles key={i} index={i}/>
			);
		}
		return <div className="floor">{p}</div>;
	}
});

module.exports=Floor;