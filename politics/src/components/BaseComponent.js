import { Component } from 'react';


export default class BaseComponent extends Component {

	constructor(){
		super();
		
		
		this.state = {
		}

		this.change = false;
	}
	
	
	handleChange(event) {
	    let fieldName = event.target.name;
	    let fleldVal = event.target.value;
	    this.setState({ [fieldName]: fleldVal})	    
	    
	    this.change = true;
	}
	
	componentDidMount() {
		this.init()
	}
	
	componentDidUpdate() {
		this.init()
	}
	
	init(){
		if(!this.change){
			this.apply();
			this.change = false;
		}
				
	}
	
	apply(){
		
	}
}