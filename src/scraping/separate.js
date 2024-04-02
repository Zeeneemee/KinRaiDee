"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separateFieldsWithNewline = void 0;
var separateFieldsWithNewline = function (text) {
    var patterns = {
        address: /ที่อยู่: (.+?)Google Map:/,
        googleMap: /Google Map: (.+?)โทร:/,
        phone: /โทร: (.+?)เวลาเปิดบริการคาเฟ่:/,
        hours: /เวลาเปิดบริการคาเฟ่: (.+?)เว็บไซต์:/,
        website: /เว็บไซต์: (.+?)คาเฟ่สไตล์:/,
        style: /คาเฟ่สไตล์: (.+?)ราคาเฉลี่ยต่อหัว:/,
        price: /ราคาเฉลี่ยต่อหัว: (.+)/,
    };
    var result = {};
    for (var _i = 0, _a = Object.entries(patterns); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], pattern = _b[1];
        var match = text.match(pattern);
        if (match && match[1]) {
            // Append \n for each match, but the final output will have unnecessary newlines
            // Consider removing \n if you plan to directly use the strings in a UI
            result[key] = "".concat(match[1], "\n");
        }
    }
    return result;
};
exports.separateFieldsWithNewline = separateFieldsWithNewline;
// Example usage
var other = 'ที่อยู่: 16/78 ลาดพร้าว 18 แยก 3 ถนนลาดพร้าว ซอยลาดพร้าว 15 เขตจตุจักร กรุงเทพฯGoogle Map: https://goo.gl/maps/5dDmAVof7rsp32WW7โทร: 0893542999เวลาเปิดบริการคาเฟ่: 10.00 – 18.00 น.เว็บไซต์: https://www.facebook.com/Ri.Cafe.Friends คาเฟ่สไตล์: Cartoon Characterราคาเฉลี่ยต่อหัว: 100 – 200 บาท';
