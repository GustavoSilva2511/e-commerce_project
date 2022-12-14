import shortid from "shortid";

class product {
    constructor (tittle, description, price) {
        this.id = shortid();
        this.tittle = tittle;
        this.description = description;
        this.price = price;
    }
}

export default product;