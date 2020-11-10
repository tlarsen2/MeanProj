const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://{{USER}}:{{Password}}@cluster0.q9fnx.mongodb.net/mean?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

class MongoConn {

    static connect (collection) {
        return MongoClient.connect(uri, connectionParams)
            .then( client => {
                return client.db('mean').collection(collection);
            })
            .catch( err => { console.log(err)});
    }

    static find(collection, query) {
        return MongoConn.connect('mean', collection)
            .then(c => {
                return c.find(query)
                    .then(result => {
                        return result;
                    });
            })
    }

    static findOne(db, collection, query) {
        return MongoConn.connect(db, collection)
            .then(c => {
                return c.findOne(query)
                    .then(result => {
                        return result;
                    });
            })
    }

    static insert(collection, query) {
        return MongoConn.connect('mean' ,collection)
            .then(c => {
                return c.insert(query)
                    .then(result => {
                        return result;
                    });
            })
    }
}

module.exports = { MongoConn }