var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Le typage en typescript
var firstname = 'Fiorella';
var age = 4;
var contacts = ['A', 'B', 'C'];
var contacts2 = ['A', 'B', 'C'];
var myColor = 'blue';
// Typage des fonctions
function addition(a, b) {
    return a + b;
}
console.log(addition(1, 2));
// Fonctions raccourcies (ES6)
var substraction = function (a, b) { return a - b; };
console.log(substraction(2, 1));
var Log = function () {
    return function (originalMethod, context) {
        console.log("call ".concat(context.kind, " ").concat(String(context.name)));
        // On remplate la méthode par cette fonction (normale car this)...
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('LOG');
            originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        };
    };
};
var Car = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _drive_decorators;
    return _a = /** @class */ (function () {
            function Car(color) {
                this.color = (__runInitializers(this, _instanceExtraInitializers), color);
                this.wheel = 4;
                this.speed = 0;
                // this.color = color;
            }
            Car.prototype.drive = function () {
                console.log("my ".concat(this.color.value, " car is driving at ").concat(this.speed, "."));
            };
            return Car;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _drive_decorators = [Log()];
            __esDecorate(_a, null, _drive_decorators, { kind: "method", name: "drive", static: false, private: false, access: { has: function (obj) { return "drive" in obj; }, get: function (obj) { return obj.drive; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var car = new Car({
    name: 'Red', value: 'red',
    display: function () { console.log(this.value); }
});
var cars = [car];
car.drive();
car.color.display();
