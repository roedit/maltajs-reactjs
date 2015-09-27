/** @jsx react.dom */
// Flux cart view
var App = React.createClass({
    onClick: function(target, e){
    	console.log(target, e);
    
    	$('html, body').animate({
    		scrollTop : $(e.target.hash).position().top
    	  }, 800);
    	
    	e.preventDefault();
  	},
    // React module
    // Our app will have a single module
    render: function() {
        return (
        	<div id="container">
        		<div className="header col-xs-12 col-sm-12 col-md-12">
        			<div className="logo">Logo</div>
		        	
		        	<ul className="menu"> 
		        		<li><a href="#home" data-url='header' onClick={this.onClick.bind(null, 'target')} value='Home section'>Home</a></li>
                        <li><a href="#subscribe" data-url='subscribe' onClick={this.onClick.bind(null, 'target')} value='Subscribe'>Subscribe</a></li>
		        		<li><a href="#schedule" data-url='schedule' onClick={this.onClick.bind(null, 'target')} value='Schedule'>Schedule</a></li>
						<li><a href="#speakers" data-url='speakers' onClick={this.onClick.bind(null, 'target')} value='Speakers'>Speakers</a></li>
						<li><a href="#sponsors" data-url='sponsors' onClick={this.onClick.bind(null, 'target')} value='Sponsors'>Sponsors</a></li>
		        		<li><a href="#location" data-url='location' onClick={this.onClick.bind(null, 'target')} value='Location'>Location</a></li>
		        	</ul>
		        </div>

        		<section id="home" className="row home">Header Section</section>
                <section id="subscribe" className="row subscribe">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Subscribe</h4>
                    </div>
                    <Subscribe />
                </section>
        		<section id="schedule" className="row schedule">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Schedule</h4>
                    </div>
                    <Schedule />
                </section>
				<section id="speakers" className="row speakers">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
						<h4>Speakers</h4>
					</div>
					<Speakers />
				</section>
        		<section id="sponsors" className="row sponsors">Sponsors Section</section>
        		<section id="location" className="row location">Location Section</section>
        	</div>
        );
    }
});
/**
 * SCHEDULE LIST- This is the main content for the schedule page
 */
var Schedule = React.createClass({
    getInitialState: function(){
        return {
            data: [{
                startHour: '09:00',
                endHour: '09:45',
                eventTitle: 'WELCOME COFFEE & REGISTRATION',
                eventType: 'heading'
            },
            {
                startHour: '09:45',
                endHour: '10:00',
                eventTitle: 'WELCOME SPEECH',
                eventType: 'heading'
            },
            {
                startHour: '10:00',
                endHour: '10:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Andrei Toma',
                    img: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. ',
                    references: {
                        linkedin: 'http://cucurigu2',
                        tweeter: 'http://cucurigu3',
                        website: 'http://cucurigu4'
                    }
                }
            },
            {
                startHour: '10:45',
                endHour: '11:00',
                eventTitle: 'COFFEE BREAK',
                eventType: 'heading'
            },
            {
                startHour: '11:00',
                endHour: '11:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Andrei Toma',
                    img: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor.',
                    references: {
                        linkedin: 'http://cucurigu2',
                        tweeter: 'http://cucurigu3',
                        website: 'http://cucurigu4'
                    }
                }
            },
            {
                startHour: '11:00',
                endHour: '11:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Andrei Toma',
                    img: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. ',
                    references: {
                        linkedin: 'http://cucurigu2',
                        tweeter: 'http://cucurigu3',
                        website: 'http://cucurigu4'
                    }
                }
            },
            {
                startHour: '11:45',
                endHour: '12:00',
                eventTitle: 'THANKS & GOOD BYE',
                eventType: 'heading'
            }]
        }
    },
    render: function(){
        var agenda = this.state.data.map(
            function(event, i) {
                if (event.eventType === 'heading') {
                    return (
                        <ScheduleHeading data={event} key={i}/>
                    )
                } else {
                    return (
                        <ScheduleSpeaker data={event} key={i}/>
                    )
                }
            }
        );
        return (
            <div>{agenda}</div>
        );
    }
});

