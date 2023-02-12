const express = require("express");
const { newCompanies } = require("../controllers/companies");
const app = express();

//devuelve nueva compañia
app.get("/api/companies/new", newCompanies)

module.exports = app;


