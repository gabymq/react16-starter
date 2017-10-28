import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import reducers from '../reducers';

let middlewareApplied = [promise];

if( process.env.NODE_ENV === "development" )	middlewareApplied.push( createLogger() );

const createStoreWithMiddleware = applyMiddleware(...middlewareApplied)(createStore);

export default function configureStore(){
	return createStoreWithMiddleware( reducers );
}
