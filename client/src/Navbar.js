import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.props.isLoggedIn);
    }
    render() {
        // const { isLoggedin } = this.props;
        return (
            <div className="navi">
                <Navbar className="navbar1" light expand="md">
                    <NavbarBrand href="/">세모:닭</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <Redirect to={{
                                pathname: "/",
                                state: { from: this.props.location }
                            }} /> */}
                            {
                                this.props.isLoggedIn ? (
                                    <>
                                    <NavItem>
                                    <NavLink><Link to="/main/logout">Log out</Link></NavLink>
                                </NavItem>
                                    <UncontrolledDropdown nav inNavbar>

                                        <DropdownToggle nav caret>내 정보</DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem><Link to="/main/mylist">나의 관심 상품</Link></DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem><Link to="/main/myinfo">회원 정보 수정</Link></DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    </>
                                ) : (
                                        <>
                                            <NavItem>
                                                <NavLink><Link to="/main/login">Log In</Link></NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink><Link to="/main/signup">Sign Up</Link></NavLink>
                                            </NavItem>
                                        </>
                                    )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}