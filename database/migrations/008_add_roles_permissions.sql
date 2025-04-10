CREATE TABLE roles_permissions (
    id SERIAL PRIMARY KEY,
    role VARCHAR(20),
    permission VARCHAR(100)
);