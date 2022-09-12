import { Product } from "./types";
import Invoice from "./InvoicecClass";

export default class AccountantInvoice extends Invoice {
  totalTaxes: number;

  constructor(
    public name: string,
    public surename: string,
    public products: Array<Product>,
    public taxes: number,
  ) {
    super(name, surename, products);
    this.forWhom = "Accountant";
    this.totalTaxes = 0;
  }

  countTaxes() {
    this.countTotalrice();
    if (this.totalPrice) this.totalTaxes = this.totalPrice * (this.taxes / 100);
  }

  set setTaxes(newTaxes: number) {
    this.taxes = newTaxes;
  }

  get getTaxes() {
    return this.taxes;
  }

  set setDate(newDate: string) {
    this.date = new Date(newDate).toLocaleDateString();
  }

  get getDate() {
    return this.date;
  }

  show() {
    console.log(`
              <div>
                  Invoice for ${this.forWhom}
                  Name: ${this.name} ${this.surename}
                  Invoice no./ ${this.id}
                  Total price: ${this.totalPrice}
                  Total taxes: ${this.totalTaxes}
                  Date: ${this.date}
              </div>
          `);
  }
}
