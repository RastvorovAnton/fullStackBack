const Ticket = require("../../db/models/ticket/index");

module.exports.getAllTickets = (req, res, next) => {
	Ticket.find().then((result) => {
		res.send({ data: result });
	})
		.catch((err) => { res.status(422).send("Error! Cannot find tasks") });
};

module.exports.allUserSpending = (req, res, next) => {
	Ticket.aggregate([{ $group: { _id: null, total: { $sum: "$cost" } } }])
		.then((result) => { res.send(result.length ? result[0] : { total: 0 }) })
		.catch((err) => { res.status(422).send("Error! Cannot find all spending") });
};