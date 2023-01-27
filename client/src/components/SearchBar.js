import { useState } from "react";

import Form from "react-bootstrap/Form";
import { ReactComponent as MagnifyingGlass } from "../assets/magnifying-glass.svg";

function SearchBar(
    {
        apiKey,
        setPos
    }
) {

    const [searchValue, setSearchValue] = useState("");

    function handleClick(e) {
        e.preventDefault();

        let forURL = searchValue.split(" ");
        let formatted = forURL.join("+");
        
        fetchCoords(formatted);
    };

    function fetchCoords(formatted) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formatted}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => setPos(data["results"][0]["geometry"]["location"]))
    };

    return (
        <div id="search-container">
            <Form
                onSubmit={(e) => handleClick(e)}
            >
                <Form.Control 
                    id="search-bar" 
                    type="search" 
                    placeholder="Search for lawyers by location" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </Form>
            <MagnifyingGlass id="search-button" onClick={(e) => handleClick(e)}/>
        </div>
    );
};

export default SearchBar;