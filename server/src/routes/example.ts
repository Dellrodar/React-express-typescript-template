import { Router } from "express";
const router = Router();
router.get("/greet", (req, res) => {
  const name = String(req.query.name ?? "world");
  res.json({ message: `hello, ${name}` });
});
export default router;
