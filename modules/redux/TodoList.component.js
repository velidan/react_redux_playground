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
				<button onClick={this.props.onTodoClick}>ShowActive</button>
				<button onClick={this.props.onShowAll}>ShowAll</button>
				<button onClick={this.props.onShowCompleted}>ShowCompleted</button>
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
	onTodoClick : PropTypes.func.isRequired
}