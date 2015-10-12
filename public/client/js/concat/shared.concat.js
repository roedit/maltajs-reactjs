var React = require('react');
var $ = require('jquery');
var Bootstrap = require('bootstrap');
var Ps = require('scrollbar');
/**
 * Main page content render
 */
var App = React.createClass({
    // React module
    render: function() {
        return (
        	<div id="container">
                <Header />
        		<section id="home" className="row-fluid home">
                    <h2>MaltaJS conference</h2>
                    <h3>Javascript focused community in Malta</h3>
                    <p>
                        7th of NOVEMBER | BETSSON EXPERIENCE CENTER | BY
                        <a target="_blank" href="http://about.betsson.com/en/company-information/">
                            <img className="betssonHeader" src="/client/images/betsson_logo.png"></img>
                        </a>
                    </p>
                </section>

                <Subscribe />

        		<section id="schedule" className="row schedule">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Schedule</h4>
                    </div>
                    <Schedule />
                </section>

                <Speakers />
        	    <Sponsors />
                <Contact />

                <section id="location" className="row location">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Location</h4>
                    </div>
                    <Location />
                </section>
                <Footer />
        	</div>
        );
    }
});
/**
 * Contact page- This is the main content for the contact page
 */
var Contact = React.createClass({
    render: function(){
        return (
            <section id="contact" className="row contact">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <InfoSection />
                    <FormSection />
                </div>
            </section>
        );
    }
});

var InfoSection = React.createClass({
    getInitialState: function(){
        return {
            data:[{
                name: 'Andrei Toma',
                position: 'Event Organizer',
                email: 'tzuuc@yahoo.com',
                phone: '40 744267230'
            },
            {
                name: 'Bogdan Dumitriu',
                position: 'Event Organizer',
                email: 'boggdan.dumitriu@gmail.com',
                phone: '356 99946933'
            }]
        }
    },
    render: function(){
        var organizer = this.state.data.map(
            function(event, i) {
                return (
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="organizer">
                            <div className="name">{event.name}</div>
                            <div className="position">{event.position}</div>
                            <div><span className="glyphicon glyphicon-envelope"></span><p className="email">{event.email}</p></div>
                            <div><span className="glyphicon glyphicon-earphone"></span><p className="phone">&#43;{event.phone}</p></div>
                        </div>
                    </div>
                )
            }
        );
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-md-offset-1">
                <h4>Contact</h4>
                {organizer}
            </div>
        );
    }
});

var FormSection = React.createClass({
    getInitialState: function(){
        return {
            data:[{
                name: '',
                email: '',
                phone: '',
                message: ''
            }]
        }
    },
    onChangeName: function(e){
        this.setState({name: e.target.value})
    },
    onChangeEmail: function(e){
        this.setState({email: e.target.value})
    },
    onChangePhone: function(e){
        this.setState({phone: e.target.value})
    },
    onChangeMessage: function(e){
        this.setState({message: e.target.value})
    },
    render: function(){
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-md-offset-1 contactForm">
                <h5>Send us a message</h5>
                <form action='/api/contact' name="contact" id="contact" method='post'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChangeName} placeholder="Name" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="email" name="email" id="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email" />
                    </div>

                    <div className="clearfix visible-xs-block"></div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="text" name="phone" id="phone"value={this.state.phone} onChange={this.onChangePhone} placeholder="Phone"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <textarea value={this.state.message} name="message" id="message" onChange={this.onChangeMessage} placeholder="Message"></textarea>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <button className="btn btn-danger register" type="submit" name="submit" id="submit">SEND</button>
                    </div>
                </form>
            </div>
        );
    }
});
/**
 * Countdown timer
 */
