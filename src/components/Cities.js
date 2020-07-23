import React from 'react';
import CityList from "./CityList"

const API_CITIES = 'http://localhost:8888/weather-service/available-cities';

class Cities extends React.Component {
    state = {
      cities: [],
    };
    componentDidMount() {
      console.log("City component");
      console.log(this.state.cities);
      const { cities } = this.state;
      console.log(cities);
      const citiesData = fetch(API_CITIES)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            cities: data,
          });
        });
      console.log(citiesData);
    }
    render() {
      const { cities } = this.state;
      return (
        <div>
          <h1>Cities</h1>
          <p>City list</p>
          <CityList cities={cities} />
        </div>
      );
    }
  }
  export default Cities;