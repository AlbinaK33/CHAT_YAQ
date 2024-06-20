CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       username VARCHAR(15) UNIQUE NOT NULL,
                       password VARCHAR(100) CHECK (password ~ '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$') NOT NULL,
                       first_name VARCHAR(20) NOT NULL,
                       last_name VARCHAR(20) NOT NULL,
                       email VARCHAR(50) UNIQUE NOT NULL CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
                       phone VARCHAR(15) UNIQUE,
                       city VARCHAR(30) NOT NULL,
                       country VARCHAR(30) NOT NULL,
                       registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       last_login_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       avatar BYTEA,
                       blocked BOOLEAN NOT NULL,
                       about_me VARCHAR(100),
                       instagram VARCHAR(100),
                       linkedin VARCHAR(100),
                       facebook VARCHAR(100),
                       timezone VARCHAR(30) NOT NULL,
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



CREATE TABLE room (
                      id SERIAL PRIMARY KEY,
                      room_name VARCHAR(100) NOT NULL,
                      description TEXT
);

CREATE TABLE list_chat (
                           id SERIAL PRIMARY KEY,
                           created_user_id BIGINT NOT NULL,
                           created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           delete_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           status BOOLEAN NOT NULL,
                           user_id BIGINT NOT NULL,
                           FOREIGN KEY (created_user_id) REFERENCES users(id),
                           FOREIGN KEY (user_id) REFERENCES users(id)

);

CREATE TABLE participants (
                              room_id BIGINT NOT NULL,
                              user_id BIGINT NOT NULL,
                              PRIMARY KEY (user_id, room_id),
                              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE NO ACTION,
                              FOREIGN KEY (room_id) REFERENCES room(id) ON DELETE CASCADE ON UPDATE NO ACTION
);

CREATE TABLE chat (
                      id SERIAL PRIMARY KEY,
                      chat_name VARCHAR(45) NOT NULL UNIQUE,
                      list_id BIGINT NOT NULL,
                      user_id BIGINT NOT NULL,
                      content TEXT NOT NULL,
                      timestamp TIMESTAMP WITH TIME ZONE,
                      is_edited BOOLEAN NOT NULL,
                      edited_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                      attachments TEXT,
                      pinned BOOLEAN NOT NULL,
                      is_read BOOLEAN NOT NULL,
                      read_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                      FOREIGN KEY (list_id) REFERENCES list_chat(id) ON DELETE CASCADE ON UPDATE NO ACTION,
                      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

