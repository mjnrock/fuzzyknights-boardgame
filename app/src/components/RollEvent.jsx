import React, { Component } from "react";

import Dice from "../util/Dice";
import Config from "../fkbg-core/config";

class RollEvent extends Component {
	render() {
		let label = this.props.label || "",
			onClick = this.props.onClick || null;

		return (
			<div className="container">
				<div data-role="tile" data-size="medium" data-effect="hover-slide-up" onClick={ onClick }>
					<div className="slide-front d-flex flex-justify-center flex-align-center p-4 op-crimson">
						<p className="text-center">
							<span className="f1">{ this.props.icon }</span>
						</p>
					</div>
					<div className="slide-back d-flex flex-justify-center flex-align-center p-4 op-crimson">
						<p className="text-center">
							<img src={ `/assets/images/${ this.props.dice }.png` } />
						</p>
					</div>
					<span className="branding-bar fg-white text-center">{ label }</span>
				</div>
			</div>
		);
	}
}

export default RollEvent;