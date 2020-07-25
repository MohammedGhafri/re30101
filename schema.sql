DROP TABLE IF EXISTS bookone;
CREATE TABLE bookone (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    contact varchar(255),
    status VARCHAR(255),
    catagory VARCHAR(255)
);

INSERT into bookone (title,description,contact,status,catagory)
VALUES ('mybook','test book','05-666666','avaliable','testone');