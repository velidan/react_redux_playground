import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/FilterActions';
import LinkComponent from '../components/Link.component';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick : () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

const FilterLinkContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LinkComponent)

export default FilterLinkContainer;