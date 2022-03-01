const express = require("express");
const router = express.Router();

const {
  
  addNewTicket,
  getAllTickets,
  deleteTicket,
  updateTicket,
  allUserSpending,
} = require("../controllers/ticket.controller");

router.get("/allTickets", getAllTickets);
router.get("/allUserSpending", allUserSpending);
router.post("/newTicket", addNewTicket);
router.delete("/deleteTicket", deleteTicket);
router.patch("/updateTicket", updateTicket);

module.exports = router;