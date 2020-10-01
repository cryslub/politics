import React, { Component } from 'react';

import DataService from '../DataService.js';

import Name from './Name.js';
import Party from './Party.js';
import Province from './Province.js';

import Section from './Section.js';
import BaseComponent from './BaseComponent.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';


import {MainContext} from '../MainContext.js';




export default class Country extends BaseComponent {
	

	apply = () => {
		const country = this.props.data;
		
		if( this.state.flag != country.flag ){
			this.setState({flag:country.flag})
		}
		
	}
	

	
	save(){
		DataService.editCountry(this.props.data.id,{flag:this.state.flag});
	}
	
	render() {
		const country = this.props.data;
		const names = this.props.nameService.getCountryNames(country.id);
		
		return  <MainContext.Consumer>
	    {main=>(
	    	<>
			<InputBase placeholder="flag"   name="flag" value={this.state.flag} onChange={this.handleChange.bind(this)}/>
			<Button variant="contained" onClick={()=>this.save()}>save</Button>					
			<List component="div" disablePadding>
		        {Object.keys(names).map((key,i)=>{
		        	const name = names[key];			        	
			       return <Name name={name} type='country' id={country.id}/>		        	
		        })}
			</List>
			<Button variant="contained" onClick={()=>DataService.addName('country',country.id)}>+name</Button>
			
			<h3>Province <Button variant="contained" onClick={()=>main.dataJob("addProvince",country.id)}>+</Button></h3> 
			{country.provinces.map(province=>{
				return <Province data={province}/>;
			})}
			
			<h3>Parties <Button variant="contained" onClick={()=>main.dataJob("addParty",country.id)}>+</Button></h3> 
			
			{country.parties.map(party=>{
				return <Party data={party} nameService={this.props.nameService} ideologies={this.props.ideologies} affiliations={this.props.affiliations} />
			})}
			
			<br/>
			

			<h3>Sections <Button variant="contained" onClick={()=>DataService.addSection(country.id)}>+</Button></h3>
			
			{country.sections.map(section=>{
				return <Section data={section} nameService={this.props.nameService} parties={country.parties} affiliations={this.props.affiliations}/>
			})}
			
			<br/>
			

		</>
	    )}
	    </MainContext.Consumer>
	}
}