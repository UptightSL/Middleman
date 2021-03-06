/*
Middleman - Peer Reviewed Image API"s.
Copyright (C) 2020 Checksum

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

const logger = require('./logger');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_HOST}`,
	dialect: `${process.env.DB_TYPE}`,
	storage: 'database.sqlite',
	logging: logger.debug,
});
exports.sequelize = sequelize;

const Images = sequelize.define('images', {
	url: {
		type: Sequelize.STRING(1000),
		unique: true,
	},
	rating: Sequelize.STRING,
	user: Sequelize.STRING,
});

exports.Images = Images;

const Users = sequelize.define('users', {
	userid: {
		type: Sequelize.STRING,
	},
	count: Sequelize.INTEGER,
});
exports.Users = Users;
