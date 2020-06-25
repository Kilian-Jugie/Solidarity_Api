"use strict";
var PostUsers = /** @class */ (function () {
    function PostUsers() {
    }
    PostUsers.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Add_User(?, ?, ?, ?, ?, ?)", [body.lastname, body.firstname, body.email,
            body.description, body.authkey, body.rolename], function (error, results, fields) {
            res.status(201).send(results[0]);
        });
    };
    return PostUsers;
}());
module.exports = new PostUsers();
