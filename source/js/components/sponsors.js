
/**
 * Header section
 */
var SponsorsSection = React.createClass({
    render: function(){
        return (
            <section id="sponsors" className="row-fluid sponsors text-center">
            	<h3>Partener with MaltaJs 2015</h3>
            	<h6>Find out more about the opportunities to become one of the sponsors of MaltaJs in 2015.</h6>
            	<a href="mailto:contact@maltajs.com" className="sponsor_button" data-text="GET IN TOUCH"><span>GET IN TOUCH</span></a>
            	<div className='sponsors-logo row'>
            		<p>Sponsors</p>
	            	<a href="https://www.betsson.com/" target="_blank"> <img src="/client/images/sponsors/betsafe.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="/client/images/sponsors/casinoeuro.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="/client/images/sponsors/mrsmithcasino.jpg" /> </a>
	            	<a href="https://www.betsson.com/" target="_blank"><img src="/client/images/sponsors/sportsbook.jpg" /> </a>
            	</div>
            </section>
        );
    }
});
