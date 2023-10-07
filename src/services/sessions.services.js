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

  async logout(req, res) {
    req.session.destroy((err) => {
      if (err)
        res.status(500).render("errors/errorLogout", {
          error: err,
        });
      else res.redirect("/sessions/login");
    });
  }
}
export const sessionsService = new SessionsServices();
