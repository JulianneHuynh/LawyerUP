import SearchBar from "./SearchBar";
import Map from "./Map";
import SpecialtyFilter from "./SpecialtyFilter";
import Spinner from "react-bootstrap/Spinner";
import Marker from "./Marker";

import { Wrapper } from "@googlemaps/react-wrapper";

import { useEffect, useState } from "react";

function Home ({
    lawyers,
    setSelectedLawyer
}) {

    const apiKey = "AIzaSyDqQrYQMcH8E9yBZ5GVMCjLntOyqwb9SnI";
    
    const render = (status) => {
        return (
            <Spinner /> 
        );
    };

    const [map, setMap] = useState(null);
    const [pos, setPos] = useState(undefined);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPos({
                lat: position.coords.latitude,
                lng: position.coords.longitude
        })
            });
    }, []);

    return (
        <>
            <SearchBar 
                apiKey={apiKey}
                setPos={setPos}
            />

            {/* <SpecialtyFilter /> */}

            <Wrapper 
                apiKey={apiKey} 
                render={render}
            >

                <Map 
                    pos={pos}
                    setMap={setMap}
                    map={map}
                    lawyers={lawyers}
                    setSelectedLawyer={setSelectedLawyer}
                    apiKey={apiKey}
                />

            </Wrapper>
        </>
    );
};

export default Home;