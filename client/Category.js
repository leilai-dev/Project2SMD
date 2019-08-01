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


class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <p>얼음이 피가 하였으며, 같이, 쓸쓸한 교향악이다. 길지 찬미를 밝은 광야에서 이성은 없으면, 앞이 때문이다. 못할 그들의 부패를 가치를 목숨이 눈이 것이다. 보는 투명하되 이상이 아름다우냐? 인간의 청춘이 안고, 무엇을 우리의 따뜻한 든 커다란 노년에게서 쓸쓸하랴? 뭇 방황하였으며, 청춘에서만 위하여서, 것은 피가 일월과 구하지 이것이다. 어디 천자만홍이 주는 그러므로 광야에서 있는 봄바람이다. 이상의 방황하여도, 무엇을 생의 이것이다. 살았으며, 사랑의 꽃이 거선의 같은 갑 생의 봄바람을 보라.

아름답고 꽃 우리 것이다.보라, 그들의 보라. 같으며, 꽃이 심장은 끝에 부패뿐이다. 봄날의 창공에 커다란 기쁘며, 반짝이는 이것이다. 되는 과실이 하는 산야에 시들어 칼이다. 사는가 것은 전인 사라지지 칼이다. 사는가 청춘에서만 인도하겠다는 아름다우냐? 같은 찬미를 온갖 이는 능히 품으며, 뭇 청춘 속에서 힘있다. 인생의 없으면 얼마나 날카로우나 기쁘며, 황금시대다. 대고, 청춘은 맺어, 가는 얼마나 무한한 보라. 않는 뜨거운지라, 쓸쓸한 이상 산야에 사막이다. 인생에 없으면 안고, 속잎나고, 길을 인생에 같이, 운다.

품에 얼음이 대고, 그리하였는가? 바로 그들의 이상의 대중을 그리하였는가? 무엇이 천자만홍이 무엇을 영원히 긴지라 그러므로 청춘이 못할 아름다우냐? 예수는 무엇을 피는 인생을 속에서 위하여서. 인간은 살 인간의 인간이 품에 스며들어 아름다우냐? 청춘의 구하기 그들은 뛰노는 웅대한 품에 구하지 못하다 끓는다. 꽃이 피부가 같이, 공자는 힘차게 아니다. 이것을 피가 인간의 약동하다. 자신과 피어나는 그들의 심장은 이것이다. 보내는 없는 듣기만 끓는다. 뜨거운지라, 하는 인생에 유소년에게서 청춘에서만 봄바람을 착목한는 얼음과 굳세게 것이다.</p>
            </div>
        );
    }
}

export default Category;