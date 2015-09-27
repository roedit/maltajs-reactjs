/**
 * SPEAKERS LIST- This is the main content for the schedule page
 */
var Speakers = React.createClass({
    getInitialState: function(){
        return {
            data: [{
                0: {
                    id: 0,
                    name: 'Andrei Toma',
                    image: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    job: {
                        position: 'Organic Performance Client Development Lead at Forward3D',
                        url: 'www.google.com',
                        logo: 'www.image.com',
                        description: 'Works at Forward3D, Europe\'s largest independent digital agency.'
                    },
                    description: 'Marketing consultant experienced in developing technical SEO & user engagement strategies for enterprise websites. Industry experience in ecommerce, travel aggregators, online market places, luxury retail, and finance. Before this, I created events and marketing communications for companies such as Hewlett Packard and Skanska..'
                },
                1: {
                    id: 1,
                    name: 'Cristian Oana',
                    image: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    job: {
                        position: 'Organic Performance Client Development Lead at Forward3D',
                        url: 'www.google.com',
                        logo: 'www.image.com',
                        description: 'Works at Forward3D, Europe\'s largest independent digital agency.'
                    },
                    description: 'Marketing consultant experienced in developing technical SEO & user engagement strategies for enterprise websites. Industry experience in ecommerce, travel aggregators, online market places, luxury retail, and finance. Before this, I created events and marketing communications for companies such as Hewlett Packard and Skanska..'
                },
                2: {
                    id: 2,
                    name: 'Bogdan Dumitriu',
                    image: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    job: {
                        position: 'Organic Performance Client Development Lead at Forward3D',
                        url: 'www.google.com',
                        logo: 'www.image.com',
                        description: 'Works at Forward3D, Europe\'s largest independent digital agency.'
                    },
                    description: 'Marketing consultant experienced in developing technical SEO & user engagement strategies for enterprise websites. Industry experience in ecommerce, travel aggregators, online market places, luxury retail, and finance. Before this, I created events and marketing communications for companies such as Hewlett Packard and Skanska..'
                }
            }]
        }
    },
    render: function(){
        var speaker = this.state.data.map(
            function(event) {
                return (
                    <div className="row">
                        <SpeakerProfile data={event['0']} key={event['0'].id}/>
                        <SpeakerProfile data={event['1']} key={event['1'].id}/>
                        <SpeakerProfile data={event['2']} key={event['2'].id}/>
                    </div>
                )
            }
        );
        return (
            <div>{speaker}</div>
        );
    }
});

/**
 * SCHEDULE HEADING - The content for the agenda heading
 */
var SpeakerProfile = React.createClass({
    render: function(){
        return (
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 speaker1">
                {this.props.data.name}
            </div>
        );
    }
});
