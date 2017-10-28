import axios from 'axios';
import {
	ROOT_URL,
	API_KEY
} from '../constants/auth';
import {
	FETCH_POST,
	FETCH_POSTS,
	CREATE_POST,
	DELETE_POST,
} from '../constants/actionTypes';


export function fetchPost(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request,
	}
}

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request,
	}
}

export function createPost(values,cb){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values).then( () => cb() );

	return {
		type: CREATE_POST,
		payload: request,
	}
}

export function deletePost(id,cb){
	axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then( () => cb() );

	return {
		type: DELETE_POST,
		payload: id,
	}
}
