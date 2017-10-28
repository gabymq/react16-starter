import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Row,Col,Button} from 'react-bootstrap';
import {fetchPost,deletePost} from '../../actions';

function mapStateToProps({posts},ownProps){
	let { id } = ownProps.match.params;

	return {post:posts[id]};
}

class PostShow extends Component{
	componentDidMount(){
		let { post = null } = this.props;
		if( !( post ) ){
			let { id } = this.props.match.params;
			this.props.fetchPost(id);
		}
	}

	onDeleteClick(){
		let { id } = this.props.match.params;

		this.props.deletePost(id,()=>{
			this.props.history.push('/');
		});
	}

	render(){
		const { post = null } = this.props;

		return (! ( post ) ) ?
		(
			<Row>Loading...></Row>
		) :
		(
			<Row>
				<Col md={6}>
					<Button bsStyle="link"><Link to="/">Back to Index</Link></Button>
					<Button bsStyle="danger" onClick={this.onDeleteClick.bind(this)}>Delete Post</Button>
					<h3>{post.title}</h3>
					<h6>{post.categories}</h6>
					<p>{post.content}</p>
				</Col>
			</Row>
		);
	}
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);
