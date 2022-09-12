import { Product } from "./types";

export default class Invoice {
  totalPrice: number | undefined;

  id: number;

  date: string;

  forWhom: string;

  constructor(
    public name: string,
    public surename: string,
    public products: Array<Product>,
  ) {
    this.forWhom = "";

    this.date = new Date().toLocaleDateString();

    this.id = Math.floor(Math.random() * 1000);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.totalPrice;

    this.countTotalrice();
  }

  get getTotalPrice() {
    return this.totalPrice;
  }

  countTotalrice() {
    this.totalPrice = this.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0,
    );
  }

  get getAllProducts() {
    return this.products.forEach((product) =>
      console.log(
        `Product: ${product.name};\nQuantity: ${product.quantity};\nPrice: ${product.price}`,
      ),
    );
  }

  show() {
    console.log(`
            <div>
                Invoice for ${this.forWhom}
                Name: ${this.name} ${this.surename}
                Invoice no./ ${this.id}
                Total price: ${this.totalPrice}
                Date: ${this.date}
            </div>
        `);
  }
}
