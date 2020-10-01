import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


import * as Highcharts from 'highcharts';
import HighchartsItem from "highcharts/modules/item-series";
import HighchartsReact from 'highcharts-react-official';

HighchartsItem(Highcharts)

export default class ParliamentChart extends Component {
	render(){
		const section = this.props.data;
		const nameService = this.props.nameService;
		const parties = this.props.parties;
		const selectedElection = section.elections[0];
	
		var series = [];
			 
			 var prev = 0;
			 selectedElection.results.forEach(result=>{
				const party = parties[result.party];
				const affiliation = parties[result.affiliation];
				const name = nameService.getName('party',party.id);
				const affiliationName = nameService.getName('party',affiliation.id);
				
				if(prev==result.affiliation){
					var item = series.pop();
					item.data[0] += result.seats;
					series.push(item);
				}else{
				
					series.push( {
						name:affiliationName.name ,
						color:affiliation.color,
						data:[result.seats], 
						dataLabels: {
			                enabled: true,
			                format: affiliation.acronym,
			                style:{
			                	textOutline:'0px',
			                	fontWeight:'normal'
			                }
						},
						stack:'affiliation',
						showInLegend:false
					});
				}
				
				prev = result.affiliation;
			})
			
			
			selectedElection.results.forEach(result=>{
				const party = parties[result.party];
				const affiliation = parties[result.affiliation];
				const name = nameService.getName('party',party.id);
				const affiliationName = nameService.getName('party',affiliation.id);
				affiliation.name =affiliationName.name;
				series.push( {
					name: name.name,
					color:party.color,
					affiliation:affiliation,
					data:[result.seats], 
					dataLabels: {
		                enabled: true,
		                format: party.acronym,
		                style:{
		                	textOutline:'0px',
		                	fontWeight:'normal'
		                }
					},
					stack:'party'
				});
			})
			
			var options = {
				    chart: {
				        type: 'bar'
				    },
				    title: {
				        text: ''
				    },
				    legend: {
				        labelFormatter: function () {
				            return this.name +' > '+this.userOptions.affiliation.name+ '  <span style="opacity: 0.5"><strong style="color:darkGrey">'+this.yData[0]+'</strong></span>';
				        },
				        layout: 'vertical',
				        align: 'left',
				        verticalAlign: 'top'
				    },
				    xAxis:{
				    	visible:false,
				    	reversed:true
				    },
				    yAxis:{
				    	visible:false,
				    	reversed:true
				    },
				    plotOptions: {
				        series: {
				            stacking: 'normal',
				            groupPadding: 0.4,
				            pointPadding:0,
				            
			                events: {
			                    legendItemClick: function(e) {
			                        e.preventDefault();
			                    }
			                }
				    
				        }
				    },
				    tooltip: {
				    	headerFormat:''
				    },
				    series:series
				}
			 
			 var mdUpOption = {
					    chart: {
					        type: 'bar'
					    },
					    title: {
					        text: ''
					    },
					    legend: {
				    	   labelFormatter: function () {
					            return this.name +' > '+this.userOptions.affiliation.name+ '  <span style="opacity: 0.5"><strong style="color:darkGrey">'+this.yData[0]+'</strong></span>';
					        },
					    },
					    xAxis:{
					    	visible:false,
					    	reversed:true
					    },
					    yAxis:{
					    	visible:false,
					    	reversed:true
					    },
					    plotOptions: {
					        series: {
					            stacking: 'normal',
					            groupPadding: 0.4,
					            pointPadding:0,
				                events: {
				                    legendItemClick: function(e) {
				                        e.preventDefault();
				                    }
				                }
					        }
					    },
					    tooltip: {
					    	headerFormat:''
					    },
					    series:series
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