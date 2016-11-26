import React, { PropTypes } from 'react';
import TodoComponent from './Todo.component';



export default class TodoListComponent extends React.Component {
	
	constructor(props) {
		super(props);
	}


	render () {

		let todos  = [];

		this.props.todos.forEach(todoItem => {
			todos.push(
					<TodoComponent
						key={todoItem.id} 
						onClick={this.props.onTodoClick}
						{...todoItem} />
				)
		})


		return (
				<div>
				<ul>{todos}</ul>
				<button onClick={this.props.onShowActive}>Show Active</button>
				<button onClick={this.props.onShowAll}>Show All</button>
				<button onClick={this.props.onShowCompleted}>Show Completed</button>
</div>
			)
	}
}

TodoListComponent.propTypes = {
	todos : PropTypes.arrayOf(PropTypes.shape({
		id : PropTypes.number.isRequired,
		completed : PropTypes.bool.isRequired,
		text : PropTypes.string.isRequired
	}).isRequired).isRequired,
	onShowActive : PropTypes.func.isRequired,
	onShowAll : PropTypes.func.isRequired,
	onShowCompleted : PropTypes.func.isRequired,
	onTodoClick : PropTypes.func.isRequired
}