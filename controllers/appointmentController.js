
const db = require("../models");


module.exports = {

    findById: function (req, res) {
        db.appointment
            .findAll({ where: { firebase_id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.appointment
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getApptsTable: function (req, res) {
        db.appointment
            .findAll({
                where: {
                    firebase_id: req.params.id,
                    start: { $gte: req.params.dte }
                },
                order: [
                    ["start", "ASC"],
                ],
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

}

//module.exports = {
    //     findAll: function(req, res) {
    //       db.Book
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     },
    //     findById: function(req, res) {
    //       db.Book
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     },
    //     create: function(req, res) {
    //       db.Book
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     },
    //     update: function(req, res) {
    //       db.Book
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     },
    //     remove: function(req, res) {
    //       db.Book
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     }
    //   };