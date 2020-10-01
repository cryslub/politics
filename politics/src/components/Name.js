import React, { Component } from 'react';

import DataService from '../DataService.js';

import BaseComponent from './BaseComponent.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

export default class Name extends BaseComponent {
	
	

	init(){
		const name = this.props.name;
		
		if(!this.change &&( this.state.lang != name.lang || this.state.name != name.name)){
			this.setState({lang:name.lang,name:name.name})
			this.change = false;
		}
		
	}
	
	save(){
		DataService.editName(this.props.type,this.props.id,{lang:this.state.lang,name:this.state.name});
	}
	
	render() {
       return <ListItem button >
          		<InputBase placeholder="lang"   name="lang" value={this.state.lang} onChange={this.handleChange.bind(this)}/>
          		<InputBase placeholder="name"  name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
		     
	          	<Button variant="contained" onClick={()=>this.save()}>save</Button>
          </ListItem>
       	        	
	}
}