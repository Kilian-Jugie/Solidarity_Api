"use strict";
/**
 * @file users.ts
 * @brief Add a new message to database
 */
var PostMessages = /** @class */ (function () {
    function PostMessages() {
    }
    PostMessages.prototype.execute = function (params, body, query, res, dbcon) {
        if (params[1] == undefined || params[1] == "") {
            res.status(400).send({ "type": "error", "description": "The account id is needed to add message." });
            return;
        }
        var today = new Date();
        var date = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();
        dbcon.query("CALL Add_Msg(?, ?, ?, ?)", [+params[1], +body.toid, date, body.text], function (error, results, fields) {
            console.log(error);
            res.status(201).send(results[0]);
        });
    };
    return PostMessages;
}());
module.exports = new PostMessages();
