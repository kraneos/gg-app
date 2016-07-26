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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var login_service_1 = require('../shared/services/login.service');
var current_user_service_1 = require('../shared/services/current-user.service');
var LoginComponent = (function () {
    function LoginComponent(router, loginService, currentUserService) {
        this.router = router;
        this.loginService = loginService;
        this.currentUserService = currentUserService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.showError = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.currentUserService.set(user);
            _this.loginService
                .getSegguClient(user.segguClient.objectId)
                .subscribe(function (segguClient) {
                _this.loginService
                    .getRolesBySegguClient(segguClient)
                    .subscribe(function (roles) {
                    var postACL = {};
                    postACL[user.objectId] = { read: true, write: true };
                    roles.forEach(function (r) {
                        postACL['role:' + r.name] = { read: true, write: true };
                    });
                    _this.currentUserService.setPostACL(postACL);
                    _this.router.navigate(['/']);
                }, onError);
            }, onError);
        }, onError);
        function onError(error) {
            this.error = error.message;
            this.showError = true;
            return Observable_1.Observable.throw(error.message);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MdToolbar,
                button_1.MdButton,
                input_1.MdInput,
                checkbox_1.MdCheckbox,
                radio_1.MdRadioGroup,
                radio_1.MdRadioButton,
                icon_1.MdIcon
            ],
            providers: [
                login_service_1.LoginService,
                current_user_service_1.CurrentUserService
            ],
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, current_user_service_1.CurrentUserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map