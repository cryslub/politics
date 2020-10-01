import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


import * as Highcharts from 'highcharts';
import HighchartsItem from "highcharts/modules/item-series";
import HighchartsReact from 'highcharts-react-official';

HighchartsItem(Highcharts)
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

export default class RateChart extends Component {
	render(){
		const section = this.props.data;
		const nameService = this.props.nameService;
		const parties = this.props.parties;
		

		const selectedElection = section.elections[0];
	
		var data = [];
		var sum = 0;
		selectedElection.results.forEach(result=>{
			if(result.rate ==0 || result.rate ==null) return;
			const party = parties[result.party];
			const name = nameService.getName('party',party.id);
			sum += result.rate;
			
//			data.push([name.name, result.rate, party.color, party.acronym]);
			data.push({
			    y: result.rate,
			    name: name.name,
			    color: party.color,
			    acronym:party.acronym
			})	;	
		})
		
		if(sum<100){
			data.push({
			    y: 100-sum,
			    name: '기타',
			    color: 'grey',
			    acronym:'etc.'
			})	;
		}
		
		var options: Highcharts.Options = {
			    chart: {
			        plotBackgroundColor: null,
			        plotBorderWidth: 0,
			        plotShadow: false
			    },
			    title: {
			        text: '',
			        align: 'center',
			        verticalAlign: 'middle',
			        y: 60
			    },
			    tooltip: {
			        pointFormat: '<b>득표 : {point.percentage:.2f}%</b>'
			    },
			    accessibility: {
			        point: {
			            valueSuffix: '%'
			        }
			    },
			    legend: {
			        labelFormat: '{name} <span style="opacity: 0.4;">{y:.2f}</span><span style="opacity: 0.4;font-weight: normal;">%</span>',
			        layout: 'vertical',
			        align: 'left',
			        verticalAlign: 'top'
			    },
			    
			    plotOptions: {
			        pie: {
			        	dataLabels:{
			        		format:"{point.acronym}"
			        	},
			            startAngle: -100,
			            endAngle: 100,
			            center: ['50%', '75%'],
			            size: '110%',
			            showInLegend: true
			        }
			    },
			    series: [{
			        type: 'pie',
			        name: '득표',
			        innerSize: '45%',
			        data: data
			    }]
			}
		
		
			
	
		return <>
	  		<Box style={{width:'95%'}}> 
		  	 <HighchartsReact
		        highcharts={Highcharts}
		        options={options}
		        {...this.props}
		    />
		    </Box>
		 
		</>
	}
}