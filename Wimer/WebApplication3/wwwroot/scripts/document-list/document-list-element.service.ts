import {Injectable} from '@angular/core';
import {DocumentListElement} from './document-list-element';

@Injectable()
export class DocumentListElementService {
    constructor() { }

    getDocumentListElements(): Promise<DocumentListElement[]> {
        return documentListElementsPromise;
    }

}
var documentListElements = [
    new DocumentListElement(1, 'Simple text file', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg'),
    new DocumentListElement(2, 'Paragraphs after image (HTML)', 'Here comes the sun to take the dragons to burn the cities.', ''),
    new DocumentListElement(3, 'Dragon Burning Cities Again', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg'),
    new DocumentListElement(4, 'Empty image path 2.0', 'Here comes the sun to take the dragons to burn the cities.', ''),
    new DocumentListElement(5, 'Cities Burning Dragon', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg'),
    new DocumentListElement(6, 'Burning Dragon Cities', 'Here comes the sun to take the dragons to burn the cities.', 'images/empty-schoolyard-30653-1920x1200.jpg')
];

var documentListElementsPromise = Promise.resolve(documentListElements);
