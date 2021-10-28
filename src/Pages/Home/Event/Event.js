import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({ event }) => {
    const { img, name } = event;
    const backgroundColor = ['bg-primary', 'bg-info', 'bg-success', 'bg-warning', 'bg-dark']
    const randombg = backgroundColor[Math.ceil(Math.random() * 10)]
    return (
        <div>
            <div className="col">


                <Card

                    style={{ width: '17rem', height: "25rem" }}
                    className="mb-2 text-center position-relative"
                >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className={`${randombg}`}>
                        <Card.Title> {name} </Card.Title>

                    </Card.Body>
                </Card>


            </div>

            {/* <img src={img} className="img-fluid" alt="" />
                <div className="text-center bg-primary h-50 p-4">
                    <h4> {name}</h4>
                </div> */}
        </div>
    );
};

export default Event;