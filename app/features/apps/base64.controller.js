/**
 * Created by Daniel on 1/25/2016.
 */
'use strict';

export default class Base64Controller {

    constructor() {
        this.encodeOutput = "";
        this.encodeInput = "";
        this.decodeOutput = "";
        this.decodeInput = "";
    }

    goEncode() {
        this.encodeOutput = window.btoa(this.encodeInput);
    }

    clearEncode() {
        this.encodeOutput = "";
        this.encodeInput = "";
    }

    goDecode() {
        this.decodeOutput = window.atob(this.decodeInput);
    }

    clearDecode() {
        this.decodeOutput = "";
        this.decodeInput = "";
    }

}