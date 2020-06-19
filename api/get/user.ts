import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class GetUser implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        dbcon.query("CALL Get_User(?)", [+params[1]], function(error, results, fields) {
            res.send(results[0][0]);
        });
    }
}

export = new GetUser();