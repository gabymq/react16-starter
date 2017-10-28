import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { Button,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import {createPost} from '../../actions';
const {feedback}=FormControl;

class PostNew extends Component{
	onSubmit(values){
		this.props.createPost(values,()=>{
			this.props.history.push('/');
		});
	}

	renderField({label,input,meta}){
		const {touched,error}   = meta;
		const errorString       = touched ? error : null;

		return(
			<FormGroup controlId={label} validationState={errorString}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl
					type="text" {...input}
				/>
				<feedback />
				<HelpBlock>validation some</HelpBlock>
			</FormGroup>
		);
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<FormGroup>
					<Field
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field
						label="Post Content"
						name="content"
						component={this.renderField}
					/>
					<Button type="submit">Submit</Button>
					<Button bsStyle="link">
						<Link to="/">Cancel</Link>
					</Button>
				</FormGroup>
			</form>
		);
	}
}

function validate(values){
	const errors = {};

	// Add props to errors object
	if( !(values.title) )		errors.title = "Title cannot be empty"
	if( !(values.categories) )	errors.categories = "Categories cannot be empty"
	if( !(values.content) )		errors.content = "Content cannot be empty"

	// if errors == {} everything is OK!
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null,{createPost})(PostNew)
)
