import React, { PropTypes } from 'react';

export default class LinkComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
				<a href="#"
					onClick={e => {
						e.preventDefault()
						this.props.onClick()
					}}
					>
						{this.children}
					</a>
			)
	}
}

LinkComponent.PropTypes = {
	active : PropTypes.bool.isRequired,
	children : PropTypes.node.isRequired,
	onClick : PropTypes.func.isRequired
}