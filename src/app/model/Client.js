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
exports.Client = void 0;
var Person_1 = require("./Person");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    Client.prototype.getNom = function () {
        return this.firstName + " " + this.lastName;
    };
    return Client;
}(Person_1.Person));
exports.Client = Client;
