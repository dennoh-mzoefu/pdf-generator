const express = require("express");
const easyInvoice = require("easyinvoice");
const fs = require("fs");
const path = require("path");

const app = express();

const data = {
  customize: {
    template: fs.readFileSync("./template/template.html", "base64"), // Must be base64 encoded html
  },
  information: {
    number: "2022.0001",
  },
};

const invoicePdf = async () => {
  let result = await easyInvoice.createInvoice(data);
  fs.writeFileSync(`./invoice/invoice${Date.now()}.pdf`, result.pdf, "base64");
};
invoicePdf();
const PORT = 3005 || 8000;
app.listen(PORT, () => {
  console.log("server running");
});
