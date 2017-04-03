import React from 'react';

var HeadMenu=React.createClass({
	render: function(){
		var a=[];
		for(var i=0; i<this.props.items.length; i++){
			var dat=this.props.items[i];
				a.push(
						<li key={i}><a href={dat[1]}>{dat[0]}</a></li>
				);
		}
		var menu=
					(<nav className="head-menu">
						<img alt="" src=""/>
						<ul>
							{a}
							<li><a onClick="" className='close' href="#">&#10006;</a></li>
						</ul>
					</nav>);
		return menu;
	}
});
module.exports=HeadMenu;