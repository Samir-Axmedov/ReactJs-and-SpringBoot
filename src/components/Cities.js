import React from 'react';

const API_CITIES = 'http://localhost:8888/weather-service/available-cities';

class Cities extends React.Component {
  componentDidMount() {
    console.log('City component');

      const cities = fetch(API_CITIES)
          .then(res => res.json())
          .then(data => console.log(data))

    console.log(cities);
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