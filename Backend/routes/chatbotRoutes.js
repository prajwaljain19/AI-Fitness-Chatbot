const express = require ("express");
const { getfitnessplan } = require("../controllers/chatbotController");

const router = express.Router();
router.post("/fitness_plan",getfitnessplan);

module.exports = router;
