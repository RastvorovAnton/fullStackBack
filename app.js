const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = 8000;
const apiRoutes = require("./src/modules/routes/routes");

const uri = "mongodb+srv://magnifico99:28121999A@cluster0.iscaj.mongodb.net/magnifico99?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json());
app.use(cors());

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});