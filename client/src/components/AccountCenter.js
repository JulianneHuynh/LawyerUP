import Image from "react-bootstrap/Image";

function AccountCenter() {
    
    const user = {
        "email": "nicholaskadenip@gmail.com",
        "legal_name": "Nicholas Nip",
        "profile_picture": "https://media.licdn.com/dms/image/C5603AQGcEmJeKNADfg/profile-displayphoto-shrink_800_800/0/1557177089633?e=1680134400&v=beta&t=RpZ7gbNdQoC1yCNCtG0xI_IDC48WD2dNrRtlGS4GYKc",
        "location": "New York, NY"
    }
    
    return (
        <>
            <img src={user.profile_picture} className="account-center-image"/>
            <h1>{user.legal_name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.location}</h2>
        </>
    );
};

export default AccountCenter;