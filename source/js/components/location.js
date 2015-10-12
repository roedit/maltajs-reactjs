/**
 * LOCATION - This is the main content for the location page
 */
var Location = React.createClass({
    render: function(){
        return (
            <section id="location" className="row location">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                <h4>Location</h4>
            </div>
            <Map/>
            </section>
        );
    }
});

/**
 * Map container and initialize the google map
 */
 // Google maps api key
 // AIzaSyApbfoXOpdt8v4wB8spClqDaCsOtOQr4CQ
var Map = React.createClass({
    getDefaultProps: function () {
        return {
            initialZoom: 17,
            mapCenterLat: 35.897705,
            mapCenterLng: 14.494386
        };
    },
    componentDidMount: function (rootNode) {
        var image = {
            url: 'client/images/map_marker.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(70, 70),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(12, 70)
        };

        var contentString = '<div id="content">'+
            '<div id="location-details">'+
                '</div>'+
                    '<h1 id="firstHeading" class="firstHeading"><b>Location Details:</b></h1>'+
                    '<div id="bodyContent">'+
                        '<p>Betsson Experience Centre</p>'+
                        '<p>8th Floor</p>'+
                    '</div>'+
                '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
           content: contentString
        });

        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false
        },

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: this.mapCenterLatLng(),
            title: 'MaltaJS',
            map: map,
            draggable: false,
            icon: image
        });

        marker.addListener('click', function() {
           infowindow.open(map, marker);
        });
        this.setState({map: map});
    },
    mapCenterLatLng: function () {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    },
    render: function () {
        return (
            <div className='map-gic' id='map'></div>
        );
    }
});