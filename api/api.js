"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
/**
 * @class The API itself (singleton)
 */
var API = /** @class */ (function () {
    function API() {
    }
    /**
     * Singleton
     */
    API.instance = function () {
        if (!API.INSTANCE)
            API.INSTANCE = new API();
        return API.INSTANCE;
    };
    /**
     * @brief The API instance entry to be called by the api_main
     * @param req The request object from express with 'raw' data
     * @param res The response object form express
     */
    API.prototype.entry = function (req, res) {
        var path = API.RequestsPathGet;
        /** Here we could imagine use a system with lowering the case of the method to get
         * the folder to search for but this is faster at least for GET requests which are
         * used more frequently.
         */
        switch (req.method) {
            case "GET": break;
            case "POST":
                path = API.RequestsPathPost;
                break;
            case "PUT":
                path = API.RequestsPathPut;
                break;
            case "DELETE":
                path = API.RequestsPathDel;
                break;
            default: {
                res.send({ "type": "error", "code": 405, "description": "Method Not Allowed" });
                return;
            }
        }
        //removing '/api/' prefix (should this to be changed to modular version ?)
        req.originalUrl = req.originalUrl.substr(5);
        //removing some sufixes if there is anothers parameters or query data
        var name = req.originalUrl.substr(0, Math.max(req.originalUrl.indexOf("/"), req.originalUrl.indexOf("?")));
        if (name.length == 0)
            name = req.originalUrl;
        var module = require(path + "/" + name);
        var params = req.originalUrl.split("/");
        //TODO: turn this cleaner
        var lastParam = params[params.length - 1];
        lastParam = lastParam.substr(0, lastParam.indexOf("?"));
        if (lastParam.length == 0)
            lastParam = params[params.length - 1];
        params[params.length - 1] = lastParam;
        //Executing the request
        module.execute(params, req.body, req.query, res);
    };
    /**
     * @brief The main entry of all API to be called by javascript code
     * @param req The request object from express with 'raw' data
     * @param res The response object form express
     */
    API.api_main = function (req, res) {
        API.instance().entry(req, res);
    };
    /**
     * The pathes to the requests folders and the folders themselves
     */
    API.RequestsPath = ".";
    API.RequestsPathGet = API.RequestsPath + "/get";
    API.RequestsPathPost = API.RequestsPath + "/post";
    API.RequestsPathPut = API.RequestsPath + "/put";
    API.RequestsPathDel = API.RequestsPath + "/del";
    return API;
}());
exports.API = API;
