import React, { Component } from "react";

class RollTileGrid extends Component {
	render() {
		return (
			<div className={ `tiles-grid tiles-group ${ this.props.size }` } data-group-title={ this.props.title }>
				{ this.props.children }
			</div>
		);
	}
}

export default RollTileGrid;