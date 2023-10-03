import express from "express";
import sessionRouter from "./routes/session.router.js";
import { __dirname } from "./utils/path.js";
import { engine } from "express-handlebars";
import * as path from "path";
import config from "./utils/config.js";
import "./utils/configDB.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect("/sessions");
});
app.engine("handlebars", engine());
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "handlebars");
app.listen(config.PORT, () => console.log(`servidor arriba ${config.PORT}`));
//CONEXION MONGO
// app.use(
//     session({
//       store: MongoStore.create({
//         mongoUrl: config.URL_MONGODB_ATLAS,
//         dbName: "ecommerce",
//         collectionName: "cookies",
//       }),
//       secret: "mysecret",
//       resave: false,
//       saveUninitialized: false,
//     })
//   );
//RUTAS
app.use("/sessions", sessionRouter);
