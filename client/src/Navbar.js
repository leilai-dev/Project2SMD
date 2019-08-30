import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
            isLoggedOut: false,
        };
    }
    componentDidMount() {

        console.log("navbar islogin",this.props.isLoggedIn);
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.props.isLoggedIn);
    }

    logout = async () => {
        const res = await axios.get('/mongo/logout');
        if (res.status === 200) {
        console.log("loggedIn", this.props.isLoggedIn);
            console.log("clear");
            this.setState({
                isLoggedOut : true
            })
            this.props.logoutCallback(false);
        }
    }

    render() {
        console.log("navbar render", this.props.isLoggedIn);
        let a = this.props.isLoggedIn;
        return (
            <div className="navi">
                {this.state.isLoggedOut ?
                <Redirect
                 to={{
                     pathname: "/",
                     state: { from: this.props.location }
                 }}
                />
                 : <></>
                }
                <Navbar className="navbar1" light expand="md">
                    {/* <NavbarBrand href="/">세모:닭</NavbarBrand> */}
                    <NavbarBrand><Link to='/'>세모:닭</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                a ? (
                                    <>  
                                        <Redirect
                                            to={{
                                                pathname: "/",
                                                state: { from: this.props.location }
                                            }}
                                        />     
                                        <NavItem>
                                           <NavLink><a onClick={this.logout}>Log out</a></NavLink>
                                        </NavItem>
                                        <UncontrolledDropdown nav inNavbar>

                                            <DropdownToggle nav caret>내 정보</DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem><Link to="/main/myinfo">회원 정보 확인</Link></DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem><Link to="/main/leave">회원 탈퇴</Link></DropdownItem>
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