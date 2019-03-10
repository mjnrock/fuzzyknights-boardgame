import { NewUUID } from "./../Helper";

const Trigger = {
	Enum: {
		EXACT: "EXACT",
		THRESHOLD: "THRESHOLD",
		RANGE: "RANGE",
		TRUE: "TRUE",
		FALSE: "FALSE",
	},
	Config: {
		True: 0.8,
		False: 0.2
	},

	constructor(fn, type, value) {
		this.UUID = NewUUID();

		this.Callback = fn;
		this.Type = type || Trigger.Enum.TRUE;
		this.Value = value;
	},

	// Attempt(node, ...args) {
	Attempt(charge, ...args) {
		if(type === Trigger.Enum.EXACT) {
			if(+charge === +this.Value) {
				return this.Callback(...args);
			}
		} else if(type === Trigger.Enum.THRESHOLD) {
			if(+charge >= +this.Value) {
				return this.Callback(...args);
			}
		} else if(type === Trigger.Enum.RANGE) {
			if(+charge >= +this.Value[0] && +charge <= +this.Value[1]) {
				return this.Callback(...args);
			}
		} else if(type === Trigger.Enum.TRUE) {
			if(+charge >= +Trigger.Config.True) {
				return this.Callback(...args);
			}
		} else if(type === Trigger.Enum.FALSE) {
			if(+charge <= +Trigger.Config.False) {
				return this.Callback(...args);
			}
		}
	}
}

export default Trigger;