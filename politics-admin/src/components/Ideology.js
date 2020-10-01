import React, { Component } from 'react';

import DataService from '../DataService.js';

import Names from './Names.js';
import BaseComponent from './BaseComponent.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

export default class Party extends BaseComponent {
	
	
	
	
	save(){
		DataService.editIdeology(this.props.data.id,this.state);
	}
	
	
	render() {
		const ideology = this.props.data;
		const names = this.props.nameService.getNames('ideology',ideology.id);
		
		return  <>
			{ideology.id} 
			<Names type='ideology' id={ideology.id}/><br/>
			<InputBase placeholder="acronym"   name="acronym" value={this.state.acronym} onChange={this.handleChange.bind(this)}/>			
			<InputBase placeholder="color"   name="color" value={this.state.color} onChange={this.handleChange.bind(this)}/>			

			<Button variant="contained" onClick={()=>this.save()}>save</Button>
			<br/>
		</>
	}
}