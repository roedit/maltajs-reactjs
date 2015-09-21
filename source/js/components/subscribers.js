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