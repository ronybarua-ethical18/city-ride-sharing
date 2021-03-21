import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './RideDetails.css';
import serviceData from '../../FakeData/fakeData.json';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
const RideDetails = () => {
    // list of states 
    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('');
    const [date, setDate] = useState('');
    const [result, setResult] = useState(false);

    const { vehicleId } = useParams();

    const vehicles = serviceData.find(vehicle => vehicle.id === vehicleId);
    const { image, name, seat, cost } = vehicles;

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
                                <p className="mr-auto">
                                    <FontAwesomeIcon className="mr-2" 
                                    icon={faUsers}></FontAwesomeIcon>{seat}
                                </p>
                                <p>${cost}</p>
                            </div>
                            <div className="vehicle-details p-2 mb-2 bg-white d-flex justify-content-center align-items-center">
                                <img src={image} className="vehicles-image mr-auto" alt="" />
                                <p className="mr-auto">{name}</p>
                                <p className="mr-auto">
                                    <FontAwesomeIcon className="mr-2" 
                                    icon={faUsers}></FontAwesomeIcon>{seat}
                                </p>
                                <p>${cost}</p>
                            </div>
                            <div className="vehicle-details p-2 mb-2 bg-white d-flex justify-content-center align-items-center">
                                <img src={image} className="vehicles-image mr-auto" alt="" />
                                <p className="mr-auto">{name}</p>
                                <p className="mr-auto">
                                    <FontAwesomeIcon className="mr-2" 
                                    icon={faUsers}></FontAwesomeIcon>{seat}
                                </p>
                                <p>${cost}</p>
                            </div>
                        </div>}
                    </div>
                </Col>
                <Col md={8} className="p-4">
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default RideDetails;