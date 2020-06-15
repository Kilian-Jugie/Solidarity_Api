"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var API = /** @class */ (function () {
    function API() {
    }
    API.instance = function () {
        if (!API.INSTANCE)
            API.INSTANCE = new API();
        return API.INSTANCE;
    };
    API.prototype.entry = function (req, res) {
        var path = API.RequestsPathGet;
        /** Here we could imagine use a system with lowering the case of the method to get
         * the folder to search for but this is faster at least for GET requests which are
         * used more frequently.
         */
        switch (req.method) {
            case "GET": break;
            case "POST": path = API.RequestsPathPost;
            case "PUT": path = API.RequestsPathPut;
            case "DELETE": path = API.RequestsPathDel;
            //TODO: default res unsupported method
        }
        //removing '/api/' prefix (should this to be changed to modular version ?)
        req.originalUrl = req.originalUrl.substr(5);
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
        module.execute(params, req.body, req.query, res);
    };
    API.api_main = function (req, res) {
        API.instance().entry(req, res);
    };
    API.RequestsPath = ".";
    API.RequestsPathGet = API.RequestsPath + "/get";
    API.RequestsPathPost = API.RequestsPath + "/post";
    API.RequestsPathPut = API.RequestsPath + "/put";
    API.RequestsPathDel = API.RequestsPath + "/del";
    return API;
}());
exports.API = API;
