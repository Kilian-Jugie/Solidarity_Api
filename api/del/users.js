"use strict";
var DelUsers = /** @class */ (function () {
    function DelUsers() {
    }
    DelUsers.prototype.execute = function (params, body, query, res, dbcon) {
        if (isNaN(+params[1])) {
            dbcon.query("CALL Del_Users_Name(?)", [params[1]], function (error, results, fields) {
                res.send({ "type": "answer", "status": "success" });
            });
        }
        else {
            dbcon.query("CALL Del_Users_Id(?)", [+params[1]], function (error, results, fields) {
                res.send({ "type": "answer", "status": "success" });
            });
        }
    };
    return DelUsers;
}());
module.exports = new DelUsers();
