module.exports = function(app, Order) {
    app.get('/v1/order', function(req, res){
        Order.find({isOpen: true}, function(err, docs) {
            res.json(docs);
        })
    });
    app.post('/v1/order', function(req, res) {
        Order.create({
            user: req.body.user,
            place: req.body.place,
            isOpen: true,
            items: []
        }, function (err, order) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send();
            }
        });
    });
};
