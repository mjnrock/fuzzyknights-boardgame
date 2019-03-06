class Proposition {
	constructor(condition, onTrue, onFalse, onError = null, onComplete = null) {
		this.Condition = condition;
		this.OnTrue = onTrue;
		this.OnFalse = onFalse;

		this.OnError = onError;
		this.OnComplete = onComplete;
	}

	Evaluate(...args) {
		if(typeof this.Condition !== "function" || typeof this.OnTrue !== "function" || typeof this.OnFalse !== "function") {
			throw new Error("All parameters must be functions.");
		}

		try {
			let result = this.Condition(...args);

			if(result) {
				this.OnTrue([ this.Condition, ...args ]);
			} else {
				this.OnFalse([ this.Condition, ...args ]);
			}

			if(this.OnComplete && typeof this.OnComplete === "function") {
				this.OnComplete([ this.Condition, ...args ]);
			}
		} catch (e) {
			if(this.OnComplete && typeof this.OnError === "function") {
				this.OnError([ this.Condition, ...args ], e);
			} else {
				console.warn(e);
			}
		}
	}
}

export default Proposition;