import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';

class GetUsers implements APIRequest {
    execute(params: any, body: string, res: Response): void {
        res.send(params[0]);
    }
}

export = new GetUsers();