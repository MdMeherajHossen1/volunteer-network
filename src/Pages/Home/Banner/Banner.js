
import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className=" container d-flex flex-column justify-content-center align-items-center py-5">
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <InputGroup className="mb-3 w-50">
                <FormControl
                    placeholder="Search....."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </div>
    );
};

export default Banner;