INSERT INTO helousers (username, password)
VALUES ($1, $2)
RETURNING *;