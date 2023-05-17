const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const auth = require("./router/auth");

app.use(auth);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`listening... `);
});
