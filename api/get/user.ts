import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';

class GetUser implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response): void {
        if(params.length == 2) {
            res.send({"type": "answer", "user": "kilian.jugie@viacesi.fr", "id": params[1], "name": "jugie", "firstname": "kilian", "description": "Programmeur backend", "role": "Administrateur"})
        }
        else {
            res.send({"type": "error", "code": 811, "description": "Incorrect parameters. Expecting user/{id}."});
        }
    }
}

export = new GetUser();