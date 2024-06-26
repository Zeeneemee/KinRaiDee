"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMealTypeToCafe = exports.checkMealType = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var checkMealType = function () { return __awaiter(void 0, void 0, void 0, function () {
    var mealTypes, _i, mealTypes_1, mealType, meal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mealTypes = ['coffee', 'bakery', 'cake', 'ice-cream', 'brunch', 'one-dish-meal'];
                _i = 0, mealTypes_1 = mealTypes;
                _a.label = 1;
            case 1:
                if (!(_i < mealTypes_1.length)) return [3 /*break*/, 5];
                mealType = mealTypes_1[_i];
                return [4 /*yield*/, prisma.mealTypes.findUnique({
                        where: { MealType: mealType },
                    })];
            case 2:
                meal = _a.sent();
                if (!!meal) return [3 /*break*/, 4];
                return [4 /*yield*/, prisma.mealTypes.create({
                        data: { MealType: mealType },
                    })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.checkMealType = checkMealType;
var addMealTypeToCafe = function (CafeId, mealTypes) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, mealTypes_2, mealType, meal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, mealTypes_2 = mealTypes;
                _a.label = 1;
            case 1:
                if (!(_i < mealTypes_2.length)) return [3 /*break*/, 5];
                mealType = mealTypes_2[_i];
                return [4 /*yield*/, prisma.mealTypes.findUnique({
                        where: { MealType: mealType },
                    })];
            case 2:
                meal = _a.sent();
                console.log(meal);
                if (!meal) return [3 /*break*/, 4];
                return [4 /*yield*/, prisma.cafeMealTypes.create({
                        data: {
                            CafeId: CafeId,
                            MealTypesId: meal.MealTypesId,
                        },
                    })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addMealTypeToCafe = addMealTypeToCafe;
