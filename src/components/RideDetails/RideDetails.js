import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './RideDetails.css';
import Map from './Map.png';
import serviceData from '../../FakeData/fakeData.json';
import { useParams } from 'react-router';
const RideDetails = () => {
    const {id} = useParams();
    const vehicles = serviceData.find(vehicle => vehicle.id === id);
    return (
        <Container>
            <Row className="mt-4 mb-4">
                <Col md={4} className="bg-light p-4 text-left">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pick from</Form.Label>
                            <Form.Control type="text" placeholder="Pick from" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Pick to</Form.Label>
                            <Form.Control type="text" placeholder="Pick to" />
                        </Form.Group>
                        <Button variant="primary" className="w-100" type="submit">
                            Search
                        </Button>
                        <p>ID :</p>
                            
                    </Form>
                </Col>
                <Col md={8}>
                    <img src={Map} className="img-fluid" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default RideDetails;