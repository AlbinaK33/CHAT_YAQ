SELECT * FROM users;

SELECT * FROM role_permissions;

SELECT u.username, c.contact_id
FROM user_contacts c
         JOIN users u ON c.contact_id = u.id
WHERE c.user_id = 1;

SELECT p.*
FROM role_permissions p
         JOIN user_role_permissions urp ON p.id = urp.permission_id
WHERE urp.user_id = 3;

SELECT u.*
FROM users u
         JOIN user_role_permissions urp ON u.id = urp.user_id
         JOIN role_permissions rp ON urp.permission_id = rp.id
WHERE rp.role_name = 'ADMIN';
