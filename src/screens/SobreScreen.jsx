import { useParams } from "react-router-dom"

export default function SobreScreen() {
    const { contactId } = useParams();

    return (
        <div className="container">
            <h1>Página sobre {(contactId) ? contactId : "nao"}</h1>
        </div>
    )
}