var Timer = React.createClass({
    getInitialState: function() {
        return {
            display: 'none',
            eventDate: 'Sat Nov 07 2015 09:00:00 GMT',
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    componentWillMount: function() {
        //Set the interval to 1 second to check the time left to event
        setInterval(function() {
            var currentDate = new Date(),
                eventDate = new Date(this.state.eventDate),
                secondsToEvent,
                minutesToEvent,
                hoursToEvent,
                daysToEvent,
                yearsToEvent,
                dateToEvent;

            currentDate = Date.parse(currentDate);
            eventDate = Date.parse(eventDate);
            //Remove the milliseconds
            dateToEvent = (eventDate - currentDate) / 1000;
            //Check if event is up to come
            if (dateToEvent > 0) {
                //Get the years to event
                if (dateToEvent >= (365.25 * 86400)) {
                    yearsToEvent = Math.floor(dateToEvent / (365.25 * 86400));
                    dateToEvent = dateToEvent - yearsToEvent * 365.25 * 86400;
                }
                //Get the days to event
                if (dateToEvent >= 86400) {
                    daysToEvent = Math.floor(dateToEvent / 86400);
                    this.setState({days: daysToEvent});
                    dateToEvent = dateToEvent - daysToEvent * 86400;
                }
                //Get the hours to event
                if (dateToEvent >= 3600) {
                    hoursToEvent = Math.floor(dateToEvent / 3600);
                    this.setState({hours: hoursToEvent});
                    dateToEvent = dateToEvent - hoursToEvent * 3600;
                }
                //Get the minutes to event
                if (dateToEvent >= 60) {
                    minutesToEvent = Math.floor(dateToEvent / 60);
                    this.setState({minutes: minutesToEvent});
                    dateToEvent = dateToEvent - minutesToEvent * 60;
                }
                //Check if it's working proper -> console.log('Countdown: ' + dateToEvent);
                secondsToEvent = dateToEvent;
                this.setState({seconds: secondsToEvent});
                //Set the flag to display the time to event
                if (secondsToEvent > 0 && this.state.display !== 'none'){
                    this.state.display = "block";
                }
            }
        }.bind(this), 1000);
    },
    onClick: function(target, e){
        console.log(target, e);

        $('html, body').animate({
            scrollTop : $(e.target.hash).position().top
        }, 800);

        e.preventDefault();
    },
    render: function(){
        return (
            <div className="row countdown">
                <div className="timer">
                    {(() => {
                        if (this.state.days > 0) {
                            return (
                                <p><span className="count">{this.state.days}</span> days and <span className="count">{this.state.hours}</span> hours left of</p>
                            )
                        }
                    })()}
                    {(() => {
                        if (this.state.days === 0 && this.state.hours > 0 ) {
                            return (
                                <p><span className="count">{this.state.hours}</span> hours and <span className="count">{this.state.minutes}</span> minutes left of</p>
                            )
                        }
                    })()}
                    {(() => {
                        if (this.state.days === 0 && this.state.hours === 0 && this.state.display === 'block') {
                            return (
                                <p><span className="count">{this.state.minutes}</span> minutes and <span className="count">{this.state.seconds}</span> seconds left of</p>
                            )
                        }
                    })()}
                </div>
                <div className="register">
                    <a href="#subscribe" data-url='subscribe' onClick={this.onClick.bind(null, 'target')} value='Subscribe'>Subscribe</a>
                </div>
            </div>
        );
    },
    scrollHandler: function() {
        var scroll = $(window).scrollTop(),
            offset = $('.footer').offset().top;

        //Check if the element is in the view
        if (scroll > offset - $(window).height()) {
            //Add class for reset the position
            $('.countdown').addClass('sticky');
        } else {
            //Remove the class if is not in the view
            $('.countdown').removeClass('sticky');
        }
    },
    componentDidMount: function() {
        //Add event listener for page scroll
        window.addEventListener("scroll", this.scrollHandler);
    }
});

/**
 * Footer section
 */
var Footer = React.createClass({
    render: function(){
        return (
            <footer className="footer">
                <Timer />
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="leftSide">
                        <p>Copyright &#9400; MaltaJs 2015 All Rights Reserved</p>
                    </div>
                    <div className="rightSide">
                        <p>event by:</p>
                        <a target="_blank" href="http://about.betsson.com/en/company-information/">
                            <img className="betssonFooter" src="/client/images/betsson_logo.png"></img>
                        </a>
                    </div>
                </div>

            </footer>
        );
    }
});

/**
 * Header section
 */
var Header = React.createClass({
	onClick: function(target, e){
    	console.log(target, e);
    
    	$('html, body').animate({
    		scrollTop : $(e.target.hash).position().top
    	  }, 800);
    	
    	e.preventDefault();
  	},
    render: function(){
        return (
            <header className="header col-xs-12 col-sm-12 col-md-12 header-row">
            	<nav id='menu' role="navigation">
	    			<div className="logo"></div>
		        	
		        	<ul className="menu"> 
		        		<li><a href="#home" data-url='header' onClick={this.onClick.bind(null, 'target')} value='Home section'>Home</a></li>
	                    <li><a href="#subscribe" data-url='subscribe' onClick={this.onClick.bind(null, 'target')} value='Subscribe'>Subscribe</a></li>
		        		<li><a href="#schedule" data-url='schedule' onClick={this.onClick.bind(null, 'target')} value='Schedule'>Schedule</a></li>
						<li><a href="#speakers" data-url='speakers' onClick={this.onClick.bind(null, 'target')} value='Speakers'>Speakers</a></li>
						<li><a href="#sponsors" data-url='sponsors' onClick={this.onClick.bind(null, 'target')} value='Sponsors'>Sponsors</a></li>
		        		<li><a href="#location" data-url='location' onClick={this.onClick.bind(null, 'target')} value='Location'>Location</a></li>
		        	</ul>
	        	</nav>
		    </header>
        );
    }
});

/**
 * Location section
 */
 // Google maps api key
 // AIzaSyApbfoXOpdt8v4wB8spClqDaCsOtOQr4CQ
var Location = React.createClass({
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
                    name: 'Cristina Abunei',
                    img: '/client/images/speakers/cristina_abunei.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. ',
                    references: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAALIls4B7ZwO7_az8mIf6a68cRif4p7z__4&authType=NAME_SEARCH&authToken=m9RG&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A46700238%2CauthType%3ANAME_SEARCH%2Cidx%3A1-2-2%2CtarId%3A1443564512634%2Ctas%3Acristina',
                        tweeter: '',
                        website: ''
                    }
                }
            },
            {
                startHour: '11:00',
                endHour: '11:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Conrad Attard',
                    img: '/client/images/speakers/conrad_attard.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. ',
                    references: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAAWE274BxBsLO_Q8LHvgdTum2R-osdpA8YY&authType=NAME_SEARCH&authToken=9Uxs&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A92593086%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1443558388444%2Ctas%3Aconr',
                        tweeter: '',
                        website: 'https://www.um.edu.mt/profile/conradattard'
                    }
                }
            },
            {
                startHour: '11:45',
                endHour: '12:00',
                eventTitle: 'COFFEE BREAK',
                eventType: 'heading'
            },
            {
                startHour: '12:00',
                endHour: '12:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Dr. Mark Micallef',
                    img: '/client/images/speakers/mark_micallef.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor.',
                    references: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAAAextoBcVNd3fgJRpU8CFrFIZWFvoyjix4&authType=NAME_SEARCH&authToken=NT7d&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A2016986%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1443551264045%2Ctas%3Amicallef',
                        tweeter: '',
                        website: 'https://www.um.edu.mt/ict/FacultyArticles/MMI'
                    }
                }
            },
            {
                startHour: '13:00',
                endHour: '13:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Speaker',
                    img: '/client/images/speakers/search_speaker.jpg',
                    topic: 'Speaker proposed topic',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. ',
                    references: {
                        linkedin: '',
                        tweeter: '',
                        website: ''
                    }
                }
            },
            {
                startHour: '13:45',
                endHour: '14:00',
                eventTitle: 'BREAK',
                eventType: 'heading'
            },
            {
                startHour: '14:00',
                endHour: '14:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Speaker',
                    img: '/client/images/speakers/search_speaker.jpg',
                    topic: 'Speaker proposed topic',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor.',
                    references: {
                        linkedin: '',
                        tweeter: '',
                        website: ''
                    }
                }
            },
            {
                startHour: '15:00',
                endHour: '15:45',
                eventType: 'speaker',
                speaker: {
                    name: 'Daniel Massa, David Bonnuci',
                    img: '/client/images/speakers/daniel_massa.jpg',
                    topic: 'Predicting SEO growth in a environment of extreme uncertainty',
                    topic_description: 'Former senior Google Search Quality team member and now co-founder of the SEO Consulting brand SearchBrothers.com speaks about the one ultimate Google ranking factor. ',
                    references: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAALIls4B7ZwO7_az8mIf6a68cRif4p7z__4&authType=NAME_SEARCH&authToken=m9RG&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A46700238%2CauthType%3ANAME_SEARCH%2Cidx%3A1-2-2%2CtarId%3A1443564512634%2Ctas%3Acristina',
                        tweeter: '',
                        website: ''
                    }
                }
            },
            {
                startHour: '15:45',
                endHour: '16:00',
                eventTitle: 'PIZZA AND BEER',
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
                    </p>
                    <a className="linkedin" target="_blank" href={this.props.data.speaker.references.linkedin}></a>
                    <a className="website" target="_blank" href={this.props.data.speaker.references.website}></a>
                </div>
            </div>
        );
    }
});
/**
 * SPEAKERS LIST- This is the main content for the schedule page
 */
