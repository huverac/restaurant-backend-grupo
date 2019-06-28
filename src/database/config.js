export default {
  development: {
    username: 'postgres',
    password: '12345',
    database: 'restaurante',
    host: '127.0.0.1',
    dialect: 'postgres', 
    port:'5436'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'expresos_admin',
    password: '@000000',
    database: 'expresos_circular',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
