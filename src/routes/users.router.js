import { Router } from "express";
import { userServices } from "../services/users.services.js";
const userRouter = Router();
userRouter.get("/signIn", (req, res) => {
  userServices.createUser(req, res);
});
export default userRouter;
