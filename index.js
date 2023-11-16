const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const expressHbs = require("express-handlebars")

app.use(express.static(__dirname + "/html"));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/html/index.htm");
// })

// Cau hinh su dung View Template
app.engine(
    "hbs",
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout",
    })
);
app.set("view engine", "hbs");


app.get("/", (req, res) => {
    res.render("index");
});

app.use('/task1.htm', require('./routes/task1Route'));
app.use('/task2.htm', require('./routes/task2Route'))
app.use('/task3.htm', require('./routes/task3Route'))
app.use('/task4.htm', require('./routes/task4Route'))

app.get('/admin', (req, res) => {
    res.render('index', {layout: 'admin'})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))