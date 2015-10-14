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
    sendMail: function(e){
        e.preventDefault();
        // TODO fill in with the data
        var emailDetails = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        };
        //Push the properties to db
        $.ajax({
            url: "/api/contact",
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8", // send as JSON
            data: emailDetails,
            scope: this,
            complete: function(response) {
                console.log("Completed sending the email", response);
            }.bind(this),

            success: function(response) {
                console.log("Success sending the email", response);
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }.bind(this),

            error: function(response) {
                console.log("Error sending the email", response);
            }.bind(this)
        });
    },
    render: function(){
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-md-offset-1 contactForm">
                <h5>Send us a message</h5>
                <form name='contact' id='contact'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChangeName} placeholder="Name" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="email" name="email" id="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email" />
                    </div>

                    <div className="clearfix visible-xs-block"></div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.onChangePhone} placeholder="Phone"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <textarea name="message" id="message" value={this.state.message} onChange={this.onChangeMessage} placeholder="Message"></textarea>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <button type="submit" name="submit" id="submit" className="btn btn-danger register" onClick={this.sendMail} >SEND</button>
                    </div>
                </form>
            </div>
        );
    }
});