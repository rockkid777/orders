var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var orderSchema = new Schema({
    user: String,
    place: String,
    isOpen: Boolean,
    items: [{
        user: String
        stuff: String
    }]
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;
