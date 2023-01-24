import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import UserWidget from "./UserWidget";

function Header() {
    return (
        <div id="header">
            <Link to="/">
                <Image id="logo" src={require('../assets/lawyer-up-logo.png')}/>
            </Link>
            <UserWidget />
        </div>
    );
};

export default Header;