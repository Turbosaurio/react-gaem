import React, { Component } from 'react';
import './App.css';
import Floor from './components/Floor';
import HeadMenu from './components/HeadMenu';
import MenuItems from './components/MenuItems';

class App extends Component{
  render(){
  	return(
  		<div>
  			<HeadMenu key={1} type="head-menu" items={MenuItems}/>
  			<div className="menu-container"><HeadMenu key={2} type="center-menu" items={MenuItems}/></div>
  			<div className="quick-container">
  				<a>Uno</a>
  				<a>Dos</a>
  				<a>Tres</a>
  				<a>Cuatro</a>
  			</div>
  			<Floor />
			</div>);
  }
}
module.exports=App;
   