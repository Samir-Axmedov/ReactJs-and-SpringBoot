import React from 'react';

class WeatherDetail extends React.Component {
    state = {
        cityName: '',
        main: '',
        description: '',
        temp : 0.0
    };
    componentDidMount(){
        const { cityName } = this.props.match.params;
        const API_WEATHERDETAIL = 'http://localhost:8888/weather-service/weathers?cityName='+cityName;

        console.log("WeatherDetail component");

        const WEATHERData = fetch(API_WEATHERDETAIL)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            cityName: cityName,
            main: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp
          });
        })
        .catch(err=> console.log(err));
        
        console.log(WEATHERData);
    }
    render() {
        return (
            <div>
                <h1>cityName : {this.state.cityName}</h1>
                <h1>main : {this.state.main}</h1>
                <h1>description : {this.state.description}</h1>
                <h1>temp: {(this.state.temp - 273.15).toFixed(2)}</h1>
            </div>
        );
    }
}

export default WeatherDetail;

