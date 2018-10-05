const db = require("../models");

module.exports = {

    create: function (req, res) {
        db.provider
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    isProvider: function (req, res) {
        db.provider.findAll({ where: { firebase_id: req.params.id } })
            .then(dbModel => {
                if (dbModel.length > 0)
                    res.json(true);
                else
                    res.json(false)
            })
            .catch(err => res.status(422).json(err));
    },

    providerInfo: function (req, res) {
        db.provider.findAll({ where: { firebase_id: req.params.id } })
            .then(dbModel => {
                if (dbModel.length > 0)
                    res.json(dbModel);
                else
                    res.json(false)
            })
            .catch(err => res.status(422).json(err));
    }

}