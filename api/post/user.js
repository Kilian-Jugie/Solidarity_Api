"use strict";
var PostUser = /** @class */ (function () {
    function PostUser() {
    }
    PostUser.prototype.execute = function (params, body, query, res) {
        //if(!Utils.jsonNeed(body, res, "name", "firstname", "user", "description")) return;
        res.send({ "type": "answer", "status": "OK" });
    };
    return PostUser;
}());
module.exports = new PostUser();
