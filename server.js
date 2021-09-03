const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
}).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log('FAILED TO CONNECT TO DB', e);
});

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});


