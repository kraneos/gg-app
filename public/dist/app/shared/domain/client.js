"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var id_entity_1 = require('./id-entity');
var Client = (function (_super) {
    __extends(Client, _super);
    function Client() {
        _super.apply(this, arguments);
    }
    Client.getFullName = function (client) {
        return client.firstName + ' ' + client.lastName;
    };
    return Client;
}(id_entity_1.IdEntity));
exports.Client = Client;
//# sourceMappingURL=client.js.map