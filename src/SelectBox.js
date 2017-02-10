import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {BoxContent} from './BoxContent';

export class SelectBox extends Component {

	state = {
		Collumn:'4',
	}
	handleChangeBox = (event) =>{
		this.setState({Collumn: event.target.value});	
	}
	render() {
		var Select = [];
		for(var i=0; i<=this.state.Collumn-1;i++){
			Select.push(i);
		}

	    return (
	    	<div className="container has-text-centered">
	          <p className="control">
	            <span>Select Number </span>
	            <span className="select">
	              <select onChange={this.handleChangeBox}>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4" selected>4</option>
	              </select>
	            </span>
	          </p>
	          <div className="clearfix"></div>
	          <div className="columns">
	            {
          	  	 	Select.map(function(i) {
          	  	 		return <BoxContent index={i} key={i} />;
          	  	 	})
          	  	 }
          	  </div>
	        </div>
	    );
  	}
}


