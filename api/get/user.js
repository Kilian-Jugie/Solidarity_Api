"use strict";
var GetUser = /** @class */ (function () {
    function GetUser() {
    }
    GetUser.prototype.execute = function (params, body, query, res) {
        if (params.length == 2) {
            res.send({ "type": "answer", "user": "kilian.jugie@viacesi.fr", "id": params[1], "name": "jugie", "firstname": "kilian", "description": "Programmeur backend", "role": "Administrateur" });
        }
        else {
            res.send({ "type": "error", "code": 811, "description": "Incorrect parameters. Expecting user/{id}." });
        }
    };
    return GetUser;
}());
module.exports = new GetUser();
