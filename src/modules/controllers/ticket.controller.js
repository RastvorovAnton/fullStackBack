const Ticket = require("../../db/models/ticket/index");

module.exports.getAllTickets = (req, res, next) => {
	Ticket.find().then((result) => {
		return res.send({ data: result });
	})
		.catch((err) => {
			return res.status(422).send(err);
		});
};

module.exports.allUserSpending = (req, res, next) => {
	Ticket.aggregate([{ $group: { _id: null, total: { $sum: "$cost" } } }])
		.then((result) => {
			return res.send(result.length ? result[0] : { total: 0 });
		})
		.catch((err) => {
			return res.status(422).send(err);
		});
};