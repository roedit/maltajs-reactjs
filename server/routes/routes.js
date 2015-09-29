module.exports= function(app) {
    var model     = require('../models/schema');

    /**
     * Get subscribers list
     * http://localhost:3000/api/subscribers
     */
    app.get('/api/subscribers', function(req, res) {
        var query = model.Subscribers.find();

        query.exec(function(err,subscribers){
            console.log(subscribers);
            //res.json({text: 'Entire subscribers list'}, subscribers);
            res.send('Hello Man');
        });
    });

    /**
     * Add subscriber
     * http://localhost:3000/api/add-subscriber
     */
    app.post('/api/add-subscriber', function(req, res) {
        console.log(req.body);
        var subscriber = new model.Subscribers();

        subscriber.subscriberFirstName = req.body.subscriberFirstName;
        subscriber.subscriberLastName = req.body.subscriberLastName;
        subscriber.subscriberCompany = req.body.subscriberCompany;
        subscriber.subscriberEmail = req.body.subscriberEmail;
        subscriber.save(function(err, subscriber) {
            if (err) {
                // if an error occurs, show it in console
                console.log(err);
                return res.json(err);
            }
            res.json({ message: 'Subscriber successfully added', subscriber: subscriber });
            res.end();
        });
    });
};