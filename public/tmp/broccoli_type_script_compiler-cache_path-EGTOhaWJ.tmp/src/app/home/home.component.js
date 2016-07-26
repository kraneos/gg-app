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
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var progress_circle_1 = require('@angular2-material/progress-circle');
var router_1 = require('@angular/router');
var core_2 = require('@angular2-material/core');
var home_options_1 = require('./home-options');
var policy_client_name_pipe_1 = require('./policy-client-name.pipe');
var fee_client_last_name_pipe_1 = require('./fee-client-last-name.pipe');
var fee_policy_icon_pipe_1 = require('./fee-policy-icon.pipe');
var policies_service_1 = require('../shared/services/policies.service');
var fees_service_1 = require('../shared/services/fees.service');
var HomeComponent = (function () {
    function HomeComponent(policiesService, feesService) {
        this.policiesService = policiesService;
        this.feesService = feesService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.options = new home_options_1.HomeOptions();
        this.options.date = new Date();
        this.dateStr = this.getDateForInput();
        this.options.limit = '5';
        this.options.page = 1;
        this.filter();
    };
    HomeComponent.prototype.getDateForInput = function () {
        var year = this.options.date.getFullYear();
        var month = this.options.date.getMonth() + 1;
        var day = this.options.date.getDate();
        return this.options.date.getFullYear() + '-' +
            (month < 10 ? '0' : '') + month + '-' +
            (day < 10 ? '0' : '') + day;
    };
    HomeComponent.prototype.onDateChange = function ($event) {
        if ($event === this.dateStr) {
            return;
        }
        if ($event === '') {
            this.options.date = null;
            this.dateStr = '';
        }
        else {
            var parts = $event.split('-').map(function (e) {
                return parseInt(e);
            });
            this.options.date = new Date(parts[0], parts[1] - 1, parts[2]);
            this.dateStr = this.getDateForInput();
        }
        this.filter();
    };
    HomeComponent.prototype.onError = function (error) {
        return Observable_1.Observable.throw(error.message);
    };
    HomeComponent.prototype.filter = function () {
        var _this = this;
        this.hideProgress = false;
        this.feesService.query(this.options)
            .subscribe(function (fees) {
            _this.fees = fees;
            _this.hideProgress = true;
        }, function (error) {
            _this.onError(error);
            _this.hideProgress = true;
        });
        this.showOptions = false;
    };
    HomeComponent.prototype.previousDate = function () {
        this.options.date = this.addDays(this.options.date, -1);
        this.dateStr = this.getDateForInput();
        this.filter();
    };
    HomeComponent.prototype.nextDate = function () {
        this.options.date = this.addDays(this.options.date, 1);
        this.dateStr = this.getDateForInput();
        this.filter();
    };
    HomeComponent.prototype.addDays = function (date, days) {
        var anotherDate = new Date(date.valueOf());
        anotherDate.setDate(anotherDate.getDate() + days);
        return anotherDate;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
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
                icon_1.MdIcon,
                router_1.ROUTER_DIRECTIVES,
                progress_circle_1.MD_PROGRESS_CIRCLE_DIRECTIVES
            ],
            providers: [icon_1.MdIconRegistry, core_2.MdUniqueSelectionDispatcher, policies_service_1.PoliciesService, fees_service_1.FeesService],
            pipes: [policy_client_name_pipe_1.PolicyClientNamePipe, fee_client_last_name_pipe_1.FeeClientLastNamePipe, fee_policy_icon_pipe_1.FeePolicyIconPipe]
        }), 
        __metadata('design:paramtypes', [policies_service_1.PoliciesService, fees_service_1.FeesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map