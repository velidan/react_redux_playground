import React, { PropTypes }  from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'

import TodoListComponent from './TodoList.component';
import FooterComponent from './Footer.component';
import VisibleTodoListComponent from './containers/VisibleTodoList.component';
import AddTodoComponent from './containers/AddTodo.component';

import { showActive, showAll, showCompleted } from './actions/TodosActions';

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
				onTodoClick={this.props.showActive}
				onShowAll={this.props.showAll}
				onShowCompleted={this.props.showCompleted}
				 />

				 <FooterComponent />
		

			</main>
			)
	}
}

function mapStateToProps(state) {
	return {
		todos : state.todos
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