import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';

class GetUsers implements APIRequest {
    execute(req: Request, res: Response): void {
        res.send("Gat daaamn");
    }
}

export = new GetUsers();