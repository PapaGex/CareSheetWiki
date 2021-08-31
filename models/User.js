import mongoose from 'mongoose';
const { Schema } = mongoose;
const User = mongoose.model('User', userSchema);
const Article = mongoose.model('Article', articleSchema);

const userSchema = new mongoose.Schema({
    username: { type: 'string', unique: true },
    password: { type: 'string', unique: false },
    createdArticles: [ObjectId]
})