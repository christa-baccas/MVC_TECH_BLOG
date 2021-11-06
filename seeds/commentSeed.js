const { Comment } = require('../models');

const commentData = [
    {
        content: "Comment test 1",
        user_id: 1,
        post_id: 4,
    },
    {
        content: "Comment test 2",
        user_id: 4,
        post_id: 1,
    },
    {
        content: "Comment test 3",
        user_id: 2,
        post_id: 3,
    },
    {
        content: "Comment test 4",
        user_id: 3,
        post_id: 2,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;