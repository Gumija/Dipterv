import {Injectable} from '@angular/core';
import {Highlight} from './highlight';

@Injectable()
export class HighlightService {
    constructor() {

    }

    // id is user id
    getHighlights(id: number): Promise<Highlight[]> {
        return Promise.resolve(highlights);
    }

    addHighlight(highlight: Highlight, userId: number) {
        var id;
        if (highlights.length != 0) {
            id = highlights[highlights.length - 1].id + 1;
        } else {
            id = 1;
        }
        var c = new Highlight(id, highlight.color);
        highlights.push(c);
    }

    removeHighlight(id: number) {
        highlights = highlights.filter(h => h.id != id);
    }

    // TODO: bubble up the change somehow
    updateComment(highlight: Highlight) {
        highlights.map(h => {
            if (h.id == highlight.id) {
                h.color = highlight.color;
            }
        });
    }
}

var highlights = [
    new Highlight(1, 'rgba(100, 100, 255, 0.4)'),
    new Highlight(2, 'rgba(240, 0, 0, 0.4)'),
    
];
