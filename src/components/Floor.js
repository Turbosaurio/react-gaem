import React from 'react';
import Tiles from './Tiles';
import Sizes from '../arrays/sizes';
import Rhombus from '../arrays/Rhombus';
import RotateArr from '../arrays/RotateArr';
import Level from '../arrays/levels';

var Floor=React.createClass({
	render: function(){
		var p=[],
				start=0,
				top=RotateArr(Level),
				left=Rhombus(Sizes.max);
		for(var i=0; i<top.length; i++){
			for(var j=0; j<top[i].length; j++){
				console.log()
				p.push(<Tiles
					index={start}
					top={i.length}
					left={left[start]}
					/>);
				start++;
			}
		};
		return <div className="floor">{p}</div>;
	}
});

module.exports=Floor;