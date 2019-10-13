SELECT * FROM heloposts p
INNER JOIN helousers u
ON p.user_id = u.user_id
WHERE u.username ILIKE $1;