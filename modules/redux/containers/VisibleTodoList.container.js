import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'

import { showActive, showAll, showCompleted } from '../actions/FilterActions';
import { toggleTodo } from '../actions/TodosActions';

import TodoListComponent from '../components/TodoList.component';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


function mapStateToProps(state) {
	console.log(state);
	return {
		todos : state.todos.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onShowActive : bindActionCreators(showActive, dispatch),
		onShowAll : bindActionCreators(showAll, dispatch),
		onShowCompleted : bindActionCreators(showCompleted, dispatch),
		onTodoClick : bindActionCreators(toggleTodo, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);