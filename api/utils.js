"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.jsonNeed = function (parsedJson, res) {
        var keys = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            keys[_i - 2] = arguments[_i];
        }
        for (var key in keys) {
            if (parsedJson[key] == undefined) {
                res.send({ "type": "error", "code": "812", "description": "Incorrect json input. Expecting field " + parsedJson[key] + " found undefined." });
                return false;
            }
        }
        return true;
    };
    return Utils;
}());
exports.Utils = Utils;
