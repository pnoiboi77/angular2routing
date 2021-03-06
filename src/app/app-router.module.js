"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var welcome_component_1 = require("./home/welcome.component");
var page_not_found_component_1 = require("./page-not-found.component");
var auth_gaurd_service_1 = require("./user/auth-gaurd.service");
var selective_strategy_service_1 = require("./selective-strategy.service");
/*const ROUTES = [
    { path: 'welcome',  component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];*/
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    core_1.NgModule({
        imports: [
            /*RouterModule.forRoot(ROUTES), // can also defin constant var to keep clean */
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                {
                    path: 'products',
                    loadChildren: 'app/products/product.module#ProductModule',
                    data: { customPreloadData: true },
                    canActivate: [auth_gaurd_service_1.AuthGaurd] // when lazy loading, use with preloadall or strategy.
                },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
            ] /*, { useHash: true } // hash based routing */, { enableTracing: true, /*preloadingStrategy: PreloadAllModules*/ preloadingStrategy: selective_strategy_service_1.SelectiveStrategy })
        ],
        declarations: [
            welcome_component_1.WelcomeComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        providers: [selective_strategy_service_1.SelectiveStrategy],
        exports: [router_1.RouterModule]
    })
], AppRouterModule);
exports.AppRouterModule = AppRouterModule;
//# sourceMappingURL=app-router.module.js.map