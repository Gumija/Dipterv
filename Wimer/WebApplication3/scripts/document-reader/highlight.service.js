"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const highlight_1 = require('./highlight');
let HighlightService = class HighlightService {
    constructor() {
    }
    // id is user id
    getHighlights(id) {
        return Promise.resolve(highlights);
    }
    addHighlight(highlight, userId) {
        var id;
        if (highlights.length != 0) {
            id = highlights[highlights.length - 1].id + 1;
        }
        else {
            id = 1;
        }
        var c = new highlight_1.Highlight(id, highlight.color);
        highlights.push(c);
    }
    removeHighlight(id) {
        highlights = highlights.filter(h => h.id != id);
    }
    // TODO: bubble up the change somehow
    updateComment(highlight) {
        highlights.map(h => {
            if (h.id == highlight.id) {
                h.color = highlight.color;
            }
        });
    }
};
HighlightService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], HighlightService);
exports.HighlightService = HighlightService;
var highlights = [
    new highlight_1.Highlight(1, 'rgba(100, 100, 255, 0.4)'),
    new highlight_1.Highlight(2, 'rgba(240, 0, 0, 0.4)'),
];
//# sourceMappingURL=highlight.service.js.map