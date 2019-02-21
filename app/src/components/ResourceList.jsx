import React, { Component } from "react";

class ResourceList extends Component {
	render() {
			let Resources = {
				Coin: {
					Icon: null,
					Color: null,
					Value: null
				},
				Wood: {
					Icon: null,
					Color: null,
					Value: null
				},
				Food: {
					Icon: null,
					Color: null,
					Value: null
				},
				Stone: {
					Icon: null,
					Color: null,
					Value: null
				}
			};
		
			if(this.props.coin) {
				Resources.Coin = {
					Icon: "mif-coins fg-amber",
					Color: this.props.coin.indexOf("+") > -1 ? "fg-emerald" : ( this.props.coin.indexOf("-") > -1 ? "fg-crimson" : "fg-black" ),
					Value: this.props.coin !== null && this.props.coin !== void 0 ? this.props.coin : null
				};
			}
			if(this.props.wood) {
				Resources.Wood = {
					Icon: "mif-florist fg-darkGreen",
					Color: this.props.wood.indexOf("+") > -1 ? "fg-emerald" : ( this.props.wood.indexOf("-") > -1 ? "fg-crimson" : "fg-black" ),
					Value: this.props.wood !== null && this.props.wood !== void 0 ? this.props.wood : null
				};
			}
			if(this.props.food) {
				Resources.Food = {
					Icon: "mif-restaurant fg-crimson",
					Color: this.props.food.indexOf("+") > -1 ? "fg-emerald" : ( this.props.food.indexOf("-") > -1 ? "fg-crimson" : "fg-black" ),
					Value: this.props.food !== null && this.props.food !== void 0 ? this.props.food : null
				};
			}
			if(this.props.stone) {
				Resources.Stone = {
					Icon: "mif-image fg-steel",
					Color: this.props.stone.indexOf("+") > -1 ? "fg-emerald" : ( this.props.stone.indexOf("-") > -1 ? "fg-crimson" : "fg-black" ),
					Value: this.props.stone !== null && this.props.stone !== void 0 ? this.props.stone : null
				};
			}

		return (
			<ul className="items-list">
				{
					Resources.Coin.Value ?
					<li className="item">
						<div className={ `avatar ${ Resources.Coin.Icon }` }></div>
						<span className={ `label text-bold ${ Resources.Coin.Color }` }>{ Resources.Coin.Value }</span>
					</li> : null
				}
				{
					Resources.Wood.Value ?
					<li className="item">
						<div className={ `avatar ${ Resources.Wood.Icon }` }></div>
						<span className={ `label text-bold ${ Resources.Wood.Color }` }>{ Resources.Wood.Value }</span>
					</li> : null
				}
				{
					Resources.Food.Value ?
					<li className="item">
						<div className={ `avatar ${ Resources.Food.Icon }` }></div>
						<span className={ `label text-bold ${ Resources.Food.Color }` }>{ Resources.Food.Value }</span>
					</li> : null
				}
				{
					Resources.Stone.Value ?
					<li className="item">
						<div className={ `avatar ${ Resources.Stone.Icon }` }></div>
						<span className={ `label text-bold ${ Resources.Stone.Color }` }>{ Resources.Stone.Value }</span>
					</li> : null
				}
			</ul>
		);
	}
}

export default ResourceList;