import React from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/goolge_map";

class WeatherList extends React.Component {
    renderWeather(cityDate) {
        const name = cityDate.city.name;
        const temps = cityDate.list.map(weather=>weather.main.temp);
        const pressure = cityDate.list.map(weather=>weather.main.pressure);
        const humidities = cityDate.list.map(weather=>weather.main.humidity);
        const {lon, lat} = cityDate.city.coord;
        
        
        console.log(lon);
        console.log(lat);
        
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                {/*<td>{name}</td>*/}
                <td><Chart data={temps} colors="orange" units="K"/></td>
                <td><Chart data={pressure} colors="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        );
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);