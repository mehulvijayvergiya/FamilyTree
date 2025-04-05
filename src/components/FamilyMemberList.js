import React, { useState, useEffect } from 'react';

const FamilyMemberList = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/members')
      .then((response) => response.json())
      .then((data) => {
        setFamilyMembers(data); // Populate state with family member data
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        setError('Failed to fetch family members');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading family members...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Family Members</h2>
      {familyMembers.length > 0 ? (
        <ul>
          {familyMembers.map((member) => (
            <li key={member._id}>
              <h3>{member.name}</h3>
              <p>Date of Birth: {new Date(member.dateOfBirth).toLocaleDateString()}</p>
              {/* Add other member details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No family members available.</p>
      )}
    </div>
  );
};

export default FamilyMemberList;
