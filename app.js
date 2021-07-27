const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const dotenv = require("dotenv");
const { calculateBMI } = require("./bmi_service");
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/calculateBMI/:weight/:height", (req, res, next) => {
  const result = calculateBMI(req.params.weight, req.params.height);
  return res.status(200).json({ result: result });
});
app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "API is working" });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
