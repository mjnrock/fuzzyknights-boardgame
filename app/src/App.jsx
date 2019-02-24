import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Actions as PlayerActions } from "./dux/Player";

import Components from "./components/package";

class App extends Component {
    componentDidMount() {
        console.log(this.props);
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
        AcquireResource: () => dispatch(PlayerActions.AcquireResource()),
        SpendResource: () => dispatch(PlayerActions.SpendResource()),
        ExchangeResource: () => dispatch(PlayerActions.ExchangeResource()),
    })
)(App);