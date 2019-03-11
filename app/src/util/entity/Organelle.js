import Subscribable from "./Subscribable";

class Organelle extends Subscribable {
	constructor(name, callback, state = {}) {
		super(state);

		this.Metabolizer = callback;

		this.Name = name;
		this.State = Object.freeze(state);
	}
	
	Metabolize(payload, oldPayload, parent) {
		let result = this.Metabolizer(payload, oldPayload, this, parent);

		this.Subject$.next({
			Type: Organelle.EnumEventType.METABOLIZE,
			Influx: Object.freeze(payload),
			Outflux: result
		});

		return result;
    }
    
    Copy() {
        return new Organelle(this.Metabolizer, this.State);
    }
    GetHash() {
        return Subscribable.Hashify({
            Metabolizer: this.Metabolizer,
            State: this.State
        });
    }
}

Organelle.EnumEventType = Object.freeze({
	METABOLISM: "organelle-onmetabolism"
});

export default Organelle;