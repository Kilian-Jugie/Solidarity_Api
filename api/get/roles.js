"use strict";
var GetRoles = /** @class */ (function () {
    function GetRoles() {
    }
    GetRoles.prototype.execute = function (params, body, query, res, dbcon) {
        if (params[1] == undefined || params[1] == "") {
            dbcon.query("CALL Get_Roles()", function (error, results, fields) {
                res.send(results[0]);
            });
        }
        else if (isNaN(+params[1])) {
            console.log("nan");
            dbcon.query("CALL Get_Roles_Id(?)", [params[1]], function (error, results, fields) {
                res.send(results[0][0]);
            });
        }
        else {
            console.log("n");
            dbcon.query("CALL Get_Roles_Name(?)", [+params[1]], function (error, results, fields) {
                res.send(results[0][0]);
            });
        }
    };
    return GetRoles;
}());
module.exports = new GetRoles();
