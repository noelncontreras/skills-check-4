require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const AC = require("./controllers/authController");
const PC = require("./controllers/postController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;


app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//AUTH ENDPOINTS
//below will check who the user is on session
app.get("/auth/user", AC.getUser);
//below will register a new user
app.post("/auth/register", AC.register);
//below will login a user
app.post("/auth/login", AC.login);
//below will logout a user
app.post("/auth/logout", AC.logout);

//POST ENDPOINTS
//get post by query
app.get("/api/post/:post_id", PC.getByPostId);
//get all posts for user on session
app.get("/api/posts", PC.getAllPosts);
//get post by query
app.get("/api/posts/username", PC.getPostByUsername);
//add post by user on session
app.post("/api/post", PC.addPost);


app.listen(SERVER_PORT, () => console.log(`Server listening on Port ${SERVER_PORT}`));