/**
 * Footer section
 */
var Footer = React.createClass({
    render: function(){
        return (
            <footer className="footer">
                <div className="leftSide">
                    <p>Copyright &#9400; MaltaJs 2015 All Rights Reserved</p>
                </div>
                <div className="rightSide">
                    <p>event by:</p>
                    <a target="_blank" href="http://about.betsson.com/en/company-information/">
                        <img className="betssonFooter" src="/client/images/betsson_logo.png"></img>
                    </a>
                </div>
            </footer>
        );
    }
});
