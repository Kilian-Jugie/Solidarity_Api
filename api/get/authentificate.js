"use strict";
var GetAuthentificate = /** @class */ (function () {
    function GetAuthentificate() {
    }
    GetAuthentificate.prototype.execute = function (params, body, query, res, dbcon) {
        if (params.length == 2) {
        }
        else {
            res.send({ "type": "error", "code": 811, "description": "Parameter missing: ID" });
        }
    };
    return GetAuthentificate;
}());
module.exports = new GetAuthentificate();
