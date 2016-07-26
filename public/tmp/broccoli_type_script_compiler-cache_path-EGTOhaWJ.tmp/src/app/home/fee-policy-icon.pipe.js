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
var FeePolicyIconPipe = (function () {
    function FeePolicyIconPipe() {
        this.VEHICLE_RISK_TYPES = [1];
        this.INTEGRAL_RISK_TYPES = [2];
        this.EMPLOYEE_RISK_TYPES = [3, 4];
    }
    FeePolicyIconPipe.prototype.transform = function (value, args) {
        var riskType = value.policy.risk.riskType;
        if (this.validateAgainstArray(this.VEHICLE_RISK_TYPES, riskType)) {
            return 'directions_car';
        }
        else if (this.validateAgainstArray(this.INTEGRAL_RISK_TYPES, riskType)) {
            return 'home';
        }
        else if (this.validateAgainstArray(this.EMPLOYEE_RISK_TYPES, riskType)) {
            return 'favorite';
        }
        else {
            return 'help_outline';
        }
    };
    FeePolicyIconPipe.prototype.validateAgainstArray = function (values, value) {
        return values.indexOf(value) > -1;
    };
    FeePolicyIconPipe = __decorate([
        core_1.Pipe({
            name: 'feePolicyIcon'
        }), 
        __metadata('design:paramtypes', [])
    ], FeePolicyIconPipe);
    return FeePolicyIconPipe;
}());
exports.FeePolicyIconPipe = FeePolicyIconPipe;
//# sourceMappingURL=fee-policy-icon.pipe.js.map