"use strict";
var PostRole = /** @class */ (function () {
    function PostRole() {
    }
    PostRole.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Add_Role(?)", [body.name], function (error, results, fields) {
            res.send(results[0]);
        });
    };
    return PostRole;
}());
module.exports = new PostRole();
