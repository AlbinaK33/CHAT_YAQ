INSERT INTO users (username, password, first_name, last_name, email, phone, city, country, blocked, language)
VALUES
    ('john_doe', 'Password123', 'John', 'Doe', 'john.doe@example.com', '+123456789', 'New York', 'USA', false, 'en'),
    ('alice_smith', 'SecurePwd456', 'Alice', 'Smith', 'alice.smith@example.com', '+987654321', 'London', 'UK', false, 'en'),
    ('mike_jones', 'StrongPass789', 'Mike', 'Jones', 'mike.jones@example.com', NULL, 'Los Angeles', 'USA', false, 'en'),
    ('sarah_adams', 'SafePassword1', 'Sarah', 'Adams', 'sarah.adams@example.com', '+1122334455', 'Toronto', 'Canada', false, 'en'),
    ('robert_brown', 'Password123ABC', 'Robert', 'Brown', 'robert.brown@example.com', '+9988776655', 'Berlin', 'Germany', false, 'en');

INSERT INTO role_permissions (role_name, can_create_chat, can_delete_chat, can_edit_message, can_delete_user, can_use_chat)
VALUES
    ('admin', true, true, true, true, true),
    ('admin', true, true, true, false, true),
    ('user', true, false, true, false, true),
    ('user', false, false, false, false, true),
    ('user', true, false, false, false, true);

INSERT INTO user_contacts (user_id, contact_id)
VALUES
    (1, 2),
    (2, 3),
    (3, 4),
    (4, 5),
    (5, 1);

INSERT INTO user_role_permissions (user_id, permission_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

INSERT INTO room (room_name, description)
VALUES
    ('Room 1', 'Description for Room 1'),
    ('Room 2', 'Description for Room 2'),
    ('Room 3', 'Description for Room 3'),
    ('Room 4', 'Description for Room 4'),
    ('Room 5', 'Description for Room 5');

INSERT INTO list_chat (created_user_id, delete_at, status, user_id)
VALUES
    (1, CURRENT_TIMESTAMP, true, 2),
    (2, CURRENT_TIMESTAMP, true, 3),
    (3, CURRENT_TIMESTAMP, true, 4),
    (4, CURRENT_TIMESTAMP, true, 5),
    (5, CURRENT_TIMESTAMP, true, 1);
