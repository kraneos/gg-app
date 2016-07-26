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
var FeesService = (function () {
    /**
     *
     */
    function FeesService(parseService) {
        this.parseService = parseService;
    }
    FeesService.prototype.query = function (opts) {
        var url = 'classes/Fee?skip=' + (+opts.limit * (opts.page - 1)) + '&limit=' + opts.limit;
        url = url + '&include=policy.client,policy.risk';
        url = url + '&order=expirationDate';
        if (opts.date) {
            var fromDate = new Date(opts.date.getFullYear(), opts.date.getMonth(), opts.date.getDate());
            fromDate.setUTCHours(0);
            var toDate = new Date(fromDate.valueOf());
            toDate.setDate(toDate.getDate() + 1);
            toDate.setUTCHours(0);
            url = url + '&where={"expirationDate":{"$gte":{"__type":"Date","iso":"' + fromDate.toJSON() + '"},"$lt":{"__type":"Date","iso":"' + toDate.toJSON() + '"}}}';
        }
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    };
    FeesService.prototype.queryByPolicy = function (policyId) {
        var url = 'classes/Fee?where={"policy":{"__type":"Pointer","className":"Policy","objectId":"' + policyId + '"}}';
        url = url + '&order=expirationDate';
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    };
    FeesService.prototype.get = function (feeId) {
        var url = 'classes/Fee/' + feeId;
        url = url + '?include=policy.client';
        return this.parseService
            .get(url)
            .map(this.parseService.extractObject)
            .catch(this.parseService.handleError);
    };
    FeesService.prototype.put = function (fee) {
        var url = 'classes/Fee/' + fee.objectId;
        return this.parseService
            .put(url, fee)
            .catch(this.parseService.handleError);
    };
    FeesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [parse_service_1.ParseService])
    ], FeesService);
    return FeesService;
}());
exports.FeesService = FeesService;
//# sourceMappingURL=fees.service.js.map