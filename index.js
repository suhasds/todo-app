var express = require("express");
var fs = require("fs");
let path = require("path");


var app = express();
app.set('view engine', 'pug')
app.use(express.json());
app.set("views", path.join(__dirname, "views"));

const users = [
    {name: "Suhas"},
    {name: "Vijay"},
    {name: "arun"},
    {name: "ankur"}
]


app.get("/", function(req, res){
    // let indexFile = fs.readFileSync("./index.html");
    // res.render(__dirname + '/index.pug');
    // let pathString = path.join(__dirname, "/views/index.pug");
    res.render("index", {
        message: req.query.message,
        foo: req.query.foo,
        bar: req.query.bar
    });
})


app.get("/users", function(req, res){
    res.json(users);
})

app.post("/users", function(req, res){
    // res.send(req.body);
    users.push({name: req.body.name});
    res.json(users);
})

app.listen(3000);

console.log("listening on port 3000");
