import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class GetMessages implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(params[1] == undefined || params[1] == "") {
            res.status(404).send({"type": "error", "description": "The account id is needed to see messages."})
            return;
        }
        if(query["all"] === "true") {
            dbcon.query("CALL Get_All_Msg(?)", [+params[1]], function(error, results, fields) {
                res.send(results[0]);
            });
        }
        else {
            dbcon.query("CALL Get_Msg(?)", [+params[1]], function(error, results, fields) {
                res.send(results[0]);
            });
        }
    }
}

export = new GetMessages();