var Speakers = React.createClass({
    render: function(){
        return (
            <section id="speakers" className="row speakers">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                    <h4>Speakers</h4>
                </div>
                <SpeakersList />
            </section>
        );
    }
});
var SpeakersList = React.createClass({
    getInitialState: function(){
        return {
            data: [{
                0: {
                    id: 0,
                    name: 'Daniel Massa',
                    image: '/client/images/speakers/daniel_massa.jpg',
                    title: 'Frontend Development Lead at Betsson.',
                    job: {
                        position: 'Frontend Development Lead at',
                        company: 'Betsson Group',
                        companyUrl: 'http://about.betsson.com/en/company-information/',
                        companyLogo: '/client/images/companies/betsson.jpg',
                        description: 'Daniel Massa is the Frontend Development Lead at Betsson Group. He is focused on optimizing digital performance with strong focus on business goals. Data, analytics and performance run through his veins. He is committed to always providing with quality, security and state-of-the-art functionality. At Betsson he works with a team of highly specialized professionals to push the limits of on-line gaming. '
                    },
                    social: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAAS-QWEBI4Pf1M76DMuXVA6mUj3QMCD0nyQ&authType=NAME_SEARCH&authToken=bkg6&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A79577441%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1443375879509%2Ctas%3ADaniel%20massa',
                        tweeter: '',
                        website: ''
                    }
                },
                1: {
                    id: 1,
                    name: 'Dr. Mark Micallef',
                    image: '/client/images/speakers/mark_micallef.jpg',
                    title: 'Ph.D University of Malta, Macmillan.',
                    job: {
                        position: 'Test Strategy Consultant at',
                        company: 'Macmillan',
                        companyUrl: 'http://www.macmillan.com/',
                        companyLogo: '/client/images/companies/macmillan.jpg',
                        description: 'Specialist in Automated testing, QA Team ramp-up, QA Processes and integration of measurement into processes, Dr Mark Micallef had many teaching position throughout the years. Combining highly technical solutions with creative ideas, Mark is the author of more than 18 publications and he is regularly speaking in several important web related events all over Europe. He has helped top companies from England and Malta. Some of the brands he has worked with are BBC News , BOV, Betclic, CCBill.'
                    },
                    social: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAAAextoBcVNd3fgJRpU8CFrFIZWFvoyjix4&authType=NAME_SEARCH&authToken=NT7d&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A2016986%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1443551264045%2Ctas%3Amicallef',
                        tweeter: '',
                        website: 'https://www.um.edu.mt/ict/FacultyArticles/MMI'
                    }
                },
                2: {
                    id: 2,
                    name: 'Conrad Attard',
                    image: '/client/images/speakers/conrad_attard.jpg',
                    title: 'Assistant Lecturer at University of Malta.',
                    job: {
                        position: 'Assistant Lecturer at ',
                        company: 'University of Malta',
                        companyUrl: 'http://www.um.edu.mt/',
                        companyLogo: '/client/images/companies/malta_university.jpg',
                        description: 'Founder of iCreatemotion and Assistant Lecturer at the Department of Computer Information Systems within ICT - University of Malta, Conrad obtained his PhD at the Sheffield University, UK. His research interest are smart technology, enterprise applications, mobile applications and persuasive technology. He had contributed actively by increasing resources and opportunities for ICT students. As mentor on several successful projects, Conrad applied his knowledge on mobile technologies for workplace environments. Currently is a consultant for several companies in their initial stages who intend to adopt ERP solutions by providing advice on business processes analysis to optimize the current practices. Previously worked at Malta International Airport designing various solutions and providing support. Contributed to science communication projects such TechLab for SITC and is the vice president of IEEE Malta.'
                    },
                    social: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAAWE274BxBsLO_Q8LHvgdTum2R-osdpA8YY&authType=NAME_SEARCH&authToken=9Uxs&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A92593086%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1443558388444%2Ctas%3Aconr',
                        tweeter: '',
                        website: 'https://www.um.edu.mt/profile/conradattard'
                    }
                }
            },{
                0: {
                    id: 4,
                    name: 'Cristina Abunei',
                    image: '/client/images/speakers/cristina_abunei.jpg',
                    title: 'Software Support Engineer III at Continental Automotive',
                    job: {
                        position: 'Software Support Engineer III',
                        company: 'Continental Automotive',
                        companyUrl: 'http://www.continental-automotive.com/www/automotive_de_en/',
                        companyLogo: '/client/images/companies/continental.jpg',
                        description: 'Cristina Abunei is part of the Processes and Tools team from the Infotainment Interior and Connectivity business unit. As an expert in configuration and change management she has the ability to offer high level of support for colleagues, customers and suppliers, but also ensures that applications are meeting the goals of the organisation. As a leader of different internal projects she fosters involvement, learning and collaboration among team members and supports a self-organized team by facilitating an agile environment.'
                    },
                    social: {
                        linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAALIls4B7ZwO7_az8mIf6a68cRif4p7z__4&authType=NAME_SEARCH&authToken=m9RG&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A46700238%2CauthType%3ANAME_SEARCH%2Cidx%3A1-2-2%2CtarId%3A1443564512634%2Ctas%3Acristina',
                        tweeter: '',
                        website: ''
                    }
                },
                1: {
                    id: 5,
                    name: 'Call for Speakers',
                    image: '/client/images/speakers/search_speaker.jpg',
                    title: 'Do you want to participate as speaker at the conference?',
                    job: {
                        position: 'Contact: andrei.toma()betssongroup.com',
                        company: '',
                        companyUrl: '',
                        companyLogo: '',
                        description: 'Maltajs invites you to participate as a speaker at our next conference on November 07, 2015 @ Betsson Experience Centre. Please give us some details about yourself and the topic you would like to present. Regarding your presentation, it should be 45 minutes long, on any IT development topic you have experience with. For example, javascript, testing, business analysis, project management.'
                    },
                    social: {
                        linkedin: '',
                        tweeter: '',
                        website: ''
                    }
                },
                2: {
                    id: 6,
                    name: 'Call for Speakers',
                    image: '/client/images/speakers/search_speaker.jpg',
                    title: 'Do you want to participate as speaker at the conference?',
                    job: {
                        position: 'Contact: andrei.toma()betssongroup.com',
                        company: '',
                        companyUrl: '',
                        companyLogo: '',
                        description: 'Maltajs invites you to participate as a speaker at our next conference on November 07, 2015 @ Betsson Experience Centre. Please give us some details about yourself and the topic you would like to present. Regarding your presentation, it should be 45 minutes long, on any IT development topic you have experience with. For example, javascript, testing, business analysis, project management.'
                    },
                    social: {
                        linkedin: '',
                        tweeter: '',
                        website: ''
                    }
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
        var speakerImage = {
            backgroundImage: 'url(' + this.props.data.image + ')'
        };

        return (
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 speaker">
                <div className="content">
                    <div className="cardFront" style={speakerImage}></div>
                    <div className="cardBack">
                        <h6>
                            {this.props.data.name}
                        </h6>
                        <p className="speakerPosition">
                            {this.props.data.job.position}
                            <a target="_blank" href={this.props.data.job.companyUrl}> {this.props.data.job.company} </a>
                        </p>
                        {(() => {
                            if (this.props.data.social.linkedin !== '') {
                                return (
                                    <a className="linkedin" target="_blank" href={this.props.data.social.linkedin}></a>
                                )
                            }
                        })()}
                        {(() => {
                            if (this.props.data.social.tweeter !== '') {
                                return (
                                    <a className="linkedin" target="_blank" href={this.props.data.social.tweeter}></a>
                                )
                            }
                        })()}
                        {(() => {
                            if (this.props.data.social.website !== '') {
                                return (
                                    <a className="website" target="_blank" href={this.props.data.social.website}></a>
                                )
                            }
                        })()}
                        <p className="speakerDescription">
                            {this.props.data.job.description}
                        </p>
                    </div>
                </div>
                <div className="speakerInfo">
                    <h6>
                        {this.props.data.name}
                    </h6>
                    <p>
                        {this.props.data.title}
                    </p>
                    <div className="speakersCompany">
                        <a target="_blank" href={this.props.data.job.companyUrl}>
                            <img src={this.props.data.job.companyLogo}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    },
    componentDidMount: function() {
        var speakerCardBack = this.getDOMNode().childNodes[0].childNodes[1];
        /*Ps.initialize(speakerCardBack);*/
    }
});

/**
 * Header section
 */
var Sponsors = React.createClass({
    render: function(){
        return (
            <section id="sponsors" className="row-fluid sponsors text-center">
				<h3>Partener with MaltaJs 2015</h3>
            	<h6>Find out more about the opportunities to become one of the sponsors of MaltaJs in 2015.</h6>
            	<a href="mailto:contact@maltajs.com" className="sponsor_button" data-text="GET IN TOUCH"><span>GET IN TOUCH</span></a>
            	<div className='sponsors-logo row'>
            		<p>Sponsors</p>
	            	<a href="https://www.betsson.com/" target="_blank"> <img src="/client/images/sponsors/betsafe.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="/client/images/sponsors/casinoeuro.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="/client/images/sponsors/mrsmithcasino.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="/client/images/sponsors/sportsbook.jpg" /> </a>
            	</div>
            </section>
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
            email: '',
            progressBar: {},
            confirm: {}
        }
    },
    addSubscriber: function(e){
        e.preventDefault();
        var subscriber = {
            subscriberFirstName: this.state.firstName,
            subscriberLastName: this.state.lastName,
            subscriberCompany: this.state.company,
            subscriberEmail: this.state.email
        };
        //Push the properties to db
        $.ajax({
            url: "/api/add-subscriber",
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8", // send as JSON
            data: subscriber,
            scope: this,
            complete: function(response) {
                //set timeout to remove the success message
                setTimeout(function() {
                    this.setState({
                        confirm: {
                            state: false
                        }
                    });
                }.bind(this), 3500);
            }.bind(this),

            success: function(response) {
                this.setState({
                    confirm: {
                        state: true,
                        class: 'complete'
                    }
                });
            }.bind(this),

            error: function(response) {
                this.setState({
                    confirm: {
                        state: true,
                        class: 'error'
                    }
                });
            }.bind(this)
        });
        //Reset the form state
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
            <section id="subscribe" className="row subscribe">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                    <h4>Subscribe</h4>
                </div>
                <form onSubmit={this.addSubscriber}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="Name" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="Surname" />
                        </div>

                        <div className="clearfix visible-xs-block"></div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <input type="text" value={this.state.company} onChange={this.onChangeCompany} placeholder="Company"/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <button className="btn btn-danger register">Subscribe</button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        {(() => {
                            if (this.state.confirm.state === true) {
                                return (
                                    <Confirm>{this.state.confirm.class}</Confirm>
                                )
                            }
                        })()}
                    </div>
                </form>
            </section>
        );
    }
});

/**
 * Confirmation or error message
 */
var ReactTransitionGroup = React.addons.CSSTransitionGroup;
var Confirm = React.createClass({
    getInitialState: function(){
        return {confirm: ['randerHtml']}
    },
    handleRemove: function() {
        this.setState({confirm: []});
    },
    render: function() {
        var confirm = this.state.confirm.map(function(item) {
            if (this.props.children === "complete") {
                return (
                    <div className="confirmation" key={item}>
                        <div className="successMessage ">
                            You have successfully subscribed for the event!
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="confirmation" key={item}>
                        <div className="errorMessage">
                            An error occurred! Please contact us to subscribe for the event!
                        </div>
                    </div>
                );
            }

        }.bind(this));
        setTimeout(function() {
            this.handleRemove();
        }.bind(this), 3000);
        return (
            <div>
                <ReactTransitionGroup transitionName="subscribe" transitionAppear={true}>
                    {confirm}
                </ReactTransitionGroup>
            </div>
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

