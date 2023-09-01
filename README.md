# Search System
How to setup this repository in your local.

### Initial Setup
- Clone file `git clone <repo link>`
- download dependencies `npm install`
- setup .env file and create a variable `PORT = "3000"`

### Folder structure of `\src`
- **config**
- controllers 
- middlewares
- **migrations**
- **models**
- repository
- **seeders**
- services
- utils

Bold files can be created using
```
npx sequelize init
```

### Setup of DB config file
create file name `config.json` in `src/config/`
Then add
```
{
  "development": {
    "username": "<your_mysql_username>",
    "password": "<password>",
    "database": "<database_name>",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```


