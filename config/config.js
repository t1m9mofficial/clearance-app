if (process.argv[2] != "heroku") {
  var pwd = require('./mysql-password.js');
} else{
  var pwd = ""
}

module.exports = {
  development: {
    username: 'nodeuser',
    password: 'noUSer@1375',
    database: 'clearance',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  },
  production: {
    username: 'root',
    password: '',
    database: '',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
