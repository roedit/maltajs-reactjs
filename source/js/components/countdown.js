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
