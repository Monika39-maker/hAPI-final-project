drop table if exists contact_messages;

CREATE TABLE contact_messages (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(30) NOT NULL,
  email    VARCHAR(120) NOT NULL,
  message  VARCHAR(400),
);

INSERT INTO contact_messages (name, email, message) VALUES ('John Smith','j.smith@johnsmith.org','Lets store this message in the database');
