import React, { PropTypes }  from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'


import FooterComponent from './components/Footer.component';
import VisibleTodoListContainer from './containers/VisibleTodoList.container';
import AddTodoContainer from './containers/AddTodo.container';

class TodoAppModule extends React.Component {


	render() {
		return (
			<main>

				<VisibleTodoListContainer />
				<FooterComponent />

			</main>
			)
	}
}


export default TodoAppModule;