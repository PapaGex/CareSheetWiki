const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username: { type: 'string', unique: true },
    password: { type: 'string', unique: false },
//    createdArticles: [ObjectId]
});

const User = mongoose.model('User', userSchema);
module.exports = User;