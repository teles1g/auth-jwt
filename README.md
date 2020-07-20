## Authentication / JWT

JSON Web Token is an Internet standard for creating data with an optional signature and / or encryption whose payload contains JSON that states any number of statements.

In this project, I will show you how to create a authentication using JWT.

<p align="center">
  <img src="https://github.com/teles1g/authentication/blob/master/jwt.png?raw=true" alt="Jwt"/>
</p>

#### Start Server

```
-> ~/yarn

-> ~/yarn dev
```

#### Connect Database

Copy the ".env.example" to ".env" and edit as needed

```
APP_SECRET= MD5 Hash Generator (https://www.md5hashgenerator.com/)
EXPIRES=1d
```

#### Run Migrations

```
-> ~/yarn sequelize db:migrate
```

#### Insomnia

Import file on Insomnia

![import](https://github.com/teles1g/authentication/blob/master/import.png)

#### Util

JWT: https://jwt.io

Insomnia: https://insomnia.rest
