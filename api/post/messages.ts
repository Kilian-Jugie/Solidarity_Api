/**
 * @file users.ts
 * @brief Add a new message to database
 */

import {APIRequest} from '../api';
import { Request, Response } from 'express-serve-static-core';
import { Utils } from '../utils';
import { Connection } from 'mysql';


class PostMessages implements APIRequest {
    execute(params: String[], body: any, query: any, res: Response, dbcon: Connection): void {
        if(params[1] == undefined || params[1] == "") {
            res.status(400).send({"type": "error", "description": "The account id is needed to add message."})
            return;
        }
        let today = new Date();
        let date: string = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDay();
        dbcon.query("CALL Add_Msg(?, ?, ?, ?)",[+params[1], +body.toid, date, body.text], function(error, results, fields) {
            console.log(error);
            res.status(201).send(results[0]);
        });
    }
}

export = new PostMessages();