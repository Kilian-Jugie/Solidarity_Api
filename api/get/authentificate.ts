import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class GetAuthentificate implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(params.length == 2) {
            
        }
        else {
            res.send({"type": "error", "code": 811, "description": "Parameter missing: ID"});
        }
    }
}

export = new GetAuthentificate();