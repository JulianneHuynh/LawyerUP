import MessageCard from "./MessageCard";

function Messages() {

    let messages = [
        {
            "profile_picture": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/9166/square_thumb%402x.jpg",
            "name": "Idris Elba",
            "body": "Hello! I will be your lawyer for today.",
            "is_new?": true,
            "sender_id": 2
        },

        {
            "profile_picture": "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_541,w_541,x_1455,y_174/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1608083385/2020-10-06T140912Z_195220941_RC22DJ9YC8EQ_RTRMADP_3_FILM-MISSIONIMPOSSIBLE-ROME_ruc5d7",
            "name": "Tom Cruise",
            "body": "Unfortunately, I cannot serve as your lawyer, as I am filming Mission Impossible XX.",
            "is_new?": false,
            "sender_id": 1
        }
    ];

    const renderMessageCards = messages.map((message, i) => {
        return (
            <MessageCard
                key={i} 
                image={message.profile_picture}
                name={message.name}
                message={message.body}
                newness={message["is_new?"]}
            />
        );
    });

    return (
        <>
            {renderMessageCards}
        </>
    )
};

export default Messages; 