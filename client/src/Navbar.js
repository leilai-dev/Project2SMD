import React from 'react';
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
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="navi">
                <Navbar   light expand="md">
                    <NavbarBrand href="/">세모:닭</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/main/login/">Log In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/main/signin/">Sign In</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>내 정보</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/main/mylist">나의 관심 상품</DropdownItem>
                                    <DropdownItem divider />
                                    
                                    <DropdownItem href="/main/myinfo">회원 정보 수정</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}