"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PriceModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var price_service_1 = require("./price.service");
var price_controller_1 = require("./price.controller");
var price_entity_1 = require("./price.entity");
var PriceModule = /** @class */ (function () {
    function PriceModule() {
    }
    PriceModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([price_entity_1.Price])],
            providers: [price_service_1.PriceService],
            controllers: [price_controller_1.PriceController]
        })
    ], PriceModule);
    return PriceModule;
}());
exports.PriceModule = PriceModule;
