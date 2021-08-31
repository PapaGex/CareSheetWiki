import mongoose from 'mongoose';
const { Schema } = mongoose;
const User = mongoose.model('User', userSchema);
const Article = mongoose.model('Article', articleSchema);

const articleSchema = new mongoose.Schema({
    title: { type: 'string', required: true, min: 5 },
    description: { type: 'string', required: true, min: 20 },
    articleAuthor: ObjectId,
    creationDate: { type: Date, default: Date.now }
})