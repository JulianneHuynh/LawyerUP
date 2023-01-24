import { ReactComponent as Briefcase } from "../assets/briefcase.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

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
                    <Offcanvas.Title>My Messages</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Your messages will go here. 
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MessagesSide;