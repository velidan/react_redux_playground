import React from 'react';
import SearchBar from './SearchBar.component';
import ProductTable from './ProductTable.component';



export default class FilterTableModule extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			filterText : '',
			inStockOnly : false
		};

		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		});
	}

	render() {
		return (
			<section>
				        <SearchBar
				          filterText={this.state.filterText}
				          inStockOnly={this.state.inStockOnly}
				          onUserInput={this.handleUserInput}
				        />

				        <ProductTable 
				          products={this.props.route.products}
				          filterText={this.state.filterText}
				          inStockOnly={this.state.inStockOnly}
				         /> 

			</section>
			)
	}
}