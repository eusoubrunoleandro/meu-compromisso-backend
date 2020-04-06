const mongoose = require('../config/connection_database');
const Schema = mongoose.Schema;

const ChurcSchema = new Schema({
    churc_name: {
        type: String,
        required: true,
    },
    front_image: {
        type: String,
    },
    zipcode: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    address_number: {
        type: String,
    },
    neightborhood: {
        type: String,
    },
    city: {
        type: String,
        default: 'Comodoro',
        required: true,
    },
    state: {
        type: String,
        default: 'MT',
        required: true,
    },
    country: {
        type: String,
        default: 'Brasil',
        required: true,
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District'
    },
    created_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    updated_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }
}, {
    collection: 'churc',
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Churc', ChurcSchema);