import React, {useEffect} from "react";
import {Form, Col, Row, Container, Button} from "react-bootstrap";

interface Props {
    lat: string | undefined,
    lng: string | undefined,
    updateLat(arg0: string): void,
    updateLng(arg0: string): void,
    onSubmit(): Promise<void>
}

const InputForm = (props: Props) => {
    const { lat, lng, updateLng, updateLat, onSubmit} = props;

    useEffect(() => {
        // Attempt to obtain the user's lat and long on page load
        const onPositionUpdate = (position: GeolocationPosition) => {
            updateLat(position.coords.latitude.toString());
            updateLng(position.coords.longitude.toString());
        }

        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(onPositionUpdate);
        else
            alert("navigator.geolocation is not available");
    }, [updateLat, updateLng])

    return (
        <Container>
            <Row style={{marginBottom: '10px'}}>
                <Col>
                    <Form.Label htmlFor="latitude"><strong>Latitude</strong></Form.Label>
                    <Form.Control
                        id="latitude"
                        value={lat || ''}
                        onChange={e => updateLat(e.target.value)}
                    />
                </Col>
                <Col>
                    <Form.Label htmlFor="longitude"><strong>Longitude</strong></Form.Label>
                    <Form.Control
                        id="longitude"
                        value={lng || ''}
                        onChange={e => updateLng(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => onSubmit()}>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default InputForm;