"use strict";
/**
 * @file roles.ts
 * @brief Add a new role to database
 */
var PostRoles = /** @class */ (function () {
    function PostRoles() {
    }
    PostRoles.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Add_Role(?)", [body.name], function (error, results, fields) {
            res.status(201).send(results[0]);
        });
    };
    return PostRoles;
}());
module.exports = new PostRoles();
