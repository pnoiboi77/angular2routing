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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductListResolver = (function () {
    function ProductListResolver(products, router) {
        this.products = products;
        this.router = router;
    }
    ProductListResolver.prototype.resolve = function (route, state) {
        return this.products.getProducts();
    };
    return ProductListResolver;
}());
ProductListResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router])
], ProductListResolver);
exports.ProductListResolver = ProductListResolver;
//# sourceMappingURL=product-list-resolver.service.js.map