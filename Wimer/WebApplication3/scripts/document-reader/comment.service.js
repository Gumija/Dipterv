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
const comment_1 = require('./comment');
let CommentService = class CommentService {
    constructor() {
    }
    // document id
    getComments(id) {
        return Promise.resolve(comments);
    }
    addComment(comment, docId) {
        var id;
        if (comments.length != 0) {
            id = comments[comments.length - 1].id + 1;
        }
        else {
            id = 1;
        }
        var c = new comment_1.Comment(id, comment.title, comment.content, comment.top);
        comments.push(c);
    }
    removeComment(id) {
        comments = comments.filter(c => c.id != id);
    }
    // TODO: bubble up the change somehow
    updateComment(comment) {
        comments.map(c => {
            if (c.id == comment.id) {
                c.title = comment.title;
                c.content = comment.content;
            }
        });
    }
};
CommentService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], CommentService);
exports.CommentService = CommentService;
var comments = [
    new comment_1.Comment(1, 'Comment Numero #1', 'What a love comment we have here.', 100),
    new comment_1.Comment(2, 'Comment Numero #2', 'What a love comment we have here. Let\'s keep it simple. But not that much :)', 300),
    new comment_1.Comment(3, 'Comment Numero #3', 'What a love comment we have here. We might even make a separate page for it. It is indeed worth it\'s own page based on the length of this comment.', 400),
    new comment_1.Comment(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lacus leo. Nulla et massa cursus, lobortis ipsum non, convallis felis. Morbi eleifend quam quis nisl vestibulum.', 'What a love comment we have here.', 600),
];
