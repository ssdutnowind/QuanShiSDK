'use strict';

var ffi = require('ffi');
var ref = require('ref');

// int send_msg(char * phone, char * content)
var lib = ffi.Library(__dirname + '\\lib\\Conference', {
    'getGNetTangService': ['pointer', []]
});

let SDK = {
    getGNetTangService: function () {
        return lib.getGNetTangService();
    }
};

module.exports = SDK;