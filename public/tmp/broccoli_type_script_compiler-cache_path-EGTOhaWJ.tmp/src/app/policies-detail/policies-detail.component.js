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
var router_1 = require('@angular/router');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var router_2 = require('@angular/router');
var core_2 = require('@angular2-material/core');
var risk_1 = require('../shared/domain/risk');
var company_1 = require('../shared/domain/company');
var policy_1 = require('../shared/domain/policy');
var policies_service_1 = require('../shared/services/policies.service');
var vehicles_service_1 = require('../shared/services/vehicles.service');
var integrals_service_1 = require('../shared/services/integrals.service');
var employees_service_1 = require('../shared/services/employees.service');
var fees_service_1 = require('../shared/services/fees.service');
var fee_status_name_pipe_1 = require('./fee-status-name.pipe');
var PoliciesDetailComponent = (function () {
    function PoliciesDetailComponent(route, router, policiesService, vehiclesService, integralsService, employeesService, feesService) {
        this.route = route;
        this.router = router;
        this.policiesService = policiesService;
        this.vehiclesService = vehiclesService;
        this.integralsService = integralsService;
        this.employeesService = employeesService;
        this.feesService = feesService;
        this.VEHICLE_RISK_TYPES = [1];
        this.INTEGRAL_RISK_TYPES = [2];
        this.EMPLOYEE_RISK_TYPES = [3, 4];
    }
    PoliciesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.policy = new policy_1.Policy();
        this.policy.risk = new risk_1.Risk();
        this.policy.risk.company = new company_1.Company();
        this.vehicles = [];
        this.employees = [];
        this.integrals = [];
        this.fees = [];
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.policiesService.get(id)
                .subscribe(function (policy) {
                _this.policy = policy;
                _this.feesService.queryByPolicy(id)
                    .subscribe(function (fees) {
                    _this.fees = fees;
                    _this.hideProgress = _this.fees !== null && (_this.vehicles !== null || _this.employees !== null || _this.integrals !== null);
                }, function (error) {
                    _this.onError(error);
                    _this.hideProgress = true;
                });
                if (_this.validateAgainstArray(_this.VEHICLE_RISK_TYPES, _this.policy.risk.riskType)) {
                    _this.vehiclesService.query(id)
                        .subscribe(function (vehicles) {
                        _this.vehicles = vehicles;
                        _this.hideProgress = _this.fees !== null && (_this.vehicles !== null || _this.employees !== null || _this.integrals !== null);
                    }, function (error) {
                        _this.onError(error);
                        _this.hideProgress = true;
                    });
                }
                else if (_this.validateAgainstArray(_this.INTEGRAL_RISK_TYPES, _this.policy.risk.riskType)) {
                    _this.integralsService.query(id)
                        .subscribe(function (integrals) {
                        _this.integrals = integrals;
                        _this.hideProgress = _this.fees !== null && (_this.vehicles !== null || _this.employees !== null || _this.integrals !== null);
                    }, function (error) {
                        _this.onError(error);
                        _this.hideProgress = true;
                    });
                }
                else if (_this.validateAgainstArray(_this.EMPLOYEE_RISK_TYPES, _this.policy.risk.riskType)) {
                    _this.employeesService.query(id)
                        .subscribe(function (employees) {
                        _this.employees = employees;
                        _this.hideProgress = _this.fees !== null && (_this.vehicles !== null || _this.employees !== null || _this.integrals !== null);
                    }, function (error) {
                        _this.onError(error);
                        _this.hideProgress = true;
                    });
                }
            }, function (error) {
                _this.onError(error);
                _this.hideProgress = true;
            });
        });
    };
    PoliciesDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PoliciesDetailComponent.prototype.onError = function (error) {
        return Observable_1.Observable.throw(error.message);
    };
    PoliciesDetailComponent.prototype.validateAgainstArray = function (values, value) {
        return values.indexOf(value) > -1;
    };
    PoliciesDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-policies-detail',
            templateUrl: 'policies-detail.component.html',
            styleUrls: ['policies-detail.component.css'],
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
                router_2.ROUTER_DIRECTIVES
            ],
            providers: [
                icon_1.MdIconRegistry,
                core_2.MdUniqueSelectionDispatcher,
                policies_service_1.PoliciesService,
                fees_service_1.FeesService,
                vehicles_service_1.VehiclesService,
                integrals_service_1.IntegralsService,
                employees_service_1.EmployeesService],
            pipes: [
                fee_status_name_pipe_1.FeeStatusNamePipe
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, policies_service_1.PoliciesService, vehicles_service_1.VehiclesService, integrals_service_1.IntegralsService, employees_service_1.EmployeesService, fees_service_1.FeesService])
    ], PoliciesDetailComponent);
    return PoliciesDetailComponent;
}());
exports.PoliciesDetailComponent = PoliciesDetailComponent;
//# sourceMappingURL=policies-detail.component.js.map