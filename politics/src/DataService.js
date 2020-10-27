const host = "http://localhost:8001/politics/admin/";
//const host = "admin/";


 const DataService = {

	getContinent :  async () =>{
		
		const res = await  fetch(host+"data/continent")
		   
		return res.json();		
	},

	addContinent :  async () =>{
		 				 
	    fetch(host+"data/continent",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},


	getRegion :  async () =>{
		 			
		const res = await  fetch(host+"data/region")
		   
		return res.json();		
	},

	addRegion :  async () =>{
		 				 
	    fetch(host+"data/region",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},

	editRegion :  async (id,region) =>{
		 
	    fetch(host+"data/region/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(region)})
        .then(response => response.json());
		
	    
	},
	 getName :  async () =>{
			
		  const res = await  fetch(host+"data/name")
		   
		  return res.json();		    	
			
	},
	 
	 addName :  async (type,id) =>{
		 
	    fetch(host+"data/name/"+type+"/"+id,  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	
	editName :  async (type,id,name) =>{
		 
	    fetch(host+"data/name/"+type+"/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(name)})
        .then(response => response.json());
			    			
	},
	
	 getCountry :  async () =>{
			
		  const res = await  fetch(host+"data/country")
		   
		  return res.json();		    	
			
	},
	
	 addCountry :  async (region) =>{
		 
	    fetch(host+"data/region/"+region+"/country",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	
	editCountry :  async (id,country) =>{
		 
	    fetch(host+"data/country/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(country)})
        .then(response => response.json());
    
	},
	
	 getProvince :  async () =>{
			
		  const res = await  fetch(host+"data/province")
		   
		  return res.json();		    	
			
	},
	
	 addProvince :  async (country) =>{
		 
	    fetch(host+"data/country/"+country+"/province",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	
	editProvince :  async (id,province) =>{
		 
	    fetch(host+"data/province/"+id,  
   		{method: 'PUT',
   		 headers: { 'Content-Type': 'application/json' },
   		 body:JSON.stringify(province)})
       .then(response => response.json());
   
	},
	
	 getParty :  async () =>{
			
		  const res = await  fetch(host+"data/party")
		   
		  return res.json();		    				
	},
	
	 addParty :  async (country) =>{
		 
	    fetch(host+"data/country/"+country+"/party",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},

	editParty :  async (id,party) =>{
		 
	    fetch(host+"data/party/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(party)})
        .then(response => response.json());
			    			
	},
	 getSection :  async () =>{
			
		  const res = await  fetch(host+"data/section")
		   
		  return res.json();		    				
	},
	
	 addSection :  async (country) =>{
		 
	    fetch(host+"data/country/"+country+"/section",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	
	editSection :  async (id,section) =>{
		 
	    fetch(host+"data/section/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(section)})
        .then(response => response.json());
		
	    
	},
	
	removeSection :  async (id) =>{
		 
	    fetch(host+"data/section/"+id,  
    		{method: 'DELETE'})
        .then(response => response.json());
		
	    
	},
	
	 getElection :  async () =>{
			
		  const res = await  fetch(host+"data/election")
		   
		  return res.json();		    				
	},
	
	 addElection :  async (section) =>{
		 
	    fetch(host+"data/section/"+section+"/election",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	
	 getResult :  async () =>{
			
		  const res = await  fetch(host+"data/result")
		   
		  return res.json();		    				
	},
	
	 addResult :  async (election) =>{
		 
	    fetch(host+"data/election/"+election+"/result",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},

	
	editResult :  async (id,result) =>{
		 
	    fetch(host+"data/result/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(result)})
        .then(response => response.json());
		
	    
	},
	
	 getIdeology :  async () =>{
			
		  const res = await  fetch(host+"data/ideology")
		   
		  return res.json();		    	
			
		},

	addIdeology :  async () =>{
		 				 
	    fetch(host+"data/ideology",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	editIdeology :  async (id,ideology) =>{
		 
	    fetch(host+"data/ideology/"+id,  
    		{method: 'PUT',
    		 headers: { 'Content-Type': 'application/json' },
    		 body:JSON.stringify(ideology)})
        .then(response => response.json());
			    			
	},
	 getPartyIdeology :  async () =>{
			
		  const res = await  fetch(host+"data/party/ideology")
		   
		  return res.json();		    	
			
		},

	addPartyIdeology :  async (party) =>{
		 				 
	    fetch(host+"data/party/"+party+"/ideology",  {method: 'POST'})
	        .then(response => response.json());
			    			
	},
	editPartyIdeology :  async (id,ideology) =>{
		 
	    fetch(host+"data/party/ideology/"+id,  
   		{method: 'PUT',
   		 headers: { 'Content-Type': 'application/json' },
   		 body:JSON.stringify(ideology)})
       .then(response => response.json());
			    			
	},
	 getCoalitionParty :  async () =>{
			
		  const res = await  fetch(host+"data/coalition/party")
		   
		  return res.json();		    	
			
		},
 }
 
 
 export default DataService