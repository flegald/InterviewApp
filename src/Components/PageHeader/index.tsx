import React from "react";
import {Navbar, Container} from "react-bootstrap";

const PageHeader = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{marginBottom: '20px'}}>
            <Container>
                <Navbar.Brand href="#">What is the temperature?</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default PageHeader;