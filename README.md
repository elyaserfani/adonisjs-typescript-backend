# [Adonis.js](https://adonisjs.com/) Simple Backend (PostgreSQL Database)

### This project includes :

- Simple crud (Services & Auth) controller and uses jwt token for login/register .
- [Lucid ORM](https://github.com/adonisjs/lucid)
- [Adonis Auth](https://github.com/adonisjs/auth)

## Installation

Create .env similar to .env.example and set this required values for postgresql database :

```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=SF2WLC_zOtoDFH-80XQFVRxbrKpsTgKF
DRIVE_DISK=local
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=DATABASE_USER
PG_PASSWORD=PASSWORD
PG_DB_NAME=DATABASE_NAME
```

### Get List Of All Avaliable Routes :

```
node ace list:routes
```

### Run & Serve :

```
node ace serve --watch
```
