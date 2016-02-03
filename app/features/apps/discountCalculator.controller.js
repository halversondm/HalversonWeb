/**
 * Created by Daniel on 1/26/2016.
 */
'use strict';

export default class DiscountCalculatorController {
    
    constructor (discountCalculator) {
        this.discountCalculator = discountCalculator;
        this.errorShow = false;
        this.successShow = false;
        this.discount1 = "";
        this.discount2 = "";
        this.labelPrice = "";
        this.calculationMessage = [];
    }

    calculate () {
        this.discountCalculator.validate(this.discount1, this.discount2,
            this.labelPrice);
        if (!this.discountCalculator.isError()) {
            this.discountCalculator.calculate();
            this.successShow = true;
        } else {
            this.errorShow = true;
        }
        this.calculationMessage = this.discountCalculator.getMessage();
    }

    clear () {
        this.errorShow = false;
        this.successShow = false;
        this.discount1 = "";
        this.discount2 = "";
        this.labelPrice = "";
        this.calculationMessage = [];
    }

}

DiscountCalculatorController.$inject = ['discountCalculator'];