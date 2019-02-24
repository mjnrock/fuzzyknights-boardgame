const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const expressWS = require("express-ws")(express());
const app = expressWS.app;

const PORT = 3087;

import FKBG from "./fkbg-core/package";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
	console.log(`FuzzyKnights Board Game API is now listening on port: ${PORT}`);
});

app.get("/validate", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.set("Content-Type", "Application/json");
    res.status(200).send({
        "verified": new FKBG.Player("Cat", "blue")
    });
});

//! Use this and/or a GET/POST API to coordinate Save/Load for the Player
app.ws("/ws", function (client, req) {
	console.log(`[CLIENT CONNECTED]: { Timestamp: ${Date.now()}, IP: ${req.connection.remoteAddress} }`);

	client.on("message", function(msg) {
		console.log(`[MESSAGE RECEIVED]: { Timestamp: ${Date.now()} }`);
	});

	client.on("close", function() {
		console.log(`[CLIENT DISCONNECTED]: { Timestamp: ${Date.now()}, IP: ${req.connection.remoteAddress} }`);
	});
});

// //?		get Object.keys($.Common.Entity.EntityManager.Entities)
// STDIN.addListener("data", function(d) {
// 	let args = d.toString().trim().replace(/^\s+|\s+$/g, '').split(" ");
// 	if(args[0] === "get") {
// 		if(args[1] !== null && args[1] !== void 0) {
// 			try {
// 				let obj = args[1].replace("$", "FuzzyKnights");
// 				console.log(util.inspect(eval(obj)));
// 			} catch (e) {
// 				console.log("[WARNING]: Invalid command.");
// 			}
// 		}
// 	} else if(args[0] === "exit" || args[0] === "stop") {
// 		//  Kill the current Node instance
// 		process.exit();
// 	} else if(args[0] === "t" || args[0] === "test") {
// 		let vars = args.length > 1 ? args.slice(2) : [];
// 		RunTestCase(args[1] ? args[1] : 1, ...vars);
// 	} else if(args[0] === "eval") {
// 		if(args.length > 1) {
// 			let input = args.slice(1).join(" ");
// 			try {
// 				let result = eval(input);
	
// 				if(result !== void 0) {
// 					console.log(result);
// 				}
// 			} catch (e) {
// 				console.log("[WARNING]: Invalid command.");
// 			}
// 		}
// 	}
// });