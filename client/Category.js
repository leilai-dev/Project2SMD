import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Home.css'


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleNavbar =  this.toggleNavbar.bind(this);
        this.state = {
            collapse: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">세모닭 카테고리</NavbarBrand>
                    <NavbarToggle onclick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navebar>
                        <Nav navbar>  
                        
                            <NavItem>
                                <NavLink href="/components/">볼</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/components/">소세지</NavLink>
                            <NavItem>

                            <NavItem>
                                <NavLink href="/components/">스테이크</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/components/">슬라이스</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/components/">육포</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/components/">큐브</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/components/">훈제</NavLink>
                            </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}


export default Category;