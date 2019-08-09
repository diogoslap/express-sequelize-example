const express = require("express");
const UserController = require("./controllers/UserController");

const routes = new express.Router();

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.getUser);
routes.post("/users", UserController.save);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


module.exports = routes;
