const mongoose = require('mongoose')
const config = require('config');
const dbconfig = config.get('App.dbConfig');
const connectionstring = dbconfig.connectionstring;
const fs = require('fs')

//Function for connecting to MongoDB
module.exports.connect = function (api) {
    mongoose.connect(connectionstring)
        .then(() => mongooselog(`${Date()}: API ${api} Connected to MongoDB...`))
        .catch((err) => {
            mongooselog(`${Date()}: API ${api} Connected to MongoDB failed with error: ${err}`)
            throw new Error(err)
        })
}

//Function for disconnecting from MongoDB
module.exports.disconnect = function (api) {
    mongoose.disconnect()
        .then(mongooselog(`${Date()}: API ${api} Disconnected MongoDB...`))
        .catch((err) => mongooselog(`${Date()}: API ${api} disconnected to MongoDB with error: ${err}`))
}

//Function for logging the API triggering connection
function mongooselog(data) {
    fs.appendFile('./log/mongoose.log', '\n'+data, (err) => {
        if (err) console.log(`${Date()}: Mongoose Logging failed with error: ${err}`)
    })
}
