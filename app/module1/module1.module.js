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
var module1_routing_1 = require('./module1.routing');
var module1page1_component_1 = require('./module1page1.component');
var module1page2_component_1 = require('./module1page2.component');
var Module1Module = (function () {
    function Module1Module() {
    }
    Module1Module = __decorate([
        core_1.NgModule({
            imports: [module1_routing_1.Module1RoutingModule],
            declarations: [module1page1_component_1.Module1Page1Component, module1page2_component_1.Module1Page2Component],
        }), 
        __metadata('design:paramtypes', [])
    ], Module1Module);
    return Module1Module;
}());
exports.Module1Module = Module1Module;
//# sourceMappingURL=module1.module.js.map