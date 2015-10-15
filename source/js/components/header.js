/**
 * Header section
 */
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavBrand = Bootstrap.NavBrand;
var NavItem = Bootstrap.NavItem;
var CollapsibleNav = Bootstrap.CollapsibleNav;
var Header = React.createClass({
    onClick: function (target, e) {
        console.log(target, e);

        $('html, body').animate({
            scrollTop: $(e.target.hash).position().top
        }, 800);

        e.preventDefault();
    },
    render: function () {
        return (
            <header className="col-xs-12 col-sm-12 col-md-12 menu">
                <Navbar toggleNavKey={0}>
                    <NavBrand>
                        <a href="#home" data-url='home' onClick={this.onClick.bind(null, 'target')} value='Home'>
                            <div className="logo"></div>
                        </a>
                    </NavBrand>
                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                        <Nav navbar right>
                            <NavItem eventKey={2} href="#subscribe" data-url='subscribe'
                                     onClick={this.onClick.bind(null, 'target')} value='Subscribe'>Subscribe</NavItem>
                            <NavItem eventKey={2} href="#schedule" data-url='schedule'
                                     onClick={this.onClick.bind(null, 'target')} value='Schedule'>Schedule</NavItem>
                            <NavItem eventKey={2} href="#speakers" data-url='speakers'
                                     onClick={this.onClick.bind(null, 'target')} value='Speakers'>Speakers</NavItem>
                            <NavItem eventKey={2} href="#sponsors" data-url='sponsors'
                                     onClick={this.onClick.bind(null, 'target')} value='Sponsors'>Sponsors</NavItem>
                            <NavItem eventKey={2} href="#location" data-url='location'
                                     onClick={this.onClick.bind(null, 'target')} value='Location'>Location</NavItem>
                            <NavItem eventKey={1} href="#contact" data-url='contact'
                                     onClick={this.onClick.bind(null, 'target')} value='Contact'>Contact</NavItem>
                        </Nav>
                    </CollapsibleNav>
                </Navbar>
            </header>
        );
    }
});
