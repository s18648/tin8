const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
    const {name, nickname, country} = req.body;
    res.render("formresp", {name, nickname, country});
});
module.exports = router;