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
	

	

	
	save(){
		DataService.editResult(this.props.data.id,this.state);
	}
	
	render() {
		const result = this.props.data;
		const parties=this.props.parties;
		const affiliations=this.props.affiliations;
		
		return  <>
	  		<Select placeholder="party"   name="party" value={this.state.party+""} onChange={this.handleChange.bind(this)}>
	  			{parties.map(party=>{
	  				return <MenuItem value={party.id}>{party.acronym}</MenuItem>
	  			})}
	  		</Select>
	  		<InputBase placeholder="seats"  name="seats" value={this.state.seats} onChange={this.handleChange.bind(this)}/>
	  		<InputBase placeholder="rate"  name="rate" value={this.state.rate} onChange={this.handleChange.bind(this)}/>

	  		<Select placeholder="affiliation"   name="affiliation" value={this.state.affiliation+""} onChange={this.handleChange.bind(this)}>
	  			{Object.keys(affiliations).map(key=>{
	  				var affiliation = affiliations[key];
	  				return <MenuItem value={affiliation.id}>{affiliation.acronym}</MenuItem>
	  			})}
	  		</Select>

	  		<Button variant="contained" onClick={()=>this.save()}>save</Button>
		</>
	}
}