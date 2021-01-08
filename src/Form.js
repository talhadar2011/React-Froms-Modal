import React, { Component } from 'react';
import './FormModal';
import FormUI from './FormUi';
import FormModal from './FormModal';
export default class Form extends Component {    
constructor(props){
	super(props)
	this.state={
		Name:'',
		Email:"",
		Task:"",
		Message:"",
		Show:false
	}
	this.handleOnChange=this.handleOnChange.bind(this);
	this.handleOnClick=this.handleOnClick.bind(this);


}
handleOnChange(event){
const {name,value}= event.target;
 this.setState({
	 [name]:value
 })

}		
handleOnClick(event){
	
	 console.log(this.state)
	}		
		  
render() 
		{
        return (
			<>
			<FormUI 
			Data={this.state}
			handleOnChange={this.handleOnChange}

			handleOnClick={this.handleOnClick}
			/>  
			<FormModal
			Data={this.state}
			/>         
        	</>
				)
    	}
}
