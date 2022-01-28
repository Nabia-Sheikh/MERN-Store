require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/booksRoute.js");
const app = express();

app.use(express.json());

const PORT = 8080;
app.use(cors());

app.get("/", (req, res) => {
  res.send(`server is running at ${PORT}`);
});
app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
