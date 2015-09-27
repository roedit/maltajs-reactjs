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