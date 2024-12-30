const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let Task = new Schema({
    title: { type: String },
    description: { type: String },
    status: { type: Boolean },
});

module.exports = mongoose.model('tasks', Task);
