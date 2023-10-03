import { Router } from "express";
const sessionRouter = Router();
sessionRouter.get("/", (req, res) => {
  //   res.send("prueba de la session router");
  res.render("home");
});
export default sessionRouter;
