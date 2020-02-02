(function() {
    'use strict';
    var famiconSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return famiconSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = famiconSoftList;
    } else {
        window.gameSoft = {
            famicon: famiconSoftList
        };
    }
})();