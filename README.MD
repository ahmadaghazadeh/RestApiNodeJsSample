''' npm i -g @nestjs/cli

nest new rest-api-curd

npm i pg typeorm @nestjs/typeorm @nestjs/config

typeorm migration:generate init-auth.migration -d .\src\ormconfig.js

 npm install ts-node --save-dev
 npm i -g typeorm

typeorm migration:create apps/auth/src/db/migraions/initDatabase

nest g module users

nest g controller users

nest g service users

npm install @nestjs/swagger swagger-ui-express

http://localhost:3000/api-docs

migration:generate 

 
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