/**
 * SCHEDULE HEADING - The content for the agenda heading
 */
var ScheduleHeading = React.createClass({
    render: function(){
        return (
            <div className="row scheduleRow">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 eventTitle eventBackground">
                    <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 eventTimeHolder">
                        {this.props.data.startHour} - {this.props.data.endHour}
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 textCenter">
                        {this.props.data.eventTitle}
                    </div>
                </div>
            </div>
        );
    }
});

/**
 * SCHEDULE SPEAKER - The content for the agenda speaker
 */
var ScheduleSpeaker = React.createClass({
    render: function(){
        var speakerImageStyle = {
            backgroundImage: 'url(' + this.props.data.speaker.img + ')'
        };
        return (
            <div className="row scheduleRow">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 eventTitle">
                    <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 eventTimeHolder">
                        {this.props.data.startHour} - {this.props.data.endHour}
                    </div>
                    <div className="col-xs-8 col-sm-10 col-md-10 col-lg-10 eventLine">
                        <hr></hr>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 eventSpeaker">
                    <div className="speakerImg" style={speakerImageStyle}></div>
                    <h5>
                        {this.props.data.speaker.topic}
                        <span className="compute"> with </span>
                        {this.props.data.speaker.name}
                    </h5>
                    <p>
                        "{this.props.data.speaker.topic_description}"
                        <a className="linkedin" target="_blank" href={this.props.data.speaker.references.linkedin}></a>
                        <a className="tweeter" target="_blank" href={this.props.data.speaker.references.tweeter}></a>
                        <a className="website" target="_blank" href={this.props.data.speaker.references.website}></a>
                    </p>
                </div>
            </div>
        );
    }
});
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

/**
 * SUBSCRIBE FORM- This is the main content for the subscribe page
 */
var Subscribe = React.createClass({
    getInitialState: function(){
        return {
            firstName: '',
            lastName: '',
            company: '',
            email: ''
        }
    },
    addSubscriber: function(e){
        e.preventDefault();
        //Push the properties to db
        console.log('User to be added:' + this.state.firstName + ' ' + this.state.lastName);
        this.setState({
            firstName: '',
            lastName: '',
            company: '',
            email: ''
        });
    },
    onChangeFirstName: function(e){
        this.setState({firstName: e.target.value})
    },
    onChangeLastName: function(e){
        this.setState({lastName: e.target.value})
    },
    onChangeCompany: function(e){
        this.setState({company: e.target.value})
    },
    onChangeEmail: function(e){
        this.setState({email: e.target.value})
    },
    render: function(){
        return (
            <form onSubmit={this.addSubscriber}>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="name" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="surname" />
                    </div>

                    <div className="clearfix visible-xs-block"></div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <input type="text" value={this.state.company} onChange={this.onChangeCompany} placeholder="company"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="email" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                    <button type="button" className="btn btn-danger register">Subscribe</button>
                </div>
            </form>
        );
    }
});
/**
 * SUBSCRIBERS LIST- This is the main content for the subscribers page
 */

var SubscribersList = React.createClass({
    getInitialState: function(){
        return {
            data:[{
                firstName: 'Andrei',
                lastName: 'Toma',
                company: 'Betsson',
                email: 'tzuuc@yahoo.com'
            }]
        }
    },
    render: function(){
        var people = this.state.data.map(
            function(subscriber) {
                return (
                    <div>
                        <Subscriber first={subscriber.firstName} last={subscriber.lastName} company={subscriber.company} email={subscriber.email}/>
                    </div>
                )
            }
        );
        return (
            <div>{people}</div>
        );
    }
});
/**
 * SUBSCRIBER - This is the main content for the subscriber
 */

var Subscriber = React.createClass({
    render: function(){
        return (
            <div>
                <h2>{this.props.last}, {this.props.first}, {this.props.company}, {this.props.email}</h2>
            </div>
        );
    }
});
var mainContainer = document.getElementById('main');
React.render(<App/>, mainContainer);