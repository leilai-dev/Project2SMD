import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import axios from 'axios';

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

    async logout() {
        console.log(this.props.isLoggedIn);
        const res = await axios.get('/mongo/logout');
    }


  // getItems = async () => {
  //   console.log("did getcha");
  //   return await axios.get("/mongo/itemlist");
  // }

    logout = async () => {
        console.log(this.props.isLoggedIn);
        return await axios.get('/mongo/logout');
    }

    render() {
        return (
            <div className="navi">
                <Navbar className="navbar1" light expand="md">
                    <NavbarBrand href="/">세모:닭</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                this.props.isLoggedIn ? (
                                    <>
                                        <NavItem>
                                            <NavLink><Button onClick={this.logout()}>Log out</Button></NavLink>
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