const express = require("express");
const router = express.Router();
const { getfitnessplan } = require("../controllers/chatbotController");

router.post("/fitness-plan", getfitnessplan);

module.exports = router;
