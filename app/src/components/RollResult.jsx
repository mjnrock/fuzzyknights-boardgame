import React, { Component } from "react";

class RollResult extends Component {
	render() {
		if(this.props.result === true) {
			return (
				<div className="container text-center">
					<p className="f1">️✔️</p>
					<p className="text-center">
						{ this.props.message }
					</p>
				</div>
			);
		}
		
		return (
			<div className="container text-center">
				<p className="f1">️❌</p>
				<p className="text-center">
					{ this.props.message }
				</p>
			</div>
		);
	}
}

export default RollResult;