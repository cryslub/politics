import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';
import Result from './Result.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

export default class Election extends Component {
	
	
	constructor(){
		super();
		
		
		this.state = {
		}
		
	}
	

	
	render() {
		const election = this.props.data;
		const names = this.props.nameService.getNames('election',election.id);
		
		return  <>
			<List component="div" disablePadding>
		        {Object.keys(names).map((key,i)=>{
		        	const name = names[key];			        	
			       return <Name name={name} type='election' id={election.id}/>		        	
		        })}
			</List>
			<Button variant="contained" onClick={()=>DataService.addName('election',election.id)}>+name</Button>
			
			<h5>Results <Button variant="contained" onClick={()=>DataService.addResult(election.id)}>+</Button></h5>
			{election.results.map(result=>{
				return <Result data={result}  parties={this.props.parties}/>
			})}
			<br/>
			
			
		</>
	}
}