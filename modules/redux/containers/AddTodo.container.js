import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { addTodo } from '../actions/TodosActions';

import AddTodoComponent from '../components/AddTodo.component';

const mapStateToProps = (state) => {
	console.log(state);
	let latestTodoId = 0;
	return {
		latestTodoId : state.todos.reduce((prevVal, currVal) => {

			console.log(( prevVal.id > currVal.id ? prevVal.id : currVal.id ));

			return ( prevVal.id > currVal.id ? prevVal.id : currVal.id );
		})
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddTodo: bindActionCreators(addTodo, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);