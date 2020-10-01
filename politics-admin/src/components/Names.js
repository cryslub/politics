import React, { Component } from 'react';

import DataService from '../DataService.js';

import BaseComponent from './BaseComponent.js';

import Name from './Name.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';

import {MainContext} from '../MainContext.js';


export default class Names extends Component {
	
	
	render() {
	
       return <MainContext.Consumer>
	    {main=>(
	    		< >
		        {Object.keys(main.nameService.getNames(this.props.type,this.props.id)).map((key,i)=>{
		        	const name = main.nameService.getNames(this.props.type,this.props.id)[key];			        	
			       return <Name name={name} type={this.props.type} id={this.props.id}/>		        	
		        })}
	    		<Button variant="contained" onClick={()=>main.dataJob("addName",this.props.type,this.props.id)}>+name</Button>

		   </>
          
	    )}
	    </MainContext.Consumer>
       	        	
	}
}