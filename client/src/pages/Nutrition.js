import React, { Component } from 'react';
import './Nutrition.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class Nutrition extends Component {

  render() {
    return (
      <div>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>

              <ToastHeader>
                영양 구성표
              </ToastHeader>

              <ToastBody>

              <div className="NutriTable">
              {/* <tr>
                <th>열량(g)</th>
                <th>탄수화물(g)</th>
                <th>단백질(g)</th>
                <th>지방(g)</th>
                <th>나트륨(mg)</th>
                <th>콜레스트롤(mg)</th>
              </tr>

              <tr>
                <td><s>{this.props.data.kcal}</s></td>
                <td>{this.props.data.carbo}</td>
                <td>{this.props.data.protein}</td>
                <td>{this.props.data.fat}</td>
                <td>{this.props.data.natrium}</td>
                <td>{this.props.data.choles}</td>
              </tr> */}

              </div>
              </ToastBody>
            </Toast>
          </div>

      </div >
    );
  }
};

export default Nutrition;