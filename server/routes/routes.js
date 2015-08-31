module.exports= function(app) {

    var model     = require('../models/schema');

    app.get('/api/properties', function(req, res) {
        var populateQuery = [{path: 'userId'}, {path: 'propertyArea', select: 'areaName'}, {path: 'propertyType', select: 'typeName'}],
            query = model.Properties.find();
        query.populate(populateQuery);
        query.exec(function(err,properties){
            res.json({text: 'Old new'}, properties);
            res.end();
        });
    });

  /**
   * get property by id
   * http://localhost:3000/api/getProperties/5444d0dd9a31437167eea816
   */
  app.get('/api/getProperties/:propertyId', function(req, res) {
    var propId = req.params.propId;

    model.Av.find({propertyId: propId}).exec(function(err, av) {
      if (err)
        res.send(err);
      res.json(av);
    });
  });

    /**
     * Add property
     */
    app.post('/api/addProperty', function(req, res) {
        console.log(req.body);
        var prop = new model.Properties();

        prop.userId = req.body.userId;
        prop.propertyName = req.body.propertyName;
        prop.propertyType = req.body.propertyType;
        prop.propertyArea = req.body.propertyArea;
        prop.save(function(err, property) {
            if (err) {
                // if an error occurs, show it in console
                console.log(err);
                return res.json(err);
            }
            res.json({ message: 'Property successfully added', property: property });
            res.end();
        });

    });

    /**
     * Add property owner
     */
    app.post('/api/addOwner', function(req, res) {
        console.log(req.body);
        var owner = new model.Owners();

        owner.ownerFirstName = req.body.ownerFirstName;
        owner.ownerLastName = req.body.ownerLastName;
        owner.ownerPhone = req.body.ownerPhone;

        // save property and check for errors
        owner.save(function(err, owner) {
            if (err) {
                // if an error occurs, show it in console and send it back to the iPhone
                console.log(err);
                return res.json(err);
            }
            res.json({ message: 'Owner successfully added', ownerObject: owner });
            res.end();
        });

    });

    /**
     * Add areas
     */
    app.post('/api/addPropertyArea', function(req, res) {
        console.log(req.body);
        var propertyArea = new model.PropertiesArea();

        propertyArea.areaName = req.body.areaName;

        // save property and check for errors
        propertyArea.save(function(err) {
            if (err) {
                // if an error occurs, show it in console and send it back to the iPhone
                console.log(err);
                return res.json(err);
            }
            res.json({ message: 'Area successfully added'});
            res.end();
        });
    });

    /**
     * Add property types
     */
    app.post('/api/addPropertyType', function(req, res) {
        console.log(req.body);
        var propertyType = new model.PropertiesType();

        propertyType.typeName = req.body.typeName;

        // save property and check for errors
        propertyType.save(function(err) {
            if (err) {
                // if an error occurs, show it in console and send it back to the iPhone
                console.log(err);
                return res.json(err);
            }
            res.json({ message: 'Property type successfully added'});
            res.end();
        });
    });
};