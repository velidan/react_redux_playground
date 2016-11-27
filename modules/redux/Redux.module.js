import React, { PropTypes }  from 'react';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';


import TodoAppModule from './TodoApp.module';

let store = configureStore();
console.log(store, store.getState());

export default class ReduxModule extends React.Component {



	render() {
		return (
			<Provider store={store}>
				<TodoAppModule  />
			</Provider>
			)
	}
}

