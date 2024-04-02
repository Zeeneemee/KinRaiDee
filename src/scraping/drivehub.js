"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var puppeteer = require("puppeteer");
var separateFieldsWithNewline = require('../scraping/separate').separateFieldsWithNewline;
function launchBrowserWithDefaultAccount(link) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({ headless: false })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.setViewport({ width: 1280, height: 800 })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.goto(link, { timeout: 0 })];
                case 4:
                    _a.sent();
                    return [2 /*return*/, { browser: browser, page: page }];
            }
        });
    });
}
function scrollDown(page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.evaluate(function () {
                        return new Promise(function (resolve, reject) {
                            var totalHeight = 0;
                            var distance = 500;
                            var timer = setInterval(function () {
                                window.scrollBy(0, distance);
                                totalHeight += distance;
                                if (totalHeight >= document.body.scrollHeight) {
                                    clearInterval(timer);
                                    resolve();
                                }
                            }, 100);
                        });
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function drivehub() {
    return __awaiter(this, void 0, void 0, function () {
        var page, nameSelector, otherSelector, names, others, cafeInfo_1, final, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, launchBrowserWithDefaultAccount('https://www.drivehub.com/blog/bangkok-cafes/')];
                case 1:
                    page = (_a.sent()).page;
                    nameSelector = 'h2.wp-block-heading';
                    otherSelector = 'p';
                    return [4 /*yield*/, page.waitForSelector(nameSelector)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, scrollDown(page)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.$$eval(nameSelector, function (elements) { return elements.map(function (element) { return element.textContent.trim(); }); })];
                case 4:
                    names = _a.sent();
                    return [4 /*yield*/, page.$$eval(otherSelector, function (elements) { return elements.map(function (element) { return element.textContent.trim(); }); })];
                case 5:
                    others = _a.sent();
                    others.shift();
                    others.pop();
                    cafeInfo_1 = others.map(function (other) { return separateFieldsWithNewline(other); });
                    console.log('Browser will now close');
                    final = names.map(function (name, i) {
                        var cafeInfoFinal = cafeInfo_1.filter(function (cafeInfo) { return Object.keys(cafeInfo).length > 0; });
                        return __assign({ name: name }, cafeInfoFinal[i]);
                    });
                    return [2 /*return*/, final];
                case 6:
                    error_1 = _a.sent();
                    console.error('Error occurred:', error_1.message);
                    return [2 /*return*/, []];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function convertToCSV(data) {
    var headers = Object.keys(data[0]);
    var csv = __spreadArray([
        headers.join(',')
    ], data.map(function (row) { return headers.map(function (fieldName) { return JSON.stringify(row[fieldName], function (_, value) { return value == null ? '' : value; }); }).join(','); }), true).join('\r\n');
    return csv;
}
drivehub().then(console.log).then(function (data) {
    var csvData = convertToCSV(data);
    fs.writeFileSync('drivehub.csv', csvData);
    console.log('Data saved to drivehub.csv');
}).catch(console.error);
