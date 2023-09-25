import {Sequelize} from 'sequelize';


const db = new Sequelize('books_app', 'root', 'Emily£2023', {
    host: 'localhost',
    dialect: 'mysql'
});
export default db;