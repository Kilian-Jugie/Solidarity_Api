"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var jssha_1 = __importDefault(require("jssha"));
/**
 * Each user have a authkey which is a sha512 of their passsword. This authkey is stored in
 * the db and for actions who needs it, is combined with a text to generate another sha512
 * called authentification token to avoid passing authkey through network. We can recognize
 * if people is connected thanks to this mecanism.
 */
var GetAuthentificate = /** @class */ (function () {
    function GetAuthentificate() {
    }
    GetAuthentificate.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Get_Authkey(?)", [+body.id], function (error, results, fields) {
            var shaObj = new jssha_1.default("SHA-512", "TEXT", { encoding: "UTF8" });
            shaObj.update(results[0][0].authkey);
            if (params[1] == undefined)
                shaObj.update("connexion");
            else
                shaObj.update(params[1].toString());
            if (body.token == shaObj.getHash("HEX"))
                res.send({ "type": "answer", "valid": true });
            else
                res.status(404).send({ "type": "error", "description": "invalid authentification token" });
        });
    };
    return GetAuthentificate;
}());
module.exports = new GetAuthentificate();
