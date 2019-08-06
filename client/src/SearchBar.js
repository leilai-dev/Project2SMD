import React, { Component } from 'react';
import {
    Navbar, InputGroup, InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input, Button, Dropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }
    handleClick = (e) => {
        console.log(e)
        console.log(e.target);
        // this.setState({
        // });
    }
    render() {
        return (
            <Navbar className="navbar2">
                <InputGroup>
                    <InputGroupButtonDropdown className="tog" addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                        <DropdownToggle split outline>전체 카테고리</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header >카테고리 선택</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>소세지</DropdownItem>
                            <DropdownItem>스테이크</DropdownItem>
                            <DropdownItem>슬라이스</DropdownItem>
                            <DropdownItem>육포</DropdownItem>
                            <DropdownItem>큐브</DropdownItem>
                            <DropdownItem>볼</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>

                    <Input placeholder="브랜드명 또는 제품명을 입력해주세요." />
                    
                    <InputGroupAddon className="but" addonType="append"><Button color="secondary">검색</Button></InputGroupAddon>
                </InputGroup>
                </Navbar>
        );
    }
}

export default SearchBar;