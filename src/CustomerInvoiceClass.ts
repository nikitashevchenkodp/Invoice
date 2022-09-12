import { Product } from "./types";
import Invoice from "./InvoicecClass";

export default class CustomerInvoice extends Invoice {
  constructor(
    public name: string,
    public surename: string,
    public products: Array<Product>,
  ) {
    super(name, surename, products);
    this.forWhom = "Customer";
  }
}
