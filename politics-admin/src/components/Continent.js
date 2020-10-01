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
		const continent = this.props.data;
		const names = this.props.nameService.getNames('continent',continent.id);
		
		return  <ListItem button >
		        <ListItemText primary={continent.id} />
		        
		        <List component="div" disablePadding>
			        {Object.keys(names).map((key,i)=>{
			        	const name = names[key];			        	
				       return <Name name={name} type='continent' id={continent.id}/>		        	
			        })}
		        </List>
			    <Button variant="contained" onClick={()=>DataService.addName('continent',continent.id)}>+name</Button>
			    
			 
		    
		    </ListItem>
	}
}