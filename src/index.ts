import Invoice from "./InvoicecClass";
import AccountantInvoice from "./AccountantInvoiceClass";
import CustomerInvoice from "./CustomerInvoiceClass";
import CEOInvoice from "./CEOInvoiceClass";

const invoice = new Invoice("Nikita", "Shevchenko", [
  { price: 10, quantity: 4, name: "Tomato" },
  { price: 100, quantity: 2, name: "Pineapple" },
  { price: 1, quantity: 7, name: "Chery" },
]);

invoice.show();

const accountantInvoice = new AccountantInvoice(
  "Nikita",
  "Shevchenko",
  [
    { price: 10, quantity: 4, name: "Tomato" },
    { price: 100, quantity: 2, name: "Pineapple" },
    { price: 1, quantity: 7, name: "Chery" },
  ],
  20,
);

accountantInvoice.show();

const customerInvoice = new CustomerInvoice("Nikita", "Shevchenko", [
  { price: 10, quantity: 4, name: "Tomato" },
  { price: 100, quantity: 2, name: "Pineapple" },
  { price: 1, quantity: 7, name: "Chery" },
]);

customerInvoice.show();

const seoInvoice = new CEOInvoice(
  "Nikita",
  "Shevchenko",
  [
    { price: 10, quantity: 4, name: "Tomato" },
    { price: 100, quantity: 2, name: "Pineapple" },
    { price: 1, quantity: 7, name: "Chery" },
  ],
  20,
);

seoInvoice.show();
