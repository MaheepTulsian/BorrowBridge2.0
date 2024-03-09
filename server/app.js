import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
import investor from "./routes/investor.js";
import requestor from "./routes/requestor.js";

//routes from investor and requestor
app.use("/requestor", requestor);
app.use("/investor", investor);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
