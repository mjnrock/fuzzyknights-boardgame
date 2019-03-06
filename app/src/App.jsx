import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Actions as PlayerActions } from "./dux/Player";

import Components from "./components/package";

import Flow from "./fkbg-core/flow/package";
import Resource from "./fkbg-core/mats/Resource";

import { webSocket } from "rxjs/webSocket";

class App extends Component {
    componentDidMount() {
		let rflow = new Flow.ResourceFlow();
		let subscriber = {
			next(value) {
				console.log(value);
			}
		};
		rflow.Subscribe(subscriber);

		let res = new Resource(3, 100);		
		rflow.Inflow(res, "Add", 111);

		rflow.Inflow({
			OldState: res,
			Method: "Add",
			VarArgs: [ 222 ]
		});
		rflow.Inflow([
			res, "Add", [ 333 ]
		]);

		let ws = webSocket("ws://localhost:3087/ws");

		rflow.Subscribe(ws);
		rflow.Add(res, 4);

		ws.subscribe(
			(msg) => {
				console.log(msg);
				rflow.Inflow([
					res, "Add", [ 5 ]
				]);
			}
		);

		console.log(rflow);
    }

	render() {
		return (
            <div>
				<Components.RollEvent
					icon="⚒️"
					dice="dP-yellow"
					label="Mine"
					onClick={ console.log }
				/>
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