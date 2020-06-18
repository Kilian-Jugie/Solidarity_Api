import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Utils } from '../utils';


class PostUser implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response): void {
        //if(!Utils.jsonNeed(body, res, "name", "firstname", "user", "description")) return;
        res.send({"type": "answer", "status": "OK"});
    }
}

export = new PostUser();