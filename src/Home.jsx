import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { remove, updateRecord, editChange } from './redux/slices/todoSlice';
import './Home.css'; // Import the CSS file

function Home() {
    // Retrieve the list of tasks from the Redux store
    const data = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch();

    // Handle deleting a user
    const handleDelete = (id) => {
        dispatch(remove(id));
    }

    // Handle updating a user
    const handleUpdate = (id, name, email) => {
        dispatch(updateRecord({ id, name, email }));
        dispatch(editChange(true));
    }

    return (
        <div className="home-container">
            <div className="header">
                <Link to='/form'>
                    <button className="create-button">Create+</button>
                </Link>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>
                                <div className="button-group">
                                    <Link to='/form'>
                                        <button className="edit-button" onClick={() => handleUpdate(user.id, user.Name, user.Email)}>Edit</button>
                                    </Link>
                                    <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
