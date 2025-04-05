import React, { useState } from 'react';
import axios from 'axios';

function AddFamilyMember() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [parents, setParents] = useState('');
  const [siblings, setSiblings] = useState('');
  const [children, setChildren] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the JSON object to send to the backend
    const data = {
      name,
      dateOfBirth,
      parents: parents.split(',').map(id => id.trim()), // Parse parent ObjectIds
      siblings: siblings.split(',').map(id => id.trim()), // Parse sibling ObjectIds
      children: children.split(',').map(id => id.trim()), // Parse children ObjectIds
    };

    try {
      await axios.post('http://localhost:5000/members', data);
      alert('Family Member added successfully!');
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Failed to add family member.');
    }
  };

  return (
    <div>
      <h1>Add Family Member</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Parent IDs (comma separated)"
          value={parents}
          onChange={(e) => setParents(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sibling IDs (comma separated)"
          value={siblings}
          onChange={(e) => setSiblings(e.target.value)}
        />
        <input
          type="text"
          placeholder="Child IDs (comma separated)"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddFamilyMember;
