class Invoice {
  constructor(name, surename, products) {
    this.forWhom = '';
    this.name = name;
    this.surename = surename;
    this._date = new Date().toLocaleDateString();
    this._id = Math.floor(Math.random() * 1000);
    this.products = products;
    this._totalPrice;
    this.countTotalrice();
  }

  get getTotalPrice() {
    return this._totalPrice;
  }

  countTotalrice() {
    this._totalPrice = this.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }
  get getAllProducts() {
    return this.products.forEach((product) =>
      console.log(`Product: ${product.name};\nQuantity: ${product.quantity};\nPrice: ${product.price}`)
    );
  }
  show() {
    console.log(`
            <div>
                Invoice for ${this.forWhom}
                Name: ${this.name} ${this.surename}
                Invoice no./ ${this._id}
                Total price: ${this._totalPrice}
                Date: ${this._date}
            </div>
        `);
  }
}

const invoice = new Invoice('Nikita', 'Shevchenko', [
  { price: 10, quantity: 4 },
  { price: 100, quantity: 2 },
  { price: 1, quantity: 7 },
]);

class CustomerInvoice extends Invoice {
  constructor(name, surename, products) {
    super(name, surename, products);
    this.forWhom = 'Customer';
  }
}

const customerInvoice = new CustomerInvoice('Nikita', 'Shevchenko', [
  { price: 10, quantity: 4 },
  { price: 100, quantity: 2 },
  { price: 1, quantity: 7 },
]);

class AccountantInvoice extends Invoice {
  constructor(name, surename, products, taxes) {
    super(name, surename, products);
    this.taxes = taxes;
    this.forWhom = 'Accountant';
    this.totalTaxes = 0;
  }

  countTaxes() {
    this.countTotalrice();
    this.totalTaxes = this._totalPrice * (this.taxes / 100);
  }
  set setTaxes(newTaxes) {
    this.taxes = newTaxes;
  }
  get getTaxes() {
    return this.taxes;
  }
  set setDate(newDate) {
    this._date = new Date(newDate);
  }
  get getDate() {
    return this._date;
  }

  show() {
    console.log(`
              <div>
                  Invoice for ${this.forWhom}
                  Name: ${this.name} ${this.surename}
                  Invoice no./ ${this._id}
                  Total price: ${this._totalPrice}
                  Total taxes: ${this.totalTaxes}
                  Date: ${this._date}
              </div>
          `);
  }
}

const accountantInvoice = new AccountantInvoice(
  'Nikita',
  'Shevchenko',
  [
    { price: 10, quantity: 4 },
    { price: 100, quantity: 2 },
    { price: 1, quantity: 7 },
  ],
  20
);

class CEOInvoice extends Invoice {
  constructor(name, surename, products, taxes) {
    super(name, surename, products, taxes);
    this.forWhom = 'CEO';
  }

  set setName(newName) {
    this.name = newName;
  }
  get getName() {
    return this.name;
  }
  addProduct(product) {
    this.products = [...this.products, product];
  }
  show() {
    console.log(`
            <div>
                I am a ${this.forWhom}, I am the BOSS!!
                Name: ${this.name} ${this.surename}
                Invoice no./ ${this._id}
                Total price: ${this._totalPrice}
                Total taxes: ${this.totalTaxes}
                Date: ${this._date}
            </div>
        `);
  }
}
