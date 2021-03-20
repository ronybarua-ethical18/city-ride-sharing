import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Vehicles.css'
const Vehicles = (props) => {
    const { id, name, image, cost } = props.vehicle;
    const history = useHistory();
    const handleClick = (id) =>{
        const url = `vehicles/${id}`;
        history.push(url);
    }
    return (

        <Container>
            <Card onClick={() => handleClick(id)} style={{ width: '18rem' }} id="card-bg" className=" w-100 shadow p-3 mb-4">
                <Card.Img variant="top" className="vehicle-image" src={image} />
                <Card.Body>
                    <Card.Title><b>{name}</b></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title
                    </Card.Text>
                    <Card.Text>
                      <b>Cost: {cost}</b>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Vehicles;