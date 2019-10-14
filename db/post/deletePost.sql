DELETE from heloposts
WHERE post_id = $1;

SELECT * FROM heloposts p
INNER JOIN helousers u
ON p.user_id = u.user_id;