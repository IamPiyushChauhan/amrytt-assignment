import React from 'react';

function Table({ data }) {
  return (
    <table className='profile-table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Profile Image</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Hobbies</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.firstname}</td>
            <td>{row.lastName}</td>
            <td><img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px' }} /></td>
            <td>{row.age}</td>
            <td>{row.gender}</td>
            <td>{row.hobbies}</td>
            <td>{row.country}</td>
            <td>{row.state}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
