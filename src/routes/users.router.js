import { Router } from "express";
import { userServices } from "../services/users.services.js";
const userRouter = Router();
userRouter.get("/signIn", (req, res) => {
  userServices.getForm(req, res);
});
userRouter.post("/", (req, res) => {
  userServices.createUser(req, res);
});

export default userRouter;
