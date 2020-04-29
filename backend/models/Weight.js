const mongoose = require('mongoose');

const weightSchema = mongoose.Schema({
    value: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Weight', weightSchema);