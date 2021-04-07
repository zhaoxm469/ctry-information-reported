"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CtryInformationReported = /** @class */ (function () {
    function CtryInformationReported(apiUrl) {
        this.apiUrl = apiUrl;
    }
    CtryInformationReported.isMpApp = function () {
        if (window)
            return false;
        try {
            // @ts-ignore 
            return !!uni;
        }
        catch (_a) {
            return false;
        }
    };
    CtryInformationReported.uniGet = function (url) {
        if (CtryInformationReported.isMpApp()) {
            // @ts-ignore
            return uni.request({
                url: url
            });
        }
        else {
            var oImg = new Image();
            oImg.src = url;
        }
    };
    // 对象转query
    CtryInformationReported.jsonToQuery = function (data) {
        var query = [], queryStr = '';
        for (var key in data) {
            query.push(key + "=" + data[key]);
        }
        if (query.length)
            queryStr = '?' + query.join('&');
        return queryStr;
    };
    // 查询
    CtryInformationReported.prototype.query = function (params) {
        if (params === void 0) { params = { callback: '' }; }
        if (CtryInformationReported.isMpApp()) {
            var baseurl = this.apiUrl + 'query' + CtryInformationReported.jsonToQuery(params);
            return CtryInformationReported.uniGet(baseurl);
        }
        else {
            params.callback = params.callback || 'ctryInformationReportedQueryw';
            var baseurl = this.apiUrl + 'query' + CtryInformationReported.jsonToQuery(params);
            var oldScript = document.getElementById(params.callback);
            oldScript && document.body.removeChild(oldScript);
            var oScript = document.createElement('script');
            oScript.id = params.callback;
            oScript.src = baseurl;
            document.body.appendChild(oScript);
            return new Promise(function (resolve) {
                // @ts-ignore
                globalThis[params.callback] = resolve;
            });
        }
    };
    // 添加
    CtryInformationReported.prototype.add = function (params) {
        if (params === void 0) { params = { userInfo: '', type: '' }; }
        if (typeof params.userInfo === 'object')
            params.userInfo = JSON.stringify(params.userInfo);
        var baseurl = this.apiUrl + 'add' + CtryInformationReported.jsonToQuery(params);
        CtryInformationReported.uniGet(baseurl);
    };
    // 删除单个
    CtryInformationReported.prototype.deleteOne = function (params) {
        if (params === void 0) { params = { username: '', type: '' }; }
        var baseurl = this.apiUrl + 'deleteOne' + CtryInformationReported.jsonToQuery(params);
        CtryInformationReported.uniGet(baseurl);
    };
    // 删除全部
    CtryInformationReported.prototype.deleteAll = function () {
        var baseurl = this.apiUrl + 'deleteAll';
        CtryInformationReported.uniGet(baseurl);
    };
    return CtryInformationReported;
}());
exports.default = CtryInformationReported;
