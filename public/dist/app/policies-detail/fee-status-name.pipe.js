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
var FeeStatusNamePipe = (function () {
    function FeeStatusNamePipe() {
    }
    FeeStatusNamePipe.prototype.transform = function (value, args) {
        switch (value.state) {
            case 0:
                return 'Debe';
            case 1:
                return 'Pagado';
            case 2:
                return 'Observado';
            case 3:
                return 'Preliquidado';
            case 4:
                return 'Liquidado';
            case 5:
                return 'Mantener Cubierto';
            case 6:
                return 'Moroso';
            case 7:
                return 'Sin Cobertura';
            case 8:
                return 'Debe y Preliquidado';
            default:
                return 'Otro';
        }
    };
    FeeStatusNamePipe = __decorate([
        core_1.Pipe({
            name: 'feeStatusName'
        }), 
        __metadata('design:paramtypes', [])
    ], FeeStatusNamePipe);
    return FeeStatusNamePipe;
}());
exports.FeeStatusNamePipe = FeeStatusNamePipe;
//# sourceMappingURL=fee-status-name.pipe.js.map