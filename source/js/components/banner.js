/**
 * Banner - This is the main content for the banner
 */
var Banner = React.createClass({
    render: function(){
        return (
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
        );
    }
});