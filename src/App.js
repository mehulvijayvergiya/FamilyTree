import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FamilyMemberList from './components/FamilyMemberList'; 
import AddMemberPage from './components/AddMemberPage'; 

function App() {
  const [members, setMembers] = useState([]);

  // Fetch data from the backend when the component is mounted
  useEffect(() => {
    axios.get('http://localhost:5000/members')
      .then((response) => {
        setMembers(response.data); // Set the family members to state
      })
      .catch((error) => {
        console.error('Error fetching members:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Family Tree</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/add-member">Add Member</Link>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={<FamilyMemberList members={members} />} 
          />
          <Route 
            path="/add-member" 
            element={<AddMemberPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
