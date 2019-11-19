const express = require("express");
const routes = express.Router();

const PessoaController = require("../controller/pessoaController");

routes.get("/pessoas", PessoaController.getindex);
routes.get("/pessoas/:id", PessoaController.getmostrar);
routes.post("/pessoas", PessoaController.postgravar);
routes.put("/pessoas/:id", PessoaController.putupdate);
routes.delete("/pessoas/:id", PessoaController.delete);

module.exports = routes;