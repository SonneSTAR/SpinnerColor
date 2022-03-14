// Paso 1
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes/",
    })
);
app.set("view engine", "handlebars");
// Paso 2
app.use("/css", express.static(__dirname +
    "/node_modules/bootstrap/dist/css"));
// Paso 3
app.get("/:color", function (req, res) {
    // Paso 4
    const { color } = req.params;
    // Paso 5
    res.render("Inicio", {
        layout: "Inicio",
        colores: [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
        ],
        color: color,
    });
});
