"use strict";
var PostUser = /** @class */ (function () {
    function PostUser() {
    }
    PostUser.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Add_User(?, ?, ?, ?, ?, ?)", [body.lastname, body.firstname, body.email,
            body.description, body.authkey, body.rolename], function (error, results, fields) {
            res.send(results[0]);
        });
    };
    return PostUser;
}());
module.exports = new PostUser();
