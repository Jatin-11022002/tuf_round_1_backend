const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bannerRoutes = require("./routes/bannerRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use banner routes
app.use("/api", bannerRoutes);

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
