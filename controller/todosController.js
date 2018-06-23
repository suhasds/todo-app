let todos = require("../data/data");

const handler = {
    
    index: function(req, res) {
        res.render("todos", {
          todos: todos,
        });
      },

    store: function(req, res) {
        let todo = {
          id: Math.floor(Math.random() * 100),
          title: req.body.title,
          completed: false,
        };
      
        todos.push(todo);
      
        res.redirect("/todos");
      },

    update: function(req, res) {
        let id = req.params.id;
      
        todos.forEach(function(todo) {
          if (todo.id == id) {
            todo.completed = req.body.hasOwnProperty("todo");
          }
        });
      
        return res.redirect("/todos");
      },

    destroy: function(req, res) {
        let id = req.params.id;
        todos = todos.filter(function (todo) {
          if (todo.id == req.params.id) {
            return false;
          } else {
            return true;
          }
        });
      
        res.redirect("/todos");
      }
}

module.exports = handler;