
const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AppSec CI/CD Lab is running!");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy" });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
