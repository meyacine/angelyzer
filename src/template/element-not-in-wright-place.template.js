"use strict";
exports.__esModule = true;
exports.elementNotInWrightPlace = function (data, prop) { return ("The element " + data + " is not allowed in " + prop); };
exports.elementsNotInWrightPlace = function (datas) {
    var html = '';
    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
        var data = datas_1[_i];
        html += "<p>" + data + "</p>";
    }
    return html;
};
