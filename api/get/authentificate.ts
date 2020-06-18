import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';

class GetAuthentificate implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response): void {
        if(params.length == 2) {
            
        }
        else {
            res.send({"type": "error", "code": 811, "description": "Parameter missing: ID"});
        }
    }
}

export = new GetAuthentificate();