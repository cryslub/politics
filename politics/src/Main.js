import React, { Component } from 'react';
import DataService from './DataService.js';
import NameService from './NameService.js';
import MainBase from './MainBase.js';


import Country from './components/Country.js';
import ResponsiveDrawer from './components/ResponsiveDrawer.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';



import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import { Router, Link ,useParams,Redirect} from "@reach/router"

import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';

import { Container, Header, Content, Footer, Sidebar } from 'rsuite';

import {MainContext} from './MainContext.js';


const useStyles = makeStyles((theme) => ({
	  root: {
	    display: 'flex',
	    '& > *': {
	      margin: theme.spacing(1),
	    },
	  },
	  small: {
	    width: theme.spacing(3),
	    height: theme.spacing(3),
	    marginRight:5
	  },
	  large: {
	    width: theme.spacing(7),
	    height: theme.spacing(7),
	  },
	}));



export default class Main extends MainBase {
	
	
	render() {
	    return  <MainContext.Provider value={this}>
	    	<ResponsiveDrawer continent={this.state.continent} currentRegion={this.state.selectedRegion} nameService={this.nameService} selectRegion={this.selectRegion}>
		    	
	    	 <Router>
	    	 	<Redirect from="politics" to="/politics/region/1" noThrow />
	    	 	<Region path="politics/region/:region" data={this.region} state={this.state} nameService={this.nameService} party={this.party}/>
	    		
	    	  </Router>
	    	    
		    
		        
		    </ResponsiveDrawer>
		</MainContext.Provider>
    	
	}
}


const Region = (props) => {
	 const classes = useStyles();
	 
	const params = useParams()
	
	if(props.data[params.region]==undefined) return null;
	const nameService = props.nameService;
	
	const anchor = (id)=>{
		window.location.href='#'+id;
	}
	
  return <div>
  
  	<Grid container justify="space-between" direction="row">
	  <Grid item style={{    width: 'calc(100% - 250px)'}}>
		{props.data[params.region].countries.map((country,i)=>{
			if(country.hide=='Y') return null;

			return <Country data={country}  nameService={props.nameService} parties={props.party}/>
		})}
	  </Grid>
	  <Grid item style={{position: '-webkit-sticky', position: 'sticky', top: '70px',height:'100px'}}>
	  	<List  component="nav" dense={true}>
			{props.data[params.region].countries.map((country,i)=>{
				if(country.hide=='Y') return null;
				const name = nameService.getName('country',country.id);
				return <ListItem onClick={()=>anchor(country.id)} style={{cursor:'pointer'}}>
				

			         	<Avatar  src={country.flag}  className={classes.small}/>
					 	<ListItemText primary={name.name} />
				 
				</ListItem>
			})}
		</List>
	  </Grid>
	</Grid>
    

	
  </div>
}
		