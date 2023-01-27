import { ReactComponent as Briefcase } from "../assets/briefcase.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Messages from "./Messages";
import { Link } from "react-router-dom";
import Appointments from "./Appointments";

function MessagesSide() {

    const [showMessages, setShowMessages] = useState(false);
    
    function handleCloseMessages() { 
        setShowMessages(false);
    };

    function handleShowMessages() { 
        setShowMessages(true);
    };
    

    return (
        <>
        
            <Briefcase onClick={() => handleShowMessages()} id="briefcase"/>

            <Offcanvas placement={"end"} show={showMessages} onHide={handleCloseMessages}>
                <Offcanvas.Header closeButton>
                    <Link to="/messaging-center" onClick={handleCloseMessages}>
                        <Offcanvas.Title>My Messages</Offcanvas.Title>
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Messages />
                </Offcanvas.Body>

                <Offcanvas.Header>
                    <Link to="/appointment-center" onClick={handleCloseMessages}>
                        <Offcanvas.Title>My Appointments</Offcanvas.Title>
                    </Link>
                </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Appointments />
                    </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};

export default MessagesSide;