import React, { PropTypes } from 'react';
import FilterLinkContainer from '../containers/FilterLink.container';

export default class FooterComponent extends React.Component {

	render () {
		return (
			<p>
			Show:
			{" "}
			<FilterLinkContainer filter="SHOW_ALL">
				Show All
			</FilterLinkContainer>
			{", "}
			<FilterLinkContainer filter="SHOW_ACTIVE">
				Show Active
			</FilterLinkContainer>
			{", "}
			<FilterLinkContainer filter="SHOW_COMPLETED">
				Show Completed
			</FilterLinkContainer>
			</p>
			)
	}
} 