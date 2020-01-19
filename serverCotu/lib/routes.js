'use strict';

const Joi = require('joi');
const {
    config
} = require('../config');
const sql = require('mssql');

exports.routes = [{
    path: '/getHistory',
    method: 'GET',
    handler: () => {
        return new Promise((resolve, reject) => {

            let connection = new sql.ConnectionPool(config, function (err) {
                if (err) {
                    console.log('Error: ' + err);
                    reject(err);
                } else {
                    let request = new sql.Request(connection);
                    request.execute('getHistory', function (err, recordsets) {
                        if (err) {
                            console.log('Error: ' + err);
                            reject(err);
                        } else {
                            console.log(recordsets);
                            resolve(recordsets);
                        }
                    });
                }
            })
            connection.on('error', function (err) {
                console.log('Error: ' + err);
                reject(err);
            })
        })
    },
},

{
    path: '/insertItem',
    method: 'POST',

    config:{
        handler: function(req, reply) {
            let {Id,productName, productCategory, offsetCost,productCost }= req.payload;
            
            // console.log(Id);
            return new Promise((resolve, reject) => {
                 
                let connection = new sql.ConnectionPool(config, function (err) {
                    
                    if (err) {
                        console.log('Error: ' + err);
                        reject(err);
                    } else {
                        let request = new sql.Request(connection);
                     
                        request.input('Id', Id);
                        request.input('productName', productName);
                        request.input('productCategory', productCategory);
                        request.input('offsetCost',offsetCost);
                        request.input('productCost',productCost);
                        request.execute('insertItem', function (err, recordsets) {
                            if (err) {
                                console.log('Error: ' + err);
                                reject(err);
                            } else {
                                // console.log(recordsets);
                                // resolve();
                                resolve(recordsets);
                            }
                        });
                    }
                })
                connection.on('error', function (err) {
                    console.log('Error: ' + err);
                    reject(err);
                })
            })
        },

        validate: { 
            payload: { 

                Id: Joi.number().min(0),
                productName: Joi.string().min(1),
                productCategory: Joi.string().min(1),
                offsetCost: Joi.number().min(0),
                productCost: Joi.number().min(0)
            }
        
    }

    }     
}]