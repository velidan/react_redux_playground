import React, {PropTypes} from 'react';

export default class TodoComponent extends React.Component {


		constructor(props) {
			super(props);
			this.onClick = this.onClick.bind(this);
		}



		onClick(e) {
			console.log("TODO click", this.props);
			this.props.onClick(this.props.id);
		}

		render () {
			return (

					<li
						onClick={this.onClick}
						style={{
							textDecoration : this.props.completed ? 'line-through' : 'none'
						}}
					>
						{this.props.text}
					</li>

				)
		}

}

TodoComponent.propTypes = {
	onClick : PropTypes.func.isRequired,
	completed : PropTypes.bool.isRequired,
	text : PropTypes.string.isRequired
}