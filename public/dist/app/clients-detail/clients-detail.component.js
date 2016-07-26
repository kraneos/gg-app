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
var client_1 = require('../shared/domain/client');
var clients_service_1 = require('../shared/services/clients.service');
var ClientsDetailComponent = (function () {
    function ClientsDetailComponent(route, router, clientsService) {
        this.route = route;
        this.router = router;
        this.clientsService = clientsService;
    }
    ClientsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new client_1.Client();
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.clientsService.get(id)
                .subscribe(function (client) {
                _this.client = client;
                _this.hideProgress = true;
            }, function (error) {
                _this.onError(error);
                _this.hideProgress = true;
            });
        });
    };
    ClientsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClientsDetailComponent.prototype.onError = function (error) {
        return Observable_1.Observable.throw(error.message);
    };
    ClientsDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-clients-detail',
            templateUrl: 'clients-detail.component.html',
            styleUrls: ['clients-detail.component.css'],
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
            providers: [icon_1.MdIconRegistry, core_2.MdUniqueSelectionDispatcher, clients_service_1.ClientsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, clients_service_1.ClientsService])
    ], ClientsDetailComponent);
    return ClientsDetailComponent;
}());
exports.ClientsDetailComponent = ClientsDetailComponent;
//# sourceMappingURL=clients-detail.component.js.map