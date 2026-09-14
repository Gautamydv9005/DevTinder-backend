const express = require("express");
const app = express();
const port = 7777;

const { adminauth, userauth } = require("./middleware/auth");

// Admin authentication
app.use("/admin", adminauth);

app.get("/admin", (req, res) => {
    res.send("Data access granted");
});

// Public login
app.get("/user/login", (req, res) => {
    res.send("Login successfully");
});

// User authentication
app.use("/user", userauth, (req, res) => {
    res.send("User access granted");
});

// Error-handling middleware
app.use("/",(err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something went wrong");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});