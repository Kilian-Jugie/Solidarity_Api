"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (params, body, res) {
        res.send(params[0]);
    };
    return GetUsers;
}());
module.exports = new GetUsers();
