import { ReactComponent as TieIcon } from "../assets/tie-icon.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Appointments from "./Appointments";
import { Link } from "react-router-dom";

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
                    <Link to="/account-center">
                        <Offcanvas.Title>My Account</Offcanvas.Title>
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h5>Appointments</h5>
                    <Appointments />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default AccountSide;