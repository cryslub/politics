import React, { Component } from 'react';

import Party from './Party.js';


import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';

import {MainContext} from '../MainContext.js';

export default class Coalition extends Component {
	render() {
		const nameService = this.props.nameService;
		const party = this.props.data;
		const name = nameService.getName('party',party.id);
		
		return <MainContext.Consumer>
	    {main=>( 
	    		<Paper  >
				<Box m={2} style={{height:"42px"}}>
					<Grid container direction="row" spacing={1} alignItems="center"  style={{height:"100%"}}>
						<Grid item>
							{party.logo==null?null:	<img style={{height:"29px"}} src={party.logo}/>}
						</Grid>
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
				</Box>
		 		<Divider/>

				<Box  m={1}> 
					<Grid container spacing={0}>
				 		{party.parties.map(party=>{
							if(party.hide=='Y') return null;
	
							return <Grid item style={{display:'flex'}}>
								<Party data={main.party[party.party]} nameService={nameService} elevation={0}/>
							</Grid>
						})}

			 		</Grid>
				</Box>
		 		
			</Paper>
		)}
		</MainContext.Consumer>
	}
}