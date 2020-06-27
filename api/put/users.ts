import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Utils } from '../utils';
import { Connection } from 'mysql';


class PutUsers implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(isNaN(+params[1])) {
            dbcon.query("CALL Upt_Users_Email(?, ?, ?, ?, ?, ?)", [params[1], body.firstname, body.lastname,  
                body.description, body.authkey, body.roleid], function(error, results, fields) {
                res.send({"type": "answer", "status": "success"});
            });
        } else {
            dbcon.query("CALL Upt_Users_Id(?, ?, ?, ?, ?, ?, ?)", [+params[1], body.lastname, body.firstname, body.email,
                body.description, body.authkey, body.roleid], function(error, results, fields) {
                res.send({"type": "answer", "status": "success"});
            });
        }
    }
}

export = new PutUsers();