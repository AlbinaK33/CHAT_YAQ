INSERT INTO users (username, password, first_name, last_name, email, city, country, avatar, blocked, language, registration_date, last_login_date, timezone)
VALUES
    ('user', 'Password123@', 'First', 'Name', 'test@example.com', 'Kiev', 'UA', NULL, FALSE, 'UA', now(), now(), 'UTC'),
    ('user2', 'Password123@2', 'First', 'Name', 'test2@example.com', 'Kiev', 'UA', NULL, FALSE, 'UA', now(), now(), 'UTC'),
    ('user3', 'Password123@3', 'First', 'Name', 'test3@example.com', 'Kiev', 'UA', NULL, FALSE, 'UA', now(), now(), 'UTC');
