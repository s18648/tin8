const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
    const {anime, genre, release} = req.body;

    if(!anime || !genre || !release){
        res.status(400).send('Wrong input');
    }else{
        res.render("jsonresp", {anime, genre, release});
    }
});
module.exports = router;