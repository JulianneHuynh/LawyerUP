import { ReactComponent as TieIcon } from "../assets/tie-icon.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function AccountSide() {
    const [showAccountInfo, setShowAccountInfo] = useState(false);

    function handleShowAccountInfo() {
        setShowAccountInfo(true);
    };

    function handleCloseAccountInfo() {
        setShowAccountInfo(false);
    };

    return (
        <>
            <TieIcon onClick={() => handleShowAccountInfo()} className="profile-thumbnail" />

            <Offcanvas placement={"end"} show={showAccountInfo} onHide={handleCloseAccountInfo}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Your account information will go here.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default AccountSide;