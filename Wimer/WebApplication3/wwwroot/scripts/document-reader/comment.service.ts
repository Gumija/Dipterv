import {Injectable} from '@angular/core';
import {Comment} from './comment';

@Injectable()
export class CommentService {
    constructor() {

    }

    // document id
    getComments(id: number): Promise<Comment[]> {
        return Promise.resolve(comments);
    }

    addComment(comment: Comment, docId: number) {
        var id : number;
        if (comments.length != 0) {
            id = comments[comments.length - 1].id + 1;
        } else {
            id = 1;
        }
        var c = new Comment(id, comment.title, comment.content, comment.top);
        comments.push(c);
    }

    removeComment(id: number) {
        comments = comments.filter(c => c.id != id);
    }

    // TODO: bubble up the change somehow
    updateComment(comment: Comment) {
        comments.map(c => {
            if (c.id == comment.id) {
                c.title = comment.title;
                c.content = comment.content;
            }
        });
    }
}

var comments = [
    new Comment(1, 'Comment Numero #1', 'What a love comment we have here.', 100),
    new Comment(2, 'Comment Numero #2', 'What a love comment we have here. Let\'s keep it simple. But not that much :)', 300),
    new Comment(3, 'Comment Numero #3', 'What a love comment we have here. We might even make a separate page for it. It is indeed worth it\'s own page based on the length of this comment.', 400),
    new Comment(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lacus leo. Nulla et massa cursus, lobortis ipsum non, convallis felis. Morbi eleifend quam quis nisl vestibulum.', 'What a love comment we have here.', 600),
];
