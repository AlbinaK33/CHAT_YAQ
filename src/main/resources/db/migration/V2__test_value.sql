INSERT INTO users (username, password, first_name, last_name, email, phone, city, country, avatar, blocked, about_me, social_networks, language)
VALUES
    ('user1', 'Password123', 'John', 'Doe', 'john.doe@example.com', '1234567890', 'New York', 'USA', NULL, FALSE, 'About John', 'facebook', 'ENG'),
    ('user2', 'Password123', 'Jane', 'Smith', 'jane.smith@example.com', '0987654321', 'Los Angeles', 'USA', NULL, FALSE, 'About Jane', 'twitter', 'ENG'),
    ('user3', 'Password123', 'Alex', 'Johnson', 'alex.johnson@example.com', '1122334455', 'Chicago', 'USA', NULL, TRUE, 'About Alex', 'instagram', 'ENG');

INSERT INTO role_permissions (role_name, can_create_chat, can_delete_chat, can_edit_message, can_delete_user, can_use_chat)
VALUES
    ('USER', FALSE, FALSE, TRUE, FALSE, TRUE),
    ('ADMIN', TRUE, TRUE, TRUE, TRUE, TRUE);

INSERT INTO user_contacts (user_id, contact_id)
VALUES
    (1, 2),
    (1, 3),
    (2, 3);
