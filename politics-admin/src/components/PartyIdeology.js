import React, { Component } from 'react';

import DataService from '../DataService.js';

import BaseComponent from './BaseComponent.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



export default class PartyIdeology extends BaseComponent {
	
	

	apply = () => {
		const result = this.props.data;
		
		if( this.state.ideology != result.ideology  ){
			this.setState({ideology:result.ideology})
		}
		
	}
	
	
	save = ()=>{
		DataService.editPartyIdeology(this.props.data.id,{ideology:this.state.ideology});
	}
	
	render() {
		const self = this;
		var ideologies = Object.keys(self.props.ideologies).map(key=>{
			return self.props.ideologies[key];
		}).sort((a, b) => a.acronym > b.acronym ? 1 : -1)
		
		
       return<>
       	<Select name="ideology" value={this.state.ideology+""} onChange={this.handleChange.bind(this)}>
       		<MenuItem value={0}></MenuItem>
	  		{
	  			ideologies.map(ideology=>{
	   				
	   				return <MenuItem value={ideology.id}>{ideology.acronym}</MenuItem>
	   			})
	   		}
	   </Select>		        	
		<Button variant="contained" onClick={this.save}>save</Button>		       
	   </>

       	        	
	}
}