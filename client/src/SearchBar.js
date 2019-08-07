import React, { Component } from 'react';
import {
    Navbar,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    FormGroup,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false,
            searchVal: "",
            category: "카테고리 선택",
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
        // console.log(e.target.innerHTML);
        this.setState({
            category: e.target.innerHTML
        });
        console.log(this.state.category);
    }
    updateInput = (event) => {
        this.setState({ searchVal: event.target.value })
        // console.log(this.state.searchVal);
    }

    render() {
        const { searchVal, category } = this.state;
        return (
            <Navbar className="navbar2">
                <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                        <DropdownToggle split outline>{category}</DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem header >카테고리 선택</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>전체</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>소세지</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>스테이크</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>슬라이스</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>육포</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>큐브</DropdownItem>
                            <DropdownItem onClick={this.handleClick}>볼</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>

                    <Input onChange={this.updateInput} placeholder="브랜드명 또는 제품명을 입력해주세요." />

                    <InputGroupAddon addonType="append"><Link to={
                        category == "전체" || category == "카테고리 선택" ? (
                            `/search/${searchVal}`
                        ) : (
                            `/search/${searchVal}?category=${category}`
                        )
                    }><Button>검색</Button></Link></InputGroupAddon>
                </InputGroup>
            </Navbar>
        );
    }
}

export default SearchBar;