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
var slide_toggle_1 = require('@angular2-material/slide-toggle');
var cash_account_1 = require('../shared/domain/cash-account');
var ledger_account_1 = require('../shared/domain/ledger-account');
var asset_1 = require('../shared/domain/asset');
var client_1 = require('../shared/domain/client');
var fee_1 = require('../shared/domain/fee');
var ledger_accounts_query_options_1 = require('../shared/domain/ledger-accounts-query-options');
var assets_query_options_1 = require('../shared/domain/assets-query-options');
var ledger_accounts_service_1 = require('../shared/services/ledger-accounts.service');
var cash_accounts_service_1 = require('../shared/services/cash-accounts.service');
var assets_service_1 = require('../shared/services/assets.service');
var fees_service_1 = require('../shared/services/fees.service');
var current_user_service_1 = require('../shared/services/current-user.service');
var producers_service_1 = require('../shared/services/producers.service');
var PoliciesCollectComponent = (function () {
    function PoliciesCollectComponent(route, router, ledgerAccountsService, assetsService, cashAccountsService, feesService, currentUserService, producersService) {
        this.route = route;
        this.router = router;
        this.ledgerAccountsService = ledgerAccountsService;
        this.assetsService = assetsService;
        this.cashAccountsService = cashAccountsService;
        this.feesService = feesService;
        this.currentUserService = currentUserService;
        this.producersService = producersService;
        this.LEDGER_ACCOUNT_COBRANZA = 'Cobranza';
        this.ASSET_EFECTIVO = 'Efectivo';
    }
    PoliciesCollectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fee = new fee_1.Fee();
        this.collection = new ledger_account_1.LedgerAccount();
        this.cash = new asset_1.Asset();
        this.allowSubmit = false;
        this.producers = [];
        this.producer = null;
        this.showProducers = true;
        this.sub = this.route.params.subscribe(function (params) {
            var feeId = params['feeId'];
            _this.fetchFee(feeId);
        });
        this.fetchCollectionLedgerAccount();
        this.fetchCashAsset();
        this.fetchProducers();
    };
    PoliciesCollectComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PoliciesCollectComponent.prototype.fetchCollectionLedgerAccount = function () {
        var _this = this;
        var query = new ledger_accounts_query_options_1.LedgerAccountsQueryOptions();
        query.name = this.LEDGER_ACCOUNT_COBRANZA;
        this.ledgerAccountsService
            .query(query)
            .subscribe(function (ledgerAccounts) { return _this.collection = ledgerAccounts.length > 0 ? ledgerAccounts[0] : null; }, this.onError);
    };
    PoliciesCollectComponent.prototype.fetchCashAsset = function () {
        var _this = this;
        var query = new assets_query_options_1.AssetsQueryOptions();
        query.name = this.ASSET_EFECTIVO;
        this.assetsService
            .query(query)
            .subscribe(function (assets) { return _this.cash = assets.length > 0 ? assets[0] : null; }, this.onError);
    };
    PoliciesCollectComponent.prototype.fetchFee = function (feeId) {
        var _this = this;
        this.feesService
            .get(feeId)
            .subscribe(function (fee) { return _this.fee = fee; }, this.onError);
    };
    PoliciesCollectComponent.prototype.fetchProducers = function () {
        var _this = this;
        this.producersService
            .query()
            .subscribe(function (producers) { return _this.producers = producers; }, this.onError);
    };
    PoliciesCollectComponent.prototype.submit = function () {
        var _this = this;
        var cashAccount = new cash_account_1.CashAccount();
        cashAccount.amount = this.amount;
        cashAccount.asset = this.cash;
        cashAccount.balance = this.amount;
        cashAccount.date = new Date();
        cashAccount.description = 'Cobranza a ' + client_1.Client.getFullName(this.fee.policy.client);
        cashAccount.fee = this.fee;
        cashAccount.ledgerAccount = this.collection;
        cashAccount.producer = this.producer;
        cashAccount.receiptNumber = this.receiptNumber;
        this.cashAccountsService
            .post(cashAccount)
            .subscribe(function (res) {
            _this.fee.state = 1 /* PAGADO */;
            _this.feesService
                .put(_this.fee)
                .subscribe(function (res) { return _this.router.navigate(['policies', _this.fee.policy.objectId]); }, _this.onError);
        }, this.onError);
    };
    PoliciesCollectComponent.prototype.getProducerName = function (prodId) {
        var prod = this.producers.find(function (e) { return e.objectId === prodId; });
        return prod ? prod.name : null;
    };
    PoliciesCollectComponent.prototype.assignAllowSubmit = function () {
        return this.fee && this.cash && this.collection && this.producers;
    };
    PoliciesCollectComponent.prototype.onError = function (error) {
        return Observable_1.Observable.throw(error.message);
    };
    PoliciesCollectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-policies-collect',
            templateUrl: 'policies-collect.component.html',
            styleUrls: ['policies-collect.component.css'],
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
                router_2.ROUTER_DIRECTIVES,
                slide_toggle_1.MD_SLIDE_TOGGLE_DIRECTIVES
            ],
            providers: [
                icon_1.MdIconRegistry,
                core_2.MdUniqueSelectionDispatcher,
                ledger_accounts_service_1.LedgerAccountsService,
                assets_service_1.AssetsService,
                cash_accounts_service_1.CashAccountsService,
                fees_service_1.FeesService,
                current_user_service_1.CurrentUserService,
                producers_service_1.ProducersService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, ledger_accounts_service_1.LedgerAccountsService, assets_service_1.AssetsService, cash_accounts_service_1.CashAccountsService, fees_service_1.FeesService, current_user_service_1.CurrentUserService, producers_service_1.ProducersService])
    ], PoliciesCollectComponent);
    return PoliciesCollectComponent;
}());
exports.PoliciesCollectComponent = PoliciesCollectComponent;
//# sourceMappingURL=policies-collect.component.js.map