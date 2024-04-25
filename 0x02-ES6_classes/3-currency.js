export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  //   CREATE A GETTTER
  get code() {
    return this._code;
  }

  //   CREATE A CODE SETTER
  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code Must be a string');
    }
  }

  //   CREATE A GETTER FOR NAME
  get name() {
    return this._name;
  }

  // SETTER
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name Must be a string');
    }
  }

  //   Methods

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
