'use strict';

const user = process.env.DBUser || 'ncarmont';
const password = process.env.DBPassword || '3i8y1T&GyFeWNcEZR';
const server = process.env.DBServer || 'cotu2hackcambridge.database.windows.net';

exports.config = {
    user: user,
    password: password,
    server: server,
    database: 'cotu2',
    options:{
        encrypt: true
    }
}