import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: this.props.isLoggedIn,
        };
    }
    // componentDidUpdate() {
    //     console.log(this.props);
    //     console.log("navbar", this.props.isLoggedIn)
    //     // this.setState({
    //     //     isLoggedIn: this.props.isLoggedIn
    //     // })
    // }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { isLoggedin } = this.state;
        return (
            <div className="navi">
                <Navbar className="navbar1"   light expand="md">
                    <NavbarBrand href="/">세모:닭</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                isLoggedin ? (
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>내 정보</DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem><Link to="/main/mylist">나의 관심 상품</Link></DropdownItem>
                                            <DropdownItem divider />
                                            
                                            <DropdownItem><Link to="/main/myinfo">회원 정보 수정</Link></DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                ) : (
                                    <>
                                    <NavItem>
                                        <NavLink><Link to="/main/login">Log In</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link to="/main/signin">Sign Up</Link></NavLink>
                                    </NavItem>
                                    </>
                                )
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}