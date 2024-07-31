const Todo = require("../models/index");

// exports.postTodo = async (req, res) => {
//   try {
//     if () {
//       res.json(Todo);
//     }else if (Todo.title){

//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

exports.getTodos = async (req, res) => {
  try {
    res.json(Todo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
