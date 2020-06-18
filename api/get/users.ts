import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';

class GetUsers implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response): void {
        res.send({"type": "answer", "users": ["kilian.jugie@viacesi.fr", "andreas.ducourneau@viacesi.fr", "thibaud.rapin@viacesi.fr"]});
    }
}

export = new GetUsers();