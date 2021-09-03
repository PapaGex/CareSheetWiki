const mongoose = require('mongoose');
const { Schema } = mongoose;


const articleSchema = new mongoose.Schema({
    title: { type: String, required: true, min: 5 },
    description: { type: String, required: true, min: 20 },
//    articleAuthor: ObjectId,
    creationDate: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

