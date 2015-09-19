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

        		<section id="home" className="panel home">Header Section</section>
        		<section id="speakers" className="panel speakers">Speakers Section</section>
        		<section id="schedule" className="panel schedule">Schedule Section</section>
        		<section id="sponsors" className="panel sponsors">Sponsors Section</section>
        		<section id="location" className="panel location">Location Section</section>
        	
        	</div>
        );
    }
});