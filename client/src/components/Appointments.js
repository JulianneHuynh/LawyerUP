import AppointmentCard from "./AppointmentCard";

function Appointments() {

    let appointments = [
        {
            "profile_picture": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/9166/square_thumb%402x.jpg",
            "name": "Idris Elba",
            "date": "2023-02-22",
            "time": "4:30 PM",
            "location": "Zoom"
        }
    ];

    const renderAppointmentCards = appointments.map((appointment, i) => {
        return (
            <AppointmentCard
                key={i}
                image={appointment.profile_picture}
                name={appointment.name}
                date={appointment.date}
                time={appointment.time}
                location={appointment.location}
            />
        );
    });

    return (
        <>
            {renderAppointmentCards}
        </>
    )
};

export default Appointments; 