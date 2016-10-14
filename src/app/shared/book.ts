export class Book {

    constructor(
        public isbn: string,
        public title: string,
        public description: string,
        public rating = 0
    ) { }

    rateUp() {
        if (this.rating === 10) { return false; }
        this.rating++;
        return true;
    }

    rateDown() {
        if (this.rating === 0) { return false; }
        this.rating--;

        return true;
    }
}
