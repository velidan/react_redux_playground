import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import initialTodos from './initialTodos';

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	initialTodos
})

export default todoApp;