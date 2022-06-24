import {
    useParams
} from "react-router-dom";

export default function EventDetail() {
    let { eventId } = useParams();

    return (
        <h1 style={{textAlign: 'center'}}>Evento {eventId}</h1>
    )
}