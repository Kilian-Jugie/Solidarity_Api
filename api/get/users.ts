import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class GetUsers implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(params[1] != undefined || params[1] == "") {
            dbcon.query("CALL Get_User(?)", [params[1]], function(error, results, fields) {
                if(results[0][0] == null) res.status(404).send({"type": "error", "description": "User could not be found"});
                else res.send(results[0][0]);
            });
        }
        else {
        dbcon.query("CALL Get_Users()", function(error, results, fields) {
            res.send(results[0]);
        });
    }
    }
}

export = new GetUsers();