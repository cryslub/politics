import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';
import BaseComponent from './BaseComponent.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class Result extends BaseComponent {
	

	

	apply = () => {
		const result = this.props.data;
		
		if( this.state.party != result.party || this.state.seats != result.seats){
			this.setState({party:result.party,seats:result.seats})
		}
		
	}
	
	save(){
		DataService.editResult(this.props.data.id,{party:this.state.party,seats:this.state.seats});
	}
	
	render() {
		const result = this.props.data;
		const parties=this.props.parties;
		
		return  <>
	  		<Select placeholder="party"   name="party" value={this.state.party+""} onChange={this.handleChange.bind(this)}>
	  			{parties.map(party=>{
	  				return <MenuItem value={party.id}>{party.id}</MenuItem>
	  			})}
	  		</Select>
	  		<InputBase placeholder="seats"  name="seats" value={this.state.seats} onChange={this.handleChange.bind(this)}/>
		  	<Button variant="contained" onClick={()=>this.save()}>save</Button>
		</>
	}
}