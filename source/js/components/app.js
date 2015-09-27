
var App = React.createClass({
    // React module
 
    render: function() {
        return (
        	<div id="container">
                <Header />
        		<section id="home" className="row home">
                    <h2>MaltaJS conference</h2>
                    <h3>Javascript focused community in Malta</h3>
                </section>
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