import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { Grid,Row,Col } from 'react-bootstrap';
import { Router } from '../../components/router';
import configureStore from '../../stores/configureStore';

export default class App extends Component{
	constructor(){
		super();

		this.store = configureStore();
	}

	render(){
		return(
			<Grid>
				<Row>
					<Col md={12}>
					<Provider store={ this.store }>
						<Router />
					</Provider>
					</Col>
				</Row>
			</Grid>

		);
	}
}
