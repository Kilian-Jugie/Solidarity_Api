/** @file api.ts
 *  @description Main mecanisms of the API
 */
import { Request, Response } from 'express-serve-static-core';

/** @interface APIRequest
 *  @brief A request to the API
 *  @description Each request must be in a separated file which follows a naming
 * convention and which must respect special location. The request's instance must be
 * exported to be directly called by the API.
 */
export interface APIRequest {
    /**
     * @brief Execute the request
     * @param params List of parameters as strings passed to the url
     * @param body Request body as string
     * @param query Query as custom associative array [string]: string
     * @param res Response object from express to return data
     */
    execute(params: String[], body: string, query: any, res: Response): void;
}

/**
 * @class The API itself (singleton)
 */
export class API {
    private static INSTANCE: API;

    /**
     * The pathes to the requests folders and the folders themselves
     */
    public static RequestsPath:     string = ".";
    public static RequestsPathGet:  string = API.RequestsPath+"/get";
    public static RequestsPathPost: string = API.RequestsPath+"/post";
    public static RequestsPathPut:  string = API.RequestsPath+"/put";
    public static RequestsPathDel:  string = API.RequestsPath+"/del";

    /**
     * Singleton
     */
    public static instance(): API {
        if(!API.INSTANCE) API.INSTANCE = new API();
        return API.INSTANCE;
    }

    /**
     * @brief The API instance entry to be called by the api_main
     * @param req The request object from express with 'raw' data
     * @param res The response object form express
     */
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
        //removing some sufixes if there is anothers parameters or query data
        let name = req.originalUrl.substr(0, Math.max(req.originalUrl.indexOf("/"), req.originalUrl.indexOf("?")));
        if(name.length == 0) name = req.originalUrl; 

        let module: APIRequest = require(path+"/"+name);
        let params: String[] = req.originalUrl.split("/");

        //TODO: turn this cleaner
        let lastParam:String = params[params.length-1];
        lastParam = lastParam.substr(0, lastParam.indexOf("?"));
        if(lastParam.length==0) lastParam = params[params.length-1];
        params[params.length-1] = lastParam;

        //Executing the request
        module.execute(params, req.body, req.query, res);
    }
    
    /**
     * @brief The main entry of all API to be called by javascript code
     * @param req The request object from express with 'raw' data
     * @param res The response object form express
     */
    public static api_main(req: Request, res: Response): void {
        API.instance().entry(req, res);
    }
}