"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var jssha_1 = __importDefault(require("jssha"));
var GetAuthentificate = /** @class */ (function () {
    function GetAuthentificate() {
    }
    GetAuthentificate.prototype.execute = function (params, body, query, res, dbcon) {
        dbcon.query("CALL Get_Authkey(?)", [+body.id], function (error, results, fields) {
            //et enc: TextEncoder = new TextEncoder();
            //let dec: TextDecoder = new TextDecoder();
            //console.log(results[0][0].authkey);
            var shaObj = new jssha_1.default("SHA-512", "TEXT", { encoding: "UTF8" });
            shaObj.update(results[0][0].authkey);
            shaObj.update("connexion");
            console.log(shaObj.getHash("HEX"));
            //console.log(dec.decode(sha256(enc.encode(results[0][0].authkey+"connexion"))));
            res.send({ "h": "" });
        });
    };
    return GetAuthentificate;
}());
module.exports = new GetAuthentificate();
