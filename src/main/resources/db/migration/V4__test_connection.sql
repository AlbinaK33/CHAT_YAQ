SELECT u.username AS user, c.username AS contact
FROM user_contacts uc
         JOIN users u ON uc.user_id = u.id
         JOIN users c ON uc.contact_id = c.id;

SELECT u.username, rp.role_name
FROM users u
         JOIN user_role_permissions urp ON u.id = urp.user_id
         JOIN role_permissions rp ON urp.permission_id = rp.id;
