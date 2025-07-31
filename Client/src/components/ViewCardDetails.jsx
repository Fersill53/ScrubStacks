//ViewCardDetails.jsx -- this the newly added stuff in case this goes to shit

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageContainer.css'
//will create a new css file named viewcarddetails.css

function ViewCardDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://scrubstacks.onrender.com/api/cards/${id}`)
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

            <section>
                <h2>General Information</h2>
                <p><strong>Surgeon:</strong> {card.surgeonName}</p>
                <p><strong>Specialty:</strong>[placeholder]</p>
                <p><strong>Procedure:</strong>{card.procedure}</p>
                <p><strong>Procedure Code:?</strong>[not sure if keeping this placeholder]</p>
                <p><strong>Anesthesia Type:</strong>[placeholder]</p>
                <p><strong>Case Duration:</strong>[placeholder]</p>
                <p><strong>Positioning:</strong>[placeholder]</p>
                <p><strong>Positioning Aids Needed:</strong>[placeholder]</p>
            </section>

            <section>
                <h2>Room Setup</h2>
                <p><strong>Room #:</strong>[placeholder]</p>
                <p><strong>Table:</strong>[placeholder]</p>
                <p><strong>Bed Orientation:</strong>[placeholder]</p>
                <p><strong>Special Equipment:</strong>[placeholder]</p>
            </section>

            <section>
                <h2>Patient Prep</h2>
                <p><strong>Prep Area:</strong>[placeholder]</p>
                <p><strong>Prep Solution:</strong>[placeholder]</p>
                <p><strong>Hair Removal:</strong>[placeholder]</p>
                <p><strong>Catheter:</strong>[placeholder]</p>
                <p><strong>DVT Prophylaxis:</strong></p>
            </section>

            <section>
                <h2>Drapes</h2>
                <ul>
                    <li>☐ Basic setup</li>
                    <li>☐ Laparotomy pack</li>
                    <li>☐ Arthroscopy Drape</li>
                    <li>☐ Extremity Drape</li>
                    <li>☐ Urology Drape</li>
                    <li>☐ Microscope Drape</li>
                </ul>
                <p><strong>Custom Draping Instructions</strong></p>
                <p>[placeholder]</p>
            </section>

            <section>
                <h2>Instruments</h2>
                {card.instruments?.length > 0 ? (
                    <table>
                        <thead>
                            <tr><th>Qty</th><th>Instrument Name</th><th>Notes</th></tr>
                        </thead>
                        <tbody>
                            {card.instruments.map((item, index) => (
                                <tr key={index}>
                                    <td>1</td>
                                    <td>{item}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p>No Instruments listed.</p>}
            </section>

            <section>
                <h2>Implants / Devices / Reps</h2>
                <p><strong>Vendor(s):</strong>[placeholder]</p>
                <p><strong>Implant(s):</strong>[placeholder]</p>
                <p><strong>Rep Name/Phone:</strong>[placeholder]</p>
                <p>Rep requried in room:</p>
            </section>

            <section>
                <h2>Supplies | Consumables</h2>
                <table>
                    <thead><tr><th>Qty</th><th>Item Name</th><th>Size / Notes</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>[Placeholder]</td><td></td></tr>
                        <tr><td>1</td><td>[Placeholder]</td><td></td></tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Medications</h2>
                <table>
                    <thead><tr><th>Drug Name</th><th>Dose</th><th>Route</th><th>Notes</th></tr></thead>
                    <tbody>
                        <tr><td>[Placeholder]</td><td></td><td></td><td></td></tr>
                        <tr><td>[Placeholder]</td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Suture</h2>
                <table>
                    <thead><tr><th>Type</th><th>Size</th><th>Needle</th><th>Use</th></tr></thead>
                    <tbody>
                        <tr><td>[Placeholder]</td><td></td><td></td><td></td></tr>
                        <tr><td>[Placeholder]</td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Closing Preferences</h2>
                <p><strong>Fascia:</strong>[Placeholder]</p>
                <p><strong>Subcuticular:</strong>[Placeholder]</p>
                <p><strong>Skin Closure:</strong> Staples  Dermabond  Nylon  Other</p>
            </section>

            <section>
                <h2>Notes / Special Instructions</h2>
                <p>{card.notes || '[None]'}</p>
            </section>
            
            
            <p><strong>Instruments:</strong>{card.instruments.join(', ')}</p>
            <p><strong>Notes:</strong>{card.notes || 'none'}</p>
            <button onClick={() => navigate('/view')}>Back to Cards</button>
        </div>
    );
}

export default ViewCardDetails;