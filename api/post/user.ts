import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Utils } from '../utils';
import { Connection } from 'mysql';


class PostUser implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        dbcon.query("CALL Add_User(?, ?, ?, ?, ?, ?)",[body.lastname, body.firstname, body.email,
            body.description, body.authkey, body.rolename], function(error, results, fields) {
            res.send(results[0]);
        });
    }
}

export = new PostUser();