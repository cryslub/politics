export default class NameService {

	constructor(lang){
		this.name = {};
		this.lang = lang;
	}
	
	  hashNames = async(names) =>{
		  var self = this;
			names.forEach(name=>{
				if(self.name[name.type] === undefined){
					self.name[name.type] = {};
				}
				if(self.name[name.type][name.id] === undefined){
					self.name[name.type][name.id] = {};
				}
			
				self.name[name.type][name.id][name.lang] = name;

			});
		}
		
	  	getName = (type,id) =>{
			var self = this;
			if(self==undefined) return {};
			if(self.name[type] == undefined) return {};
			if(self.name[type][id] == undefined) return {};
			return self.name[type][id][this.lang];
		}
	  
		getNames = (type,id) =>{
			var self = this;
			if(self==undefined) return {};
			if(self.name[type] == undefined) return {};
			if(self.name[type][id] == undefined) return {};
			return self.name[type][id];
		}
	  
		getRegionNames = (id) =>{
			var self = this;
			if(self==undefined) return {};
			if(self.name.region == undefined) return {};
			if(self.name.region[id] == undefined) return {};
			return self.name.region[id];
		}
		
		getCountryNames = (id) =>{
			var self = this;
			if(self==undefined) return {};
			if(self.name.country == undefined) return {};
			if(self.name.country[id] == undefined) return {};
			return self.name.country[id];
		}
		
		getPartyNames = (id) =>{
			var self = this;
			if(self==undefined) return {};
			if(self.name.party == undefined) return {};
			if(self.name.party[id] == undefined) return {};
			return self.name.party[id];
		}
		
		getSectionNames = (id) =>{
			var self = this;
			if(self==undefined) return {};
			if(self.name.section == undefined) return {};
			if(self.name.section[id] == undefined) return {};
			return self.name.section[id];
		}
		
	
}