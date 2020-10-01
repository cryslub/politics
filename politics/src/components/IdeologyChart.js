import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


import * as Highcharts from 'highcharts';
import HighchartsItem from "highcharts/modules/item-series";
import HighchartsReact from 'highcharts-react-official';

HighchartsItem(Highcharts)
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

export default class ParliamentChart extends Component {
	render(){
		const section = this.props.section;
		const nameService = this.props.nameService;
		const parties = this.props.parties;
		const main = this.props.main;

		const selectedElection = section.elections[0];

		
			var series = [];
			const ideologies = {};
		    selectedElection.results.forEach(result=>{
				if(result.seats ==0) return;
				const party = parties[result.party];
				const partyName = nameService.getName('party',party.id);
				var value = result.seats/party.ideologies.length;
				
				party.ideologies.forEach(ideology=>{
					if(ideology.ideology == 0) return;
					const name = nameService.getName('ideology',ideology.ideology);
					
					if(ideologies[ideology.ideology]==undefined){
						ideologies[ideology.ideology] = {
							name:name.name,
							data:[],
							color:main.ideology[ideology.ideology].color
						}						
					}
					
					ideologies[ideology.ideology].data.push({
						name:partyName.name,
						value:value
					})
				})
			})
			
			Object.keys(ideologies).forEach(key=>{
				series.push(ideologies[key])
			})
				
			    
		    var bubbleOptions: Highcharts.Options =  {
		    	    chart: {
		    	        type: 'packedbubble',
		    	        height: '50%'
		    	    },
		    	    title: {
		    	        text: ''
		    	    },
		    	    tooltip: {
		    	        useHTML: true,
		    	        pointFormat: '<b>{point.name}</b> '
		    	    },
		    	    plotOptions: {
		    	        packedbubble: {
		    	            minSize: '10%',
		    	            maxSize: '300%',
		    	            zMin: 0,
		    	            zMax: 1000,
		    	            layoutAlgorithm: {
		    	                splitSeries: false,
		    	                gravitationalConstant: 0.02
		    	            },
		    	            dataLabels: {
		    	                enabled: true,
		    	                format: '{point.name}',
		    	                filter: {
		    	                    property: 'y',
		    	                    operator: '>',
		    	                    value: 5
		    	                },
		    	                style: {
		    	                    color: 'black',
		    	                    textOutline: 'none',
		    	                    fontWeight: 'normal'
		    	                }
		    	            },
		    	            animationLimit:1,
		    	            animation:{
		    	            	duration:1
		    	            }
		    	        }
		    	    },
		    	    series:series
		    	}
			    
	
		return <>
			
		    <Box style={{width:'95%'}}> 
		  	 <HighchartsReact
		        highcharts={Highcharts}
		        options={bubbleOptions}
		        {...this.props}
		    />
		    </Box>
		</>
	}
}