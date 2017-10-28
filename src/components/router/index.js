import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as route from './availableRoutes';

export const Router = (props)=>{
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={route.PostList} />
				<Route exact path="/posts/new" component={route.PostNew} />
				<Route exact path="/posts/:id" component={route.PostShow} />
			</Switch>
		</BrowserRouter>
	);
}
