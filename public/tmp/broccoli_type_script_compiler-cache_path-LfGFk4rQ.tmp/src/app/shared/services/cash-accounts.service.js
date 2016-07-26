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
var CashAccountsService = (function () {
    /**
     *
     */
    function CashAccountsService(parseService) {
        this.parseService = parseService;
    }
    CashAccountsService.prototype.post = function (obj) {
        var url = 'classes/CashAccount';
        var body = this.getCashAccountBody(obj);
        return this.parseService
            .post(url, body)
            .catch(this.parseService.handleError);
    };
    CashAccountsService.prototype.getCashAccountBody = function (obj) {
        var body = {};
        body.amount = obj.amount;
        body.asset = { __type: 'Pointer', className: 'Asset', objectId: obj.asset.objectId };
        body.balance = obj.balance;
        body.date = { __type: 'Date', iso: obj.date.toJSON() };
        body.description = obj.description;
        body.fee = { __type: 'Pointer', className: 'Fee', objectId: obj.fee.objectId };
        body.ledgerAccount = { __type: 'Pointer', className: 'LedgerAccount', objectId: obj.ledgerAccount.objectId };
        body.producer = { __type: 'Pointer', className: 'Producer', objectId: obj.producer.objectId };
        body.receiptNumber = obj.receiptNumber;
        return body;
    };
    CashAccountsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [parse_service_1.ParseService])
    ], CashAccountsService);
    return CashAccountsService;
}());
exports.CashAccountsService = CashAccountsService;
//# sourceMappingURL=cash-accounts.service.js.map