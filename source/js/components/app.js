/**
 * Main page content render
 */
var App = React.createClass({
    // React module
    render: function() {
        return (
        	<div id="container">
                <Header />
        		<section id="home" className="row-fluid home">
                    <h2>MaltaJS conference</h2>
                    <h3>Javascript focused community in Malta</h3>
                    <p>
                        7th of NOVEMBER | BETSSON EXPERIENCE CENTER | BY
                        <a target="_blank" href="http://about.betsson.com/en/company-information/">
                            <img className="betssonHeader" src="/client/images/betsson_logo.png"></img>
                        </a>
                    </p>
                </section>

                <Subscribe />

        		<section id="schedule" className="row schedule">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Schedule</h4>
                    </div>
                    <Schedule />
                </section>

                <Speakers />
        	    <Sponsors />
                <Contact />

                <section id="location" className="row location">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 textCenter">
                        <h4>Location</h4>
                    </div>
                    <Location />
                </section>
                <Footer />
        	</div>
        );
    }
});