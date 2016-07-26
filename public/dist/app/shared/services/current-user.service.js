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
var CurrentUserService = (function () {
    function CurrentUserService() {
        this.SEGGU_USER = 'segguUser';
        this.SEGGU_POST_ACL = 'segguPostACL';
    }
    CurrentUserService.prototype.get = function () {
        var user = localStorage.getItem(this.SEGGU_USER);
        return JSON.parse(user);
    };
    CurrentUserService.prototype.set = function (user) {
        var userStr = JSON.stringify(user);
        localStorage.setItem(this.SEGGU_USER, userStr);
    };
    CurrentUserService.prototype.remove = function () {
        localStorage.removeItem(this.SEGGU_USER);
    };
    CurrentUserService.prototype.getPostACL = function () {
        var postACL = localStorage.getItem(this.SEGGU_POST_ACL);
        return JSON.parse(postACL);
    };
    CurrentUserService.prototype.setPostACL = function (postACL) {
        var postACLStr = JSON.stringify(postACL);
        localStorage.setItem(this.SEGGU_POST_ACL, postACLStr);
    };
    CurrentUserService.prototype.removePostACL = function () {
        localStorage.removeItem(this.SEGGU_POST_ACL);
    };
    CurrentUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CurrentUserService);
    return CurrentUserService;
}());
exports.CurrentUserService = CurrentUserService;
//# sourceMappingURL=current-user.service.js.map