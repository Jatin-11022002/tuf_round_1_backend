const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/bannerController");

router.get("/banner", bannerController.getBanner);
router.post("/banner/:id", bannerController.updateBanner);

module.exports = router;
