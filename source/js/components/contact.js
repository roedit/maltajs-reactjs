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
                <form>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Name" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email" />
                    </div>

                    <div className="clearfix visible-xs-block"></div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="text" value={this.state.phone} onChange={this.onChangePhone} placeholder="Phone"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <textarea value={this.state.message} onChange={this.onChangeMessage} placeholder="Message"></textarea>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <button className="btn btn-danger register">SEND</button>
                    </div>
                </form>
            </div>
        );
    }
});