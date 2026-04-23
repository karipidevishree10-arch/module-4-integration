const { protect } = require('../middleware/authMiddleware');

router.delete('/:id', protect, deletePost);