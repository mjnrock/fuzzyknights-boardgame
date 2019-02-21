import React, { Component } from "react";
// import Markdown from "react-markdown";

import ResourceTable from "./../../ResourceTable";
import ResourceList from "./../../ResourceList";

// const importAll = (r) => r.keys().map(r);
// const markdownFiles = importAll(require.context('./', false, /\.md$/))
//   	.sort()
// 	.reverse();

class Overview extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		posts: []
	// 	};
	// }

	// async componentDidMount() {
	// 	const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
	// 	.catch((err) => console.error(err));

	// 	this.setState((state) => ({ ...state, posts }));

	// 	console.log(this.state);
	// }

	render() {
		return (
			<div>
				<h3>Getting Started</h3>
				<ul className="step-list">
					<li className="mb-7">
						<h4>Distribute Resources</h4>
						<p>Each player receives an initial cache of resources, as specified below.</p>

						<ResourceList wood="+10" coin="+5" />
					</li>
					
					<li className="mb-7">
						<h4>Determine "First Player"</h4>
						<p>Every Player will roll <code>1d6</code>.  The highest roll goes first and Player turn-order will proceed <span className="text-bold">counter clockwise</span> from the "First Player".</p>
						<p>In the event of ties on the highest rolls, those Players continue to roll <code>1d6</code> until the tie is resolved.</p>
					</li>
					
					<li className="mb-7">
						<h4>Play Phases</h4>

						<div className="pl-4">
							<h5 className="mt-4">Resource Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Cities</h6>
								<p>Each Player receives the cache below for each City that s/he owns.</p>
						
								<ResourceList wood="+1" coin="+2" food="+1" stone="+1" />							
							</div>

							<div className="pl-4">
								<h6 className="text-bold">Mines</h6>
								<p>For each resource Mine that a Player owns, receive <code>+1</code> of that resource.</p>
							</div>
						</div>

						<div className="pl-4">
							<h5 className="mt-4">Remittance Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Heroes</h6>
								<p>Each Player must pay the fees below for <span className="text-bold">each Hero</span> that s/he owns, unless that Hero is currently at a City.</p>
									
								<ResourceList food="-1" />							
							</div>
						</div>

						<div className="pl-4">
							<h5 className="mt-4">Build & Recruitment Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Buildings</h6>
								<p>Players can build Spawners in any Cities that s/he presently owns according to the the build fees below.</p>						
								<p>Rank 2 upgrades can only be purchased once its Rank 1 building has been built.</p>
								<table className="table">
									<thead>
										<tr>
											<th className="text-center">Spawner</th>
											<th className="text-center"><input data-role="rating" data-value="1" data-stars="2" /></th>
											<th className="text-center"><input data-role="rating" data-value="2" data-stars="2" /></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-center">Tier 1</td>
											<td><ResourceTable resources={ [ 0, 5, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 0, 10, 0, 0 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 2</td>
											<td><ResourceTable resources={ [ 5, 5, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 10, 10, 0, 0 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 3</td>
											<td><ResourceTable resources={ [ 10, 10, 0, 5 ] } /></td>
											<td><ResourceTable resources={ [ 20, 20, 0, 5 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 4</td>
											<td><ResourceTable resources={ [ 20, 20, 0, 10 ] } /></td>
											<td><ResourceTable resources={ [ 30, 30, 0, 20 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 5</td>
											<td><ResourceTable resources={ [ 30, 30, 30, 30 ] } /></td>
											<td><ResourceTable resources={ [ 50, 50, 50, 50 ] } /></td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="pl-4">
								<h6 className="text-bold">Recruitment</h6>
								<p>Players can purchase as many recruits as s/he can afford, provided that s/he has also purchased the appropriate Spawner.</p>
								<table className="table">
									<thead>
										<tr>
											<th className="text-center">Creature</th>
											<th className="text-center"><input data-role="rating" data-value="1" data-stars="2" /></th>
											<th className="text-center"><input data-role="rating" data-value="2" data-stars="2" /></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-center">Tier 1</td>
											<td><ResourceTable resources={ [ 1, 0, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 1, 0, 1, 0 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 2</td>
											<td><ResourceTable resources={ [ 2, 0, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 2, 0, 2, 0 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 3</td>
											<td><ResourceTable resources={ [ 3, 0, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 3, 0, 3, 0 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 4</td>
											<td><ResourceTable resources={ [ 4, 0, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 4, 0, 4, 0 ] } /></td>
										</tr>
										<tr>
											<td className="text-center">Tier 5</td>
											<td><ResourceTable resources={ [ 5, 0, 0, 0 ] } /></td>
											<td><ResourceTable resources={ [ 5, 0, 5, 0 ] } /></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</li>
				</ul>

				{/* {
					this.state.posts.map((page, i) => {
						return (
							<Markdown source={ page } />
						);
					})
				} */}
			</div>
		);
	}
}

export default Overview;