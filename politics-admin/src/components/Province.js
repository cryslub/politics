import React, { Component } from 'react';

import DataService from '../DataService.js';

import Names from './Names.js';
import BaseComponent from './BaseComponent.js';
import PartyIdeology from './PartyIdeology.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import {MainContext} from '../MainContext.js';


export default class Province extends BaseComponent {
	
	

	
	save(){
		DataService.editProvince(this.props.data.id,this.state);
	}
	
	
	render() {
		
		const self = this;
		const province = this.props.data;
		
		return <MainContext.Consumer>
	    {main=>(
	    		<>
	    	
			{province.id} 
			<InputBase placeholder="flag"   name="flag" value={this.state.flag} onChange={this.handleChange.bind(this)}/>
			<Button variant="contained" onClick={()=>this.save()}>save</Button>			
			<Names type='province' id={province.id}/><br/>
			
		</>
		   
	    )}
	    </MainContext.Consumer>
	}
}