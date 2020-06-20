"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (params, body, query, res, dbcon) {
        if (params[1] != undefined || params[1] == "") {
            dbcon.query("CALL Get_User(?)", [params[1]], function (error, results, fields) {
                if (results[0][0] == null)
                    res.status(404).send({ "type": "error", "description": "User could not be found" });
                else
                    res.send(results[0][0]);
            });
        }
        else {
            dbcon.query("CALL Get_Users()", function (error, results, fields) {
                res.send(results[0]);
            });
        }
    };
    return GetUsers;
}());
module.exports = new GetUsers();
