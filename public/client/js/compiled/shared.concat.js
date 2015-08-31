/** @jsx react.dom */
// Flux cart view
var App = React.createClass({
    // Render cart view
    render: function() {
        return (
            <div>Test from the best</div>
        );
    }
});

var mainContainer = document.getElementById('main');
React.render(<App />, mainContainer);