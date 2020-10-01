import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';
import Party from './Party.js';
import Coalition from './Coalition.js';

import Province from './Province.js';

import Section from './Section.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



export default class Country extends Component {
	
	
	constructor(){
		super();
		
		
		this.state = {
		}
		
	}
	

	
	render() {
		const country = this.props.data;
		const nameService = this.props.nameService;

		const name = nameService.getName('country',country.id);
		
		country.parties.sort((a,b)=>{
			
			var ac = a.isCoalition;
			var bc = b.isCoalition;
			
			if(ac == null) ac = "";
			if(bc == null) bc = "";
			
			
			if (ac > bc) {
			    return -1;
			  }
			  if (ac < bc) {
			    return 1;
			  }
			  return 0;
		});
		
		return  <Box mb={4}>
			<Grid container alignItems="baseline" spacing={1}>
				<Grid item>
					<img style={{height:'23px'}}  src={country.flag} />
				</Grid>
				<Grid item>
					<Typography variant="h5" gutterBottom>
					{name.name}
					</Typography>
				</Grid>
			</Grid>

			
			<Box mb={2}>
				<Grid container spacing={1}>
					
					
					{country.parties.map(party=>{
						if(party.hide=='Y') return null;
						if(party.coalition !=undefined) return null;
						if(party.province!=null && party.province!=0) return null;
						if(party.isCoalition=='Y') return <Grid item style={{display:'flex'}}> <Coalition data={party} nameService={nameService}/> </Grid>

						return <Grid item style={{display:'flex'}}>
							<Party data={party} nameService={nameService} />
						</Grid>
					})}
				
				</Grid>
			</Box>
			

			{country.provinces.map(province=>{
				return <Province data={province} nameService={nameService} parties={country.parties}/>
			})}

			
			<Paper>
				{country.sections.map(section=>{
					return <Section data={section} nameService={this.props.nameService} parties={this.props.parties}/>
				})}
			</Paper>

		</Box>
	}
}