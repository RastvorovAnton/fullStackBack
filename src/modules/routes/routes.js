const express = require("express");
const router = express.Router();

const {
  addNewTicket,
  getAllTickets,
  deleteTicket,
  allUserSpending,
} = require("../controllers/ticket.controller");

router.get("/allTickets", getAllTickets);
router.get("/allUserSpending", allUserSpending);
router.post("/newTicket", addNewTicket);
router.delete("/deleteTicket", deleteTicket);

module.exports = router;