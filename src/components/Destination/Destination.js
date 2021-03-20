import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Destination.css';
import serviceData from '../../FakeData/fakeData.json';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { GoogleMap } from './GoogleMap';
const Destination = () => {
    // list of states 
    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('');
    const [date, setDate] = useState('');
    const [result, setResult] = useState(false);

    const { vehicleId } = useParams();

    const vehicles = serviceData.find(vehicle => vehicle.id === vehicleId);
    const { image, name, cost } = vehicles;

    return (
        <Container>
            <Row className="mt-4 mb-4">
                <Col md={4} className=" p-4 text-left ">
                    <div className="destination-card shadow p-3">
                        {!result && <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Pick from</Form.Label>
                                <Form.Control onChange={event => setPickFrom(event.target.value)} type="text" placeholder="Pick from" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Pick to</Form.Label>
                                <Form.Control onChange={event => setPickTo(event.target.value)} type="text" placeholder="Pick to" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Date</Form.Label>
                                <Form.Control onChange={event => setDate(event.target.value)} type="date" placeholder="Date" />
                            </Form.Group>
                            <Button className="main-button" onClick={() => setResult(!result)} variant="primary" className="dest-card w-100">
                                Search
                            </Button>
                        </Form>}
                        {result && <div className="search-result w-100">
                            <div className="destination dest-card p-3">
                                <p className="text-white"><b className="mr-3">From :</b>{pickFrom}</p>
                                <p className="text-white"><b className="mr-3">To :</b>{pickTo}</p>
                                <p className="text-white"><b className="mr-3">Date :</b>{date}</p>
                            </div>
                            <div className="vehicle-details p-2 mb-2 bg-white d-flex justify-content-center align-items-center">
                                <img src={image} className="vehicles-image mr-auto" alt="" />
                                <p className="mr-auto">{name}</p>
                                <p>${cost}</p>
                            </div>
                            <div className="vehicle-details p-2 mb-2 bg-white d-flex justify-content-center align-items-center">
                                <img src={image} className="vehicles-image mr-auto" alt="" />
                                <p className="mr-auto">{name}</p>
                                <p>${cost}</p>
                            </div>
                            <div className="vehicle-details p-2 mb-2 bg-white d-flex justify-content-center align-items-center">
                                <img src={image} className="vehicles-image mr-auto" alt="" />
                                <p className="mr-auto">{name}</p>
                                <p>${cost}</p>
                            </div>
                        </div>}
                    </div>
                </Col>
                <Col md={8}>
                   <GoogleMap></GoogleMap>
                </Col>
            </Row>
        </Container>
    );
};


export default Destination;