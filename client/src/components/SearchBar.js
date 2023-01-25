import Form from "react-bootstrap/Form";

function SearchBar() {

    return (
        <>
        <Form id="search-bar">
            <Form.Control type="search" placeholder="Search for lawyers by location"/>
        </Form>
        </>
    );
};

export default SearchBar;