import React, { Component } from 'react';
import DataService from './DataService.js';
import NameService from './NameService.js';



export default class Main extends Component {
	
	constructor(){
		super();
		
		
		
		this.state = {
				region:{
					1:{
						countries:[]
					}
				},
				continent:{
					1:{
						regions : []
					}
				},
				selectedRegion:1,
				selectedContinent:1,
				tab:0
		}
		
		
		this.name = {};
		this.nameService = new NameService("ko");
		this.region = {1:{countries:[]}};
		this.continent = {1:{regions : []}};

		this.affiliation= {};
	}
	
	async load(){
		await this.hashNames();

		await this.hashIdeology();
		await this.hashContinents();
		await this.hashRegions();

		await this.hashCountries();
		await this.hashProvinces();

		await this.hashParties();
		await this.hashSections();
		await this.hashElections();
		await this.hashResults();
		await this.hashPartyIdeology();
		await this.hashCoalitionParty();
		
		this.setState({region:this.region})
		this.setState({continent:this.continent})
	}
	
	
	async componentDidMount() {
		
		this.load();
		
	}
	
	async hashNames(){
		const self = this;
		const names =  await DataService.getName();
		this.nameService.hashNames(names);
	}
	
	async hashContinents(){
		const self = this;
		const continents  = await DataService.getContinent();
		
		continents.forEach(continent=>{	
			continent.regions = [];
			self.continent[continent.id] = continent;
		});
				
	}
	
	
	async hashRegions(){
		const self = this;
		const regions  = await DataService.getRegion();
		
		regions.forEach(region=>{	
			region.countries = [];
			self.region[region.id] = region;
			if(region.continent>0)
				self.continent[region.continent].regions.push(region)
		});
				
	}


	async hashCountries(){
		const self = this;
		const countries =  await DataService.getCountry();
		
		self.country = {};
		countries.forEach(country=>{
			
			self.region[country.region].countries.push( country );
			
			self.country[country.id] = country;
			
			country.parties = [];
			country.sections = [];
			country.provinces = [];
			
			
		});
				
	}
	
	async hashProvinces(){
		const self = this;
		const provinces =  await DataService.getProvince();
		
		self.province = {};
		provinces.forEach(province=>{
			
			self.country[province.country].provinces.push( province );
			
			self.province[province.id] = province;
			
			province.parties = [];
		});
				
	}
	
	
	async hashParties(){
		const self = this;
		const parties =  await DataService.getParty();
		
		self.party = {};
		self.affiliation = {};
		parties.forEach(party=>{
			self.country[party.country].parties.push( party );
			self.party[party.id] = party;
			party.ideologies = [];
			party.parties = [];
			
			if(party.isAffiliation == 'Y'){
				self.affiliation[party.id] = party;
			}
		});
				
	}

	async hashSections(){
		const self = this;
		const sections =  await DataService.getSection();
		
		self.section = {};
		
		sections.forEach(section=>{
			self.country[section.country].sections.push( section );
			self.section[section.id] = section;
			section.elections = [];
		});				
	}
	

	async hashElections(){
		const self = this;
		const elections =  await DataService.getElection();
		
		self.election = {};
		elections.forEach(election=>{
			self.section[election.section].elections.push( election );
			self.election[election.id] = election;
			election.results = [];
		});				
	}


	async hashResults(){
		const self = this;
		const results =  await DataService.getResult();
		
		results.forEach(result=>{
			self.election[result.election].results.push( result );
		});				
	}
	
	async hashIdeology(){
		const self = this;
		const ideologies =  await DataService.getIdeology();
		
		self.ideology = {};
		ideologies.forEach(ideology=>{
			self.ideology[ideology.id]= ideology;
		});				
	}
	
	async hashPartyIdeology(){
		const self = this;
		const ideologies =  await DataService.getPartyIdeology();
		
		ideologies.forEach(ideology=>{
			self.party[ideology.party].ideologies.push( ideology);
		});				
	}
	
	async hashCoalitionParty(){
		const self = this;
		const parties =  await DataService.getCoalitionParty();
		
		parties.forEach(party=>{
			self.party[party.coalition].parties.push( party);
			if(self.party[party.party] != undefined)
				self.party[party.party].coalition = party.coalition;
		});				
	}
	
	
	selectRegion = (id) =>{
		console.log(id);
		this.setState({selectedRegion:id});
	}
	selectContinent = (id) =>{
		console.log(id);
		this.setState({selectedContinent:id});
	}
	
}