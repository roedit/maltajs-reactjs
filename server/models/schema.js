var mongoose = require('../../devtools/node_modules/mongoose'),
    Schema = mongoose.Schema;
/*
Subscribers Schema
 */
var subscriberSchema = new Schema({
    subscriberFirstName: { type: String, ref: 'subscriberFirstName' },
    subscriberLastName: {type: String, ref: 'subscriberLastName'},
    subscriberCompany: {type: String, ref: 'subscriberCompany'},
    subscriberEmail: {type: String, ref: 'subscriberEmail', required: true}
});
var subscriber = mongoose.model('subscriber', subscriberSchema);

module.exports = {
    Subscribers: subscriber
};
