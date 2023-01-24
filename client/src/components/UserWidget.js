import Image from "react-bootstrap/Image";
import { ReactComponent as TieIcon } from "../assets/tie-icon.svg";
import { ReactComponent as Briefcase } from "../assets/briefcase.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function UserWidget() {
    const [showMessages, setShowMessages] = useState(false);
    const [showAccountInfo, setShowAccountInfo] = useState(false);

    function handleCloseMessages() { 
        setShowMessages(false);
    };

    function handleShowMessages() { 
        setShowMessages(true);
    };

    function handleShowAccountInfo() {
        setShowAccountInfo(true);
    };

    function handleCloseAccountInfo() {
        setShowAccountInfo(false);
    };

    return (
        <div id="user-widget">
            <Briefcase onClick={() => handleShowMessages()} id="briefcase"/>
            
            <TieIcon onClick={() => handleShowAccountInfo()} className="profile-thumbnail" />

            <Offcanvas placement={"end"} show={showMessages} onHide={handleCloseMessages}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Messages</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Your messages will go here. 
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement={"end"} show={showAccountInfo} onHide={handleCloseAccountInfo}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Your account information will go here.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default UserWidget;