const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll()
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err);
    }
  });

// Post a new comment
router.post('/', withAuth, (req, res) => {

    if (req.session) {
    Comment.create({
      content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    })
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Delete a comment
router.delete('/:id', withAuth, (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
    res.json(commentData);

  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;