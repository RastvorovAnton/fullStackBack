const express = require("express");
const router = express.Router();

const {
  addNewTicket,
  getAllTickets,
  allUserSpending,
} = require("../controllers/ticket.controller");

router.get("/allTickets", getAllTickets);
router.get("/allUserSpending", allUserSpending);
router.post("/newTicket", addNewTicket);

module.exports = router;