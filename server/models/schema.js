var mongoose = require('../../devtools/node_modules/mongoose'),
    Schema = mongoose.Schema;

var ownerSchema = new Schema({
    ownerFirstName: { type: String, required: true },
    ownerMiddleName: { type: String },
    ownerLastName: { type: String, required: true },
    ownerPhone: { type: Number, required: true },
    ownerEmail: { type: String },
    ownerAddress: { type: String },
    ownerArea: { type: String },
    ownerState: { type: String }
});

var owner = mongoose.model('owner', ownerSchema);

var propertySchema = new Schema({
    userId: { type: Schema.ObjectId , ref: 'owner', required: true },
    propertyName: { type: String, required: true, index: { unique: true } }, //Ex Exclusive
    propertyType: {type: Schema.ObjectId, ref: 'propertiesType'}, //Reference to the propertyType
    propertyArea: {type: Schema.ObjectId, ref: 'propertiesArea'}
});
var properties = mongoose.model('properties', propertySchema);

var propertyTypeSchema = new Schema({
    typeName: { type: String, require: true, unique: true }
});
var propertyType = mongoose.model('propertiesType', propertyTypeSchema);

var propertiesAreaSchema = new Schema({
    areaName: { type: String, require: true, unique: true }
});
var propertyArea = mongoose.model('propertiesArea', propertiesAreaSchema);

var imagesSchema = new Schema({
  propertyId: { type: Schema.ObjectId, required: true, index: { unique: true } },
  imageName: {type: String, required: true},
  comment: String
});
var images = mongoose.model('images', imagesSchema);

module.exports = {
    Owners: owner,
    Properties: properties,
    PropertiesType: propertyType,
    PropertiesArea: propertyArea,
    Images: images
};