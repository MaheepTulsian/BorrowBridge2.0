import express from "express";
import Requestor from "../database/requestor_schema.js";
import connectingDatabase from "../database/connect.js";
import bodyParser from "body-parser";
import multer from "multer";

const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const upload = multer(); // For handling form-data

router.use(jsonParser);
router.use(urlencodedParser);

router.get("/test", (req, res) => {
  res.send("routes running");
});

router.post("/add/formdata", upload.none(), async (req, res) => {
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
//get api for requestor page

router.get("/requestor_details", async (req, res) => {
  try {
    const requestor_details = await Requestor.find();
    if (requestor_details.length === 0) {
      return res
        .status(400)
        .json({ message: "Cannot find the requestor detail" });
    }
    res.status(200).json(requestor_details);
  } catch (error) {
    console.log("Error in fetching the data ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
