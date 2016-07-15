var pgp = require('pg-promise')({});
var config = require('config');
export var db = pgp({
    host: config.get('database.host'),
    port: config.get('database.port'),
    database: config.get('database.database'),
    user: config.get('database.username'),
    password: process.env.postgres_pw
});