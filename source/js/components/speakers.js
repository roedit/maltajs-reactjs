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
