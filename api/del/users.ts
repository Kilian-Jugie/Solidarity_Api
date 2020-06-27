import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class DelUsers implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(isNaN(+params[1])) {
            dbcon.query("CALL Del_Users_Name(?)", [params[1]], function(error, results, fields) {
                res.send({"type": "answer", "status": "success"});
            });
        } else {
            dbcon.query("CALL Del_Users_Id(?)", [+params[1]], function(error, results, fields) {
                res.send({"type": "answer", "status": "success"});
            });
        }
    }
}

export = new DelUsers();