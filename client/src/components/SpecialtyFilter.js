import Form from "react-bootstrap/Form";

function SpecialtyFilter() {

    return (
        <div id="filter-container">
            <Form id="filter-switches">

                <Form.Check 
                    type="switch"
                    id="criminal-switch"
                    label="Criminal Law"
                />

                <Form.Check
                    type="switch"
                    id="family-switch"
                    label="Family Law"
                />

                <Form.Check
                    type="switch"
                    id="immigration-switch"
                    label="Immigration Law"
                />

                <Form.Check
                    type="switch"
                    id="real-estate-switch"
                    label="Real Estate Law"
                />

                <Form.Check
                    type="switch"
                    id="tax-switch"
                    label="Tax Law"
                />

            </Form>
        </div>
    );
};

export default SpecialtyFilter;