function LawyerProfile({
    selectedLawyer
}) {
    
    console.log(selectedLawyer);

    return (
        <>
            <button onClick={() => console.log(selectedLawyer)}>Book Appointment</button>
        </>
    )
};

export default LawyerProfile;