import { useState } from "react";

function Marker({
    map,
    lawyers,
    setSelectedLawyer
}) {

    const [lawyerCoords, setLawyerCoords] = useState({});

    const renderMarkers = lawyers.map((lawyer) => {

        const content = 
            `
            <div class="info-window">
                <img src=${lawyer.profile_picture} class="thumbnail"/>
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
            {console.log(lawyerCoords)}
            {renderMarkers}
        </>
    );

};

export default Marker;