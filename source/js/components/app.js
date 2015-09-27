// Flux cart view
var App = React.createClass({
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
        	<div id="container">
        		<div className="header col-xs-12 col-sm-12 col-md-12">
        			<div className="logo">Logo</div>
		        	
		        	<ul className="menu"> 
		        		<li><a href="#home" data-url='header' onClick={this.onClick.bind(null, 'target')} value='Home section'>Home</a></li>
                        <li><a href="#subscribe" data-url='subscribe' onClick={this.onClick.bind(null, 'target')} value='Subscribe'>Subscribe</a></li>
		        		<li><a href="#schedule" data-url='schedule' onClick={this.onClick.bind(null, 'target')} value='Schedule'>Schedule</a></li>
						<li><a href="#speakers" data-url='speakers' onClick={this.onClick.bind(null, 'target')} value='Speakers'>Speakers</a></li>
						<li><a href="#sponsors" data-url='sponsors' onClick={this.onClick.bind(null, 'target')} value='Sponsors'>Sponsors</a></li>
		        		<li><a href="#location" data-url='location' onClick={this.onClick.bind(null, 'target')} value='Location'>Location</a></li>
		        	</ul>
		        </div>

        		<section id="home" className="row home">Header Section</section>
                <section id="subscribe" className="row subscribe">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Subscribe</h4>
                    </div>
                    <Subscribe />
                </section>
        		<section id="schedule" className="row schedule">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Schedule</h4>
                    </div>
                    <Schedule />
                </section>
				<section id="speakers" className="row speakers">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
						<h4>Speakers</h4>
					</div>
					<Speakers />
				</section>
        		<section id="sponsors" className="row sponsors">Sponsors Section</section>
        		<section id="location" className="row location">Location Section</section>
        	</div>
        );
    }
});