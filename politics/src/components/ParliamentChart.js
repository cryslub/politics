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
		const section = this.props.data;
		const nameService = this.props.nameService;
		const parties = this.props.parties;
		

		const selectedElection = section.elections[0];
	
		var data = [];
		selectedElection.results.forEach(result=>{
			if(result.seats ==0) return;
			const party = parties[result.party];
			const name = nameService.getName('party',party.id);
			if(name!=undefined){
				data.push([name.name, result.seats, party.color, party.acronym]);
			}
		})
		
		var options: Highcharts.Options = {

			    chart: {
			        type: 'item'
			    },

			    title: {
			        text: ''
			    },

			 
			    legend: {
			        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
			        layout: 'vertical',
			        align: 'left',
			        verticalAlign: 'top'
			    },

			    series: [{
			        name: '의석',
			        keys: ['name', 'y', 'color', 'label'],
			        data: data,
			        dataLabels: {
			            enabled: true,
			            format: '{point.label}'
			        },

			        // Circular options
			        center: ['50%', '70%'],
			        size: '100%',
			        startAngle: -100,
			        endAngle: 100
			    }]
			}
		
		var mdUpOption: Highcharts.Options = {

			    chart: {
			        type: 'item'
			    },

			    title: {
			        text: ''
			    },

			 
			    legend: {
			        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
			    },

			    series: [{
			        name: '의원',
			        keys: ['name', 'y', 'color', 'label'],
			        data: data,
			        dataLabels: {
			            enabled: true,
			            format: '{point.label}'
			        },

			        // Circular options
			        center: ['50%', '70%'],
			        size: '80%',
			        startAngle: -100,
			        endAngle: 100
			    }]
			}
		
			
	
		return <>
			<Hidden mdUp >
			  	 <HighchartsReact
			        highcharts={Highcharts}
			        options={mdUpOption}
			        {...this.props}
			    />
		    </Hidden>
		  	<Hidden smDown >
		  		<Box style={{width:'95%'}}> 
			  	 <HighchartsReact
			        highcharts={Highcharts}
			        options={options}
			        {...this.props}
			    />
			    </Box>
		    </Hidden>
		 
		</>
	}
}