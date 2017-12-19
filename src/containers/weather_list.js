import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => {
            //kelvin to fahrenheit
            return ( ( (+weather.main.temp) * (9 / 5) ) - 459.67 );
        });
        console.log(temps);
        const pressures = cityData.list.map( weather => {
            // hPa(millibar or hectopascal) to inHg (inches of of mercury)
            //return ( (+weather.main.pressure) * 0.02953 );
            return weather.main.pressure
        });
        console.log(pressures);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="F" /></td>
                <td><Chart data={pressures} color="green" units="hPA" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather } ) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)