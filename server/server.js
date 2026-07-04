const express = require("express");
const cors = require("cors");
require("dotenv").config();

const auditRoute = require("./routes/audit");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/audit", auditRoute);

app.get("/", (req, res) => {
  res.send("🚀 Shopify CRO Opportunity Engine Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});