import React, { Component } from 'react';
import './Basicinfo.css';
import { Toast, ToastBody, ToastHeader, Button   } from 'reactstrap';


class Nutrition extends Component {

  render() {
    return (
      <div>

          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast className="basic">

            <ToastHeader>
                상품 기본 정보
              </ToastHeader>

              <ToastBody>
                  <div className="img">
                  {/* <%img src =%> {this.props.data.imgUrl}<% /> %> */}
                  </div>


                  <div className="title">
                       <h2><b>여기에 this.props.data.name 삽입 </b></h2>
                       {/* <p> {this.props.data.name}</p> */}
                  </div>

                  <br />

                  <div className="price">
                      <h3><b>최저: 네이버에서 가져오기</b></h3>
                  </div>
                  <br />
                  <div className="star"></div>
                  <br />

                  <div className="button">
                  <Button color="warning">관심상품</Button>{' '}  &nbsp; &nbsp;  &nbsp;  &nbsp; 
                  <Button color="success">최저가 구매하기</Button>{' '}
                  </div>

              </ToastBody>
            </Toast>
          </div>

      </div >
    );
  }
};

export default Nutrition;