export class Comment {

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public top: number
    ) { }

    getTag(): string {
        return 'comment-' + this.id;
    }
}