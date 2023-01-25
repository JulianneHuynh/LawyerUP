import { useState, useRef, useEffect } from "react";

function Map(
    {
        pos
    }
) {
    
    const ref = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (ref.current && !map && pos !== undefined) {

            setMap(new window.google.maps.Map(ref.current, {
                zoom: 12,
                center: pos
            }));
        };
    });

    return (
        <>
            <div id="google-map" ref={ref}/>
        </>
    );
};

export default Map;