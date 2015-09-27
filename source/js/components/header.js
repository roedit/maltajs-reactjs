
/**
 * Header section
 */
var Header = React.createClass({
	onClick: function(target, e){
    	console.log(target, e);
    
    	$('html, body').animate({
    		scrollTop : $(e.target.hash).position().top
    	  }, 800);
    	
    	e.preventDefault();
  	},
    render: function(){
        return (
            <header className="header col-xs-12 col-sm-12 col-md-12 header-row">
            	<nav id='menu' role="navigation">
	    			<div className="logo"></div>
		        	
		        	<ul className="menu"> 
		        		<li><a href="#home" data-url='header' onClick={this.onClick.bind(null, 'target')} value='Home section'>Home</a></li>
	                    <li><a href="#subscribe" data-url='subscribe' onClick={this.onClick.bind(null, 'target')} value='Subscribe'>Subscribe</a></li>
		        		<li><a href="#schedule" data-url='schedule' onClick={this.onClick.bind(null, 'target')} value='Schedule'>Schedule</a></li>
						<li><a href="#speakers" data-url='speakers' onClick={this.onClick.bind(null, 'target')} value='Speakers'>Speakers</a></li>
						<li><a href="#sponsors" data-url='sponsors' onClick={this.onClick.bind(null, 'target')} value='Sponsors'>Sponsors</a></li>
		        		<li><a href="#location" data-url='location' onClick={this.onClick.bind(null, 'target')} value='Location'>Location</a></li>
		        	</ul>
	        	</nav>
		    </header>
        );
    }
});
