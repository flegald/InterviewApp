import React from "react";
import {WeatherInfo} from "../../WeatherInfo";
import {Container} from "react-bootstrap";

interface Props {
    weatherInfo: WeatherInfo | undefined
}

const containerStyle = {
    height: '100%',
    backgroundColor: '#B4B9BD',
    paddingTop: '5%',
    fontSize: '24px'
}

const WeatherDisplay = (props: Props) => {
    const {weatherInfo} = props;
    return (
        <Container style={containerStyle}>
            {
                weatherInfo ?
                    <p>Temp: {weatherInfo?.current.temp}°C</p>
                    :
                    <p>Submit a lat/long to get temperature</p>
            }
        </Container>
    )
}

export default WeatherDisplay;