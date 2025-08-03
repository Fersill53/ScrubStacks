//ViewCardDetails.jsx -- this the newly added stuff in case this goes to shit

/*import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageContainer.css'
//will create a new css file named viewcarddetails.css
import './ViewCardDetails.css'

function ViewCardDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);

    //Editable Fields
    const [procedure, setProcedure] = useState('');
    const [instruments, setInstruments] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        axios.get(`https://scrubstacks.onrender.com/api/cards/${id}`)
        .then(res => {
            setCard(res.data);
            setProcedure(res.data.procedure);
            setInstruments(res.data.instruments.join(', '));
            setNotes(res.data.notes || '');
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching card: ', err);
            setLoading(false);
        });
    }, [id]);

    const handleSave = async () => {
        try {
            const updated = {
                ...card,
                procedure,
                instruments: instruments.split(',').map(i => i.trim()),
                notes
            };
            const res = await axios.put(`https://scrubstacks.onrender.com/api/cards/${id}`, updated);
            setCard(res.data);
            setEditMode(false);
        } catch (err) {
            console.error('Error updating card:', err);
        }
    };

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

export default ViewCardDetails; */

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageContainer.css';
import './ViewCardDetails.css';

function ViewCardDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  // Editable fields
  const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios.get(`https://scrubstacks.onrender.com/api/cards/${id}`)
      .then(res => {
        setCard(res.data);
        setProcedure(res.data.procedure);
        setInstruments(res.data.instruments.join(', '));
        setNotes(res.data.notes || '');
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching card:', err);
        setLoading(false);
      });
  }, [id]);

  const handleSave = async () => {
    try {
      const updated = {
        ...card,
        procedure,
        instruments: instruments.split(',').map(i => i.trim()),
        notes
      };
      const res = await axios.put(`https://scrubstacks.onrender.com/api/cards/${id}`, updated);
      setCard(res.data);
      setEditMode(false);
    } catch (err) {
      console.error('Error updating card:', err);
    }
  };

  if (loading) return <div className="fullPage"><p>Loading...</p></div>;
  if (!card) return <div className="fullPage"><p>Card not found.</p></div>;

  return (
    <div className="fullPage">
      <h1>🩺 Full Preference Card</h1>

      <section>
        <h2>General Information</h2>
        <p><strong>Surgeon Name:</strong></p> 
        {editMode ? (
            <input
                type='text'
                value={card.surgeonName}
                onChange={(e) => setCard({ ...card, surgeonName: e.target.value })} />
        ) : (
            <p>{card.surgeonName}</p>
        )}

        <p><strong>Specialty</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.specialty || ''}
                onChange={(e) => setCard({ ...card, specialty: e.target.value })} />
        ) : (
            <p>{card.specialty || 'N/A'}</p>
        )}

        <p><strong>Procedure:</strong></p>
        {editMode ? (
          <input value={procedure} onChange={e => setProcedure(e.target.value)} />
        ) : (
          <p>{card.procedure}</p>
        )}

        <p><strong>Procedure Code (CPT/ICD-10):</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.procedureCode || ''}
                onChange={(e) => setCard({ ...card, procedureCode: e.target.value })}
                />
        ) : (
            <p>{card.procedureCode || 'N/A'}</p>
        )}

        <p><strong>Surgical Service Line:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.serviceLine || ''}
                onChange={(e) => setCard({ ...card, serviceLine: e.target.value })}
                />
        ) : (
            <p>{card.serviceLine || 'N/A'}</p>
        )}

        <p><strong>Anesthesia Type:</strong></p>
        {editMode ? (
            <select
                value={card.anesthesiaType || ''}
                onChange={(e) => setCard({ ...card, anesthesiaType: e.target.value })}
                >
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="Regional">Regional</option>
                    <option value="Local">Local</option>
                    <option value="MAC">MAC</option>
                </select>
        ) : (
            <p>{card.anesthesiaType || 'N/A'}</p>
        )}
        
        <p><strong>Estimated Case Duration:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.caseDuration || ''}
                onChange={(e) => setCard({ ...card, caseDuration: e.target.value })}
                />
        ) : (
            <p>{card.caseDuration || 'N/A'}</p>
        )}

        <p><strong>Postitioning</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.positioning || ''}
                onChange={(e) => setCard({ ...card, positioning: e.target.value })}
                />
        ) : (
            <p>{card.positioning || 'N/A'}</p>
        )}

        <p><strong>Positioning Aids Needed:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.positioningAids || ''}
                onChange={(e) => setCard({ ...card, positioningAids: e.target.value })}
                />
        ) : (
            <p>{card.positioningAids || 'N/A'}</p>
        )}

      </section>

      <section>
        <h2>Room Setup</h2>

        <p><strong>Room Type / Size:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.roomType || ''}
                onChange={(e) => setCard({ ..card, roomType: e.target.value })}
                />
        ) : (
            <p>{card.roomType || 'N//A'}</p>
        )}

        <p><strong>Table Type</strong></p>
        {editMode ? (
            <select
                value={card.tableType || ''}
                onChange={(e) => setCard({ ...card, tableType: e.target.value })}
                >
                    <option value="">Select</option>
                    <option value="Standard">Standard</option>
                    <option value="Jackson">Jackson</option>
                    <option value="Specialty">Specialty</option>
                </select>
        ) : (
            <p>{card.tableType || 'N/A'}</p>
        )}

        {editMode && card.tableType === 'Specialty' && (
            <>
                <p><strong>Specialty Table Name:</strong></p>
                <input 
                    type='text'
                    value={card.specialtyTable || ''}
                    onChange={(e) => setCard({ ...card, specialtyTable: e.target.value })}
                />
                </>
        )}

        <p><strong>Bed Orientation:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.bedOrientation || ''}
                onChange={(e) => setCard({ ...card, bedOrientation: e.target.value })}
                />
        ) : (
            <p>{card.bedOrientation || 'N/A'}</p>
        )}

        <p><strong>Special Equipment:</strong></p>
        {editMode ? (
            <div>
                {['C-Arm', 'Tourniquet', 'Arthroscopy Tower', 'Microscope'].map((item) => (
                <label key={item} style={{ display: 'block' }}>
                <input
                type="checkbox"
                checked={card.specialEquipment?.includes(item) || false}
                onChange={(e) => {
                    const equipment = new Set(card.specialEquipment || []);
                    e.target.checked ? equipment.add(item) : equipment.delete(item);
                    setCard({ ...card, specialEquipment: [...equipment] });
                    }}
                />
                {item}
            </label>
         ))}
        <label>
            <strong>Other:</strong>
            <input
                type="text"
                value={card.specialEquipmentOther || ''}
                onChange={(e) => setCard({ ...card, specialEquipmentOther: e.target.value })}
            />
      </label>
    </div>
  ) : (
    <ul>
      {(card.specialEquipment || []).map((item, i) => <li key={i}>{item}</li>)}
      {card.specialEquipmentOther && <li>Other: {card.specialEquipmentOther}</li>}
      {!card.specialEquipment?.length && !card.specialEquipmentOther && <li>N/A</li>}
    </ul>
  )}
        
      </section>

      <section>
        <h2>Instruments</h2>
        {editMode ? (
          <textarea
            value={instruments}
            onChange={e => setInstruments(e.target.value)}
            rows={4}
          />
        ) : (
          <ul>
            {card.instruments.map((inst, i) => <li key={i}>{inst}</li>)}
          </ul>
        )}
      </section>

      <section>
        <h2>Notes / Special Instructions</h2>
        {editMode ? (
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={4}
          />
        ) : (
          <p>{card.notes || 'None'}</p>
        )}
      </section>

      <div style={{ marginTop: '1rem' }}>
        {editMode ? (
          <>
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditMode(true)}>✏️ Edit This Card</button>
        )}
        <button onClick={() => navigate('/view')} style={{ marginLeft: '1rem' }}>Back to Quick View</button>
      </div>
    </div>
  );
}

export default ViewCardDetails;

// only allows edits to procedure, Instruments, and notes
//want to take away comma separated for inst