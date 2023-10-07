import { Router } from "express";
import { sessionsService } from "../services/sessions.services.js";
const sessionRouter = Router();
sessionRouter.get("/", (req, res) => {
  sessionsService.home(req, res);
});
sessionRouter.post("/", (req, res) => {
  sessionsService.login(req, res);
});
sessionRouter.get("/logout", (req, res) => {
  sessionsService.logout(req, res);
});
export default sessionRouter;
