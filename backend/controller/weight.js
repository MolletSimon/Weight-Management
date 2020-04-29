const Weight = require('../models/Weight');

exports.addWeight = (req, res, next) => {
    const weightObject = JSON.parse(req.body.thing);
    const weight = new Weight({
        ...weightObject
    });
    weight.save()
        .then(() => res.status(201).json({ message: 'Saisie effectué' }))
        .catch(error => res.status(400).json(error));
}