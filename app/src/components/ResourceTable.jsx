import React, { Component } from "react";

class ResourceTable extends Component {
	render() {
		return (
			<table className="table text-center">
				<thead>
					<tr>
						<th className="text-center">
							<div className="mif-coins fg-amber"></div>
						</th>
						<th className="text-center">
							<div className="mif-florist fg-darkGreen"></div>
						</th>
						<th className="text-center">
							<div className="mif-restaurant fg-crimson"></div>
						</th>
						<th className="text-center">
							<div className="mif-image fg-steel"></div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{ this.props.resources[0] }</td>
						<td>{ this.props.resources[1] }</td>
						<td>{ this.props.resources[2] }</td>
						<td>{ this.props.resources[3] }</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default ResourceTable;