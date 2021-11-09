import { Sequelize } from "sequelize";
// constructor arguments: database name, user name, user password, options object: https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
export const sequelize = new Sequelize('sakila', 'root', 'luaazul69', {
    // dbms specification
    dialect: 'mysql',
    // db host
    host: '127.0.0.1',
    // db port
    port: '3306'
});
// export const dbConnection = async () => {
//     console.log('got called')
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established.');
//     } catch (error) {
//         console.log('Unabel to connect with error: ' + error);
//     }
// }
