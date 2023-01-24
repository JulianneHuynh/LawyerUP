import Image from "react-bootstrap/Image";

function MessageCard(
    {
        image,
        name,
        message,
        newness
    }
) {
    

    if (newness) {
        return (
            <>
                <Image className="profile-thumbnail" src={image} fluid="true" />
                <h1 className="message-name-new">{name}</h1>
                <p className="new-message">{message}</p>
            </>
        )
    } else {
        return (
            <>
                <Image className="profile-thumbnail" src={image} fluid="true" />
                <h1 className="message-name">{name}</h1>
                <p>{message}</p>
            </>
        );
    };
};

export default MessageCard;