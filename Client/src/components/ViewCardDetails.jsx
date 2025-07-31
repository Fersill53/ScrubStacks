//ViewCardDetails.jsx -- this the newly added stuff in case this goes to shit

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageContainer.css'

function ViewCardDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://scrubstacks.onrender.com/api/cards/${id}')
        .then(res => {
            setCard(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching card: ', err);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="fullPage"><p>Loading...</p></div>;
    if (!card) return <div className="fullPage"><p>Card not found.</p></div>;

    return (
        <div className="fullPage">
            <h1>Full Preference Card</h1>
            <p><strong>Surgeon:</strong> {card.surgeonName}</p>
            <p><strong>Procedure:</strong>{card.procedure}</p>
            <p><strong>Instruments:</strong>{card.instruments.join(', ')}</p>
            <p><strong>Notes:</strong>{card.notes || 'none'}</p>
            <button onClick={() => navigate('/view')}>Back to Cards</button>
        </div>
    );
}

export default ViewCardDetails;