import _ from 'lodash';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Button,Row,Col,ListGroup,ListGroupItem } from 'react-bootstrap';
import {fetchPosts} from '../../actions';

function mapStateToProps({posts}){
	return {posts};
}

class PostList extends Component{
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, ({id,title})=>{
			return (
				<ListGroupItem key={id}>
					<Link to={`/posts/${id}`}>
						{title}
					</Link>
				</ListGroupItem>
			);
		});
	}

	render(){
		return(
			<Col>
				<Row>
					<Button bsStyle="success">
						<Link to="/posts/new">
							Add a post
						</Link>
					</Button>
					<h3>Posts</h3>
					<ListGroup>
						{this.renderPosts()}
					</ListGroup>
				</Row>
			</Col>
		)
	}
}

export default connect(mapStateToProps,{fetchPosts})(PostList);
