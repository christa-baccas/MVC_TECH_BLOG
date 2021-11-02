const { Post } = require('../models');

const postData = [
    {
        title: "title 1",
        comment_text: "Post test 1",
        user_id: 1,
    },
    {
        title: "title 4",
        comment_text: "Post test 2",
        user_id: 4,
    },
    {
        title: "title 3",
        comment_text: "Post test 3",
        user_id: 2,
    },
    {
        title: "title 2",
        comment_text: "Post test 4",
        user_id: 3,
    },
]

const seedComments = () => Post.bulkCreate(postData);

module.exports = seedComments;