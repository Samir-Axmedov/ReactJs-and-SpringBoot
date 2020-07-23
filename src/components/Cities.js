import React from 'react';
class Cities extends React.Component {
  componentDidMount() {
    console.log('City component');
  }
  //class 내부에는 render가 반드시 존재해야 한다.
  render() {
    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>
      </div>
    );
  }
}
export default Cities;