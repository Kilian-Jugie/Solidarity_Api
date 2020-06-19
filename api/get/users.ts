import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class GetUsers implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        dbcon.query("CALL Get_Users()", function(error, results, fields) {
            res.send(results[0]);
        });


        //res.send({"type": "answer", "users": ["kilian.jugie@viacesi.fr", "andreas.ducourneau@viacesi.fr", "thibaud.rapin@viacesi.fr"]});
    }
}

export = new GetUsers();