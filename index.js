import $ from "jquery";

class Base {
  constructor(type) {
    this._type = type;
  }
  
  get type() {
    return this._type;
  }

  get name() {
    return this._name;
  }
}

class Bundle extends Base {
  constructor(spec) {
    super("Bundle");
    this._name = spec.name;
    this._offers = [];
    spec.offers.map(offer => this._offers.push(new Offer(offer)));
  } 
}

class Offer extends Base {
  constructor(spec) {
    super("Offer");
    this._name = spec.name;
  }
}

window.bundle = new Bundle({
  name : "Super bundle",
  offers : [
    {name : "Good offer"},
    {name : "Bad offer"}    
  ]
});
