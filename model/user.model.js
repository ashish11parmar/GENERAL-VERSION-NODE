const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    companyname: {
        type: String
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },

    isCompany: {
        type: Boolean,
        default: false,
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    otp: {
        type: Number
    },
    otpExpire: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});
UserSchema.index({ otp: 1 }, { expireAfterSeconds: 3600 });
const User = mongoose.model('user', UserSchema);

module.exports = User;