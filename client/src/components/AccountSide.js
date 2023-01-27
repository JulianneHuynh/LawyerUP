import { ReactComponent as TieIcon } from "../assets/tie-icon.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import AccountInfo from "./AccountInfo";
import SignIn from "./SignIn";
import SignupApp from "./SignupApp";
import SignupClient from "./SignupClient";
import SignupLawyer from "./SignupLawyer";

function AccountSide({
    user,
    setUser
}) {
    const [showAccountInfo, setShowAccountInfo] = useState(false);

    function handleShowAccountInfo() {
        setShowAccountInfo(true);
    };

    function handleCloseAccountInfo() {
        setShowAccountInfo(false);
    };


    if (user) {
        if (user.profile_picture) {
            return (
                <>
                    <img src={user.profile_picture} className="profile-thumbnail"/>
                    <Offcanvas placement={"end"} show={showAccountInfo} onHide={handleCloseAccountInfo}>
                        <Offcanvas.Header closeButton>
                            <Link to="/account-center">
                                <Offcanvas.Title>My Account</Offcanvas.Title>
                            </Link>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <AccountInfo 
                                user={user}
                            />
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            )
        } else {
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
                        <AccountInfo 
                            user={user}
                        />
                    </Offcanvas.Body>
                </Offcanvas>
            </>
            )
        };
            
    } else {
        return (
            <>
                <TieIcon onClick={() => handleShowAccountInfo()} className="profile-thumbnail" />
                <Offcanvas placement={"end"} show={showAccountInfo} onHide={handleCloseAccountInfo}>
                    <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Sign In</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <SignIn 
                            user={user}
                            setUser={setUser}
                        />
                        <SignupApp 
                            handleCloseAccountInfo={handleCloseAccountInfo}
                        />
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        )
    };
};

export default AccountSide;