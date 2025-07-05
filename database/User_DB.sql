USE user_db;

CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert a sample user. Password is 'password' (we will handle encoding later)
INSERT INTO user (username, password) VALUES ('testuser', 'password');
