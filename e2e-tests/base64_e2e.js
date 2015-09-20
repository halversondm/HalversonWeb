/**
 * Created by Daniel on 9/4/2015.
 */


'use strict';

describe('Base64 Page Tests', function () {

    beforeEach(function () {
        browser.get('#/base64');
    });

    it('encodes', function() {
        element(by.id('encodeInput')).sendKeys('jpmc1234');
        element(by.id('encode')).click();

        expect(element(by.binding('encodeOutput')).getText()).toEqual('anBtYzEyMzQ=');
    });

    it('decodes', function() {
        element(by.id('decodeTab')).element(by.css('a')).click();
        element(by.id('decodeInput')).sendKeys('anBtYzEyMzQ=');
        element(by.id('decode')).click();

        expect(element(by.binding('decodeOutput')).getText()).toEqual('jpmc1234');
    });

});
