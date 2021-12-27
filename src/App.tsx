import React, {useState} from 'react';
import './App.css';
import PageHeader from "./Components/PageHeader";
import {Col, Container, Row} from "react-bootstrap";
import InputForm from "./Components/Form";
import WeatherDisplay from "./Components/WeatherDisplay";
import API from "./Service";
import {WeatherInfo} from "./WeatherInfo";


function App() {
    const [lat, setLat] = useState<string>();
    const [lng, setLng] = useState<string>();
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();

    const updateWeather = async () => {
        if (lat && lng) {
            const weatherData = await API.fetchWeather(lat, lng);
            setWeatherInfo(weatherData.data)
        }
    }

  return (
    <div className="App">
        <PageHeader />
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <InputForm
                        lat={lat}
                        lng={lng}
                        updateLat={setLat}
                        updateLng={setLng}
                        onSubmit={updateWeather}
                    />
                </Col>
                <Col>
                    <WeatherDisplay weatherInfo={weatherInfo} />
                </Col>

            </Row>
        </Container>
    </div>
  );
}

export default App;
