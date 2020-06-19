"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (params, body, query, res, dbcon) {
        if (params[1] != undefined) {
            dbcon.query("CALL Get_User(?)", [+params[1]], function (error, results, fields) {
                res.send(results[0][0]);
            });
        }
        else {
            dbcon.query("CALL Get_Users()", function (error, results, fields) {
                res.send(results[0]);
            });
        }
        //res.send({"type": "answer", "users": ["kilian.jugie@viacesi.fr", "andreas.ducourneau@viacesi.fr", "thibaud.rapin@viacesi.fr"]});
    };
    return GetUsers;
}());
module.exports = new GetUsers();
