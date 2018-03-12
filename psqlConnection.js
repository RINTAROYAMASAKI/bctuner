var pgp = require("pg-promise")(options);

var dbConfig = {
    host: 'ec2-50-17-206-214.compute-1.amazonaws.com',
    user: 'snmvvzybrrztao',
    password: '0862759ed98e8ad4a55c2b8d684f3ea45a98d8a93dc71c4b8066fa168475c7ed',
    database: 'dekqnogiagc79i',
    port: 5432,
    ssl: true
};

var connection = pgp(dbConfig);

module.exports = connection;