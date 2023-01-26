import SearchBar from "./SearchBar";
import Map from "./Map";
import SpecialtyFilter from "./SpecialtyFilter";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { useEffect, useState } from "react";

function Home () {

    const render = (status: Status) => {
        return <h1>{status}</h1>
    };

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
            <SearchBar />
            <SpecialtyFilter />
            <Wrapper apiKey={"AIzaSyDqQrYQMcH8E9yBZ5GVMCjLntOyqwb9SnI"} render={render}>
                <Map 
                    pos={pos}
                />
            </Wrapper>
        </>
    );
};

export default Home;