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
import Beacon from "./util/entity/Beacon";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Result: null,
			Message: null
		};
	}

	componentDidMount() {
		// let CacheRoller = new Cell([
		// 	new Organelle("roll-dP", (payload, oldPayload, o, c) => {
		// 		let roll = Dice.DP();

		// 		return {
		// 			...payload,
		// 			dp: roll,
		// 			cacheType: roll >= 80 ? "large" : "small"
		// 		};
		// 	}),
		// 	new Organelle("cache-size", (payload, oldPayload, o, c) => ({
		// 		...payload,
		// 		dice: payload.cacheType === "large" ? [ 2, 6 ] : [ 1, 6 ]
		// 	})),
		// 	new Organelle("cache-qty", (payload, oldPayload, o, c) => ({
		// 		...payload,
		// 		roll: Dice.Roll(...payload.dice)
		// 	}))
        // ]),
        // CacheRoller2 = CacheRoller.Copy(),
        // CacheRoller3 = CacheRoller.Copy(),
        // CacheRoller4 = CacheRoller.Copy(),
        // ant = new Relay();

        // ant.Attach(Cell.EnumEventType.METABOLISM, (obj) => {
        //     console.log(obj.data.Outflux.roll);
        // });

        // console.log(CacheRoller.GetHash());
        // console.log(CacheRoller);
        // console.log(CacheRoller2);

		// // CacheRoller.Subscribe(ant);
        // CacheRoller4.Subscribe(ant);

        // // CacheRoller2.Activator = () => Math.random() >= 0.5 ? true : false;

        // // CacheRoller.Entangle(CacheRoller2).Entangle(CacheRoller3).Entangle(CacheRoller4);
		// CacheRoller.Metabolize();
		
		let WS = new Cell([
			new Organelle("message", (payload, oldPayload, o, c) => {
				console.log(payload, oldPayload, c);

				// c.$_speak("watuh").$_speak("watuh2");
				// WS.Perform("$_speak", "watuh");
			})
		]);

        let beacon = new Beacon();
		beacon.Attach(Cell.EnumEventType.METABOLISM, (obj) => {
            console.log(obj);
		});
		WS.Subscribe(beacon);
		
		WS.Train("$_websocket", (cell, host, port, endpoint = "/") => {
			if(endpoint[0] !== "/") {
				endpoint = `/${ endpoint }`;
			}

			cell.SetState({
				connection$: webSocket(`ws://${ host }:${ port }${ endpoint }`)
			});
			cell.GetState().connection$.subscribe(
				(payload, oldPayload) => cell.Metabolize(payload, oldPayload)
			);

			return cell;
		})
			.Train("$_send", (cell, ...args) => {
				cell.GetState().connection$.next(...args);

				return cell;
			});
		WS.Perform("$_websocket", "localhost", 3087, `/ws`)
			.Perform("$_send", "PAYLOADDDDDDDDD");

		let WS2 = WS.Copy();

		WS.Train("$_speak", (cell, ...args) => {
			console.log("HEYA! ^_^", ...args);

			return cell;
		});

		WS.Perform("$_speak", "watuhzzz");
		WS.Teach("$_speak", WS2);
		WS2.Perform("$_speak", "TAUGHT");

		console.log(WS);
		console.log(WS2);



		// TODO :: This code creates an intervalic broadcaster; add this functionality to Cell to .Metabolize at interval
		//? Perhaps use the Cell's state as the payload when called at interval
		//! This code can make the Cell be able to perform a Game Loop once integrated
		// var pauser = new Rx.Subject();
		// var source = Rx.Observable
		// 	.interval(500)
		// 	.timeInterval()
		// //   .map(function (x) { return x.value + ':' + x.interval; })
		// 	.pausable(pauser);
	
		// var subscription = source.subscribe(
		// 	function (x) {
		// 		$("#result").append('Next: ' + x + ' ');
		// 	},
		// 	function (err) {
		// 	$("#result").append('Error: ' + err);
		// 	},
		// 	function () {
		// 	$("#result").append('Completed');
		// });
	
		// 	// To begin the flow
		// pauser.onNext(true); // or source.resume();
	
		// // To pause the flow at any point
		// pauser.onNext(false);  // or source.pause();		
		
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