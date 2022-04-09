module.exports={
  "development": {
    "username": "root",
    "password": null,
    "database": "backend-orm",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production":{
    use_env_variable : 'DATABAE_URL',
    dialect: "prostgress",
    protocol : "postgress",
    dialectOptions: {
      ssl:{
        require : true,
        rejectUnathorized : false
      }
    }
  }
}
