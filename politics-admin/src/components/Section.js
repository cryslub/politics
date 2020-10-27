import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';
import Election from './Election.js';
import BaseComponent from './BaseComponent.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';


export default class Section extends BaseComponent {
	
	save(){
		DataService.editSection(this.props.data.id,this.state);
	}
	
	render() {
		const section = this.props.data;
		const names = this.props.nameService.getSectionNames(section.id);
		
		return  <Paper>
			<List component="div" disablePadding>
		        {Object.keys(names).map((key,i)=>{
		        	const name = names[key];			        	
			       return <Name name={name} type='section' id={section.id}/>		        	
		        })}
			</List>
			<Button variant="contained" onClick={()=>DataService.addName('section',section.id)}>+name</Button>
			<br/>
			<InputBase placeholder="type"   name="type" value={this.state.type} onChange={this.handleChange.bind(this)}/>
			<InputBase placeholder="logo"   name="logo" value={this.state.logo} onChange={this.handleChange.bind(this)}/>

			<Button variant="contained" onClick={()=>this.save()}>save</Button>		
			
			<h4>Elections <Button variant="contained" onClick={()=>DataService.addElection(section.id)}>+</Button></h4>
			{section.elections.map(election=>{
				return <Election data={election} nameService={this.props.nameService} parties={this.props.parties} affiliations={this.props.affiliations}/>
			})}
			
			
			<br/>
			
			<Button variant="contained" onClick={()=>DataService.removeSection(section.id)}>remove</Button>
			
			
		</Paper>
	}
}