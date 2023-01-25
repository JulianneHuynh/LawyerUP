import { useState } from "react";

function Marker({
    map
}) {

    const [selectedLawyer, setSelectedLawyer] = useState(null);

    const lawyers = [
        {
            "id": 2,
            "location": { "lat": 40.747070, "lng": -73.756290 },
            "name": "Idris Elba",
            "profile_picture": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/9166/square_thumb%402x.jpg",
            "specialty": "Real Estate Law"
        }
    ];

    const renderMarkers = lawyers.map((lawyer) => {
        const content = 
            `
            <div class="info-window">
                <img src=${lawyer.profile_picture} class="profile-thumbnail"/>
                <h5>${lawyer.name}</h5>
                <p>Specialty: ${lawyer.specialty}<p>
                <a href="/lawyer">Book Consultation</a>
            </div>
            `

        const marker = new window.google.maps.Marker({
            position: lawyer.location,
            map: map
        });

        const infoWindow = new window.google.maps.InfoWindow({
            content: content,
            ariaLabel: `${lawyer.name}`
        });

        marker.addListener("click", () => {
            infoWindow.open({
              anchor: marker,
              map,
            });
            setSelectedLawyer(lawyer.id);
        });
    });

    return (
        <>
            {renderMarkers}
        </>
    );

};

export default Marker;