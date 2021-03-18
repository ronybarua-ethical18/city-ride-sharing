import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceData from '../../FakeData/fakeData.json';
import Vehicles from '../Vehicles/Vehicles';
import './Home.css';
const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(ServiceData);
    }, [])
    return (
        <div>
            <Container fluid>
                <Row>
                    {
                        vehicles.map(vehicle => {
                            return <Col md={4} sm={6} xs={12}>
                                        <Vehicles vehicle={vehicle}></Vehicles>
                                  </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;