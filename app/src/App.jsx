import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Actions as PlayerActions } from "./dux/Player";

import Components from "./components/package";

import Flow from "./fkbg-core/flow/package";
import Resource from "./fkbg-core/mats/Resource";
import Config from "./fkbg-core/config";

import { webSocket } from "rxjs/webSocket";

import Cell from "./util/flow/Cell";
import Organelle from "./util/flow/Organelle";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Result: null,
			Message: null
		};
	}

	componentDidMount() {
		let cell = new Cell(
				(payload) => {
					return payload.Input === true
				},
				[
					new Organelle((payload, organelle, cell) => {
						console.log(payload, organelle, cell);
					})
				]
			),
			subscriber = {
				next(...args) {
					console.log(`OBSERVABLE - ${ args[0].Type }`);
					console.log(...args);
				}
			},
			subscriber2 = {
				next(...args) {
					console.log(`OBSERVABLE 2 - ${ args[0].Type }`);
					console.log(...args);
				}
			};

		cell.Subscribe(subscriber);
		cell.Subscribe(subscriber2);
		cell.Metabolize({
			Input: true
		});
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