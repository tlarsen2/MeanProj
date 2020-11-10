const express = require('express');
const router = express.Router();
const { MongoConn } = require('../mongo/MongoConn.js');

router.post('/', ((req, res, next) => {
    MongoConn.connect('authors')
        .then(mongo => {
            mongo.insertMany(req.body, (err, res)  => {
                    if(err) {
                        return res.status(500).send(err);
                    }
                    mongo.close;
                    res.send(res.result);
    })})
}));

router.get('/', (request, response, next) => {
    MongoConn.connect('authors')
        .then(mongo => {
            mongo.find().toArray((error, result) => {
            if (error) {
                return response.status(500).send("Error occured");
            }
            mongo.close;
            response.send(result);
    })});
});

module.exports = router;