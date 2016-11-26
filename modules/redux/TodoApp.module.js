import React, { PropTypes }  from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'

import TodoListComponent from './TodoList.component';
import FooterComponent from './Footer.component';
import VisibleTodoListComponent from './containers/VisibleTodoList.component';
import AddTodoComponent from './containers/AddTodo.component';

import { showActive, showAll, showCompleted } from './actions/FilterActions';

class TodoAppModule extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props);
		this.onTodoClick = this.onTodoClick.bind(this);
	}

	onTodoClick(todoId) {
		console.log(todoId);
	}

	render() {
		return (
			<main>

				<TodoListComponent 
				todos={this.props.todos}
				onShowActive={this.props.showActive}
				onShowAll={this.props.showAll}
				onShowCompleted={this.props.showCompleted}
				onTodoClick={this.props.onTodoClick}
				 />

				 <FooterComponent />
		

			</main>
			)
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
		showActive : bindActionCreators(showActive, dispatch),
		showAll : bindActionCreators(showAll, dispatch),
		showCompleted : bindActionCreators(showCompleted, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppModule);