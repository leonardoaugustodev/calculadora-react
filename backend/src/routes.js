const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: true });
});

routes.get("/soma", (req, res) => {
  const { valor1, valor2 } = req.query;
  return res.json({ resultado: parseFloat(valor1) + parseFloat(valor2) });
  // return res.json({ soma: +valor1 + +valor2 });
});

routes.get("/subtrai", (req, res) => {
  const { valor1, valor2 } = req.query;
  return res.json({ resultado: parseFloat(valor1) - parseFloat(valor2) });
  // return res.json({ soma: +valor1 - +valor2 });
});

routes.get("/multiplica", (req, res) => {
  const { valor1, valor2 } = req.query;
  return res.json({ resultado: parseFloat(valor1) * parseFloat(valor2) });
  // return res.json({ soma: +valor1 - +valor2 });
});

routes.get("/divide", (req, res) => {
  const { valor1, valor2 } = req.query;
  return res.json({ resultado: parseFloat(valor1) / parseFloat(valor2) });
  // return res.json({ soma: +valor1 - +valor2 });
});

module.exports = routes;
