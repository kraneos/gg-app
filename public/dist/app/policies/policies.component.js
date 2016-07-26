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
var Observable_1 = require('rxjs/Observable');
var policies_options_1 = require('./policies-options');
var policies_service_1 = require('../shared/services/policies.service');
var PoliciesComponent = (function () {
    function PoliciesComponent(policiesService) {
        this.policiesService = policiesService;
    }
    PoliciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.policies = [];
        this.policiesOptions = new policies_options_1.PoliciesOptions();
        this.policiesOptions.number = "";
        this.policiesOptions.limit = 10;
        this.policiesOptions.page = 1;
        this.policiesService.query(this.policiesOptions)
            .subscribe(function (policies) { return _this.policies = policies; }, this.onError);
    };
    PoliciesComponent.prototype.onError = function (error) {
        return Observable_1.Observable.throw(error.message);
    };
    PoliciesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-policies',
            templateUrl: 'policies.component.html',
            styleUrls: ['policies.component.css'],
            providers: [policies_service_1.PoliciesService]
        }), 
        __metadata('design:paramtypes', [policies_service_1.PoliciesService])
    ], PoliciesComponent);
    return PoliciesComponent;
}());
exports.PoliciesComponent = PoliciesComponent;
//# sourceMappingURL=policies.component.js.map