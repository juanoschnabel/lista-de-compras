import express from "express";
import sessionRouter from "./routes/session.router.js";
import userRouter from "./routes/users.router.js";
import { __dirname } from "./utils/path.js";
import { engine } from "express-handlebars";
import * as path from "path";
import config from "./utils/config.js";
import "./utils/configDB.js";
// import { userModel } from "./models/Users.js";
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
//RUTAS
app.use("/sessions", sessionRouter);
app.use("/users", userRouter);
// userModel.create({
//   first_name: "juan",
//   last_name: "perez",
//   email: "juan@juan.com",
//   age: 31,
//   password: "1234",
// });
