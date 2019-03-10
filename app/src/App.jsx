import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Actions as PlayerActions } from "./dux/Player";

import Components from "./components/package";

import Flow from "./fkbg-core/flow/package";
import Resource from "./fkbg-core/mats/Resource";
import Config from "./fkbg-core/config";

import { webSocket } from "rxjs/webSocket";

import Dice from "./util/Dice";

import Cell from "./util/entity/Cell";
import Organelle from "./util/entity/Organelle";
import Antenna from "./util/entity/Antenna";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Result: null,
			Message: null
		};
	}

	componentDidMount() {
		let CacheRoller = new Cell([
			new Organelle((payload, o, c) => {
				let roll = Dice.DP();

				return {
					...payload,
					dp: roll,
					cacheType: roll >= 80 ? "large" : "small"
				};
			}),
			new Organelle((payload, o, c) => ({
				...payload,
				dice: payload.cacheType === "large" ? [ 2, 6 ] : [ 1, 6 ]
			})),
			new Organelle((payload, o, c) => ({
				...payload,
				roll: Dice.Roll(...payload.dice)
			}))
		]),
		CacheListener = {
			next: (caller, obj) => {
				if(obj.type === Cell.EnumEventType.METABOLISM) {
					return obj.data.Outflux.roll;
				}

				return obj;
			}
		},
		ant = new Antenna();

		CacheRoller.Subscribe(ant).Metabolize();

	}

	setLastResult(result, message) {
		this.setState({
			Result: result,
			Message: message
		});
	}

	RollDice(sequence = []) {
		sequence.forEach((v, i) => {

		});
	}

	render() {
		return (
			<div className="container">
				<Components.RollTileGrid
					size="size-2"
					title="General"
				>
					<Components.RollTile
						icon="⚒️"
						diceIcon="dP-yellow"
						label="Mine"
						sequence={[
							{
								Roll: [ "DP", 1, 0 ],
								Threshold: Config.MINE_THRESHOLD,
								Success: true,
								Failure: false
							},
							{
								Roll: [ "D6", 1, 0 ]
							}
						]}
						onClick={ console.log }
					/>
					<Components.RollTile
						icon="💰"
						diceIcon="dP-yellow"
						label="Resources"
						onClick={ console.log }
					/>
					<Components.RollTile
						icon="🎁"
						diceIcon="dP-yellow"
						label="Items"
						onClick={ console.log }
					/>
					<Components.RollTile
						icon="🧟"
						diceIcon="d6-yellow"
						label="Creatures"
						onClick={ console.log }
					/>
					<Components.RollResult
						result={ this.state.Result }
						message={ this.state.Message }
					/>
				</Components.RollTileGrid>
			</div>
		);
	}
}

export default connect(
	(state) => ({
        Players: state.Player
    }),
	(dispatch) => ({
        AddPlayer: (name, color) => dispatch(PlayerActions.AddPlayer(name, color)),
        RemovePlayer: (name) => dispatch(PlayerActions.RemovePlayer(name))
    })
)(App);