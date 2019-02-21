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
						<div>Each player receives an initial cache of resources, as specified below.</div>

						<ResourceList wood="+10" coin="+5" />
					</li>
					
					<li className="mb-7">
						<h4>Determine "First Player"</h4>
						<div>Every Player will roll <code>1d6</code>.  The highest roll goes first and Player turn-order will proceed <span className="text-bold">counter clockwise</span> from the "First Player".</div>
						<div>In the event of ties on the highest rolls, those Players continue to roll <code>1d6</code> until the tie is resolved.</div>
					</li>
					
					<li className="mb-7">
						<h4>Play Phases</h4>
						<div>Turns are broken down into <span className="text-bold">two (2)</span> types: 1) Days and 2) Player turns.  Before <span className="text-bold">all</span> Player turns, a new Day arises resulting in resource gains and the ability to strengthen fortifications and military size.</div>
						<div className="mt-2">
							Once <span className="text-bold">all</span> Players have gone through the phases below
							<ul>
								<li>Resource Phase</li>
								<li>Remittance Phase</li>
								<li>Build & Recruitment Phase</li>
							</ul>
							then the "Day Portion" is over and Exploration Phases begin for the Players, starting with the "First Player" and moving <span className="text-bold">counter clockwise</span> through the Players.
						</div>

						<div className="pl-4">
							<h5 className="mt-4">Resource Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Cities</h6>
								<div>Each Player receives the cache below for each City that s/he owns.</div>
						
								<ResourceList wood="+1" coin="+2" food="+1" stone="+1" />							
							</div>

							<div className="pl-4">
								<h6 className="text-bold">Mines</h6>
								<div>For each resource Mine that a Player owns, receive <code>+1</code> of that resource.</div>
							</div>
						</div>

						<div className="pl-4">
							<h5 className="mt-4">Remittance Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Heroes</h6>
								<div>Each Player must pay the fees below for <span className="text-bold">each Hero</span> that s/he owns, unless that Hero is currently at a City.</div>
									
								<ResourceList food="-1" />							
							</div>
						</div>

						<div className="pl-4">
							<h5 className="mt-4">Build & Recruitment Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Buildings</h6>
								<div>Players can build Spawners in any Cities that s/he presently owns according to the the build fees below.</div>						
								<div>Rank 2 upgrades can only be purchased once its Rank 1 building has been built.</div>
								<table className="table">
									<thead>
										<tr>
											<th className="text-center">Spawner</th>
											<th className="text-center"><input data-stared-color="amber" data-role="rating" data-value="1" data-stars="2" /></th>
											<th className="text-center"><input data-stared-color="amber" data-role="rating" data-value="2" data-stars="2" /></th>
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
								<div>Players can purchase as many recruits as s/he can afford, provided that s/he has also purchased the appropriate Spawner.</div>
								<table className="table">
									<thead>
										<tr>
											<th className="text-center">Creature</th>
											<th className="text-center"><input data-stared-color="amber" data-role="rating" data-value="1" data-stars="2" /></th>
											<th className="text-center"><input data-stared-color="amber" data-role="rating" data-value="2" data-stars="2" /></th>
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
					
					<li className="mb-7">
					<h4>Exploration Phase</h4>
						<div className="pl-4">
							<h5 className="mt-4">Remittance Phase</h5>

							<div className="pl-4">
								<h6 className="text-bold">Heroes</h6>
								<div>Each Player must pay the fees below for <span className="text-bold">each Hero</span> that s/he owns, unless that Hero is currently at a City.</div>
									
								<ResourceList food="-1" />							
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