module.exports = function(app, Order) {
    app.get('/v1/order', function(req, res){
        Order.find({isOpen: true}, function(err, docs) {
            res.json(docs);
        })
    });
};
