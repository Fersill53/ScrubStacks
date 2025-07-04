import { useEffect, useState } from "react";
import axios from "axios";
import EditCardForm from "./EditCardForm";

function EditCards() {
    const [cards, setCards] = useState([]);

    const fetchCards = () => {
        axios.get('http://localhost:5000/api/cards')
        .then(res => setCards(res.data))
        .catch(err => console.error('Error:', err));
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/cards/${id}`);
            fetchCards();
        } catch (err) {
            console.error('Error deleting card:', err);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Edit / Delete Prefernce Cards</h2>
            {cards.map(card => (
                <div key={card._id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                    <EditCardForm card={card} onCancel={() => {}} onCardUpdated={fetchCards} />
                    <button onClick={() => handleDelete(card._id)} style={{ marginTop: '5px' }}>Delete</button>
                </div>
            ))}
        </div>
    );
}