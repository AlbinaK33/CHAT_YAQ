CREATE TABLE support_requests (
                                  id SERIAL PRIMARY KEY,
                                  user_id BIGINT NOT NULL,
                                  message_support TEXT NOT NULL,
                                  created_message TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE NO ACTION
);
