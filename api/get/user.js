"use strict";
var GetUser = /** @class */ (function () {
    function GetUser() {
    }
    GetUser.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Get_User(?)", [+params[1]], function (error, results, fields) {
            res.send(results[0][0]);
        });
    };
    return GetUser;
}());
module.exports = new GetUser();
