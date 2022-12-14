import shortid from "shortid";

class cart {
    constructor (user_id, product_id, stats) {
        this.id = shortid();
        this.user_id = user_id;
        this.product_id = product_id;
        this.stats = stats;
    }
}

export default cart;