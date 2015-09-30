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
                    name: 'Daniel Mass, David Bonnuci',
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
                eventTitle: 'FEEDBACK & CLOSING OF THE DAY',
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