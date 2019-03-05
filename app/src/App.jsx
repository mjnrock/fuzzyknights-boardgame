import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Actions as PlayerActions } from "./dux/Player";

import Components from "./components/package";

import Flow from "./fkbg-core/flow/package";
import Resource from "./fkbg-core/Resource";

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
		rflow.Add(res, 4);
		res = rflow.Add(res, 501)
		rflow.Add(res, 9);

		console.log(rflow);
    }

	render() {
		return (
            <div>
				
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