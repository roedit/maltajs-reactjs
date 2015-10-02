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
                <ReactTransitionGroup transitionName="example" transitionAppear={true}>
                    {confirm}
                </ReactTransitionGroup>
            </div>
        );
    }
});