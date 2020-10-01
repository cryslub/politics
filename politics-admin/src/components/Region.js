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

import Divider from '@material-ui/core/Divider';


import {MainContext} from '../MainContext.js';




export default class Region extends BaseComponent {
	

	save(){
		DataService.editRegion(this.props.data.id,this.state);
	}
	
	render() {
		const region = this.props.data;
		const names = this.props.nameService.getRegionNames(region.id);
		
		return <MainContext.Consumer>
	    {main=>( 
		       
			  <>      
		        {Object.keys(names).map((key,i)=>{
		        	const name = names[key];			        	
			       return <Name name={name} type='region' id={region.id}/>		        	
		        })}
			    <Button variant="contained" onClick={()=>DataService.addName('region',region.id)}>+name</Button>
			    <InputBase placeholder="continent"   name="continent" value={this.state.continent} onChange={this.handleChange.bind(this)}/>
				<Button variant="contained" onClick={()=>this.save()}>save</Button>			
			    <Button variant="contained" onClick={()=>this.props.select(region.id)}>></Button>

				<Divider/>
			</>
		)}
	    </MainContext.Consumer>
	}
}