"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (params, body, query, res) {
        res.send(query);
    };
    return GetUsers;
}());
module.exports = new GetUsers();
