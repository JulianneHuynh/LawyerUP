import { useState, useRef, useEffect } from "react";
import Marker from "./Marker";

function Map(
    {
        pos,
        setMap,
        map
    }
) {

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && pos !== undefined) {

            setMap(new window.google.maps.Map(ref.current, {
                zoom: 12,
                center: pos
            }));
        };

    }, [pos]);

    return (
        <>
            <div id="google-map" ref={ref}/>
            <Marker 
                map={map}
            />
        </>
    );
};

export default Map;