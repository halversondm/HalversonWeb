/**
 * Created by Daniel on 1/26/2016.
 */
"use strict";

class DiscountCalculatorController {

  constructor(discountCalculator) {
    this.discountCalculator = discountCalculator;
    this.errorShow = false;
    this.successShow = false;
    this.discount1 = "";
    this.discount2 = "";
    this.labelPrice = "";
    this.calculationMessage = [];
  }

  calculate() {
    this.discountCalculator.validate(this.discount1, this.discount2,
      this.labelPrice);
    if (this.discountCalculator.isError()) {
      this.errorShow = true;
    } else {
      this.discountCalculator.calculate();
      this.successShow = true;
    }
    this.calculationMessage = this.discountCalculator.getMessage();
  }

  clear() {
    this.errorShow = false;
    this.successShow = false;
    this.discount1 = "";
    this.discount2 = "";
    this.labelPrice = "";
    this.calculationMessage = [];
  }

}
DiscountCalculatorController.$inject = ["discountCalculator"];

export default DiscountCalculatorController;
