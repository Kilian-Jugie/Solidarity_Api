import { Response } from 'express-serve-static-core';

export class Utils {
    public static jsonNeed(parsedJson: String, res: Response, ...keys: String[]): boolean {
        for(var key in keys) {
            if(parsedJson[key] == undefined) {
                res.send({"type": "error", "code": "812", "description": "Incorrect json input. Expecting field "+parsedJson[key]+" found undefined."});
                return false;
            }
        }
        return true;
    }
}