let express = require("express");
let router = express.Router();
let path = require("path");
let methodOverride = require("method-override");
let todos = require("./data/data");
let todosRouter = require("./routes/todos");


let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  methodOverride(function(req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
app.use("/todos", todosRouter);

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


// app.get("/todos", todosController.getTodos);

// app.post("/todos", todosController.postTodos);

// app.put("/todos/:id", todosController.putTodos);

// app.delete("/todos/:id", todosController.deleteTodos);

app.listen(3000);


