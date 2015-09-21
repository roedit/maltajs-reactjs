var App = React.createClass({
	//Get initial state is the place where the database call should be done for the users list
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
		//Push the properties to db
		/*{
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			company: this.state.company,
			email: this.state.email
		}*/
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
	onClick: function(target, e){
    	console.log(target, e);
    
    	$('html, body').animate({
    		scrollTop : $(e.target.hash).position().top
    	  }, 800);
    	
    	e.preventDefault();
  	},
    // React module
    // Our app will have a single module
    render: function() {
        return (
        	<div>
        		<div className="header">
        			<div className="logo">Logo</div>
		        	
		        	<ul className="menu"> 
		        		<li><a href="#home" data-url='header' onClick={this.onClick.bind(null, 'target')} value='Home section'>Home</a></li>
		        		<li><a href="#speakers" data-url='speakers' onClick={this.onClick.bind(null, 'target')} value='Speakers'>Speakers</a></li>
		        		<li><a href="#schedule" data-url='schedule' onClick={this.onClick.bind(null, 'target')} value='Schedule'>Schedule</a></li>
		        		<li><a href="#sponsors" data-url='sponsors' onClick={this.onClick.bind(null, 'target')} value='Sponsors'>Sponsors</a></li>
		        		<li><a href="#location" data-url='location' onClick={this.onClick.bind(null, 'target')} value='Location'>Location</a></li>
		        	</ul>
		        </div>

        		<section id="home" className="panel home">
					Header Section
				</section>
				<section id="subscribe" className="panel subscribe">
					Subscribe Section
					<form onSubmit={this.addSubscriber}>
						<input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="name" />
						<input type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="surname" />
						<input type="text" value={this.state.company} onChange={this.onChangeCompany} placeholder="company"/>
						<input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="email" />
						<button>Subscribe</button>
					</form>
					<div class="subscriptionHolder">
						<SubscribersList />
					</div>
				</section>
				<section id="speakers" className="panel speakers">Speakers Section</section>
        		<section id="schedule" className="panel schedule">Schedule Section</section>
        		<section id="sponsors" className="panel sponsors">Sponsors Section</section>
        		<section id="location" className="panel location">Location Section</section>
        	
        	</div>
        );
    }
});