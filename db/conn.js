const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

mongoose.set('strictQuery', true);
// Connect to the mongodb
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
})