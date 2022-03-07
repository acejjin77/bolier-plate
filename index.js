const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://acejjin7:park1124@bolier-plate.asxoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Mongo DB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world21312321312"));

app.listen(port, () => console.log(`app port: ${port}`));
