import { useState } from "react";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AppointmentCard({
    image,
    name,
    date,
    time,
    location
}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Image className="profile-thumbnail" src={image} fluid="true"/>
            <h1 className="message-name">{name}</h1>
            <p>{date} at {time}</p>
            <p>{location}</p>
            <Button variant="outline-danger" onClick={handleShow}>Cancel</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Cancellation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to cancel your appointment with {name}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Keep Appointment
                    </Button>
                    <Button variant="primary">
                        Yes, Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AppointmentCard;