import React from 'react';
import Coord from './Coord';
import Flip from '../helpers/FlipTile';

var Tiles=React.createClass({
	render: function(){
		var newCoord=Coord(this.props.index),
				dat=Flip(this.props.index);
		return <div className="tile" style={newCoord}>{dat}</div>
	}
});
module.exports=Tiles;