import React from 'react';
import Tiles from './Tiles';
import Sizes from '../arrays/sizes';

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