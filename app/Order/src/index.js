import express from "express";

const app = express();

const PORT = 3200;

const Order = [
  {
    name: "Order 1",
    price: 100
  },
  {
    name: "Order 2",
    price: 200
  },
  {
    name: "Order 3",
    price: 300
  }
];

app.get("/orders", (req, res) => {
  res.json(Order);
});

app.listen(PORT, () => {
  console.log(`Order service is running on port ${PORT}`);
});
