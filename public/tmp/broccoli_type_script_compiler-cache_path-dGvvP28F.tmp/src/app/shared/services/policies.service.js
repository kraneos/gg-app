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
var PoliciesService = (function () {
    /**
     *
     */
    function PoliciesService(parseService) {
        this.parseService = parseService;
    }
    PoliciesService.prototype.query = function (opts) {
        var url = 'classes/Policy?skip=' + (+opts.limit * (opts.page - 1)) + '&limit=' + opts.limit;
        url = url + '&include=client,risk';
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    };
    PoliciesService.prototype.get = function (id) {
        var url = 'classes/Policy/' + id;
        url = url + '?include=risk.company,client';
        return this.parseService
            .get(url)
            .map(this.parseService.extractObject)
            .catch(this.parseService.handleError);
    };
    PoliciesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [parse_service_1.ParseService])
    ], PoliciesService);
    return PoliciesService;
}());
exports.PoliciesService = PoliciesService;
//# sourceMappingURL=policies.service.js.map