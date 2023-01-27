import SearchBar from "./SearchBar";
import Map from "./Map";
import Spinner from "react-bootstrap/Spinner";

import { Wrapper } from "@googlemaps/react-wrapper";

import { useEffect, useState } from "react";

function Home ({
    lawyers,
    setSelectedLawyer,
    user,
    setUser,
    apiKey
}) {

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

            {/* <SignIn 
                user={user}
                setUser={setUser}
            /> */}

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
