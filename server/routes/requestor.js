import express from "express";
import Requestor from "../database/requestor_schema.js";
import connectingDatabase from "../database/connect.js";
const router = express.Router();
import bodyParser from "body-parser";

router.use(bodyParser.urlencoded({ extended: true }));
router.get("/test", (req, res) => {
  res.send("routes running");
});
router.post("/add/formdata", async (req, res) => {
  try {
    const user = new Requestor(req.body);
    await user
      .save()
      .then((saveduser) => {
        console.log("User saved:", saveduser);
      })
      .catch((error) => {
        console.error("Error saving user:", error.message);
      });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

await connectingDatabase();
export default router;
