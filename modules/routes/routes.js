const express = require("express");
const router = express.Router();

const {
  getAllTickets,
  allUserSpending,
} = require("../controllers/ticket.controller");

router.get("/allTickets", getAllTickets);
router.get("/allUserSpending", allUserSpending);

module.exports = router;