CREATE TABLE mailing_list (
  id SERIAL PRIMARY KEY,
    email VARCHAR(120) NOT NULL
);

INSERT INTO mailing_list (email) VALUES ('new@email.co.uk');