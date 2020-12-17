const mongoose = "mongoose";
const Schema = mongoose.Schema; 
const contactSchema = new Schema (
    {
        name: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            require: true,
        },
        avatar: {
            type: Number,
        },
        status: {
            type: String,
        },
        email: {
            type: String,
            require: true,
        },
        gender: {
            type: String,
            require: true,
        },
    }

) 

module.exports = mongoose.model("Contact", contactSchema);
// created: '2013/08/08',
