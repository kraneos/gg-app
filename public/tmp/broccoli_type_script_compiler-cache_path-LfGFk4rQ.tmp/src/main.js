"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var current_user_service_1 = require('./app/shared/services/current-user.service');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_routes_1.AUTH_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    current_user_service_1.CurrentUserService
])
    .catch(console.log);
//# sourceMappingURL=main.js.map