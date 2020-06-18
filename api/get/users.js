"use strict";
var GetUsers = /** @class */ (function () {
    function GetUsers() {
    }
    GetUsers.prototype.execute = function (params, body, query, res) {
        res.send({ "type": "answer", "users": ["kilian.jugie@viacesi.fr", "andreas.ducourneau@viacesi.fr", "thibaud.rapin@viacesi.fr"] });
    };
    return GetUsers;
}());
module.exports = new GetUsers();
