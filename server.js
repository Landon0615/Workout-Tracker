const express = require("express");
const mongoose = require("mongoose");
const path = require("path");



const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.set("debug", true);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
}).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log('FAILED TO CONNECT TO DB', e);
});

app.use(require("./routes"));
// app.use(require("./routes/htmlRoutes"));
// app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});


