/** @jsx react.dom */

var App = React.createClass({
    // React module
 
    render: function() {
        return (
        	<div id="container">
                <Header />
        		<section id="home" className="row home">
                    <h2>MaltaJS conference</h2>
                    <h3>Javascript focused community in Malta</h3>
                </section>
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
        	    <SponsorsSection />
        		<LocationSection />
        	</div>
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
var LocationSection = React.createClass({
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
			    size: new google.maps.Size(30, 30),
			    // The origin for this image is (0, 0).
			    origin: new google.maps.Point(0, 0),
			    // The anchor for this image is the base of the flagpole at (0, 32).
			    anchor: new google.maps.Point(0, 32)
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
	        	<section id="location" className="row location">Location Section
	           	 <div className='map-gic' id='map'></div>
	            </section>
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
                    name: 'Daniel Massa',
                    image: '/client/images/speakers/daniel_massa_betsson.jpg',
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
                    name: 'Andrei Toma',
                    image: 'http://selectyachts-spain.com/wp-content/uploads/2013/10/picAndreiToma-300x300.jpg',
                    title: 'Partner and Lawyer at Schonherr.',
                    job: {
                        position: 'Organic Performance Client Development Lead at',
                        company: 'Forward3D',
                        companyUrl: 'http://youtube.com',
                        companyLogo: 'https://ulrikbengtsson.files.wordpress.com/2013/08/screen-shot-2013-08-20-at-19-24-50.png',
                        url: 'http://google.com',
                        logo: 'http://image.com',
                        description: 'Works at Forward3D, Europe\'s largest independent digital agency.'
                    },
                    social: {
                        linkedin: 'https://ro.linkedin.com/pub/andrei-toma/17/300/974',
                        tweeter: '',
                        website: ''
                    }
                },
                2: {
                    id: 2,
                    name: 'Bogdan Dumitriu',
                    image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/046/2ad/36bfc2e.jpg',
                    title: 'Partner and Lawyer at Schonherr.',
                    job: {
                        position: 'Organic Performance Client Development Lead at',
                        company: 'Forward3D',
                        companyUrl: 'http://www.youtube.com',
                        companyLogo: 'https://ulrikbengtsson.files.wordpress.com/2013/08/screen-shot-2013-08-20-at-19-24-50.png',
                        url: 'http://www.google.com',
                        logo: 'http://www.image.com',
                        description: 'Marketing consultant experienced in developing technical SEO & user engagement strategies for enterprise websites. Industry experience in ecommerce, travel aggregators, online market places, luxury retail, and finance. Before this, I created events and marketing communications for companies such as Hewlett Packard and Skanska..'
                    },
                    social: {
                        linkedin: '',
                        tweeter: 'https://ro.linkedin.com/pub/andrei-toma/17/300/974',
                        website: 'https://ro.linkedin.com/pub/andrei-toma/17/300/974'
                    }
                }
            },{
                0: {
                    id: 4,
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
                                    <a className="linkedin" target="_blank" href={this.props.data.social.website}></a>
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
    }
});


/**
 * Header section
 */
var SponsorsSection = React.createClass({
    render: function(){
        return (
            <section id="sponsors" className="row sponsors text-center">
            	<h3>PARTNER WITH MaltaJs 2015</h3>
            	<h6>Find out more about the opportunities to become one of the sponsors of MaltaJs in 2015.</h6>
            	<a href="mailto:contact@maltajs.com" className="sponsor_button" data-text="GET IN TOUCH"><span>GET IN TOUCH</span></a>
            	<div className='sponsors-logo row'>
            		<p>Sponsors</p>
	            	<a href="https://www.betsson.com/" target="_blank"> <img src="http://www.esportsbets24.com/wp-content/uploads/2015/06/betssonlogo.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="http://www.semdays.ro/wp-content/themes/blankslate/images/sponsors/retargeting.png" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvit3lhnqrPdezou4noupdnI1M6bgnABNjAawlJzBWvbpF98oPN4SS8Bw" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="http://www.infobookmakers.com/images/brand/betsafe.jpeg" /> </a>
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
            email: ''
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
        $.ajax({
            url: "/api/add-subscriber",
            type: "POST",
            dataType: "xml/html/script/json", // expected format for response
            contentType: "application/x-www-form-urlencoded; charset=UTF-8", // send as JSON
            data: subscriber,

            complete: function(response) {
                debugger
            },

            success: function(response) {
                debugger
            },

            error: function(response) {
                debugger
            }
        });
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