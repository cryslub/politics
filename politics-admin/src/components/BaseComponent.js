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
	
	apply = () =>{
		const data = this.props.data;
		
		var check = false;
		Object.keys(data).forEach(key=>{
			if(this.state[key] != data[key]){
				check = true;
			}
		})
		if( check){
			this.setState(data)
		}

	}
}