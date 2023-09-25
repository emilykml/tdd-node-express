CREATE database books_app;
USE books_app;
CREATE TABLE books(
    id int AUTO_INCREMENT,PRIMARY KEY (id),
    title varchar(50) NOT NULL,
    writer varchar(50) NOT NULL,
    book_description text(100) NOT NULL,
createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

INSERT into books (title, writer, book_description)
VALUES("100 años de soledad", "Gabriel G Marquez", "El Mejor libro"),
("La Fiesta del Chivo", "Mario Vargas llosa", "Relato del asesino de un dictador")