INSERT INTO heloposts
(title, img, content, user_id)
VALUES ($1, $2, $3, $4);

SELECT * FROM heloposts p
INNER JOIN helousers u
ON p.user_id = u.user_id;