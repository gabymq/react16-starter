import _ from 'lodash';
import {
	FETCH_POSTS,
	FETCH_POST,
	DELETE_POST
} from '../constants/actionTypes';


export default function (state={},{type,payload}){
	switch(type){
		case FETCH_POST:
		const { data } = payload;
		return {...state, [data.id] : data };

		case FETCH_POSTS:
		return _.mapKeys(payload.data,'id');

		case DELETE_POST:
		return _.omit(state,payload);

		default:
		return state;
	}
}
