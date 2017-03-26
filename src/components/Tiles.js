import React from 'react';
import Coord from './Coord';
import Sizes from '../arrays/sizes';
import RotateArr from '../arrays/RotateArr.js';

var Tiles=React.createClass({
	render: function(){
		var newCoord=Coord(this.props.index),
				dat=RotateArr(Sizes.max)[this.props.index][0][0];
		return <div className="tile" style={newCoord}>{dat}</div>;
	}
});
module.exports=Tiles;