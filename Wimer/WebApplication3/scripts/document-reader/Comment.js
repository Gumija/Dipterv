"use strict";
class Comment {
    constructor(id, title, content, top) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.top = top;
    }
    getTag() {
        return 'comment-' + this.id;
    }
}
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map