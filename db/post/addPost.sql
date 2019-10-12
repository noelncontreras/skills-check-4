INSERT INTO heloposts
(title, img, content, user_id)
VALUES ($1, $2, $3, $4)
RETURNING *;