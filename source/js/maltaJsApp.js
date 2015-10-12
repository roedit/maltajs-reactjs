/**
 * Main page content render
 */
var App = React.createClass({
    // React module
    render: function() {
        return (
            <div id="container">
                <Header/>
                <Banner/>
                <Subscribe/>
                <Schedule/>
                <Speakers/>
                <Sponsors/>
                <Contact/>
                <Location/>
                <Footer/>
            </div>
        );
    }
});
/**
 * React render the main content
 * @type {Element}
 */
var mainContainer = document.getElementById('main');
React.render(<App/>, mainContainer);

