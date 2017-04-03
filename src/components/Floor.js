import React from 'react';
import Tiles from './Tiles';
import Sizes from '../arrays/sizes';
import Rhombus from '../arrays/Rhombus';

var Floor=React.createClass({
	render: function(){
		var p=[], start=0;
		for(var i=0; i<Sizes.max; i++){
			for(var j=0; j<Sizes.max; j++){
				p.push(<Tiles
					index={start}
					top={i}
					left={Rhombus(Sizes.max+1)[start]}
					/>);
				start++;
			}
		};
		return <div className="floor">{p}</div>;
	}
});

module.exports=Floor;