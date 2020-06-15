import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';

class GetUsers implements APIRequest {
    execute(params: String[], body: string, query: any, res: Response): void {
        res.send(query);
    }
}

export = new GetUsers();