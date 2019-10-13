
module.exports = {
    getByPostId: async (req, res) => {
        const { post_id } = req.params;
        const db = req.app.get("db");

        const getPost = await db.post.getByPostId(post_id);

        res.status(200).json(getPost);
    },
    getAllPosts: async (req, res) => {
        const db = req.app.get("db");

        const getAllPosts = await db.post.getAllPosts();

        res.status(200).json(getAllPosts);
    },
    getPostByUsername: async (req, res) => {
        const { username } = req.query;
        const db = req.app.get("db");

        const getSearched = await db.post.getPostByUsername(username);

        res.status(200).json(getSearched);
    },
    addPost: async (req, res) => {
        const { user_id } = req.session.user;
        const { title, img, content } = req.body;
        const db = req.app.get("db");

        const newPost = await db.post.addPost(title, img, content, user_id);

        res.status(200).json(newPost);
    }
};