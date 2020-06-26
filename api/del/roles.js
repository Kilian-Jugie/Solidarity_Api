"use strict";
var DelRoles = /** @class */ (function () {
    function DelRoles() {
    }
    DelRoles.prototype.execute = function (params, body, query, res, dbcon) {
        if (isNaN(+params[1])) {
            dbcon.query("CALL Del_Roles_Name(?)", [params[1]], function (error, results, fields) {
                res.send({ "type": "answer", "status": "success" });
            });
        }
        else {
            dbcon.query("CALL Del_Roles_Id(?)", [+params[1]], function (error, results, fields) {
                res.send({ "type": "answer", "status": "success" });
            });
        }
    };
    return DelRoles;
}());
module.exports = new DelRoles();
