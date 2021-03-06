const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect
    (process.env.MONGODB_URI || "mongodb://localhost/secure-hamlet", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
);

// routes
app.use(require("./routes/api"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`);
});
