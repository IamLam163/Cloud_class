import express from "express";

const app = express();

const PORT = 3000;

const User = [
  {
    name: "User 1",
    age: 20
  },
  {
    name: "User 2",
    age: 30
  },
  {
    name: "User 3",
    age: 40
  }
];

app.get("/users", (req, res) => {
  res.json(User);
});

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
