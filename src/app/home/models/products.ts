
export class Product {
    public id: number;
    public name: string;
    public price: number;
    public imageUrl: string;
    public quantity: number;
    public category: Array<string>;

    constructor(
        id: number,
        name: string,
        price: number,
        imageUrl: string,
        quantity: number,
        category: Array<string>) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
        this.category = category;
    }
}
