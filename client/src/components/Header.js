import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import SignupApp from "./SignupApp";

import UserWidget from "./UserWidget";

function Header() {
    return (
        <div id="header">
            <div id="logo-container">
                <Link to="/">
                    <Image id="logo" src={require('../assets/lawyer-up-logo.png')}/>
                </Link>
                <div> 
                    <UserWidget/>
                </div>
                    <SignupApp/>
             </div>
       </div>
    );
};

export default Header;