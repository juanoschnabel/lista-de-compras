import { userModel } from "../models/Users.js";
import { compareData } from "../utils/bcrypt.js";
class SessionsServices {
  async home(req, res) {
    res.render("home");
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const findUser = await userModel.findOne({ email });
      if (!findUser) {
        return res.render("errors/errorLogin", { title: "ERROR" });
      }
      const isPasswordValid = await compareData(password, findUser.password);
      if (isPasswordValid) {
        return res.render("welcome", { title: "Bienvenidos!" });
      }
      return res.render("errors/errorLogin", { title: "ERROR" });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async logout(req, res) {}
}
export const sessionsService = new SessionsServices();
// userModel.create({
//   first_name: "juan",
//   last_name: "perez",
//   email: "juan@juan.com",
//   age: 31,
//   password: "1234",
// });
