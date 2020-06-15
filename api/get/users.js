"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (req, res) {
        res.send("Gat daaamn");
    };
    return GetUsers;
}());
module.exports = new GetUsers();
