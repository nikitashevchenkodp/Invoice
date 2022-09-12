import { Product } from "./types";
import AccountantInvoice from "./AccountantInvoiceClass";

export default class CEOInvoice extends AccountantInvoice {
  constructor(
    public name: string,
    public surename: string,
    public products: Array<Product>,
    taxes: number,
  ) {
    super(name, surename, products, taxes);
    this.forWhom = "CEO";
  }

  set setName(newName: string) {
    this.name = newName;
  }

  get getName() {
    return this.name;
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  show() {
    console.log(`
            <div>
                I am a ${this.forWhom}, I am the BOSS!!
                Name: ${this.name} ${this.surename}
                Invoice no./ ${this.id}
                Total price: ${this.totalPrice}
                Total taxes: ${this.totalTaxes}
                Date: ${this.date}
            </div>
        `);
  }
}
