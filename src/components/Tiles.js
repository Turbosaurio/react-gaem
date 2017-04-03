import React from 'react';
import Coord from './Coord';

var Tiles=React.createClass({
	render: function(){
		var coord=Coord(this.props.top,this.props.left),
				id=this.props.top;
		return(
			<div
				className="tile"
				id={id}
				style={coord}
			>
			{id}
			</div>);
	}
});
module.exports=Tiles;