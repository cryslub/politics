import React, { Component } from 'react';

import DataService from '../DataService.js';

import Names from './Names.js';
import BaseComponent from './BaseComponent.js';
import PartyIdeology from './PartyIdeology.js';
import CoalitionParty from './CoalitionParty.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import {MainContext} from '../MainContext.js';


export default class Party extends BaseComponent {
	
	

	
	save(){
		DataService.editParty(this.props.data.id,this.state);
	}
	
	
	render() {
		
		const self = this;
		const party = this.props.data;
		const affiliations = this.props.affiliations;
		
		return <MainContext.Consumer>
	    {main=>(
	    		<>
			{party.id} 
			<Names type='party' id={party.id}/><br/>
			<InputBase placeholder="logo"   name="logo" value={this.state.logo} onChange={this.handleChange.bind(this)}/>			
			<InputBase placeholder="acronym"   name="acronym" value={this.state.acronym} onChange={this.handleChange.bind(this)}/>			
			<InputBase placeholder="color"   name="color" value={this.state.color} onChange={this.handleChange.bind(this)}/>
			<InputBase placeholder="hide"   name="hide" value={this.state.hide} onChange={this.handleChange.bind(this)}/>
			<InputBase placeholder="province"   name="province" value={this.state.province} onChange={this.handleChange.bind(this)}/>
	  		
			<InputBase placeholder="isAffiliation"   name="isAffiliation" value={this.state.isAffiliation} onChange={this.handleChange.bind(this)}/>
			<InputBase placeholder="isCoalition"   name="isCoalition" value={this.state.isCoalition} onChange={this.handleChange.bind(this)}/>

			<Button variant="contained" onClick={()=>this.save()}>save</Button>			
			<br/>
			{party.parties.map(p=>{
			       return <CoalitionParty data={p}/>
		        })}
			<Button variant="contained" onClick={()=>main.dataJob("addCoalitionParty",party.id)}>+party</Button>

			<br/>
			{party.ideologies.map(ideology=>{
		       return <PartyIdeology data={ideology} ideologies={this.props.ideologies}/>
	        })}
			<br/>
			<Button variant="contained" onClick={()=>main.dataJob("addPartyIdeology",party.id)}>+ideology</Button>
			<br/>
		</>
		   
	    )}
	    </MainContext.Consumer>
	}
}