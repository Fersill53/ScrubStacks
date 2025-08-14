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
 // const [procedure, setProcedure] = useState('');

  // Editable fields
  /*const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState(''); */

  useEffect(() => {
    axios.get(`https://scrubstacks.onrender.com/api/cards/${id}`)
      .then(res => {
        setCard(res.data);
        /*setProcedure(res.data.procedure);
        setInstruments(res.data.instruments.join(', '));
        setNotes(res.data.notes || '');*/
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching card:', err);
        setLoading(false);
      });
  }, [id]);

  const handleSave = async () => {
    try {

        const res = await axios.put(`https://scrubstacks.com.onrender.com/api/cards/${id}`)
        setCard(res.data);
        setEditMode(false);
      /*const updated = { ...card };
        ...card,
        procedure,
        instruments: instruments.split(',').map(i => i.trim()),
        notes 
      };
      const res = await axios.put(`https://scrubstacks.onrender.com/api/cards/${id}`, updated);
      setCard(res.data);
      setEditMode(false);
    } catch (err) {
      console.error('Error updating card:', err);*/
    } catch (err) {
        console.error('Error updating card;', err)
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
                value={card.surgeonName || ''}
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
          <input 
            type='text'
            value={card.procedure || ''} 
            onChange={e => setCard(e.target.value)} />
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
                onChange={(e) => setCard({ ...card, roomType: e.target.value })}
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
        <h2>Patient Preparation</h2>

        <p><strong>Prep Area:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.prepArea || ''}
                onChange={(e) => setCard({ ...card, prepArea: e.target.value})}
            />
        ) : (
            <p>{card.prepArea || 'N/A'}</p>
        )}

        <p><strong>Prep Solution:</strong></p>
        {editMode ? (
            <div>
                {['Chloraprep', 'Betadine', 'Hibiclens', 'Alcohol'].map((solution) => 
                    <label key={solution} style={{display: 'block'}}>
                        <input
                            type='radio'
                            name='prepSolution'
                            checked={card.prepSolution === solution}
                            onChange={() => setCard({ ...card, prepSolution: solution})}
                        />
                        {solution}
                </label>
            )}
            </div>
        ) : (
            <p>{card.prepSolution || 'N/A'}</p>
        )}

        <p><strong>Hair Removal:</strong></p>
        {editMode ? (
            <div>
                {['Clippers', 'Razor', 'None'].map((option) => (
                    <label key={option} style={{ display: 'block' }}>
                        <input 
                            type='radio'
                            name='hairRemoval'
                            value={option}
                            checked={card.hairRemoval === option}
                            onChange={() => setCard({ ...card, hairRemoval: option })}
                            />
                            {option}
                    </label>
                ))}
            </div>
        ) : (
            <p>{card.hairRemoval || 'N/A'}</p>
        )}

        <p><strong>Catheter:</strong></p>
        {editMode ? (
            <div>
                {['Foley', 'None'].map((catheter) =>
                <label key={catheter} style={{display: 'block' }}>
                    <input
                        type='radio'
                        name='catheter'
                        value={catheter}
                        checked={card.catheter === catheter}
                        onChange={() => setCard({ ...card, catheter: catheter })}
                        />
                        {catheter}
                </label>
                )}
            </div>
        ) : (
            <p>{card.catheter || 'N/A'}</p>
        )}

        <p><strong>DVT Prophylaxis:</strong></p>
        {editMode ? (
            <div>
                {['SCDs', 'Heparin', 'None'].map((item) => (
                    <label key={item} style={{ display: 'block' }}>
                        <input
                            type='checkbox'
                            checked={card.dvtProphylaxis?.includes(item) || false}
                            onChange={(e) => {
                                const set = new Set(card.dvtProphylaxis || []);
                                e.target.checked ? set.add(item) : set.delete(item);
                                setCard({ ...card, dvtProphylaxis: [ ...set] });
                            }}
                            />
                             {item}
                    </label>
                ))}
            </div>
        ) : (
            <ul>
                {(card.dvtProphylaxis || []).map((item, i) => <li key={item}></li>)}
                {!card.dvtProphylaxis?.length && <li>N/A</li>}
            </ul>
        )}

      </section>

      <section>
        <h2>Drapes & Covers</h2>

        <p><strong>Standard Drapes:</strong></p>
        {editMode ? (
            <textarea
                value={(card.drapes || []).join('\n')}
                onChange={(e) =>
                    setCard({ ...card, drapes: e.target.value.split('\n').map(d => d.trim()).filter(Boolean) })
                }
                />
        ) : (
            <ul>
                {(card.drapes || []).map((d, i) => <li key={i}>{d}</li>)}
                {!card.drapes?.length && <li>N/A</li>}
            </ul>
        )}

        <p><strong>Custom Draping Instructions:</strong></p>
        {editMode ? (
            <textarea 
                rows={3}
                value={card.customDrapeInstructions || ''}
                onChange={(e) => 
                    setCard({ ...card, customDrapeInstructions : e.target.value })
                }
                />
        ) : (
            <p>{card.customDrapeInstructions || 'None'}</p>
        )}

      </section>

      <section>
        <h2>Instruments</h2>
        {editMode ? (
            <table>
                <thead>
                    <tr>
                        <th>Instrument / Set Name</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {(card.instrumentsDetailed || []).map((inst, i) => (
                        <tr key={i}>
                            <td>
                                <input
                                    type='number'
                                    value={inst.qty}
                                    onChange={(e) => {
                                        const updated = [...card.instrumentsDetailed];
                                        updated[i].qty = e.target.value;
                                        setCard({ ...card, instrumentsDetailed: updated });
                                    }}
                                    />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    value={inst.name}
                                    onChange={(e) => {
                                        const updated = [...card.instrumentsDetailed];
                                        updated[i].name = e.target.value;
                                        setCard({ ...card, instrumentsDetailed: updated });
                                    }}
                                    />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    value={inst.notes}
                                    onChange={(e) => {
                                        const updated = [...card.instrumentsDetailed];
                                        updated[i].notes = e.target.value;
                                        setCard({ ...card, instrumentsDetailed: updated });
                                    }}
                                    />
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        const updated = [...card.instrumentsDetailed];
                                        updated.splice(i, 1);
                                        setCard({ ...card, instrumentsDetailed: updated })
                                    }}
                                    >
                                       🗑️ 
                                    </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan='4'>
                            <button 
                                onClick={() => 
                                    setCard({
                                        ...card,
                                        instrumentsDetailed: [
                                            ...(card.instrumentsDetailed || []),
                                            { qty: '', name: '', notes: '' }
                                        ]
                                    })
                                }
                                
                                >
                                    ➕ Add Instrument
                                </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        ) : (
            (card.instrumentsDetailed?.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Instrument/Set Name</th>
                            <th>Notes:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {card.instrumentsDetailed.map((inst, i) => (
                            <tr key={i}>
                                <td>{inst.qty}</td>
                                <td>{inst.name}</td>
                                <td>{inst.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Detailed Instruments Listed</p>
            ))
        )}
      </section>

      <section>
        <h2>Implants / Devices / Reps</h2>
        {editMode ? (
            <>
                <p>
                    <strong>Vendor(s): </strong>
                    <input
                        type='text'
                        value={card.vendors || ''}
                        onChange={(e) => setCard({ ...card, implants: e.target.value })}
                        />
                </p>
                <p>
                    <strong>Implant(s): </strong>
                    <input
                        type='text'
                        value={card.implants || ''}
                        onChange={(e) => setCard({ ...card, implants: e.target.value })}
                        />
                </p>
                <p>
                    <strong>Rep Name/Phone: </strong>
                    <input
                        type='text'
                        value={card.repContact || ''}
                        onChange={(e) => setCard({ ...card, repContact: e.target.value })}
                        />
                </p>
                
                    <label>
                        <input
                            type='checkbox'
                            checked={card.repRequired || false}
                            onChange={(e) => setCard({ ...card, repRequired: e.target.checked })}
                            />
                            Rep Required In-Room
                    </label>
            </>
        ) : (
            <>
                <p><strong>Vendor(s):</strong> {card.vendors || 'None listed'}</p>
                <p><strong>Implant(s):</strong> {card.implants || 'None listed'}</p>
                <p><strong>Rep Name/Phone:</strong> {card.repContact || 'N/A'}</p>
                <p><strong>Rep Required In-Room:</strong> {card.repRequired ? 'Yes' : 'No'}</p>
            </>
        )}
      </section>

      <section>
        <h2>Supplies</h2>

        {editMode ? (
            <>
                {[
                    'Bovie Pencil',
                    'Suction Tubing',
                    'ESU pad',
                    'Light Handle Covers',
                    'Stapler',
                    'Suture Passer',
                ].map((item) => (
                    <label key={item} style={{ display: 'block'}}>
                        <input
                            type='checkbox'
                            checked={card.supplies?.includes(item) || false}
                            onChange={(e) => {
                                const current = new Set(card.supplies || []);
                                e.target.checked ? current.add(item) : current.delete(item);
                                setCard({ ...card, supplies: [...current] });
                            }}
                            />
                            {item}
                    </label>
                ))}
                <label>
                    <strong>Other:</strong>
                    <input
                        type='text'
                        value={card.suppliesOther || ''}
                        onChange={(e) => setCard({ ...card, suppliesOther: e.target.value })}
                        />
                </label>
            </>
        ) : (
            <ul>
                {(card.supplies || []).map((item, i) => <li key={i}>item</li>)}
                {card.suppliesOther && <li>Other: {card.suppliesOther}</li>}
                {!card.supplies?.length && !card.suppliesOther && <li>N/A</li>}
            </ul>
        )}

      </section>

      <section>
        <h2>Medications</h2>
        {editMode ? (
            <>
                {[
                    'Local Anesthetic',
                    'Epinephrine',
                    'Heparin',
                    'Antibiotics',
                    'Steroids',
                    'Contrast Dye',
                ].map((med) => (
                    <label key={med} style={{ display: 'block'}}>
                        <input
                            type='checkbox'
                            checked={card.medications?.includes(med) || false}
                            onChange={(e) => {
                                const current = new Set(card.medications || []);
                                e.target.checked ? current.add(med) : current.delete(med);
                                setCard({ ...card, medications: [...current] });
                            }}
                            />
                            {med}
                    </label>
                ))}
                <label>
                    <strong>Other:</strong>
                    <input
                        type='text'
                        value={card.medicationsOther || ''}
                        onChange={(e) => setCard({ ...card, medicationsOther: e.target.value })}
                        />
                </label>
            </>
        ) : (
            <ul>
                {(card.medications || []).map((med, i) => <li key={i}>{med}</li>)}
                {card.medicationsOther && <li>Other: {card.medicationsOther}</li>}
                {!card.medications?.length && !card.medicationsOther && <li>N/A</li>}
            </ul>
        )}
      </section>

      <section>
        <h2>Sutures</h2>

        {editMode ? (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(card.sutures || []).map((suture, i) => (
                            <tr key={i}>
                                <td>
                                    <input
                                        type='text'
                                        value={suture.size}
                                        onChange={(e) => {
                                            const updated = [...card.sutures];
                                            updated[i].size = e.target.value;
                                            setCard({ ...card, sutures: updated });
                                        }}
                                        />
                                </td>
                                <td>
                                    <input
                                        type='text'
                                        value={suture.type}
                                        onChange={(e) => {
                                            const updated = [...card.sutures];
                                            updated[i].type = e.target.value;
                                            setCard({ ...card, sutures: updated });
                                        }}
                                        />
                                </td>
                                <td>
                                    <input
                                        type='number'
                                        min='1'
                                        value={suture.quantity}
                                        onChange={(e) => {
                                            const updated = [...card.sutures];
                                            updated[i].quantity = parseInt(e.target.value, 10);
                                            setCard({ ...card, sutures: updated });
                                        }}
                                        />
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            const updated = [...card.sutures];
                                            updated.splice(i, 1);
                                            setCard({ ...card, sutures: updated })
                                        }}
                                        >
                                            🗑️
                                        </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan='4'>
                                <button
                                    onClick={() =>
                                        setCard({
                                            ...card,
                                            sutures: [
                                                ...(card.sutures || []),
                                                { size: '', type: '', quantity: 1 }
                                            ]
                                        })
                                    }
                                    >
                                        ➕ Add Suture
                                    </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        ) : (
            <>
                {(card.sutures?.length > 0) ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Type</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {card.sutures.map((suture, i) => (
                                <tr key={i}>
                                    <td>{suture.size}</td>
                                    <td>{suture.type}</td>
                                    <td>{suture.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No Sutures Listed</p>
                )}
            </>
        )}
      </section>

      <section>
        <h2>Closing Preferences</h2>

        <p><strong>Suture Type:</strong></p>
        {editMode ? (
            <input
                type='text'
                value={card.closingPreferences?.sutureType || ''}
                onChange={(e) => 
                    setCard({
                        ...card,
                        closingPreferences: {
                            ...card.closingPreferences,
                            sutureType: e.target.value
                        }
                    })
                }
                />
        ) : (
            <p>{card.closingPreferences?.sutureType || 'N/A'}</p>
        )}

        <p><strong>Closure Technique:</strong></p>
        {editMode ? (
            <input 
                type='text'
                value={card.closingPreferences?.closureTechnique || ''}
                onChange={(e) => 
                    setCard({
                        ...card,
                        closingPreferences: {
                            ...card.closingPreferences,
                            closureTechnique: e.target.value
                        }
                    })
                }
                />
        ) : (
            <p>{card.closingPreferences?.closureTechnique || 'N/A'}</p>
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
