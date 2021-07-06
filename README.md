# Lab Management

API to maintain laboratories and exams. The API was build using NestJS framework and the SOLID principles.

##Requirements
- NodeJS
- PostgreSQL

## Installation

```bash
$ npm install
```
or
```bash
$ yarn
```

##Running migrations

```bash
$ npm run typeorm:migration:run
```
or
```bash
$ yarn typeorm:migration:run
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
or
```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
## Documentation

The API has a OpenAPI documentation that can be found in http://localhost:3000/api/docs

## License

[MIT licensed](LICENSE).
