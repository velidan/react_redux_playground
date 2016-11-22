import React, { PropTypes } from 'react';
import FilterLinkComponent from './containers/FilterLink.component';

export default class FooterComponent extends React.Component {

	render () {
		return (
			<p>
			Show:
			{" "}
			<FilterLinkComponent filter="SHOW_ALL">
				All
			</FilterLinkComponent>
			{", "}
			<FilterLinkComponent filter="SHOW_ACTIVE">
				All
			</FilterLinkComponent>
			{", "}
			<FilterLinkComponent filter="SHOW_COMPLETED">
				All
			</FilterLinkComponent>
			</p>
			)
	}
} 