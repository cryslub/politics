import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

export default class Region extends Component {
	
	
	constructor(){
		super();
		
		
		this.state = {
		}
		
	}
	

	
	render() {
		const region = this.props.data;
		const name = this.props.nameService.getName('region',region.id);
		
		return  <ListItem button onClick={()=>this.props.select(region.id)}>
		        <ListItemText primary= {name.name} />
		       
		    </ListItem>
	}
}