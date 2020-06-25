import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';
import jsSHA from 'jssha'

/**
 * Each user have a authkey which is a sha512 of their passsword. This authkey is stored in
 * the db and for actions who needs it, is combined with a text to generate another sha512
 * called authentification token to avoid passing authkey through network. We can recognize
 * if people is connected thanks to this mecanism.
 */
class GetAuthentificate implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        dbcon.query("CALL Get_Authkey(?)",[+params[1]], function(error, results, fields) {
            const shaObj = new jsSHA("SHA-512", "TEXT", {encoding: "UTF8"});
            shaObj.update(results[0][0].authkey);
            //if(params[1] == undefined)
                shaObj.update("connexion");
            //else
            //    shaObj.update(params[1].toString());


            if(query.token == shaObj.getHash("HEX")) res.send({"type": "answer", "valid": true});
            else res.status(404).send({"type": "error", "description": "invalid authentification token"});
        });
    }
}

export = new GetAuthentificate();