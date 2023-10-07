import { userModel } from "../models/Users.js";
import { compareData, hashData } from "../utils/bcrypt.js";
class UsersServices {
  async getForm(req, res) {
    try {
      res.render("users/signIn");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
  async createUser(req, res) {
    try {
      const user = req.body;
      const findUser = await userModel.findOne({ email: user.email });
      if (findUser) {
        res.render("errors/errorRegister", { title: "ERROR" });
      } else {
        const hashPassword = await hashData(user.password);
        const userNew = { ...user, password: hashPassword };
        await userModel.create(userNew);
        res.render("home");
      }
    } catch (error) {
      console.error(error);
      res.render("errors/errorLogin", { title: "ERROR" });
    }
  }
  async deleteUser(req, res) {}
  async updateUser(req, res) {}
}
export const userServices = new UsersServices();
