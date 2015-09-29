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