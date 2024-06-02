SELECT *
FROM user_contacts uc
         LEFT JOIN users u ON uc.user_id = u.id
WHERE u.id IS NULL;

SELECT *
FROM user_role_permissions urp
         LEFT JOIN role_permissions rp ON urp.permission_id = rp.id
WHERE rp.id IS NULL;

SELECT *
FROM participants p
         LEFT JOIN list_chat lc ON p.room_id = lc.id
WHERE lc.id IS NULL;

SELECT *
FROM list_chat lc
         LEFT JOIN chat c ON lc.id = c.list_id
WHERE lc.id IS NULL;

SELECT *
FROM participants p
         LEFT JOIN users u ON p.user_id = u.id
WHERE u.id IS NULL;

SELECT u.username, rp.role_name
FROM users u
         JOIN user_role_permissions urp ON u.id = urp.user_id
         JOIN role_permissions rp ON urp.permission_id = rp.id
WHERE u.id = 1;

SELECT u.first_name, u.last_name
FROM participants p
         JOIN users u ON p.user_id = u.id
WHERE p.room_id = 1;

SELECT c.content, u.username
FROM chat c
         JOIN users u ON c.user_id = u.id
WHERE c.list_id = 1;

SELECT r.room_name, COUNT(lc.id) AS chat_count
FROM room r
         LEFT JOIN list_chat lc ON r.id = lc.user_id
GROUP BY r.room_name;

SELECT u.username AS "user", uc.contact_id AS contact_id
FROM users u
         JOIN user_contacts uc ON u.id = uc.user_id;