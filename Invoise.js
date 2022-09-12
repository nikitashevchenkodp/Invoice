//Create constructor invoice
function Invoice(name, surename, products) {
  this.forWhom = '';
  this.name = name;
  this.surename = surename;
  this._date = new Date().toLocaleDateString();
  this._id = Math.floor(Math.random() * 1000);
  this.products = products;
  this._totalPrice;
}

Invoice.prototype = {
  countTotalrice: function () {
    this._totalPrice = this.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  },
  getAllProducts: function () {
    return this.products.forEach((product) =>
      console.log(`Product: ${product.name};\nQuantity: ${product.quantity};\nPrice: ${product.price}`)
    );
  },
  show: function () {
    console.log(`
            <div>
                Invoice for ${this.forWhom}
                Name: ${this.name} ${this.surename}
                Invoice no./ ${this._id}
                Total price: ${this._totalPrice}
                Date: ${this._date}
            </div>
        `);
  },
};
Invoice.prototype.constructor = Invoice;

const invoice = new Invoice('Nikita', 'Shevchenko', [
  { price: 10, quantity: 4 },
  { price: 100, quantity: 2 },
  { price: 1, quantity: 7 },
]);

//Create subcunstructor;
function CustomerInvoice(name, surename, products) {
  Invoice.call(this, name, surename, products);
  this.forWhom = 'Customer';
}
CustomerInvoice.prototype = Object.create(Invoice.prototype);
CustomerInvoice.prototype.constructor = CustomerInvoice;

//Create subconstructor////////////////////////////////////////////////////////////////////////
function AccountantInvoice(name, surename, products, taxes) {
  Invoice.call(this, name, surename, products);
  this.taxes = taxes;
  this.forWhom = 'Accountant';
  this.totalTaxes = 0;
}
AccountantInvoice.prototype = Object.create(Invoice.prototype);
AccountantInvoice.prototype.constructor = AccountantInvoice;

AccountantInvoice.prototype.countTaxes = function () {
  this.countTotalrice();
  this.totalTaxes = this._totalPrice * (this.taxes / 100);
};
AccountantInvoice.prototype.setTaxes = function (newTaxes) {
  this.taxes = newTaxes;
};
AccountantInvoice.prototype.getTaxes = function () {
  return this.taxes;
};
AccountantInvoice.prototype.setDate = function (newDate) {
  this._date = new Date(newDate);
};
AccountantInvoice.prototype.getDate = function () {
  return this._date;
};

AccountantInvoice.prototype.show = function () {
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
};

const accInvoice = new AccountantInvoice(
  'Nikita',
  'Shevchenko',
  [
    { price: 10, quantity: 4 },
    { price: 100, quantity: 2 },
    { price: 1, quantity: 7 },
  ],
  20
);

console.log(accInvoice instanceof Invoice);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create subconstructor
function CEOInvoice(name, surename, products, taxes) {
  AccountantInvoice.call(this, name, surename, products, taxes);
  this.forWhom = 'CEO';
}

CEOInvoice.prototype = Object.create(AccountantInvoice.prototype);
CEOInvoice.prototype.constructor = CEOInvoice;

CEOInvoice.prototype.setName = function (newName) {
  this.name = newName;
};

CEOInvoice.prototype.getName = function () {
  return this.name;
};

CEOInvoice.prototype.addProduct = function (product) {
  this.products = [...this.products, product];
};

CEOInvoice.prototype.show = function () {
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
};

const ceoInvoice = new CEOInvoice(
  'Nikita',
  'Shevchenko',
  [
    { price: 10, quantity: 4 },
    { price: 100, quantity: 2 },
    { price: 1, quantity: 7 },
  ],
  20
);
