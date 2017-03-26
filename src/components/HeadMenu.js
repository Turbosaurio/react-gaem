import React from 'react';

var HeadMenu=React.createClass({
	render: function(){
		var menu=
					(<nav className="head-menu">
						<img alt="" src=""/>
						<ul>
							<li><a href="#">About this</a></li>
							<li><a href="#">Products</a></li>
							<li><a href="#">Contact</a></li>
							<li><a href="#">Other stuff</a></li>
							<li><a onClick="" className='close' href="#">X</a></li>
						</ul>
					</nav>);
		return menu;
	}
});
module.exports=HeadMenu;