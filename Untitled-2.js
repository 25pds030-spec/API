
const express = require("express");
const app = express();
app.use(express.json());
let users = [];
let id = 1;
app.post("/users", (req, res) => {
const { name, email, password } = req.body;
if (!name || !email || !password)
 return res.status(400).send("required");
users.push({ id, name, email, password });
res.send(" registered successfully");
});
app.get("/users", (req, res) => {
});
app.get("/users/search", (req, res) => {
use.name.includes(q) || use.email.includes(q)
));
app.delete("/users/:id", (req, res) => {
const old = users.length;
 res.send(users.length < "User not found");
});
app.listen(3000, () => console.log("Server running on port 3000"));
