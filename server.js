const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/pessoaApicasa", { useUnifiedTopology: true }
);

requireDir('./server/models');

app.use("/api", require("./server/route/routes"));
app.listen(3000);



