"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var current_user_service_1 = require('../services/current-user.service');
var ParseService = (function () {
    /**
     *
     */
    function ParseService(http, currentUserService) {
        this.http = http;
        this.currentUserService = currentUserService;
    }
    ParseService.prototype.get = function (url, options) {
        return this.http.get(this.getUrl(url), this.getOptions(options));
    };
    ParseService.prototype.post = function (url, body, options) {
        return this.http.post(this.getUrl(url), this.applyACL(body), this.getOptions(options));
    };
    ParseService.prototype.put = function (url, body, options) {
        return this.http.put(this.getUrl(url), body, this.getOptions(options));
    };
    ParseService.prototype.delete = function (url, options) {
        return this.http.delete(this.getUrl(url), this.getOptions(options));
    };
    ParseService.prototype.extractArray = function (res) {
        var body = res.json();
        return body.results || [];
    };
    ParseService.prototype.extractObject = function (res) {
        var body = res.json();
        return body || {};
    };
    ParseService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ParseService.prototype.getUrl = function (url) {
        return 'https://seggu-api-develop.herokuapp.com/parse/' + url;
    };
    ParseService.prototype.getOptions = function (options) {
        var opts = options || new http_1.RequestOptions({ headers: new http_1.Headers() });
        opts.headers.append('X-Parse-Application-Id', 'seggu-api');
        var userStr = localStorage.getItem('segguUser');
        var user = JSON.parse(userStr);
        if (user) {
            opts.headers.append('X-Parse-Session-Token', user.sessionToken);
        }
        return opts;
    };
    ParseService.prototype.applyACL = function (body) {
        var postACL = this.currentUserService.getPostACL();
        if (postACL && body) {
            body.ACL = postACL;
        }
        return body;
    };
    ParseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, current_user_service_1.CurrentUserService])
    ], ParseService);
    return ParseService;
}());
exports.ParseService = ParseService;
//# sourceMappingURL=parse.service.js.map