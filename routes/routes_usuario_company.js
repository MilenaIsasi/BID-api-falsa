const express = require("express");
const { newUserCompany } = require("../controllers/usuarios_company");
const app = express();


app.get("/api/user/company", newUserCompany)

module.exports = app;