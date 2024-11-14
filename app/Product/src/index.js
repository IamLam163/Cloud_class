import express from "express";

const app = express();

const PORT = 3100;

const Product = [
  {
    name: "Product 1",
    price: 100
  },
  {
    name: "Product 2",
    price: 200
  },
  {
    name: "Product 3",
    price: 300
  }
];

app.get("/products", (req, res) => {
  res.json(Product);
});

app.listen(PORT, () => {
  console.log(`Product service is running on port ${PORT}`);
});
