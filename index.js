import $ from "jquery";

class Base {
  constructor(type) {
    this._type = type;
  }
  
  get type() {
    return this._type;
  }
}

class Bundle extends Base {
  constructor(spec) {
    super("Bundle");
    this._name = spec.name;
    this._offers = [];
    spec.offers.each(offer => this._offers.push(new Offer(offer)));
  } 
}
