CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       username VARCHAR(15) UNIQUE NOT NULL,
                       password VARCHAR(100) CHECK (password ~ '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$') NOT NULL,
                       first_name VARCHAR(20) NOT NULL,
                       last_name VARCHAR(20) NOT NULL,
                       email VARCHAR(50) UNIQUE NOT NULL CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
                       phone VARCHAR(15) UNIQUE,
                       city VARCHAR(30) NOT NULL,
                       state VARCHAR(50) NOT NULL,
                       country VARCHAR(30) NOT NULL,
                       registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       last_login_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       avatar BYTEA,
                       blocked BOOLEAN NOT NULL,
                       about_me VARCHAR(100) NOT NULL,
                       social_networks VARCHAR(15),
                       language VARCHAR(3) NOT NULL
);

CREATE TABLE role_permissions (
                                  id SERIAL PRIMARY KEY,
                                  role_name VARCHAR(10) NOT NULL,
                                  can_create_chat BOOLEAN NOT NULL,
                                  can_delete_chat BOOLEAN NOT NULL,
                                  can_edit_message BOOLEAN NOT NULL,
                                  can_delete_user BOOLEAN NOT NULL,
                                  can_use_chat BOOLEAN NOT NULL
);

CREATE TABLE user_contacts (
                               id SERIAL PRIMARY KEY,
                               user_id BIGINT NOT NULL,
                               contact_id BIGINT NOT NULL,
                               FOREIGN KEY (user_id) REFERENCES users(id),
                               FOREIGN KEY (contact_id) REFERENCES users(id)
);

CREATE TABLE user_role_permissions (
                                       user_id BIGINT NOT NULL,
                                       permission_id BIGINT NOT NULL,
                                       PRIMARY KEY (user_id, permission_id),
                                       FOREIGN KEY (user_id) REFERENCES users(id),
                                       FOREIGN KEY (permission_id) REFERENCES role_permissions(id)
);

