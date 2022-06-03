/**
 * @file config appconfig.js
 * @author Rizky Adji Pangestu
 */

require("dotenv").config();

const {DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

module.exports = {
  app: {
    port: process.env.DEV_APP_PORT || 8000,
    appName: process.env.APP_NAME || "bcr-backend-api",
    // env: process.env.NODE_ENV || "development",
    // server: process.env.SERVER || "localhost",
    jwtSecret: process.env.SECRET_KEY || "BinarUniqueKey",
    jwtExpire: process.env.JWT_EXPIRE || "12h",
  },
development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    ssl: true,
  },
test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    ssl: true,
  },
production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    ssl: true,
  },
};
