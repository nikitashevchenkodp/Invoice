// interface Product {
//   name: string;
//   price: number;
//   quantity: number;
// }

// //Create constructor invoice
// function Invoice(name: string, surename: string, products: Array<Product>) {
//   this.forWhom = '';
//   this.name = name;
//   this.surename = surename;
//   this._date = new Date().toLocaleDateString();
//   this._id = Math.floor(Math.random() * 1000);
//   this.products = products;
//   this._totalPrice;
// }

// Invoice.prototype = {
//   countTotalrice: function () {
//     this._totalPrice = this.products.reduce(
//       (sum: number, product: Product) => sum + product.price * product.quantity,
//       0
//     );
//   },
//   getAllProducts: function () {
//     return this.products.forEach((product: Product) =>
//       console.log(`Product: ${product.name};\nQuantity: ${product.quantity};\nPrice: ${product.price}`)
//     );
//   },
//   show: function () {
//     console.log(`
//             <div>
//                 Invoice for ${this.forWhom}
//                 Name: ${this.name} ${this.surename}
//                 Invoice no./ ${this._id}
//                 Total price: ${this._totalPrice}
//                 Date: ${this._date}
//             </div>
//         `);
//   },
// };
// Invoice.prototype.constructor = Invoice;

// const invoice = new (Invoice as any)('Nikita', 'Shevchenko', [
//   { price: 10, quantity: 4, name: 'Tomato' },
//   { price: 100, quantity: 2, name: 'Pineapple' },
//   { price: 1, quantity: 7, name: 'Chery' },
// ]);

// //Create subcunstructor;
// function CustomerInvoice(name: string, surename: string, products: Array<Product>) {
//   Invoice.call(this, name, surename, products);
//   this.forWhom = 'Customer';
// }
// CustomerInvoice.prototype = Object.create(Invoice.prototype);
// CustomerInvoice.prototype.constructor = CustomerInvoice;

// //Create subconstructor////////////////////////////////////////////////////////////////////////
// function AccountantInvoice(name: string, surename: string, products: Array<Product>, taxes: number) {
//   Invoice.call(this, name, surename, products);
//   this.taxes = taxes;
//   this.forWhom = 'Accountant';
//   this.totalTaxes = 0;
// }
// AccountantInvoice.prototype = Object.create(Invoice.prototype);
// AccountantInvoice.prototype.constructor = AccountantInvoice;

// AccountantInvoice.prototype.countTaxes = function () {
//   this.countTotalrice();
//   this.totalTaxes = this._totalPrice * (this.taxes / 100);
// };
// AccountantInvoice.prototype.setTaxes = function (newTaxes: number) {
//   this.taxes = newTaxes;
// };
// AccountantInvoice.prototype.getTaxes = function () {
//   return this.taxes;
// };
// AccountantInvoice.prototype.setDate = function (newDate: string) {
//   this._date = new Date(newDate);
// };
// AccountantInvoice.prototype.getDate = function () {
//   return this._date;
// };

// AccountantInvoice.prototype.show = function () {
//   console.log(`
//               <div>
//                   Invoice for ${this.forWhom}
//                   Name: ${this.name} ${this.surename}
//                   Invoice no./ ${this._id}
//                   Total price: ${this._totalPrice}
//                   Total taxes: ${this.totalTaxes}
//                   Date: ${this._date}
//               </div>
//           `);
// };

// const accInvoice = new (AccountantInvoice as any)(
//   'Nikita',
//   'Shevchenko',
//   [
//     { price: 10, quantity: 4, name: 'Tomato' },
//     { price: 100, quantity: 2, name: 'Pineapple' },
//     { price: 1, quantity: 7, name: 'Chery' },
//   ],
//   20
// );

// console.log(accInvoice instanceof Invoice);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Create subconstructor
// function CEOInvoice(name: string, surename: string, products: Array<Product>, taxes: number) {
//   AccountantInvoice.call(this, name, surename, products, taxes);
//   this.forWhom = 'CEO';
// }

// CEOInvoice.prototype = Object.create(AccountantInvoice.prototype);
// CEOInvoice.prototype.constructor = CEOInvoice;

// CEOInvoice.prototype.setName = function (newName: string) {
//   this.name = newName;
// };

// CEOInvoice.prototype.getName = function () {
//   return this.name;
// };

// CEOInvoice.prototype.addProduct = function (product: Product) {
//   this.products = [...this.products, product];
// };

// CEOInvoice.prototype.show = function () {
//   console.log(`
//             <div>
//                 I am a ${this.forWhom}, I am the BOSS!!
//                 Name: ${this.name} ${this.surename}
//                 Invoice no./ ${this._id}
//                 Total price: ${this._totalPrice}
//                 Total taxes: ${this.totalTaxes}
//                 Date: ${this._date}
//             </div>
//         `);
// };

// const ceoInvoice = new (CEOInvoice as any)(
//   'Nikita',
//   'Shevchenko',
//   [
//     { price: 10, quantity: 4, name: 'Tomato' },
//     { price: 100, quantity: 2, name: 'Pineapple' },
//     { price: 1, quantity: 7, name: 'Chery' },
//   ],
//   20
// );
