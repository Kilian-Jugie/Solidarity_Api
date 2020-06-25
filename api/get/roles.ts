import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Connection } from 'mysql';

class GetRoles implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(params[1] == undefined || params[1] == "") {
            dbcon.query("CALL Get_Roles()", function(error, results, fields) {
                res.send(results[0]);
            });
        }
        else if(isNaN(+params[1])) {
            dbcon.query("CALL Get_Roles_Id(?)", [params[1]], function(error, results, fields) {
                res.send(results[0][0]);
            });
        } else {
            dbcon.query("CALL Get_Roles_Name(?)", [+params[1]], function(error, results, fields) {
                res.send(results[0][0]);
            });
        }
    }
}

export = new GetRoles();