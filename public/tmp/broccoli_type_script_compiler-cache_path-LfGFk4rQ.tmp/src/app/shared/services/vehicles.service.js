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
var VehiclesService = (function () {
    /**
     *
     */
    function VehiclesService(parseService) {
        this.parseService = parseService;
    }
    VehiclesService.prototype.query = function (policyId) {
        var url = 'classes/Vehicle?where={"policy":{"__type":"Pointer","className":"Policy","objectId":"' + policyId + '"}}';
        url = url + '&include=vehicleModel';
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    };
    VehiclesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [parse_service_1.ParseService])
    ], VehiclesService);
    return VehiclesService;
}());
exports.VehiclesService = VehiclesService;
//# sourceMappingURL=vehicles.service.js.map