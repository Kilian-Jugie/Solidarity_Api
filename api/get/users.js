"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Get_Users()", function (error, results, fields) {
            res.send(results[0]);
        });
        //res.send({"type": "answer", "users": ["kilian.jugie@viacesi.fr", "andreas.ducourneau@viacesi.fr", "thibaud.rapin@viacesi.fr"]});
    };
    return GetUsers;
}());
module.exports = new GetUsers();
