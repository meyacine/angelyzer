"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = function () {
    return "\n        <html>\n    <head>\n        <link href=\"style.css\" rel=\"stylesheet\">\n        <meta charset=\"utf-8\">\n        <title>Angular project view</title>\n        <meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui\">\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/gojs/2.1.2/go.js\"></script>\n    </head>\n    \n    <body>\n    <div class=\"toolbar sticky\">\n        <div class=\"toolbar-row\">\n            <div class=\"toolbar-menu\">\n                <ul class=\"menu-elements\">\n                    <li class=\"menu-element\"><img src=\"https://angular.io/assets/images/logos/angular/logo-nav@2x.png\"\n                                                  class=\"logo\"></li>\n                    <li class=\"menu-element\"><a class=\"menu-link\" href=\"index.html\">graph</a></li>\n                    <li class=\"menu-element\"><a class=\"menu-link\" href=\"validations.html\">validations</a></li>\n                    <li class=\"menu-element\"><a class=\"menu-link\" href=\"refactor.html\">refactor</a></li>\n                    <li class=\"menu-element\"><a class=\"menu-link\" href=\"declarations.html\">declarations</a></li>\n                    <li class=\"menu-element\"><a class=\"menu-link\" href=\"providers.html\">providers</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div id=\"sample\" class=\"container\">\n        <div class=\"navigation\" id=\"navigation\">\n            <ul id=\"navigation-menu\">\n            </ul>\n        </div>\n        <div id=\"uml\" class=\"uml-diagram\"></div>\n    </div>\n    <script src=\"code.js\"></script>\n    <script src=\"components.js\"></script>\n    <script src=\"uml-data.js\"></script>\n    <script src=\"uml.js\"></script>\n    </body>\n    </html>\n";
};
