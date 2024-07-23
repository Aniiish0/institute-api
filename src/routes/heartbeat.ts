import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const message = "App server is healthy.";
  res.json({ message });
});

export default router;
