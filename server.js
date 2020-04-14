const express = require("express");
const app = express();
const hbs = require("hbs");

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

// EXPRESS ENGINE
hbs.registerPartials(__dirname + "/views/partials/");
app.set("view engine", "hbs");

// HELPERS
hbs.registerHelper("getYear", () => {
  return new Date().getFullYear();
});

app.get("/", (req, res) => {
  res.render("home", {
    name: "Rafael",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    name: "Rafael",
  });
});

app.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`));
