SELECT p.user_id, p.post_id, p.title, p.img, p.content, u.user_id, u.username, u.profile_pic FROM heloposts p
INNER JOIN helousers u
ON p.user_id = u.user_id
WHERE u.user_id = $1;