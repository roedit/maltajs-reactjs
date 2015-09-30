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
        Ps.initialize(speakerCardBack);
    }
});
