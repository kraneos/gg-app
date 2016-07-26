"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var clients_component_1 = require('./clients/clients.component');
var policies_component_1 = require('./policies/policies.component');
var login_component_1 = require('./login/login.component');
var auth_guard_1 = require('./auth.guard');
var login_service_1 = require('./shared/services/login.service');
var parse_service_1 = require('./shared/services/parse.service');
var clients_detail_component_1 = require('./clients-detail/clients-detail.component');
var policies_detail_component_1 = require('./policies-detail/policies-detail.component');
var policies_collect_component_1 = require('./policies-collect/policies-collect.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'clients', component: clients_component_1.ClientsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'clients/:id', component: clients_detail_component_1.ClientsDetailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'policies/:id', component: policies_detail_component_1.PoliciesDetailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'policies', component: policies_component_1.PoliciesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'policies/:id/fees/:feeId/collect', component: policies_collect_component_1.PoliciesCollectComponent, canActivate: [auth_guard_1.AuthGuard] }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
exports.AUTH_PROVIDERS = [
    auth_guard_1.AuthGuard,
    login_service_1.LoginService,
    parse_service_1.ParseService
];
//# sourceMappingURL=app.routes.js.map