"use strict";
exports.__esModule = true;
exports.ormconfig = void 0;
var price_entity_1 = require("../price/price.entity");
exports.ormconfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'blockchain_price_tracker',
    entities: [price_entity_1.Price],
    synchronize: true
};
