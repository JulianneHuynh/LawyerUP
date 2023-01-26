import { useState } from "react";

function Marker({
    map,
    lawyers,
    setSelectedLawyer,
    apiKey
}) {

    const [lawyerCoords, setLawyerCoords] = useState({});
    
    function format(string) {
        let forURL = string.split(" ");
        let formatted = forURL.join("+");
        
        console.log(formatted);
        fetchCoords(formatted);
    };

    function fetchCoords(formatted) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formatted}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            setLawyerCoords(data["results"][0]["geometry"]["location"]);
        });
    };

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
            position: lawyerCoords,
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