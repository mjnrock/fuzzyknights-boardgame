import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { RequestGame } from "./dux/API";

import Components from "./components/package";

class App extends Component {
    componentDidMount() {
        // this.props.RequestGame();
    }

	render() {
		// return (
        //     <div>{ JSON.stringify(this.props.API) }</div>
		// );
		return (
            <div>
				<Components.Manual.Ch0.Overview />
			</div>
		);
	}
}
export default connect(
	(state) => ({
        API: state.API
    }),
	(dispatch) => ({
        RequestGame: () => dispatch(RequestGame()),
    })
)(App);