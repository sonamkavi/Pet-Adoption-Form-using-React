import React from 'react';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Adopter's Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.petName}</td>
            <td>{item.petType}</td>
            <td>{item.breed}</td>
            <td>{item.adopterName}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
