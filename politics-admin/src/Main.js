import React, { Component } from 'react';
import DataService from './DataService.js';
import NameService from './NameService.js';
import MainBase from './MainBase.js';

import Ideology from './components/Ideology.js';

import Region from './components/Region.js';
import Continent from './components/Continent.js';

import Country from './components/Country.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';


import Grid from '@material-ui/core/Grid';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import {MainContext} from './MainContext.js';



export default class Main extends MainBase {

	dataJob(name,param1,param2){
		DataService[name](param1,param2);
		this.load();
	}
	
	render() {
		var self = this;
	    return <MainContext.Provider value={this}>
		    <BottomNavigation
		      showLabels
		      value={this.state.tab}
		      onChange={(event, newValue) => {
		        this.setState({tab:newValue});
		      }}
		    >
		    	  <BottomNavigationAction label="Region" />
			      <BottomNavigationAction label="Continent" />

	    		  <BottomNavigationAction label="Ideology" />
		    </BottomNavigation>
		    {
		    	this.state.tab ==1?
		    	<>
			    	<List component="nav" aria-label="main mailbox folders">
				    	{Object.keys(this.state.continent).map((key,i)=>{
				    		const continent = this.continent[key];
				    		return <Continent data={continent} nameService={this.nameService} select={this.selectContinent}/>
				    	})}
				    </List>
				    <Button variant="contained" onClick={DataService.addContinent}>+continent</Button>
				</>
		    	:null
		    }
		    {
		    	this.state.tab ==0?
		    	
				    <Grid container direction="row" >
				    	<Grid item>
					    	<List component="nav" aria-label="main mailbox folders">
						    	{Object.keys(this.state.region).map((key,i)=>{
						    		const region = this.region[key];
						    		return <Region data={region} nameService={this.nameService} select={this.selectRegion}/>
						    	})}
						    </List>
						    <Button variant="contained" onClick={DataService.addRegion}>+region</Button>
					    </Grid>
					    <Grid item>
					    	<Button variant="contained" onClick={() => this.dataJob("addCountry",this.state.selectedRegion)}>+country</Button>
					    	<br/>
					    	{this.region[this.state.selectedRegion].countries.map((country,i)=>{
					    		return <Country data={country}  nameService={this.nameService} ideologies={self.ideology} affiliations={self.affiliation}/>
					    	})}
					    </Grid>
				    </Grid>
				 
		    	:null
		    }
		    {
		    	this.state.tab ==2?	
		    	<>
		    		<Button variant="contained" onClick={()=>this.dataJob("addIdeology")}>+ideology</Button>
		    		<br/>
		    		{
			    		Object.keys(this.ideology).reverse().map((key,i)=>{
				    		const ideology = this.ideology[key];
				    		return <Ideology data={ideology} nameService={this.nameService}/>
				    	})
				    }
				 </>
				 :null
		    }
		  
		    </MainContext.Provider>
	}
}