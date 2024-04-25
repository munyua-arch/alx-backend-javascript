import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  //   Amount getter
  get amount() {
    return this._amount;
  }

  // Amount setter
  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be of type number');
    }
  }

  // Currency getter
  get currency() {
    return this._currency;
  }

  // currency setter
  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
  }

  // method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
