const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = model('Post', postSchema);

module.exports = Post;