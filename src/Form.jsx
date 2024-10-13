import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { add, incrementCounter, update, editChange } from './redux/slices/todoSlice';
import './Form.css'; // Import the CSS file for styling

function Form() {
    const [id, setId] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');

    const dispatch = useDispatch();
    const idcounter = useSelector((state) => state.todo.counter);
    const editStatus = useSelector((state) => state.todo.isEditable);
    const personRecord = useSelector((state) => state.todo.record);

    useEffect(() => {
        if (editStatus) {
            setId(personRecord.id);
            setName(personRecord.name);
            setEmail(personRecord.email);
        } else {
            setId('');
            setName('');
            setEmail('');
        }
    }, [editStatus]);

    const sendToHome = () => {
        if (editStatus) {
            dispatch(update({ id, Name, Email }));
            dispatch(editChange(false));
        } else {
            const newid = idcounter + 1;
            const newtask = {
                id: newid,
                Name,
                Email
            };
            dispatch(add(newtask));
            dispatch(incrementCounter());
        }
        setId('');
        setName('');
        setEmail('');
    };

    const handleText = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleKeyPress = (event)=>{
      if(event.key === 'Enter')
      {
        sendToHome();
      }
    }
    

    return (
        <div className="form-container">
            <p className="form-header">{editStatus ? 'Edit User' : 'Add New User'}</p>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" value={Name} onChange={handleText} />
            </div>
            <div className="form-group">
                <label>E-Mail:</label>
                <input type="text" value={Email} onChange={handleEmail} />
            </div>
            <div className="submit-button-container">
                <Link to="/">
                    <button className="submit-button" onClick={sendToHome} onKeyDown={handleKeyPress}>Submit</button>
                </Link>
            </div>
        </div>
    );
}

export default Form;
