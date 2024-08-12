const Banner = require('../models/db');

exports.getBanner = (req, res) => {
  Banner.getBanner((err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
};

exports.updateBanner = (req, res) => {
  const { isVisible, description, link, timer } = req.body;
  const bannerData = { isVisible, description, link, timer };

  Banner.updateBanner(bannerData, (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ success: true });
  });
};
