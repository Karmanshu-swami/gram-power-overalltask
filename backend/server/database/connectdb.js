const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        var uri = `mongodb+srv://grampower:grampower@grampower.w3ix9h7.mongodb.net/grampower?retryWrites=true&w=majority`
        mongoose.set("strictQuery", false);
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDb connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB