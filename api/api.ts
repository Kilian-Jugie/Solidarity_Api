import { Request, Response } from 'express-serve-static-core';


export interface APIRequest {
    execute(params: any, body: string, query: any, res: Response): void;
}

export class API {
    private static INSTANCE: API;
    public static RequestsPath:     string = ".";
    public static RequestsPathGet:  string = API.RequestsPath+"/get";
    public static RequestsPathPost: string = API.RequestsPath+"/post";
    public static RequestsPathPut:  string = API.RequestsPath+"/put";
    public static RequestsPathDel:  string = API.RequestsPath+"/del";

    public static instance(): API {
        if(!API.INSTANCE) API.INSTANCE = new API();
        return API.INSTANCE;
    }

    private entry(req: Request, res: Response): void {
        let path: string = API.RequestsPathGet;
        /** Here we could imagine use a system with lowering the case of the method to get
         * the folder to search for but this is faster at least for GET requests which are
         * used more frequently.
         */
        switch(req.method) {
            case "GET": break;
            case "POST": path = API.RequestsPathPost;
            case "PUT": path = API.RequestsPathPut;
            case "DELETE": path = API.RequestsPathDel;
            //TODO: default res unsupported method
        }

        //removing '/api/' prefix (should this to be changed to modular version ?)
        req.originalUrl = req.originalUrl.substr(5);
        let name = req.originalUrl.substr(0, Math.max(req.originalUrl.indexOf("/"), req.originalUrl.indexOf("?")));
        if(name.length == 0) name = req.originalUrl; 

        let module: APIRequest = require(path+"/"+name);
        let params: String[] = req.originalUrl.split("/");

        //TODO: turn this cleaner
        let lastParam:String = params[params.length-1];
        lastParam = lastParam.substr(0, lastParam.indexOf("?"));
        if(lastParam.length==0) lastParam = params[params.length-1];
        params[params.length-1] = lastParam;

        module.execute(params, req.body, req.query, res);
    }
    
    public static api_main(req: Request, res: Response): void {
        API.instance().entry(req, res);
    }
}