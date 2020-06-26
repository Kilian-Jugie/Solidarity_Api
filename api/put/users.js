"use strict";
var PutUsers = /** @class */ (function () {
    function PutUsers() {
    }
    PutUsers.prototype.execute = function (params, body, query, res, dbcon) {
        if (isNaN(+params[1])) {
            dbcon.query("CALL Upt_Users_Email(?, ?, ?, ?, ?, ?)", [params[1], body.firstname, body.lastname,
                body.description, body.authkey, body.roleid], function (error, results, fields) {
                res.send({ "type": "answer", "status": "success" });
            });
        }
        else {
            dbcon.query("CALL Upt_Users_Id(?, ?, ?, ?, ?, ?, ?)", [+params[1], body.lastname, body.firstname, body.email,
                body.description, body.authkey, body.roleid], function (error, results, fields) {
                res.send({ "type": "answer", "status": "success" });
            });
        }
    };
    return PutUsers;
}());
module.exports = new PutUsers();
