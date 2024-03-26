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
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
// pseudo-code/JavaScript with Prisma
function ensureAmbiancesExist() {
    return __awaiter(this, void 0, void 0, function () {
        var ambiances, _i, ambiances_1, ambianceType, ambiance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ambiances = ['Cozy', 'Romantic'];
                    _i = 0, ambiances_1 = ambiances;
                    _a.label = 1;
                case 1:
                    if (!(_i < ambiances_1.length)) return [3 /*break*/, 5];
                    ambianceType = ambiances_1[_i];
                    return [4 /*yield*/, prisma.ambiance.findUnique({
                            where: { AmbienceType: ambianceType },
                        })];
                case 2:
                    ambiance = _a.sent();
                    if (!!ambiance) return [3 /*break*/, 4];
                    return [4 /*yield*/, prisma.ambiance.create({
                            data: { AmbienceType: ambianceType },
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
    });
}
function createRestaurant() {
    return __awaiter(this, void 0, void 0, function () {
        var restaurant;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.restaurant.create({
                        data: {
                            Name: "Gourmet Paradise",
                            CuisneType: "Multi-Cuisine", // Note the typo in your schema; consider correcting it to "CuisineType"
                            Location: "123 Culinary Street",
                            PriceRange: "$$$",
                        },
                    })];
                case 1:
                    restaurant = _a.sent();
                    return [2 /*return*/, restaurant];
            }
        });
    });
}
function addAmbianceToRestaurant(restaurantId, ambiances) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, ambiances_2, ambianceType, ambiance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, ambiances_2 = ambiances;
                    _a.label = 1;
                case 1:
                    if (!(_i < ambiances_2.length)) return [3 /*break*/, 5];
                    ambianceType = ambiances_2[_i];
                    return [4 /*yield*/, prisma.ambiance.findUnique({
                            where: { AmbienceType: ambianceType },
                        })];
                case 2:
                    ambiance = _a.sent();
                    console.log(ambiance);
                    if (!ambiance) return [3 /*break*/, 4];
                    return [4 /*yield*/, prisma.restaurantAmbience.create({
                            data: {
                                RestaurantId: restaurantId,
                                AmbienceId: ambiance.AmbienceId,
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
    });
}
// Example usage
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var restaurant;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ensureAmbiancesExist()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, createRestaurant()];
                case 2:
                    restaurant = _a.sent();
                    return [4 /*yield*/, addAmbianceToRestaurant(restaurant.RestaurantId, ['Cozy', 'Romantic'])];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    throw e;
})
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
