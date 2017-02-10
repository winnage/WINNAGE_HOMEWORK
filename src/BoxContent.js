import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {SubBox} from './SubBox';

export class BoxContent extends Component {
	state = {
		SubCollumn:'1',
	}

	handleChangeSubBox = (event) =>{
		this.setState({SubCollumn: event.target.value});	
	}
	render(){
		var subSsBox = [];
		for(var i=0; i<=this.state.SubCollumn-1;i++){
			subSsBox.push(i);
		}
		return(
			<div className="column">
              <div className="notification is-danger">
              	<h3>First column</h3>
              	<hr />
				<p className="control">
		            <span>Select Number </span>
		            <span className="select">
		              <select onChange={this.handleChangeSubBox}>
		                <option value="1" defaultValue>1</option>
		                <option value="2">2</option>
		                <option value="3">3</option>
		                <option value="4">4</option>
		              </select>
		            </span>
		        </p>
		        <div className="columns">
		            {
	          	  	 	subSsBox.map(function(i) {
	          	  	 		return <SubBox index={i} key={i} />;
	          	  	 	})
	          	  	 }
          	  	</div>
              </div>
            </div>
		);
	}
}
