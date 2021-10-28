import React, { useEffect, useState } from 'react';
import Event from '../Event/Event'
const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data.events)
            })
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-lg-4 row-cols-2 g-2">
                {
                    events?.map(event => <Event
                        key={event._id}
                        event={event}
                    ></Event>)
                }
            </div>

        </div>
    );
};

export default Events;