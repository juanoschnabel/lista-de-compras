import { userModel } from "../models/Users.js";
class SessionsServices {
  async home(req, res) {
    res.render("home");
  }
  async login(req, res) {
    const { user, password } = req.body;
  }
  async logout(req, res) {}
}
export const sessionsService = new SessionsServices();
