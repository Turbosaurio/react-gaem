import React, { Component } from 'react';
import './App.css';
import Floor from './components/Floor';
import HeadMenu from './components/HeadMenu';
import MenuItems from './components/MenuItems';

class App extends Component{
  render(){
  	return(
  		<div>
  			<HeadMenu key={1} items={MenuItems}/>
  			<Floor />
			</div>);
  }
}
module.exports=App;
   