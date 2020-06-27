"use strict";
var GetMessages = /** @class */ (function () {
    function GetMessages() {
    }
    GetMessages.prototype.execute = function (params, body, query, res, dbcon) {
        if (params[1] == undefined || params[1] == "") {
            res.status(404).send({ "type": "error", "description": "The account id is needed to see messages." });
            return;
        }
        if (query["all"] === "true") {
            dbcon.query("CALL Get_All_Msg(?)", [+params[1]], function (error, results, fields) {
                res.send(results[0]);
            });
        }
        else {
            dbcon.query("CALL Get_Msg(?)", [+params[1]], function (error, results, fields) {
                res.send(results[0]);
            });
        }
    };
    return GetMessages;
}());
module.exports = new GetMessages();
