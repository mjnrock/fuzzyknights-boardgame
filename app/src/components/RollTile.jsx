import React, { Component } from "react";

import Dice from "../util/Dice";

class RollTile extends Component {
	render() {
		let label = this.props.label || "",
			onClick = this.props.onClick || null;

		return (
			<div
				data-role="tile"
				data-size="medium"
				data-effect="hover-slide-up"
				onClick={ onClick }
			>
				<div className="slide-front d-flex flex-justify-center flex-align-center p-4 op-darkIndigo">
					<p className="text-center">
						<span className="f1">{ this.props.icon }</span>
					</p>
				</div>
				<div className="slide-back d-flex flex-justify-center flex-align-center p-4 op-darkIndigo">
					<p className="text-center">
						<img src={ `/assets/images/${ this.props.diceIcon }.png` } />
					</p>
				</div>
				<span className="branding-bar fg-white text-center">{ label }</span>
			</div>
		);
	}
}

export default RollTile;