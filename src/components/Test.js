import React from 'react';

var Test=React.createClass({
	render: function(){
		return(<div className="test">
			<h1>Hallo Welt</h1>
			<h2>Zweite Title</h2>
			<h3>Dritte Title</h3>
			<p>Ich heiße Reinhold und ich komme aus Mexiko. Ich spreche Spanisch und Englisch. Viele Worten</p>
			<p>Auf wiedersehen Leute</p>
		</div>);
	}
});

module.exports=Test;