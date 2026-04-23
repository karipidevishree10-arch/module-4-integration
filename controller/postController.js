exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (post.user.toString() !== req.user.id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  await post.deleteOne();

  res.json({ message: "Post deleted successfully" });
};
