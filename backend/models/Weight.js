const mongoose = require('mongoose');

const weightSchema = mongoose.Schema({
    value: { type: Number },
    userId: { type: String },
    date: { type: Date }
});

module.exports = mongoose.model('Weight', weightSchema);