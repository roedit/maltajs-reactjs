var mongoose = require('../devtools/node_modules/mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/maltaJs', function () {
    console.log('Mongodb Connected !')
});
module.exports = mongoose;