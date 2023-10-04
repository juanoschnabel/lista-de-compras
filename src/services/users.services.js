import { userModel } from "../models/Users.js";
class UsersServices {
  async createUser(req, res) {
    try {
      res.render("users/signIn");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
  async deleteUser(req, res) {}
  async updateUser(req, res) {}
}
export const userServices = new UsersServices();
