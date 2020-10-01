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



export default class CoaltionParty extends BaseComponent {
	
	

	apply = () => {
		const result = this.props.data;
		
		if( this.state.party != result.party  ){
			this.setState({party:result.party})
		}
		
	}
	
	
	save = ()=>{
		DataService.editCoalitionParty(this.props.data.id,{party:this.state.party});
	}
	
	render() {
		const self = this;
       return<>
		<InputBase placeholder="party" name="party" value={this.state.party} onChange={this.handleChange.bind(this)}/>
		<Button variant="contained" onClick={this.save}>save</Button>		       
	   </>

       	        	
	}
}