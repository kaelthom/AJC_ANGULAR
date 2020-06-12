"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Supplier = void 0;
var Person_1 = require("./Person");
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Supplier;
}(Person_1.Person));
exports.Supplier = Supplier;
