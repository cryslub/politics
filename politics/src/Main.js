import React, { Component } from 'react';
import DataService from './DataService.js';
import NameService from './NameService.js';
import MainBase from './MainBase.js';


import Region from './components/Region.js';
import Country from './components/Country.js';
import ResponsiveDrawer from './components/ResponsiveDrawer.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';


import Grid from '@material-ui/core/Grid';

import {MainContext} from './MainContext.js';


export default class Main extends MainBase {
	
	
	render() {
	    return  <MainContext.Provider value={this}>
	    	<ResponsiveDrawer continent={this.state.continent} currentRegion={this.state.selectedRegion} nameService={this.nameService} selectRegion={this.selectRegion}>
		    	
		    	{this.region[this.state.selectedRegion].countries.map((country,i)=>{
		    		return <Country data={country}  nameService={this.nameService} parties={this.party}/>
		    	})}
		        
		    </ResponsiveDrawer>
		</MainContext.Provider>
    	
	}
}