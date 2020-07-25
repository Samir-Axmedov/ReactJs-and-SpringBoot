import React from 'react';
import { withRouter} from "react-router";

//const { cityName } = this.props.match.parmas;
const API_WEATHERDETAIL = 'http://localhost:8888/weather-service/weathers?cityName=Heunghae';

class WeatherDetail extends React.Component {
    state = {
        main: '',
        description: '',
        temp : 0.0
    };
    componentDidMount(){
        console.log("WeatherDetail component");

        const WEATHERData = fetch(API_WEATHERDETAIL)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            main: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp
          });
        });
        console.log(WEATHERData);
    }
    render() {
        return (
            <div>
                <h1>main : {this.state.main}</h1>
                <h1>description : {this.state.description}</h1>
                <h1>temp: {this.state.temp}</h1>
                <p>Here is front page.!</p>
            </div>
        );
    }
}

export default withRouter(WeatherDetail);

