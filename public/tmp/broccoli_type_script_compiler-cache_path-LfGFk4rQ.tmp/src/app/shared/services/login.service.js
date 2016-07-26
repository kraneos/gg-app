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
var parse_service_1 = require('./parse.service');
var LoginService = (function () {
    /**
     *
     */
    function LoginService(parseService) {
        this.parseService = parseService;
    }
    LoginService.prototype.login = function (username, password) {
        return this.parseService
            .get('login?username=' + username + '&password=' + password)
            .map(this.extractLoginData)
            .catch(this.parseService.handleError);
    };
    LoginService.prototype.logout = function () {
        return this.parseService
            .post('logout', null)
            .catch(this.parseService.handleError);
    };
    LoginService.prototype.getUser = function () {
        return this.parseService
            .get('users/me?include=segguClient')
            .map(this.parseService.extractObject)
            .catch(this.parseService.handleError);
    };
    LoginService.prototype.getSegguClient = function (objId) {
        return this.parseService
            .get('classes/SegguClient/' + objId)
            .map(this.parseService.extractObject)
            .catch(this.parseService.handleError);
    };
    LoginService.prototype.getRolesBySegguClient = function (segguClient) {
        var url = 'roles';
        url = url + '?where={"name":{"$regex":"' + segguClient.name + '"}}';
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    };
    LoginService.prototype.extractLoginData = function (res) {
        var body = res.json();
        return body || {};
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [parse_service_1.ParseService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map