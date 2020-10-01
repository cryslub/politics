import React, { Component } from 'react';

import DataService from '../DataService.js';

import Party from './Party.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


export default class Province extends Component {
	
	
	
	render() {
		
		const self = this;
		const province = this.props.data;
		const parties = this.props.parties;
		const nameService = this.props.nameService;
		const name = this.props.nameService.getName('province',province.id);
		
		
		return <>
			<Grid container alignItems="center" spacing={1}>
				<Grid item>
					<img style={{height:'20px'}}  src={province.flag} />
				</Grid>
				<Grid item>
					<Typography variant="subtitle1" gutterBottom>
					{name.name}
					</Typography>
				</Grid>
			</Grid>
		
			
			<Box mb={2}>
				<Grid container spacing={1}>
				
					{parties.map(party=>{
						if(party.province!=province.id) return null;
						return <Grid item style={{display:'flex'}}>
							<Party data={party} nameService={nameService} />
						</Grid>
					})}
				
				</Grid>
			</Box>
		
		</>
		
	}
}