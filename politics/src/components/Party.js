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

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



export default class Party extends BaseComponent {
	
	
	

	apply = () => {
		const result = this.props.data;
		
		if( this.state.acronym != result.acronym || this.state.color != result.color){
			this.setState({acronym:result.acronym,color:result.color})
		}
		
	}
	
	
	render() {
		const nameService = this.props.nameService;
		const party = this.props.data;
		const name = nameService.getName('party',party.id);
		
		var elevation = 1;
		if(this.props.elevation!=undefined) elevation = this.props.elevation;
		if(name==undefined) return null;
		
		return  <Card style={{maxWidth:'250px',width:'250px'}} elevation={elevation} >
		 	<CardContent   style={{minHeight:'92px'}}>
		 	{party.logo==null?<Box style={{height:"27px"}}/>:	<img style={{height:"27px"}} src={party.logo}/>}
		 		<Grid container direction="row" spacing={1} alignItems="center">
		 			<Grid item>
				 		<Typography variant="caption" component="h2" style={{color:'grey'}}>
				 		{party.acronym} 
				 		</Typography>
			 		</Grid>
			 		<Grid item>
				 		<Typography variant="subtitle1" component="h2">
				 		{name.name} 
				 		</Typography>
			 		</Grid>
		 		</Grid>
		 		
		 	</CardContent>
		 	{party.ideologies.length>0?<Divider/>:<Divider/>}		 	
		 	<CardContent   >
		 		<Grid container spacing={1}>
		 		{
		 			party.ideologies.map(ideology=>{
		 				const name = nameService.getName('ideology',ideology.ideology);
		 				if(ideology.ideology == 0) return null;
		 				return <Grid item>
		 					<Chip label={name.name} size="small" />
		 				</Grid>
		 			})
		 		}
		 		</Grid>
		 	</CardContent>
		 	
		</Card>
	}
}