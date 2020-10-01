import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';
import Election from './Election.js';
import Result from './Result.js';
import ParliamentChart from './ParliamentChart.js';
import RateChart from './RateChart.js';

import UnionChart from './UnionChart.js';
import IdeologyChart from './IdeologyChart.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import Chip from '@material-ui/core/Chip';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PieChartIcon from '@material-ui/icons/PieChart';
import HowToVoteIcon from '@material-ui/icons/HowToVote';


import {MainContext} from '../MainContext.js';



export default class Section extends Component {
	
	
	constructor(){
		super();
		
		
		this.state = {
				ideologies : {},
				section:{},
				chart:"parliament"
		}
		
	}
	componentDidMount() {
		this.init()
	}
	
	componentDidUpdate() {
		if(this.set){
			this.set = false;
		}else{
			this.init()
		}
	}
	
	init(){
		const section = this.props.data;
		const selectedElection = section.elections[0];
		var ideologies = {};

		const parties = this.props.parties;
		
		var sum = 0;
		
		selectedElection.results.forEach(result=>{
			sum+= result.seats;
			
			parties[result.party].ideologies.forEach(ideology=>{
				ideologies[ideology.ideology] = true
			
			});
		});
		
		if(section.id != this.state.section.id ) {
			this.setState({ideologies:ideologies,sum:sum,section:section})
		}
	}
	
	toggle(ideology){
		
		var ideologies = this.state.ideologies;
		
		ideologies[ideology] = !ideologies[ideology];
		this.set = true;

		this.setState({ideologies:ideologies});
	}
	
	handleChart = (event, chart) => {
		this.setState({chart:chart})
	}
	
	render() {
		const section = this.props.data;
		const nameService = this.props.nameService;
		const name = nameService.getName('section',section.id);
		const selectedElection = section.elections[0];
		
		var checkRates = false;
		selectedElection.results.forEach(result=>{
			if(result.rate > 0 && result.rate != null)  checkRates = true;
		})
	
		return <MainContext.Consumer>
	    {main=>( 
	    	<>
			<Box p={3}>
				<Grid container justify="space-between">
						<Grid item>
							
							<Grid container   direction="row" alignItems="baseline" spacing={2}>
							{section.type!='union'?
							<Box mr={0} component="span">
								 <ToggleButtonGroup
								 	size="small" 
							      value={this.state.chart}
							      exclusive
							      onChange={this.handleChart}
							      aria-label="text alignment"
							    >
								      <ToggleButton value="parliament" aria-label="left aligned">
								        <AccountBalanceIcon />
								      </ToggleButton>
								      {
								    	  checkRates?
									      <ToggleButton value="rate" aria-label="left aligned">
									        <HowToVoteIcon />
									      </ToggleButton>
									      :null

								      }
								      <ToggleButton value="ideology" aria-label="centered">
								        <EmojiObjectsIcon />
								      </ToggleButton>
							    </ToggleButtonGroup>
						    </Box>
						    :null
							}
						    
								<Grid item>
									<Typography variant="h6" gutterBottom>
									{name.name}
									</Typography>
								</Grid>
								<Grid>
									<Typography variant="subtitle2" gutterBottom>
									{section.type=='union'?'':'총'} {this.state.sum}석
									</Typography>
								</Grid>
							</Grid>
						
						</Grid>
						<Grid item>
							
							<Select  value={selectedElection.id} >
								{section.elections.map(election=>{
									const name = this.props.nameService.getName('election',election.id);
									return <MenuItem value={election.id}>{name.name}</MenuItem>
								})}
					  		</Select>
				  		</Grid>
			  		
			  	</Grid>
			  	
		  	{section.type!='union'?
		  		<>
		  			{this.state.chart=='parliament'?
		  				<ParliamentChart data={this.props.data} parties={this.props.parties} nameService={this.props.nameService} ideologies={this.props.ideologies} /> 
		  				:null
		  			}
		  			{this.state.chart=='rate'?
	  					<RateChart data={this.props.data} parties={this.props.parties} nameService={this.props.nameService} ideologies={this.props.ideologies}/> 
		  				:null
			  		}		  			
		  			{this.state.chart=='ideology'?
	  					<IdeologyChart section={this.props.data} parties={this.props.parties} nameService={this.props.nameService} ideologies={this.props.ideologies}  main={main} /> 
		  				:null
			  		}
		  		</>
		  	: null}
		  	{section.type=='union'?<UnionChart data={this.props.data} parties={this.props.parties} nameService={this.props.nameService}/> : null}
		  	</Box>

		 </>
		)}
		</MainContext.Consumer>
	}
}