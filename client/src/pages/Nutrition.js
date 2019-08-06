import React, { Component } from 'react';
import './Nutrition.css';

class Nutrition extends Component {

  render() {
    return (
      <div>

        <h2>영양 구성표</h2>

        <div className="NutriTable">

          <tr>
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
          </tr>

        </div>


      </div >
    );
  }
};

export default Nutrition;